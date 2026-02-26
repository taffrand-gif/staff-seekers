// Blog article: "Instalar Carregador de Veículo Elétrico em Casa: Guia 2026"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, Zap, Car, CheckCircle, AlertTriangle } from 'lucide-react';

export default function CarregadorVeiculoEletrico() {
  useEffect(() => {
    document.title = "Instalar Carregador de Veículo Elétrico em Casa: Guia Completo 2026 | Staff Seekers";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Guia completo para instalar wallbox em casa. Tipos de carregadores, potência, custos, incentivos e instalação profissional em Trás-os-Montes.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/blog/carregador-veiculo-eletrico-casa');

    // JSON-LD Article Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Instalar Carregador de Veículo Elétrico em Casa: Guia 2026",
      "description": "Guia completo para instalar wallbox: tipos, potência, custos e instalação profissional.",
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

  const tiposCarregadores = [
    {
      tipo: "Wallbox 3,7 kW (Monofásico)",
      potencia: "3,7 kW",
      tempo: "8-10h para carga completa",
      ideal: "Carregamento noturno, uso diário moderado",
      custo: "400€ - 800€"
    },
    {
      tipo: "Wallbox 7,4 kW (Monofásico)",
      potencia: "7,4 kW",
      tempo: "4-6h para carga completa",
      ideal: "Uso diário intenso, carregamento rápido",
      custo: "600€ - 1.200€"
    },
    {
      tipo: "Wallbox 11 kW (Trifásico)",
      potencia: "11 kW",
      tempo: "2-4h para carga completa",
      ideal: "Múltiplos veículos ou uso profissional",
      custo: "800€ - 1.500€"
    },
    {
      tipo: "Wallbox 22 kW (Trifásico)",
      potencia: "22 kW",
      tempo: "1-2h para carga completa",
      ideal: "Carregamento ultra-rápido (requer trifásico)",
      custo: "1.200€ - 2.500€"
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
                🔌 VEÍCULOS ELÉTRICOS
              </span>
              <h1 className="text-4xl md:text-5xl font-black mb-6">
                Instalar Carregador de Veículo Elétrico em Casa
              </h1>
              <p className="text-xl opacity-90">
                Guia completo para instalar wallbox: tipos, custos e instalação profissional.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                Comprou um <strong>veículo elétrico</strong>? Parabéns! Agora precisa de um carregador em casa 
                para carregar de forma conveniente e económica.
              </p>
              <p className="text-gray-700">
                Seja em <a href="/eletricista-vila-real" className="text-orange-500 hover:underline">Vila Real</a>, 
                <a href="/eletricista-braganca" className="text-orange-500 hover:underline"> Bragança</a> ou 
                <a href="/eletricista-chaves" className="text-orange-500 hover:underline"> Chaves</a>, 
                instalar uma <strong>wallbox</strong> é mais simples do que pensa — e pode ter incentivos do Estado.
              </p>
            </div>
          </div>
        </section>

        {/* Porquê Wallbox */}
        <section className="py-12 bg-blue-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">Porquê Instalar Uma Wallbox?</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Carregamento 3-5x mais rápido</strong> que tomada normal</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Segurança total</strong> (proteções integradas)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Poupança</strong> (tarifa bi-horária noturna)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Controlo inteligente</strong> (app, programação)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Valorização do imóvel</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Incentivos do Estado</strong> (até 500€)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Carregadores */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-8 text-center">Tipos de Carregadores (Wallbox)</h2>
            <div className="space-y-6">
              {tiposCarregadores.map((item, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-orange-500" />
                    {item.tipo}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Potência</p>
                      <p className="font-bold">{item.potencia}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Tempo de Carga</p>
                      <p className="font-bold">{item.tempo}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3"><strong>Ideal para:</strong> {item.ideal}</p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm"><strong>Custo (equipamento + instalação):</strong> {item.custo}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Requisitos */}
        <section className="py-12 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">Requisitos Para Instalação</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold mb-1">Potência Contratada Adequada</p>
                    <p className="text-sm text-gray-700">
                      Para wallbox 7,4 kW, recomenda-se potência contratada de <strong>10,35 kVA ou superior</strong>. 
                      Podemos ajudar a aumentar se necessário.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold mb-1">Quadro Elétrico com Espaço</p>
                    <p className="text-sm text-gray-700">
                      Necessário instalar disjuntor dedicado e diferencial. Se o quadro estiver cheio, 
                      podemos instalar quadro secundário.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold mb-1">Local de Instalação</p>
                    <p className="text-sm text-gray-700">
                      Garagem, alpendre ou parede exterior próxima do local de estacionamento. 
                      Distância máxima recomendada: 25 metros do quadro.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold mb-1">Ligação à Terra</p>
                    <p className="text-sm text-gray-700">
                      Obrigatório ter instalação com terra. Se não tiver, instalamos vareta de terra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processo de Instalação */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">Processo de Instalação</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold mb-1">Visita Técnica</h3>
                  <p className="text-sm text-gray-700">
                    Avaliamos a instalação elétrica, potência contratada e local de instalação.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold mb-1">Orçamento Personalizado</h3>
                  <p className="text-sm text-gray-700">
                    Recomendamos o tipo de wallbox ideal e apresentamos orçamento detalhado.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold mb-1">Instalação Profissional</h3>
                  <p className="text-sm text-gray-700">
                    Instalamos circuito dedicado, proteções, wallbox e testamos tudo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold mb-1">Configuração e Formação</h3>
                  <p className="text-sm text-gray-700">
                    Configuramos a wallbox, ligamos à app e ensinamos a usar.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="font-bold mb-1">Certificação</h3>
                  <p className="text-sm text-gray-700">
                    Emitimos certificado elétrico da instalação (obrigatório para incentivos).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Incentivos */}
        <section className="py-12 bg-green-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">Incentivos do Estado (2026)</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">
                O <strong>Fundo Ambiental</strong> oferece incentivos para instalação de carregadores domésticos:
              </p>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-4">
                <p className="font-bold text-green-700 mb-2">Até 500€ de Apoio</p>
                <p className="text-sm text-gray-700">
                  Comparticipação de 80% do custo de instalação (máximo 500€) para particulares.
                </p>
              </div>
              <p className="text-sm text-gray-700 mb-3"><strong>Requisitos:</strong></p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ser proprietário de veículo elétrico</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Instalação por eletricista certificado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Wallbox com gestão inteligente de carga</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Certificado elétrico da instalação</span>
                </li>
              </ul>
              <p className="text-xs text-gray-600 mt-4">
                * Ajudamos com toda a documentação para candidatura ao incentivo.
              </p>
            </div>
          </div>
        </section>

        {/* Poupança */}
        <section className="py-12 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">Quanto Poupa Carregar em Casa?</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">
                Comparação de custos para <strong>100 km</strong> (consumo médio 15 kWh):
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3">Método de Carregamento</th>
                    <th className="text-right py-3">Custo/100km</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3">
                      <strong>Casa (tarifa noturna)</strong><br/>
                      <span className="text-xs text-gray-600">0,12€/kWh</span>
                    </td>
                    <td className="text-right py-3 font-bold text-green-600">1,80€</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <strong>Casa (tarifa normal)</strong><br/>
                      <span className="text-xs text-gray-600">0,20€/kWh</span>
                    </td>
                    <td className="text-right py-3 font-bold">3,00€</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <strong>Posto público</strong><br/>
                      <span className="text-xs text-gray-600">0,35€/kWh</span>
                    </td>
                    <td className="text-right py-3 font-bold text-orange-600">5,25€</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <strong>Carro a gasolina</strong><br/>
                      <span className="text-xs text-gray-600">7L/100km × 1,80€/L</span>
                    </td>
                    <td className="text-right py-3 font-bold text-red-600">12,60€</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Poupança anual:</strong> Para 15.000 km/ano, carregar em casa (tarifa noturna) 
                  poupa <strong>1.620€/ano</strong> vs gasolina!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perguntas Frequentes */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">Perguntas Frequentes</h2>
            <div className="space-y-4">
              <details className="bg-white p-4 rounded-lg shadow">
                <summary className="font-bold cursor-pointer">Posso carregar numa tomada normal?</summary>
                <p className="text-sm text-gray-700 mt-2">
                  Sim, mas é muito lento (10-12h) e pode sobrecarregar a instalação se não for dimensionada. 
                  Wallbox é mais segura e 3-5x mais rápida.
                </p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow">
                <summary className="font-bold cursor-pointer">Preciso de trifásico?</summary>
                <p className="text-sm text-gray-700 mt-2">
                  Não. Wallbox de 3,7 kW ou 7,4 kW funcionam em monofásico (instalação normal). 
                  Trifásico só é necessário para 11 kW ou 22 kW.
                </p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow">
                <summary className="font-bold cursor-pointer">Quanto tempo demora a instalação?</summary>
                <p className="text-sm text-gray-700 mt-2">
                  Instalação típica: 3-5 horas. Se precisar de aumentar potência contratada, 
                  a EDP demora 5-10 dias úteis.
                </p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow">
                <summary className="font-bold cursor-pointer">Posso instalar em condomínio?</summary>
                <p className="text-sm text-gray-700 mt-2">
                  Sim. Desde 2019, não é necessária autorização da assembleia para instalar wallbox 
                  no lugar de garagem privativo.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <Car className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-black mb-4">
              Instale a Sua Wallbox Hoje
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Instalação profissional de carregadores de veículos elétricos em Trás-os-Montes. 
              Orçamento gratuito e apoio com incentivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
                <Phone className="w-6 h-6" />
                932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20quero%20instalar%20um%20carregador%20de%20veículo%20elétrico." className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-800 transition-all shadow-lg">
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
              <a href="/blog/automacao-residencial-casa-inteligente" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-orange-500 mb-1">Automação Residencial</h3>
                <p className="text-sm text-gray-600">Transforme a sua casa numa casa inteligente.</p>
              </a>
              <a href="/blog/protecao-sobrecargas-eletricas-casa" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-orange-500 mb-1">Proteção Contra Sobrecargas</h3>
                <p className="text-sm text-gray-600">Como proteger a sua casa de sobrecargas elétricas.</p>
              </a>
              <a href="/blog/quadro-eletrico-antigo-fusiveis-trocar" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-orange-500 mb-1">Quadro Elétrico Antigo</h3>
                <p className="text-sm text-gray-600">Modernize o quadro elétrico da sua casa.</p>
              </a>
              <a href="/blog/poupanca-energia-inverno-tras-os-montes" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-orange-500 mb-1">Poupar Energia no Inverno</h3>
                <p className="text-sm text-gray-600">Dicas para reduzir custos no inverno transmontano.</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
