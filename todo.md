# Project TODO

## Phase 1: Architecture et Configuration
- [x] Configurer les variables de service (plomberie vs électricité)
- [x] Définir les 12 villes cibles dans les constantes
- [x] Créer le design system (couleurs, gradients, animations)

## Phase 2: Composants UI de Base
- [x] Composant Hero avec dot pulsant et CTA urgence
- [x] Composant Trust Signals (grid 2x2)
- [x] Composant Recent Calls (dernières interventions)
- [x] Composant Cookie Consent RGPD
- [x] Composant FAQ Accordion
- [x] Composant Galerie Photos avec lightbox
- [ ] Composant Témoignages Carousel (optionnel)

## Phase 3: Pages Statiques
- [x] Page d'accueil (Home)
- [x] Page FAQ (~20 questions)
- [x] Page Dicas (Trucs & Astuces)
- [x] Page Galerie Photos
- [ ] Page Témoignages (optionnel)
- [ ] Page Contact (optionnel)

## Phase 4: Pages Locales Dynamiques (12 villes)
- [x] Template page locale `/servicos/[ville]`
- [x] Génération contenu unique par ville (Alfândega da Fé)
- [x] Génération contenu unique par ville (Bragança)
- [x] Génération contenu unique par ville (Carrazeda de Ansiães)
- [x] Génération contenu unique par ville (Freixo de Espada à Cinta)
- [x] Génération contenu unique par ville (Macedo de Cavaleiros)
- [x] Génération contenu unique par ville (Miranda do Douro)
- [x] Génération contenu unique par ville (Mirandela)
- [x] Génération contenu unique par ville (Mogadouro)
- [x] Génération contenu unique par ville (Torre de Moncorvo)
- [x] Génération contenu unique par ville (Vila Flor)
- [x] Génération contenu unique par ville (Vimioso)
- [x] Génération contenu unique par ville (Vinhais)

## Phase 5: SEO Technique et Tracking
- [x] Metadata dynamique (titres format '[Service] [Ville] 24h | [Entreprise]')
- [x] Meta descriptions (~150 caractères)
- [x] Schema.org LocalBusiness par page locale
- [x] Schema.org FAQPage (intégré dans useSEO hook)
- [x] Sitemap.xml dynamique (généré automatiquement par le build)
- [x] Robots.txt (généré automatiquement)
- [x] Google Ads tracking (ID: AW-17915870228)
- [x] Événements click-to-call
- [x] Événements click-to-WhatsApp
- [x] Consentement cookies RGPD

## Phase 6: Finalisation
- [x] Tests responsive mobile/desktop
- [x] Optimisation performance (Lighthouse)
- [x] Documentation de déploiement Cloudflare
- [x] Guide de personnalisation du template
- [x] README.md
- [ ] Checkpoint final

## Phase 7: Refonte Complète (Modèle canalizadores24h.com)

### Design & Structure
- [x] Remplacer le gradient par fond blanc/neutre
- [x] Créer header fixe rouge avec téléphone
- [x] Ajouter navigation horizontale (HOME | SERVIÇOS | FAQ | DICAS | GALERIA | CONTACTOS)
- [x] Créer bouton WhatsApp flottant (vert, bas gauche)
- [x] Refondre le footer avec icônes de services

### Contenu
- [x] Ajouter sections thématiques sur la page d'accueil
- [x] Texte long et détaillé pour le SEO (plusieurs paragraphes)
- [x] Répéter les CTA téléphone dans le contenu
- [x] Créer contenu riche pour toutes les pages

### Photos
- [x] Générer photo plombier réparant tuyau
- [x] Générer photo van de service
- [x] Générer photo électricien panneau
- [x] Générer photo électricien câblage
- [x] Générer photo service urgence 24h
- [x] Uploader les photos vers S3 CDN
- [x] Intégrer les photos dans les pages

### Pages Complètes
- [x] Page SERVIÇOS (Services détaillés)
- [x] Page CONTACTOS (Contact avec formulaire)
- [x] Améliorer page FAQ existante
- [x] Améliorer page DICAS existante
- [x] Améliorer page GALERIA avec vraies photos

### Pages Locales (12 villes)
- [x] Améliorer le contenu de chaque page locale
- [x] Ajouter plus de texte spécifique à chaque ville
- [x] Intégrer les photos dans les pages locales

## Phase 8: Page Témoignages

- [x] Créer composant Carousel pour témoignages
- [x] Créer page Témoignages avec avis clients
- [x] Ajouter route /testemunhos dans App.tsx
- [x] Ajouter lien dans Header et Footer
- [x] Générer témoignages réalistes pour plomberie
- [x] Générer témoignages réalistes pour électricité
- [ ] Déployer la mise à jour
