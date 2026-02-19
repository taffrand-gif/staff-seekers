import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Zap, CheckCircle } from 'lucide-react';

export default function MoimentaDaBeira() {
  useEffect(() => {
    document.title = "Electricista Moimenta da Beira 24h - Maçã e Granito - +351 932 321 892";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Electricista em Moimenta da Beira. Instalações para pomares de maçã, pedreiras de granito e habitações. Quadros trifásicos, iluminação. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/electricista-moimenta-da-beira');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-moimenta';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "Electricista Profissional Moimenta da Beira",
      "description": "Electricista profissional em Moimenta da Beira. Especialista em instalações industriais e agrícolas.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Moimenta da Beira",
        "addressRegion": "Viseu",
        "addressCountry": "PT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "40.9833", "longitude": "-7.6167" },
      "telephone": "+351932321892",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-moimenta');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    {
      question: "Quanto tempo demora a chegar a Moimenta da Beira?",
      answer: "Chegamos a Moimenta da Beira em aproximadamente 1h15 desde Macedo de Cavaleiros, percorrendo cerca de 85km pela A4 e estradas nacionais."
    },
    {
      question: "Fazem instalações para câmaras frigoríficas de maçã?",
      answer: "Sim, instalamos quadros trifásicos de potência para câmaras frigoríficas, sistemas de refrigeração e armazéns de fruta com controlo de temperatura."
    },
    {
      question: "Trabalham em pedreiras e indústria de granito?",
      answer: "Sim, temos experiência em instalações elétricas industriais para pedreiras: quadros de potência, iluminação de estaleiros e sistemas para maquinaria pesada."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ MOIMENTA DA BEIRA - MAÇÃ E GRANITO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Electricista em Moimenta da Beira</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Instalações elétricas industriais e agrícolas em Moimenta da Beira. Câmaras frigoríficas para maçã, pedreiras de granito e habitações em todo o concelho.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
                <Phone className="w-6 h-6" />932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Moimenta%20da%20Beira" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Moimenta da Beira</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Câmaras Frigoríficas", desc: "Quadros trifásicos para refrigeração e armazenamento de maçã" },
                { icon: Shield, title: "Indústria de Granito", desc: "Instalações de potência para pedreiras e maquinaria pesada" },
                { icon: CheckCircle, title: "Iluminação Industrial", desc: "LED industrial para armazéns, fábricas e estaleiros" },
                { icon: Zap, title: "Habitações", desc: "Remodelação elétrica residencial e certificação CERTIEL" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Moimenta da Beira</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Electricista em Moimenta da Beira?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos indústria, agricultura e habitações.</p>
            <a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              <Phone className="w-6 h-6" />932 321 892
            </a>
          </div>
        </section>

        <RelatedCities currentCity="Moimenta da Beira" currentCitySlug="electricista-moimenta-da-beira" />
      </main>
      <Footer />
    </div>
  );
}