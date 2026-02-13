// Página principal otimizada para SEO e conversões
// Estrutura otimizada:
// 1. Hero com CTA
// 2. Serviços com imagens
// 3. Tabela de preços
// 4. Equipa
// 5. Trabalhos realizados
// 6. FAQ
// 7. Testemunhos
// 8. Blog
// 9. Contactos

import Header from '@/components/Header';
import InnovativeHero from '@/components/InnovativeHero';
import OptimizedServices from '@/components/OptimizedServices';
import PriceTable from '@/components/PriceTable';
import Equipa from '@/components/Equipa';
import Trabalhos from '@/components/Trabalhos';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contactos from '@/components/Contactos';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useSite } from '@/contexts/SiteContext';

export default function OptimizedHome() {
  const { config } = useSite();
  const isPlumber = config.id === 'norte-reparos';
  const accentColor = isPlumber ? 'text-blue-600' : 'text-amber-600';
  const serviceLabel = isPlumber ? 'Canalização' : 'Serviços Elétricos';

  return (
    <>
      <SEOHead />
      <StructuredData />
      
      <Header />
      <InnovativeHero />
      <OptimizedServices />
      
      {/* Secção tabela de preços */}
      <PriceTable />
      
      {/* Secção Equipa */}
      <Equipa />
      
      {/* Secção Trabalhos */}
      <Trabalhos />
      
      {/* Secção FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre <span className={accentColor}>{serviceLabel}</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tire as suas dúvidas sobre os nossos serviços
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>
      
      {/* Secção testemunhos */}
      <Testimonials />
      
      {/* Secção Blog */}
      <Blog />
      
      {/* Secção contactos */}
      <Contactos />
      
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </>
  );
}
