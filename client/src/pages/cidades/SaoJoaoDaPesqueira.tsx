import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Zap, CheckCircle } from 'lucide-react';

export default function SaoJoaoDaPesqueira() {
  useEffect(() => {
    document.title = "Eletricista São João da Pesqueira 24h - Douro Vinhateiro - +351 932 321 892";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista em São João da Pesqueira, coração do Douro. Instalações para quintas vinícolas, adegas e turismo. Quadros elétricos, certificação. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/eletricista-sao-joao-da-pesqueira');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-pesqueira';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "Eletricista Profissional São João da Pesqueira",
      "description": "Eletricista profissional em São João da Pesqueira. Douro vinhateiro, quintas e adegas.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São João da Pesqueira",
        "addressRegion": "Viseu",
        "addressCountry": "PT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.1500", "longitude": "-7.4000" },
      "telephone": "+351932321892",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-pesqueira');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    {
      question: "Quanto tempo demora a chegar a São João da Pesqueira?",
      answer: "Chegamos a São João da Pesqueira em aproximadamente 45-55 minutos desde Macedo de Cavaleiros, percorrendo cerca de 55km."
    },
    {
      question: "Fazem instalações para quintas vinícolas no Douro?",
      answer: "Sim, somos especialistas em instalações para quintas: adegas de vinificação, caves de estágio, sistemas de climatização, bombas e linhas de engarrafamento."
    },
    {
      question: "Qual o custo de deslocação a São João da Pesqueira?",
      answer: "A deslocação a São João da Pesqueira é de 30€. Chegamos em aproximadamente 60-70 minutos. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ SÃO JOÃO DA PESQUEIRA - DOURO VINHATEIRO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Eletricista em São João da Pesqueira</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Servimos todo o concelho de São João da Pesqueira, no coração do Douro. Instalações para quintas vinícolas, adegas e espaços de enoturismo.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
                <Phone className="w-6 h-6" />932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20um%20eletricista%20em%20São%20João%20da%20Pesqueira" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em São João da Pesqueira</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Quintas Vinícolas", desc: "Adegas, caves, climatização e linhas de engarrafamento" },
                { icon: Shield, title: "Enoturismo", desc: "Iluminação, som e climatização para salas de provas e restaurantes" },
                { icon: CheckCircle, title: "Miradouros e Turismo", desc: "Iluminação exterior para miradouros e percursos pedestres" },
                { icon: Zap, title: "Sistemas de Irrigação", desc: "Quadros elétricos para bombas e rega por gotejamento nas vinhas" },
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
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - São João da Pesqueira</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Eletricista em São João da Pesqueira?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos quintas, adegas e turismo em todo o Douro.</p>
            <a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              <Phone className="w-6 h-6" />932 321 892
            </a>
          </div>
        </section>

        <RelatedCities currentCity="São João da Pesqueira" currentCitySlug="eletricista-sao-joao-da-pesqueira" />
      </main>
      <Footer />
    </div>
  );
}