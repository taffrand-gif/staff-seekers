import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import { PriceCalculator } from "@/components/PriceCalculator";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO, generateSEOTitle, generateMetaDescription, generateLocalBusinessSchema, generateKeywords, generateOrganizationSchema } from "@/hooks/useSEO";

export default function Home() {
  const { gradient } = ACTIVE_CONFIG;
  const config = ACTIVE_CONFIG;
  const formattedPhone = `${config.phone.slice(0, 3)} ${config.phone.slice(3, 6)} ${config.phone.slice(6)}`;

  // SEO optimisé avec Open Graph, Twitter Cards, et Schema.org enrichi
  const seoTitle = generateSEOTitle();
  const seoDescription = generateMetaDescription();
  const seoKeywords = generateKeywords();
  
  // Combiner LocalBusiness et Organization schemas
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLocalBusinessSchema(),
      generateOrganizationSchema()
    ]
  };
  
  useSEO({
    title: seoTitle,
    description: seoDescription,
    canonical: `https://${config.domain}`,
    keywords: seoKeywords,
    schema: combinedSchema,
    image: `https://${config.domain}/og-image.jpg`,
    ogType: 'website',
  });

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': `${config.googleAdsId}/${config.googleAdsConversionLabel}`,
        'event_callback': () => {
          window.location.href = `tel:${config.phone}`;
        }
      });
    } else {
      window.location.href = `tel:${config.phone}`;
    }
  };

  return (
    <>
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge Disponible 24/7 */}
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6 animate-pulse">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="font-bold">DISPONÍVEL 24H/7</span>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  {config.name} 24H
                </h1>
                
                <p className="text-2xl text-gray-700 mb-8">
                  Precisa de um {config.name.toLowerCase()} profissional ainda hoje? Contacte-nos.
                </p>

                {/* Statistiques économies */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                  <p className="text-lg font-semibold text-gray-800">💰 Economize até 120€/ano</p>
                  <p className="text-sm text-gray-600">com manutenção regular e reparações imediatas</p>
                </div>

                {/* TÉLÉPHONE GÉANT */}
                <div className="mb-8">
                  <p className="text-sm text-gray-600 mb-2 font-semibold">⚡ URGÊNCIA 24/7 - RESPOSTA EM &lt; 30MIN</p>
                  <button
                    onClick={handlePhoneClick}
                    className="text-5xl md:text-6xl font-black hover:opacity-90 transition-opacity flex items-center gap-4"
                    style={{color: gradient.from}}
                  >
                    <span>📞</span>
                    <span>{formattedPhone}</span>
                  </button>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handlePhoneClick}
                    className="text-white text-xl font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-3"
                    style={{backgroundColor: gradient.from}}
                  >
                    <span>📞</span>
                    <span>LIGUE AGORA: {formattedPhone}</span>
                  </button>
                  <a
                    href={`https://wa.me/${config.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white text-xl font-bold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-3"
                  >
                    <span>💬</span>
                    <span>WHATSAPP 24/7</span>
                  </a>
                </div>
              </div>

              {/* Right: Image + Badges */}
              <div className="relative">
                <img
                  src="/photos/plumber-hero.jpg"
                  alt="Canalizador profissional"
                  className="rounded-lg shadow-2xl w-full"
                />
                
                {/* Badges overlay */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">🛡️</div>
                    <div>
                      <p className="font-bold text-lg" style={{color: gradient.from}}>1 ANO DE GARANTIA</p>
                      <p className="text-sm text-gray-600">Em todos os serviços</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                  <div className="text-center">
                    <p className="text-4xl font-black" style={{color: gradient.from}}>+15</p>
                    <p className="text-sm font-semibold text-gray-700">Anos de<br/>Experiência</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-2">⚡</div>
                <p className="text-2xl font-bold" style={{color: gradient.from}}>&lt; 30min</p>
                <p className="text-sm text-gray-600">Tempo de resposta</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-2">👨‍🔧</div>
                <p className="text-2xl font-bold" style={{color: gradient.from}}>100%</p>
                <p className="text-sm text-gray-600">Equipa qualificada</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-2">⭐</div>
                <p className="text-2xl font-bold" style={{color: gradient.from}}>4.9/5</p>
                <p className="text-sm text-gray-600">Avaliação clientes</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-2">🛡️</div>
                <p className="text-2xl font-bold" style={{color: gradient.from}}>1 Ano</p>
                <p className="text-sm text-gray-600">Garantia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <PriceCalculator />
          </div>
        </div>
      </section>

      {/* Testimonials Section - ULTRA VISIBLE */}
      <TestimonialsSection />

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg leading-relaxed text-gray-700">
              A <strong>empresa {config.businessName}</strong>, reconhecida nesta área de atuação há vários anos, presta serviços de instalação, assistência e manutenção técnica de {config.type === 'plomberie' ? 'canalizações' : 'sistemas elétricos'}, efetuando deslocações ao domicílio dos clientes, 24 horas por dia, todos os dias do ano, incluindo fins de semana e feriados.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Temos ao seu dispor uma vasta equipa de {config.name.toLowerCase()}s credenciados e de equipamentos adequados a todo o tipo de situações de maior ou menor gravidade, que possam ocorrer tanto em espaços domésticos (apartamentos, moradias e condomínios), como em espaços empresariais (restaurantes, comércios, escolas, ginásios, hotéis, hospitais, etc.).
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Como tal, a nossa equipa de peritos procede na hora a todo o tipo de {config.type === 'plomberie' ? 'desentupimentos, limpezas ou reparações, nomeadamente de fossas, canos, esgotos, casas de banho, sanitas, banheiras, lavatórios, lava loiças, condutas de lixo' : 'reparações elétricas, instalações de quadros elétricos, deteção de avarias, certificações elétricas'}, e somos igualmente especialistas na deteção e respetiva reparação de {config.type === 'plomberie' ? 'fugas de água ou de gás' : 'curto-circuitos e falhas elétricas'}.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Trabalhamos a todo o gás! Fale connosco, descreva-nos o problema que está a detetar. Responda às perguntas dos nossos colaboradores e apresentaremos uma estimativa grátis do serviço a realizar, sem qualquer compromisso. Para qualquer problema, dispomos de {config.name.toLowerCase()}s qualificados para o resolver com as soluções mais cómodas e económicas.
            </p>

            <div className="text-center my-12">
              <button
                onClick={handlePhoneClick}
                className=" hover:bg-red-700 text-white text-xl font-bold px-10 py-3 rounded-lg transition-colors" style={{backgroundColor: gradient.from}}
              >
                LIGUE AGORA: {formattedPhone}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {config.name} para {config.type === 'plomberie' ? 'deteção e reparação de fugas de água' : 'reparação de curto-circuitos e instalações elétricas'}
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Está a verificar {config.type === 'plomberie' ? 'uma perda de água devido a um cano avariado ou danificado' : 'problemas elétricos como curto-circuitos ou disjuntores a saltar'}? Não fique preocupado. Contacte-nos, pois dispomos de uma equipa séria e altamente profissional de {config.name.toLowerCase()}s para {config.type === 'plomberie' ? 'a deteção e reparação de fugas de água' : 'a reparação de avarias elétricas'}, com intervenções 24/dia na sua empresa ou domicílio, para a sua total comodidade.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Todos os nossos {config.name.toLowerCase()}s, com elevada experiência na área, estão habilitados a realizar qualquer intervenção, seja na instalação clássica ou na renovação de um sistema existente, sempre com recurso às mais inovadoras tecnologias{config.type === 'plomberie' ? ', tais como câmaras termográficas,' : ''} e sem danificar as paredes ou a estrutura do edifício.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Somos uma equipa profissional sempre atualizada com as mais novas tecnologias, podendo assim fornecer aos nossos clientes uma prestação de serviços de {config.name.toLowerCase()}s com a maior segurança e máxima fiabilidade. Fale connosco para obter preços competitivos e transparentes.
            </p>
          </div>
        </div>
      </section>

      {/* 24H Service Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {config.name} com piquetes serviço 24H
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Necessita de uma equipa de {config.name.toLowerCase()}s com piquetes de serviço 24h? Asseguramos todos os {config.type === 'plomberie' ? 'desentupimentos' : 'reparações elétricas'} urgentes, que possam ocorrer tanto em espaços domésticos (apartamentos, moradias e condomínios), como em espaços empresariais (restaurantes, comércios, escolas, ginásios, hotéis, hospitais, etc.)
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Ligue-nos, se está a enfrentar uma situação de urgência, que necessita de uma intervenção rápida e eficaz dos nossos {config.name.toLowerCase()}s experientes e qualificados. Dispomos de um piquete de assistência técnica, a qual está disponível todos os dias da semana, 24h sobre 24 horas, para dar resposta ao seu pedido urgente.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Só trabalhamos, refira-se, com produtos inovadores e com equipamento topo de gama. Por isso, já sabe, contacte-nos, para serviço de {config.name.toLowerCase()}s com piquetes de serviço 24h, a qualquer hora em qualquer local, interior ou exterior. A sua satisfação é a maior recompensa do nosso trabalho. Peça-nos, sem mais demoras, a sua estimativa sem compromisso.
            </p>

            <div className="text-center my-12">
              <button
                onClick={handlePhoneClick}
                className=" hover:bg-red-700 text-white text-xl font-bold px-10 py-3 rounded-lg transition-colors" style={{backgroundColor: gradient.from}}
              >
                LIGUE AGORA: {formattedPhone}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Prices Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {config.name}s aos melhores preços
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Se precisa de um serviço sério e profissional de {config.name.toLowerCase()}s aos melhores preços, saiba que a nossa equipa é formada por técnicos qualificados e certificados na área, que resolvem na hora, e de forma rápida e eficaz, qualquer {config.type === 'plomberie' ? 'entupimento' : 'avaria elétrica'} que verifique na sua casa ou no local onde trabalha.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Efetivamente, {config.type === 'plomberie' ? 'um entupimento ou uma fuga de água' : 'um curto-circuito ou uma avaria elétrica'}, se for grave, requer a intervenção de profissionais na área que, tal como os nossos, dispõem das ferramentas, dos equipamentos e dos produtos mais eficazes para realizarem um trabalho seguro e sem danificar {config.type === 'plomberie' ? 'as suas canalizações ou as paredes do edifício' : 'o seu sistema elétrico ou a estrutura do edifício'}.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Livre-se de todas as preocupações! Contacte-nos agora para adjudicar o nosso serviço de {config.name.toLowerCase()}s aos melhores preços que poderá encontrar no mercado. Ligue-nos agora para obter preços competitivos e sem qualquer tipo de compromisso associado. Para si, temos disponibilidade imediata.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Razões para selecionar a {config.businessName}
            </h2>

            <p className="text-lg text-gray-700 text-center mb-12">
              A {config.businessName} atua no mercado há vários anos e foi ficando conhecida pelos seus serviços de excelência.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Serviços 24 horas por dia / 365 dias por ano</h3>
                  <p className="text-gray-700">Disponíveis a qualquer hora, incluindo fins de semana e feriados.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Piquete de assistência técnica 24h</h3>
                  <p className="text-gray-700">Equipa de urgência sempre pronta para intervir.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Técnicos credenciados e qualificados</h3>
                  <p className="text-gray-700">Profissionais certificados com vasta experiência.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Preços competitivos</h3>
                  <p className="text-gray-700">Sem compromisso e totalmente transparentes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </>
  );
}
