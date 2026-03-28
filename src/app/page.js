import HomePageClient from './HomePageClient';
import JsonLd from '@/components/JsonLd';
import { websiteJsonLd } from '@/lib/site';

export const metadata = {
  title: 'Digital Marketing Agency | MarketingHubs',
  description:
    'Grow your business with expert digital marketing services including SEO, social media, PPC, and branding. Results-driven strategies that convert.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Digital Marketing Agency | MarketingHubs',
    description:
      'Grow your business with expert digital marketing services including SEO, social media, PPC, and branding.',
    url: '/',
    type: 'website',
    siteName: 'MarketingHubs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MarketingHubs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency | MarketingHubs',
    description:
      'Grow your business with expert digital marketing services including SEO, social media, PPC, and branding.',
    images: ['/og-image.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={websiteJsonLd({
          name: 'Home - Marketing Hubs',
          url: '/',
        })}
      />
      <HomePageClient />
    </>
  );
}
