'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { allProviders } from '@/data/providers';
import { Provider } from '@/types';
import { formatPrice } from '@/lib/utils';

// Helper function to generate WhatsApp booking link
const generateWhatsAppLink = (provider: Provider): string => {
  const phone = provider.contact.whatsapp || provider.contact.phone;
  const cleanPhone = phone.replace(/[^0-9]/g, '');

  // Generate Google Maps link from coordinates
  const googleMapsLink = `https://www.google.com/maps/place/${provider.name}/@${provider.location.coordinates.lat},${provider.location.coordinates.lng}`;

  const message = `Hi, I would like to book ${provider.name} in Murudeshwar. Here's the Google Maps link: ${googleMapsLink}`;
  const encodedMessage = encodeURIComponent(message);

  return `https://api.whatsapp.com/send/?phone=${cleanPhone}&text=${encodedMessage}&type=phone_number&app_absent=0`;
};

export function ProviderGrid() {
  const [activeCategory, setActiveCategory] = useState('hotel');
  
  const filteredProviders = allProviders.filter((provider: Provider) => provider.type === activeCategory);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const getPrice = (provider: Provider): { amount: number; unit: string } => {
    switch (provider.type) {
      case 'hotel':
        return { 
          amount: provider.rooms[0]?.basePrice || 0, 
          unit: 'night' 
        };
      case 'restaurant':
        return { 
          amount: provider.averageCostForTwo, 
          unit: 'for two' 
        };
      case 'scuba':
        return { 
          amount: provider.packages[0]?.price || 0, 
          unit: 'person' 
        };
      case 'boating':
        return { 
          amount: provider.trips[0]?.price || 0, 
          unit: 'person' 
        };
      default:
        return { amount: 0, unit: 'unit' };
    }
  };

  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              Accommodations
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Handpicked stays offering the perfect blend of comfort and coastal charm
          </p>
        </div>

        {/* Neumorphic Provider Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProviders.map((provider: Provider) => {
            const pricing = getPrice(provider);
            return (
              <div
                key={provider.id}
                className="bg-primary-50 rounded-3xl shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300 transform hover:scale-105 p-2"
              >
                {/* Image Container with Neumorphism */}
                <div className="relative h-48 overflow-hidden rounded-3xl shadow-neumorphic-inset mb-4">
                  <img
                    src={provider.images[0]?.url}
                    alt={provider.images[0]?.alt || provider.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  {provider.isInstantConfirm && (
                    <div className="absolute top-4 left-4 bg-primary-50 shadow-neumorphic text-green-600 text-xs px-3 py-2 rounded-full font-bold">
                      Instant confirm
                    </div>
                  )}
                  {/* Neumorphic rating badge */}
                  <div className="absolute top-4 right-4 bg-primary-50 shadow-neumorphic px-3 py-2 rounded-full">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-neutral-700">
                        {provider.rating.average}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 pb-4">
                  <h3 className="font-bold text-xl text-neutral-900 mb-3 line-clamp-1">
                    {provider.name}
                  </h3>
                  
                  {/* Rating and Distance */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {renderStars(provider.rating.average)}
                    </div>
                    <div className="bg-primary-50 shadow-neumorphic-inset px-3 py-2 rounded-2xl">
                      <span className="text-sm text-neutral-600 font-bold">
                        {provider.location.distanceFromTemple} km
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-lg font-bold text-neutral-900">
                      {formatPrice(pricing.amount)}
                    </span>
                    <span className="text-sm text-neutral-600 ml-1">
                      / {pricing.unit}
                    </span>
                  </div>

                  {/* Book Now Button */}
                  <a
                    href={generateWhatsAppLink(provider)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-neutral-900 text-white py-3 rounded-xl font-semibold hover:bg-neutral-800 transition-colors text-center"
                  >
                    Book now
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link href="/properties">
            <button className="bg-primary-50 shadow-neumorphic hover:shadow-neumorphic-inset px-12 py-4 rounded-3xl font-bold text-xl text-neutral-700 transition-all duration-300 transform hover:scale-105">
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                View All Properties
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
} 