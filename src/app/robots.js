export default function robots() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.marktinghubs.com/').replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Googlebot rules
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'AdsBot-Google',
        allow: '/',
      },
      // Allow major SEO crawlers
      {
        userAgent: 'AhrefsSiteAudit (Desktop)',
        allow: '/',
      },
      {
        userAgent: 'AhrefsSiteAudit (mobile)',
        allow: '/',
      },
      {
        userAgent: 'Pro-Sitemaps',
        allow: '/',
      },
      {
        userAgent: 'Pinterest',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

