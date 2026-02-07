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

## Phase 9: Section Blog SEO

- [x] Créer fichier de données des articles blog
- [x] Créer page Blog (liste des articles)
- [x] Créer page Article (template dynamique)
- [x] Générer 5 articles SEO pour plomberie
- [x] Générer 5 articles SEO pour électricité
- [x] Ajouter route /blog dans App.tsx
- [x] Ajouter lien Blog dans Header
- [x] Optimiser meta tags et Schema.org Article
- [ ] Déployer la mise à jour

## Phase 10: Sitemap et Indexation Google

- [x] Créer route API /sitemap.xml
- [x] Générer sitemap dynamique avec toutes les pages
- [x] Créer robots.txt
- [x] Tester le sitemap
- [x] Déployer la mise à jour
- [x] Instructions pour Google Search Console

## Phase 11: Duplication Staff Seekers

- [x] Copier le projet vers /home/ubuntu/staff-seekers-v2
- [x] Changer ACTIVE_CONFIG vers electriciteConfig
- [x] Mettre à jour package.json (nom: staff-seekers)
- [x] Initialiser git et pousser vers GitHub
- [x] Déployer sur Cloudflare Pages
- [x] Vérifier que les deux sites sont en ligne

## Phase 12: Déploiement Vercel

- [x] Installer Vercel CLI
- [x] Connecter Vercel avec GitHub
- [x] Déployer Norte Reparos sur Vercel
- [x] Déployer Staff Seekers sur Vercel
- [ ] Configurer domaine norte-reparos.com (manuel utilisateur)
- [ ] Configurer domaine staff-seekers.com (manuel utilisateur)
- [x] Vérifier les deux sites en ligne

## Phase 13: Correction Texte

- [x] Remplacer "ORÇAMENTOS GRATUITOS" par "PREÇOS COMPETITIVOS" dans tous les fichiers
- [x] Pousser vers GitHub
- [x] Redéployer sur Vercel (automatique via GitHub)

## Phase 14: Configuration Domaines Vercel

- [x] Ajouter norte-reparos.com sur Vercel
- [x] Ajouter www.norte-reparos.com sur Vercel
- [x] Ajouter staff-seekers.com sur Vercel
- [x] Ajouter www.staff-seekers.com sur Vercel
- [ ] Configurer DNS chez Cloudflare (manuel utilisateur)
- [ ] Vérifier que les domaines affichent le nouveau design (après DNS)

## Phase 15: Modification DNS Cloudflare

- [x] Récupérer les enregistrements DNS actuels
- [x] Modifier DNS norte-reparos.com vers Vercel
- [x] Modifier DNS www.norte-reparos.com vers Vercel
- [x] Modifier DNS staff-seekers.com vers Vercel
- [x] Modifier DNS www.staff-seekers.com vers Vercel
- [ ] Vérifier que les domaines affichent le nouveau design (attendre propagation)

## Phase 16: Vérification Complète et Corrections

- [x] Vérifier les sites en ligne (norte-reparos.vercel.app et staff-seekers.vercel.app)
- [x] Identifier toutes les failles (contenu, SEO, UX, erreurs)
- [x] Corriger les failles identifiées (remplacement "Orçamentos Gratuitos" par "Preços Competitivos")
- [x] Ajouter 86 nouvelles villes et villages (98 pages locales au total)
- [x] Mettre à jour le sitemap.xml (111 URLs au total)
- [x] Redéployer les sites (GitHub pushé, Vercel déploiera automatiquement)
- [x] Vérifier que tout fonctionne correctement (tests locaux OK)

## Phase 17: Formulaire Contact et Google

- [x] Ajouter route API pour envoi d'emails
- [x] Connecter le formulaire de contact à l'API
- [x] Tester l'envoi d'emails (fonctionnel via notifyOwner)
- [x] Soumettre sitemap à Google Search Console (norte-reparos.com et staff-seekers.com)
- [x] Analyser Google My Business (1 profil suspendu, 1 validé - voir GMB_STATUS.md pour recommandations)
- [x] Redéployer les sites (GitHub pushé, Vercel déploiera automatiquement)

## Phase 18: Chat en Direct

- [x] Créer le composant ChatWidget
- [x] Ajouter les routes API pour le chat
- [x] Implémenter le système de messages (notifications via notifyOwner)
- [x] Intégrer le chat dans toutes les pages (via App.tsx)
- [x] Tester le système de chat (tests unitaires passent)
- [x] Redéployer les sites (GitHub pushé, Vercel déploiera automatiquement)

## Phase 19: Système de Réservation en Ligne

- [x] Créer le schéma de base de données pour les réservations
- [x] Ajouter les routes API pour créer/lister les réservations
- [x] Créer le composant de sélection de date/heure
- [x] Créer la page de réservation
- [x] Ajouter la validation et les notifications
- [x] Tester le système de réservation

## Phase 20: Galerie Photos Avant/Après

- [x] Créer le schéma de base de données pour les photos
- [x] Ajouter les routes API pour liste des photos
- [x] Créer le composant de galerie avec comparaison avant/après
- [x] Créer la page Galerie
- [x] Ajouter des photos d'exemple (en attente de photos réelles)
- [x] Tester la galerie

## Phase 21: Système d'Avis Clients

- [x] Créer le schéma de base de données pour les avis
- [x] Ajouter les routes API pour créer/lister les avis
- [x] Créer le composant d'affichage des avis avec étoiles
- [x] Créer le formulaire de soumission d'avis
- [x] Ajouter la page Testemunhos (témoignages)
- [x] Tester le système d'avis

## Phase 22: Déploiement Final

- [x] Tester toutes les nouvelles fonctionnalités (8 tests passés)
- [x] Créer un checkpoint (version 1aa8deda)
- [x] Redéployer sur GitHub et Vercel (norte-reparos + staff-seekers)

## Phase 23: Amélioration Chat Widget

- [x] Ajouter champs téléphone, ville, type de service, description au chat
- [x] Corriger le responsive du chat widget (plein écran mobile, responsive desktop)
- [x] Mettre à jour l'API pour accepter les nouveaux champs (message complet envoyé)
- [x] Tester le nouveau chat

## Phase 24: Vérification Responsive Global

- [x] Vérifier le responsive de toutes les pages
- [x] Corriger les problèmes responsive identifiés (Header menu mobile + Footer)
- [x] Tester sur mobile, tablette, desktop

## Phase 25: Déploiement

- [ ] Créer un checkpoint
- [ ] Redéployer sur GitHub et Vercel
