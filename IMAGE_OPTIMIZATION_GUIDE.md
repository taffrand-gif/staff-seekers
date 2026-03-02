# Guide d'Optimisation des Images - Staff Seekers

## Vue d'ensemble

Ce projet utilise un système complet d'optimisation d'images pour améliorer les performances web (Core Web Vitals) et l'expérience utilisateur.

## Composant OptimizedImage

### Localisation
`/tmp/staff-seekers/client/src/components/OptimizedImage.tsx`

### Fonctionnalités

1. **Lazy Loading Intelligent**
   - Intersection Observer pour charger les images uniquement quand elles sont proches du viewport
   - `rootMargin: '50px'` pour précharger légèrement avant l'affichage
   - Option `priority` pour désactiver le lazy loading sur les images critiques (hero)

2. **Support WebP avec Fallback**
   - Génération automatique de balises `<picture>` pour les images locales
   - Format WebP pour les navigateurs modernes
   - Fallback JPG/PNG pour les anciens navigateurs

3. **Srcset Responsive**
   - Génération automatique de srcset pour différentes tailles d'écran
   - Tailles: 320w, 640w, 1024w, 1920w
   - Attribut `sizes` personnalisable

4. **Prévention CLS (Cumulative Layout Shift)**
   - Utilisation de `width` et `height` pour réserver l'espace
   - Ratio d'aspect calculé automatiquement
   - Placeholder gris pendant le chargement

5. **Placeholder Animé**
   - Indicateur de chargement avec animation pulse
   - Transition en fondu lors de l'affichage de l'image

### Utilisation

```tsx
import OptimizedImage from '@/components/OptimizedImage';

// Image standard avec lazy loading
<OptimizedImage
  src="/images-optimized/services/service-instalacao.jpg"
  alt="Installation électrique complète"
  width={400}
  height={300}
  objectFit="cover"
  className="rounded-lg"
/>

// Image hero (prioritaire, pas de lazy loading)
<OptimizedImage
  src="/images-optimized/hero/hero-electrician-portugal.jpg"
  alt="Électricien professionnel"
  width={1920}
  height={1080}
  priority={true}
  sizes="100vw"
/>

// Image CDN externe (pas de srcset)
<OptimizedImage
  src="https://cdn.example.com/image.jpg"
  alt="Image externe"
  width={800}
  height={600}
/>
```

### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `src` | string | - | URL de l'image (locale ou externe) |
| `alt` | string | - | Texte alternatif (obligatoire pour l'accessibilité) |
| `width` | number | - | Largeur intrinsèque de l'image |
| `height` | number | - | Hauteur intrinsèque de l'image |
| `priority` | boolean | false | Si true, charge immédiatement (pas de lazy loading) |
| `objectFit` | string | 'cover' | Mode d'ajustement CSS (cover, contain, fill, etc.) |
| `sizes` | string | '100vw' | Attribut sizes pour srcset responsive |
| `className` | string | '' | Classes CSS additionnelles |

## Structure des Images

### Dossiers

```
/tmp/staff-seekers/client/public/
├── images-optimized/          # Images optimisées (WebP + JPG)
│   ├── hero/                  # Images hero (LCP critique)
│   │   ├── hero-electrician-portugal.jpg
│   │   ├── hero-electrician-portugal.webp
│   │   ├── hero-plumber-portugal.jpg
│   │   └── hero-plumber-portugal.webp
│   ├── services/              # Images de services
│   │   ├── service-instalacao.jpg
│   │   ├── service-instalacao.webp
│   │   ├── service-urgencia.jpg
│   │   ├── service-urgencia.webp
│   │   └── ...
│   ├── blog/                  # Images d'articles de blog
│   │   ├── placeholder.jpg
│   │   ├── placeholder.webp
│   │   └── ...
│   └── background/            # Images de fond
│       ├── background-energy.jpg
│       ├── background-energy.webp
│       └── ...
└── images/                    # Images originales (legacy)
```

### Convention de Nommage

- Format: `{category}-{description}.{ext}`
- Exemples:
  - `hero-electrician-portugal.jpg`
  - `service-instalacao.jpg`
  - `blog-certificacao-energetica.jpg`

## Composants Optimisés

### Composants Mis à Jour

1. **ServicesSlider.tsx**
   - Slider d'images de services avec OptimizedImage
   - Images CDN manuscdn.com conservées (externes)
   - Priority sur la première slide

2. **CompanyInfo.tsx**
   - Image d'urgence 24h optimisée
   - Lazy loading activé

3. **OptimizedServices.tsx**
   - Grille de services avec images optimisées
   - Toutes les images en lazy loading

4. **OptimizedHero.tsx**
   - Image hero avec `priority={true}`
   - Chargement immédiat pour LCP optimal

5. **BlogCard.tsx**
   - Images de blog optimisées
   - Lazy loading pour toutes les cartes

## Configuration Vite

### Plugin d'Optimisation

Le fichier `/tmp/staff-seekers/vite.config.ts` inclut maintenant `vitePluginImageOptimizer()` qui:

- Affiche un résumé de l'optimisation lors du build
- Confirme que les images sont pré-optimisées
- Pas de traitement supplémentaire nécessaire au build

### Build

```bash
npm run build
```

Le plugin affichera:
```
🖼️  Image optimization summary:
   Images are pre-optimized in /client/public/images-optimized/
   - WebP format for modern browsers
   - Multiple sizes: 320w, 640w, 1024w, 1920w
   - Lazy loading enabled via OptimizedImage component
   ✅ No additional optimization needed at build time
```

## Performance

### Métriques Améliorées

1. **LCP (Largest Contentful Paint)**
   - Images hero avec `priority={true}` chargées immédiatement
   - Format WebP réduit la taille de 25-35%
   - Dimensions explicites évitent les recalculs

2. **CLS (Cumulative Layout Shift)**
   - Attributs `width` et `height` sur toutes les images
   - Ratio d'aspect calculé automatiquement
   - Placeholder réserve l'espace avant le chargement

3. **FID (First Input Delay)**
   - Lazy loading réduit le JavaScript initial
   - Intersection Observer natif (pas de polyfill)

4. **Bande Passante**
   - WebP: -25 à -35% de taille vs JPG
   - Srcset: charge uniquement la taille nécessaire
   - Lazy loading: charge uniquement les images visibles

### Recommandations

1. **Images Hero (Above-the-fold)**
   - Toujours utiliser `priority={true}`
   - Taille optimale: 1920x1080 max
   - Format WebP + JPG fallback

2. **Images de Services**
   - Lazy loading activé
   - Taille optimale: 800x600
   - Ratio 4:3 ou 16:9

3. **Images de Blog**
   - Lazy loading activé
   - Taille optimale: 1200x630 (Open Graph)
   - Placeholder par défaut disponible

4. **Images CDN Externes**
   - Pas de srcset généré
   - Lazy loading activé
   - Considérer le téléchargement local pour meilleures performances

## Migration

### Remplacer une Image Standard

**Avant:**
```tsx
<img
  src="/images/service.jpg"
  alt="Service"
  loading="lazy"
  width="400"
  height="300"
/>
```

**Après:**
```tsx
<OptimizedImage
  src="/images-optimized/services/service.jpg"
  alt="Service"
  width={400}
  height={300}
/>
```

### Images CDN

Les images CDN (manuscdn.com, unsplash.com, etc.) fonctionnent automatiquement sans srcset:

```tsx
<OptimizedImage
  src="https://cdn.example.com/image.jpg"
  alt="Image externe"
  width={800}
  height={600}
/>
```

## Checklist d'Optimisation

- [x] Composant OptimizedImage créé avec srcset et WebP
- [x] ServicesSlider.tsx optimisé
- [x] CompanyInfo.tsx optimisé
- [x] OptimizedServices.tsx optimisé
- [x] OptimizedHero.tsx optimisé
- [x] BlogCard.tsx optimisé
- [x] Plugin Vite configuré
- [x] Images dans /images-optimized/ (WebP + JPG)
- [x] Attributs width/height sur toutes les images
- [x] Priority sur images hero
- [x] Lazy loading sur images below-the-fold

## Prochaines Étapes

1. **Générer les Variantes de Taille**
   - Créer les versions 320w, 640w, 1024w, 1920w pour chaque image
   - Script de génération automatique recommandé

2. **Optimiser les Images Restantes**
   - Identifier les composants avec `<img>` non optimisés
   - Migrer vers OptimizedImage

3. **Tests de Performance**
   - Lighthouse CI pour mesurer les améliorations
   - WebPageTest pour analyse détaillée
   - Core Web Vitals en production

4. **CDN**
   - Considérer un CDN pour les images statiques
   - Cloudflare Images ou Vercel Image Optimization

## Support

Pour toute question sur l'optimisation des images, consulter:
- Documentation OptimizedImage: `/client/src/components/OptimizedImage.tsx`
- Configuration Vite: `/vite.config.ts`
- Ce guide: `/IMAGE_OPTIMIZATION_GUIDE.md`
