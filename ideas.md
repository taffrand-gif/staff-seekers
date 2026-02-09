# Idées de Design pour Trás-os-Montes Services

<response>
<text>
**Mouvement de design** : Brutalisme Numérique Fonctionnel

**Principes fondamentaux** :
1. Clarté hiérarchique absolue - chaque élément a un rôle évident
2. Typographie audacieuse et contrastée - titres massifs, corps lisible
3. Grilles asymétriques avec espaces négatifs intentionnels
4. Honnêteté matérielle - pas de faux effets, juste des formes franches

**Philosophie des couleurs** : Couleurs primaires saturées (bleu électrique pour plomberie, orange vif pour électricité) sur fond blanc pur. Les couleurs ne sont pas décoratives - elles signalent l'urgence, la disponibilité 24/7, et la fiabilité industrielle.

**Paradigme de layout** : Grille brisée avec sections en pleine largeur alternant avec conteneurs étroits. Headers fixes imposants. Sections de contenu avec bordures épaisses créant des "blocs" visuels distincts.

**Éléments de signature** :
- Boutons CTA surdimensionnés avec ombres portées dures
- Typographie display ultra-bold pour les titres (Poppins Black ou similaire)
- Icônes emoji natives pour l'accessibilité et la chaleur humaine
- Badges de service avec coins carrés et bordures épaisses

**Philosophie d'interaction** : Clics et hovers produisent des transformations franches (pas de transitions douces). Les boutons "enfoncent" au clic. Les liens changent de couleur instantanément.

**Animation** : Entrées brusques avec décalage temporel entre éléments. Pas de fades - uniquement des slides et des scales. Durée < 200ms pour maintenir le sentiment de réactivité.

**Système typographique** :
- Display : Poppins ExtraBold (900) pour H1
- Headings : Poppins Bold (700) pour H2-H3
- Body : Inter Regular (400) / Medium (500)
- Hiérarchie : Sauts de taille importants (H1: 3.5rem, H2: 2rem, body: 1rem)
</text>
<probability>0.08</probability>
</response>

<response>
<text>
**Mouvement de design** : Néomorphisme Industriel

**Principes fondamentaux** :
1. Profondeur tactile - chaque élément semble physiquement pressable
2. Douceur des transitions - tout glisse et respire
3. Palette monochrome avec accents de couleur stratégiques
4. Espaces généreux créant une sensation de luxe accessible

**Philosophie des couleurs** : Fond gris perle (off-white chaud) avec ombres internes et externes créant du relief. Bleu profond (plomberie) ou orange cuivré (électricité) utilisés uniquement pour les CTA et éléments interactifs, créant des points focaux magnétiques.

**Paradigme de layout** : Cartes flottantes avec ombres douces multiples. Tout semble "posé" sur la page. Espacement vertical généreux (min 4rem entre sections). Layout centré avec max-width 1200px.

**Éléments de signature** :
- Boutons avec ombres internes au repos, externes au hover (inversion de profondeur)
- Inputs et selects avec apparence "creusée" dans la page
- Badges circulaires avec dégradés subtils
- Séparateurs invisibles (espaces purs, pas de lignes)

**Philosophie d'interaction** : Chaque interaction donne un feedback tactile visuel. Les boutons s'enfoncent (ombre interne), les cards se soulèvent (ombre externe accrue). Sensation de manipulation d'objets physiques.

**Animation** : Transitions élastiques (ease-out) de 300-400ms. Micro-animations au hover (scale 1.02, lift). Entrées en fondu avec léger mouvement vertical (translateY).

**Système typographique** :
- Display : Outfit Bold (700) - géométrique mais chaleureux
- Headings : Outfit SemiBold (600)
- Body : Source Sans Pro Regular (400)
- Hiérarchie : Progression naturelle (H1: 2.5rem, H2: 1.75rem, body: 1rem)
</text>
<probability>0.07</probability>
</response>

<response>
<text>
**Mouvement de design** : Swiss Modernisme Digital

**Principes fondamentaux** :
1. Grille rigoureuse - tout s'aligne sur un système de 8px
2. Typographie comme élément structurel principal
3. Asymétrie équilibrée - compositions décentrées mais harmonieuses
4. Économie de moyens - chaque élément justifie sa présence

**Philosophie des couleurs** : Noir pur pour le texte, blanc pur pour le fond, une seule couleur d'accent (bleu Klein pour plomberie, vermillon pour électricité) utilisée avec parcimonie pour guider l'œil. Ratio 90% noir/blanc, 10% couleur.

**Paradigme de layout** : Grille à 12 colonnes stricte. Sections alternant entre pleine largeur et 8 colonnes. Texte aligné à gauche, jamais centré sauf pour les CTA. Espaces verticaux suivant la suite de Fibonacci (8, 13, 21, 34, 55px).

**Éléments de signature** :
- Lignes fines (1px) comme séparateurs structurels
- Blocs de couleur géométriques purs (rectangles, pas de border-radius)
- Typographie extra-large pour les numéros de téléphone (display size)
- Grille visible subtilement en arrière-plan (optionnel)

**Philosophie d'interaction** : Minimalisme fonctionnel. Hovers changent uniquement la couleur (noir → accent). Focus states avec bordures fines. Pas d'effets superflus.

**Animation** : Transitions linéaires rapides (150ms). Pas d'elastic ni de bounce. Entrées par fondu simple (opacity 0→1). Priorité à la performance et la clarté.

**Système typographique** :
- Display : Helvetica Neue Bold (ou Inter Bold en fallback web)
- Headings : Helvetica Neue Medium
- Body : Helvetica Neue Regular
- Hiérarchie : Ratios stricts basés sur l'échelle modulaire (1:1.5)
- Interlignage généreux (1.6 pour le body)
</text>
<probability>0.09</probability>
</response>

---

## Choix retenu : **Brutalisme Numérique Fonctionnel**

Ce style correspond parfaitement aux besoins d'un service d'urgence 24/7 :
- **Clarté immédiate** : Les utilisateurs en situation d'urgence doivent trouver le numéro de téléphone instantanément
- **Impact visuel fort** : Les couleurs saturées et la typographie audacieuse créent une présence mémorable
- **Crédibilité industrielle** : Le style brut et honnête inspire confiance pour des services techniques
- **Différenciation** : Évite les clichés des sites de services (dégradés violets, Inter centré, coins arrondis uniformes)
