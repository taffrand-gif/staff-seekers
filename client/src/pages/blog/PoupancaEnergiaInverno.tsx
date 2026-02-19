// Blog article: "Poupar Energia no Inverno em Trás-os-Montes: 10 Dicas Práticas"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, Snowflake, Lightbulb, ThermometerSnowflake, CheckCircle, TrendingDown } from 'lucide-react';

export default function PoupancaEnergiaInverno() {
  useEffect(() => {
    document.title = "Poupar Energia no Inverno em Trás-os-Montes: 10 Dicas Práticas 2026 | Staff Seekers";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '10 dicas práticas para poupar energia no inverno transmontano. Aquecimento, iluminação, isolamento e soluções elétricas eficientes.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/blog/poupanca-energia-inverno-tras-os-montes');

    // JSON-LD Article Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Poupar Energia no Inverno em Trás-os-Montes: 10 Dicas Práticas",
      "description": "10 dicas práticas para poupar energia no inverno: aquecimento, iluminação e isolamento.",
      "author": {
        "@type": "Organization",
        "name": "Staff Seekers"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Staff Seekers",
        "logo": {
          "@type": "ImageObject",
          "url": "https://staff-seekers.com/logo.png"
        }
      },
      "datePublished": "2026-02-19",
      "dateModified": "2026-02-19"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const dicas = [
    {
      numero: 1,
      titulo: "Substitua Aquecedores Antigos por Bombas de Calor",
      descricao: "Bombas de calor (ar condicionado inverter) são 3-4x mais eficientes que aquecedores elétricos tradicionais.",
      poupanca: "Até 60% na conta de aquecimento",
      investimento: "600€ - 1.500€ por unidade"
    },
    {
      numero: 2,
      titulo: "Use Termostato Programável",
      descricao: "Programe o aquecimento para ligar 30 min antes de acordar e desligar quando sai. Temperatura ideal: 19-21°C.",
      poupanca: "20-30% no aquecimento",
      investimento: "50€ - 200€"
    },
    {
      numero: 3,
      titulo: "Isole Portas e Janelas",
      descricao: "Vedantes em portas e janelas evitam fugas de calor. Cortinas grossas também ajudam.",
      poupanca: "10-15% no aquecimento",
      investimento: "20€ - 100€"
    },
    {
      numero: 4,
      titulo: "Substitua Todas as Lâmpadas por LED",
      descricao: "LED consome 80% menos que incandescentes e dura 15-20 anos. No inverno, as luzes ficam acesas mais tempo.",
      poupanca: "50-80% na iluminação",
      investimento: "5€ - 15€ por lâmpada"
    },
    {
      numero: 5,
      titulo: "Desligue Aparelhos em Standby",
      descricao: "TV, computador, consolas em standby consomem 10-15W constantemente. Use réguas com interruptor.",
      poupanca: "5-10% no consumo total",
      investimento: "10€ - 30€ por régua"
    },
    {
      numero: 6,
      titulo: "Otimize o Uso do Esquentador/Caldeira",
      descricao: "Regule a temperatura para 50-55°C (suficiente). Faça manutenção anual para eficiência máxima.",
      poupanca: "15-20% no aquecimento de água",
      investimento: "Manutenção: 60€ - 100€/ano"
    },
    {
      numero: 7,
      titulo: "Aproveite a Tarifa Bi-Horária",
      descricao: "Lave roupa, louça e carregue dispositivos no período noturno (mais barato). Programe máquinas.",
      poupanca: "20-30% na conta de luz",
      investimento: "Mudança de tarifa: gratuita"
    },
    {
      numero: 8,
      titulo: "Instale Sensores de Movimento",
      descricao: "Em corredores, garagens e exteriores, sensores garantem que as luzes só acendem quando necessário.",
      poupanca: "30-50% na iluminação dessas zonas",
      investimento: "15€ - 40€ por sensor"
    },
    {
      numero: 9,
      titulo: "Mantenha Radiadores Limpos e Desobstruídos",
      descricao: "Radiadores cobertos ou sujos perdem 20-30% de eficiência. Não coloque móveis à frente.",
      poupanca: "10-20% no aquecimento",
      investimento: "Gratuito (limpeza)"
    },
    {
      numero: 10,
      titulo: "Considere Painéis Solares",
      descricao: "Mesmo no inverno, painéis solares produzem energia. Investimento a longo prazo com retorno em 6-8 anos.",
      poupanca: "50-70% na conta anual",
      investimento: "4.000€ - 8.000€ (sistema completo)"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-bold mb-4">
                ❄️ INVERNO TRANSMONTANO
              </span>
              <h1 className="text-4xl md:text-5xl font-black mb-6">
                Poupar Energia no Inverno em Trás-os-Montes
              </h1>
              <p className="text-xl opacity-90">
                10 dicas práticas para reduzir a conta de luz durante o inverno rigoroso.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                O <strong>inverno em Trás-os-Montes</strong> é rigoroso. Temperaturas negativas, neve e geada 
                fazem disparar o consumo de energia — especialmente aquecimento.
              </p>
              <p className="text-gray-700">
                Mas com as estratégias certas, pode reduzir a conta de luz em 30-50% sem passar frio. 
                Seja em <a href="/chaves" className="text-orange-500 hover:underline">Chaves</a>, 
                <a href="/braganca" className="text-orange-500 hover:underline"> Bragança</a> ou 
                <a href="/montalegre" className="text-orange-500 hover:underline"> Montalegre</a>, 
                estas dicas funcionam.
              </p>
            </div>
          </div>
        </section>

        {/* Contexto Trás-os-Montes */}
        <section className="py-12 bg-blue-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">O Desafio do Inverno Transmontano</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <Snowflake className="w-10 h-10 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 mb-3">
                    Trás-os-Montes tem um dos invernos mais frios de Portugal:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ThermometerSnowflake className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Temperaturas:</strong> -5°C a 5°C (dez-fev)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ThermometerSnowflake className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Neve:</strong> Frequente acima de 600m altitude</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ThermometerSnowflake className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Aquecimento:</strong> Necessário 4-5 meses/ano</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-sm text-gray-700">
                  <strong>Resultado:</strong> A conta de luz no inverno pode ser 2-3x superior ao verão. 
                  Mas não tem de ser assim!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10 Dicas */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-8 text-center">10 Dicas Para Poupar Energia</h2>
            <div className="space-y-6">
              {dicas.map((dica) => (
                <article key={dica.numero} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 border-l-4 border-orange-500">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {dica.numero}
                      </div>
                      <h3 className="text-xl font-bold">{dica.titulo}</h3>
                    </div>
                    <p className="text-gray-700 mb-4 ml-14">{dica.descricao}</p>
                    <div className="grid md:grid-cols-2 gap-3 ml-14">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Poupança</p>
                        <p className="font-bold text-green-700">{dica.poupanca}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Investimento</p>
                        <p className="font-bold text-blue-700">{dica.investimento}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Comparação de Aquecimento */}
        <section className="py-12 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">Comparação: Tipos de Aquecimento</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">
                Custo para aquecer uma divisão (20m²) durante 8h/dia no inverno:
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3">Tipo de Aquecimento</th>
                    <th className="text-center py-3">Potência</th>
                    <th className="text-right py-3">Custo/Mês</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-green-50">
                    <td className="py-3">
                      <strong>Bomba de Calor (Inverter)</strong><br/>
                      <span className="text-xs text-gray-600">Mais eficiente</span>
                    </td>
                    <td className="text-center py-3">2.500W</td>
                    <td className="text-right py-3 font-bold text-green-600">30€ - 40€</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <strong>Ar Condicionado Normal</strong><br/>
                      <span className="text-xs text-gray-600">Sem inverter</span>
                    </td>
                    <td className="text-center py-3">2.500W</td>
                    <td className="text-right py-3 font-bold">50€ - 65€</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <strong>Aquecedor a Óleo</strong><br/>
                      <span className="text-xs text-gray-600">Portátil</span>
                    </td>
                    <td className="text-center py-3">2.000W</td>
                    <td className="text-right py-3 font-bold">70€ - 85€</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="py-3">
                      <strong>Aquecedor Elétrico Tradicional</strong><br/>
                      <span className="text-xs text-gray-600">Menos eficiente</span>
                    </td>
                    <td className="text-center py-3">2.000W</td>
                    <td className="text-right py-3 font-bold text-red-600">90€ - 110€</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Conclusão:</strong> Substituir aquecedores tradicionais por bomba de calor inverter 
                  poupa <strong>60€-70€/mês</strong> por divisão!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifa Bi-Horária */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">Aproveite a Tarifa Bi-Horária</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">
                A <strong>tarifa bi-horária</strong> tem preços diferentes conforme a hora:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Moon className="w-6 h-6 text-blue-600" />
                    <h3 className="font-bold text-blue-700">Vazio (Noite)</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Horário:</strong> 22h-8h (dias úteis)<br/>
                    Todo o dia (fins de semana)
                  </p>
                  <p className="text-2xl font-black text-blue-700">~0,12€/kWh</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-6 h-6 text-orange-600" />
                    <h3 className="font-bold text-orange-700">Fora de Vazio</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Horário:</strong> 8h-22h (dias úteis)
                  </p>
                  <p className="text-2xl font-black text-orange-700">~0,20€/kWh</p>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-sm text-gray-700">
                  <strong>Estratégia:</strong> Programe máquinas de lavar, aquecimento de água e carregamento 
                  de dispositivos para o período noturno. Poupança: <strong>20-30%</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-12 bg-blue-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">Checklist de Poupança de Energia</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">Verifique se já implementou estas medidas:</p>
              <div className="space-y-2">
                <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700">Todas as lâmpadas são LED</span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700">Tenho bomba de calor inverter ou aquecimento eficiente</span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700">Portas e janelas têm vedantes</span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700">Uso tarifa bi-horária e aproveito o período noturno</span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700">Desligo aparelhos em standby</span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700">Tenho termostato programável</span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700">Esquentador/caldeira tem manutenção anual</span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-700">Sensores de movimento em zonas de passagem</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Investimento vs Poupança */}
        <section className="py-12 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">Investimento vs Poupança Anual</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3">Medida</th>
                    <th className="text-center py-3">Investimento</th>
                    <th className="text-center py-3">Poupança/Ano</th>
                    <th className="text-right py-3">Retorno</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3">Substituir 10 lâmpadas por LED</td>
                    <td className="text-center py-3">80€</td>
                    <td className="text-center py-3 text-green-600 font-bold">120€</td>
                    <td className="text-right py-3 font-bold">8 meses</td>
                  </tr>
                  <tr>
                    <td className="py-3">Bomba de calor inverter</td>
                    <td className="text-center py-3">1.000€</td>
                    <td className="text-center py-3 text-green-600 font-bold">400€</td>
                    <td className="text-right py-3 font-bold">2,5 anos</td>
                  </tr>
                  <tr>
                    <td className="py-3">Termostato programável</td>
                    <td className="text-center py-3">100€</td>
                    <td className="text-center py-3 text-green-600 font-bold">150€</td>
                    <td className="text-right py-3 font-bold">8 meses</td>
                  </tr>
                  <tr>
                    <td className="py-3">Vedantes portas/janelas</td>
                    <td className="text-center py-3">50€</td>
                    <td className="text-center py-3 text-green-600 font-bold">100€</td>
                    <td className="text-right py-3 font-bold">6 meses</td>
                  </tr>
                  <tr>
                    <td className="py-3">Sensores de movimento (3x)</td>
                    <td className="text-center py-3">90€</td>
                    <td className="text-center py-3 text-green-600 font-bold">80€</td>
                    <td className="text-right py-3 font-bold">13 meses</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Total:</strong> Investimento de ~1.300€ poupa <strong>850€/ano</strong>. 
                  Retorno em menos de 2 anos!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <TrendingDown className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-black mb-4">
              Reduza a Conta de Luz Este Inverno
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Instalação de LED, bombas de calor, sensores e otimização elétrica. 
              Orçamento gratuito em Trás-os-Montes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
                <Phone className="w-6 h-6" />
                932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20quero%20reduzir%20a%20conta%20de%20luz%20no%20inverno." className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-600 transition-all shadow-lg">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Artigos Relacionados */}
        <section className="py-12 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-black mb-6">Artigos Relacionados</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/blog/poupar-energia-eletrica-dicas" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-orange-500 mb-1">Como Poupar Energia Elétrica</h3>
                <p className="text-sm text-gray-600">10 dicas práticas para reduzir a conta de luz.</p>
              </a>
              <a href="/blog/automacao-residencial-casa-inteligente" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-orange-500 mb-1">Automação Residencial</h3>
                <p className="text-sm text-gray-600">Transforme a sua casa numa casa inteligente.</p>
              </a>
              <a href="/blog/iluminacao-exterior-jardim-guia" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-orange-500 mb-1">Iluminação Exterior LED</h3>
                <p className="text-sm text-gray-600">Guia completo de iluminação exterior eficiente.</p>
              </a>
              <a href="/blog/paineis-solares-tras-os-montes-guia" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-orange-500 mb-1">Painéis Solares</h3>
                <p className="text-sm text-gray-600">Guia completo de energia solar em Trás-os-Montes.</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
