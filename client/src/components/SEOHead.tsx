// SEO Head component - Manages all meta tags, Open Graph, Twitter Cards, and tracking
// Preserves all existing SEO work from the original sites

import { useEffect } from 'react';
import { useSite } from '@/contexts/SiteContext';

export default function SEOHead() {
  const { config } = useSite();

  useEffect(() => {
    // Update document title
    document.title = config.title;

    // Set language
    document.documentElement.lang = 'pt-PT';

    // Helper function to update or create meta tag
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property=')) {
          const prop = selector.match(/property="([^"]+)"/)?.[1];
          if (prop) element.setAttribute('property', prop);
        } else if (selector.includes('name=')) {
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Basic meta tags
    updateMetaTag('meta[name="description"]', 'content', config.description);
    updateMetaTag('meta[name="author"]', 'content', config.name);
    updateMetaTag('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('meta[name="googlebot"]', 'content', 'index, follow');
    updateMetaTag('meta[name="keywords"]', 'content', config.seo.keywords.join(', '));
    updateMetaTag('meta[name="language"]', 'content', 'pt-PT');

    // Geo tags pour SEO local
    updateMetaTag('meta[name="geo.region"]', 'content', 'PT-04');
    updateMetaTag('meta[name="geo.placename"]', 'content', 'Macedo de Cavaleiros');
    updateMetaTag('meta[name="geo.position"]', 'content', '41.5382;-6.9667');
    updateMetaTag('meta[name="ICBM"]', 'content', '41.5382, -6.9667');

    // Open Graph tags
    updateMetaTag('meta[property="og:type"]', 'content', 'website');
    updateMetaTag('meta[property="og:locale"]', 'content', 'pt_PT');
    updateMetaTag('meta[property="og:site_name"]', 'content', config.name);
    updateMetaTag('meta[property="og:title"]', 'content', config.title);
    updateMetaTag('meta[property="og:description"]', 'content', config.description);
    updateMetaTag('meta[property="og:image"]', 'content', `https://${config.domain}${config.seo.ogImage}`);
    updateMetaTag('meta[property="og:url"]', 'content', `https://${config.domain}`);

    // Twitter Card
    updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'content', config.title);
    updateMetaTag('meta[name="twitter:description"]', 'content', config.description);
    updateMetaTag('meta[name="twitter:image"]', 'content', `https://${config.domain}${config.seo.ogImage}`);

    // URL canónica (dynamique basé sur le path)
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    const currentPath = window.location.pathname;
    canonical.href = `https://${config.domain}${currentPath === '/' ? '' : currentPath}`;

    // Alternate hreflang
    let hreflang = document.querySelector('link[hreflang="pt-PT"]') as HTMLLinkElement;
    if (!hreflang) {
      hreflang = document.createElement('link');
      hreflang.rel = 'alternate';
      hreflang.hreflang = 'pt-PT';
      document.head.appendChild(hreflang);
    }
    hreflang.href = `https://${config.domain}`;

    // Google Ads tracking (preserved from original sites)
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    // Only initialize gtag if not already present
    if (!document.querySelector('script[src*="googletagmanager.com/gtag"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17915870228';
      document.head.appendChild(script);

      script.onload = () => {
        function gtag(...args: any[]) {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', 'AW-17915870228');

        // GDPR Consent Mode (preserved from original)
        gtag('consent', 'default', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        });
      };
    }
  }, [config]);

  return null; // This component doesn't render anything
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
