// Design: Professional Service Layout
// Main landing page assembling all components
// - Header with sticky navigation
// - Hero with massive title and CTA
// - Price calculator
// - Testimonials
// - Company info with reasons to choose
// - Footer with contact info
// - Floating WhatsApp and Chat buttons

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PriceCalculator from '@/components/PriceCalculator';
import Testimonials from '@/components/Testimonials';
import CompanyInfo from '@/components/CompanyInfo';
import FAQ from '@/components/FAQ';
import Trabalhos from '@/components/Trabalhos';
import RealStories from '@/components/RealStories';
import Equipa from '@/components/Equipa';
import Blog from '@/components/Blog';
import Contactos from '@/components/Contactos';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useSite } from '@/contexts/SiteContext';
import { useEffect } from 'react';

export default function Home() {
  const { config } = useSite();

  // Update document title and meta tags
  useEffect(() => {
    document.title = config.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', config.description);


    // Update CSS custom properties for dynamic theming
    document.documentElement.style.setProperty('--site-primary', config.colors.primary);
    document.documentElement.style.setProperty('--site-primary-dark', config.colors.primaryDark);
    document.documentElement.style.setProperty('--site-primary-light', config.colors.primaryLight);
  }, [config]);

  return (
    <>
      {/* SEO Components - Don't render visible content */}
      <SEOHead />
      <StructuredData />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Hero />
          <CompanyInfo />
          <PriceCalculator />
          <FAQ />
          <Trabalhos />
          <RealStories />
          <Equipa />
          <Testimonials />
          <Blog />
          <Contactos />
        </main>
        <Footer />
<ScrollToTop />
      </div>
    </>
  );
}
