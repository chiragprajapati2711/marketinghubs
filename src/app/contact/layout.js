import JsonLd from '@/components/JsonLd';
import { websiteJsonLd } from '@/lib/site';

export const metadata = {
  title: 'Contact MarketingHubs | Get in Touch Today',
  description:
    'Contact MarketingHubs for expert digital marketing services. Reach out today for inquiries, quotes, or support to grow your business online.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact MarketingHubs | Get in Touch Today',
    description:
      'Contact MarketingHubs for expert digital marketing services. Reach out today for inquiries, quotes, or support.',
    url: '/contact',
    type: 'website',
    siteName: 'MarketingHubs',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MarketingHubs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact MarketingHubs | Get in Touch Today',
    description:
      'Contact MarketingHubs for expert digital marketing services. Reach out today for inquiries, quotes, or support.',
    images: ['/og-image.jpg'],
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <JsonLd
        data={websiteJsonLd({
          name: 'Contact MarketingHubs | Get in Touch Today',
          url: '/contact',
        })}
      />
      {children}
    </>
  );
}
