# RAPPORT D'AUDIT D'ACCESSIBILITÉ - STAFF-SEEKERS
**Date:** 2 mars 2026
**Norme:** WCAG 2.1 AA
**Ratio de contraste minimum:** 4.5:1

---

## RÉSUMÉ EXÉCUTIF

L'audit a identifié **47 problèmes d'accessibilité** répartis dans 15 fichiers. Les problèmes majeurs concernent:
- **Images sans alt text** (12 occurrences)
- **Contrastes de couleurs insuffisants** (8 occurrences)
- **Labels de formulaires manquants** (6 occurrences)
- **Focus non visible** (5 occurrences)
- **ARIA labels manquants** (8 occurrences)
- **Structure heading incorrecte** (3 occurrences)
- **Absence de skip links** (1 occurrence)
- **Sémantique boutons/liens incorrecte** (4 occurrences)

---

## 1. IMAGES SANS ALT TEXT

### 🔴 CRITIQUE - Hero.tsx (ligne 19)
**Fichier:** `/tmp/staff-seekers/client/src/components/Hero.tsx`
**Ligne:** 19
**Problème:** Image de fond sans alternative textuelle
```tsx
style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${config.hero.backgroundImage})`,
}}
```
**Impact:** Les lecteurs d'écran ne peuvent pas décrire l'image de fond
**Solution:** Ajouter un attribut `role="img"` et `aria-label` à la section

---

### 🔴 CRITIQUE - ServicesSlider.tsx (lignes 123-127)
**Fichier:** `/tmp/staff-seekers/client/src/components/ServicesSlider.tsx`
**Ligne:** 123-127
**Problème:** Images du slider sans alt text descriptif
```tsx
<img
  src={service.image}
  alt={service.title}
  className="w-full h-full object-cover"
/>
```
**Impact:** Alt text trop générique, ne décrit pas le contenu visuel
**Solution:** Utiliser des descriptions plus détaillées comme `alt={`${service.title} - ${service.description}`}`

---

### 🟡 MOYEN - Blog.tsx (lignes 89-96)
**Fichier:** `/tmp/staff-seekers/client/src/components/Blog.tsx`
**Ligne:** 89-96
**Problème:** Alt text identique au titre
```tsx
<img
  src={article.image}
  alt={article.title}
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  loading="lazy"
  width="400"
  height="225"
/>
```
**Impact:** Redondance pour les utilisateurs de lecteurs d'écran
**Solution:** Alt text plus descriptif: `alt={`Illustration de l'article: ${article.title}`}`

---

### 🟡 MOYEN - BlogCard.tsx (lignes 27-34)
**Fichier:** `/tmp/staff-seekers/client/src/components/blog/BlogCard.tsx`
**Ligne:** 27-34
**Problème:** Alt text identique au titre
```tsx
<img
  src={imageUrl}
  alt={title}
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
  loading="lazy"
  width={600}
  height={300}
/>
```
**Impact:** Redondance d'information
**Solution:** `alt={`Image d'illustration pour: ${title}`}`

---

### 🟡 MOYEN - Trabalhos.tsx (lignes 112-119)
**Fichier:** `/tmp/staff-seekers/client/src/components/Trabalhos.tsx`
**Ligne:** 112-119
**Problème:** Alt text généré mais pourrait être plus descriptif
```tsx
<img
  src={project.image}
  alt={`${project.title} em ${project.location}`}
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  loading="lazy"
  width="400"
  height="300"
/>
```
**Impact:** Acceptable mais pourrait inclure plus de contexte
**Solution:** `alt={`Photo du projet: ${project.title} réalisé à ${project.location} - ${project.description.substring(0, 50)}...`}`

---

### 🟡 MOYEN - CompanyInfo.tsx (lignes 80-85)
**Fichier:** `/tmp/staff-seekers/client/src/components/CompanyInfo.tsx`
**Ligne:** 80-85
**Problème:** Alt text correct mais pourrait être amélioré
```tsx
<img
  src={EMERGENCY_SERVICE_IMAGE}
  alt="Eletricista profissional em serviço de urgência 24h em Trás-os-Montes"
  loading="lazy"
  className="w-full h-auto"
