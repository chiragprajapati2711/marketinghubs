'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { useTheme } from '@/contexts/ThemeContext';

export default function Home() {
  const { darkMode } = useTheme();
  const [hoveredService, setHoveredService] = useState(null);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: 'SEO Optimization',
      description: 'Boost your search engine rankings with proven SEO strategies. Increase organic traffic and improve your online visibility.',
      icon: '🔍',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted pay-per-click campaigns. Get immediate results and scale your business efficiently.',
      icon: '📊',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 3,
      title: 'Meta Ads',
      description: 'Reach your audience on Facebook and Instagram with data-driven ad campaigns. Drive engagement and conversions.',
      icon: '📱',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      id: 4,
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all platforms. Engage with your audience and grow your community.',
      icon: '💬',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 5,
      title: 'Ecommerce Marketing',
      description: 'Drive sales and increase revenue with specialized ecommerce strategies. Optimize your online store for success.',
      icon: '🛒',
      color: 'from-teal-500 to-emerald-500',
    },
  ];

  const features = [
    {
      title: 'Data-Driven Strategies',
      description: 'Every campaign is backed by analytics and insights',
    },
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of experience',
    },
    {
      title: 'Transparent Reporting',
      description: 'Real-time dashboards and detailed performance reports',
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow from startup to enterprise with our flexible plans',
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
          ? 'bg-gradient-to-br from-dim-grey-900 via-dim-grey-800 to-dim-grey-900' 
          : 'bg-gradient-to-br from-onyx-50 via-white to-ash-grey-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div 
            data-animate
            id="hero-content"
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              visibleElements.has('hero-content')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-dim-grey-900'
            }`}>
              Grow Your Business with
              <span className="block bg-gradient-to-r from-onyx-600 via-onyx-500 to-ash-grey-600 bg-clip-text text-transparent animate-pulse">
                Digital Marketing Excellence
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-10 leading-relaxed transition-colors duration-300 ${
              darkMode ? 'text-dim-grey-300' : 'text-dim-grey-600'
            }`}>
              We help businesses reach their full potential through proven SEO, PPC, social media, and ecommerce marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-brick-ember-500 to-brick-ember-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Your Campaign
              </Link>
              <Link
                href="/services"
                className={`border-2 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                  darkMode
                    ? 'border-dim-grey-600 text-dim-grey-300 hover:border-onyx-500 hover:text-onyx-400'
                    : 'border-dim-grey-300 text-dim-grey-700 hover:border-onyx-600 hover:text-onyx-600'
                }`}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div 
            data-animate
            id="stats"
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
              visibleElements.has('stats')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {[
              { number: '500+', label: 'Clients Served' },
              { number: '2M+', label: 'Impressions Generated' },
              { number: '150%', label: 'Avg. ROI Increase' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? 'bg-dim-grey-800 shadow-lg hover:shadow-xl'
                    : 'bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-onyx-600 to-onyx-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className={`mt-2 transition-colors duration-300 ${
                  darkMode ? 'text-dim-grey-400' : 'text-dim-grey-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode ? 'bg-dim-grey-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div 
            data-animate
            id="services-header"
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('services-header')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2             className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-dim-grey-900'
            }`}>
              Our Services
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              darkMode ? 'text-dim-grey-300' : 'text-dim-grey-600'
            }`}>
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href="/services"
                data-animate
                id={`service-${service.id}`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                  darkMode
                    ? 'bg-dim-grey-800 border-2 border-dim-grey-700 hover:border-transparent'
                    : 'bg-white border-2 border-dim-grey-100 hover:border-transparent'
                } hover:shadow-2xl ${
                  visibleElements.has(`service-${service.id}`)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                    darkMode
                      ? 'text-white group-hover:text-white'
                      : 'text-dim-grey-900 group-hover:text-white'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`transition-colors duration-300 leading-relaxed ${
                    darkMode
                      ? 'text-dim-grey-300 group-hover:text-white/90'
                      : 'text-dim-grey-600 group-hover:text-white/90'
                  }`}>
                    {service.description}
                  </p>
                  <div className={`mt-6 flex items-center transition-colors duration-300 ${
                    darkMode
                      ? 'text-onyx-400 group-hover:text-white'
                      : 'text-onyx-600 group-hover:text-white'
                  }`}>
                    <span className="font-semibold">Learn More</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-dim-grey-800 to-dim-grey-900'
          : 'bg-gradient-to-br from-dim-grey-50 to-onyx-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div 
            data-animate
            id="features-header"
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('features-header')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2             className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-dim-grey-900'
            }`}>
              Why Choose Us
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              darkMode ? 'text-dim-grey-300' : 'text-dim-grey-600'
            }`}>
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-animate
                id={`feature-${index}`}
                className={`p-6 rounded-xl transition-all duration-500 hover:scale-105 ${
                  darkMode
                    ? 'bg-dim-grey-800 shadow-lg hover:shadow-xl'
                    : 'bg-white shadow-sm hover:shadow-lg'
                } ${
                  visibleElements.has(`feature-${index}`)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-onyx-500 to-onyx-600 rounded-lg flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-dim-grey-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`transition-colors duration-300 ${
                  darkMode ? 'text-dim-grey-300' : 'text-dim-grey-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-r from-dim-grey-800 via-dim-grey-800 to-dim-grey-900'
          : 'bg-gradient-to-r from-onyx-600 via-onyx-500 to-ash-grey-600'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            data-animate
            id="cta-header"
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
              visibleElements.has('cta-header')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            } text-white`}
          >
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your marketing goals and drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brick-ember-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Schedule a Free Consultation
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={[
        {
          question: 'What services does Marketing Hubs offer?',
          answer: 'We offer comprehensive digital marketing services including SEO Optimization, PPC Advertising, Meta Ads, Social Media Marketing, and Ecommerce Marketing. Each service is tailored to your business needs.',
        },
        {
          question: 'How quickly will I see results?',
          answer: 'Results vary by service. PPC and Meta Ads can show immediate results, while SEO typically takes 3-6 months to see significant improvements. We provide detailed monthly reports to track progress.',
        },
        {
          question: 'Do you work with small businesses?',
          answer: 'Absolutely! We offer scalable solutions for businesses of all sizes. Our Starter plan is specifically designed for small businesses, and we can customize packages to fit your budget.',
        },
        {
          question: 'What makes Marketing Hubs different?',
          answer: 'We combine data-driven strategies with creative innovation, ensuring every campaign delivers measurable results. Our transparent reporting, dedicated account managers, and proven track record set us apart.',
        },
        {
          question: 'Can I change my plan later?',
          answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes are prorated, so you only pay for what you use.',
        },
        {
          question: 'How do you measure success?',
          answer: 'We track key performance indicators (KPIs) specific to each campaign, including ROI, conversion rates, traffic growth, engagement metrics, and revenue increases. You\'ll receive detailed monthly reports.',
        },
      ]} />

      <Footer />
    </div>
  );
}
