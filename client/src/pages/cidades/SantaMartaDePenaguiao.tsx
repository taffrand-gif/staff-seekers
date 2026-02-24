import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Zap, CheckCircle } from 'lucide-react';

export default function SantaMartaDePenaguiao() {
  useEffect(() => {
    document.title = "Eletricista Santa Marta de Penaguião 24h - Vinho Verde e Douro - +351 932 321 892";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista em Santa Marta de Penaguião. Instalações para adegas de vinho verde, quintas do Douro e habitações. Quadros elétricos. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/eletricista-santa-marta-de-penaguiao');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-santamarta';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "Eletricista Profissional Santa Marta de Penaguião",
      "description": "Eletricista profissional em Santa Marta de Penaguião. Vinho verde, Douro e turismo.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santa Marta de Penaguião",
        "addressRegion": "Vila Real",
        "addressCountry": "PT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.2000", "longitude": "-7.7833" },
      "telephone": "+351932321892",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-santamarta');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    {
      question: "Quanto tempo demora a chegar a Santa Marta de Penaguião?",
      answer: "Chegamos a Santa Marta de Penaguião em aproximadamente 1h10 desde Macedo de Cavaleiros, percorrendo cerca de 80km pela A4 e A24."
    },
    {
      question: "Fazem instalações para adegas de vinho verde?",
      answer: "Sim, instalamos sistemas elétricos para adegas de vinho verde e Douro: climatização, refrigeração, quadros trifásicos e linhas de engarrafamento."
    },
    {
      question: "Qual o custo de deslocação a Santa Marta de Penaguião?",
      answer: "A deslocação a Santa Marta de Penaguião é de 35€. Chegamos em aproximadamente 65-75 minutos. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ SANTA MARTA DE PENAGUIÃO - VINHO VERDE E DOURO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Eletricista em Santa Marta de Penaguião</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Servimos todo o concelho de Santa Marta de Penaguião, entre o vinho verde e o Douro. Instalações para adegas, quintas e habitações nas encostas do rio.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
                <Phone className="w-6 h-6" />932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Santa%20Marta%20de%20Penaguião" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Santa Marta de Penaguião</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Adegas de Vinho", desc: "Climatização, refrigeração e quadros para produção de vinho verde e Douro" },
                { icon: Shield, title: "Quintas do Douro", desc: "Instalações completas para quintas vinícolas e espaços de enoturismo" },
                { icon: CheckCircle, title: "Turismo e Eventos", desc: "Iluminação e som para espaços de eventos e restaurantes panorâmicos" },
                { icon: Zap, title: "Habitações", desc: "Remodelação elétrica e certificação CERTIEL para imóveis" },
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
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Santa Marta de Penaguião</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Eletricista em Santa Marta de Penaguião?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos adegas, quintas e habitações em todo o concelho.</p>
            <a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              <Phone className="w-6 h-6" />932 321 892
            </a>
          </div>
        </section>

        <RelatedCities currentCity="Santa Marta de Penaguião" currentCitySlug="eletricista-santa-marta-de-penaguiao" />
      </main>
      <Footer />
    </div>
  );
}