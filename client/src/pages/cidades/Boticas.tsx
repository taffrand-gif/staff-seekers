import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Zap, CheckCircle } from 'lucide-react';

export default function Boticas() {
  useEffect(() => {
    document.title = "Electricista Boticas 24h - Vinho dos Mortos e Agricultura - +351 932 321 892";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Electricista em Boticas. Instalações elétricas para adegas do Vinho dos Mortos, explorações agrícolas e habitações. Servimos todo o concelho. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/electricista-boticas');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-boticas';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "Electricista Profissional Boticas",
      "description": "Electricista profissional em Boticas. Instalações para adegas e explorações agrícolas.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Boticas",
        "addressRegion": "Vila Real",
        "addressCountry": "PT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.6833", "longitude": "-7.6667" },
      "telephone": "+351932321892",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-boticas');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    {
      question: "Quanto tempo demora a chegar a Boticas?",
      answer: "Chegamos a Boticas em aproximadamente 1h15 desde Macedo de Cavaleiros, percorrendo cerca de 90km. Cobrimos todo o concelho."
    },
    {
      question: "Fazem instalações para adegas do Vinho dos Mortos?",
      answer: "Sim, instalamos sistemas elétricos para adegas subterrâneas, controlo de temperatura e humidade, iluminação adequada para conservação do famoso Vinho dos Mortos."
    },
    {
      question: "Qual o custo de deslocação a Boticas?",
      answer: "A deslocação a Boticas é de 40€, sob marcação prévia. Estamos a cerca de 95km de Macedo de Cavaleiros. Inclui todo o concelho."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ BOTICAS - TERRA DO VINHO DOS MORTOS</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Electricista em Boticas</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Instalações elétricas para adegas do Vinho dos Mortos, explorações agrícolas e habitações em todo o concelho de Boticas. Experiência em caves e adegas subterrâneas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
                <Phone className="w-6 h-6" />932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Boticas" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Boticas</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Adegas Subterrâneas", desc: "Instalações elétricas para caves e adegas do Vinho dos Mortos" },
                { icon: Shield, title: "Controlo de Temperatura", desc: "Sistemas elétricos para climatização de adegas e armazéns" },
                { icon: CheckCircle, title: "Explorações Agrícolas", desc: "Quadros elétricos para bombas, estábulos e maquinaria" },
                { icon: Zap, title: "Urgências Elétricas", desc: "Reparação urgente de avarias em habitações e explorações" },
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
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Boticas</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Electricista em Boticas?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos todo o concelho de Boticas.</p>
            <a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              <Phone className="w-6 h-6" />932 321 892
            </a>
          </div>
        </section>

        <RelatedCities currentCity="Boticas" currentCitySlug="electricista-boticas" />
      </main>
      <Footer />
    </div>
  );
}