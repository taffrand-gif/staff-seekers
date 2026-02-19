// Blog article: "Iluminação Exterior e de Jardim: Guia Completo 2026"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, Lightbulb, Sun, Moon, Shield, CheckCircle } from 'lucide-react';

export default function IluminacaoExteriorJardim() {
  useEffect(() => {
    document.title = "Iluminação Exterior e de Jardim: Guia Completo 2026 | Staff Seekers";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Guia completo de iluminação exterior e de jardim. LED, IP65, segurança, ambiance e economia de energia. Transforme o exterior da sua casa.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/blog/iluminacao-exterior-jardim-guia');

    // JSON-LD Article Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Iluminação Exterior e de Jardim: Guia Completo 2026",
      "description": "Guia completo de iluminação exterior: LED, IP65, segurança, ambiance e economia de energia.",
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

  const tiposIluminacao = [
    {
      tipo: "Iluminação de Segurança",
      descricao: "Focos com sensor de movimento para entradas, garagens e zonas de passagem.",
      potencia: "10-30W LED",
      altura: "2,5-3m",
      custo: "30€ - 80€ por foco"
    },
    {
      tipo: "Iluminação de Caminho",
      descricao: "Balizas baixas para iluminar caminhos e escadas no jardim.",
      potencia: "3-5W LED",
      altura: "30-60cm",
      custo: "15€ - 40€ por unidade"
    },
    {
      tipo: "Iluminação de Destaque",
      descricao: "Projetores para realçar árvores, muros, fachadas ou elementos decorativos.",
      potencia: "5-20W LED",
      altura: "Variável",
      custo: "25€ - 100€ por projetor"
    },
    {
      tipo: "Iluminação Ambiente",
      descricao: "Fitas LED, guirlandas ou arandelas para criar atmosfera em terraços e pérgolas.",
      potencia: "5-15W LED",
      altura: "Variável",
      custo: "20€ - 60€ por metro/unidade"
    }
  ];

  const vantagens = [
    "Segurança reforçada (dissuasão de intrusos)",
    "Valorização estética da propriedade",
    "Uso seguro do exterior à noite",
    "Poupança de energia com LED (até 80%)",
    "Durabilidade superior (20.000-50.000h)",
    "Baixa manutenção"
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
                💡 ILUMINAÇÃO EXTERIOR
              </span>
              <h1 className="text-4xl md:text-5xl font-black mb-6">
                Iluminação Exterior e de Jardim: Guia Completo 2026
              </h1>
              <p className="text-xl opacity-90">
                Transforme o exterior da sua casa com iluminação LED eficiente, segura e bonita.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                A <strong>iluminação exterior</strong> é muito mais do que funcionalidade. É segurança, estética e valorização do imóvel.
              </p>
              <p className="text-gray-700">
                Seja em <a href="/vilareal" className="text-orange-500 hover:underline">Vila Real</a>, 
                <a href="/chaves" className="text-orange-500 hover:underline"> Chaves</a> ou 
                <a href="/braganca" className="text-orange-500 hover:underline"> Bragança</a>, 
                um projeto bem executado transforma completamente o exterior da sua casa, 
                tornando-o mais seguro e acolhedor.
              </p>
            </div>
          </div>
        </section>

        {/* Porquê Investir */}
        <section className="py-12 bg-blue-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">Porquê Investir em Iluminação Exterior?</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-4">
                {vantagens.map((vantagem, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{vantagem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Iluminação */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-8 text-center">Tipos de Iluminação Exterior</h2>
            <div className="space-y-6">
              {tiposIluminacao.map((item, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-orange-500" />
                    {item.tipo}
                  </h3>
                  <p className="text-gray-700 mb-4">{item.descricao}</p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Potência</p>
                      <p className="font-bold">{item.potencia}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Altura</p>
                      <p className="font-bold">{item.altura}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Custo</p>
                      <p className="font-bold">{item.custo}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Índice de Proteção IP */}
        <section className="py-12 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">Índice de Proteção IP: O Que Significa?</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">
                O <strong>índice IP</strong> indica o nível de proteção contra água e poeira. 
                Para exterior, é ESSENCIAL escolher o IP correto.
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3">Índice IP</th>
                    <th className="text-left py-3">Proteção</th>
                    <th className="text-left py-3">Uso Recomendado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-bold">IP44</td>
                    <td className="py-3">Salpicos de água</td>
                    <td className="py-3">Zonas cobertas (alpendre, varanda)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold">IP65</td>
                    <td className="py-3">Jatos de água</td>
                    <td className="py-3">Exterior exposto (jardim, fachada)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold">IP67</td>
                    <td className="py-3">Imersão temporária</td>
                    <td className="py-3">Zonas húmidas (perto de fontes, piscinas)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold">IP68</td>
                    <td className="py-3">Imersão prolongada</td>
                    <td className="py-3">Submerso (iluminação de piscina)</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Regra de ouro:</strong> Para jardins em Trás-os-Montes (chuva, neve, geada), 
                  use sempre <strong>IP65 ou superior</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LED vs Tradicional */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">LED vs Iluminação Tradicional</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl shadow-lg border-2 border-green-500">
                <div className="flex items-center gap-2 mb-4">
                  <Sun className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-green-700">LED (Recomendado)</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Consumo 80% menor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Duração: 20.000-50.000h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Resistente a vibrações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Acende instantaneamente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Sem mercúrio (ecológico)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Temperatura de cor ajustável</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl shadow-lg border-2 border-red-300">
                <div className="flex items-center gap-2 mb-4">
                  <Moon className="w-8 h-8 text-red-600" />
                  <h3 className="text-xl font-bold text-red-700">Halogéneo/Incandescente</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>❌ Consumo elevado</li>
                  <li>❌ Duração: 1.000-2.000h</li>
                  <li>❌ Frágil (quebra facilmente)</li>
                  <li>❌ Aquecimento lento</li>
                  <li>❌ Contém gases/mercúrio</li>
                  <li>❌ Temperatura fixa</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Temperatura de Cor */}
        <section className="py-12 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">Temperatura de Cor: Qual Escolher?</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">
                A temperatura de cor (medida em Kelvin) define o "tom" da luz:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                  <div className="bg-yellow-400 w-12 h-12 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-bold">2700K - 3000K (Branco Quente)</p>
                    <p className="text-sm text-gray-700">Acolhedor, relaxante. Ideal para terraços, pérgolas, zonas de estar.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-200 w-12 h-12 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-bold">4000K - 4500K (Branco Neutro)</p>
                    <p className="text-sm text-gray-700">Equilibrado, natural. Ideal para caminhos, entradas, uso geral.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg">
                  <div className="bg-gray-300 w-12 h-12 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-bold">5000K - 6500K (Branco Frio)</p>
                    <p className="text-sm text-gray-700">Intenso, alerta. Ideal para segurança, garagens, zonas de trabalho.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sensores e Automação */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">Sensores e Automação</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">
                Torne a iluminação exterior ainda mais eficiente com automação:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold mb-1">Sensor de Movimento</p>
                    <p className="text-sm text-gray-700">
                      Acende automaticamente quando deteta presença. Poupança de 70% na iluminação de segurança.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                  <Sun className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold mb-1">Sensor Crepuscular</p>
                    <p className="text-sm text-gray-700">
                      Acende ao anoitecer e apaga ao amanhecer. Perfeito para iluminação ambiente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold mb-1">Temporizador</p>
                    <p className="text-sm text-gray-700">
                      Programe horários específicos. Útil para simular presença quando está fora.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custos */}
        <section className="py-12 bg-blue-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6">Quanto Custa Iluminar o Exterior?</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3">Projeto</th>
                    <th className="text-right py-3">Investimento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3">
                      <strong>Básico</strong><br/>
                      <span className="text-xs text-gray-600">2 focos de segurança + 4 balizas de caminho</span>
                    </td>
                    <td className="text-right py-3 font-bold">300€ - 500€</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <strong>Intermédio</strong><br/>
                      <span className="text-xs text-gray-600">Segurança + caminhos + destaque (árvores/fachada)</span>
                    </td>
                    <td className="text-right py-3 font-bold">800€ - 1.500€</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <strong>Completo</strong><br/>
                      <span className="text-xs text-gray-600">Projeto integrado com automação e sensores</span>
                    </td>
                    <td className="text-right py-3 font-bold">2.000€ - 4.000€</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-600 mt-4">
                * Valores incluem material e instalação. Orçamento personalizado gratuito.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-black mb-4">
              Ilumine o Exterior da Sua Casa
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Projeto personalizado de iluminação exterior em Trás-os-Montes. 
              Orçamento gratuito e sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
                <Phone className="w-6 h-6" />
                932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20quero%20um%20orçamento%20para%20iluminação%20exterior." className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-600 transition-all shadow-lg">
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
              <a href="/blog/poupar-energia-eletrica-dicas" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-orange-500 mb-1">Como Poupar Energia</h3>
                <p className="text-sm text-gray-600">10 dicas práticas para reduzir a conta de luz.</p>
              </a>
              <a href="/blog/poupanca-energia-inverno-tras-os-montes" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-orange-500 mb-1">Poupar Energia no Inverno</h3>
                <p className="text-sm text-gray-600">Dicas para reduzir custos no inverno transmontano.</p>
              </a>
              <a href="/blog/como-instalar-candeeiro-teto" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-orange-500 mb-1">Instalar Candeeiro de Teto</h3>
                <p className="text-sm text-gray-600">Guia passo a passo para instalação segura.</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
