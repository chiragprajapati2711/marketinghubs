'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { useTheme } from '@/contexts/ThemeContext';

export default function DigitalMarketingPage() {
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
      title: 'Reach your audience where they are',
      description: 'Customers spend hours online every day. A strong digital presence puts your brand in front of them at the right moment—on search, social, and across the web.',
    },
    {
      title: 'Measurable, data-driven results',
      description: 'Unlike traditional marketing, digital campaigns can be tracked end-to-end. You see exactly what works, so you can invest in strategies that drive real growth.',
    },
    {
      title: 'Scale with your business',
      description: 'From startups to enterprises, digital marketing adapts to your budget and goals. Start with one channel and expand as you grow.',
    },
  ];

  const services = [
    {
      id: 'social-media',
      title: 'Social Media',
      image: '/social-media-marketing-e14304079.webp',
      content: 'Build and nurture your community on the platforms your audience uses every day. We create content calendars, run organic and paid campaigns, and turn followers into customers. From Instagram and Facebook to LinkedIn and TikTok, we align your social strategy with your business goals and brand voice.',
    },
    {
      id: 'campaign-management',
      title: 'Campaign Management',
      image: '/AD_4nXcuYZ9QrGo7Pg02YkCvGUMzOIVa.webp',
      content: 'Launch and optimize multi-channel campaigns that deliver. We plan, execute, and refine campaigns across paid and organic channels—setting clear KPIs, tracking performance, and adjusting in real time so you hit your targets and get the best return on every dollar spent.',
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing',
      image: '/eCommerce-Development-and-Digita.webp',
      content: 'Turn subscribers into repeat buyers with targeted email campaigns. We design flows for welcome series, cart abandonment, product recommendations, and loyalty programs. Clean design, strong copy, and segmentation ensure your emails get opened and drive action.',
    },
    {
      id: 'ppc-management',
      title: 'PPC Management',
      image: '/PPC infographic.webp',
      content: 'Get in front of high-intent users with paid search and display. We manage Google Ads, Microsoft Advertising, and social ad campaigns—from keyword research and ad copy to landing pages and conversion tracking. Our focus is lower cost per acquisition and scalable growth.',
    },
    {
      id: 'seo-services',
      title: 'SEO Services',
      image: '/SEO-marketing-company.webp',
      content: 'Grow organic traffic and visibility in search. We handle technical SEO, on-page optimization, content strategy, and link building so your site ranks for the terms that matter. Sustainable SEO builds long-term authority and brings qualified visitors without ongoing ad spend.',
    },
  ];

  const faqs = [
    { question: 'What digital marketing services do you offer?', answer: 'We offer Social Media marketing, Campaign Management, Email Marketing, PPC (Pay-Per-Click) Management, and SEO Services. We can combine these into a full-funnel strategy or focus on specific channels based on your goals.' },
    { question: 'How do you measure success?', answer: 'We define KPIs with you—such as traffic, leads, conversions, and ROI—and use analytics and reporting tools to track performance. You get regular reports and clear insights so you always know how your campaigns are performing.' },
    { question: 'How long until we see results?', answer: 'Paid and social campaigns can show results within weeks. SEO and organic growth typically take 3–6 months to show meaningful improvement. We set realistic timelines during our initial strategy discussion.' },
    { question: 'Do you work with small businesses?', answer: 'Yes. We work with businesses of all sizes. We tailor scope and budget to your needs—whether you want a single service or a full digital marketing package.' },
    { question: 'Can we start with one service and add more later?', answer: 'Absolutely. Many clients start with one channel (e.g. SEO or PPC) and expand to social, email, or full campaign management as they grow. We make it easy to scale with you.' },
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

      {/* Hero Section - Main page Digital Marketing */}
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
            <source src="/BG1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-dim-grey-900/92 via-dim-grey-900/75 to-dim-grey-900/55" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Digital <span className="text-onyx-400">Marketing</span> that grows your business
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-10 text-white/90">
            Social Media, Campaign Management, Email Marketing, PPC, and SEO—all under one roof. We turn strategy into results.
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
            In a world where most buying decisions start online, a strong digital strategy is no longer optional—it&apos;s essential. Here&apos;s why partnering with a digital marketing agency matters.
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
                src="/eCommerce-Development-and-Digita.webp"
                alt="Digital marketing impact"
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
            From social and email to paid ads and SEO—we deliver the full mix so your brand gets seen, remembered, and chosen.
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
            Talk to us about your goals
          </h2>
          <p className={`text-center text-lg mb-10 transition-colors duration-300 ${darkMode ? 'text-dim-grey-400' : 'text-dim-grey-600'}`}>
            Tell us about your business and which services you&apos;re interested in. We&apos;ll get back with a tailored plan.
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
                    <option value="social-media">Social Media</option>
                    <option value="campaign-management">Campaign Management</option>
                    <option value="email-marketing">Email Marketing</option>
                    <option value="ppc">PPC Management</option>
                    <option value="seo">SEO Services</option>
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
                    placeholder="Your goals and what you'd like to achieve..."
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
