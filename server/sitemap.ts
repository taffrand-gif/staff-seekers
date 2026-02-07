import { Router } from 'express';
import { ACTIVE_CONFIG, CITIES } from '../shared/serviceConfig';
import { plomberieArticles, electriciteArticles } from '../shared/blogArticles';
import { IMAGES } from '../shared/images';

const router = Router();

/**
 * Génère le sitemap.xml dynamique avec toutes les pages du site
 * Optimisé pour SEO avec images et métadonnées enrichies
 */
router.get('/sitemap.xml', (req, res) => {
  const baseUrl = `https://${ACTIVE_CONFIG.domain}`;
  const articles = ACTIVE_CONFIG.type === 'plomberie' ? plomberieArticles : electriciteArticles;
  
  // Date actuelle pour lastmod
  const today = new Date().toISOString().split('T')[0];
  
  // Construction du XML avec namespace pour les images
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n';
  xml += '        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n';
  
  // Page d'accueil (priorité maximale) avec image
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}/</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += '    <changefreq>daily</changefreq>\n';
  xml += '    <priority>1.0</priority>\n';
  xml += '    <image:image>\n';
  xml += `      <image:loc>${baseUrl}/og-image.jpg</image:loc>\n`;
  xml += `      <image:title>${ACTIVE_CONFIG.businessName} - ${ACTIVE_CONFIG.name} 24h</image:title>\n`;
  xml += `      <image:caption>Service d'urgence 24h disponible dans tout le district de Bragança</image:caption>\n`;
  xml += '    </image:image>\n';
  xml += '  </url>\n';
  
  // Pages principales avec images
  const mainPages = [
    { 
      path: '/servicos', 
      priority: '0.9', 
      changefreq: 'weekly',
      title: 'Nos Services',
      image: ACTIVE_CONFIG.type === 'plomberie' ? IMAGES.plomberie.hero : IMAGES.electricite.hero
    },
    { 
      path: '/faq', 
      priority: '0.8', 
      changefreq: 'monthly',
      title: 'Questions Fréquentes',
      image: `${baseUrl}/og-image.jpg`
    },
    { 
      path: '/dicas', 
      priority: '0.8', 
      changefreq: 'monthly',
      title: 'Conseils et Astuces',
      image: `${baseUrl}/og-image.jpg`
    },
    { 
      path: '/galeria', 
      priority: '0.7', 
      changefreq: 'monthly',
      title: 'Galerie Photos',
      image: IMAGES.gallery[0]
    },
    { 
      path: '/testemunhos', 
      priority: '0.8', 
      changefreq: 'weekly',
      title: 'Témoignages Clients',
      image: `${baseUrl}/og-image.jpg`
    },
    { 
      path: '/blog', 
      priority: '0.9', 
      changefreq: 'weekly',
      title: 'Blog',
      image: `${baseUrl}/og-image.jpg`
    },
    { 
      path: '/contactos', 
      priority: '0.7', 
      changefreq: 'monthly',
      title: 'Contact',
      image: `${baseUrl}/og-image.jpg`
    },
  ];
  
  mainPages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${page.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    if (page.image) {
      xml += '    <image:image>\n';
      xml += `      <image:loc>${page.image}</image:loc>\n`;
      xml += `      <image:title>${page.title} - ${ACTIVE_CONFIG.businessName}</image:title>\n`;
      xml += '    </image:image>\n';
    }
    xml += '  </url>\n';
  });
  
  // Pages locales (toutes les villes) avec images
  CITIES.forEach(city => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/servicos/${city.slug}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '    <image:image>\n';
    const cityImage = ACTIVE_CONFIG.type === 'plomberie' ? IMAGES.plomberie.hero : IMAGES.electricite.hero;
    xml += `      <image:loc>${cityImage}</image:loc>\n`;
    xml += `      <image:title>${ACTIVE_CONFIG.name} ${city.name} 24h</image:title>\n`;
    xml += `      <image:caption>Service d'urgence ${ACTIVE_CONFIG.name} disponible à ${city.name}</image:caption>\n`;
    xml += '    </image:image>\n';
    xml += '  </url>\n';
  });
  
  // Articles de blog avec images
  articles.forEach(article => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/blog/${article.slug}</loc>\n`;
    xml += `    <lastmod>${article.date}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '    <image:image>\n';
    xml += `      <image:loc>${baseUrl}/blog-images/${article.slug}.jpg</image:loc>\n`;
    xml += `      <image:title>${article.title}</image:title>\n`;
    xml += `      <image:caption>${article.excerpt}</image:caption>\n`;
    xml += '    </image:image>\n';
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  // Envoyer le XML avec le bon content-type et cache headers
  res.header('Content-Type', 'application/xml; charset=utf-8');
  res.header('Cache-Control', 'public, max-age=3600'); // Cache 1 heure
  res.send(xml);
});

/**
 * Génère le robots.txt optimisé pour SEO
 */
router.get('/robots.txt', (req, res) => {
  const baseUrl = `https://${ACTIVE_CONFIG.domain}`;
  
  let txt = '# Robots.txt pour ' + ACTIVE_CONFIG.businessName + '\n';
  txt += '# Optimisé pour un meilleur crawl et indexation\n\n';
  
  // Règles pour tous les robots
  txt += 'User-agent: *\n';
  txt += 'Allow: /\n';
  txt += 'Disallow: /api/\n';
  txt += 'Disallow: /admin/\n';
  txt += 'Disallow: /_core/\n';
  txt += 'Disallow: /private/\n\n';
  
  // Règles spécifiques pour Googlebot
  txt += 'User-agent: Googlebot\n';
  txt += 'Allow: /\n';
  txt += 'Disallow: /api/\n';
  txt += 'Disallow: /admin/\n';
  txt += 'Crawl-delay: 0\n\n';
  
  // Règles spécifiques pour Googlebot-Image
  txt += 'User-agent: Googlebot-Image\n';
  txt += 'Allow: /\n';
  txt += 'Allow: /images/\n';
  txt += 'Allow: /blog-images/\n\n';
  
  // Règles pour les mauvais bots
  txt += '# Bloquer les mauvais bots\n';
  txt += 'User-agent: AhrefsBot\n';
  txt += 'User-agent: SemrushBot\n';
  txt += 'User-agent: DotBot\n';
  txt += 'User-agent: MJ12bot\n';
  txt += 'Disallow: /\n\n';
  
  // Sitemap
  txt += '# Sitemap\n';
  txt += `Sitemap: ${baseUrl}/sitemap.xml\n\n`;
  
  // Informations supplémentaires
  txt += '# Contact\n';
  txt += `# Pour toute question: ${baseUrl}/contactos\n`;
  
  res.header('Content-Type', 'text/plain; charset=utf-8');
  res.header('Cache-Control', 'public, max-age=86400'); // Cache 24 heures
  res.send(txt);
});

export default router;
