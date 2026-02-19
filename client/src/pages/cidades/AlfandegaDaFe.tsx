import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Zap, CheckCircle } from 'lucide-react';

export default function AlfandegaDaFe() {
  useEffect(() => {
    document.title = "Electricista Alfândega da Fé 24h - Serviços Elétricos - +351 932 321 892";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Electricista em Alfândega da Fé. Instalações elétricas para amendoais, lagares de azeite e habitações. A apenas 30km de Macedo de Cavaleiros. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/electricista-alfandega-da-fe');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-alfandega';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "Electricista Profissional Alfândega da Fé",
      "description": "Electricista profissional em Alfândega da Fé. Especialista em instalações para amendoais e olivicultura.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Alfândega da Fé",
        "addressRegion": "Bragança",
        "addressCountry": "PT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.3500", "longitude": "-6.9667" },
      "telephone": "+351932321892",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-alfandega');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    {
      question: "Quanto tempo demora a chegar a Alfândega da Fé?",
      answer: "Chegamos a Alfândega da Fé em apenas 25-30 minutos desde Macedo de Cavaleiros. É uma das cidades mais próximas da nossa sede."
    },
    {
      question: "Fazem instalações elétricas para amendoais?",
      answer: "Sim, instalamos sistemas de rega elétricos, iluminação para armazéns de amêndoas e quadros elétricos para maquinaria de processamento."
    },
    {
      question: "Qual o custo de deslocação a Alfândega da Fé?",
      answer: "A deslocação a Alfândega da Fé é de 15€. Chegamos em aproximadamente 25-30 minutos. Inclui todo o concelho."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ ALFÂNDEGA DA FÉ - TERRA DAS AMÊNDOAS</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Electricista em Alfândega da Fé</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">A apenas 30km de Macedo de Cavaleiros, servimos todo o concelho de Alfândega da Fé. Especialistas em instalações para amendoais e lagares de azeite.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
                <Phone className="w-6 h-6" />932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Alfândega%20da%20Fé" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Alfândega da Fé</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Instalações para Amendoais", desc: "Sistemas de rega elétricos, iluminação de armazéns e processamento" },
                { icon: Shield, title: "Quadros Elétricos Agrícolas", desc: "Quadros trifásicos para lagares de azeite e maquinaria" },
                { icon: CheckCircle, title: "Remodelação Habitacional", desc: "Atualização de instalações elétricas em casas antigas do concelho" },
                { icon: Zap, title: "Urgências 24h", desc: "Resposta rápida a 30 minutos de Macedo de Cavaleiros" },
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
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Alfândega da Fé</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Electricista em Alfândega da Fé?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Estamos a apenas 30 minutos de distância.</p>
            <a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              <Phone className="w-6 h-6" />932 321 892
            </a>
          </div>
        </section>

        <RelatedCities currentCity="Alfândega da Fé" currentCitySlug="electricista-alfandega-da-fe" />
      </main>
      <Footer />
    </div>
  );
}