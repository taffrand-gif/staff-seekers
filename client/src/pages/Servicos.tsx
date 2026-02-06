import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO } from "@/hooks/useSEO";

export default function Servicos() {
  const config = ACTIVE_CONFIG;
  const formattedPhone = `${config.phone.slice(0, 3)} ${config.phone.slice(3, 6)} ${config.phone.slice(6)}`;

  useSEO({
    title: `Serviços de ${config.name} | ${config.businessName}`,
    description: `Conheça todos os nossos serviços de ${config.name.toLowerCase()} profissional. Disponíveis 24h/dia em todo o distrito de Bragança.`,
    canonical: `https://${config.domain}/servicos`,
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
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos Serviços de {config.name}
            </h1>
            <p className="text-xl text-gray-700">
              Soluções completas para todas as suas necessidades
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {config.services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{config.serviceEmoji}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service}</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Serviço profissional com garantia de qualidade. Intervenção rápida e eficaz com equipamento de última geração.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {config.type === 'plomberie' ? (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Desentupimentos</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Somos uma empresa perita em efetuar todo o tipo de desentupimentos, nomeadamente a nível de vivendas, apartamentos, restaurantes, hotéis, instituições e todo o tipo de edifícios públicos e privados. Temos equipas experientes na resolução de todo o tipo de entupimentos, disponíveis em permanência 24h/dia, 365 dias por ano.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Como tal, os nossos canalizadores estão aptos a resolver todo o tipo de problemas de canalização, nomeadamente de canos, sanitas, ralos, fossas, esgotos, caleiras, tubagens, algerozes, condutas de lixo, fugas de água, entre outros. Damos garantia de efetuar sempre um trabalho seguro, duradouro, eficiente e rápido.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Caso necessite de algum esclarecimento sobre desentupimentos, não hesite em falar com os nossos técnicos. A qualquer hora, solicite os nossos serviços. De imediato, um piquete de assistência será enviado ao local para tratar de efetuar o desentupimento, sem pôr em risco a saúde da sua família ou a dos seus vizinhos.
                </p>

                <div className="my-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Montagem e reparação de canalizações</h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Está a precisar de um canalizador profissional para efetuar uma montagem e reparação de canalizações no seu imóvel? Ou para remodelar e/ou substituir a atual canalização da casa de banho ou da cozinha? Chame-nos: a nossa empresa presta serviços de instalação, assistência e manutenção técnica de canalizações.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    De referir que todos os nossos técnicos têm formação contínua na área e muita prática em intervir em qualquer área doméstica ou industrial, procedendo a todo o tipo de desentupimentos ou reparações, nomeadamente de fossas, canos, esgotos, casas de banho, sanitas, lava loiças, condutas de lixo, entre muitos outros.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Temos piquetes de canalizadores, os quais estão disponíveis 24 horas por dia, todo o ano, para responderem a todas as urgências, no próprio dia. Se precisa de nós, não hesite em nos contactar, e pedir um orçamento grátis. Com o serviço de montagem de reparação de canalizações da nossa empresa, a sua vida fica mais fácil!
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Reparação de Curto-Circuitos</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Somos uma empresa perita em efetuar todo o tipo de reparações elétricas, nomeadamente a nível de vivendas, apartamentos, restaurantes, hotéis, instituições e todo o tipo de edifícios públicos e privados. Temos equipas experientes na resolução de todo o tipo de avarias elétricas, disponíveis em permanência 24h/dia, 365 dias por ano.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Como tal, os nossos eletricistas estão aptos a resolver todo o tipo de problemas elétricos, nomeadamente curto-circuitos, disjuntores, quadros elétricos, tomadas, interruptores, fiação defeituosa, entre outros. Damos garantia de efetuar sempre um trabalho seguro, duradouro, eficiente e rápido.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Caso necessite de algum esclarecimento sobre reparações elétricas, não hesite em falar com os nossos técnicos. A qualquer hora, solicite os nossos serviços. De imediato, um piquete de assistência será enviado ao local para tratar de efetuar a reparação, sem pôr em risco a segurança da sua família ou a dos seus vizinhos.
                </p>

                <div className="my-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Instalação de Quadros Elétricos</h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Está a precisar de um eletricista profissional para efetuar uma instalação ou reparação de quadros elétricos no seu imóvel? Ou para remodelar e/ou substituir o atual sistema elétrico da casa? Chame-nos: a nossa empresa presta serviços de instalação, assistência e manutenção técnica de sistemas elétricos.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    De referir que todos os nossos técnicos têm formação contínua na área e muita prática em intervir em qualquer área doméstica ou industrial, procedendo a todo o tipo de instalações ou reparações elétricas, nomeadamente de quadros, disjuntores, tomadas, interruptores, fiação, entre muitos outros.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Temos piquetes de eletricistas, os quais estão disponíveis 24 horas por dia, todo o ano, para responderem a todas as urgências, no próprio dia. Se precisa de nós, não hesite em nos contactar, e pedir um orçamento grátis. Com o serviço de instalação e reparação elétrica da nossa empresa, a sua vida fica mais fácil!
                  </p>
                </div>
              </>
            )}

            <div className="text-center my-12">
              <button
                onClick={handlePhoneClick}
                className="bg-red-600 hover:bg-red-700 text-white text-xl font-bold px-10 py-3 rounded-lg transition-colors"
              >
                LIGUE AGORA: {formattedPhone}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Zona de Cobertura
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Prestamos serviços em todo o distrito de Bragança, incluindo:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900">Alfândega da Fé</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900">Bragança</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900">Carrazeda de Ansiães</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900">Freixo de Espada à Cinta</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900">Macedo de Cavaleiros</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900">Miranda do Douro</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900">Mirandela</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900">Mogadouro</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900">Torre de Moncorvo</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900">Vila Flor</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900">Vimioso</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900">Vinhais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
