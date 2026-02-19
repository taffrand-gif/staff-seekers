import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Zap, CheckCircle } from 'lucide-react';

export default function MondimDeBasto() {
  useEffect(() => {
    document.title = "Electricista Mondim de Basto 24h - Serra do Alvão - +351 932 321 892";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Electricista em Mondim de Basto, porta da Serra do Alvão. Instalações para turismo de montanha, casas rurais e explorações. Veículo 4x4. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/electricista-mondim-de-basto');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-mondim';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "Electricista Profissional Mondim de Basto",
      "description": "Electricista profissional em Mondim de Basto. Especialista em instalações de montanha e turismo.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mondim de Basto",
        "addressRegion": "Vila Real",
        "addressCountry": "PT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.4167", "longitude": "-7.9500" },
      "telephone": "+351932321892",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-mondim');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    {
      question: "Quanto tempo demora a chegar a Mondim de Basto?",
      answer: "Chegamos a Mondim de Basto em aproximadamente 1h30 desde Macedo de Cavaleiros, percorrendo cerca de 100km. Temos veículo 4x4 para a Serra do Alvão."
    },
    {
      question: "Fazem instalações para turismo de montanha?",
      answer: "Sim, instalamos sistemas elétricos para casas de montanha, refúgios, parques de campismo e alojamentos turísticos na Serra do Alvão e arredores."
    },
    {
      question: "Instalam proteção contra raios em Mondim de Basto?",
      answer: "Sim, dada a altitude da Serra do Alvão, instalamos sistemas de proteção contra descargas atmosféricas (para-raios) e descarregadores de sobretensão."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ MONDIM DE BASTO - PORTA DA SERRA DO ALVÃO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Electricista em Mondim de Basto</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Servimos todo o concelho de Mondim de Basto e Serra do Alvão. Instalações para turismo de montanha, casas rurais e proteção contra descargas atmosféricas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
                <Phone className="w-6 h-6" />932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Mondim%20de%20Basto" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Mondim de Basto</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Turismo de Montanha", desc: "Instalações para refúgios, casas de montanha e parques de campismo" },
                { icon: Shield, title: "Proteção Contra Raios", desc: "Para-raios e descarregadores de sobretensão para zonas de altitude" },
                { icon: CheckCircle, title: "Casas Rurais", desc: "Remodelação elétrica de casas tradicionais com materiais modernos" },
                { icon: Zap, title: "Painéis Solares", desc: "Energia fotovoltaica para habitações e alojamentos de montanha" },
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
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Mondim de Basto</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Electricista em Mondim de Basto?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Chegamos à Serra do Alvão com veículo 4x4.</p>
            <a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              <Phone className="w-6 h-6" />932 321 892
            </a>
          </div>
        </section>

        <RelatedCities currentCity="Mondim de Basto" currentCitySlug="electricista-mondim-de-basto" />
      </main>
      <Footer />
    </div>
  );
}