import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO } from "@/hooks/useSEO";

interface Dica {
  title: string;
  content: string;
  icon: string;
}

export default function Dicas() {
  const config = ACTIVE_CONFIG;
  const dicas = getDicas('electricite');

  useSEO({
    title: `Dicas e Conselhos | ${config.businessName}`,
    description: `Dicas úteis para prevenir problemas de eletricidade. Conselhos de especialistas disponíveis 24h.`,
    canonical: `https://${config.domain}/dicas`,
  });

  return (
    <>
      <Header />
{/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dicas e Conselhos
            </h1>
            <p className="text-xl text-gray-700">
              Aprenda a prevenir problemas e a manter o seu sistema em bom estado
            </p>
          </div>
        </div>
      </section>

      {/* Dicas Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {dicas.map((dica, index) => (
                <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">{dica.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {dica.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {dica.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function getDicas(serviceType: 'electricite'): Dica[] {
  return [
    {
      icon: '⚡',
      title: 'Não sobrecarregue as tomadas',
      content: 'Evite ligar múltiplos aparelhos de alta potência na mesma tomada. Use extensões com proteção contra sobrecarga e nunca ligue várias extensões em cadeia.',
    },
    {
      icon: '🔌',
      title: 'Verifique os cabos regularmente',
      content: 'Inspecione os cabos elétricos dos seus aparelhos. Se estiverem gastos, rachados ou expostos, substitua-os imediatamente para evitar curto-circuitos.',
    },
    {
      icon: '💡',
      title: 'Use lâmpadas LED',
      content: 'As lâmpadas LED consomem até 80% menos energia que as incandescentes, duram muito mais tempo e geram menos calor, reduzindo o risco de sobreaquecimento.',
    },
    {
      icon: '🛡️',
      title: 'Instale proteções contra surtos',
      content: 'Proteja equipamentos sensíveis (computadores, TVs) com dispositivos de proteção contra picos de tensão. Trovoadas podem causar danos irreparáveis.',
    },
    {
      icon: '🔧',
      title: 'Não faça reparações sem conhecimento',
      content: 'Trabalhos elétricos mal executados podem causar incêndios ou choques elétricos fatais. Sempre contrate um eletricista certificado para reparações.',
    },
    {
      icon: '🏠',
      title: 'Mantenha o quadro elétrico acessível',
      content: 'Nunca bloqueie o acesso ao quadro elétrico. Em caso de emergência, precisa de conseguir desligar a eletricidade rapidamente.',
    },
    {
      icon: '🔍',
      title: 'Teste os disjuntores mensalmente',
      content: 'Verifique se os disjuntores funcionam corretamente desligando-os e voltando a ligar. Um disjuntor defeituoso pode não proteger em caso de sobrecarga.',
    },
    {
      icon: '💧',
      title: 'Mantenha a eletricidade longe da água',
      content: 'Nunca toque em interruptores ou aparelhos elétricos com as mãos molhadas. Instale tomadas com proteção IP44 em casas de banho e cozinhas.',
    },
    {
      icon: '📋',
      title: 'Faça certificação elétrica regular',
      content: 'A certificação elétrica é obrigatória e garante que a sua instalação está segura e conforme as normas. Renove-a periodicamente.',
    },
    {
      icon: '📞',
      title: 'Tenha sempre um contacto de emergência',
      content: 'Guarde o número de um eletricista de confiança disponível 24h. Problemas elétricos podem ser perigosos e requerem intervenção imediata.',
    },
  ];
}
