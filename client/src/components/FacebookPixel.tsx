import { useEffect } from 'react';

interface FacebookPixelProps {
  pixelId: string;
}

// Déclaration TypeScript pour fbq
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export function FacebookPixel({ pixelId }: FacebookPixelProps) {
  useEffect(() => {
    if (!pixelId) {
      console.warn('Facebook Pixel ID not provided');
      return;
    }

    // Initialiser Facebook Pixel
    (function(f: any, b: any, e: string, v: string, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );

    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');

    console.log('Facebook Pixel initialized:', pixelId);
  }, [pixelId]);

  return null;
}

// Helper functions pour tracker les événements
export const trackEvent = {
  // Lead: Formulaire de devis soumis
  lead: (value?: number, currency = 'EUR') => {
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        value: value || 0,
        currency,
      });
      console.log('Facebook Pixel: Lead tracked');
    }
  },

  // Contact: Clic sur téléphone ou WhatsApp
  contact: (method: 'phone' | 'whatsapp') => {
    if (window.fbq) {
      window.fbq('track', 'Contact', {
        contact_method: method,
      });
      console.log('Facebook Pixel: Contact tracked -', method);
    }
  },

  // ViewContent: Visite d'une page de service
  viewContent: (contentName: string, contentCategory?: string) => {
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: contentName,
        content_category: contentCategory || 'service',
      });
      console.log('Facebook Pixel: ViewContent tracked -', contentName);
    }
  },

  // CompleteRegistration: Inscription newsletter
  completeRegistration: (method = 'newsletter') => {
    if (window.fbq) {
      window.fbq('track', 'CompleteRegistration', {
        registration_method: method,
      });
      console.log('Facebook Pixel: CompleteRegistration tracked');
    }
  },

  // Schedule: Réservation prise
  schedule: (value?: number) => {
    if (window.fbq) {
      window.fbq('track', 'Schedule', {
        value: value || 0,
        currency: 'EUR',
      });
      console.log('Facebook Pixel: Schedule tracked');
    }
  },

  // Custom event
  custom: (eventName: string, params?: Record<string, any>) => {
    if (window.fbq) {
      window.fbq('trackCustom', eventName, params || {});
      console.log('Facebook Pixel: Custom event tracked -', eventName);
    }
  },
};
