import { generateCityServiceMatrix } from '../shared/cityServiceMatrix';
import { CITIES } from '../shared/serviceConfig';
import * as fs from 'fs';
import * as path from 'path';

const DOMAIN = 'https://eletricista-norte-reparos.pt';

function generateSitemap() {
  const urls: Array<{ loc: string; priority: number; changefreq: string }> = [];

  // Homepage (highest priority)
  urls.push({
    loc: `${DOMAIN}/`,
    priority: 1.0,
    changefreq: 'daily'
  });

  // Service hub pages (high priority)
  const services = [
    'quadros-eletricos',
    'tomadas-interruptores',
    'certificacao-certiel',
    'iluminacao',
    'avarias-urgentes'
  ];

  services.forEach(service => {
    urls.push({
      loc: `${DOMAIN}/${service}`,
      priority: 0.9,
      changefreq: 'weekly'
    });
  });

  // Main city pages (high priority)
  const mainCities = CITIES.filter(c => !c.parentCity);
  mainCities.forEach(city => {
    urls.push({
      loc: `${DOMAIN}/eletricista-${city.slug}`,
      priority: 0.85,
      changefreq: 'weekly'
    });
  });

  // City × Service pages (medium-high priority)
  const matrix = generateCityServiceMatrix();
  matrix.forEach(page => {
    urls.push({
      loc: `${DOMAIN}${page.url}`,
      priority: page.priority,
      changefreq: 'monthly'
    });
  });

  // Static pages
  urls.push(
    { loc: `${DOMAIN}/servicos`, priority: 0.8, changefreq: 'monthly' },
    { loc: `${DOMAIN}/faq`, priority: 0.7, changefreq: 'monthly' },
    { loc: `${DOMAIN}/zonas`, priority: 0.7, changefreq: 'monthly' },
    { loc: `${DOMAIN}/blog`, priority: 0.8, changefreq: 'weekly' }
  );

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <priority>${url.priority.toFixed(1)}</priority>
    <changefreq>${url.changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>`;

  // Write to file
  const outputPath = path.join(__dirname, '../public/sitemap-dynamic.xml');
  fs.writeFileSync(outputPath, xml, 'utf-8');

  console.log(`✅ Generated sitemap with ${urls.length} URLs`);
  console.log(`📍 Saved to: ${outputPath}`);
}

generateSitemap();
