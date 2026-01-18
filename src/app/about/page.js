'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';

export default function AboutPage() {
  const { darkMode } = useTheme();
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

  const values = [
    {
      icon: '🎯',
      title: 'Transparency & Integrity',
      description: 'We believe in honest communication and ethical practices in all our marketing strategies.',
    },
    {
      icon: '📊',
      title: 'Data-Driven Decisions',
      description: 'Every strategy is backed by analytics, insights, and measurable results.',
    },
    {
      icon: '💡',
      title: 'Creativity & Innovation',
      description: 'We combine creative thinking with cutting-edge technology to deliver unique solutions.',
    },
    {
      icon: '🤝',
      title: 'Client-Centric Approach',
      description: 'Your success is our success. We tailor every campaign to your specific needs and goals.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: '15+ years in digital marketing, former VP at major agencies.',
      image: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      role: 'Head of SEO',
      bio: 'Certified SEO expert with proven track record of ranking #1.',
      image: '👨‍💻',
    },
    {
      name: 'Emily Rodriguez',
      role: 'PPC Director',
      bio: 'Managed $50M+ in ad spend across Google, Meta, and more.',
      image: '👩‍🎨',
    },
    {
      name: 'David Kim',
      role: 'Social Media Strategist',
      bio: 'Built communities of 1M+ followers for multiple brands.',
      image: '👨‍🚀',
    },
  ];

  const milestones = [
    { year: '2020', event: 'Company Founded' },
    { year: '2021', event: 'Reached 100 Clients' },
    { year: '2022', event: 'Generated 1M+ Impressions' },
    { year: '2023', event: 'Expanded to 20 Team Members' },
    { year: '2024', event: '500+ Happy Clients' },
  ];

  const faqs = [
    {
      question: 'How long has Marketing Hubs been in business?',
      answer: 'Marketing Hubs was founded in 2020 and has been helping businesses grow their digital presence for over 4 years. We\'ve worked with over 500 clients across various industries.',
    },
    {
      question: 'What makes Marketing Hubs different from other agencies?',
      answer: 'We combine data-driven strategies with creative innovation, ensuring every campaign delivers measurable results. Our transparent reporting and client-centric approach set us apart.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'We work with businesses across all industries including ecommerce, SaaS, healthcare, finance, real estate, and more. Our strategies are tailored to each industry\'s unique needs.',
    },
    {
      question: 'How do you measure success?',
      answer: 'We track key performance indicators (KPIs) specific to each campaign, including ROI, conversion rates, traffic growth, engagement metrics, and revenue increases. You\'ll receive detailed monthly reports.',
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We offer scalable solutions for businesses of all sizes, from startups to enterprises. Our Starter plan is specifically designed for small businesses.',
    },
    {
      question: 'What is your team structure?',
      answer: 'Our team consists of certified SEO experts, PPC specialists, social media strategists, content creators, and data analysts. Each client gets a dedicated account manager.',
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
          <h1 
            data-animate
            id="about-hero"
            className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
              visibleElements.has('about-hero')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            } ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            About <span className="bg-gradient-to-r from-onyx-600 via-onyx-500 to-ash-grey-600 bg-clip-text text-transparent">Marketing Hubs</span>
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-dim-grey-300' : 'text-dim-grey-600'
          }`}>
            Empowering businesses to reach their full potential through expert digital marketing strategies.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode ? 'bg-dim-grey-900' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto">
          <div 
            data-animate
            id="mission"
            className={`transition-all duration-1000 ${
              visibleElements.has('mission')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-center transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-dim-grey-900'
            }`}>
              Our Mission
            </h2>
            <p className={`text-xl leading-relaxed text-center transition-colors duration-300 ${
              darkMode ? 'text-dim-grey-300' : 'text-dim-grey-600'
            }`}>
              At Marketing Hubs, we aim to empower businesses of all sizes to achieve remarkable growth through 
              proven digital marketing strategies. We combine expertise, innovation, and dedication to deliver 
              exceptional results that drive real business value.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 
            data-animate
            id="values-header"
            className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${
              visibleElements.has('values-header')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            } ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                data-animate
                id={`value-${index}`}
                className={`p-6 rounded-xl transition-all duration-500 hover:scale-105 ${
                  darkMode
                    ? 'bg-gray-800 shadow-lg hover:shadow-xl'
                    : 'bg-white shadow-sm hover:shadow-lg'
                } ${
                  visibleElements.has(`value-${index}`)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-dim-grey-900'
                }`}>
                  {value.title}
                </h3>
                <p className={`transition-colors duration-300 ${
                  darkMode ? 'text-dim-grey-300' : 'text-dim-grey-600'
                }`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey/Timeline Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode ? 'bg-dim-grey-900' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h2 
            data-animate
            id="journey-header"
            className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${
              visibleElements.has('journey-header')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            } ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Our Journey
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                data-animate
                id={`milestone-${index}`}
                className={`flex items-center gap-6 transition-all duration-1000 ${
                  visibleElements.has(`milestone-${index}`)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className={`flex-shrink-0 w-24 text-center transition-colors duration-300 ${
                  darkMode ? 'text-onyx-400' : 'text-onyx-600'
                }`}>
                  <div className={`text-3xl font-bold transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-dim-grey-900'
                  }`}>
                    {milestone.year}
                  </div>
                </div>
                <div className={`flex-1 p-6 rounded-xl transition-all duration-300 ${
                  darkMode ? 'bg-dim-grey-800' : 'bg-dim-grey-50'
                }`}>
                  <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-dim-grey-900'
                  }`}>
                    {milestone.event}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 
            data-animate
            id="team-header"
            className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${
              visibleElements.has('team-header')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            } ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                data-animate
                id={`team-${index}`}
                className={`p-6 rounded-xl text-center transition-all duration-500 hover:scale-105 ${
                  darkMode
                    ? 'bg-gray-800 shadow-lg hover:shadow-xl'
                    : 'bg-white shadow-sm hover:shadow-lg'
                } ${
                  visibleElements.has(`team-${index}`)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-dim-grey-900'
                }`}>
                  {member.name}
                </h3>
                <p className={`text-lg mb-3 transition-colors duration-300 ${
                  darkMode ? 'text-onyx-400' : 'text-onyx-600'
                }`}>
                  {member.role}
                </p>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-dim-grey-300' : 'text-dim-grey-600'
                }`}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Ready to Work With Us?
          </h2>
          <p className={`text-xl mb-10 transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-white/90'
          }`}>
            Let's discuss how we can help grow your business.
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
              Get in Touch
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
      <FAQ faqs={faqs} />

      <Footer />
    </div>
  );
}
