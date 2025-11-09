'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: 'Hotels', href: '/properties?type=hotel' },
    { name: 'Restaurants', href: '/properties?type=restaurant' },
    { name: 'Scuba Diving', href: '/properties?type=scuba' },
    { name: 'Boating', href: '/properties?type=boating' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className={`
        max-w-6xl mx-auto transition-all duration-500 ease-out
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border border-white/20' 
          : 'bg-white/90 backdrop-blur-md shadow-soft border border-white/30'
        }
        rounded-2xl
      `}>
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="h-10 flex items-center transition-all duration-300 group-hover:scale-105">
                <img 
                  src="/book-murudeshwar-logo.png" 
                  alt="Book Murudeshwar" 
                  className="h-10 w-auto"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1 bg-primary-50/50 rounded-xl p-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 rounded-lg hover:bg-white/80 transition-all duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute inset-x-1 bottom-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Contact & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <a
                href="tel:+917829008264"
                className="hidden md:flex items-center space-x-2 px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 bg-primary-50/50 hover:bg-white/80 rounded-lg transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>+91 7829008264</span>
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2.5 text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-lg transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-out
            ${isMenuOpen ? 'max-h-80 pb-6' : 'max-h-0'}
          `}>
            <div className="pt-4 border-t border-primary-100/50">
              <nav className="grid gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 text-neutral-700 hover:text-primary-600 font-medium hover:bg-primary-50/50 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="tel:+917829008264"
                  className="flex items-center space-x-3 px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-lg transition-all duration-300 mt-2 border-t border-primary-100/50 pt-4"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+91 7829008264</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 