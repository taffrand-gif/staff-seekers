# PREMIUM HOOKS - INSTRUCTIONS D'INTÉGRATION

## 📦 Fichiers Créés

### Norte-Reparos (Canalizador)
- `client/public/premium-hooks.html` (8.7KB) - Hooks HTML
- `client/public/premium-hooks.css` (7.1KB) - Styles CSS

### Staff-Seekers (Eletricista)
- `client/public/premium-hooks.html` (9.1KB) - Hooks HTML
- `client/public/premium-hooks.css` (7.1KB) - Styles CSS

---

## 🎯 Hooks Disponibles

### 1. Hero Homepage (premium-hero)
**Où :** Page d'accueil, en haut après le header
**Message :** "Respeito Real — Não Sorrisos de Cortesia"

### 2. Badge Intervenção Hoje (today-intervention)
**Où :** Page d'accueil, après le hero
**Message :** "Intervenção Hoje — Não Daqui a 2 Semanas"

### 3. Section Respeito Real (real-respect)
**Où :** Page tarifs, avant le tableau de prix
**Message :** Comparaison autres (2 semaines) vs nous (aujourd'hui)

### 4. Section Equipamento Profissional (professional-equipment)
**Où :** Page tarifs, après le tableau de prix
**Message :** Lidl vs PRO (€20.000+ équipement)

### 5. Section A Verdade Sobre os Preços (price-truth)
**Où :** Page tarifs, milieu de page
**Message :** Pourquoi 5-10% plus cher = respect réel

### 6. Badge Preço Fixo (fixed-price-badge)
**Où :** Page d'accueil + pages urgence
**Message :** "O que dizemos ao telefone = o que cobra na fatura"

### 7. Section Realidade do Mercado (market-reality)
**Où :** Page tarifs, avant FAQ
**Message :** Armadilha 50€→300€, problèmes concurrents

### 8. Section Perguntas Honestas (honest-questions)
**Où :** Page tarifs, en bas
**Message :** FAQ honnête (Pourquoi plus cher? Descontos? etc.)

---

## 🔧 Comment Intégrer

### Méthode 1 : Copier-Coller dans les Pages React

1. **Ajouter le CSS dans le composant** :
```tsx
import '../public/premium-hooks.css';
```

2. **Copier le HTML souhaité** depuis `premium-hooks.html`

3. **Convertir en JSX** (remplacer `class` par `className`)

### Méthode 2 : Créer des Composants React

Exemple pour le Hero :
```tsx
// components/PremiumHero.tsx
import React from 'react';
import '../public/premium-hooks.css';

export const PremiumHero: React.FC = () => {
  return (
    <div className="premium-hero">
      <h2>💎 Respeito Real — Não Sorrisos de Cortesia</h2>
      {/* ... reste du contenu ... */}
    </div>
  );
};
```

### Méthode 3 : Intégration dans les Pages HTML Statiques

Pour les pages statiques (precos-canalizador.html, etc.) :

1. **Ajouter le CSS dans le <head>** :
```html
<link rel="stylesheet" href="/premium-hooks.css">
```

2. **Copier-coller le HTML** directement dans la page

---

## 📍 Placement Recommandé

### Page d'Accueil (OptimizedHome.tsx)
1. **premium-hero** - Après le header, avant le contenu principal
2. **today-intervention** - Après le hero
3. **fixed-price-badge** - Milieu de page

### Page Tarifs (precos-canalizador.html / precos-eletricista.html)
1. **real-respect** - Avant le tableau de prix
2. **price-truth** - Après le tableau de prix
3. **professional-equipment** - Milieu de page
4. **market-reality** - Avant la FAQ
5. **honest-questions** - En bas de page

### Pages Urgence (braganca-urgente.html, etc.)
1. **today-intervention** - En haut
2. **fixed-price-badge** - Après le CTA principal

---

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans le CSS :
- **Or premium** : #FFD700
- **Noir premium** : #1a1a1a
- **Vert (nous)** : #2e7d32
- **Rouge (autres)** : #c62828
- **Orange (urgence)** : #e65100
- **Bleu (canalizador)** : #2193b0
- **Orange (eletricista)** : #FF6B35

### Responsive
Tous les hooks sont responsive (breakpoint 768px).

---

## ✅ Vérification

Après intégration, vérifier :
1. ✅ CSS chargé correctement
2. ✅ Hooks visibles sur mobile
3. ✅ Couleurs cohérentes avec le site
4. ✅ Texte 100% portugais
5. ✅ Exemples spécifiques au métier (WC/luz)

---

## 🚀 Prochaines Étapes

1. Intégrer les hooks dans les pages React (OptimizedHome.tsx)
2. Ajouter dans les pages HTML statiques (precos-*.html)
3. Tester sur mobile
4. Commit + push
5. Vérifier sur production

---

**Créé le :** 7 mars 2026
**Par :** Atlas AI
**Pour :** Philippe Braganca - Norte Reparos + Staff Seekers
