import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';

const faqItems = [
  { question: "Quando devo modernizar o quadro elétrico?", answer: "Se o seu quadro ainda tem fusíveis de porcelana, tem mais de 25 anos, ou dispara frequentemente, é hora de modernizar. Um quadro moderno com disjuntores e diferencial protege a sua família e os seus equipamentos." },
  { question: "Quanto custa modernizar um quadro elétrico?", answer: "A modernização de um quadro elétrico residencial custa entre €200 e €600, dependendo do número de circuitos e da complexidade da instalação. Inclui disjuntores, diferencial e certificação." },
  { question: "A modernização do quadro inclui certificação CERTIEL?", answer: "Sim, após a modernização emitimos o certificado de conformidade CERTIEL, obrigatório para contratos de eletricidade e seguros de habitação." }
];

export default function QuadrosEletricos() {
  useEffect(() => {
    document.title = "Quadros Elétricos: Instalação e Modernização em Trás-os-Montes | Staff Seekers";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', 'Instalação e modernização de quadros elétricos em Trás-os-Montes. Disjuntores, diferenciais, certificação CERTIEL. Electricista certificado 24h. Ligue +351 932 321 892.');
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Quadros Elétricos - Instalação e Modernização", "provider": { "@type": "Electrician", "name": "Staff Seekers", "telephone": ACTIVE_CONFIG.phone },
    "areaServed": { "@type": "GeoCircle", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 41.4393, "longitude": -6.9603 }, "geoRadius": "100000" },
    "description": "Instalação e modernização profissional de quadros elétricos em Trás-os-Montes com certificação CERTIEL."
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } }))
      }) }} />

      <section className="bg-gradient-to-br from-orange-500 to-orange-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Quadros Elétricos: Instalação e Modernização</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Modernize o seu quadro elétrico para maior segurança e eficiência. Electricista certificado em Trás-os-Montes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${ACTIVE_CONFIG.phone}`} className="bg-white text-orange-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">📞 Ligar Agora</a>
            <a href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`} className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">💬 WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Os Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Modernização de Quadros", desc: "Substituição de quadros antigos com fusíveis por quadros modernos com disjuntores automáticos e diferencial. Mais segurança para a sua família.", icon: "⚡" },
              { title: "Instalação Nova", desc: "Instalação de quadros elétricos para construção nova ou ampliação. Dimensionamento correto para as necessidades da sua casa.", icon: "🏠" },
              { title: "Certificação CERTIEL", desc: "Emissão de certificado de conformidade CERTIEL após instalação ou modernização. Obrigatório para contratos de eletricidade.", icon: "📋" },
              { title: "Reparação e Manutenção", desc: "Diagnóstico e reparação de quadros que disparam frequentemente, circuitos sobrecarregados e problemas de terra.", icon: "🔧" }
            ].map((service, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Sinais de que Precisa Modernizar</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { sign: "Fusíveis de porcelana", desc: "Tecnologia obsoleta e perigosa" },
              { sign: "Disjuntores que disparam", desc: "Circuitos sobrecarregados" },
              { sign: "Quadro com mais de 25 anos", desc: "Componentes degradados" },
              { sign: "Sem diferencial", desc: "Risco de eletrocussão" },
              { sign: "Cheiro a queimado", desc: "Ligações danificadas" },
              { sign: "Luzes que tremem", desc: "Problemas de contacto" }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white rounded-xl border border-orange-200">
                <h3 className="font-bold text-orange-700 mb-1">⚠️ {item.sign}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Preços Indicativos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { service: "Modernização simples", price: "Desde €200" },
              { service: "Quadro completo", price: "Desde €400" },
              { service: "Certificação CERTIEL", price: "Desde €150" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-orange-50 rounded-xl text-center">
                <h3 className="font-bold text-gray-900 mb-2">{item.service}</h3>
                <p className="text-2xl font-bold text-orange-600">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">* Preços indicativos. Orçamento final após inspeção.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de Modernizar o Quadro Elétrico?</h2>
          <p className="text-xl mb-8">Orçamento gratuito e sem compromisso. Electricista certificado.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${ACTIVE_CONFIG.phone}`} className="bg-white text-orange-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">📞 {ACTIVE_CONFIG.phone}</a>
            <a href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`} className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">💬 WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-900">Também servimos:</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { name: "Bragança", href: "/electricista-braganca" },
              { name: "Mirandela", href: "/electricista-mirandela" },
              { name: "Chaves", href: "/electricista-chaves" },
              { name: "Vila Real", href: "/electricista-vila-real" },
              { name: "Mogadouro", href: "/electricista-mogadouro" }
            ].map((city, i) => (
              <a key={i} href={city.href} className="p-3 bg-gray-50 rounded-lg text-center text-orange-600 hover:bg-orange-50 font-medium transition-colors">{city.name}</a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
