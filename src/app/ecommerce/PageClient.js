'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { useTheme } from '@/contexts/ThemeContext';

export default function EcommercePage() {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
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
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    }, 3000);
  };

  const benefits = [
    {
      title: 'Increase sales conversion',
      description: 'Optimized user funnels and checkout flows that turn visitors into customers.',
      image: '/eCommerce-Development-and-Digita.webp',
      icon: '📈',
    },
    {
      title: 'Better ad spend efficiency',
      description: 'Data-driven paid campaigns that deliver more sales for your budget.',
      image: '/PPC infographic.webp',
      icon: '💰',
    },
    {
      title: 'Organic traffic growth',
      description: 'SEO and content strategies that bring high-intent shoppers to your store.',
      image: '/SEO-marketing-company.webp',
      icon: '🔍',
    },
    {
      title: 'Stronger customer loyalty',
      description: 'Email and social strategies that increase lifetime value and repeat purchases.',
      image: '/social-media-marketing-e14304079.webp',
      icon: '💬',
    },
  ];

  const whyChooseUs = [
    { title: 'Ecommerce-focused expertise', description: 'We specialize in online retail and understand product feeds, marketplaces, and conversion optimization.' },
    { title: 'Full-funnel approach', description: 'From awareness to purchase to retention—we align every channel to your revenue goals.' },
    { title: 'Transparent reporting', description: 'Clear KPIs, regular reports, and honest recommendations so you always know where you stand.' },
    { title: 'Scalable strategies', description: 'Campaigns built to scale with your business, from launch to peak seasons and new product lines.' },
  ];

  const faqs = [
    { question: 'How do you measure ROI for eCommerce?', answer: 'We track conversion rates, cost per acquisition, customer lifetime value, and revenue attribution so you see the real impact on your sales.' },
    { question: 'Do you work with my eCommerce platform?', answer: 'Yes. We work with Shopify, WooCommerce, Magento, BigCommerce, and custom stores. Our strategies are platform-agnostic.' },
    { question: 'How long before we see results?', answer: 'Paid campaigns can show results within weeks. SEO and organic growth typically show meaningful improvement in 3–6 months.' },
    { question: 'Can you help with both paid and organic?', answer: 'Absolutely. We combine SEO, PPC, social ads, and email so your store gets consistent traffic and conversions.' },
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

      {/* Hero Section */}
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
            <source src="/BG3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-dim-grey-900/90 via-dim-grey-900/70 to-dim-grey-900/50" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ecommerce marketing that <span className="text-onyx-400">drives sales</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-10 text-white/90">
            From SEO and PPC to social and email—we help online stores grow traffic, conversions, and customer value.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#form"
              className="inline-block bg-onyx-500 hover:bg-onyx-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get a strategy
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white/80 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/10"
            >
              Our services
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-dim-grey-900' : 'bg-dim-grey-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[320px] lg:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/SEO-marketing-company.webp"
                alt="Ecommerce SEO and visibility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-dim-grey-900'}`}>
                Built for online retail
              </h2>
              <p className={`text-lg leading-relaxed mb-4 transition-colors duration-300 ${darkMode ? 'text-dim-grey-300' : 'text-dim-grey-600'}`}>
                We understand the unique challenges of eCommerce: standing out in search, converting traffic, and turning one-time buyers into loyal customers. Our strategies are tailored to product-based businesses and multichannel selling.
              </p>
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${darkMode ? 'text-dim-grey-300' : 'text-dim-grey-600'}`}>
                Whether you&apos;re on Shopify, WooCommerce, or a custom platform, we combine SEO, paid ads, social media, and email marketing into one coherent plan focused on your revenue goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of this service */}
      <section id="benefits" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-dim-grey-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-dim-grey-900'}`}>
            Benefits of this service
          </h2>
          <p className={`text-center text-lg max-w-2xl mx-auto mb-16 transition-colors duration-300 ${darkMode ? 'text-dim-grey-400' : 'text-dim-grey-600'}`}>
            What you get when you partner with us for eCommerce marketing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  darkMode ? 'bg-dim-grey-900' : 'bg-white shadow-lg'
                }`}
              >
                <div className="relative h-40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 left-3 text-3xl">{item.icon}</span>
                </div>
                <div className="p-5">
                  <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-dim-grey-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-dim-grey-400' : 'text-dim-grey-600'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why-choose-us" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-dim-grey-900' : 'bg-onyx-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-dim-grey-900'}`}>
                Why choose us
              </h2>
              <p className={`text-lg mb-10 transition-colors duration-300 ${darkMode ? 'text-dim-grey-400' : 'text-dim-grey-600'}`}>
                We focus on outcomes that matter to your bottom line—traffic, conversions, and customer value.
              </p>
              <ul className="space-y-6">
                {whyChooseUs.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-colors duration-300 ${
                      darkMode ? 'bg-onyx-600 text-white' : 'bg-onyx-500 text-white'
                    }`}>
                      {i + 1}
                    </span>
                    <div>
                      <h3 className={`font-bold mb-1 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-dim-grey-900'}`}>
                        {item.title}
                      </h3>
                      <p className={`transition-colors duration-300 ${darkMode ? 'text-dim-grey-400' : 'text-dim-grey-600'}`}>
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[360px] rounded-2xl overflow-hidden">
              <Image
                src="/social-media-marketing-e14304079.webp"
                alt="Ecommerce and social marketing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dim-grey-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQ faqs={faqs} title="Frequently asked questions" />

      {/* Form Section */}
      <section id="form" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-dim-grey-800' : 'bg-dim-grey-100'}`}>
        <div className="max-w-2xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-dim-grey-900'}`}>
            Get your eCommerce strategy
          </h2>
          <p className={`text-center text-lg mb-10 transition-colors duration-300 ${darkMode ? 'text-dim-grey-400' : 'text-dim-grey-600'}`}>
            Tell us about your store and goals. We&apos;ll get back with a tailored plan.
          </p>
          <div className={`p-8 rounded-2xl transition-all duration-300 ${darkMode ? 'bg-dim-grey-900' : 'bg-white shadow-xl'}`}>
            {submitted ? (
              <div className={`p-6 rounded-lg flex items-center gap-3 transition-all duration-300 ${
                darkMode ? 'bg-green-900/30 border border-green-700' : 'bg-green-50 border border-green-200'
              }`}>
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <label className={labelClass}>Company / Store</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your store name"
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
                  <label className={labelClass}>Tell us about your goals *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Your store, current challenges, and what you want to achieve..."
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
