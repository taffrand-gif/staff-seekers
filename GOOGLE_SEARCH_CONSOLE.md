# Guide de Soumission à Google Search Console

Ce guide vous explique comment soumettre votre sitemap à Google Search Console pour accélérer l'indexation de votre site.

---

## 📋 Prérequis

- Avoir déployé le site sur Cloudflare Pages
- Avoir configuré le domaine personnalisé (norte-reparos.com ou staff-seekers.com)
- Avoir un compte Google

---

## 🚀 Étapes de Soumission

### 1. Accéder à Google Search Console

1. Allez sur [https://search.google.com/search-console](https://search.google.com/search-console)
2. Connectez-vous avec votre compte Google
3. Cliquez sur **"Ajouter une propriété"**

### 2. Vérifier la Propriété du Domaine

**Option A : Vérification par domaine (Recommandé)**

1. Sélectionnez **"Domaine"**
2. Entrez votre domaine : `norte-reparos.com` ou `staff-seekers.com`
3. Cliquez sur **"Continuer"**
4. Google vous donnera un enregistrement TXT DNS
5. Allez sur Cloudflare → DNS → Ajoutez l'enregistrement TXT
6. Retournez sur Google Search Console et cliquez sur **"Vérifier"**

**Option B : Vérification par préfixe d'URL (Plus rapide)**

1. Sélectionnez **"Préfixe d'URL"**
2. Entrez : `https://norte-reparos.com` ou `https://staff-seekers.com`
3. Cliquez sur **"Continuer"**
4. Choisissez la méthode **"Balise HTML"**
5. Copiez la balise meta fournie
6. Ajoutez-la dans le `<head>` de votre site (fichier `client/index.html`)
7. Redéployez le site
8. Retournez sur Google Search Console et cliquez sur **"Vérifier"**

### 3. Soumettre le Sitemap

Une fois la propriété vérifiée :

1. Dans le menu de gauche, cliquez sur **"Sitemaps"**
2. Dans le champ "Ajouter un sitemap", entrez : `sitemap.xml`
3. Cliquez sur **"Envoyer"**

✅ **Votre sitemap est maintenant soumis !**

---

## 📊 Vérifier l'Indexation

### Statut du Sitemap

1. Allez dans **Sitemaps**
2. Vérifiez que le statut est **"Réussite"**
3. Google affichera le nombre d'URLs découvertes et indexées

### Pages Indexées

1. Allez dans **Couverture** (ou **Pages**)
2. Vous verrez le nombre de pages indexées
3. Les pages peuvent prendre **quelques jours à quelques semaines** pour être indexées

### Demander une Indexation Manuelle (Optionnel)

Pour accélérer l'indexation de pages spécifiques :

1. Allez dans **Inspection d'URL**
2. Entrez l'URL complète (ex: `https://norte-reparos.com/servicos/braganca`)
3. Cliquez sur **"Demander une indexation"**
4. Répétez pour les pages prioritaires (home, services, villes principales)

---

## 📈 URLs Importantes à Indexer en Priorité

### Norte Reparos (Plomberie)

```
https://norte-reparos.com/
https://norte-reparos.com/servicos
https://norte-reparos.com/servicos/braganca
https://norte-reparos.com/servicos/mirandela
https://norte-reparos.com/servicos/macedo-de-cavaleiros
https://norte-reparos.com/blog
https://norte-reparos.com/blog/5-sinais-precisa-canalizador-urgente
```

### Staff Seekers (Électricité)

```
https://staff-seekers.com/
https://staff-seekers.com/servicos
https://staff-seekers.com/servicos/braganca
https://staff-seekers.com/servicos/mirandela
https://staff-seekers.com/servicos/macedo-de-cavaleiros
https://staff-seekers.com/blog
https://staff-seekers.com/blog/5-sinais-precisa-eletricista-urgente
```

---

## ⏱️ Délais d'Indexation

- **Sitemap soumis** : Immédiat
- **Première découverte** : 1-3 jours
- **Indexation complète** : 1-4 semaines
- **Indexation manuelle** : 1-7 jours

---

## 🔍 Optimisations Post-Soumission

### 1. Vérifier les Erreurs

- Allez dans **Couverture** → **Exclues**
- Corrigez les erreurs signalées (404, redirections, etc.)

### 2. Améliorer les Performances

- Allez dans **Signaux Web Essentiels**
- Vérifiez que les scores sont dans le vert
- Si nécessaire, optimisez les images et le temps de chargement

### 3. Suivre les Requêtes

- Allez dans **Performances**
- Analysez les requêtes qui génèrent des clics
- Optimisez le contenu pour les requêtes populaires

---

## 📝 Checklist Finale

- [ ] Propriété vérifiée sur Google Search Console
- [ ] Sitemap soumis (sitemap.xml)
- [ ] Indexation manuelle demandée pour les pages prioritaires
- [ ] Aucune erreur dans Couverture
- [ ] Signaux Web Essentiels au vert
- [ ] Suivi des performances activé

---

## 🆘 Problèmes Fréquents

### Le sitemap n'est pas trouvé

- Vérifiez que `https://votre-domaine.com/sitemap.xml` est accessible
- Vérifiez que le site est bien déployé sur Cloudflare Pages
- Attendez quelques heures et réessayez

### Pages non indexées

- Vérifiez que le contenu est unique et de qualité
- Vérifiez qu'il n'y a pas de balise `noindex` dans le HTML
- Vérifiez que robots.txt permet l'indexation
- Demandez une indexation manuelle

### Erreurs 404

- Vérifiez que toutes les URLs du sitemap sont accessibles
- Corrigez les liens cassés
- Resoumettez le sitemap après correction

---

## 📞 Support

Si vous rencontrez des problèmes, consultez :
- [Centre d'aide Google Search Console](https://support.google.com/webmasters)
- [Documentation Cloudflare Pages](https://developers.cloudflare.com/pages/)

---

**Bonne indexation ! 🚀**
