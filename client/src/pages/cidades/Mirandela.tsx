// Page SEO optimizada para "Eletricista Mirandela"
// Conteúdo 100% único, conforme políticas Google

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import { useSite } from '@/contexts/SiteContext';
import { useEffect } from 'react';

export default function Mirandela() {
  const { config } = useSite();

  useEffect(() => {
    document.title = "Eletricista em Mirandela | Instalação e Reparação Elétrica | Staff Seekers";
    
    // Meta description otimizada
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista certificado em Mirandela, Trás-os-Montes. Serviços de instalação elétrica, reparação de avarias, quadros elétricos e certificação DGEG. Especialistas em sistemas para agricultura e indústria.');
    
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/eletricista-mirandela');
    
    // Schema.org LocalBusiness para Mirandela
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Staff Seekers — Eletricista em Mirandela",
      "image": "/images/hero/hero-electrician-portugal.png",
      "description": "Eletricista profissional em Mirandela, Trás-os-Montes. Instalação, reparação e certificação elétrica para agricultura e indústria.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mirandela",
        "addressRegion": "Trás-os-Montes",
        "addressCountry": "PT",
        "postalCode": "5370"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.4872",
        "longitude": "-7.1869"
      },
      "telephone": ACTIVE_CONFIG.phone,
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€",
      "areaServed": {
        "@type": "City",
        "name": "Mirandela"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "41.4872",
          "longitude": "-7.1869"
        },
        "geoRadius": "15000"
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
        {/* Hero section específica de Mirandela */}
        <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav className="mb-6 text-amber-200">
                <a href="/" className="hover:text-white">Staff Seekers</a> &gt; 
                <a href="/servicos" className="hover:text-white mx-2">Serviços</a> &gt; 
                <span className="ml-2">Mirandela</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Eletricista Profissional em <span className="text-blue-900">Mirandela</span>
              </h1>
              
              <p className="text-xl mb-8">
                Serviços de eletricista certificado em Mirandela e arredores. 
                Especialistas em instalações para agricultura, indústria alimentar e olivicultura.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${ACTIVE_CONFIG.phone}`}
                  className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  📞 Eletricista Mirandela: {ACTIVE_CONFIG.phone}
                </a>
                <a
                  href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=Olá, preciso de um eletricista em Mirandela`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  💬 WhatsApp para Mirandela
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo específico de Mirandela */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Especialistas em Eletricidade para a Economia Local
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-amber-600">🌳</span>
                      Instalações para Agricultura e Olivais
                    </h3>
                    <p className="text-gray-600">
                      Mirandela é conhecida pela sua produção de azeite. Especializamo-nos em:
                      sistemas elétricos para lagares de azeite, iluminação para armazéns agrícolas,
                      e infraestrutura para irrigação automatizada nos olivais da região.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-amber-600">🏭</span>
                      Soluções para Indústria Alimentar
                    </h3>
                    <p className="text-gray-600">
                      Trabalhamos com empresas de transformação alimentar da região.
                      Instalações elétricas para matadouros, fábricas de enchidos,
                      e unidades de processamento de produtos locais,
                      sempre cumprindo normas de higiene e segurança alimentar.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-xl border border-amber-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Cobertura em <span className="text-amber-600">Mirandela</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      'Centro Histórico', 'Zona Industrial', 'Bairro da Estação',
                      'Urbanização do Pinheiro', 'Bairro São Sebastião',
                      'Av. Nossa Senhora do Amparo', 'Zona de Lagares',
                      'Área Agrícola Norte', 'Bairro da Ponte', 'Av. 25 de Abril'
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-2 text-gray-700">
                        <span className="text-amber-600">📍</span>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      🏭 Serviços para Setores Locais
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center justify-between">
                        <span>Lagares de azeite</span>
                        <span className="font-bold text-amber-600">Especialidade</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Indústria alimentar</span>
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

        {/* FAQ específica de Mirandela */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Perguntas sobre <span className="text-amber-600">Eletricista em Mirandela</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quais as especificidades para lagares de azeite?
                </h3>
                <p className="text-gray-600">
                  Utilizamos motores de alta eficiência para prensas, sistemas de
                  controlo de temperatura para armazenamento, e iluminação específica
                  para áreas de processamento. Todos os materiais são resistentes
                  a ambientes com óleos e humidade elevada.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Trabalham em propriedades rurais da região de Mirandela?
                </h3>
                <p className="text-gray-600">
                  Sim, atendemos quintas, herdades e explorações agrícolas em todo
                  o concelho. Especializamo-nos em sistemas de bombeamento para
                  irrigação, iluminação de estradas rurais, e infraestrutura
                  elétrica para armazéns agrícolas e estábulos.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Como lidam com a sazonalidade da produção de azeite?
                </h3>
                <p className="text-gray-600">
                  Realizamos manutenção preventiva antes da campanha de azeitona,
                  intervenções de urgência 24h durante o período de laboração dos
                  lagares, e projetos de renovação durante os meses de menor atividade.
                  Trabalhamos em coordenação com os calendários agrícolas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-amber-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Eletricista em <span className="text-amber-300">Mirandela</span> - Conhecemos a Região
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Conhecemos as necessidades elétricas da economia local de Mirandela.
              Desde a agricultura tradicional até à indústria moderna.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 {ACTIVE_CONFIG.phone} (Mirandela)
              </a>
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=Olá, preciso de um eletricista em Mirandela`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                💬 WhatsApp para Mirandela
              </a>
            </div>
            
            <p className="text-amber-200">
              🌳 <strong>Especialistas em agricultura</strong> • 🏭 <strong>Indústria alimentar</strong> • ⏱️ <strong>Calendário agrícola</strong>
            </p>
            
            {/* Cross-link subtil */}
            <div className="mt-12 p-4 bg-white/20 rounded-xl max-w-md mx-auto">
              <p className="text-lg">
                💧 <strong>Precisa de um canalizador em Mirandela?</strong> Recomendamos:{' '}
                <a href="https://norte-reparos.com/canalizador-mirandela" className="underline font-bold">
                  norte-reparos.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingButtons />
    </>
  );
}