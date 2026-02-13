// Section garanties - Quick Win #3
// Style Hormozi : Risk Reversal, garanties massives, countdown

import { useEffect, useState } from 'react';
import { Shield, Clock, DollarSign } from 'lucide-react';
import { useSite } from '@/contexts/SiteContext';

export default function GuaranteesSection() {
  const { config } = useSite();
  const [timeLeft, setTimeLeft] = useState<string>('');

  // Calculer le temps restant (24 heures)
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const diff = tomorrow.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const guarantees = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: "30 Minutos ou GRÁTIS",
      description: "Se não chegarmos em 30 minutos, a intervenção é totalmente gratuita. Sem desculpas.",
      badge: "100% do seu dinheiro de volta",
      color: "bg-red-100 border-red-300",
      textColor: "text-red-800",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "2 Anos de Garantia",
      description: "Se o problema voltar em 2 anos, voltamos GRÁTIS. Quantas vezes for preciso.",
      badge: "Garantia vitalícia",
      color: "bg-green-100 border-green-300",
      textColor: "text-green-800",
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Preço Fixo Garantido",
      description: "O preço do orçamento é o preço final. Zero surpresas. Zero taxas escondidas.",
      badge: "Sem custos ocultos",
      color: "bg-amber-100 border-amber-300",
      textColor: "text-amber-800",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Garantias Que <span className="text-red-600">Ninguém</span> Mais Oferece
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Assumimos todo o risco para que você tenha 100% de paz de espírito
          </p>
        </div>

        {/* Cartes de garanties */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className={`${guarantee.color} border-4 rounded-2xl p-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all`}
            >
              {/* Icône */}
              <div className={`${guarantee.textColor} mb-6`}>
                {guarantee.icon}
              </div>

              {/* Titre */}
              <h3 className="text-2xl font-black mb-4">
                {guarantee.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-6">
                {guarantee.description}
              </p>

              {/* Badge */}
              <div className="inline-block bg-white px-4 py-2 rounded-full font-bold shadow-md">
                {guarantee.badge}
              </div>
            </div>
          ))}
        </div>

        {/* Countdown et warning */}
        <div className="text-center">
          <div className="inline-block bg-red-600 text-white px-8 py-4 rounded-2xl shadow-xl mb-6">
            <p className="text-2xl font-black mb-2">
              ⚠️ ATENÇÃO: Estas garantias só são válidas para as próximas
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-4xl font-black">{timeLeft}</span>
            </div>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            <strong>Porquê esta limitação?</strong> Oferecemos estas garantias excepcionais apenas aos primeiros clientes de cada dia. Amanhã as condições podem mudar.
          </p>
        </div>
      </div>
    </section>
  );
}