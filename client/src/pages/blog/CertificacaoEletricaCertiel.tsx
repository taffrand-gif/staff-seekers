// Blog article: "Certificação Elétrica CERTIEL - Guia Completo"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, FileCheck, CheckCircle, AlertTriangle, Euro } from 'lucide-react';

export default function CertificacaoEletricaCertiel() {
  useEffect(() => {
    document.title = "Certificação Elétrica CERTIEL - Guia Completo 2026 | Preços e Prazos";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Tudo sobre certificação elétrica CERTIEL em Portugal. Quando é obrigatória, quanto custa, prazos, documentos necessários. Guia atualizado 2026.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://staff-seekers.com/blog/certificacao-eletrica-certiel-guia');
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
                📋 GUIA COMPLETO 2026
              </span>
              <h1 className="text-4xl md:text-5xl font-black mb-6">
                Certificação Elétrica CERTIEL
              </h1>
              <p className="text-xl opacity-90">
                Tudo o que precisa saber: quando é obrigatória, quanto custa, e como obter.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16">
          <div className="container max-w-3xl">
            
            {/* O que é */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                <FileCheck className="w-7 h-7 text-orange-500" />
                O Que é a Certificação CERTIEL?
              </h2>
              <p className="text-gray-700 mb-4">
                A certificação CERTIEL é um documento oficial que atesta que a instalação elétrica de um imóvel 
                cumpre as normas de segurança em vigor em Portugal. É emitida por técnicos credenciados pela 
                DGEG (Direção-Geral de Energia e Geologia).
              </p>
              <p className="text-gray-700">
                Este certificado é obrigatório em várias situações e tem validade de <strong>20 anos</strong> para 
                instalações domésticas.
              </p>
            </section>

            {/* Quando é obrigatória */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-4">Quando é Obrigatória?</h2>
              <div className="grid gap-4">
                {[
                  { titulo: "Venda de Imóvel", desc: "Obrigatória para escritura. Sem certificado, não há venda." },
                  { titulo: "Arrendamento", desc: "Obrigatória para contratos de arrendamento desde 2015." },
                  { titulo: "Nova Ligação EDP", desc: "Para ligar eletricidade a imóvel novo ou após corte prolongado." },
                  { titulo: "Aumento de Potência", desc: "Ao pedir aumento de potência contratada acima de 10.35 kVA." },
                  { titulo: "Alojamento Local", desc: "Obrigatória para licenciamento de AL (Airbnb, etc.)." },
                  { titulo: "Obras de Remodelação", desc: "Quando há alteração significativa da instalação elétrica." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>{item.titulo}:</strong> {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Preços */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                <Euro className="w-7 h-7 text-orange-500" />
                Quanto Custa? (Preços 2026)
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-2">Tipo de Imóvel</th>
                      <th className="text-right py-2">Preço Médio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Apartamento T1/T2</td>
                      <td className="text-right font-bold">150€ - 200€</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Apartamento T3/T4</td>
                      <td className="text-right font-bold">180€ - 250€</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Moradia</td>
                      <td className="text-right font-bold">200€ - 350€</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Loja/Escritório</td>
                      <td className="text-right font-bold">250€ - 400€</td>
                    </tr>
                    <tr>
                      <td className="py-3">Armazém/Industrial</td>
                      <td className="text-right font-bold">Sob orçamento</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-500 mt-4">
                  * Preços incluem inspeção e emissão do certificado. Não incluem eventuais reparações necessárias.
                </p>
              </div>
            </section>

            {/* Problemas comuns */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                <AlertTriangle className="w-7 h-7 text-orange-500" />
                Problemas Mais Comuns (que Reprovam)
              </h2>
              <ul className="space-y-3">
                {[
                  "Quadro elétrico antigo com fusíveis (sem disjuntores)",
                  "Ausência de diferencial 30mA",
                  "Tomadas sem terra ou terra mal ligada",
                  "Fios subdimensionados para a potência",
                  "Caixas de derivação abertas ou mal isoladas",
                  "Instalação sem tubo (fios à vista)",
                  "Tomadas de casa de banho sem proteção adequada"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 p-4 bg-green-50 rounded-lg text-green-800">
                <strong>Boa notícia:</strong> A maioria destes problemas pode ser corrigida em 1-2 dias de trabalho. 
                Fazemos a inspeção prévia, corrigimos o necessário, e emitimos o certificado.
              </p>
            </section>

            {/* Prazo */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-4">Quanto Tempo Demora?</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-black text-orange-500">1 dia</div>
                  <div className="text-sm text-gray-600">Inspeção</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-black text-orange-500">1-3 dias</div>
                  <div className="text-sm text-gray-600">Correções (se necessário)</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-black text-orange-500">2-4 dias</div>
                  <div className="text-sm text-gray-600">Emissão certificado</div>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                <strong>Total:</strong> Em casos simples, pode ter o certificado em 4-5 dias úteis.
              </p>
            </section>

          </div>
        </article>

        {/* CTA */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">
              Precisa de Certificação CERTIEL?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Fazemos inspeção, correções e emissão do certificado. Processo rápido e preço justo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
                <Phone className="w-6 h-6" />
                932 321 892
              </a>
              <a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20certificação%20CERTIEL.%20Podem%20dar-me%20um%20orçamento?" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-600 transition-all shadow-lg">
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
