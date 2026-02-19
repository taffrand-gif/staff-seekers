// Composant RelatedCities - Affiche les villes connexes pour le maillage interne SEO
import { Link } from 'wouter';

interface RelatedCitiesProps {
  currentCity: string;
  currentCitySlug: string;
}

export default function RelatedCities({ currentCity, currentCitySlug }: RelatedCitiesProps) {
  // Liste des villes avec leurs slugs et régions
  const allCities = [
    { name: 'Bragança', slug: 'electricista-braganca', region: 'Norte' },
    { name: 'Chaves', slug: 'electricista-chaves', region: 'Norte' },
    { name: 'Mirandela', slug: 'electricista-mirandela', region: 'Norte' },
    { name: 'Vila Real', slug: 'electricista-vila-real', region: 'Norte' },
    { name: 'Macedo de Cavaleiros', slug: 'electricista-macedo-cavaleiros', region: 'Centro' },
    { name: 'Valpaços', slug: 'electricista-valpacos', region: 'Norte' },
    { name: 'Mogadouro', slug: 'electricista-mogadouro', region: 'Norte' },
    { name: 'Torre de Moncorvo', slug: 'electricista-torre-moncorvo', region: 'Norte' },
    { name: 'Freixo de Espada à Cinta', slug: 'electricista-freixo-espada-cinta', region: 'Norte' },
    { name: 'Miranda do Douro', slug: 'electricista-miranda-douro', region: 'Norte' },
    { name: 'Vinhais', slug: 'electricista-vinhais', region: 'Norte' },
  ];

  // Filtrer pour exclure la ville actuelle
  const relatedCities = allCities
    .filter(city => city.slug !== currentCitySlug)
    .slice(0, 5); // Prendre 5 villes maximum

  if (relatedCities.length === 0) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Também servimos:
          </h2>
          <p className="text-gray-600">
            Electricista profissional em outras cidades de Trás-os-Montes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {relatedCities.map((city) => (
            <Link 
              key={city.slug}
              href={`/${city.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-500">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-200 transition-colors">
                    <span className="text-orange-600 text-xl font-bold">
                      {city.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-orange-700 transition-colors">
                  {city.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  Electricista em {city.name}
                </p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full">
                    {city.region}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            <strong>SEO Tip:</strong> Links internos ajudam o Google a entender a estrutura do site e melhoram a autoridade das páginas.
          </p>
        </div>
      </div>
    </section>
  );
}