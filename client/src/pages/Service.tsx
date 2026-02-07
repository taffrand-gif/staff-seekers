import { useParams, Link } from 'wouter';
import { getServiceBySlug } from '../data/servicesData';
import { Phone, MessageCircle, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Service() {
  const params = useParams();
  const slug = params.slug;
  
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Serviço não encontrado</h1>
        <p className="text-muted-foreground mb-8">
          O serviço que procura não existe ou foi removido.
        </p>
        <Link href="/servicos">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos Serviços
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
        <div className="container">
          <Link href="/servicos">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Serviços
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{service.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {service.title}
              </h1>
              <p className="text-xl text-red-100">
                {service.subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur">
              <CardContent className="p-4">
                <p className="text-sm text-red-100">Preço</p>
                <p className="text-2xl font-bold">{service.price}</p>
                <p className="text-xs text-red-100">{service.priceDetails}</p>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <a href="tel:928484451">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
                  <Phone className="mr-2 h-5 w-5" />
                  928 484 451
                </Button>
              </a>
              
              <a 
                href={`https://wa.me/351928484451?text=${encodeURIComponent(`Olá! Preciso de ${service.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="bg-green-500 text-white border-green-600 hover:bg-green-600">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.content.intro}
            </p>
          </div>

          {/* Sections */}
          {service.content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-red-600" />
                {section.title}
              </h2>
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: section.content
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/^(.+)$/gm, '<p>$1</p>')
                    .replace(/<p><\/p>/g, '')
                }}
              />
            </div>
          ))}

          {/* CTA Section */}
          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 mt-16">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                {service.content.cta.replace(/\*\*/g, '')}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:928484451">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    <Phone className="mr-2 h-5 w-5" />
                    Ligar Agora
                  </Button>
                </a>
                
                <a 
                  href={`https://wa.me/351928484451?text=${encodeURIComponent(`Olá! Preciso de ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-green-500 hover:bg-green-600">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Other Services */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Outros Serviços</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { slug: 'desentupimento', title: 'Desentupimento', icon: '🚿' },
                { slug: 'reparacao-fugas', title: 'Reparação Fugas', icon: '💧' },
                { slug: 'instalacao', title: 'Instalação', icon: '🔧' },
                { slug: 'manutencao-preventiva', title: 'Manutenção', icon: '🛠️' },
                { slug: 'urgencias-24h', title: 'Urgências 24h', icon: '🚨' },
                { slug: 'inspecao-cctv', title: 'Inspeção CCTV', icon: '📹' },
                { slug: 'limpeza-fossas', title: 'Limpeza Fossas', icon: '🚛' }
              ]
                .filter(s => s.slug !== slug)
                .slice(0, 3)
                .map((otherService) => (
                  <Link key={otherService.slug} href={`/servicos/${otherService.slug}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <span className="text-4xl mb-3 block">{otherService.icon}</span>
                        <h4 className="font-semibold">{otherService.title}</h4>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
