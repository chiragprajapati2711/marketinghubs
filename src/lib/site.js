/** Canonical site origin (no trailing slash). Override with NEXT_PUBLIC_SITE_URL. */
export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.marketinghubs.com').replace(/\/$/, '');
}

export function websiteJsonLd({ name, url }) {
  const base = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url: url.startsWith('http') ? url : `${base}${url}`,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${base}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}
