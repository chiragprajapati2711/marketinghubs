'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';

export default function ServicesPage() {
  const { darkMode } = useTheme();
  const [visibleSection, setVisibleSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'seo',
      title: 'SEO Optimization',
      icon: '🔍',
      image: '/SEO-marketing-company.webp',
      gradient: 'from-onyx-500 to-onyx-400',
      description: 'Boost your search engine rankings and drive organic traffic to your website.',
      features: [
        'Keyword research and optimization',
        'On-page and off-page SEO',
        'Technical SEO audits',
        'Content strategy and optimization',
        'Link building campaigns',
        'Local SEO optimization',
        'SEO reporting and analytics',
      ],
      benefits: [
        'Increased organic visibility',
        'Higher search engine rankings',
        'More qualified website traffic',
        'Long-term sustainable growth',
      ],
    },
    {
      id: 'ppc',
      title: 'PPC Advertising',
      icon: '📊',
      image: '/PPC infographic.webp',
      gradient: 'from-ash-grey-500 to-ash-grey-400',
      description: 'Maximize ROI with targeted pay-per-click campaigns across Google and Bing.',
      features: [
        'Google Ads campaign management',
        'Bing Ads optimization',
        'Keyword research and bidding',
        'Ad copy creation and testing',
        'Landing page optimization',
        'Conversion tracking setup',
        'Performance monitoring and optimization',
      ],
      benefits: [
        'Immediate traffic and visibility',
        'Highly targeted audience reach',
        'Measurable ROI and results',
        'Scalable campaign growth',
      ],
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads',
      icon: '📱',
      image: '/AD_4nXcuYZ9QrGo7Pg02YkCvGUMzOIVa.webp',
      gradient: 'from-onyx-600 to-onyx-700',
      description: 'Reach your audience on Facebook and Instagram with data-driven ad campaigns.',
      features: [
        'Facebook Ads campaign setup',
        'Instagram advertising',
        'Audience targeting and segmentation',
        'Creative design and development',
        'A/B testing and optimization',
        'Retargeting campaigns',
        'Performance analytics and reporting',
      ],
      benefits: [
        'Massive audience reach',
        'Advanced targeting options',
        'High engagement rates',
        'Cost-effective advertising',
      ],
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      icon: '💬',
      image: '/social-media-marketing-e14304079.webp',
      gradient: 'from-ash-grey-500 to-onyx-500',
      description: 'Build your brand presence and engage with your audience across all platforms.',
      features: [
        'Content strategy and planning',
        'Social media management',
        'Community engagement',
        'Influencer partnerships',
        'Social media advertising',
        'Crisis management',
        'Analytics and reporting',
      ],
      benefits: [
        'Enhanced brand awareness',
        'Increased customer engagement',
        'Stronger brand loyalty',
        'Direct customer communication',
      ],
    },
    {
      id: 'ecommerce',
      title: 'Ecommerce Marketing',
      icon: '🛒',
      image: '/eCommerce-Development-and-Digita.webp',
      gradient: 'from-ash-grey-500 to-ash-grey-600',
      description: 'Drive sales and increase revenue with specialized ecommerce marketing strategies.',
      features: [
        'Ecommerce SEO optimization',
        'Product listing optimization',
        'Shopping ads management',
        'Email marketing campaigns',
        'Abandoned cart recovery',
        'Customer retention strategies',
        'Conversion rate optimization',
      ],
      benefits: [
        'Increased online sales',
        'Higher conversion rates',
        'Improved customer lifetime value',
        'Better shopping experience',
      ],
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-dim-grey-900' : 'bg-white'
    }`}>
      <Navigation />
      
      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-onyx-50 via-white to-ash-grey-50'
      }`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-dim-grey-900'
          }`}>
            Our <span className="bg-gradient-to-r from-onyx-600 via-onyx-500 to-ash-grey-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Comprehensive digital marketing solutions designed to grow your business and maximize your ROI.
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className={`transition-all duration-1000 ${
                visibleSection === service.id
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={`p-8 rounded-2xl transition-all duration-300 ${
                  darkMode ? 'bg-dim-grey-800' : 'bg-white shadow-lg'
                }`}>
                  <div className="flex items-center mb-6">
                    <span className="text-6xl mr-4">{service.icon}</span>
                    <h2 className={`text-4xl font-bold transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-dim-grey-900'
                    }`}>
                      {service.title}
                    </h2>
                  </div>
                  <p className={`text-xl mb-8 transition-colors duration-300 ${
                    darkMode ? 'text-dim-grey-300' : 'text-dim-grey-600'
                  }`}>
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-dim-grey-900'
                    }`}>
                      What We Offer:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className={`w-6 h-6 mr-3 mt-0.5 flex-shrink-0 ${
                            darkMode ? 'text-onyx-400' : 'text-onyx-600'
                          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={`transition-colors duration-300 ${
                            darkMode ? 'text-dim-grey-300' : 'text-dim-grey-700'
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-dim-grey-900'
                    }`}>
                      Key Benefits:
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {service.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-lg transition-all duration-300 ${
                            darkMode ? 'bg-dim-grey-700' : 'bg-onyx-50'
                          }`}
                        >
                          <span className={`font-medium transition-colors duration-300 ${
                            darkMode ? 'text-onyx-400' : 'text-onyx-600'
                          }`}>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`relative h-full min-h-[400px] rounded-2xl overflow-hidden transition-all duration-300 ${
                  darkMode ? 'bg-dim-grey-800' : 'bg-gradient-to-br from-onyx-100 to-ash-grey-100'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}></div>
                  <div className="relative h-full flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover rounded-2xl opacity-90"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-8 left-8 right-8 text-center">
                        <div className="text-4xl mb-2">{service.icon}</div>
                        <div className={`text-2xl font-bold transition-colors duration-300 ${
                          darkMode ? 'text-white' : 'text-white'
                        }`}>
                          {service.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-r from-dim-grey-800 to-dim-grey-900' 
          : 'bg-gradient-to-r from-onyx-600 via-onyx-500 to-ash-grey-600'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-white'
          }`}>
            Ready to Get Started?
          </h2>
          <p className={`text-xl mb-10 transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-white/90'
          }`}>
            Let's discuss how we can help you achieve your marketing goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-white text-dim-grey-900 hover:shadow-xl'
                  : 'bg-white text-brick-ember-600 hover:shadow-xl'
              }`}
            >
              Contact Us
            </Link>
            <Link
              href="/pricing"
              className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'border-2 border-white text-white hover:bg-white/10'
                  : 'border-2 border-white text-white hover:bg-white/10'
              }`}
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={[
        {
          question: 'How long does it take to see SEO results?',
          answer: 'SEO is a long-term strategy. Typically, you\'ll start seeing improvements in 3-6 months, with significant results appearing after 6-12 months of consistent optimization. We provide monthly reports to track progress.',
        },
        {
          question: 'What is included in your PPC services?',
          answer: 'Our PPC services include campaign setup, keyword research, ad copy creation, landing page optimization, bid management, A/B testing, conversion tracking, and detailed performance reporting.',
        },
        {
          question: 'Do you manage Meta Ads for both Facebook and Instagram?',
          answer: 'Yes! We manage Meta Ads campaigns across both Facebook and Instagram. We create platform-specific ad creatives and optimize campaigns for each platform\'s unique audience.',
        },
        {
          question: 'How do you handle social media content creation?',
          answer: 'Our team creates custom content tailored to your brand voice and audience. We develop content calendars, create graphics and videos, write captions, and schedule posts across all platforms.',
        },
        {
          question: 'What ecommerce platforms do you work with?',
          answer: 'We work with all major ecommerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom solutions. Our strategies are platform-agnostic and focus on driving sales.',
        },
        {
          question: 'Can I combine multiple services?',
          answer: 'Absolutely! Many of our clients use multiple services for a comprehensive marketing strategy. We offer bundled packages and can customize a solution that combines SEO, PPC, social media, and more.',
        },
      ]} />

      <Footer />
    </div>
  );
}
