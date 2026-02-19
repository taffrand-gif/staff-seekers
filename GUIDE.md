# Guide d'Utilisation du Template de Site de Services Locaux

Ce template permet de créer rapidement des sites web optimisés pour le SEO local et les conversions, destinés aux services d'urgence (plomberie, électricité, etc.).

---

## 🎯 Fonctionnalités Principales

### Pages et Sections
- **Page d'accueil** : Hero avec CTA urgence, trust signals, dernières interventions
- **12 pages locales** : Une page dédiée par ville avec contenu unique
- **FAQ** : ~20 questions/réponses avec accordion pliable
- **Dicas** : 10 trucs & astuces pour les clients
- **Galerie** : Grid responsive avec lightbox

### SEO et Tracking
- **Metadata dynamique** : Titres au format `[Service] [Ville] 24h | [Entreprise]`
- **Schema.org** : LocalBusiness pour chaque page locale
- **Google Ads** : Tracking ID AW-17915870228 avec événements click-to-call et click-to-WhatsApp
- **RGPD** : Gestion du consentement cookies conforme

### Design
- **Gradients personnalisables** : Bleu/violet (plomberie) ou Rose/rouge (électricité)
- **Animations CSS** : Pulse, slideUp, fadeIn
- **Responsive** : Mobile-first avec breakpoints optimisés
- **Trust signals** : Grid 2x2 avec interventions, garantie, 24/7

---

## 🚀 Configuration Rapide

### 1. Choisir le Type de Service

Éditez le fichier `shared/serviceConfig.ts` :

```typescript
// Pour plomberie
export const ACTIVE_CONFIG = plumberieConfig;

// Pour électricité
export const ACTIVE_CONFIG = electriciteConfig;
```

### 2. Personnaliser les Variables

Dans `shared/serviceConfig.ts`, modifiez les configurations selon vos besoins :

```typescript
export const plumberieConfig: ServiceConfig = {
  type: 'plomberie',
  name: 'Canalizador',
  businessName: 'Norte Reparos',
  phone: '928484451',
  whatsappNumber: '351928484451',
  domain: 'norte-reparos.com',
  googleAdsId: 'AW-17915870228',
  googleAdsConversionLabel: '+Lk1CO3R64gZEKvwk8c9',
  
  gradient: {
    from: '#667eea',
    to: '#764ba2',
  },
  accentColor: '#22c55e',
  
  // ... autres paramètres
};
```

### 3. Personnaliser les Villes

Les 12 villes sont définies dans `CITIES` dans `shared/serviceConfig.ts`. Vous pouvez :
- Ajouter de nouvelles villes
- Modifier les slugs (URLs)
- Changer les noms

```typescript
export const CITIES = [
  {
    name: 'Bragança',
    slug: 'braganca',
    district: 'Bragança',
  },
  // ... autres villes
];
```

---

## 📄 Pages Disponibles

### Routes
- `/` - Page d'accueil
- `/faq` - Page FAQ
- `/dicas` - Page Trucs & Astuces
- `/galeria` - Page Galerie
- `/servicos/[ville-slug]` - Pages locales (ex: `/servicos/braganca`)

### Exemples d'URLs de Pages Locales
- `/servicos/braganca`
- `/servicos/macedo-de-cavaleiros`
- `/servicos/mirandela`
- `/servicos/miranda-do-douro`
- ... (12 villes au total)

---

## 🎨 Personnalisation du Design

### Couleurs et Gradients

Les gradients sont définis dans `client/src/index.css` :

