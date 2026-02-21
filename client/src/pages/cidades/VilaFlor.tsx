import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Zap, CheckCircle } from 'lucide-react';

export default function VilaFlor() {
  useEffect(() => {
    document.title = "Electricista Vila Flor 24h - Instalações Vinícolas e Azeite - +351 932 321 892";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Electricista em Vila Flor especializado em instalações para adegas e lagares de azeite. Quadros elétricos, iluminação industrial. A 25km de Macedo de Cavaleiros.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/electricista-vila-flor');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-vilaflor';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "Electricista Profissional Vila Flor",
      "description": "Electricista profissional em Vila Flor. Especialista em instalações vinícolas e lagares de azeite.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vila Flor",
        "addressRegion": "Bragança",
        "addressCountry": "PT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.3000", "longitude": "-7.1500" },
      "telephone": "+351932321892",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-vilaflor');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    {
      question: "Quanto tempo demora a chegar a Vila Flor?",
      answer: "Chegamos a Vila Flor em apenas 20-25 minutos desde Macedo de Cavaleiros. É uma das localidades mais próximas que servimos."
    },
    {
      question: "Instalam sistemas elétricos em adegas e lagares?",
      answer: "Sim, somos especialistas em instalações para adegas vinícolas e lagares de azeite: quadros trifásicos, iluminação industrial, sistemas de refrigeração e controlo de temperatura."
    },
    {
      question: "Qual o custo de deslocação a Vila Flor?",
      answer: "A deslocação a Vila Flor é de 20€. Chegamos em aproximadamente 30-40 minutos. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ VILA FLOR - TERRA DO VINHO E AZEITE</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Electricista em Vila Flor</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Servimos todo o concelho de Vila Flor com instalações elétricas para adegas, lagares de azeite e habitações. A apenas 25km da nossa sede em Macedo de Cavaleiros.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
                <Phone className="w-6 h-6" />932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Vila%20Flor" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Vila Flor</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Adegas e Lagares", desc: "Instalações elétricas completas para produção vinícola e oleícola" },
                { icon: Shield, title: "Sistemas de Refrigeração", desc: "Quadros elétricos para câmaras frias e controlo de temperatura" },
                { icon: CheckCircle, title: "Iluminação Industrial", desc: "Iluminação LED para armazéns, adegas e espaços de produção" },
                { icon: Zap, title: "Certificação CERTIEL", desc: "Certificação elétrica para imóveis e espaços comerciais" },
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
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Vila Flor</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Electricista em Vila Flor?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Estamos a apenas 25 minutos de distância.</p>
            <a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              <Phone className="w-6 h-6" />932 321 892
            </a>
          </div>
        </section>

        <RelatedCities currentCity="Vila Flor" currentCitySlug="electricista-vila-flor" />
      </main>
      <Footer />
    </div>
  );
}