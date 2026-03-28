import JsonLd from '@/components/JsonLd';
import { websiteJsonLd } from '@/lib/site';

export const metadata = {
  title: 'Pricing | MarketingHubs',
  description:
    'Transparent pricing for digital marketing and website services. Choose a plan that fits your business goals.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Pricing | MarketingHubs',
    description:
      'Transparent pricing for digital marketing and website services. Choose a plan that fits your business goals.',
    url: '/pricing',
    type: 'website',
    siteName: 'MarketingHubs',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MarketingHubs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | MarketingHubs',
    description:
      'Transparent pricing for digital marketing and website services. Choose a plan that fits your business goals.',
    images: ['/og-image.jpg'],
  },
};

export default function PricingLayout({ children }) {
  return (
    <>
      <JsonLd
        data={websiteJsonLd({
          name: 'Pricing | MarketingHubs',
          url: '/pricing',
        })}
      />
      {children}
    </>
  );
}
