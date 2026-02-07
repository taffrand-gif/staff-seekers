import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO } from "@/hooks/useSEO";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function BlogArticle() {
  const [, params] = useRoute("/blog/:id");
  const config = ACTIVE_CONFIG;
  const articleId = params?.id;
  
  useSEO({
    title: `Artigo - ${config.name}`,
    description: `Leia o artigo completo sobre ${config.type === 'plomberie' ? 'canalização' : 'eletricidade'}.`,
  });

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="py-16">
          <div className="container max-w-4xl">
            <Link href="/blog">
              <a className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-8">
                <ArrowLeft className="h-4 w-4" />
                Voltar ao Blog
              </a>
            </Link>

            <div className="mb-8">
              <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {config.type === 'plomberie' ? 'Deteção de Fugas' : 'Segurança Elétrica'}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {articleId === 'fuga-agua-escondida' 
                  ? 'Como Detetar Fuga de Água Escondida'
                  : '10 Sinais Que Precisa Trocar o Quadro Elétrico'
                }
              </h1>
              
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>7 de fevereiro de 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>8 min</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 bg-gradient-to-br from-red-500 to-red-600 rounded-lg mb-12 flex items-center justify-center">
              <span className="text-white text-9xl opacity-20">
                {config.type === 'plomberie' ? '💧' : '⚡'}
              </span>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <p className="text-lg font-semibold text-blue-800">
                  📄 Artigo Completo Disponível
                </p>
                <p className="text-blue-700 mt-2">
                  Conteúdo em: {articleId === 'fuga-agua-escondida' ? 'ARTICLE_FUGA_AGUA.md' : 'ARTICLE_QUADRO_ELETRICO.md'}
                </p>
              </div>
            </div>

            <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${config.phone}`} className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 text-center">
                  📞 {config.phone}
                </a>
                <Link href="/orcamento">
                  <a className="bg-white text-red-600 border-2 border-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 text-center">
                    Pedir Orçamento
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