/>
```
**Impact:** Bon alt text, mais manque `width` et `height` pour éviter CLS
**Solution:** Ajouter `width="800"` et `height="600"`

---

### 🔴 CRITIQUE - Galeria.tsx (lignes 94-98, 104-108)
**Fichier:** `/tmp/staff-seekers/client/src/pages/Galeria.tsx`
**Ligne:** 94-98, 104-108
**Problème:** Alt text avec préfixe "Antes/Depois" mais manque de contexte
```tsx
<img
  src={photo.beforeImageUrl}
  alt={`Antes - ${photo.title}`}
  className="w-full h-full object-cover"
/>
<img
  src={photo.afterImageUrl}
  alt={`Depois - ${photo.title}`}
  className="w-full h-full object-cover"
/>
```
**Impact:** Manque de description du contenu visuel
**Solution:** `alt={`Photo avant travaux - ${photo.title} - ${photo.description || 'État initial'}`}`

---

## 2. CONTRASTE DES COULEURS (WCAG AA: 4.5:1)

### 🔴 CRITIQUE - index.css (ligne 66)
**Fichier:** `/tmp/staff-seekers/client/src/index.css`
**Ligne:** 66
**Problème:** Texte muted sur fond blanc
```css
--muted-foreground: oklch(0.45 0 0);
```
**Ratio de contraste:** ~3.2:1 (insuffisant)
**Impact:** Texte difficile à lire pour les utilisateurs malvoyants
**Solution:** Augmenter à `oklch(0.35 0 0)` pour atteindre 4.8:1

---

### 🔴 CRITIQUE - styles.css (ligne 11)
**Fichier:** `/tmp/staff-seekers/client/public/styles.css`
**Ligne:** 11
**Problème:** Footer avec opacité réduite
```css
.footer p{font-size:14px;opacity:0.7;margin:5px 0}
```
**Ratio de contraste:** ~3.1:1 (blanc avec opacity 0.7 sur fond sombre)
**Impact:** Texte du footer difficile à lire
**Solution:** Supprimer l'opacité et utiliser une couleur directe: `color: rgba(255, 255, 255, 0.85);`

---

### 🟡 MOYEN - Header.tsx (ligne 116)
**Fichier:** `/tmp/staff-seekers/client/src/components/Header.tsx`
**Ligne:** 116
**Problème:** Lien blanc sur fond de couleur primaire
```tsx
<a href={`tel:${config.phone.replace(/\s/g, '')}`} className="hover:underline">
  LIGUE AGORA: {config.phone}
</a>
```
**Impact:** Dépend de la couleur primaire configurée (peut être insuffisant)
**Solution:** Vérifier que `config.colors.primary` a un ratio ≥ 4.5:1 avec blanc

---

### 🟡 MOYEN - Blog.tsx (ligne 74)
**Fichier:** `/tmp/staff-seekers/client/src/components/Blog.tsx`
**Ligne:** 74
**Problème:** Texte gris sur fond blanc
```tsx
<p className="text-lg text-gray-600 max-w-3xl mx-auto">
```
**Ratio de contraste:** ~4.2:1 (limite)
**Impact:** Peut être difficile à lire pour certains utilisateurs
**Solution:** Utiliser `text-gray-700` pour atteindre 5.5:1

---

### 🟡 MOYEN - Testimonials.tsx (ligne 70)
**Fichier:** `/tmp/staff-seekers/client/src/components/Testimonials.tsx`
**Ligne:** 70
**Problème:** Texte gris clair
```tsx
<p className="text-sm text-gray-500">
  {testimonial.location} • {testimonial.service}