```css
.gradient-bg-plomberie {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gradient-bg-electricite {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

### Animations

Trois animations CSS sont disponibles :
- `animate-slide-up` : Apparition avec translation verticale
- `animate-pulse-dot` : Pulsation continue (dot de statut)
- `animate-fade-in` : Fondu d'apparition

---

## 📊 SEO Technique

### Format des Titres

Les titres suivent le format : `[Service] [Ville] 24h | [Entreprise]`

Exemples :
- `Canalizador Bragança 24h | Norte Reparos`
- `Electricista Mirandela 24h | Staff Seekers`

### Meta Descriptions

Format : `[Service] em [Ville] - [USP]. [Appel à l'action]. Piquete 24h.`

Exemples :
- `Canalizador em Bragança - Reparação de fugas de água, entupimentos e instalações. Atendemos urgências 24h. Piquete 24h.`

### Données Structurées

Chaque page locale inclut automatiquement :
- **Schema.org LocalBusiness** : Nom, adresse, téléphone, horaires, coordonnées GPS
- **Schema.org FAQPage** : Questions/réponses de la page FAQ

---

## 🔧 Développement Local

### Installation

```bash
cd service-template
pnpm install
```

### Démarrage du Serveur de Développement

```bash
pnpm dev
```

Le site sera accessible sur `http://localhost:3000`

### Build de Production

```bash
pnpm build
```

---

## 🌐 Déploiement sur Cloudflare Pages

### Prérequis
- Compte Cloudflare
- Domaine acheté sur Cloudflare (ex: norte-reparos.com, staff-seekers.com)
- Repository GitHub

### Étapes

1. **Connecter le Repository GitHub à Cloudflare Pages**
   - Aller sur Cloudflare Dashboard > Pages
   - Cliquer sur "Create a project"
   - Sélectionner le repository GitHub

2. **Configuration du Build**
   - **Framework preset** : Vite
   - **Build command** : `pnpm build`
   - **Build output directory** : `dist`
   - **Node version** : 22

3. **Variables d'Environnement**
   Aucune variable d'environnement n'est requise pour le déploiement de base.

4. **Domaine Personnalisé**
   - Aller sur Cloudflare Pages > Votre projet > Custom domains
   - Ajouter votre domaine (ex: norte-reparos.com)
   - Cloudflare configurera automatiquement le DNS

### Déploiement Automatique

Chaque push sur la branche `main` déclenchera automatiquement un nouveau déploiement.

---

## 📱 Tracking Google Ads

### Configuration

Le tracking Google Ads est déjà configuré avec l'ID : `AW-17915870228`

### Événements Trackés

1. **Click-to-Call** : Déclenché lors du clic sur le bouton téléphone
2. **Click-to-WhatsApp** : Déclenché lors du clic sur le bouton WhatsApp
3. **Conversion** : Déclenché lors d'un appel téléphonique (valeur: 50€)

### Vérification

Pour vérifier que le tracking fonctionne :
1. Ouvrir la console du navigateur
2. Cliquer sur un bouton téléphone ou WhatsApp
3. Vérifier que l'événement `gtag` est envoyé dans la console

---

## 🍪 Gestion RGPD

### Consentement Cookies

Le banner de cookies apparaît automatiquement après 1 seconde si l'utilisateur n'a pas encore donné son consentement.

### Options
- **Aceitar** : Active tous les cookies (analytics, ads)
- **Configurações** : Ouvre les paramètres (à implémenter)
- **Recusar** : Refuse tous les cookies

### Stockage

Le consentement est stocké dans `localStorage` avec la clé `cookieConsent`.

---

## 🔄 Dupliquer le Site pour un Autre Service

Pour créer le site d'électricité après avoir créé celui de plomberie :

1. **Changer la configuration active**
   ```typescript
   // Dans shared/serviceConfig.ts
   export const ACTIVE_CONFIG = electriciteConfig;
   ```

2. **Rebuild le projet**
   ```bash
   pnpm build
   ```

3. **Déployer sur un nouveau domaine**
   - Créer un nouveau projet Cloudflare Pages
   - Connecter le même repository
   - Configurer le domaine staff-seekers.com

---

## 📝 Contenu à Personnaliser

### Images de la Galerie

Remplacez les placeholders dans `client/src/pages/Galeria.tsx` par de vraies images :

```typescript
function getGalleryImages(serviceType: 'plomberie' | 'electricite'): GalleryImage[] {
  return [
    { 
      url: "/images/reparation-fuga.jpg", 
      alt: "Reparação de fuga de água", 
      category: "Reparações" 
    },
    // ... autres images
  ];
}
```

### FAQ

Les questions/réponses sont dans `client/src/components/FAQSection.tsx`. Modifiez-les selon vos besoins.

### Dicas (Trucs & Astuces)

Les conseils sont dans `client/src/pages/Dicas.tsx`. Personnalisez-les pour votre service.

---

## 🐛 Dépannage

### Le gradient ne s'affiche pas correctement
Vérifiez que `ACTIVE_CONFIG` est bien défini dans `shared/serviceConfig.ts`.

### Les pages locales retournent 404
Vérifiez que le slug de la ville dans l'URL correspond exactement au slug défini dans `CITIES`.

### Le tracking Google Ads ne fonctionne pas
1. Vérifiez que le script Google Tag est chargé dans `client/index.html`
2. Vérifiez que l'ID Google Ads est correct dans `serviceConfig.ts`
3. Ouvrez la console du navigateur pour voir les erreurs

---

## 📞 Support

Pour toute question ou problème, contactez l'équipe de développement.

---

## 📄 Licence

© 2024 - Tous droits réservés
