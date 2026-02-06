import { useRoute, Link } from "wouter";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useSEO } from "@/hooks/useSEO";
import { ACTIVE_CONFIG } from "@shared/serviceConfig";
import { plomberieArticles, electriciteArticles, BlogArticle } from "@shared/blogArticles";
import { Streamdown } from "streamdown";

export default function BlogArticlePage() {
  const [, params] = useRoute("/blog/:slug");
  const articles = ACTIVE_CONFIG.type === "plomberie" ? plomberieArticles : electriciteArticles;
  
  const article = articles.find(a => a.slug === params?.slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Artigo não encontrado</h1>
            <Link href="/blog" className="text-red-600 hover:underline">
              ← Voltar ao Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  useSEO({
    title: `${article.title} | Blog ${ACTIVE_CONFIG.businessName}`,
    description: article.excerpt,
  });

  // Articles relacionados (mesma categoria, excluindo o atual)
  const relatedArticles = articles
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <WhatsAppButton />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-red-600">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-red-600">Blog</Link>
              <span>/</span>
              <span className="text-gray-900">{article.title}</span>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-12">
          <div className="container max-w-4xl">
            {/* Back Button */}
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-gray-600 mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(article.date).toLocaleDateString('pt-PT', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime} de leitura</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{article.author}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <Streamdown>{article.content}</Streamdown>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="mt-12 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Precisa de Ajuda Profissional?
              </h3>
              <p className="text-lg text-red-100 mb-6">
                A nossa equipa está disponível 24 horas para resolver qualquer urgência.
              </p>
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors"
              >
                📞 LIGUE AGORA: {ACTIVE_CONFIG.phone}
              </a>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container max-w-6xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Artigos Relacionados
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Link 
                    key={relatedArticle.slug} 
                    href={`/blog/${relatedArticle.slug}`}
                    className="group"
                  >
                    <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {relatedArticle.excerpt.substring(0, 100)}...
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{relatedArticle.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