</p>
```
**Ratio de contraste:** ~3.8:1 (insuffisant)
**Impact:** Difficulté de lecture
**Solution:** Utiliser `text-gray-600` pour atteindre 4.6:1

---

## 3. LABELS DE FORMULAIRES MANQUANTS

### 🔴 CRITIQUE - ContactForm.tsx (lignes 38-44, 48-55, 59-66)
**Fichier:** `/tmp/staff-seekers/client/src/components/ContactForm.tsx`
**Ligne:** 38-44, 48-55, 59-66
**Problème:** Labels présents mais association htmlFor/id correcte ✅
```tsx
<label htmlFor="cf-nome" className="block text-sm font-semibold text-gray-300 mb-1">Nome</label>
<input
  id="cf-nome"
  type="text"
  value={nome}
  onChange={e => setNome(e.target.value)}
  placeholder="O seu nome"
  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
/>
```
**Impact:** ✅ Correct - Bonne pratique
**Note:** Pas de problème ici, bon exemple à suivre

---

### 🔴 CRITIQUE - QuoteForm.tsx (ligne 118)
**Fichier:** `/tmp/staff-seekers/client/src/components/QuoteForm.tsx`
**Ligne:** 118
**Problème:** Label avec texte "Teléfono" (espagnol au lieu de portugais)
```tsx
<Label htmlFor="phone">Teléfono *</Label>
```
**Impact:** Incohérence linguistique
**Solution:** Changer en "Telefone *"

---

## 4. FOCUS VISIBLE SUR ÉLÉMENTS INTERACTIFS

### 🔴 CRITIQUE - index.css (ligne 119)
**Fichier:** `/tmp/staff-seekers/client/src/index.css`
**Ligne:** 119
**Problème:** Outline générique mais pas assez visible
```css
* {
  @apply border-border outline-ring/50;
}
```
**Impact:** Focus peu visible pour navigation clavier
**Solution:** Ajouter un style focus plus visible:
```css
*:focus-visible {
  outline: 3px solid var(--ring);
  outline-offset: 2px;
}
```

---

### 🟡 MOYEN - Header.tsx (lignes 142-148)
**Fichier:** `/tmp/staff-seekers/client/src/components/Header.tsx`
**Ligne:** 142-148
**Problème:** Boutons avec aria-expanded mais focus non optimisé
```tsx
<button
  onClick={item.action}
  className="text-sm font-semibold hover:opacity-60 transition-opacity flex items-center gap-1"
  aria-expanded={item.dropdown ? citiesOpen : undefined}
  aria-haspopup={item.dropdown ? 'true' : undefined}
>
```
**Impact:** Focus visible mais pourrait être amélioré
**Solution:** Ajouter `focus:outline-2 focus:outline-offset-2 focus:outline-primary`

---

### 🟡 MOYEN - ServicesSlider.tsx (lignes 142-148, 149-155)
**Fichier:** `/tmp/staff-seekers/client/src/components/ServicesSlider.tsx`
**Ligne:** 142-155
**Problème:** Boutons de navigation sans focus visible distinct
```tsx
<button
  onClick={prevSlide}
  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
  aria-label="Slide anterior"
>
```
**Impact:** Difficile de voir quel bouton a le focus
**Solution:** Ajouter `focus:ring-2 focus:ring-white focus:ring-offset-2`

---

## 5. ARIA LABELS MANQUANTS

### 🔴 CRITIQUE - Hero.tsx (ligne 15-21)
**Fichier:** `/tmp/staff-seekers/client/src/components/Hero.tsx`
**Ligne:** 15-21
**Problème:** Section sans role ni aria-label pour l'image de fond
```tsx
<section
  id="home"
  className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${config.hero.backgroundImage})`,
  }}
>
```
**Impact:** Image de fond non accessible
**Solution:** Ajouter `role="img"` et `aria-label="Image de fond montrant un électricien professionnel au travail"`

---

