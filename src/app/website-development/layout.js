import JsonLd from '@/components/JsonLd';
import { websiteJsonLd } from '@/lib/site';

export const metadata = {
  title: 'Website Development Services | Marketing Hubs',
  description:
    'Get professional website development services with fast, responsive, and SEO-friendly designs tailored to grow your business and boost conversions.',
  alternates: {
    canonical: '/website-development',
  },
  openGraph: {
    title: 'Website Development Services | MarketingHubs',
    description:
      'Get professional website development services with fast, responsive, and SEO-friendly designs tailored for business growth.',
    url: '/website-development',
    type: 'website',
    siteName: 'MarketingHubs',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MarketingHubs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Services | MarketingHubs',
    description:
      'Get professional website development services with fast, responsive, and SEO-friendly designs tailored for business growth.',
    images: ['/og-image.jpg'],
  },
};

export default function WebsiteDevelopmentLayout({ children }) {
  return (
    <>
      <JsonLd
        data={websiteJsonLd({
          name: 'Website Development Services | Marketing Hubs',
          url: '/website-development',
        })}
      />
      {children}
    </>
  );
}
