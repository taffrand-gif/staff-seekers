// Page SEO optimisée pour "Eletricista Bragança"
// Contenu 100% unique, conforme aux politiques Google

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';

export default function Braganca() {
  const { config } = useSite();

  useEffect(() => {
    document.title = "Eletricista em Bragança - Staff Seekers - +351 932 321 892";
    
    // Meta description optimisée
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista certificado em Bragança, Trás-os-Montes. Serviços de instalação elétrica, reparação de avarias, quadros elétricos e certificação DGEG. Urgências 24h, orçamento gratuito.');
    // Meta keywords SEO
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'eletricista urgente bragança, eletricista 24 horas bragança, eletricista bragança, eletricista profissional bragança, instalação elétrica bragança, quadro elétrico bragança, certificação elétrica bragança, reparação elétrica bragança, eletricista trás-os-montes');
    
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/eletricista-braganca');
    
    // Schema.org LocalBusiness pour Bragança
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Staff Seekers — Eletricista em Bragança",
      "image": "/images-optimized/hero/hero-electrician-portugal.jpg",
      "description": "Eletricista profissional em Bragança, Trás-os-Montes. Instalação, reparação e certificação elétrica.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bragança",
        "addressRegion": "Trás-os-Montes",
        "addressCountry": "PT",
        "postalCode": "5300"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.8058",
        "longitude": "-6.7570"
      },
      "telephone": ACTIVE_CONFIG.phone,
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€",
      "areaServed": {
        "@type": "City",
        "name": "Bragança"
      },
      "sameAs": [
        `https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de um eletricista em Trás-os-Montes. Podem dar-me um orçamento?")}`
      ]
    });
    document.head.appendChild(schemaScript);
    
    return () => {
      document.head.removeChild(schemaScript);
    };
  }, [config]);

  return (
    <>
      <SEOHead />
      <StructuredData />
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero section spécifique à Bragança */}
        <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav className="mb-6 text-amber-200">
                <a href="/" className="hover:text-white">Staff Seekers</a> &gt; 
                <a href="/servicos" className="hover:text-white mx-2">Serviços</a> &gt; 
                <span className="ml-2">Bragança</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Eletricista Profissional em <span className="text-blue-900">Bragança</span>
              </h1>
              
              <p className="text-xl mb-8">
                Serviços de eletricista certificado em Bragança e arredores. 
                Especialistas em instalações elétricas para o clima frio da região.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${ACTIVE_CONFIG.phone}`}
                  className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  📞 Eletricista Bragança: {ACTIVE_CONFIG.phone}
                </a>
                <a
                  href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=Olá, preciso de um eletricista em Bragança`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  💬 WhatsApp para Bragança
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu spécifique à Bragança */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Especialistas em Eletricidade para o Clima de Bragança
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-amber-600">❄️</span>
                      Soluções para Invernos Frios
                    </h3>
                    <p className="text-gray-600">
                      Bragança é conhecida pelos seus invernos rigorosos. Especializamo-nos em:
                      sistemas de aquecimento elétrico, proteção contra geada em instalações externas,
                      e soluções energéticas eficientes para o clima local.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-amber-600">🏰</span>
                      Experiência em Património Histórico
                    </h3>
                    <p className="text-gray-600">
                      Trabalhamos no centro histórico de Bragança, incluindo zonas próximas ao Castelo,
                      Sé Catedral e edifícios classificados. Conhecemos as restrições e exigências
                      para intervenções em património histórico.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-xl border border-amber-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Cobertura em <span className="text-amber-600">Bragança</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      'Centro Histórico', 'Santa Maria', 'São Vicente', 'Sé',
                      'Bairro da Estação', 'Bairro da Mãe d\'Água', 'Zona Industrial',
                      'Urbanização do Pinheiro', 'Bairro da Rainha', 'Bairro da Fonte'
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-2 text-gray-700">
                        <span className="text-amber-600">📍</span>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      🏘️ Tipos de Imóveis em Bragança
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center justify-between">
                        <span>Casas de granito tradicionais</span>
                        <span className="font-bold text-amber-600">Especialidade</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Prédios no centro histórico</span>
                        <span className="font-bold text-amber-600">Experiência</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Propriedades rurais</span>
                        <span className="font-bold text-amber-600">Frequentemente</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ spécifique à Bragança */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Perguntas sobre <span className="text-amber-600">Eletricista em Bragança</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Como lidam com as baixas temperaturas de Bragança nas instalações?
                </h3>
                <p className="text-gray-600">
                  Utilizamos materiais específicos para baixas temperaturas, como cabos com isolamento
                  reforçado e componentes resistentes à geada. Todas as instalações externas são
                  projetadas para suportar as condições climáticas únicas de Bragança.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Atendem propriedades rurais nos arredores de Bragança?
                </h3>
                <p className="text-gray-600">
                  Sim, atendemos quintas, herdades e propriedades rurais em todo o concelho.
                  Especializamo-nos em instalações elétricas para agricultura e pecuária,
                  incluindo sistemas de bombeamento, iluminação de estradas rurais e
                  infraestrutura para turismo rural.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Qual a disponibilidade durante o inverno rigoroso de Bragança?
                </h3>
                <p className="text-gray-600">
                  Mantemos serviço 24 horas durante todo o ano, incluindo os meses mais frios.
                  Temos equipamento especializado para condições de neve e gelo, garantindo
                  que possamos chegar a qualquer localidade do concelho em qualquer condição.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema.org - Bragança Specific */}
        <section className="py-16 bg-gray-50">
          <FAQSection
            title="Perguntas Frequentes sobre Eletricista em Bragança"
            faqs={[
              {
                question: "Atendem zonas rurais e aldeias remotas do concelho de Bragança?",
                answer: "Sim, atendemos todo o concelho de Bragança, incluindo aldeias remotas e propriedades rurais. Temos experiência com as particularidades elétricas das zonas rurais da região."
              },
              {
                question: "Como lidam com o clima frio de Bragança nos sistemas de aquecimento elétrico?",
                answer: "Conhecemos bem as exigências do clima de Bragança. Instalamos e reparamos sistemas de aquecimento elétrico dimensionados para temperaturas negativas, com isolamento adequado e proteções contra gelo."
              },
              {
                question: "Trabalham em edifícios históricos do centro de Bragança?",
                answer: "Sim, temos experiência em trabalhar em edifícios históricos e protegidos do centro de Bragança. Respeitamos as características arquitetónicas e utilizamos técnicas que preservam o património."
              },
              {
                question: "Qual o tempo de resposta para urgências em Bragança?",
                answer: "No centro da cidade: 15-30 minutos. Para aldeias circundantes: 45-60 minutos. Mantemos uma equipa sempre disponível para toda a região."
              }
            ]}
          />
        </section>

        {/* CTA final */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-amber-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Eletricista em <span className="text-amber-300">Bragança</span> - Serviço Confiável
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Conhecemos as particularidades elétricas de Bragança. 
              Desde o centro histórico até às propriedades rurais mais remotas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 {ACTIVE_CONFIG.phone} (Bragança)
              </a>
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=Olá, preciso de um eletricista em Bragança`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                💬 WhatsApp para Bragança
              </a>
            </div>
            
            <p className="text-amber-200">
              ❄️ <strong>Especialistas em clima frio</strong> • 🏰 <strong>Património histórico</strong> • 🚜 <strong>Propriedades rurais</strong>
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingButtons />
    </>
  );
}