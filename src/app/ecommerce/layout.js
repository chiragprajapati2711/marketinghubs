import JsonLd from '@/components/JsonLd';
import { websiteJsonLd } from '@/lib/site';

export const metadata = {
  title: 'Ecommerce Marketing Services | MarketingHubs',
  description:
    'Boost your online store with ecommerce marketing services including SEO, PPC, and conversion optimization to increase traffic, sales, and ROI.',
  alternates: {
    canonical: '/ecommerce',
  },
  openGraph: {
    title: 'Ecommerce Marketing Services | MarketingHubs',
    description:
      'Boost your online store with ecommerce marketing services including SEO, PPC, and conversion optimization.',
    url: '/ecommerce',
    type: 'website',
    siteName: 'MarketingHubs',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MarketingHubs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Marketing Services | MarketingHubs',
    description:
      'Boost your online store with ecommerce marketing services including SEO, PPC, and conversion optimization.',
    images: ['/og-image.jpg'],
  },
};

export default function EcommerceLayout({ children }) {
  return (
    <>
      <JsonLd
        data={websiteJsonLd({
          name: 'Ecommerce Marketing Services | Marketing Hubs',
          url: '/ecommerce',
        })}
      />
      {children}
    </>
  );
}
