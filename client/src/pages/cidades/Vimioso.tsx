import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Zap, CheckCircle } from 'lucide-react';

export default function Vimioso() {
  useEffect(() => {
    document.title = "Electricista Vimioso 24h - Zona Fronteiriça - +351 932 321 892";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Electricista em Vimioso, zona fronteiriça com Espanha. Instalações elétricas rurais, explorações agrícolas, habitações. Servimos todo o concelho. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/electricista-vimioso');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-vimioso';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "Electricista Profissional Vimioso",
      "description": "Electricista profissional em Vimioso. Zona fronteiriça, instalações rurais e agrícolas.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vimioso",
        "addressRegion": "Bragança",
        "addressCountry": "PT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.5833", "longitude": "-6.5333" },
      "telephone": "+351932321892",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-vimioso');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    {
      question: "Quanto tempo demora a chegar a Vimioso?",
      answer: "Chegamos a Vimioso em aproximadamente 45-55 minutos desde Macedo de Cavaleiros, percorrendo cerca de 55km pela estrada nacional."
    },
    {
      question: "Servem as aldeias fronteiriças do concelho de Vimioso?",
      answer: "Sim, cobrimos todas as aldeias do concelho de Vimioso, incluindo as mais próximas da fronteira espanhola. Temos veículo preparado para acessos rurais."
    },
    {
      question: "Qual o custo de deslocação a Vimioso?",
      answer: "A deslocação a Vimioso é de 25€. Chegamos em aproximadamente 50-55 minutos. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ VIMIOSO - TERRA DE FRONTEIRA</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Electricista em Vimioso</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Servimos todo o concelho de Vimioso, incluindo as aldeias fronteiriças. Instalações elétricas para explorações agrícolas, casas recuperadas e habitações rurais.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
                <Phone className="w-6 h-6" />932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Vimioso" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Vimioso</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Instalações Rurais", desc: "Casas de aldeia, quintas e explorações agrícolas fronteiriças" },
                { icon: Shield, title: "Remodelação Elétrica", desc: "Atualização de casas tradicionais transmontanas com instalações modernas" },
                { icon: CheckCircle, title: "Quadros Elétricos", desc: "Substituição de quadros antigos por disjuntores modernos e seguros" },
                { icon: Zap, title: "Urgências 24h", desc: "Assistência elétrica urgente em todo o concelho de Vimioso" },
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
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Vimioso</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Electricista em Vimioso?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Cobrimos todo o concelho até à fronteira.</p>
            <a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              <Phone className="w-6 h-6" />932 321 892
            </a>
          </div>
        </section>

        <RelatedCities currentCity="Vimioso" currentCitySlug="electricista-vimioso" />
      </main>
      <Footer />
    </div>
  );
}