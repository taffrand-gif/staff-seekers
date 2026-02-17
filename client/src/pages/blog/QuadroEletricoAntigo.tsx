// Blog article: "Quadro Elétrico Antigo - Quando Trocar"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

export default function QuadroEletricoAntigo() {
  useEffect(() => {
    document.title = "Quadro Elétrico Antigo com Fusíveis - Quando e Porquê Trocar | Guia 2026";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'O seu quadro elétrico ainda tem fusíveis? Saiba porque deve trocar por disjuntores, quanto custa, e os riscos de manter uma instalação antiga.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/blog/quadro-eletrico-antigo-fusíveis-trocar');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-bold mb-4">
                🔧 MODERNIZAÇÃO
              </span>
              <h1 className="text-4xl md:text-5xl font-black mb-6">
                Quadro Elétrico Antigo com Fusíveis
              </h1>
              <p className="text-xl opacity-90">
                Ainda tem fusíveis de porcelana? Descubra porque é urgente modernizar.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16">
          <div className="container max-w-3xl">
            
            {/* Alerta */}
            <div className="mb-12 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-red-700 mb-2">Sabia que...</h2>
                  <p className="text-gray-700">
                    Quadros elétricos com mais de 30 anos são responsáveis por <strong>40% dos incêndios 
                    domésticos de origem elétrica</strong> em Portugal. Os fusíveis antigos não protegem 
                    contra fugas de corrente - o maior risco de eletrocussão.
                  </p>
                </div>
              </div>
            </div>

            {/* Sinais */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">Sinais de que Precisa Trocar o Quadro</h2>
              <div className="space-y-4">
                {[
                  { sinal: "Fusíveis de porcelana ou vidro", desc: "Tecnologia dos anos 60-80, sem proteção diferencial" },
                  { sinal: "Quadro de madeira ou baquelite", desc: "Materiais inflamáveis, proibidos nas normas atuais" },
                  { sinal: "Fios de alumínio", desc: "Oxidam e criam pontos de aquecimento" },
                  { sinal: "Fusíveis que \"saltam\" frequentemente", desc: "Circuitos subdimensionados para consumo atual" },
                  { sinal: "Cheiro a queimado no quadro", desc: "URGENTE: Ligações a aquecer, risco de incêndio" },
                  { sinal: "Mais de 25 anos sem intervenção", desc: "Componentes degradados, isolamentos ressequidos" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-orange-500 font-bold">⚠️</span>
                    <div>
                      <strong>{item.sinal}</strong>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Vantagens */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">Vantagens de um Quadro Moderno</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { titulo: "Proteção Diferencial", desc: "Corta a corrente em 30ms se houver fuga - salva vidas" },
                  { titulo: "Disjuntores Rearmáveis", desc: "Acabaram-se os fusíveis queimados - basta rearmar" },
                  { titulo: "Circuitos Separados", desc: "Cozinha, quartos, casa de banho - cada um protegido" },
                  { titulo: "Preparado para o Futuro", desc: "Carregador carro elétrico, ar condicionado, etc." },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <strong>{item.titulo}</strong>
                    </div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Preços */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">Quanto Custa Trocar o Quadro?</h2>
              <div className="bg-orange-50 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-2">Apartamento (T1-T3)</h3>
                    <div className="text-3xl font-black text-orange-500">200€ - 350€</div>
                    <p className="text-sm text-gray-600">Quadro 8-12 módulos + instalação</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Moradia</h3>
                    <div className="text-3xl font-black text-orange-500">350€ - 600€</div>
                    <p className="text-sm text-gray-600">Quadro 18-24 módulos + instalação</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  * Preços indicativos. Inclui quadro, disjuntores, diferencial 30mA, e mão de obra.
                  Orçamento gratuito e sem compromisso.
                </p>
              </div>
            </section>

            {/* Processo */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">Como Funciona a Substituição?</h2>
              <div className="space-y-4">
                {[
                  { passo: "1", titulo: "Inspeção", desc: "Avaliamos o estado atual e dimensionamos o novo quadro", tempo: "30 min" },
                  { passo: "2", titulo: "Orçamento", desc: "Preço fechado, sem surpresas", tempo: "Imediato" },
                  { passo: "3", titulo: "Instalação", desc: "Substituição do quadro com mínima interrupção", tempo: "3-5 horas" },
                  { passo: "4", titulo: "Teste e Certificação", desc: "Testamos tudo e emitimos declaração de conformidade", tempo: "30 min" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      {item.passo}
                    </div>
                    <div className="flex-grow">
                      <strong>{item.titulo}</strong>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    <div className="text-sm text-orange-500 font-medium">{item.tempo}</div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </article>

        {/* CTA */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <Zap className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-black mb-4">
              Quer Modernizar o Seu Quadro Elétrico?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Inspeção gratuita. Orçamento sem compromisso. Instalação em 1 dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
                <Phone className="w-6 h-6" />
                932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20quero%20orçamento%20para%20trocar%20o%20quadro%20elétrico" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-600 transition-all shadow-lg">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
