// Design: Professional Service Layout
// Main landing page assembling all components
// - Header with sticky navigation
// - Hero with massive title and CTA
// - Price calculator
// - Testimonials
// - Company info with reasons to choose
// - Footer with contact info
// - Floating WhatsApp and Chat buttons

import { lazy, Suspense, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useSite } from '@/contexts/SiteContext';

// Lazy load below-the-fold components
const CompanyInfo = lazy(() => import('@/components/CompanyInfo'));
const PriceCalculator = lazy(() => import('@/components/PriceCalculator'));
const FAQ = lazy(() => import('@/components/FAQ'));
const Trabalhos = lazy(() => import('@/components/Trabalhos'));
const RealStories = lazy(() => import('@/components/RealStories'));
const Equipa = lazy(() => import('@/components/Equipa'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Blog = lazy(() => import('@/components/Blog'));
const HomepageLinks = lazy(() => import('@/components/HomepageLinks'));
const Contactos = lazy(() => import('@/components/Contactos'));

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
      <SEOHeadEnhanced pageType="home" />
      <StructuredData />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={null}><CompanyInfo /></Suspense>
          <Suspense fallback={null}><PriceCalculator /></Suspense>
          <Suspense fallback={null}><FAQ /></Suspense>
          <Suspense fallback={null}><Trabalhos /></Suspense>
          <Suspense fallback={null}><RealStories /></Suspense>
          <Suspense fallback={null}><Equipa /></Suspense>
          <Suspense fallback={null}><Testimonials /></Suspense>
          <Suspense fallback={null}><Blog /></Suspense>
          <Suspense fallback={null}><HomepageLinks /></Suspense>
          <Suspense fallback={null}><Contactos /></Suspense>
        </main>
        <Footer />
<ScrollToTop />
      </div>
    </>
  );
}
