'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { useTheme } from '@/contexts/ThemeContext';

export default function WebsiteDevelopmentPage() {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const whyBigDeal = [
    {
      title: 'Your website is your 24/7 storefront',
      description: 'A professional website works around the clock to represent your brand, generate leads, and convert visitors. It\'s often the first place customers learn about you.',
    },
    {
      title: 'Built for performance and growth',
      description: 'Modern websites load fast, work on any device, and are optimized for search. We build with scalability in mind so your site grows with your business.',
    },
    {
      title: 'Invest once, benefit long-term',
      description: 'A well-built website reduces ongoing costs, improves user experience, and supports your marketing efforts. Quality development pays off over time.',
    },
  ];

  const services = [
    {
      id: 'corporate',
      title: 'Corporate Website Development',
      image: '/SEO-marketing-company.webp',
      content: 'Create a polished, professional presence for your business. We design and build corporate websites that reflect your brand, showcase your services, and convert visitors into leads. From clean layouts to clear calls-to-action, we focus on credibility, usability, and performance so your company makes a strong first impression.',
    },
    {
      id: 'wordpress',
      title: 'WordPress Development',
      image: '/social-media-marketing-e14304079.webp',
      content: 'Leverage the flexibility of WordPress with custom themes, plugins, and integrations. We build fast, secure, and easy-to-manage WordPress sites—whether you need a blog, portfolio, or full business site. You get a powerful CMS without the complexity, plus training so you can update content yourself.',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Website Development',
      image: '/eCommerce-Development-and-Digita.webp',
      content: 'Launch and grow your online store with a custom e-commerce solution. We build on platforms like Shopify and WooCommerce, or create bespoke solutions for complex needs. Product catalogs, secure checkout, inventory management, and mobile-first design—all tailored to your brand and sales goals.',
    },
  ];

  const faqs = [
    { question: 'What platforms do you build websites on?', answer: 'We build on WordPress, Shopify, WooCommerce, and custom solutions. We choose the platform that best fits your goals, budget, and technical requirements.' },
    { question: 'How long does a typical website project take?', answer: 'A simple corporate site can take 4–6 weeks. WordPress and e-commerce projects typically run 6–12 weeks depending on scope, content, and integrations.' },
    { question: 'Do you provide hosting and maintenance?', answer: 'Yes. We can recommend or manage hosting and offer ongoing maintenance, updates, and support to keep your site secure and performing well.' },
    { question: 'Can you redesign an existing website?', answer: 'Absolutely. We can redesign and rebuild your current site, improve performance, update the design, and migrate content to a new platform if needed.' },
    { question: 'Is the website mobile-friendly?', answer: 'Yes. Every site we build is responsive and optimized for mobile, tablet, and desktop so users have a great experience on any device.' },
  ];

  const inputClass = `w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-onyx-500/20 ${
    darkMode
      ? 'bg-dim-grey-700 border-dim-grey-600 text-white placeholder-dim-grey-400 focus:border-onyx-500'
      : 'bg-white border-dim-grey-300 text-dim-grey-900 placeholder-dim-grey-500 focus:border-onyx-500'
  }`;
  const labelClass = `block mb-2 font-medium transition-colors duration-300 ${darkMode ? 'text-dim-grey-300' : 'text-dim-grey-700'}`;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-dim-grey-900' : 'bg-white'}`}>
      <Navigation />

      {/* Hero Section - Main page Website Development */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden
          >
            <source src="/BG2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-dim-grey-900/92 via-dim-grey-900/75 to-dim-grey-900/55" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Website <span className="text-onyx-400">Development</span> that delivers
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-10 text-white/90">
            Corporate sites, WordPress, and e-commerce—we build fast, beautiful websites that grow your business.
          </p>
          <Link
            href="#form"
            className="inline-block bg-onyx-500 hover:bg-onyx-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Get started
          </Link>
        </div>
      </section>

      {/* Why Digital Marketing Agency Services are Such a Big Deal */}
      <section id="why-big-deal" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-dim-grey-900' : 'bg-dim-grey-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-dim-grey-900'}`}>
            Why Digital Marketing Agency Services are Such a Big Deal
          </h2>
          <p className={`text-center text-lg max-w-3xl mx-auto mb-16 transition-colors duration-300 ${darkMode ? 'text-dim-grey-400' : 'text-dim-grey-600'}`}>
            A great website is the foundation of your online presence. It supports your marketing, builds trust, and turns visitors into customers. Here&apos;s why professional website development matters.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {whyBigDeal.map((item, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl transition-all duration-300 ${darkMode ? 'bg-dim-grey-800' : 'bg-white shadow-lg'}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'bg-onyx-600 text-white' : 'bg-onyx-500 text-white'}`}>
                  {i + 1}
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-dim-grey-900'}`}>
                  {item.title}
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${darkMode ? 'text-dim-grey-400' : 'text-dim-grey-600'}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <div className="relative w-full max-w-4xl h-56 rounded-2xl overflow-hidden">
              <Image
                src="/SEO-marketing-company.webp"
                alt="Website development impact"
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dim-grey-900/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Digital Marketing Agency Services */}
      <section id="services" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-dim-grey-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-dim-grey-900'}`}>
            Our Digital Marketing Agency Services
          </h2>
          <p className={`text-center text-lg max-w-2xl mx-auto mb-16 transition-colors duration-300 ${darkMode ? 'text-dim-grey-400' : 'text-dim-grey-600'}`}>
            Corporate websites, WordPress, and e-commerce—we deliver the right solution for your brand and goals.
          </p>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className={`text-2xl md:text-3xl font-bold mb-6 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-dim-grey-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-lg leading-relaxed transition-colors duration-300 ${darkMode ? 'text-dim-grey-300' : 'text-dim-grey-600'}`}>
                    {service.content}
                  </p>
                </div>
                <div className={`relative h-72 lg:h-80 rounded-2xl overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQ faqs={faqs} title="Frequently Asked Questions" />

      {/* Form Section */}
      <section id="form" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-dim-grey-800' : 'bg-dim-grey-100'}`}>
        <div className="max-w-2xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-dim-grey-900'}`}>
            Talk to us about your project
          </h2>
          <p className={`text-center text-lg mb-10 transition-colors duration-300 ${darkMode ? 'text-dim-grey-400' : 'text-dim-grey-600'}`}>
            Tell us about your business and what kind of website you need. We&apos;ll get back with a tailored proposal.
          </p>
          <div className={`p-8 rounded-2xl transition-all duration-300 ${darkMode ? 'bg-dim-grey-900' : 'bg-white shadow-xl'}`}>
            {submitted ? (
              <div className={`p-6 rounded-lg flex items-center gap-3 transition-all duration-300 ${
                darkMode ? 'bg-green-900/30 border border-green-700' : 'bg-green-50 border border-green-200'
              }`}>
                <svg className="w-6 h-6 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-800'}`}>
                  Thank you! We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Service of interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service</option>
                    <option value="corporate">Corporate Website Development</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="ecommerce">E-commerce Website Development</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Describe your project and what you'd like to achieve..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brick-ember-500 to-brick-ember-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
