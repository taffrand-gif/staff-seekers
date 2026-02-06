# Template de Site de Services Locaux

Template Next.js 14 optimisé pour le SEO local et les conversions, spécialement conçu pour les services d'urgence (plomberie, électricité, etc.) au Portugal.

## 🎯 Caractéristiques

- ✅ **12 pages locales** avec contenu unique par ville
- ✅ **SEO optimisé** : Metadata dynamique, Schema.org LocalBusiness
- ✅ **Google Ads tracking** : Click-to-call, click-to-WhatsApp
- ✅ **RGPD conforme** : Gestion du consentement cookies
- ✅ **Responsive** : Mobile-first design
- ✅ **Animations CSS** : Pulse, slideUp, fadeIn
- ✅ **FAQ dynamique** : ~20 questions avec accordion
- ✅ **Galerie photos** : Grid responsive avec lightbox
- ✅ **Dicas (Conseils)** : 10 trucs & astuces

## 🚀 Démarrage Rapide

### Installation

```bash
pnpm install
```

### Configuration

1. Éditez `shared/serviceConfig.ts`
2. Choisissez le service (plomberie ou électricité)
3. Personnalisez les variables (nom, téléphone, domaine, etc.)

```typescript
// Pour plomberie
export const ACTIVE_CONFIG = plumberieConfig;

// Pour électricité
export const ACTIVE_CONFIG = electriciteConfig;
```

### Développement

```bash
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

### Build de Production

```bash
pnpm build
pnpm start
```

## 📄 Pages Disponibles

- `/` - Page d'accueil
- `/faq` - FAQ
- `/dicas` - Trucs & Astuces
- `/galeria` - Galerie photos
- `/servicos/[ville]` - Pages locales (12 villes)

### Villes Couvertes

1. Alfândega da Fé
2. Bragança
3. Carrazeda de Ansiães
4. Freixo de Espada à Cinta
5. Macedo de Cavaleiros
6. Miranda do Douro
7. Mirandela
8. Mogadouro
9. Torre de Moncorvo
10. Vila Flor
11. Vimioso
12. Vinhais

## 🎨 Personnalisation

### Couleurs

Les gradients sont définis dans `client/src/index.css` :

```css
.gradient-bg-plomberie {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gradient-bg-electricite {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

### Contenu

- **FAQ** : `client/src/components/FAQSection.tsx`
- **Dicas** : `client/src/pages/Dicas.tsx`
- **Galerie** : `client/src/pages/Galeria.tsx`

## 📊 SEO

### Format des Titres

`[Service] [Ville] 24h | [Entreprise]`

Exemple : `Canalizador Bragança 24h | Norte Reparos`

### Meta Descriptions

Format : `[Service] em [Ville] - [USP]. Atendemos urgências 24h. Piquete 24h.`

### Schema.org

Chaque page locale inclut automatiquement :
- LocalBusiness (nom, adresse, téléphone, horaires, GPS)
- FAQPage (questions/réponses)

## 🌐 Déploiement Cloudflare Pages

### Configuration Build

- **Framework** : Vite
- **Build command** : `pnpm build`
- **Build output** : `dist`
- **Node version** : 22

### Domaines

- Plomberie : norte-reparos.com
- Électricité : staff-seekers.com

## 📱 Tracking

### Google Ads ID

`AW-17915870228`

### Événements Trackés

- Click-to-call
- Click-to-WhatsApp
- Conversions téléphoniques

## 🍪 RGPD

Le banner de cookies apparaît automatiquement et gère le consentement pour :
- Analytics
- Publicité
- Personnalisation

## 📚 Documentation

Consultez [GUIDE.md](./GUIDE.md) pour la documentation complète.

## 🛠️ Stack Technique

- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS 4
- **UI Components** : shadcn/ui
- **Router** : Wouter
- **Tracking** : Google Tag Manager

## 📞 Contact

Pour toute question, contactez l'équipe de développement.

---

© 2024 - Template créé pour Norte Reparos et Staff Seekers
