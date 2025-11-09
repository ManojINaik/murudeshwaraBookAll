'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export function SearchHotels() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [animateGlow, setAnimateGlow] = useState(false);

  // Add pulsing effect on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateGlow(true);
      setTimeout(() => setAnimateGlow(false), 1500);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = () => {
    // Handle the hotel search functionality
    console.log('Searching for hotels in Murudeshwar:', searchTerm);
    // Here you would typically redirect to a search results page or filter results
  };

  // Placeholder suggestions that could be populated from an API
  const suggestions = [
    'Kamath Yatri Nivas',
    'RNS Residency',
    'Aryan Residency',
    'Temple View Rooms',
    'Beach Resorts'
  ];

  return (
    <div 
      className={`
        relative w-full bg-white/90 backdrop-blur-xl 
        shadow-[0_10px_50px_rgba(8,112,184,0.1)] rounded-[24px] p-3.5
        border border-white/70 transition-all duration-500 overflow-hidden
        ${isFocused ? 'shadow-[0_10px_60px_rgba(8,112,184,0.25)] scale-[1.01]' : ''}
        ${isHovering && !isFocused ? 'shadow-[0_15px_55px_rgba(8,112,184,0.15)] scale-[1.005]' : ''}
        ${animateGlow ? 'shadow-[0_0px_80px_10px_rgba(79,70,229,0.15)]' : ''}
      `}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
      
      <form 
        className="relative flex flex-col md:flex-row items-center z-10"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
          setAnimateGlow(true);
          setTimeout(() => setAnimateGlow(false), 1500);
        }}
      >
        <div className="flex-grow relative w-full">
          <div className={`
            group relative flex items-center bg-white/80 backdrop-filter backdrop-blur-sm
            rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.03)]
            transition-all duration-300 ease-in-out
            ${isFocused ? 'bg-primary-50/60 shadow-[0_4px_20px_rgba(79,70,229,0.1)]' : ''}
          `}>
            <div className={`
              absolute left-5 top-1/2 transform -translate-y-1/2
              transition-all duration-300 ease-in-out
              ${isFocused ? 'text-primary-700 scale-110' : 'text-primary-500'}
            `}>
              <Search className="w-5 h-5" strokeWidth={2.2} />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Find your perfect stay in Murudeshwar"
              className="w-full py-5 pl-14 pr-[100px] text-[17px] tracking-tight font-medium 
                bg-transparent rounded-2xl text-neutral-800 focus:outline-none
                placeholder:text-neutral-400 placeholder:transition-opacity
                placeholder:opacity-80 focus:placeholder:opacity-50"
              aria-label="Search hotels in Murudeshwar"
            />
            <div className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 
                items-center text-xs font-medium text-neutral-500 
                bg-neutral-100/90 backdrop-blur-sm px-3 py-1.5 rounded-full
                border border-neutral-200/50">
              <MapPin className="w-3.5 h-3.5 mr-1 text-primary-600" />
              <span>Murudeshwar</span>
            </div>
          </div>
          
          {/* Animated suggestions */}
          {isFocused && !searchTerm && (
            <div className="absolute top-full left-0 right-0 mt-3 p-5 bg-white/95 backdrop-blur-md 
                rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-neutral-100 z-10
                transform origin-top transition-all duration-200 ease-out animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-medium text-neutral-500">Popular searches</p>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSearchTerm(suggestion)}
                    className="px-3.5 py-2 bg-neutral-50 hover:bg-primary-50 
                      text-sm text-neutral-700 rounded-full transition-all duration-200
                      hover:text-primary-700 hover:shadow-sm border border-neutral-100/80
                      hover:border-primary-100 active:scale-95"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <button 
          type="submit"
          className={`
            group relative overflow-hidden
            bg-gradient-to-br from-primary-500 to-primary-600
            hover:from-primary-600 hover:to-primary-700
            text-white py-4.5 px-8 md:px-10 rounded-xl font-medium
            transition-all duration-300 md:ml-4 mt-3.5 md:mt-0 w-full md:w-auto
            flex items-center justify-center shadow-lg
            shadow-primary-500/20 hover:shadow-primary-500/30
            active:scale-[0.98]
          `}
          aria-label="Search for hotels"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent 
            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-650"></div>
          <span className="relative flex items-center">
            <span className="mr-2">Find Hotels</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </span>
        </button>
      </form>
    </div>
  );
} 