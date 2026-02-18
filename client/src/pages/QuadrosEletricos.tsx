// Page Service Dédié: Quadros Elétricos em Trás-os-Montes
// Optimizada para SEO com keywords: quadro elétrico, modernização quadro

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';

export default function QuadrosEletricos() {
  const { config } = useSite();

  useEffect(() => {
    document.title = "Quadros Elétricos em Trás-os-Montes | Instalação e Modernização | Certificação";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Instalação e modernização de quadros elétricos em Trás-os-Montes: quadro elétrico novo, atualização, certificação. Eletricistas certificados, materiais de qualidade, garantia no serviço.');
  }, [config]);

  // Schema.org Service JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Quadros Elétricos em Trás-os-Montes",
    "description": "Serviço profissional de instalação, modernização e certificação de quadros elétricos em Trás-os-Montes.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Staff Seekers - Eletricista Profissional",
      "telephone": ACTIVE_CONFIG.phone,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Trás-os-Montes",
        "addressCountry": "PT"
      }
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.5378,
        "longitude": -6.9603
      },
      "geoRadius": "100000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Quadros Elétricos",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instalação de Quadro Elétrico Novo"
          },
          "price": "300",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Modernização de Quadro Antigo"
          },
          "price": "200",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Certificação de Quadro Elétrico"
          },
          "price": "150",
          "priceCurrency": "EUR"
        }
      ]
    }
  };

  return (
    <>
      <SEOHeadEnhanced pageType="service" />
      <StructuredData customSchema={serviceSchema} />
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-amber-50">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quadros <span className="text-blue-900">Elétricos</span> em Trás-os-Montes
            </h1>
            <p className="text-xl mb-8 max-w-3xl">
              Instalação, modernização e certificação de quadros elétricos para residências, comércios e indústrias. 
              Segurança elétrica garantida com materiais de primeira qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 Orçamento: {ACTIVE_CONFIG.phone}
              </a>
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de instalar/modernizar quadro elétrico em Trás-os-Montes. Podem dar-me um orçamento?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                💬 WhatsApp para Orçamento
              </a>
            </div>
          </div>
        </section>

        {/* Service details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left column: Service description */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Instalação e Modernização de Quadros Elétricos
                </h2>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p>
                    Especializados em <strong>quadro elétrico</strong> e <strong>modernização de quadro</strong> em toda a região de Trás-os-Montes. 
                    Trabalhamos com materiais certificados e seguimos as normas de segurança elétrica mais recentes.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Processo de Trabalho</h3>
                  <ol className="space-y-4 list-decimal pl-5">
                    <li><strong>Avaliação:</strong> Análise das necessidades elétricas atuais e futuras</li>
                    <li><strong>Projeto:</strong> Dimensionamento do quadro e circuitos necessários</li>
                    <li><strong>Instalação:</strong> Montagem do quadro com disjuntores diferenciais</li>
                    <li><strong>Cabeamento:</strong> Organização e identificação de todos os circuitos</li>
                    <li><strong>Testes:</strong> Verificação de segurança e funcionamento</li>
                    <li><strong>Certificação:</strong> Emissão de certificado quando aplicável</li>
                  </ol>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Componentes Utilizados</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-amber-500 text-xl">⚡</span>
                      <span><strong>Quadros Hager ou Schneider:</strong> Marcas líderes em qualidade e segurança</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-amber-500 text-xl">🔌</span>
                      <span><strong>Disjuntores diferenciais:</strong> Proteção contra choques elétricos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-amber-500 text-xl">🛡️</span>
                      <span><strong>Disjuntores magnetotérmicos:</strong> Proteção contra sobrecargas e curtos-circuitos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-amber-500 text-xl">📊</span>
                      <span><strong>Organização modular:</strong> Facilita futuras expansões e manutenções</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-amber-500 text-xl">🏷️</span>
                      <span><strong>Identificação clara:</strong> Todos os circuitos devidamente identificados</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quando Modernizar o Quadro Elétrico?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">⚠️</span>
                      <span>Quadro com mais de 20-25 anos de idade</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">⚠️</span>
                      <span>Disjuntores que disparam frequentemente</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">⚠️</span>
                      <span>Falta de disjuntores diferenciais (salva-vidas)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">⚠️</span>
                      <span>Necessidade de mais circuitos (ar condicionado, carregador EV)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">⚠️</span>
                      <span>Para venda ou arrendamento do imóvel (certificação obrigatória)</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Right column: Pricing and coverage */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Preços Indicativos</h3>
                
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Instalação Quadro Novo (T3)</h4>
                      <span className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">€300 - €600</span>
                    </div>
                    <p className="text-gray-600">Inclui quadro, disjuntores e organização de circuitos</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Modernização Quadro Antigo</h4>
                      <span className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">€200 - €400</span>
                    </div>
                    <p className="text-gray-600">Substituição de componentes e atualização de segurança</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Certificação Quadro Elétrico</h4>
                      <span className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">€150 - €250</span>
                    </div>
                    <p className="text-gray-600">Para venda/arrendamento (certificado DGEG válido)</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Expansão de Circuitos</h4>
                      <span className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">€80 - €150</span>
                    </div>
                    <p className="text-gray-600">Por circuito adicional (ar condicionado, tomadas especiais)</p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                  <p className="text-amber-800 font-semibold">
                    💡 <strong>Importante:</strong> Um quadro elétrico moderno pode reduzir o consumo de energia em 10-15% 
                    e previne incêndios de origem elétrica.
                  </p>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Normas que Cumprimos</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Regulamento REBT", "Norma NP 4390", 
                    "Certificação DGEG", "Normas Europeias CEI"
                  ].map((norm, idx) => (
                    <div key={idx} className="bg-gray-100 px-4 py-2 rounded-lg text-center text-sm">
                      {norm}
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Zonas de Atuação</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Macedo de Cavaleiros", "Bragança", "Mirandela", "Chaves",
                    "Valpaços", "Vinhais", "Miranda do Douro", "Mogadouro",
                    "Torre de Moncorvo", "Freixo de Espada à Cinta"
                  ].map((city, idx) => (
                    <div key={idx} className="bg-gray-100 px-4 py-2 rounded-lg text-center">
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema.org */}
        <section className="py-16 bg-gray-50">
          <FAQSection
            title="Perguntas Frequentes sobre Quadros Elétricos"
            faqs={[
              {
                question: "Quanto tempo demora instalar um quadro elétrico novo?",
                answer: "Para uma casa média (T3), demora geralmente 1-2 dias. Inclui desmontagem do antigo, instalação do novo, organização de circuitos e testes de segurança."
              },
              {
                question: "É obrigatório ter certificação elétrica?",
                answer: "Sim, para venda ou arrendamento de imóveis em Portugal é obrigatório ter certificação elétrica válida (certificado DGEG). O certificado tem validade de 8 anos."
              },
              {
                question: "Oferecem garantia na instalação de quadros elétricos?",
                answer: "Sim, oferecemos garantia de 3 anos na mão de obra e 1 ano nos materiais fornecidos. Para materiais com garantia de fábrica superior, aplicamos essa garantia."
              }
            ]}
          />
        </section>

        {/* Internal links to city pages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Instalação de Quadros Elétricos em Toda a Região
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <a href="/eletricista-macedo-de-cavaleiros" className="bg-white hover:bg-amber-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-amber-600 font-bold">Macedo de Cavaleiros</div>
                <div className="text-sm text-gray-600">Quadros novos</div>
              </a>
              <a href="/eletricista-braganca" className="bg-white hover:bg-amber-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-amber-600 font-bold">Bragança</div>
                <div className="text-sm text-gray-600">Modernização</div>
              </a>
              <a href="/eletricista-mirandela" className="bg-white hover:bg-amber-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-amber-600 font-bold">Mirandela</div>
                <div className="text-sm text-gray-600">Certificação</div>
              </a>
              <a href="/eletricista-chaves" className="bg-white hover:bg-amber-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-amber-600 font-bold">Chaves</div>
                <div className="text-sm text-gray-600">Segurança elétrica</div>
              </a>
              <a href="/eletricista-valpacos" className="bg-white hover:bg-amber-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-amber-600 font-bold">Valpaços</div>
                <div className="text-sm text-gray-600">Materiais qualidade</div>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py