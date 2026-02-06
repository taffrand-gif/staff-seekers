import { Link } from "wouter";
import { Calendar, Clock, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useSEO } from "@/hooks/useSEO";
import { ACTIVE_CONFIG } from "@shared/serviceConfig";
import { plomberieArticles, electriciteArticles } from "@shared/blogArticles";

export default function Blog() {
  const articles = ACTIVE_CONFIG.type === "plomberie" ? plomberieArticles : electriciteArticles;
  
  useSEO({
    title: `Blog ${ACTIVE_CONFIG.name} | Dicas e Conselhos`,
    description: `Artigos sobre ${ACTIVE_CONFIG.type}, dicas de manutenção, segurança e poupança de energia. Informação útil e prática.`,
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <WhatsAppButton />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog {ACTIVE_CONFIG.name}
            </h1>
            <p className="text-xl text-red-100 max-w-2xl">
              Dicas, conselhos e informação útil sobre {ACTIVE_CONFIG.type === "plomberie" ? "canalização" : "eletricidade"}. 
              Aprenda com os nossos especialistas.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link 
                  key={article.slug} 
                  href={`/blog/${article.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                        {article.title}
                      </h2>

                      <p className="text-gray-600 mb-4 flex-1">
                        {article.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 pt-4 border-t">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString('pt-PT')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-600 text-white py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">
              Precisa de Ajuda Profissional?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              A nossa equipa está disponível 24 horas para resolver qualquer problema de {ACTIVE_CONFIG.type === "plomberie" ? "canalização" : "eletricidade"}.
            </p>
            <a
              href={`tel:${ACTIVE_CONFIG.phone}`}
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors"
            >
              📞 LIGUE AGORA: {ACTIVE_CONFIG.phone}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
