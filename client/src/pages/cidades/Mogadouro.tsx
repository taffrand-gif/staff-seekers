// SEO optimized page for "Electricista Mogadouro"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Zap, Shield, CheckCircle } from 'lucide-react';

export default function Mogadouro() {
  useEffect(() => {
    document.title = "Electricista Mogadouro 24h - Urgências Elétricas - +351 932 321 892";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Electricista em Mogadouro disponível 24h. Reparação de avarias elétricas, quadros elétricos, instalações agrícolas. Servimos todo o concelho. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/electricista-mogadouro');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-mogadouro';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "Electricista Profissional Mogadouro",
      "description": "Electricista profissional em Mogadouro. Serviço 24h, urgências elétricas.",
      "address": { "@type": "PostalAddress", "addressLocality": "Mogadouro", "addressRegion": "Bragança", "addressCountry": "PT" },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.3333", "longitude": "-6.7167" },
      "telephone": "+351932321892",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-mogadouro');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    { question: "Quanto tempo demora a chegar a Mogadouro?", answer: "Chegamos a Mogadouro em aproximadamente 50-60 minutos a partir de Macedo de Cavaleiros." },
    {
      question: "Qual o custo de deslocação a Mogadouro?",
      answer: "A deslocação a Mogadouro é de 25€. Chegamos em aproximadamente 50-55 minutos. Inclui todo o concelho."
    },
    { question: "Fazem instalações para explorações agrícolas?", answer: "Sim, temos experiência em instalações elétricas para lagares de azeite, adegas e explorações agrícolas." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ MOGADOURO E PLANALTO MIRANDÊS</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Electricista em Mogadouro</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Servimos todo o concelho de Mogadouro. Especialistas em instalações rurais e explorações agrícolas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />932 321 892</a>
              <a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Mogadouro" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Mogadouro</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Urgências Elétricas 24h", desc: "Apagões, curto-circuitos, disjuntores a disparar" },
                { icon: Shield, title: "Instalações Agrícolas", desc: "Lagares de azeite, adegas, armazéns, bombas de água" },
                { icon: CheckCircle, title: "Quadros Elétricos", desc: "Modernização de quadros antigos, aumento de potência" },
                { icon: Zap, title: "Certificação CERTIEL", desc: "Para venda, arrendamento ou nova ligação" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Mogadouro</h2><FAQSection faqs={faqs} /></div></section>

        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Electricista em Mogadouro?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos todo o Planalto Mirandês.</p>
            <a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />932 321 892</a>
          </div>
        </section>

        {/* Related Cities - Maillage interno SEO */}
        <RelatedCities 
          currentCity="Mogadouro" 
          currentCitySlug="electricista-mogadouro" 
        />
      </main>
      <Footer />
    </div>
  );
}
