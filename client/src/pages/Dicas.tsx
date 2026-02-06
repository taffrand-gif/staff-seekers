import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO } from "@/hooks/useSEO";

interface Dica {
  title: string;
  content: string;
  icon: string;
}

export default function Dicas() {
  const config = ACTIVE_CONFIG;
  const dicas = getDicas(config.type);

  useSEO({
    title: `Dicas e Conselhos | ${config.businessName}`,
    description: `Dicas úteis para prevenir problemas de ${config.type === 'plomberie' ? 'canalização' : 'eletricidade'}. Conselhos de especialistas disponíveis 24h.`,
    canonical: `https://${config.domain}/dicas`,
  });

  return (
    <>
      <Header />
      <WhatsAppButton />

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

function getDicas(serviceType: 'plomberie' | 'electricite'): Dica[] {
  if (serviceType === 'plomberie') {
    return [
      {
        icon: '💧',
        title: 'Verifique regularmente as torneiras',
        content: 'Inspecione todas as torneiras da sua casa mensalmente. Uma torneira a pingar pode desperdiçar até 20 litros de água por dia e aumentar significativamente a sua fatura.',
      },
      {
        icon: '🚿',
        title: 'Limpe os ralos com frequência',
        content: 'Evite entupimentos removendo cabelos e resíduos dos ralos semanalmente. Use uma rede de proteção para evitar que detritos entrem na canalização.',
      },
      {
        icon: '🔧',
        title: 'Não force válvulas e torneiras',
        content: 'Se uma torneira estiver difícil de fechar, não force. Isso pode danificar as vedações e causar fugas. Chame um profissional para ajustar ou substituir as peças.',
      },
      {
        icon: '❄️',
        title: 'Proteja os canos no inverno',
        content: 'Em períodos de frio intenso, isole os canos expostos para evitar congelamento e rebentamento. Deixe uma torneira a pingar ligeiramente durante a noite.',
      },
      {
        icon: '🚽',
        title: 'Não deite lixo na sanita',
        content: 'Nunca deite toalhitas, cotonetes, fraldas ou outros objetos na sanita. Mesmo produtos "biodegradáveis" podem causar entupimentos graves.',
      },
      {
        icon: '🔍',
        title: 'Verifique o contador de água',
        content: 'Feche todas as torneiras e verifique se o contador continua a rodar. Se sim, pode ter uma fuga escondida que precisa de ser reparada urgentemente.',
      },
      {
        icon: '🧼',
        title: 'Evite produtos químicos agressivos',
        content: 'Produtos de desentupimento químicos podem danificar as canalizações a longo prazo. Prefira métodos mecânicos ou chame um profissional.',
      },
      {
        icon: '⚙️',
        title: 'Faça manutenção preventiva',
        content: 'Agende uma inspeção anual com um canalizador profissional para detetar problemas antes que se tornem emergências caras.',
      },
      {
        icon: '💰',
        title: 'Invista em equipamentos de qualidade',
        content: 'Torneiras, autoclismos e esquentadores de qualidade duram mais e têm menos problemas. O investimento inicial compensa a longo prazo.',
      },
      {
        icon: '📞',
        title: 'Tenha sempre um contacto de emergência',
        content: 'Guarde o número de um canalizador de confiança disponível 24h. Em caso de fuga grave, cada minuto conta para minimizar os danos.',
      },
    ];
  } else {
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
}