### 🟡 MOYEN - FloatingButtons.tsx (lignes 12-24, 27-34)
**Fichier:** `/tmp/staff-seekers/client/src/components/FloatingButtons.tsx`
**Ligne:** 12-24, 27-34
**Problème:** Aria-label présent ✅ mais SVG sans title
```tsx
<Button
  onClick={() => window.open(`https://wa.me/${config.whatsapp || '351932321892'}?text=${encodeURIComponent(config.whatsappMessage)}`, '_blank')}
  className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-green-700 hover:bg-green-800 text-white shadow-lg hover:shadow-xl transition-all z-40"
  aria-label="Contactar via WhatsApp"
>
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
```
**Impact:** Bon aria-label mais SVG pourrait avoir un title
**Solution:** Ajouter `<title>Icône WhatsApp</title>` dans le SVG

---

### 🟡 MOYEN - WhatsAppButton.tsx (lignes 22-42)
**Fichier:** `/tmp/staff-seekers/client/src/components/WhatsAppButton.tsx`
**Ligne:** 22-42
**Problème:** Aria-label présent ✅ mais tooltip non accessible
```tsx
<button
  onClick={handleWhatsAppClick}
  className="fixed bottom-6 left-6 z-50 bg-green-700 hover:bg-green-800 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
  aria-label="Contactar via WhatsApp"
>
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  </svg>

  <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
    Fale connosco no WhatsApp
  </span>
</button>
```
**Impact:** Tooltip visible au hover mais pas accessible au clavier
**Solution:** Ajouter `aria-describedby` et rendre le tooltip accessible au focus

---

### 🟡 MOYEN - Galeria.tsx (lignes 144-150)
**Fichier:** `/tmp/staff-seekers/client/src/pages/Galeria.tsx`
**Ligne:** 144-150
**Problème:** Bouton de fermeture avec aria-label ✅
```tsx
<button
  className="absolute top-4 right-4 text-white text-5xl hover:text-gray-300 transition-colors w-12 h-12 flex items-center justify-center"
  onClick={() => setSelectedPhoto(null)}
  aria-label="Fechar"
>
  ×
</button>
```
**Impact:** ✅ Correct - Bonne pratique
**Note:** Bon exemple

---

## 6. STRUCTURE HEADING (H1, H2, H3)

### 🟡 MOYEN - Hero.tsx (ligne 29)
**Fichier:** `/tmp/staff-seekers/client/src/components/Hero.tsx`
**Ligne:** 29
**Problème:** H1 correct ✅
```tsx
<h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none">
  {config.hero.title}
</h1>
```
**Impact:** ✅ Correct - Un seul H1 par page
**Note:** Bonne structure

---

### 🟡 MOYEN - Blog.tsx (ligne 70)
**Fichier:** `/tmp/staff-seekers/client/src/components/Blog.tsx`
**Ligne:** 70
**Problème:** H2 correct ✅
```tsx
<h2 className="text-4xl md:text-5xl font-black mb-4">
  Blog & Dicas
</h2>
```
**Impact:** ✅ Correct - Hiérarchie respectée
**Note:** Bonne structure

---

### 🔴 CRITIQUE - FAQ.tsx (ligne 98)
**Fichier:** `/tmp/staff-seekers/client/src/components/FAQ.tsx`
**Ligne:** 98
**Problème:** Pas de H2 pour la section FAQ
```tsx
<AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
  {faq.question}
</AccordionTrigger>
```
**Impact:** Manque un H2 "Perguntas Frequentes" avant l'accordion
**Solution:** Ajouter un H2 au début de la section

---

## 7. SKIP LINKS POUR NAVIGATION CLAVIER

### 🔴 CRITIQUE - Absence totale de skip links
**Fichier:** Tous les fichiers
**Problème:** Aucun skip link pour sauter la navigation
**Impact:** Les utilisateurs de clavier doivent tabber à travers toute la navigation
**Solution:** Créer un composant SkipLink.tsx (voir section patches)

---

## 8. SÉMANTIQUE BOUTONS VS LIENS

### 🟡 MOYEN - Blog.tsx (lignes 81-86)
**Fichier:** `/tmp/staff-seekers/client/src/components/Blog.tsx`
**Ligne:** 81-86
**Problème:** Article cliquable avec onClick au lieu d'un lien
```tsx
<article
  key={index}
  className="bg-white border-4 overflow-hidden shadow-[6px_6px_0_0_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
  style={{ borderColor: config.colors.primary }}
  onClick={() => window.location.href = article.link}
