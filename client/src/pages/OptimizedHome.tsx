// Página principal otimizada para SEO e conversões
// Estrutura otimizada:
// 1. Hero com CTA
// 2. Badge Orçamento Gratuito
// 3. Serviços com imagens
// 4. Tabela de preços
// 5. Zona de Intervenção
// 6. Equipa
// 7. Trabalhos realizados
// 8. FAQ + FAQ Local
// 9. Testemunhos
// 10. Blog
// 11. Contactos
// 12. Mobile Call Button

import Header from '@/components/Header';
import InnovativeHero from '@/components/InnovativeHero';
import OrcamentoGratuitoBadge from '@/components/OrcamentoGratuitoBadge';
import OptimizedServices from '@/components/OptimizedServices';
import PriceTable from '@/components/PriceTable';
import ZonaIntervencao from '@/components/ZonaIntervencao';
import Equipa from '@/components/Equipa';
import Trabalhos from '@/components/Trabalhos';
import FAQ from '@/components/FAQ';
import FAQLocal from '@/components/FAQLocal';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contactos from '@/components/Contactos';
import Footer from '@/components/Footer';

import MobileCallButton from '@/components/MobileCallButton';
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
      <OrcamentoGratuitoBadge />
      <OptimizedServices />
      
      {/* Secção tabela de preços */}
      <PriceTable />
      
      {/* Secção Zona de Intervenção */}
      <ZonaIntervencao />
      
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
      
      {/* FAQ Local SEO */}
      <FAQLocal />
      
      {/* Secção testemunhos */}
      <Testimonials />
      
      {/* Secção Blog */}
      <Blog />
      
      {/* Secção contactos */}
      <Contactos />
      
      <Footer />
      
      <MobileCallButton />
      <ScrollToTop />
    </>
  );
}
