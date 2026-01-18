'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';

export default function PricingPage() {
  const { darkMode } = useTheme();
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 999, annual: 9990 },
      description: 'Perfect for small businesses getting started',
      gradient: 'from-onyx-500 to-onyx-400',
      features: [
        'Up to 5 keywords tracked',
        'Monthly SEO reports',
        'Basic social media management',
        'Email support',
        'Google Analytics setup',
        '1 campaign per platform',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: { monthly: 2499, annual: 24990 },
      description: 'Ideal for growing businesses',
      gradient: 'from-brick-ember-500 to-brick-ember-600',
      features: [
        'Up to 20 keywords tracked',
        'Weekly SEO reports',
        'Full social media management',
        'Priority email & phone support',
        'Advanced analytics dashboard',
        '3 campaigns per platform',
        'PPC campaign management',
        'Content creation (4 posts/month)',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: { monthly: 4999, annual: 49990 },
      description: 'For large businesses with advanced needs',
      gradient: 'from-teal-500 to-emerald-500',
      features: [
        'Unlimited keywords',
        'Daily SEO reports',
        'Complete social media strategy',
        '24/7 dedicated support',
        'Custom analytics & reporting',
        'Unlimited campaigns',
        'Full PPC & Meta Ads management',
        'Content creation (20 posts/month)',
        'Dedicated account manager',
        'Custom integrations',
      ],
      popular: false,
    },
  ];

  const addOns = [
    {
      name: 'Ecommerce Marketing',
      price: 500,
      description: 'Specialized ecommerce optimization',
    },
    {
      name: 'Content Writing',
      price: 200,
      description: 'Per article/blog post',
    },
    {
      name: 'Video Production',
      price: 1500,
      description: 'Per video (up to 2 minutes)',
    },
    {
      name: 'Website Redesign',
      price: 5000,
      description: 'Complete website overhaul',
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
            Simple, Transparent <span className="bg-gradient-to-r from-onyx-600 via-onyx-500 to-ash-grey-600 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-8 transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Choose the plan that fits your business needs. All plans include our core services.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`font-medium transition-colors duration-300 ${
              darkMode ? 'text-dim-grey-300' : 'text-dim-grey-700'
            } ${billingCycle === 'monthly' ? 'opacity-100' : 'opacity-50'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
                  billingCycle === 'annual' ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium transition-colors duration-300 ${
              darkMode ? 'text-dim-grey-300' : 'text-dim-grey-700'
            } ${billingCycle === 'annual' ? 'opacity-100' : 'opacity-50'}`}>
              Annual <span className={`text-sm transition-colors duration-300 ${
                darkMode ? 'text-green-400' : 'text-green-600'
              }`}>(Save 17%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? darkMode
                      ? 'bg-dim-grey-800 ring-2 ring-brick-ember-500 scale-105'
                      : 'bg-white shadow-2xl ring-2 ring-brick-ember-500 scale-105'
                    : darkMode
                      ? 'bg-dim-grey-800'
                      : 'bg-white shadow-lg'
                } hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-brick-ember-500 to-brick-ember-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-dim-grey-900'
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-6 transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className={`text-5xl font-bold transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-dim-grey-900'
                    }`}>
                      ${plan.price[billingCycle].toLocaleString()}
                    </span>
                    <span className={`text-xl transition-colors duration-300 ${
                      darkMode ? 'text-dim-grey-400' : 'text-dim-grey-600'
                    }`}>
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className={`text-sm transition-colors duration-300 ${
                      darkMode ? 'text-green-400' : 'text-green-600'
                    }`}>
                      ${(plan.price.monthly * 12 - plan.price.annual).toLocaleString()} savings
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className={`w-6 h-6 mr-3 mt-0.5 flex-shrink-0 transition-colors duration-300 ${
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

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-brick-ember-500 to-brick-ember-600 text-white hover:shadow-xl'
                      : darkMode
                        ? 'bg-dim-grey-700 text-white hover:bg-dim-grey-600'
                        : 'bg-dim-grey-100 text-dim-grey-900 hover:bg-dim-grey-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode ? 'bg-dim-grey-800' : 'bg-dim-grey-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-dim-grey-900'
            }`}>
              Additional Services
            </h2>
            <p className={`text-xl transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Add these services to any plan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-dim-grey-700 hover:bg-dim-grey-600' : 'bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-dim-grey-900'
                }`}>
                  {addon.name}
                </h3>
                <p className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                  darkMode ? 'text-onyx-400' : 'text-onyx-600'
                }`}>
                  ${addon.price.toLocaleString()}
                </p>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={[
        {
          question: 'Can I change plans later?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated, so you only pay for what you use.',
        },
        {
          question: 'Do you offer custom pricing?',
          answer: 'Yes, we offer custom enterprise solutions for businesses with unique needs. Contact us to discuss your specific requirements and we\'ll create a tailored pricing plan.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, and wire transfers for annual plans. Monthly plans can be paid via credit card or PayPal.',
        },
        {
          question: 'Is there a setup fee?',
          answer: 'No setup fees for any of our plans. What you see is what you pay - transparent pricing with no hidden costs.',
        },
        {
          question: 'What happens if I cancel my subscription?',
          answer: 'You can cancel your subscription at any time. There are no cancellation fees, and you\'ll continue to have access to services until the end of your billing period.',
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a 30-day money-back guarantee for new clients. If you\'re not satisfied with our services within the first 30 days, we\'ll provide a full refund.',
        },
      ]} />

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
            Still Have Questions?
          </h2>
          <p className={`text-xl mb-10 transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-white/90'
          }`}>
            Our team is here to help you choose the right plan for your business.
          </p>
          <Link
            href="/contact"
            className={`inline-block px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-white text-dim-grey-900 hover:shadow-xl'
                  : 'bg-white text-brick-ember-600 hover:shadow-xl'
            }`}
          >
            Contact Sales
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
