'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { useTheme } from '@/contexts/ThemeContext';

export default function ContactPage() {
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      info: 'hello@marketinghubs.com',
      description: 'Send us an email anytime',
    },
    {
      icon: '📞',
      title: 'Phone',
      info: '+1 (555) 123-4567',
      description: 'Mon-Fri 9am-6pm EST',
    },
    {
      icon: '📍',
      title: 'Office',
      info: '123 Marketing St, Suite 100',
      description: 'New York, NY 10001',
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
            Get in <span className="bg-gradient-to-r from-onyx-600 via-onyx-500 to-ash-grey-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-dim-grey-300' : 'text-dim-grey-600'
          }`}>
            Have a question or ready to start your next marketing campaign? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`p-8 rounded-2xl transition-all duration-300 ${
                darkMode ? 'bg-dim-grey-800' : 'bg-white shadow-xl'
            }`}>
              <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-dim-grey-900'
              }`}>
                Send us a Message
              </h2>
              
              {submitted ? (
                <div className={`p-6 rounded-lg mb-6 transition-all duration-300 ${
                  darkMode ? 'bg-green-900/30 border border-green-700' : 'bg-green-50 border border-green-200'
                }`}>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className={`font-semibold transition-colors duration-300 ${
                      darkMode ? 'text-green-400' : 'text-green-800'
                    }`}>
                      Thank you! We'll get back to you soon.
                    </p>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block mb-2 font-medium transition-colors duration-300 ${
                      darkMode ? 'text-dim-grey-300' : 'text-dim-grey-700'
                    }`}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                        darkMode
                          ? 'bg-dim-grey-700 border-dim-grey-600 text-white placeholder-dim-grey-400 focus:border-onyx-500'
                          : 'bg-white border-dim-grey-300 text-dim-grey-900 placeholder-dim-grey-500 focus:border-onyx-500'
                      } focus:outline-none focus:ring-2 focus:ring-onyx-500/20`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className={`block mb-2 font-medium transition-colors duration-300 ${
                      darkMode ? 'text-dim-grey-300' : 'text-dim-grey-700'
                    }`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                        darkMode
                          ? 'bg-dim-grey-700 border-dim-grey-600 text-white placeholder-dim-grey-400 focus:border-onyx-500'
                          : 'bg-white border-dim-grey-300 text-dim-grey-900 placeholder-dim-grey-500 focus:border-onyx-500'
                      } focus:outline-none focus:ring-2 focus:ring-onyx-500/20`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block mb-2 font-medium transition-colors duration-300 ${
                      darkMode ? 'text-dim-grey-300' : 'text-dim-grey-700'
                    }`}>
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                        darkMode
                          ? 'bg-dim-grey-700 border-dim-grey-600 text-white placeholder-dim-grey-400 focus:border-onyx-500'
                          : 'bg-white border-dim-grey-300 text-dim-grey-900 placeholder-dim-grey-500 focus:border-onyx-500'
                      } focus:outline-none focus:ring-2 focus:ring-onyx-500/20`}
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className={`block mb-2 font-medium transition-colors duration-300 ${
                      darkMode ? 'text-dim-grey-300' : 'text-dim-grey-700'
                    }`}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                        darkMode
                          ? 'bg-dim-grey-700 border-dim-grey-600 text-white placeholder-dim-grey-400 focus:border-onyx-500'
                          : 'bg-white border-dim-grey-300 text-dim-grey-900 placeholder-dim-grey-500 focus:border-onyx-500'
                      } focus:outline-none focus:ring-2 focus:ring-onyx-500/20`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block mb-2 font-medium transition-colors duration-300 ${
                    darkMode ? 'text-dim-grey-300' : 'text-dim-grey-700'
                  }`}>
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-onyx-500/20`}
                  >
                    <option value="">Select a service</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="ppc">PPC Advertising</option>
                    <option value="meta-ads">Meta Ads</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="ecommerce">Ecommerce Marketing</option>
                  </select>
                </div>

                <div>
                  <label className={`block mb-2 font-medium transition-colors duration-300 ${
                    darkMode ? 'text-dim-grey-300' : 'text-dim-grey-700'
                  }`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      darkMode
                        ? 'bg-dim-grey-700 border-dim-grey-600 text-white placeholder-dim-grey-400 focus:border-onyx-500'
                        : 'bg-white border-dim-grey-300 text-dim-grey-900 placeholder-dim-grey-500 focus:border-onyx-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brick-ember-500 to-brick-ember-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-dim-grey-900'
                }`}>
                  Contact Information
                </h2>
                <p className={`text-lg mb-8 transition-colors duration-300 ${
                  darkMode ? 'text-dim-grey-300' : 'text-dim-grey-600'
                }`}>
                  Choose the method that works best for you. We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                      darkMode ? 'bg-dim-grey-800 hover:bg-dim-grey-700' : 'bg-white shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="text-4xl mr-4">{method.icon}</div>
                      <div>
                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                          darkMode ? 'text-white' : 'text-dim-grey-900'
                        }`}>
                          {method.title}
                        </h3>
                        <p className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                          darkMode ? 'text-onyx-400' : 'text-onyx-600'
                        }`}>
                          {method.info}
                        </p>
                        <p className={`transition-colors duration-300 ${
                          darkMode ? 'text-dim-grey-400' : 'text-dim-grey-600'
                        }`}>
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className={`p-6 rounded-xl transition-all duration-300 ${
                darkMode ? 'bg-gray-800' : 'bg-blue-50'
              }`}>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-dim-grey-900'
                }`}>
                  Office Hours
                </h3>
                <div className={`space-y-2 transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={[
        {
          question: 'How quickly will you respond to my inquiry?',
          answer: 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly at +1 (555) 123-4567.',
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes! We offer free 30-minute consultations to discuss your marketing needs and how we can help. Schedule one through our contact form or by calling us.',
        },
        {
          question: 'What information should I include in my contact form?',
          answer: 'Please include your business name, industry, current marketing challenges, goals, budget range, and any specific services you\'re interested in. The more details you provide, the better we can assist you.',
        },
        {
          question: 'Can I visit your office?',
          answer: 'Yes! We welcome in-person meetings. Please contact us to schedule an appointment. Our office is located at 123 Marketing St, Suite 100, New York, NY 10001.',
        },
        {
          question: 'Do you work with clients outside the US?',
          answer: 'Yes, we work with clients globally. While our office hours are EST, we accommodate clients in different time zones and can schedule calls accordingly.',
        },
        {
          question: 'What happens after I submit the contact form?',
          answer: 'After you submit the form, our team will review your information and contact you within 24 hours to discuss your needs, answer questions, and provide a customized proposal.',
        },
      ]} />

      <Footer />
    </div>
  );
}
