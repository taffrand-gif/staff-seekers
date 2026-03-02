# GUIDE D'IMPLÉMENTATION - CORRECTIONS D'ACCESSIBILITÉ
**Projet:** staff-seekers
**Date:** 2 mars 2026

Ce guide fournit les instructions étape par étape pour implémenter toutes les corrections d'accessibilité.

---

## ÉTAPE 1: CRÉER UNE BRANCHE

```bash
cd /tmp/staff-seekers
git checkout -b accessibility-wcag-aa-fixes
```

---

## ÉTAPE 2: CORRECTIONS CSS PRIORITAIRES

### 2.1 - Corriger index.css

Ouvrir `/tmp/staff-seekers/client/src/index.css`

**Ligne 66** - Changer:
```css
--muted-foreground: oklch(0.45 0 0);
```
En:
```css
--muted-foreground: oklch(0.35 0 0); /* WCAG AA: 4.8:1 */
```

**Ligne 96** - Changer:
```css
--muted-foreground: oklch(0.705 0.015 286.067);
```
En:
```css
--muted-foreground: oklch(0.75 0.015 286.067); /* WCAG AA: 5.2:1 */
```

**Après ligne 143** - Ajouter:
```css
/* Focus visible amélioré pour navigation clavier */
*:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

*:focus-visible {
  outline: 3px solid var(--ring);
  outline-offset: 2px;
}

button:focus-visible,
a:focus-visible,
[role="button"]:focus-visible {
  outline: 3px solid var(--ring);
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

### 2.2 - Corriger styles.css

Ouvrir `/tmp/staff-seekers/client/public/styles.css`

**Ligne 11** - Changer:
```css
.footer p{font-size:14px;opacity:0.7;margin:5px 0}
```
En:
```css
.footer p{font-size:14px;color:rgba(255,255,255,0.85);margin:5px 0}
```

---

## ÉTAPE 3: CRÉER LE COMPOSANT SKIPLINK

Le fichier a déjà été créé: `/tmp/staff-seekers/client/src/components/SkipLink.tsx`

Vérifier que le contenu est correct.

---

## ÉTAPE 4: INTÉGRER SKIPLINK DANS L'APPLICATION

### 4.1 - Modifier App.tsx

Ouvrir `/tmp/staff-seekers/client/src/App.tsx`

Ajouter l'import en haut:
```tsx
import SkipLink from '@/components/SkipLink';
```

Ajouter le composant au début du render (première ligne du return):
```tsx
return (
  <>
    <SkipLink />
    {/* Reste du code existant */}
```

### 4.2 - Modifier Home.tsx

Ouvrir `/tmp/staff-seekers/client/src/pages/Home.tsx`

**Ligne 63** - Changer:
```tsx
<main>
```
En:
```tsx
<main id="main-content">
```

---

## ÉTAPE 5: CORRIGER LES IMAGES

### 5.1 - Hero.tsx

Ouvrir `/tmp/staff-seekers/client/src/components/Hero.tsx`

**Ligne 15** - Ajouter les attributs:
```tsx
<section
  id="home"
  role="img"
  aria-label="Image de fond montrant un électricien professionnel au travail à Trás-os-Montes"
  className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
```

### 5.2 - ServicesSlider.tsx

Ouvrir `/tmp/staff-seekers/client/src/components/ServicesSlider.tsx`

**Ligne 123** - Modifier l'image:
```tsx
<img
  src={service.image}
  alt={`${service.title} - ${service.description}`}
  className="w-full h-full object-cover"
  width="800"
  height="600"
/>
```

**Lignes 142-155** - Ajouter focus aux boutons:
```tsx
<button
  onClick={prevSlide}
  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
  aria-label="Slide anterior"
>
  <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
</button>
<button
  onClick={nextSlide}
  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
  aria-label="Próximo slide"
>
  <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
</button>
```

### 5.3 - Blog.tsx

Ouvrir `/tmp/staff-seekers/client/src/components/Blog.tsx`

**Ligne 74** - Changer:
```tsx
<p className="text-lg text-gray-700 max-w-3xl mx-auto">
```

**Ligne 89** - Modifier alt:
```tsx
<img
  src={article.image}
  alt={`Illustration de l'article: ${article.title}`}
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  loading="lazy"
  width="400"
  height="225"
/>
```

**Ligne 81** - Envelopper l'article dans un lien:
```tsx
<a href={article.link} className="block">
  <article
    key={index}
    className="bg-white border-4 overflow-hidden shadow-[6px_6px_0_0_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
    style={{ borderColor: config.colors.primary }}
  >
    {/* Contenu existant */}
  </article>
</a>
```

Supprimer le `onClick` et `cursor-pointer` de l'article.

### 5.4 - BlogCard.tsx

Ouvrir `/tmp/staff-seekers/client/src/components/blog/BlogCard.tsx`

**Ligne 28** - Modifier alt:
```tsx
<img
  src={imageUrl}
  alt={`Image d'illustration pour l'article: ${title}`}
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
  loading="lazy"
  width={600}
  height={300}
/>
```

### 5.5 - Trabalhos.tsx

Ouvrir `/tmp/staff-seekers/client/src/components/Trabalhos.tsx`

**Ligne 113** - Modifier alt:
```tsx
<img
  src={project.image}
  alt={`Photo du projet: ${project.title} réalisé à ${project.location}`}
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  loading="lazy"
  width="400"
  height="300"
/>
```

### 5.6 - CompanyInfo.tsx

Ouvrir `/tmp/staff-seekers/client/src/components/CompanyInfo.tsx`

**Ligne 80** - Ajouter dimensions:
```tsx
<img
  src={EMERGENCY_SERVICE_IMAGE}
  alt="Eletricista profissional em serviço de urgência 24h em Trás-os-Montes"
  loading="lazy"
  className="w-full h-auto"
  width="800"
  height="600"
/>
```

### 5.7 - Galeria.tsx

Ouvrir `/tmp/staff-seekers/client/src/pages/Galeria.tsx`

**Ligne 94** - Modifier les images:
```tsx
<img
  src={photo.beforeImageUrl}
  alt={`Photo avant travaux - ${photo.title}${photo.description ? ' - ' + photo.description : ''}`}
  className="w-full h-full object-cover"
  width="400"
  height="300"
/>
```

**Ligne 104** - Modifier:
```tsx
<img
  src={photo.afterImageUrl}
  alt={`Photo après travaux - ${photo.title}${photo.description ? ' - ' + photo.description : ''}`}
  className="w-full h-full object-cover"
  width="400"
  height="300"
/>
```

**Ligne 140** - Ajouter ARIA au modal:
```tsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
  onClick={() => setSelectedPhoto(null)}
>
```

**Ligne 153** - Ajouter id au titre:
```tsx
<h2 id="modal-title" className="text-white text-2xl font-bold mb-4 text-center">
```

---

## ÉTAPE 6: CORRIGER LES CONTRASTES

### 6.1 - Testimonials.tsx

Ouvrir `/tmp/staff-seekers/client/src/components/Testimonials.tsx`

**Ligne 70** - Changer:
```tsx
<p className="text-sm text-gray-600">
```

---

## ÉTAPE 7: AJOUTER HEADING À FAQ

Ouvrir `/tmp/staff-seekers/client/src/components/FAQ.tsx`

**Avant ligne 90** - Ajouter:
```tsx
<div className="text-center mb-12">
  <h2 className="text-4xl md:text-5xl font-black mb-4">
    Perguntas Frequentes
  </h2>
  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
    Encontre respostas às perguntas mais comuns sobre os nossos serviços em Trás-os-Montes.
  </p>
</div>
```

---

## ÉTAPE 8: AMÉLIORER ARIA ET FOCUS

### 8.1 - FloatingButtons.tsx

Ouvrir `/tmp/staff-seekers/client/src/components/FloatingButtons.tsx`

**Ligne 17** - Ajouter aria-hidden au SVG:
```tsx
<svg
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-7 h-7"
  aria-hidden="true"
>
  <title>Icône WhatsApp</title>
  <path d="M17.472 14.382c-.297-.149..."/>
</svg>
```

### 8.2 - WhatsAppButton.tsx

Ouvrir `/tmp/staff-seekers/client/src/components/WhatsAppButton.tsx`

**Ligne 22** - Améliorer le bouton:
```tsx
<button
  onClick={handleWhatsAppClick}
  className="fixed bottom-6 left-6 z-50 bg-green-700 hover:bg-green-800 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group focus:ring-2 focus:ring-white focus:ring-offset-2"
  aria-label="Contactar via WhatsApp"
  aria-describedby="whatsapp-tooltip"
>
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <title>Icône WhatsApp</title>
    <path d="M17.472 14.382c-.297-.149..."/>
  </svg>

  <span
    id="whatsapp-tooltip"
    role="tooltip"
    className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none"
  >
    Fale connosco no WhatsApp
  </span>
</button>
```

### 8.3 - MobileCallButton.tsx

Ouvrir `/tmp/staff-seekers/client/src/components/MobileCallButton.tsx`

**Ligne 12** - Améliorer:
```tsx
<a
  href={`tel:${config.phone.replace(/\s/g, '')}`}
  className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-center gap-3 py-4 text-white font-bold text-lg shadow-[0_-4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 active:scale-95 focus:outline-2 focus:outline-offset-2 focus:outline-white"
  style={{ backgroundColor: config.colors.primary }}
  aria-label={`Ligar agora para ${config.phone}`}
>
  <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
  <span>LIGAR AGORA: {config.phone}</span>
</a>
```

### 8.4 - QuoteForm.tsx

Ouvrir `/tmp/staff-seekers/client/src/components/QuoteForm.tsx`

**Ligne 118** - Corriger:
```tsx
<Label htmlFor="phone">Telefone *</Label>
```

### 8.5 - OptimizedImage.tsx

Ouvrir `/tmp/staff-seekers/client/src/components/OptimizedImage.tsx`

**Ligne 75** - Améliorer:
```tsx
<img
  src={src}
  alt={alt || ''}
  style={imgStyle}
  loading={priority ? 'eager' : 'lazy'}
  decoding="async"
  onLoad={() => setIsLoaded(true)}
  {...(width && { width })}
  {...(height && { height })}
  {...(!alt && { role: 'presentation' })}
/>
```

---

## ÉTAPE 9: TESTER LES CORRECTIONS

### 9.1 - Build du projet
```bash
npm run build
```

### 9.2 - Tests automatisés
```bash
npm run test
```

### 9.3 - Tests manuels

**Navigation clavier:**
- Appuyer sur Tab pour naviguer
- Vérifier que tous les éléments interactifs sont accessibles
- Vérifier que le focus est visible
- Tester le skip link (Tab dès le chargement)

**Lecteur d'écran:**
- Tester avec NVDA (Windows) ou VoiceOver (Mac)
- Vérifier que toutes les images ont un alt text
- Vérifier que les formulaires sont correctement labellisés
- Vérifier la structure des headings (H1 → H2 → H3)

**Contraste:**
- Utiliser WebAIM Contrast Checker
- Vérifier tous les textes sur fond coloré
- Ratio minimum: 4.5:1 pour texte normal

---

## ÉTAPE 10: COMMIT ET PUSH

```bash
git add .
git commit -m "fix: Corrections d'accessibilité WCAG 2.1 AA

- Amélioration des contrastes de couleurs (4.5:1 minimum)
- Ajout d'alt text descriptifs sur toutes les images
- Ajout de skip link pour navigation clavier
- Amélioration du focus visible sur éléments interactifs
- Ajout d'ARIA labels manquants
- Correction de la structure des headings
- Amélioration de la sémantique HTML (boutons vs liens)
- Ajout de role et aria-modal aux modals
- Correction des tooltips pour accessibilité clavier

Fixes #[numéro-issue]"

git push origin accessibility-wcag-aa-fixes
```

---

## CHECKLIST FINALE

- [ ] Tous les contrastes ≥ 4.5:1
- [ ] Toutes les images ont un alt text descriptif
- [ ] Skip link fonctionnel
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Labels sur tous les champs de formulaire
- [ ] Structure heading logique (H1 → H2 → H3)
- [ ] ARIA labels sur éléments complexes
- [ ] Modals avec role="dialog" et aria-modal
- [ ] Navigation clavier complète
- [ ] Tests avec lecteur d'écran réussis

---

**FIN DU GUIDE D'IMPLÉMENTATION**
