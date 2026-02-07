/**
 * Google Sheets Export System
 * 
 * Permet d'exporter automatiquement les leads vers Google Sheets
 * pour un tracking facile et accessible.
 */

export interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  serviceType: string;
  urgency?: string;
  description?: string;
  status: string;
  createdAt: Date;
  source: 'quote' | 'booking' | 'contact';
}

/**
 * Formater les leads pour export CSV
 */
export function formatLeadsForCSV(leads: Lead[]): string {
  const headers = [
    'ID',
    'Data',
    'Nome',
    'Email',
    'Telefone',
    'Cidade',
    'Serviço',
    'Urgência',
    'Status',
    'Fonte',
    'Descrição'
  ].join(',');

  const rows = leads.map(lead => [
    lead.id,
    new Date(lead.createdAt).toLocaleString('pt-PT'),
    `"${lead.name}"`,
    lead.email,
    lead.phone,
    lead.city,
    `"${lead.serviceType}"`,
    lead.urgency || 'normal',
    lead.status,
    lead.source,
    `"${(lead.description || '').replace(/"/g, '""')}"` // Escape quotes
  ].join(','));

  return [headers, ...rows].join('\n');
}

/**
 * Récupérer tous les leads depuis la base de données
 */
export async function getAllLeads(): Promise<Lead[]> {
  const { getDb } = await import('./db');
  const { quoteRequests, bookings } = await import('../drizzle/schema');
  const db = await getDb();
  if (!db) throw new Error('Database not available');

  // Récupérer les demandes de devis
  const quotes = await db.select().from(quoteRequests);
  const quotesLeads: Lead[] = quotes.map(q => ({
    id: q.id,
    name: q.name,
    email: q.email,
    phone: q.phone,
    city: q.city,
    serviceType: q.serviceType,
    urgency: q.urgency,
    description: q.description,
    status: q.status,
    createdAt: q.createdAt,
    source: 'quote' as const,
  }));

  // Récupérer les réservations
  const reservations = await db.select().from(bookings);
  const bookingsLeads: Lead[] = reservations.map(b => ({
    id: b.id,
    name: b.name,
    email: b.email,
    phone: b.phone,
    city: b.city,
    serviceType: b.serviceType,
    description: b.description || undefined,
    status: b.status,
    createdAt: b.createdAt,
    source: 'booking' as const,
  }));

  // Combiner et trier par date
  const allLeads = [...quotesLeads, ...bookingsLeads].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return allLeads;
}

/**
 * Récupérer les statistiques des leads
 */
export async function getLeadsStats() {
  const leads = await getAllLeads();

  const stats = {
    total: leads.length,
    today: leads.filter(l => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return new Date(l.createdAt) >= today;
    }).length,
    thisWeek: leads.filter(l => {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return new Date(l.createdAt) >= weekAgo;
    }).length,
    thisMonth: leads.filter(l => {
      const monthAgo = new Date();
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      return new Date(l.createdAt) >= monthAgo;
    }).length,
    byStatus: {
      pending: leads.filter(l => l.status === 'pending').length,
      quoted: leads.filter(l => l.status === 'quoted').length,
      confirmed: leads.filter(l => l.status === 'confirmed').length,
      completed: leads.filter(l => l.status === 'completed').length,
      rejected: leads.filter(l => l.status === 'rejected' || l.status === 'cancelled').length,
    },
    bySource: {
      quote: leads.filter(l => l.source === 'quote').length,
      booking: leads.filter(l => l.source === 'booking').length,
      contact: leads.filter(l => l.source === 'contact').length,
    },
    byUrgency: {
      urgent: leads.filter(l => l.urgency === 'urgent').length,
      normal: leads.filter(l => !l.urgency || l.urgency === 'normal').length,
    },
    topCities: getTopCities(leads, 5),
    topServices: getTopServices(leads, 5),
  };

  return stats;
}

function getTopCities(leads: Lead[], limit: number) {
  const cityCounts: Record<string, number> = {};
  leads.forEach(lead => {
    cityCounts[lead.city] = (cityCounts[lead.city] || 0) + 1;
  });

  return Object.entries(cityCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([city, count]) => ({ city, count }));
}

function getTopServices(leads: Lead[], limit: number) {
  const serviceCounts: Record<string, number> = {};
  leads.forEach(lead => {
    serviceCounts[lead.serviceType] = (serviceCounts[lead.serviceType] || 0) + 1;
  });

  return Object.entries(serviceCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([service, count]) => ({ service, count }));
}

/**
 * Instructions pour setup Google Sheets
 */
export const GOOGLE_SHEETS_SETUP_INSTRUCTIONS = `
# 📊 Setup Google Sheets Tracking

## Option 1: Export Manuel (Gratuit)

1. Accédez à /api/leads/export-csv dans votre navigateur
2. Téléchargez le fichier CSV
3. Importez dans Google Sheets:
   - Fichier > Importer > Upload
   - Sélectionnez le CSV téléchargé
   - Choisissez "Remplacer la feuille actuelle"

## Option 2: Zapier Automatique (Recommandé)

### Étape 1: Créer un Zap

1. Allez sur [zapier.com](https://zapier.com)
2. Créez un compte gratuit
3. Cliquez sur "Create Zap"

### Étape 2: Trigger (Déclencheur)

1. Cherchez "Webhooks by Zapier"
2. Choisissez "Catch Hook"
3. Copiez l'URL du webhook fournie

### Étape 3: Configurer le Webhook dans votre site

Ajoutez cette variable d'environnement:
\`\`\`
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx/yyyyy/
\`\`\`

### Étape 4: Action (Google Sheets)

1. Cherchez "Google Sheets"
2. Choisissez "Create Spreadsheet Row"
3. Connectez votre compte Google
4. Créez une nouvelle feuille ou sélectionnez existante
5. Mappez les champs:
   - Nom → Name
   - Email → Email
   - Téléphone → Phone
   - Ville → City
   - Service → Service Type
   - etc.

### Étape 5: Tester

1. Testez le Zap
2. Soumettez un formulaire test sur votre site
3. Vérifiez que la ligne apparaît dans Google Sheets

## Option 3: Google Sheets API (Avancé)

Nécessite configuration OAuth et credentials Google.
Documentation: https://developers.google.com/sheets/api

## Dashboard Recommandé

Créez ces colonnes dans Google Sheets:

| Data | Nome | Email | Telefone | Cidade | Serviço | Urgência | Status | Fonte | Descrição |
|------|------|-------|----------|--------|---------|----------|--------|-------|-----------|

Ajoutez des formules pour statistiques:
- Total leads: \`=COUNTA(B:B)-1\`
- Leads aujourd'hui: \`=COUNTIF(A:A,TODAY())\`
- Taux conversion: \`=COUNTIF(H:H,"completed")/COUNTA(B:B)\`
`;
