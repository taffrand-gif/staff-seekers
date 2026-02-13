// Page SEO optimisée pour "Eletricista Vila Real"
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

export default function VilaReal() {
  const { config } = useSite();

  useEffect(() => {
    document.title = "Eletricista em Vila Real | Instalação e Reparação Elétrica | Staff Seekers";
    
    // Meta description optimisée
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista certificado em Vila Real, Trás-os-Montes. Serviços de instalação elétrica, reparação de avarias, quadros elétricos e certificação DGEG. Urgências 24h, orçamento gratuito.');
    
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/eletricista-vila-real');
    
    // Schema.org LocalBusiness pour Vila Real
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Staff Seekers — Eletricista em Vila Real",
      "image": "/images/hero/hero-electrician-portugal.png",
      "description": "Eletricista profissional em Vila Real, Trás-os-Montes. Instalação, reparação e certificação elétrica.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vila Real",
        "addressRegion": "Trás-os-Montes",
        "addressCountry": "PT",
        "postalCode": "5000"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.3000",
        "longitude": "-7.7441"
      },
      "telephone": ACTIVE_CONFIG.phone,
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€",
      "areaServed": {
        "@type": "City",
        "name": "Vila Real"
      },
      "sameAs": [
        `https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`
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
        {/* Hero section spécifique à Vila Real */}
        <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav className="mb-6 text-amber-200">
                <a href="/" className="hover:text-white">Staff Seekers</a> &gt; 
                <a href="/servicos" className="hover:text-white mx-2">Serviços</a> &gt; 
                <span className="ml-2">Vila Real</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Eletricista Profissional em <span className="text-blue-900">Vila Real</span>
              </h1>
              
              <p className="text-xl mb-8">
                Serviços de eletricista certificado em Vila Real e arredores. 
                Mais de 15 anos de experiência a servir a região de Trás-os-Montes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${ACTIVE_CONFIG.phone}`}
                  className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  📞 Eletricista Vila Real: {ACTIVE_CONFIG.phone}
                </a>
                <a
                  href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=Olá, preciso de um eletricista em Vila Real`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  💬 WhatsApp para Vila Real
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu spécifique à Vila Real */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Porque escolher um eletricista em Vila Real da Staff Seekers?
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-amber-600">🏙️</span>
                      Conhecimento Local de Vila Real
                    </h3>
                    <p className="text-gray-600">
                      Conhecemos profundamente a infraestrutura elétrica de Vila Real. 
                      Trabalhamos em diversos bairros como {[
                        'São Pedro', 'Mateus', 'Parque Corgo', 'Lordelo', 'Vila Real Centro',
                        'Bairro da Ponte', 'Bairro da Rainha', 'Bairro da Corga'
                      ].join(', ')} e entendemos as particularidades de cada zona.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-amber-600">⚡</span>
                      Serviços Especializados para Vila Real
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Instalação elétrica em edifícios históricos do centro</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Modernização de quadros elétricos em prédios antigos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Certificação para propriedades em Vila Real</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Urgências 24h em toda a cidade</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-xl border border-amber-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Áreas de Atuação em <span className="text-amber-600">Vila Real</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      'Centro Histórico', 'São Pedro', 'Mateus', 'Lordelo',
                      'Parque Corgo', 'Bairro da Ponte', 'Bairro da Rainha',
                      'Bairro da Corga', 'Vila Real Norte', 'Vila Real Sul'
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-2 text-gray-700">
                        <span className="text-amber-600">📍</span>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      ⏱️ Tempo de Resposta em Vila Real
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center justify-between">
                        <span>Centro de Vila Real</span>
                        <span className="font-bold text-amber-600">15-30 min</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Bairros periféricos</span>
                        <span className="font-bold text-amber-600">30-45 min</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Zona Industrial</span>
                        <span className="font-bold text-amber-600">45-60 min</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema.org - Vila Real Specific */}
        <section className="py-16 bg-gray-50">
          <FAQSection
            title="Perguntas Frequentes sobre Eletricista em Vila Real"
            faqs={[
              {
                question: "Qual o tempo médio de resposta para urgências em Vila Real?",
                answer: "Em média, atendemos urgências no centro de Vila Real em 15-30 minutos. Para os bairros periféricos, o tempo é de 30-45 minutos. Mantemos uma equipa sempre disponível para a região."
              },
              {
                question: "Trabalham em edifícios históricos do centro de Vila Real?",
                answer: "Sim, temos experiência em trabalhar em edifícios históricos e protegidos. Conhecemos as regulamentações específicas e utilizamos técnicas que preservam a integridade dos imóveis históricos de Vila Real."
              },
              {
                question: "Oferecem serviço para empresas na Zona Industrial de Vila Real?",
                answer: "Sim, atendemos empresas na Zona Industrial e em todo o concelho. Serviços industriais, comerciais e residenciais. Trabalhamos com horários flexíveis para minimizar impactos na produção."
              },
              {
                question: "Atendem bairros como Corgo, Mateus ou Lordelo?",
                answer: "Sim, atendemos todos os bairros e freguesias de Vila Real, incluindo Corgo, Mateus, Lordelo, Vila Marim, Arroios e toda a área metropolitana."
              },
              {
                question: "Preciso de certificação elétrica para vender minha casa em Vila Real?",
                answer: "Sim, é obrigatório ter certificação elétrica válida (boletim DGEG) para venda ou arrendamento de imóveis em Portugal. O certificado tem validade de 8 anos."
              },
              {
                question: "Fazem manutenção preventiva para condomínios em Vila Real?",
                answer: "Sim, oferecemos contratos de manutenção preventiva para condomínios, incluindo inspeção periódica de quadros elétricos, iluminação comum e sistemas de emergência."
              }
            ]}
          />
        </section>

        {/* CTA final avec localisation */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-amber-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Precisa de um Eletricista em <span className="text-amber-300">Vila Real</span>?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contacte-nos agora para um orçamento gratuito. 
              Atendemos toda a cidade de Vila Real e arredores.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 {ACTIVE_CONFIG.phone} (Vila Real)
              </a>
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=Olá, preciso de um eletricista em Vila Real`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                💬 WhatsApp para Vila Real
              </a>
            </div>
            
            <p className="text-amber-200">
              🚗 <strong>Deslocação gratuita</strong> em Vila Real • ⏱️ <strong>Urgências 24h</strong> • 💰 <strong>Orçamento sem compromisso</strong>
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingButtons />
    </>
  );
}