// SEO optimized page for "Eletricista Vinhais"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Zap, CheckCircle } from 'lucide-react';

export default function Vinhais() {
  useEffect(() => {
    document.title = "Eletricista Vinhais 24h - Urgências Elétricas Trás-os-Montes - +351 932 321 892";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista em Vinhais disponível 24h. Reparação de avarias elétricas, quadros elétricos, curto-circuitos. Servimos todo o concelho de Vinhais e aldeias. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/eletricista-vinhais');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-vinhais';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "Eletricista Profissional Vinhais",
      "description": "Eletricista profissional em Vinhais. Serviço 24h, urgências elétricas.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vinhais",
        "addressRegion": "Bragança",
        "addressCountry": "PT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.8333", "longitude": "-7.0000" },
      "telephone": "+351932321892",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-vinhais');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    {
      question: "Quanto tempo demora a chegar a Vinhais?",
      answer: "Chegamos a Vinhais em aproximadamente 45-60 minutos. Temos veículo 4x4 para aceder às aldeias mais isoladas do concelho."
    },
    {
      question: "Qual o custo de deslocação a Vinhais?",
      answer: "A deslocação a Vinhais e concelho é de 30€. Inclui todas as aldeias do município."
    },
    {
      question: "Trabalham no Parque Natural de Montesinho?",
      answer: "Sim, cobrimos todas as aldeias do Parque Natural de Montesinho, incluindo as mais remotas."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ VINHAIS E PARQUE DE MONTESINHO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Eletricista em Vinhais</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Servimos todo o concelho de Vinhais, incluindo as aldeias do Parque Natural de Montesinho. Veículo 4x4 para acessos difíceis.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
                <Phone className="w-6 h-6" />932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Vinhais" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Vinhais</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Urgências Elétricas 24h", desc: "Apagões, curto-circuitos, disjuntores a disparar" },
                { icon: Shield, title: "Quadros Elétricos", desc: "Substituição de quadros antigos, fusíveis por disjuntores" },
                { icon: CheckCircle, title: "Instalações Rurais", desc: "Casas de aldeia, quintas, explorações agrícolas" },
                { icon: Zap, title: "Certificação CERTIEL", desc: "Para venda ou arrendamento de imóveis" },
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
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Vinhais</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Eletricista em Vinhais?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Chegamos a qualquer aldeia do concelho.</p>
            <a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              <Phone className="w-6 h-6" />932 321 892
            </a>
          </div>
        </section>

        {/* Related Cities - Maillage interno SEO */}
        <RelatedCities 
          currentCity="Vinhais" 
          currentCitySlug="eletricista-vinhais" 
        />
      </main>
      <Footer />
    </div>
  );
}
