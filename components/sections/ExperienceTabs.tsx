'use client';

import { useState } from 'react';
import { Hotel, UtensilsCrossed, Waves, Ship, MapPin, Star, TrendingUp, ArrowRight } from 'lucide-react';

const tabs = [
  { 
    id: 'hotels', 
    label: 'Hotels', 
    count: '12 places',
    icon: Hotel,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    description: 'Luxury stays & beach resorts'
  },
  { 
    id: 'restaurants', 
    label: 'Restaurants', 
    count: '8 places',
    icon: UtensilsCrossed,
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50',
    description: 'Authentic coastal cuisine'
  },
  { 
    id: 'scuba-diving', 
    label: 'Scuba diving', 
    count: '4 operators',
    icon: Waves,
    color: 'from-teal-500 to-cyan-600',
    bgColor: 'bg-teal-50',
    description: 'Underwater adventures'
  },
  { 
    id: 'boating', 
    label: 'Boating', 
    count: '3 services',
    icon: Ship,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
    description: 'Coastal boat rides'
  },
];

export function ExperienceTabs() {
  const [activeTab, setActiveTab] = useState('hotels');
  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-60 h-60 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl animate-wave" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section with Modern Design */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm mb-8 border border-primary-100">
            <MapPin className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-900">Discover Murudeshwar</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-neutral-900 mb-6 leading-tight animate-fade-up">
            Find your perfect{' '}
            <span className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              stay
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Explore handpicked accommodations, dining experiences, and adventures 
            along Karnataka's stunning coastline
          </p>
        </div>

        {/* Modern Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-primary-900 shadow-soft'
                    : 'bg-white/50 backdrop-blur-sm text-neutral-600 hover:bg-white/80 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    isActive 
                      ? `bg-gradient-to-br ${tab.color} text-white` 
                      : `${tab.bgColor} text-neutral-500`
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">{tab.label}</div>
                    <div className="text-sm opacity-70">{tab.count}</div>
                  </div>
                </div>
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary-600 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Cards - Modern Grid Layout */}
        <div className="max-w-6xl mx-auto animate-fade-up">
          {activeTabData && (
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Display Cards - 3 Featured Items */}
                {[1, 2, 3].map((item) => (
                  <div 
                    key={item} 
                    className="bg-white rounded-2xl shadow-card overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                  >
                    {/* Card Image */}
                    <div className="h-56 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${activeTabData.color} opacity-80`} />
                      <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500">
                        <img 
                          src="/MurudeshwarHero.png" 
                          alt={`${activeTabData.label} in Murudeshwar`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                      <div className="absolute inset-0 flex items-end p-6">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {activeTabData.label} {item}
                          </h3>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <Star className="w-4 h-4 fill-yellow-100 text-yellow-100" />
                            <span className="text-white text-xs ml-1">(120+)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="w-4 h-4 text-primary-600" />
                        <span className="text-sm text-neutral-600">5 min from Murudeshwar Temple</span>
                      </div>
                      
                      <p className="text-neutral-600 mb-4">
                        {activeTabData.description} with stunning views and exceptional service.
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-neutral-500">From</span>
                          <span className="text-xl font-bold text-neutral-900 ml-2">₹1,899</span>
                        </div>
                        
                        <button className={`px-4 py-2 rounded-xl bg-gradient-to-r ${activeTabData.color} text-white font-medium hover:shadow-lg transition-all duration-300`}>
                          View details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <button className="bg-white px-8 py-3 rounded-xl shadow-sm border border-primary-100 text-primary-800 font-medium hover:shadow-md hover:bg-primary-50 transition-all duration-300 flex items-center gap-2 mx-auto">
                  View all {activeTabData.count}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Modern Trust Indicators */}
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-primary-50 py-8 px-6">
            <p className="text-sm text-neutral-500 mb-6">Trusted by thousands of travelers</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-yellow-50 rounded-full">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="font-semibold text-neutral-800">4.8+ Rating</span>
              </div>
              <div className="w-px h-10 bg-neutral-200 hidden md:block" />
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary-50 rounded-full">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <span className="font-semibold text-neutral-800">27+ Locations</span>
              </div>
              <div className="w-px h-10 bg-neutral-200 hidden md:block" />
              <div className="flex items-center gap-2">
                <div className="p-2 bg-green-50 rounded-full">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <span className="font-semibold text-neutral-800">10K+ Bookings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 