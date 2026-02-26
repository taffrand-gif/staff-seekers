import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Zap, CheckCircle } from 'lucide-react';

export default function Sernancelhe() {
  useEffect(() => {
    document.title = "Eletricista Sernancelhe 24h - Castanha e Turismo Religioso - +351 932 321 892";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista em Sernancelhe. Instalações para secadores de castanha, patrimônio religioso e habitações rurais. Quadros elétricos, certificação. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/eletricista-sernancelhe');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-sernancelhe';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "Eletricista Profissional Sernancelhe",
      "description": "Eletricista profissional em Sernancelhe. Especialista em instalações agrícolas e patrimônio religioso.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sernancelhe",
        "addressRegion": "Viseu",
        "addressCountry": "PT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "40.9000", "longitude": "-7.5000" },
      "telephone": "+351932321892",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-sernancelhe');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    {
      question: "Quanto tempo demora a chegar a Sernancelhe?",
      answer: "Chegamos a Sernancelhe em aproximadamente 1h10 desde Macedo de Cavaleiros, percorrendo cerca de 80km pelas estradas nacionais."
    },
    {
      question: "Fazem instalações para secadores de castanha?",
      answer: "Sim, instalamos sistemas elétricos para secadores industriais de castanha, câmaras de fumeiro e armazéns de processamento com quadros trifásicos."
    },
    {
      question: "Qual o custo de deslocação a Sernancelhe?",
      answer: "A deslocação a Sernancelhe é de 40€, sob marcação prévia. Estamos a cerca de 100km de Macedo de Cavaleiros. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ SERNANCELHE - CASTANHA E FÉ</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Eletricista em Sernancelhe</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Servimos todo o concelho de Sernancelhe. Instalações para secadores de castanha, patrimônio religioso e casas rurais. Experiência em edifícios históricos.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
                <Phone className="w-6 h-6" />932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Sernancelhe" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Sernancelhe</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Secadores de Castanha", desc: "Quadros trifásicos para secadores industriais e câmaras de fumeiro" },
                { icon: Shield, title: "Patrimônio Religioso", desc: "Instalações discretas para igrejas, capelas e santuários" },
                { icon: CheckCircle, title: "Casas Rurais", desc: "Remodelação elétrica de casas tradicionais em pedra" },
                { icon: Zap, title: "Armazéns Agrícolas", desc: "Iluminação e quadros para armazéns de castanha e frutos secos" },
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
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Sernancelhe</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Eletricista em Sernancelhe?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos castanheiros, igrejas e habitações.</p>
            <a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              <Phone className="w-6 h-6" />932 321 892
            </a>
          </div>
        </section>

        <RelatedCities currentCity="Sernancelhe" currentCitySlug="eletricista-sernancelhe" />
      </main>
      <Footer />
    </div>
  );
}