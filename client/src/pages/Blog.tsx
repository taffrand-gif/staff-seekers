import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Blog() {
  const config = ACTIVE_CONFIG;
  
  useSEO({
    title: `Blog - ${config.name}`,
    description: `Dicas, guias e artigos sobre ${config.type === 'plomberie' ? 'canalização' : 'eletricidade'} em Bragança e Trás-os-Montes.`,
  });

  const articles = config.type === 'plomberie' ? [
    {
      id: 'fuga-agua-escondida',
      title: 'Como Detetar Fuga de Água Escondida: Método Termográfico',
      excerpt: 'Fugas escondidas desperdiçam centenas de litros por dia e aumentam a fatura em 100-300€/mês. Aprenda a detetar com termografia sem partir paredes.',
      date: '7 de fevereiro de 2026',
      readTime: '8 min',
      image: '/blog/fuga-agua.jpg',
      category: 'Deteção de Fugas'
    }
  ] : [
    {
      id: 'quadro-eletrico',
      title: '10 Sinais Que Precisa Trocar o Quadro Elétrico',
      excerpt: 'Quadros antigos são responsáveis por 25% dos incêndios domésticos. Descubra os 10 sinais de alerta e quando substituir o seu quadro elétrico.',
      date: '7 de fevereiro de 2026',
      readTime: '8 min',
      image: '/blog/quadro-eletrico.jpg',
      category: 'Segurança Elétrica'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog {config.name}
            </h1>
            <p className="text-xl text-red-100 max-w-2xl">
              Dicas profissionais, guias práticos e artigos sobre {config.type === 'plomberie' ? 'canalização' : 'eletricidade'} para proteger a sua casa e família.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="hover:shadow-xl transition-shadow overflow-hidden group">
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                      <span className="text-white text-6xl opacity-20">
                        {config.type === 'plomberie' ? '💧' : '⚡'}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {article.title}
                    </h2>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <Link href={`/blog/${article.id}`}>
                      <a className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors">
                        Ler artigo completo
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="mt-12 text-center">
              <div className="inline-block bg-gray-100 rounded-lg px-8 py-6">
                <p className="text-gray-600 text-lg">
                  📚 Mais artigos em breve!
                </p>
                <p className="text-gray-500 mt-2">
                  Publicamos novos conteúdos regularmente com dicas profissionais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Precisa de Ajuda Profissional?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Estamos disponíveis 24 horas por dia para urgências e orçamentos sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${config.phone}`}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                📞 Ligue AGORA: {config.phone}
              </a>
              <Link href="/orcamento">
                <a className="bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors">
                  Pedir Orçamento Gratuito
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
</div>
  );
}
