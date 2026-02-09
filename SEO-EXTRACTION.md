# Extraction SEO des sites actuels

## Éléments SEO identifiés

### 1. Google Ads Tracking
**ID commun aux deux sites** : `AW-17915870228`

### 2. Meta tags (norte-reparos.com)
```html
<title>Canalizador 24h | Canalizador de Trás-os-Montes | Urgências Bragança</title>
<meta name="description" content="Canalizador 24h - instalação, reparação e manutenção técnica de canalizações e fugas de água. Equipa de canalizadores profissionais certificados." />
<meta name="keywords" content="canalizador, plombier, fuga de água, entupimento, reparação canalização, urgência 24h, piquete, Bragança" />
<meta name="author" content="Canalizador de Trás-os-Montes" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<meta name="googlebot" content="index, follow" />
```

### 3. Open Graph tags
```html
<meta property="og:type" content="website" />
<meta property="og:locale" content="pt_PT" />
<meta property="og:site_name" content="Canalizador de Trás-os-Montes" />
```

### 4. Twitter Card
```html
<meta name="twitter:card" content="summary_large_image" />
```

### 5. Preconnect (Performance)
```html
<link rel="preconnect" href="https://www.googletagmanager.com" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

### 6. Google Consent Mode (RGPD)
```javascript
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied'
});
```

### 7. Favicon
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

## Éléments manquants à ajouter

### Schema.org markup
- [ ] LocalBusiness
- [ ] Service
- [ ] Review / AggregateRating
- [ ] Organization
- [ ] ContactPoint

### Sitemap
- [ ] sitemap.xml
- [ ] robots.txt

### Meta tags additionnels
- [ ] og:title
- [ ] og:description
- [ ] og:image
- [ ] og:url
- [ ] canonical URL

## Plan d'intégration

1. ✅ Google Ads ID récupéré : `AW-17915870228`
2. ✅ Meta tags de base identifiés
3. ✅ Open Graph structure identifiée
4. ⏳ Créer composant SEOHead.tsx
5. ⏳ Créer composant StructuredData.tsx
6. ⏳ Intégrer Google Ads tracking
7. ⏳ Générer sitemap.xml
8. ⏳ Créer robots.txt
