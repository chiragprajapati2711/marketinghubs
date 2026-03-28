import JsonLd from '@/components/JsonLd';
import { websiteJsonLd } from '@/lib/site';

export const metadata = {
  title: 'Digital Marketing Services | Grow Your Business Online',
  description:
    'Boost your online presence with digital marketing services including SEO, PPC, social media, and content strategies to drive traffic, leads, and sales.',
  alternates: {
    canonical: '/digital-marketing',
  },
  openGraph: {
    title: 'Digital Marketing Services | Grow Your Business Online',
    description:
      'Boost your online presence with digital marketing services including SEO, PPC, social media, and content strategies.',
    url: '/digital-marketing',
    type: 'website',
    siteName: 'MarketingHubs',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MarketingHubs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services | Grow Your Business Online',
    description:
      'Boost your online presence with digital marketing services including SEO, PPC, social media, and content strategies.',
    images: ['/og-image.jpg'],
  },
};

export default function DigitalMarketingLayout({ children }) {
  return (
    <>
      <JsonLd
        data={websiteJsonLd({
          name: 'Digital Marketing Services | Grow Your Business Online',
          url: '/digital-marketing',
        })}
      />
      {children}
    </>
  );
}
