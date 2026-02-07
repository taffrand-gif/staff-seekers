# 📧 Guide d'Automatisation Email Mailchimp

Ce guide explique comment configurer les séquences d'emails automatiques dans Mailchimp pour maximiser l'engagement et les conversions.

---

## 🎯 Vue d'Ensemble

Le système d'automatisation email comprend :
- **Synchronisation automatique** des abonnés depuis le site vers Mailchimp
- **Segmentation intelligente** par ville, type de service, et source
- **4 séquences d'emails** pré-définies
- **Tracking des conversions** avec Facebook Pixel

---

## 🔧 Configuration Initiale

### 1. Créer un Compte Mailchimp

1. Allez sur [mailchimp.com](https://mailchimp.com)
2. Créez un compte gratuit (jusqu'à 500 contacts)
3. Vérifiez votre email

### 2. Créer une Audience (Liste)

1. Dans Mailchimp, allez dans **Audience** > **Create Audience**
2. Nom: "Norte-Reparos Subscribers" (ou "Staff-Seekers Subscribers")
3. Remplissez les informations requises :
   - **From name**: Canalizador de Trás-os-Montes
   - **From email**: contact@norte-reparos.com
   - **Adresse**: Votre adresse professionnelle
4. Cliquez sur **Save**

### 3. Récupérer les Identifiants

#### **API Key** :
1. Allez dans **Account** > **Extras** > **API keys**
2. Cliquez sur **Create A Key**
3. Copiez la clé (format: `xxxxx-usX`)

#### **Audience ID** :
1. Allez dans **Audience** > **Settings** > **Audience name and defaults**
2. Cherchez **Audience ID** (10 caractères alphanumériques)
3. Copiez l'ID

### 4. Configurer les Merge Fields

Les merge fields permettent de personnaliser les emails.

1. Allez dans **Audience** > **Settings** > **Audience fields and *|MERGE|* tags**
2. Ajoutez ces champs :

| Field Label | Merge Tag | Field Type | Required |
|------------|-----------|------------|----------|
| First Name | FNAME | Text | No |
| Last Name | LNAME | Text | No |
| Phone | PHONE | Phone | No |
| City | CITY | Text | No |

### 5. Créer les Tags pour Segmentation

Les tags permettent de segmenter les abonnés.

Tags recommandés :
- **Source** : `footer_form`, `popup`, `quote_form`, `booking_form`
- **Ville** : `braganca`, `mirandela`, `vinhais`, etc.
- **Service** : `urgente`, `normal`, `fuga_agua`, `curto_circuito`, etc.
- **Engagement** : `lead_qualifie`, `client`, `prospect`

---

## 📨 Séquences d'Emails Automatiques

### Séquence 1 : Welcome (Bienvenue)

**Objectif** : Accueillir les nouveaux abonnés et établir la confiance

#### **Email 1 : Bienvenue Immédiate** (envoi immédiat)

**Sujet** : 🎉 Bem-vindo! O seu desconto exclusivo está aqui

**Contenu** :
```
Olá [FNAME],

Obrigado por se juntar à nossa comunidade!

Como novo subscritor, tem direito a:
✅ 10% de desconto na primeira intervenção
✅ Prioridade no agendamento
✅ Dicas mensais de manutenção

O SEU CÓDIGO DE DESCONTO:
WELCOME10

Válido durante 30 dias.

Precisa de ajuda urgente?
📞 [TELEFONE]
💬 WhatsApp: [LINK]

Até breve,
[NOME EMPRESA]
```

#### **Email 2 : Dicas Útiles** (J+2)

**Sujet** : 💡 3 Dicas para Evitar [Problemas Comuns]

**Contenu** :
```
Olá [FNAME],

Enquanto aguarda a nossa próxima intervenção, partilhamos 3 dicas essenciais:

1️⃣ [Dica 1 específica au service]
2️⃣ [Dica 2 spécifique au service]
3️⃣ [Dica 3 spécifique au service]

📖 Leia o artigo completo: [LINK BLOG]

Ainda não usou o seu desconto?
Código: WELCOME10 (válido até [DATA])

[CTA: Marcar Visita]
```

#### **Email 3 : Prova Social** (J+5)

**Sujet** : ⭐ Veja o que os nossos clientes dizem

**Contenu** :
```
Olá [FNAME],

Mais de 500 clientes em [CIDADE] já confiaram em nós.

Veja alguns testemunhos:

⭐⭐⭐⭐⭐
"Serviço rápido e profissional. Recomendo!"
- João Silva, Bragança

⭐⭐⭐⭐⭐
"Resolveram a fuga em 30 minutos. Excelente!"
- Maria Santos, Mirandela

📸 Ver galeria de trabalhos: [LINK]

Precisa de ajuda? Estamos a 1 chamada de distância.
[CTA: Ligar Agora]
```

#### **Email 4 : Oferta Limitada** (J+7)

**Sujet** : ⏰ Última chance! O seu desconto expira amanhã

**Contenu** :
```
Olá [FNAME],

O seu código de desconto WELCOME10 expira amanhã!

Não perca:
❌ 10% de desconto
❌ Prioridade no agendamento
❌ Orçamento gratuito

[CTA URGENTE: Marcar Agora]

Ou ligue: [TELEFONE]

Esta é a sua última oportunidade de poupar.

Até breve,
[NOME EMPRESA]
```

---

### Séquence 2 : Re-engagement (Réactivation)

**Objectif** : Réactiver les abonnés inactifs (pas d'ouverture depuis 30 jours)

#### **Email 1 : Sentimos a Sua Falta** (J+30 sans ouverture)

**Sujet** : 😢 Sentimos a sua falta, [FNAME]

**Contenu** :
```
Olá [FNAME],

Notámos que não abre os nossos emails há algum tempo.

Fizemos algo de errado? 🤔

Para reconquistar a sua confiança, oferecemos:
🎁 15% de desconto (código: COMEBACK15)
🎁 Diagnóstico gratuito
🎁 Prioridade máxima

Válido apenas esta semana.

[CTA: Quero Aproveitar]

Ou prefere cancelar a subscrição? [LINK]
```

---

### Séquence 3 : Post-Service (Après Intervention)

**Objectif** : Fidéliser après une intervention

#### **Email 1 : Obrigado** (J+1 après intervention)

**Sujet** : 🙏 Obrigado pela sua confiança!

**Contenu** :
```
Olá [FNAME],

Obrigado por escolher [NOME EMPRESA]!

Ficou satisfeito com o serviço?
Deixe-nos um testemunho: [LINK]

Como agradecimento, oferecemos:
🎁 10% de desconto na próxima intervenção
🎁 Manutenção preventiva gratuita

[CTA: Agendar Manutenção]

Até à próxima!
```

---

### Séquence 4 : Seasonal (Saisonnier)

**Objectif** : Proposer des services saisonniers

#### **Email Hiver** (Novembre-Février)

**Sujet** : ❄️ Prepare a sua casa para o inverno

**Contenu** :
```
Olá [FNAME],

O inverno está a chegar. Evite surpresas desagradáveis:

Para Canalizações:
✅ Verificação de esquentadores
✅ Isolamento de canos
✅ Limpeza de caleiras

Para Eletricidade:
✅ Verificação de aquecedores
✅ Instalação de termostatos
✅ Inspeção de segurança

OFERTA ESPECIAL INVERNO:
20% de desconto em pacotes de manutenção

[CTA: Ver Pacotes]
```

---

## 🎯 Segmentation Avancée

### Par Ville

Créer des segments pour chaque ville principale :
- Bragança (>100 abonnés)
- Mirandela (>50 abonnés)
- Vinhais (>30 abonnés)

**Utilisation** : Envoyer des offres locales, événements, promotions spécifiques.

### Par Type de Service

Segments recommandés :
- **Urgences** : Abonnés ayant demandé un service urgent
- **Maintenance** : Abonnés intéressés par la maintenance préventive
- **Nouveaux clients** : Première demande de devis

### Par Engagement

- **Très engagés** : Ouvre tous les emails, clique régulièrement
- **Moyennement engagés** : Ouvre occasionnellement
- **Inactifs** : Pas d'ouverture depuis 30 jours

---

## 📊 Métriques à Suivre

### KPIs Principaux

1. **Taux d'ouverture** : >25% (excellent), 15-25% (bon), <15% (à améliorer)
2. **Taux de clic** : >3% (excellent), 1-3% (bon), <1% (à améliorer)
3. **Taux de conversion** : >2% (excellent), 0.5-2% (bon), <0.5% (à améliorer)
4. **Taux de désabonnement** : <0.5% (excellent), 0.5-2% (acceptable), >2% (problème)

### Objectifs Mensuels

- **100 nouveaux abonnés/mois** (50 par site)
- **25% taux d'ouverture moyen**
- **3% taux de clic moyen**
- **5 conversions/mois** (demandes de devis depuis email)

---

## 🛠️ Configuration dans Mailchimp

### Créer une Automation

1. Allez dans **Automations** > **Create** > **Email**
2. Choisissez **Welcome new subscribers**
3. Configurez le déclencheur :
   - **Trigger** : When someone subscribes
   - **Audience** : Votre liste
4. Ajoutez les emails de la séquence
5. Définissez les délais entre chaque email
6. Activez l'automation

### Exemple : Séquence Welcome

```
Trigger: Subscriber joins list
↓
Email 1: Bienvenue (immédiat)
↓ Wait 2 days
Email 2: Dicas Útiles
↓ Wait 3 days
Email 3: Prova Social
↓ Wait 2 days
Email 4: Oferta Limitada
```

---

## 🎨 Templates d'Email

### Structure Recommandée

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Email Title</title>
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <!-- Header avec logo -->
    <div style="background: #DC2626; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">
            [LOGO] Canalizador de Trás-os-Montes
        </h1>
    </div>
    
    <!-- Contenu principal -->
    <div style="padding: 30px; background: white;">
        <h2>Olá *|FNAME|*,</h2>
        
        <p style="font-size: 16px; line-height: 1.6;">
            [CONTENU DE L'EMAIL]
        </p>
        
        <!-- CTA Button -->
        <div style="text-align: center; margin: 30px 0;">
            <a href="[LINK]" style="background: #DC2626; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                [TEXTE CTA]
            </a>
        </div>
    </div>
    
    <!-- Footer -->
    <div style="background: #1F2937; padding: 20px; text-align: center; color: white;">
        <p style="margin: 0;">
            📞 928 484 451 | 📧 contact@norte-reparos.com
        </p>
        <p style="margin: 10px 0 0 0; font-size: 12px;">
            <a href="*|UNSUB|*" style="color: #9CA3AF;">Cancelar subscrição</a>
        </p>
    </div>
</body>
</html>
```

---

## 🚀 Checklist de Lancement

### Avant de Lancer

- [ ] Compte Mailchimp créé et vérifié
- [ ] Audience créée avec merge fields
- [ ] API Key et Audience ID configurés dans le site
- [ ] Tags créés pour segmentation
- [ ] 4 séquences d'emails créées
- [ ] Templates d'emails testés
- [ ] Tracking Facebook Pixel configuré
- [ ] Test d'envoi effectué

### Première Semaine

- [ ] Vérifier synchronisation automatique (10+ abonnés)
- [ ] Analyser taux d'ouverture premier email (>25%)
- [ ] Ajuster subject lines si nécessaire
- [ ] Vérifier que les tags sont bien appliqués

### Premier Mois

- [ ] Atteindre 100 abonnés
- [ ] Obtenir 5 conversions depuis emails
- [ ] Optimiser les emails avec faible taux d'ouverture
- [ ] Créer 2 nouvelles séquences saisonnières

---

## 💡 Bonnes Pratiques

### Subject Lines

✅ **BON** :
- "🎁 O seu desconto exclusivo está aqui"
- "⏰ Última chance! Expira amanhã"
- "💡 3 dicas para evitar fugas de água"

❌ **MAUVAIS** :
- "Newsletter #12"
- "Novidades da empresa"
- "Email importante"

### Timing d'Envoi

**Meilleurs jours** : Mardi, Mercredi, Jeudi  
**Meilleure heure** : 10h-11h ou 14h-15h  
**À éviter** : Weekend, lundi matin, vendredi après-midi

### Fréquence

- **Nouveaux abonnés** : 1 email tous les 2-3 jours (séquence welcome)
- **Abonnés actifs** : 1-2 emails par semaine
- **Abonnés inactifs** : 1 email par mois maximum

---

## 📞 Support

Pour toute question sur la configuration Mailchimp :
- Documentation officielle : [mailchimp.com/help](https://mailchimp.com/help)
- Support Mailchimp : [mailchimp.com/contact](https://mailchimp.com/contact)

---

**Dernière mise à jour** : 7 février 2026  
**Version** : 1.0
