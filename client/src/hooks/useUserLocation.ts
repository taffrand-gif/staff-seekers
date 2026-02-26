import { useState, useEffect } from 'react';

interface LocationData {
  city: string;
  region: string;
  country: string;
}

const TRAS_OS_MONTES_CITIES = [
  'Bragança',
  'Mirandela',
  'Macedo de Cavaleiros',
  'Miranda do Douro',
  'Vinhais',
  'Mogadouro',
  'Alfândega da Fé',
  'Carrazeda de Ansiães',
  'Freixo de Espada à Cinta',
  'Torre de Moncorvo',
  'Vila Flor',
  'Vimioso'
];

export function useUserLocation() {
  const [location, setLocation] = useState<LocationData | null>({
    city: 'Bragança',
    region: 'Bragança',
    country: 'Portugal'
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Defer geolocation call to avoid blocking initial render
    const timer = setTimeout(async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        setLocation({
          city: data.city || 'Bragança',
          region: data.region || 'Bragança',
          country: data.country_name || 'Portugal'
        });
      } catch (error) {
        // Already using default, no action needed
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Vérifier si la ville détectée est dans Trás-os-Montes
  const isLocalCity = location ? TRAS_OS_MONTES_CITIES.includes(location.city) : false;
  
  // Retourner la ville locale ou Bragança par défaut
  const displayCity = isLocalCity && location ? location.city : 'Bragança';

  return {
    city: displayCity,
    region: location?.region || 'Bragança',
    country: location?.country || 'Portugal',
    loading,
    isLocalCity
  };
}
