export default function sitemap() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.marketinghubs.com').replace(/\/$/, '');

  const routes = [
    '/',
    '/about/',
    '/contact/',
    '/pricing/',
    '/services/',
    '/ecommerce/',
    '/digital-marketing/',
    '/website-development/',
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.8,
  }));
}

