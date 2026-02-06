import { useRoute } from "wouter";
import HeroUrgence from "@/components/HeroUrgence";
import RecentCalls from "@/components/RecentCalls";
import CookieConsent from "@/components/CookieConsent";
import FAQSection from "@/components/FAQSection";
import { ACTIVE_CONFIG, CITIES } from "../../../shared/serviceConfig";
import { useSEO, generateSEOTitle, generateMetaDescription, generateLocalBusinessSchema } from "@/hooks/useSEO";

export default function CityPage() {
  const [, params] = useRoute("/servicos/:citySlug");
  const citySlug = params?.citySlug || "";
  
  // Trouver la ville correspondante
  const city = CITIES.find(c => c.slug === citySlug);
  
  // Si la ville n'existe pas, rediriger vers 404
  if (!city) {
    window.location.href = "/404";
    return null;
  }

  const config = ACTIVE_CONFIG;
  const gradientClass = config.type === 'plomberie' ? 'gradient-bg-plomberie' : 'gradient-bg-electricite';

  // Nombre d'interventions fictif basé sur la ville
  const interventionsCount = getInterventionsCount(city.name);

  // SEO
  useSEO({
    title: generateSEOTitle(city.name),
    description: generateMetaDescription(city.name),
    canonical: `https://${config.domain}/servicos/${city.slug}`,
    schema: generateLocalBusinessSchema(city.name),
  });

  return (
    <>
      {/* Section Hero avec gradient de fond */}
      <div className={`min-h-screen flex items-center justify-center p-5 ${gradientClass}`}>
        <div className="w-full max-w-2xl">
          <HeroUrgence ville={city.name} interventionsCount={interventionsCount} />
          <RecentCalls />
          
          {/* Services spécifiques à la ville */}
          <div className="bg-white rounded-2xl p-6 mt-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {config.name} em {city.name}
            </h2>
            <p className="text-gray-600 mb-4">
              Serviços de {config.name.toLowerCase()} de urgência 24 horas em {city.name} e arredores. 
              Atendemos rapidamente em todo o concelho com profissionais certificados e experientes.
            </p>
            
            <h3 className="font-bold text-gray-900 mb-3">Nossos Serviços em {city.name}:</h3>
            <ul className="space-y-2">
              {config.services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Cobertura em {city.name}:</strong> Atendemos em toda a área urbana e rural, 
                incluindo todas as freguesias e aldeias do concelho. Tempo médio de chegada: 30-40 minutos.
              </p>
            </div>
          </div>
          
          {/* Footer note */}
          <p className="text-center text-white text-sm mt-5 opacity-90">
            {config.businessName} • Macedo de Cavaleiros<br />
            Atendimento em {city.name} e todo o distrito de Bragança
          </p>
        </div>
      </div>

      {/* Section FAQ */}
      <FAQSection />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </>
  );
}

// Fonction pour générer un nombre d'interventions réaliste par ville
function getInterventionsCount(cityName: string): number {
  // Bragança et Mirandela (villes plus grandes) ont plus d'interventions
  if (cityName === "Bragança") return 520;
  if (cityName === "Mirandela") return 450;
  if (cityName === "Macedo de Cavaleiros") return 480;
  
  // Autres villes moyennes
  if (["Miranda do Douro", "Mogadouro", "Torre de Moncorvo"].includes(cityName)) {
    return 350 + Math.floor(Math.random() * 50);
  }
  
  // Petites villes
  return 250 + Math.floor(Math.random() * 100);
}
