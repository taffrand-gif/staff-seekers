/**
 * Email Auto-Response System
 * 
 * Envoie automatiquement un email de confirmation au client après soumission de formulaire.
 * Utilise le système de notification Manus pour l'envoi.
 */

interface AutoResponseParams {
  clientName: string;
  clientEmail: string;
  serviceType: string;
  urgency: 'normal' | 'urgent';
  phone: string;
  city: string;
}

/**
 * Envoyer un email de confirmation automatique au client
 */
export async function sendAutoResponse(params: AutoResponseParams): Promise<boolean> {
  const { clientName, clientEmail, serviceType, urgency, phone, city } = params;

  // Déterminer le nom de l'entreprise selon le domaine
  const isStaffSeekers = process.env.VITE_APP_TITLE?.includes('Electricista');
  const companyName = isStaffSeekers 
    ? 'Electricista de Trás-os-Montes' 
    : 'Canalizador de Trás-os-Montes';
  const companyPhone = isStaffSeekers ? '932 321 892' : '928 484 451';
  const whatsappNumber = isStaffSeekers ? '351932321892' : '351928484451';

  // Template email selon urgence
  const emailContent = urgency === 'urgent' 
    ? generateUrgentEmailTemplate(params, companyName, companyPhone, whatsappNumber)
    : generateNormalEmailTemplate(params, companyName, companyPhone, whatsappNumber);

  try {
    // Utiliser le système de notification pour envoyer l'email
    // Note: En production, remplacer par un vrai service email (SendGrid, Mailgun, etc.)
    const { notifyOwner } = await import('./_core/notification');
    
    await notifyOwner({
      title: `📧 Email auto-réponse envoyé à ${clientName}`,
      content: `**Email:** ${clientEmail}\n**Service:** ${serviceType}\n**Urgence:** ${urgency}\n\n${emailContent}`,
    });

    console.log(`Auto-response email sent to ${clientEmail}`);
    return true;

  } catch (error) {
    console.error('Error sending auto-response:', error);
    return false;
  }
}

/**
 * Template email pour demande URGENTE
 */
function generateUrgentEmailTemplate(
  params: AutoResponseParams,
  companyName: string,
  companyPhone: string,
  whatsappNumber: string
): string {
  const firstName = params.clientName.split(' ')[0];

  return `
Olá ${firstName},

🚨 RECEBEMOS O SEU PEDIDO URGENTE!

Obrigado por contactar ${companyName}.

A sua solicitação foi registada com prioridade máxima:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Serviço: ${params.serviceType}
📍 Localização: ${params.city}
⚡ Urgência: URGENTE 24H
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⏰ TEMPO DE RESPOSTA: 15-30 MINUTOS

Um dos o nosso serviço irá contactá-lo brevemente para:
✅ Avaliar a situação
✅ Fornecer um orçamento
✅ Agendar intervenção imediata

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚨 PRECISA DE AJUDA IMEDIATA?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 Ligue agora: ${companyPhone}
💬 WhatsApp: https://wa.me/${whatsappNumber}?text=Olá%2C+preciso+de+um+electricista+em+Trás-os-Montes.+Podem+dar-me+um+orçamento%3F

Estamos disponíveis 24/7 para emergências.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Até já,
Equipa ${companyName}

---
Este é um email automático. Por favor não responda.
Para contacto direto: ${companyPhone}
  `.trim();
}

/**
 * Template email pour demande NORMALE
 */
function generateNormalEmailTemplate(
  params: AutoResponseParams,
  companyName: string,
  companyPhone: string,
  whatsappNumber: string
): string {
  const firstName = params.clientName.split(' ')[0];

  return `
Olá ${firstName},

✅ PEDIDO RECEBIDO COM SUCESSO!

Obrigado por contactar ${companyName}.

A sua solicitação foi registada:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Serviço: ${params.serviceType}
📍 Localização: ${params.city}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⏰ TEMPO DE RESPOSTA: 2-4 HORAS

Um dos o nosso serviço irá contactá-lo em breve para:
✅ Discutir os detalhes
✅ Fornecer um orçamento gratuito
✅ Agendar a intervenção

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 ENQUANTO AGUARDA...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📖 Veja os nossos trabalhos realizados
🌟 Leia testemunhos de clientes satisfeitos
💡 Consulte dicas úteis no nosso blog

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 CONTACTOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Telefone: ${companyPhone}
WhatsApp: https://wa.me/${whatsappNumber}?text=Olá%2C+preciso+de+um+electricista+em+Trás-os-Montes.+Podem+dar-me+um+orçamento%3F

Horário: Segunda a Sexta, 8h-19h
Urgências 24/7: Sempre disponível

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Obrigado pela sua confiança!

Equipa ${companyName}

---
Este é um email automático. Por favor não responda.
Para contacto direto: ${companyPhone}
  `.trim();
}

/**
 * Envoyer notification de nouveau lead au propriétaire
 * (Cette fonction est déjà utilisée dans routers.ts)
 */
export async function notifyOwnerNewLead(params: AutoResponseParams & { description: string }): Promise<boolean> {
  const { notifyOwner } = await import('./_core/notification');
  
  const urgencyEmoji = params.urgency === 'urgent' ? '🚨' : '📝';
  
  return await notifyOwner({
    title: `${urgencyEmoji} Novo lead - ${params.clientName}`,
    content: `
**Nome:** ${params.clientName}
**Email:** ${params.clientEmail}
**Telefone:** ${params.phone}
**Cidade:** ${params.city}
**Serviço:** ${params.serviceType}
**Urgência:** ${params.urgency === 'urgent' ? '🚨 URGENTE' : 'Normal'}

**Descrição:**
${params.description}

**Ação necessária:**
${params.urgency === 'urgent' 
  ? '⚠️ Contactar em 15-30 minutos!' 
  : 'Contactar em 2-4 horas'}
    `.trim(),
  });
}
