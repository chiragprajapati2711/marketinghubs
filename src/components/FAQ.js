'use client';

import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function FAQ({ faqs, title = 'Frequently Asked Questions' }) {
  const { darkMode } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      darkMode ? 'bg-dim-grey-900' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 transition-colors duration-300 ${
          darkMode ? 'text-white' : 'text-dim-grey-900'
        }`}>
          {title}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl transition-all duration-300 ${
                darkMode ? 'bg-dim-grey-800' : 'bg-white shadow-lg'
              } ${openIndex === index ? 'shadow-xl' : ''}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-300 ${
                  darkMode ? 'hover:bg-dim-grey-700' : 'hover:bg-dim-grey-50'
                }`}
              >
                <h3 className={`text-lg md:text-xl font-semibold pr-8 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-dim-grey-900'
                }`}>
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  } ${darkMode ? 'text-dim-grey-400' : 'text-dim-grey-600'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`px-6 pb-4 transition-colors duration-300 ${
                  darkMode ? 'text-dim-grey-300' : 'text-dim-grey-600'
                }`}>
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
