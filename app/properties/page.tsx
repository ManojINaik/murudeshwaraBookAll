'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { allProviders } from '@/data/providers';
import { Provider } from '@/types';
import { Star } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

// Helper function to generate WhatsApp booking link
const generateWhatsAppLink = (provider: Provider): string => {
  const phone = provider.contact.whatsapp || provider.contact.phone;
  const cleanPhone = phone.replace(/[^0-9]/g, '');

  const googleMapsLink = `https://www.google.com/maps/place/${provider.name}/@${provider.location.coordinates.lat},${provider.location.coordinates.lng}`;
  const message = `Hi, I would like to book ${provider.name} in Murudeshwar. Here's the Google Maps link: ${googleMapsLink}`;
  const encodedMessage = encodeURIComponent(message);

  return `https://api.whatsapp.com/send/?phone=${cleanPhone}&text=${encodedMessage}&type=phone_number&app_absent=0`;
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

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Initialize search term from URL parameter
  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams]);

  // Filter providers based on search and category
  const filteredProviders = allProviders.filter((provider: Provider) => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || provider.type === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', label: 'All Properties' },
    { id: 'hotel', label: 'Hotels & Stays' },
    { id: 'restaurant', label: 'Restaurants' },
    { id: 'scuba', label: 'Scuba Diving' },
    { id: 'boating', label: 'Boating' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-primary-50 pt-24 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              All <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">Properties</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Browse all hotels, restaurants, and activities in Murudeshwar
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or description..."
              className="w-full max-w-2xl mx-auto block px-6 py-4 rounded-2xl border-2 border-neutral-200 focus:border-primary-500 focus:outline-none shadow-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-primary-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-neutral-600 mb-6">
            Showing {filteredProviders.length} {filteredProviders.length === 1 ? 'property' : 'properties'}
          </p>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProviders.map((provider: Provider) => {
              const pricing = getPrice(provider);
              return (
                <div
                  key={provider.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={provider.images[0]?.url}
                      alt={provider.images[0]?.alt || provider.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    {provider.isInstantConfirm && (
                      <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1.5 rounded-full font-bold">
                        Instant confirm
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-neutral-700">
                        {provider.rating.average}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-neutral-900 mb-2 line-clamp-1">
                      {provider.name}
                    </h3>

                    <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                      {provider.shortDescription}
                    </p>

                    {/* Reviews */}
                    <div className="flex items-center gap-2 mb-3 text-sm text-neutral-500">
                      <span>{provider.rating.count} reviews</span>
                      <span>•</span>
                      <span>{provider.location.distanceFromTemple} km from temple</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-xl font-bold text-neutral-900">
                        {formatPrice(pricing.amount)}
                      </span>
                      <span className="text-sm text-neutral-600 ml-1">
                        / {pricing.unit}
                      </span>
                    </div>

                    {/* Book Button */}
                    <a
                      href={generateWhatsAppLink(provider)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors text-center"
                    >
                      Book now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredProviders.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-neutral-600">No properties found matching your search.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
