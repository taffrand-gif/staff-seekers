// Structured Data (Schema.org) component
// Schema Markup LocalBusiness: Plumber pour norte-reparos, Electrician pour staff-seekers

import { useEffect } from 'react';
import { useSite } from '@/contexts/SiteContext';

export default function StructuredData() {
  const { config } = useSite();

  useEffect(() => {
    // Remover scripts existentes
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    const isPlumber = config.id === 'norte-reparos';
    const businessType = isPlumber ? 'Plumber' : 'Electrician';

    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": businessType,
      "@id": `https://${config.domain}/#organization`,
      "name": config.name,
      "description": config.description,
      "url": `https://${config.domain}`,
      "telephone": config.phone.replace(/\s/g, ''),
      "email": config.email,
      "priceRange": "€€",
      "image": `https://${config.domain}${config.seo.ogImage}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Macedo de Cavaleiros",
        "addressLocality": "Macedo de Cavaleiros",
        "addressRegion": "Bragança",
        "postalCode": "5340",
        "addressCountry": "PT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.5382",
        "longitude": "-6.9667"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "41.5382",
          "longitude": "-6.9667"
        },
        "geoRadius": "100000"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": isPlumber ? "47" : "38",
        "bestRating": "5",
        "worstRating": "1"
      },
      "foundingDate": config.company.yearEstablished,
      "knowsLanguage": "pt-PT"
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": config.serviceType,
      "provider": {
        "@id": `https://${config.domain}/#organization`
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Trás-os-Montes"
        },
        {
          "@type": "City",
          "name": "Bragança"
        },
        {
          "@type": "City",
          "name": "Macedo de Cavaleiros"
        },
        {
          "@type": "City",
          "name": "Mirandela"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `Serviços de ${config.serviceType}`,
        "itemListElement": config.services.map(service => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.label
          }
        }))
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": config.phone.replace(/\s/g, ''),
          "contactType": "customer service",
          "areaServed": "PT",
          "availableLanguage": "Portuguese"
        }
      }
    };

    // Reviews Schema
    const reviewsSchema = config.testimonials.map((testimonial) => ({
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@id": `https://${config.domain}/#organization`
      },
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": testimonial.text,
      "datePublished": "2025-06-01"
    }));

    // WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": `https://${config.domain}`,
      "name": config.name,
      "description": config.description,
      "inLanguage": "pt-PT",
      "publisher": {
        "@id": `https://${config.domain}/#organization`
      }
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `https://${config.domain}/#organization`,
      "name": config.name,
      "url": `https://${config.domain}`,
      "logo": `https://${config.domain}${config.seo.ogImage}`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": config.phone.replace(/\s/g, ''),
        "contactType": "customer service",
        "areaServed": "PT",
        "availableLanguage": "Portuguese",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      "sameAs": [
        `https://wa.me/${config.whatsapp || '351932321892'}?text=${encodeURIComponent(config.whatsappMessage)}`
      ]
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `Qual é o horário de atendimento do ${config.serviceType}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Estamos disponíveis 24 horas por dia, 7 dias por semana, incluindo fins de semana e feriados."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo demora a chegar em caso de urgência?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Em situações de urgência, o nosso tempo médio de resposta é de 30 a 45 minutos na zona de Bragança e Macedo de Cavaleiros."
          }
        },
        {
          "@type": "Question",
          "name": "Qual é a zona de cobertura?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cobrimos toda a região de Trás-os-Montes num raio de 100 km, incluindo Bragança, Mirandela, Macedo de Cavaleiros, Miranda do Douro e Vinhais."
          }
        }
      ]
    };

    // Inserir todos os schemas
    const schemas = [
      localBusinessSchema,
      serviceSchema,
      websiteSchema,
      organizationSchema,
      faqSchema,
      ...reviewsSchema
    ];

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [config]);

  return null;
}
