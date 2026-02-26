import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Zap, CheckCircle } from 'lucide-react';

export default function Tabuaco() {
  useEffect(() => {
    document.title = "Eletricista Tabuaço 24h - Quintas Vinícolas do Douro - +351 932 321 892";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista em Tabuaço, região do Douro. Instalações para quintas vinícolas, adegas e turismo rural. Quadros elétricos, iluminação. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/eletricista-tabuaco');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-tabuaco';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "Eletricista Profissional Tabuaço",
      "description": "Eletricista profissional em Tabuaço. Quintas vinícolas do Douro e turismo rural.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tabuaço",
        "addressRegion": "Viseu",
        "addressCountry": "PT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.1167", "longitude": "-7.5667" },
      "telephone": "+351932321892",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-tabuaco');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    {
      question: "Quanto tempo demora a chegar a Tabuaço?",
      answer: "Chegamos a Tabuaço em aproximadamente 55-65 minutos desde Macedo de Cavaleiros, percorrendo cerca de 65km pelas estradas nacionais."
    },
    {
      question: "Fazem instalações para quintas vinícolas em Tabuaço?",
      answer: "Sim, instalamos sistemas elétricos completos para quintas: adegas de vinificação, caves, sistemas de climatização, bombas e equipamentos de engarrafamento."
    },
    {
      question: "Qual o custo de deslocação a Tabuaço?",
      answer: "A deslocação a Tabuaço é de 35€. Chegamos em aproximadamente 70-80 minutos. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ TABUAÇO - QUINTAS VINÍCOLAS DO DOURO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Eletricista em Tabuaço</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Instalações elétricas para quintas vinícolas do Douro em todo o concelho de Tabuaço. Adegas, caves, turismo rural e habitações com sistemas modernos.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
                <Phone className="w-6 h-6" />932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Tabuaço" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Tabuaço</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Quintas Vinícolas", desc: "Adegas, caves de estágio e linhas de produção vinícola" },
                { icon: Shield, title: "Turismo Rural", desc: "Instalações para casas de campo, piscinas e espaços de lazer" },
                { icon: CheckCircle, title: "Climatização de Caves", desc: "Sistemas de controlo de temperatura e humidade para caves" },
                { icon: Zap, title: "Iluminação de Vinhas", desc: "Iluminação exterior para quintas, caminhos e espaços de eventos" },
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
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Tabuaço</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Eletricista em Tabuaço?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos quintas vinícolas e habitações em todo o concelho.</p>
            <a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              <Phone className="w-6 h-6" />932 321 892
            </a>
          </div>
        </section>

        <RelatedCities currentCity="Tabuaço" currentCitySlug="eletricista-tabuaco" />
      </main>
      <Footer />
    </div>
  );
}