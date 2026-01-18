'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`${darkMode ? 'bg-dim-grey-900 text-dim-grey-300' : 'bg-dim-grey-900 text-dim-grey-300'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Big Brand Logo Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12 pb-8 border-b border-dim-grey-800 text-center">
          <svg 
            width="80" 
            height="80" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-[10vw] h-[10vw] max-w-[100px] max-h-[100px] text-white"
          >
            <path
              d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z"
              fill="currentColor" 
            />
          </svg>
          <div className="text-3xl md:text-9xl font-bold text-white text-center">Marketing Hubs</div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">About</h3>
            <p className="text-dim-grey-400">
              Your trusted partner for digital marketing success.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services#seo" className="hover:text-white transition-colors">SEO</Link></li>
              <li><Link href="/services#ppc" className="hover:text-white transition-colors">PPC</Link></li>
              <li><Link href="/services#meta-ads" className="hover:text-white transition-colors">Meta Ads</Link></li>
              <li><Link href="/services#social-media" className="hover:text-white transition-colors">Social Media</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>hello@marketinghubs.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-dim-grey-800 pt-8 text-center text-dim-grey-400">
          <p>&copy; 2024 Marketing Hubs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