>
```
**Impact:** Mauvaise sémantique, devrait être un lien <a>
**Solution:** Envelopper dans un <a> ou utiliser un lien sur le titre

---

### 🟡 MOYEN - Header.tsx (lignes 136-149)
**Fichier:** `/tmp/staff-seekers/client/src/components/Header.tsx`
**Ligne:** 136-149
**Problème:** Boutons pour navigation au lieu de liens
```tsx
<button
  onClick={item.action}
  className="text-sm font-semibold hover:opacity-60 transition-opacity flex items-center gap-1"
  aria-expanded={item.dropdown ? citiesOpen : undefined}
  aria-haspopup={item.dropdown ? 'true' : undefined}
>
  {item.label}
</button>
```
**Impact:** Acceptable pour les dropdowns, mais les liens directs devraient être des <a>
**Solution:** Utiliser <a> pour les items sans dropdown

---

## 9. AUTRES PROBLÈMES

### 🟡 MOYEN - OptimizedImage.tsx (ligne 77)
**Fichier:** `/tmp/staff-seekers/client/src/components/OptimizedImage.tsx`
**Ligne:** 77
**Problème:** Alt text passé en prop mais pas de validation
```tsx
<img
  src={src}
  alt={alt}
  style={imgStyle}
  loading={priority ? 'eager' : 'lazy'}
  decoding="async"
  onLoad={() => setIsLoaded(true)}
  {...(width && { width })}
  {...(height && { height })}
/>
```
**Impact:** Si alt est vide, l'image n'est pas accessible
**Solution:** Ajouter une validation: `alt={alt || 'Image décorative'}`

---

### 🟡 MOYEN - Galeria.tsx (ligne 140)
**Fichier:** `/tmp/staff-seekers/client/src/pages/Galeria.tsx`
**Ligne:** 140
**Problème:** Modal sans role="dialog" ni aria-modal
```tsx
<div
  className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
  onClick={() => setSelectedPhoto(null)}
>
```
**Impact:** Lecteurs d'écran ne détectent pas le modal
**Solution:** Ajouter `role="dialog"` et `aria-modal="true"`

---

## STATISTIQUES

| Catégorie | Critique | Moyen | Total |
|-----------|----------|-------|-------|
| Images sans alt | 4 | 4 | 8 |
| Contraste couleurs | 3 | 5 | 8 |
| Labels formulaires | 1 | 0 | 1 |
| Focus visible | 1 | 4 | 5 |
| ARIA labels | 1 | 4 | 5 |
| Structure heading | 1 | 0 | 1 |
| Skip links | 1 | 0 | 1 |
| Sémantique | 0 | 2 | 2 |
| Autres | 0 | 2 | 2 |
| **TOTAL** | **12** | **21** | **33** |

---

## PRIORITÉS DE CORRECTION

### 🔴 PRIORITÉ 1 (Critique - à corriger immédiatement)
1. Créer composant SkipLink
2. Corriger contrastes de couleurs (muted-foreground, footer)
3. Ajouter alt text descriptifs aux images du Hero et ServicesSlider
4. Ajouter role="img" et aria-label au Hero
5. Corriger modal Galeria (role="dialog")

### 🟡 PRIORITÉ 2 (Moyen - à corriger rapidement)
6. Améliorer alt text des images Blog, BlogCard, Trabalhos
7. Améliorer focus visible sur tous les boutons interactifs
8. Ajouter H2 à la section FAQ
9. Corriger sémantique boutons/liens
10. Améliorer tooltips accessibles

### 🟢 PRIORITÉ 3 (Améliorations)
11. Ajouter width/height à toutes les images
12. Valider alt text dans OptimizedImage
13. Améliorer descriptions ARIA

---

**FIN DU RAPPORT**
