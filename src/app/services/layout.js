import JsonLd from '@/components/JsonLd';
import { websiteJsonLd } from '@/lib/site';

export const metadata = {
  title: 'Digital Marketing Services | MarketingHubs',
  description:
    'Explore our digital marketing services including SEO, PPC, social media, and content marketing designed to boost traffic, leads, and business growth.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Digital Marketing Services | MarketingHubs',
    description:
      'Explore our digital marketing services including SEO, PPC, social media, and content marketing to grow your business online.',
    url: '/services',
    type: 'website',
    siteName: 'MarketingHubs',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MarketingHubs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services | MarketingHubs',
    description:
      'Explore our digital marketing services including SEO, PPC, social media, and content marketing to grow your business online.',
    images: ['/og-image.jpg'],
  },
};

export default function ServicesLayout({ children }) {
  return (
    <>
      <JsonLd
        data={websiteJsonLd({
          name: 'Digital Marketing Services | MarketingHubs',
          url: '/services',
        })}
      />
      {children}
    </>
  );
}
