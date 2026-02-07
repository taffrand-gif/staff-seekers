import { Router } from 'express';
import { ACTIVE_CONFIG, CITIES } from '../shared/serviceConfig';
import { plomberieArticles, electriciteArticles } from '../shared/blogArticles';

const router = Router();

/**
 * Génère le sitemap.xml dynamique avec toutes les pages du site
 */
router.get('/sitemap.xml', (req, res) => {
  const baseUrl = `https://${ACTIVE_CONFIG.domain}`;
  const articles = ACTIVE_CONFIG.type === 'plomberie' ? plomberieArticles : electriciteArticles;
  
  // Date actuelle pour lastmod
  const today = new Date().toISOString().split('T')[0];
  
  // Construction du XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Page d'accueil (priorité maximale)
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}/</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += '    <changefreq>daily</changefreq>\n';
  xml += '    <priority>1.0</priority>\n';
  xml += '  </url>\n';
  
  // Pages principales
  const mainPages = [
    { path: '/servicos', priority: '0.9', changefreq: 'weekly' },
    { path: '/faq', priority: '0.8', changefreq: 'monthly' },
    { path: '/dicas', priority: '0.8', changefreq: 'monthly' },
    { path: '/galeria', priority: '0.7', changefreq: 'monthly' },
    { path: '/testemunhos', priority: '0.8', changefreq: 'weekly' },
    { path: '/blog', priority: '0.9', changefreq: 'weekly' },
    { path: '/contactos', priority: '0.7', changefreq: 'monthly' },
  ];
  
  mainPages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${page.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  // Pages locales (12 villes)
  CITIES.forEach(city => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/servicos/${city.slug}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });
  
  // Articles de blog
  articles.forEach(article => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/blog/${article.slug}</loc>\n`;
    xml += `    <lastmod>${article.date}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  // Envoyer le XML avec le bon content-type
  res.header('Content-Type', 'application/xml');
  res.send(xml);
});

/**
 * Génère le robots.txt
 */
router.get('/robots.txt', (req, res) => {
  const baseUrl = `https://${ACTIVE_CONFIG.domain}`;
  
  let txt = '# Robots.txt pour ' + ACTIVE_CONFIG.businessName + '\n\n';
  txt += 'User-agent: *\n';
  txt += 'Allow: /\n';
  txt += 'Disallow: /api/\n';
  txt += 'Disallow: /admin/\n\n';
  txt += `Sitemap: ${baseUrl}/sitemap.xml\n`;
  
  res.header('Content-Type', 'text/plain');
  res.send(txt);
});

export default router;
