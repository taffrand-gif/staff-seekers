import { useState, useEffect } from 'react';
import { ACTIVE_CONFIG } from '../../../shared/serviceConfig';

interface GeolocationResult {
  city: string | null;
  isLoading: boolean;
  error: string | null;
}

// Liste des villes couvertes par district
const COVERED_CITIES = [
  'Bragança', 'Mirandela', 'Macedo de Cavaleiros', 'Vinhais', 'Mogadouro',
  'Alfândega da Fé', 'Carrazeda de Ansiães', 'Freixo de Espada à Cinta',
  'Miranda do Douro', 'Torre de Moncorvo', 'Vila Flor', 'Vimioso'
];

// Normaliser nom de ville pour URL
function normalizeCity(city: string): string {
  if (!city) return '';
  return (typeof city === 'string' ? city : String(city))
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/\s+/g, '-');
}

// Trouver ville la plus proche dans la liste
function findClosestCity(detectedCity: string | undefined | null): string | null {
  if (!detectedCity) return 'Bragança';
  
  const normalized = typeof detectedCity === 'string' ? detectedCity.toLowerCase() : String(detectedCity).toLowerCase();
  
  // Recherche exacte
  const exact = COVERED_CITIES.find(city => 
    city.toLowerCase() === normalized
  );
  if (exact) return exact;
  
  // Recherche partielle
  const partial = COVERED_CITIES.find(city =>
    city.toLowerCase().includes(normalized) || normalized.includes(city.toLowerCase())
  );
  if (partial) return partial;
  
  // Par défaut: Bragança (capitale du district)
  return 'Bragança';
}

export function useGeolocation(): GeolocationResult {
  const [city, setCity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Vérifier si déjà détecté (localStorage)
    const cached = localStorage.getItem('detected_city');
    if (cached) {
      setCity(cached);
      setIsLoading(false);
      return;
    }

    // Méthode 1: Géolocalisation GPS (plus précis mais nécessite permission)
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            // Utiliser Nominatim (OpenStreetMap) pour reverse geocoding
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?` +
              `lat=${position.coords.latitude}&` +
              `lon=${position.coords.longitude}&` +
              `format=json&` +
              `accept-language=pt`
            );
            
            const data = await response.json();
            const detectedCity = data.address?.city || data.address?.town || data.address?.village;
            
            if (detectedCity) {
              const matchedCity = findClosestCity(detectedCity);
              if (matchedCity) {
                setCity(matchedCity);
                localStorage.setItem('detected_city', matchedCity);
              }
            }
          } catch (err) {
            console.error('Geocoding error:', err);
            // Fallback to IP-based detection
            detectCityByIP();
          } finally {
            setIsLoading(false);
          }
        },
        () => {
          // Permission refusée ou erreur GPS → fallback IP
          detectCityByIP();
        },
        {
          timeout: 5000,
          maximumAge: 3600000, // Cache 1h
        }
      );
    } else {
      // Pas de support géolocalisation → fallback IP
      detectCityByIP();
    }

    async function detectCityByIP() {
      try {
        // Utiliser ipapi.co (gratuit, pas de clé API nécessaire)
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        const detectedCity = data.city;
        if (detectedCity) {
          const matchedCity = findClosestCity(detectedCity);
          if (matchedCity) {
            setCity(matchedCity);
            localStorage.setItem('detected_city', matchedCity);
          }
        }
      } catch (err) {
        console.error('IP geolocation error:', err);
        setError('Unable to detect location');
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  return { city, isLoading, error };
}

// Hook pour redirection automatique vers page locale
export function useLocalRedirect() {
  const { city, isLoading } = useGeolocation();
  const config = ACTIVE_CONFIG;

  useEffect(() => {
    if (!city || isLoading) return;

    // Ne rediriger que depuis la page d'accueil
    if (window.location.pathname !== '/') return;

    // Vérifier si déjà redirigé (éviter boucle)
    const hasRedirected = sessionStorage.getItem('geo_redirected');
    if (hasRedirected) return;

    // Construire URL de la page locale
    const normalizedCity = normalizeCity(city);
    const serviceName = config.type === 'plomberie' ? 'canalizador' : 'electricista';
    const localPageUrl = `/servicos/${serviceName}-${normalizedCity}.html`;

    // Vérifier si la page existe (éviter 404)
    fetch(localPageUrl, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          sessionStorage.setItem('geo_redirected', 'true');
          window.location.href = localPageUrl;
        }
      })
      .catch(() => {
        // Page n'existe pas, rester sur homepage
      });
  }, [city, isLoading, config.type]);
}

// Hook pour changer titre dynamiquement
export function useDynamicTitle() {
  const { city } = useGeolocation();
  const config = ACTIVE_CONFIG;

  useEffect(() => {
    if (!city) return;

    const originalTitle = document.title;
    
    // Ajouter ville au titre si pas déjà présent
    if (!originalTitle.includes(city)) {
      document.title = `${config.name} ${city} 24h | ${originalTitle}`;
    }

    return () => {
      document.title = originalTitle;
    };
  }, [city, config.name]);
}
