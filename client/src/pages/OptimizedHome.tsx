// Page d'accueil optimisée pour SEO et conversions
// Structure optimisée selon les meilleures pratiques:
// 1. Hero section avec CTA forts
// 2. Services avec images générées
// 3. FAQ optimisée pour featured snippets
// 4. Témoignages réels
// 5. Contact simple et efficace

import Header from '@/components/Header';
import UrgencyBar from '@/components/UrgencyBar';
import InnovativeHero from '@/components/InnovativeHero';
import OptimizedServices from '@/components/OptimizedServices';
import GuaranteesSection from '@/components/GuaranteesSection';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Contactos from '@/components/Contactos';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import FloatingCTA from '@/components/FloatingCTA';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useSite } from '@/contexts/SiteContext';
import { useEffect } from 'react';

export default function OptimizedHome() {
  const { config } = useSite();

  // Update document title and meta tags
  useEffect(() => {
    document.title = "Eletricista em Trás-os-Montes | Instalação e Reparação Elétrica | Staff Seekers";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista certificado em Trás-os-Montes. Instalação elétrica, quadros elétricos, iluminação, certificação. Segurança garantida. Contacte-nos!');

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'eletricista, eletricista Trás-os-Montes, eletricista Vila Real, eletricista Bragança, instalação elétrica, reparação elétrica, certificação elétrica, urgência elétrica');

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Eletricista Profissional em Trás-os-Montes | Staff Seekers');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Instalações, reparações e certificação elétrica — segurança garantida em toda a região de Trás-os-Montes.');
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', '/images/hero/hero-electrician-portugal.png');
    }
  }, [config]);

  return (
    <>
      <SEOHead />
      <StructuredData />
      
      <Header />
      <UrgencyBar />
      <InnovativeHero />
      <OptimizedServices />
      
      <GuaranteesSection />
      
      {/* Section FAQ optimisée */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre <span className="text-amber-600">Serviços Elétricos</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos serviços elétricos
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>
      
      {/* Section témoignages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que dizem nossos <span className="text-amber-600">clientes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Avaliações reais de quem já contratou nossos serviços
            </p>
          </div>
          
          <Testimonials />
        </div>
      </section>
      
      {/* Section contact */}
      <Contactos />
      
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
      <FloatingCTA />
    </>
  );
}