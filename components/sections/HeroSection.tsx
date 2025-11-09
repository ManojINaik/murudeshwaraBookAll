'use client';

import { useEffect, useRef } from 'react';
import { SearchHotels } from '@/components/search/SearchHotels';

export function HeroSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Hero Card */}
        <div className="relative w-full">
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <img
              src="/shiva-statue-7.png"
              alt="Murudeshwar Temple and Lord Shiva statue overlooking the Arabian Sea"
              className="absolute inset-0 w-full h-full object-cover object-center scale-75"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12">
              <div className="max-w-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Plan your perfect{' '}
                  <span className="block">Murudeshwar escape</span>
                </h1>
                
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Discover luxury stays, authentic dining, thrilling adventures, and serene boat rides 
                  along Karnataka's most beautiful coastline
                </p>
              </div>
              
              {/* Search Hotels Component - Full Width */}
              <div className="max-w-2xl w-full">
                <SearchHotels />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators - Full Width with Wide Spacing */}
        <div className="mt-16">
          <p className="text-sm text-neutral-500 mb-8 text-center">Trusted by leading platforms</p>
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex justify-between items-center px-8 md:px-16 lg:px-24 opacity-60">
              <div className="text-2xl md:text-3xl font-bold text-neutral-400">OYO</div>
              <div className="text-2xl md:text-3xl font-bold text-neutral-400">zomato</div>
              <div className="text-2xl md:text-3xl font-bold text-neutral-400">WSF</div>
              <div className="flex items-center gap-2 text-neutral-400">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-neutral-400 rounded-full"></div>
                <span className="font-semibold text-lg md:text-xl">Dreamz Diving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 