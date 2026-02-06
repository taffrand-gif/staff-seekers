import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";

interface Dica {
  title: string;
  content: string;
  icon: string;
}

export default function Dicas() {
  const config = ACTIVE_CONFIG;
  const dicas = getDicas(config.type);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container py-4">
          <a href="/" className="text-2xl font-bold text-gray-900">
            {config.businessName}
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dicas e Conselhos
          </h1>
          <p className="text-xl opacity-90">
            Aprenda a prevenir problemas e a manter o seu sistema em bom estado
          </p>
        </div>
      </div>

      {/* Dicas Grid */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {dicas.map((dica, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{dica.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {dica.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {dica.content}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Precisa de Ajuda Profissional?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Estamos disponíveis 24/7 para urgências
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:+${config.whatsappNumber}`}
              className="bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              📞 Ligar Agora
            </a>
            <a
              href={`https://wa.me/${config.whatsappNumber}`}
              className="bg-[#25D366] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#20ba5a] transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container text-center">
          <p className="mb-2">
            {config.businessName} - {config.name} 24h
          </p>
          <p className="text-gray-400 text-sm">
            📞 {formatPhone(config.phone)} | 💬 WhatsApp
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © 2024 {config.businessName}. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
}

function getDicas(serviceType: 'plomberie' | 'electricite'): Dica[] {
  if (serviceType === 'plomberie') {
    return [
      {
        icon: "💧",
        title: "Previna Fugas de Água",
        content: "Verifique regularmente torneiras, autoclismos e tubagens visíveis. Pequenas fugas podem desperdiçar centenas de litros por mês e causar danos graves. Se notar manchas de humidade ou mofo, contacte um profissional.",
      },
      {
        icon: "🚿",
        title: "Manutenção de Esquentadores",
        content: "Faça manutenção anual do seu esquentador ou caldeira. Limpe o filtro de entrada de água regularmente e verifique se não há fugas. Uma manutenção preventiva prolonga a vida útil do equipamento e previne avarias.",
      },
      {
        icon: "🔧",
        title: "Evite Entupimentos",
        content: "Nunca deite gorduras, óleos ou restos de comida pelo ralo. Use filtros nas pias e ralos. Evite deitar papel higiénico em excesso ou objetos sólidos no WC. Em caso de entupimento, não use produtos químicos agressivos.",
      },
      {
        icon: "❄️",
        title: "Proteja as Canalizações no Inverno",
        content: "No inverno, proteja as tubagens exteriores do frio. Isole canos expostos e, em caso de geada, deixe as torneiras a pingar ligeiramente. Canalizações congeladas podem rebentar e causar danos graves.",
      },
      {
        icon: "🔍",
        title: "Conheça a Sua Instalação",
        content: "Saiba onde fica a torneira de corte geral da água. Em caso de fuga grave, feche-a imediatamente. Mantenha o número de um canalizador de urgência sempre à mão.",
      },
      {
        icon: "💦",
        title: "Pressão de Água Adequada",
        content: "A pressão de água ideal é entre 2 e 4 bar. Pressão muito alta pode danificar equipamentos e causar fugas. Pressão muito baixa indica possíveis problemas na instalação. Instale um regulador de pressão se necessário.",
      },
      {
        icon: "🛁",
        title: "Limpeza de Sifões",
        content: "Limpe os sifões das pias e lavatórios regularmente. Acumulação de resíduos pode causar maus cheiros e entupimentos. É uma operação simples que pode fazer você mesmo.",
      },
      {
        icon: "⚠️",
        title: "Sinais de Alerta",
        content: "Fique atento a sinais como: água com cor estranha, maus cheiros, ruídos nas canalizações, manchas de humidade, aumento inexplicável na conta da água. Estes podem indicar problemas que requerem atenção profissional.",
      },
      {
        icon: "🏠",
        title: "Manutenção Preventiva",
        content: "Faça uma inspeção anual completa da sua instalação de canalizações. Prevenir é sempre mais barato que remediar. Um canalizador profissional pode identificar problemas antes que se tornem graves.",
      },
      {
        icon: "📱",
        title: "Em Caso de Emergência",
        content: "Tenha sempre à mão o número de um canalizador de urgência 24h. Em caso de fuga grave, feche a água imediatamente e contacte um profissional. Não tente reparações complexas sem conhecimentos adequados.",
      },
    ];
  } else {
    return [
      {
        icon: "⚡",
        title: "Evite Sobrecargas",
        content: "Não ligue demasiados aparelhos numa única tomada ou extensão. Sobrecargas podem causar aquecimento excessivo, danificar equipamentos e provocar incêndios. Use extensões com proteção contra sobrecarga.",
      },
      {
        icon: "🔌",
        title: "Verifique Fios e Tomadas",
        content: "Inspecione regularmente fios, tomadas e fichas. Sinais de aquecimento, cheiro a queimado, faíscas ou descoloração indicam problemas graves. Substitua imediatamente qualquer equipamento danificado.",
      },
      {
        icon: "💡",
        title: "Use Lâmpadas Adequadas",
        content: "Respeite sempre a potência máxima indicada nas luminárias. Lâmpadas de potência excessiva podem causar aquecimento e incêndios. Prefira lâmpadas LED que consomem menos energia e duram mais.",
      },
      {
        icon: "🏠",
        title: "Disjuntores e Fusíveis",
        content: "Nunca substitua fusíveis por outros de maior capacidade. Se o disjuntor salta frequentemente, há um problema que requer atenção profissional. Não tente 'enganar' as proteções elétricas.",
      },
      {
        icon: "🌧️",
        title: "Eletricidade e Água Não Combinam",
        content: "Nunca toque em equipamentos elétricos com as mãos molhadas. Mantenha aparelhos elétricos longe de água. Instale disjuntores diferenciais em casas de banho e cozinhas para proteção extra.",
      },
      {
        icon: "🔧",
        title: "Manutenção do Quadro Elétrico",
        content: "Faça inspeção anual do quadro elétrico por um profissional certificado. Verifique se não há sinais de aquecimento, oxidação ou danos. Mantenha o quadro limpo e acessível.",
      },
      {
        icon: "⚠️",
        title: "Sinais de Perigo",
        content: "Fique atento a: disjuntores que saltam frequentemente, luzes que piscam, tomadas quentes, cheiro a queimado, faíscas. Estes são sinais de problemas graves que requerem atenção imediata.",
      },
      {
        icon: "🛡️",
        title: "Proteção Contra Raios",
        content: "Instale proteção contra sobretensões (para-raios) especialmente se vive numa zona rural ou exposta. Desconecte equipamentos sensíveis durante tempestades. Não use chuveiro elétrico durante trovoadas.",
      },
      {
        icon: "👶",
        title: "Segurança Infantil",
        content: "Use protetores de tomadas em casas com crianças. Mantenha fios e extensões fora do alcance. Ensine as crianças sobre os perigos da eletricidade. Nunca deixe crianças brincarem perto de quadros elétricos.",
      },
      {
        icon: "📱",
        title: "Em Caso de Emergência",
        content: "Tenha sempre à mão o número de um eletricista de urgência 24h. Em caso de cheiro a queimado ou faíscas, desligue o disjuntor geral imediatamente. Nunca tente reparações elétricas sem conhecimentos adequados.",
      },
    ];
  }
}
