// Structured Data (Schema.org) component
// Adds rich snippets for better SEO and search engine understanding

import { useEffect } from 'react';
import { useSite } from '@/contexts/SiteContext';

export default function StructuredData() {
  const { config } = useSite();

  useEffect(() => {
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `https://${config.domain}/#organization`,
      "name": config.name,
      "description": config.company.shortDescription,
      "url": `https://${config.domain}`,
      "telephone": config.phone.replace(/\s/g, ''),
      "email": config.email,
      "priceRange": "€€",
      "image": config.seo.ogImage,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bragança",
        "addressRegion": "Trás-os-Montes",
        "addressCountry": "PT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.8058",
        "longitude": "-6.7570"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "41.8058",
          "longitude": "-6.7570"
        },
        "geoRadius": "50000"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": config.testimonials.length.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": config.serviceType,
      "provider": {
        "@id": `https://${config.domain}/#organization`
      },
      "areaServed": {
        "@type": "State",
        "name": config.company.coverage
      },
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
    const reviewsSchema = config.testimonials.map((testimonial, index) => ({
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
      "datePublished": "2025-01-01"
    }));

    // WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": `https://${config.domain}`,
      "name": config.name,
      "description": config.description,
      "publisher": {
        "@id": `https://${config.domain}/#organization`
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": `https://${config.domain}/?s={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `https://${config.domain}/#organization`,
      "name": config.name,
      "url": `https://${config.domain}`,
      "logo": config.seo.ogImage,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": config.phone.replace(/\s/g, ''),
        "contactType": "customer service",
        "areaServed": "PT",
        "availableLanguage": "Portuguese",
        "contactOption": "TollFree",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      "sameAs": [
        `https://wa.me/${config.whatsapp}`
      ]
    };

    // Insert all schemas
    const schemas = [
      localBusinessSchema,
      serviceSchema,
      websiteSchema,
      organizationSchema,
      ...reviewsSchema
    ];

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [config]);

  return null; // This component doesn't render anything
}
