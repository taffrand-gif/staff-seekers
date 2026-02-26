import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Zap, CheckCircle } from 'lucide-react';

export default function Montalegre() {
  useEffect(() => {
    document.title = "Eletricista Montalegre 24h - Barragens e Pecuária Barroso - +351 932 321 892";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista em Montalegre. Instalações para barragens, explorações pecuárias do Barroso e habitações de montanha. Veículo 4x4. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/eletricista-montalegre');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-montalegre';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "Eletricista Profissional Montalegre",
      "description": "Eletricista profissional em Montalegre. Especialista em instalações de montanha e explorações do Barroso.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Montalegre",
        "addressRegion": "Vila Real",
        "addressCountry": "PT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.8167", "longitude": "-7.7833" },
      "telephone": "+351932321892",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-montalegre');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    {
      question: "Quanto tempo demora a chegar a Montalegre?",
      answer: "Chegamos a Montalegre em aproximadamente 1h30 desde Macedo de Cavaleiros, percorrendo cerca de 100km. Temos veículo 4x4 para acessos de montanha."
    },
    {
      question: "Trabalham nas zonas das barragens de Montalegre?",
      answer: "Sim, servimos todas as zonas do concelho incluindo as áreas próximas das barragens do Alto Rabagão e Paradela. Instalações para turismo e habitações."
    },
    {
      question: "Qual o custo de deslocação a Montalegre?",
      answer: "A deslocação a Montalegre é de 40€, sob marcação prévia. Estamos a cerca de 110km de Macedo de Cavaleiros. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ MONTALEGRE - TERRAS DO BARROSO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Eletricista em Montalegre</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Servimos todo o concelho de Montalegre, das barragens às aldeias do Barroso. Veículo 4x4 para acessos de montanha. Instalações para pecuária e turismo rural.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
                <Phone className="w-6 h-6" />932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Montalegre" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Montalegre</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Explorações Pecuárias", desc: "Instalações para estábulos, ordenha mecânica e armazéns agrícolas" },
                { icon: Shield, title: "Habitações de Montanha", desc: "Aquecimento elétrico, proteção contra raios e instalações robustas" },
                { icon: CheckCircle, title: "Turismo Rural", desc: "Sistemas elétricos para casas de turismo e alojamento local" },
                { icon: Zap, title: "Painéis Solares", desc: "Instalação de painéis fotovoltaicos para autoconsumo em zonas remotas" },
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
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Montalegre</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Eletricista em Montalegre?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Chegamos a qualquer aldeia do Barroso.</p>
            <a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              <Phone className="w-6 h-6" />932 321 892
            </a>
          </div>
        </section>

        <RelatedCities currentCity="Montalegre" currentCitySlug="eletricista-montalegre" />
      </main>
      <Footer />
    </div>
  );
}