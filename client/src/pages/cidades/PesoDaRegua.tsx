import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Zap, CheckCircle } from 'lucide-react';

export default function PesoDaRegua() {
  useEffect(() => {
    document.title = "Electricista Peso da Régua 24h - Capital do Douro - +351 932 321 892";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Electricista em Peso da Régua, capital do Douro. Instalações para caves de vinho, museus, hotéis e comércio. Quadros elétricos, certificação. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/electricista-peso-da-regua');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-regua';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "Electricista Profissional Peso da Régua",
      "description": "Electricista profissional em Peso da Régua. Capital do Douro, caves de vinho e turismo.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Peso da Régua",
        "addressRegion": "Vila Real",
        "addressCountry": "PT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.1667", "longitude": "-7.7833" },
      "telephone": "+351932321892",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-regua');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    {
      question: "Quanto tempo demora a chegar a Peso da Régua?",
      answer: "Chegamos a Peso da Régua em aproximadamente 1h15 desde Macedo de Cavaleiros, percorrendo cerca de 85km pela A4 e IP4."
    },
    {
      question: "Fazem instalações para caves de vinho do Porto?",
      answer: "Sim, somos especialistas em instalações para caves: climatização, iluminação técnica, sistemas de segurança e quadros de potência para equipamentos de vinificação."
    },
    {
      question: "Trabalham em espaços comerciais na Régua?",
      answer: "Sim, instalamos sistemas elétricos para lojas, restaurantes, hotéis e espaços de enoturismo no centro da Régua e arredores."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ PESO DA RÉGUA - CAPITAL DO DOURO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Electricista em Peso da Régua</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Instalações elétricas na capital do Douro. Caves de vinho, museus, hotéis e comércio. Especialistas em climatização de caves e sistemas de potência.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
                <Phone className="w-6 h-6" />932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Peso%20da%20Régua" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Peso da Régua</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Caves de Vinho", desc: "Climatização, iluminação técnica e quadros de potência para caves" },
                { icon: Shield, title: "Comércio e Restauração", desc: "Instalações para lojas, restaurantes e espaços de enoturismo" },
                { icon: CheckCircle, title: "Museus e Cultura", desc: "Iluminação técnica e sistemas de segurança para espaços culturais" },
                { icon: Zap, title: "Hotelaria", desc: "Sistemas elétricos completos para hotéis e alojamento turístico" },
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
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Peso da Régua</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Electricista em Peso da Régua?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos caves, hotéis e comércio em toda a Régua.</p>
            <a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              <Phone className="w-6 h-6" />932 321 892
            </a>
          </div>
        </section>

        <RelatedCities currentCity="Peso da Régua" currentCitySlug="electricista-peso-da-regua" />
      </main>
      <Footer />
    </div>
  );
}