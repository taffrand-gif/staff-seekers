# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-13

### Added
- Initial release of Staff Seekers website
- Modern React + TypeScript + Vite stack
- Responsive design with Tailwind CSS
- Professional hero images generated with fal.ai
- SEO optimization: sitemap.xml, robots.txt, schema.org markup
- Local business Schema.org implementation
- Contact forms with WhatsApp integration
- Service pages with detailed descriptions
- Testimonials section
- Price calculator for electrical services
- Cross-linking with Norte Reparos (plumbing services)
- Pages for 4 major cities: Vila Real, Bragança, Chaves, Mirandela
- Environment configuration with .env.example
- Security best practices implementation
- Favicon and Open Graph meta tags
- Performance optimization (image compression, lazy loading)

### Changed
- Complete redesign with "Brutalisme Numérique Fonctionnel" aesthetic
- Color scheme updated to amber (#FFA000) + dark blue (#1A237E)
- Navigation structure optimized for conversion
- Service descriptions rewritten for clarity and SEO
- Contact information formatting (international phone numbers)

### Fixed
- Critical security vulnerabilities in dependencies
- CDN image URLs replaced with local hosting (prevent expiration)
- 309 HTML template files with unprocessed variables removed
- Meta keywords removed (obsolete SEO practice)
- Phone number formatting (international standard)
- Sitemap structure (separate sitemaps for each site)
- Robots.txt configuration (unblocked SEO bots)
- Console.log statements removed from production code
- Duplicate configuration properties cleaned up
- Package names standardized

### Security
- Updated vulnerable dependencies (pnpm audit fix)
- Added .env.example with all required environment variables
- Implemented JWT secret configuration
- Removed sensitive data from version control
- Added security headers and best practices

### Deprecated
- Static HTML pages in /servicos/ folder (replaced by React pages)
- Python color fix scripts (migrated to Node.js)
- Legacy meta tags (keywords, etc.)

### Removed
- 309 HTML files with {{variable}} placeholders
- Temporary CDN image URLs (expiring in 2027)
- Redundant configuration properties
- Obsolete SEO practices
- Development console.log statements

## [0.1.0] - 2026-02-12

### Added
- Initial project setup
- Basic React components
- Tailwind CSS configuration
- Vite build system
- TypeScript support
- Prettier code formatting

[Unreleased]: https://github.com/your-org/staff-seekers/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/your-org/staff-seekers/releases/tag/v1.0.0