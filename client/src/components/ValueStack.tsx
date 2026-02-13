// Value stack - Quick Win #4
// Style Hormozi : Montrer tout ce que le client reçoit, ancrage de prix

import { Check } from 'lucide-react';
import { useSite } from '@/contexts/SiteContext';

export default function ValueStack() {
  const { config } = useSite();

  // Prix fictifs pour démonstration (à adapter avec les vrais prix)
  const valueItems = [
    { item: "Diagnóstico Profissional Completo", value: "150€", included: true },
    { item: "Intervenção de Emergência 24/7", value: "200€", included: true },
    { item: "Peças e Material de Qualidade", value: "120€", included: true },
    { item: "Garantia de 2 Anos", value: "297€", included: true },
    { item: "Limpeza e Arrumação Final", value: "80€", included: true, bonus: true },
  ];

  const totalValue = valueItems.reduce((sum, item) => sum + parseInt(item.value), 0);
  const price = 80; // Prix actuel de l'intervention
  const savings = totalValue - price;

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-4xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            O Que Recebe Por Apenas <span className="text-green-600">{price}€</span>?
          </h2>
          <p className="text-xl text-gray-600">
            (Valor Real: <span className="line-through">{totalValue}€</span>)
          </p>
        </div>

        {/* Liste des items */}
        <div className="space-y-4 mb-8">
          {valueItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 border-4 border-gray-200 rounded-2xl hover:border-amber-500 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${item.bonus ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {item.included ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <span className="text-lg font-black">+</span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-black">{item.item}</h3>
                  {item.bonus && (
                    <span className="text-sm font-bold text-green-600">BÓNUS GRÁTIS</span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-gray-900">{item.value}</div>
                <div className="text-sm text-gray-500">
                  {item.included ? '✅ INCLUÍDO' : '❌ NÃO INCLUÍDO'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total et économies */}
        <div className="border-t-4 border-black pt-8 mt-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-black">VALOR TOTAL:</p>
              <p className="text-gray-500">Tudo o que recebe</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 line-through text-2xl">{totalValue}€</p>
              <p className="text-5xl font-black text-green-600">Apenas {price}€</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-red-100 border-4 border-red-300 px-8 py-4 rounded-2xl">
              <p className="text-3xl font-black text-red-700">
                Poupa {savings}€ ({Math.round((savings / totalValue) * 100)}% de desconto)
              </p>
              <p className="text-gray-600 mt-2">
                ⚠️ Esta oferta é limitada aos primeiros 5 clientes de hoje
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.location.href = `tel:${config.phone.replace(/\s/g, '')}`}
            className="text-2xl md:text-3xl px-12 py-6 font-black text-white rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            style={{ backgroundColor: config.colors.primary }}
          >
            QUERO APROVEITAR ESTA OFERTA
          </button>
          <p className="text-gray-500 mt-4">
            📞 Ligue agora e garanta o desconto: {config.phone}
          </p>
        </div>
      </div>
    </section>
  );
}