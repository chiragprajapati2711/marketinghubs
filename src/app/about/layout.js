import JsonLd from '@/components/JsonLd';
import { websiteJsonLd } from '@/lib/site';

export const metadata = {
  title: 'About MarketingHubs | Digital Marketing Experts',
  description:
    'Learn about MarketingHubs, our mission, team, and expertise in delivering powerful digital marketing solutions that help businesses grow online.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About MarketingHubs | Digital Marketing Experts',
    description:
      'Learn about MarketingHubs, our mission, team, and expertise in delivering powerful digital marketing solutions.',
    url: '/about',
    type: 'website',
    siteName: 'MarketingHubs',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MarketingHubs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About MarketingHubs | Digital Marketing Experts',
    description:
      'Learn about MarketingHubs, our mission, team, and expertise in delivering powerful digital marketing solutions.',
    images: ['/og-image.jpg'],
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      <JsonLd
        data={websiteJsonLd({
          name: 'About MarketingHubs | Digital Marketing Experts',
          url: '/about',
        })}
      />
      {children}
    </>
  );
}
