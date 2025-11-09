const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../data/providers-generated.json');
const providers = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

// Fix phone numbers
providers.forEach(p => {
  if (p.contact.phone && !p.contact.phone.startsWith('91')) {
    p.contact.phone = '91' + p.contact.phone.replace(/^0+/, '');
  }
  if (p.contact.whatsapp && !p.contact.whatsapp.startsWith('91')) {
    p.contact.whatsapp = '91' + p.contact.whatsapp.replace(/^0+/, '');
  }
});

const hotels = providers.filter(p => p.type === 'hotel');
const restaurants = providers.filter(p => p.type === 'restaurant');
const scubaOperators = providers.filter(p => p.type === 'scuba');

// Generate TypeScript file
let tsContent = `import { Provider, Hotel, Restaurant, ScubaOperator, BoatingOperator, Amenity } from '@/types';

// Common amenities
const hotelAmenities: Amenity[] = [
  { id: 'wifi', name: 'Free WiFi', icon: 'wifi', category: 'basic' },
  { id: 'ac', name: 'Air Conditioning', icon: 'snowflake', category: 'basic' },
  { id: 'parking', name: 'Free Parking', icon: 'car', category: 'basic' },
  { id: 'restaurant', name: 'Restaurant', icon: 'utensils', category: 'basic' },
  { id: 'pool', name: 'Swimming Pool', icon: 'waves', category: 'premium' },
  { id: 'spa', name: 'Spa & Wellness', icon: 'flower', category: 'premium' },
  { id: 'gym', name: 'Fitness Center', icon: 'dumbbell', category: 'premium' },
  { id: 'beach', name: 'Beach Access', icon: 'umbrella', category: 'premium' },
  { id: 'security', name: '24/7 Security', icon: 'shield', category: 'safety' },
  { id: 'accessible', name: 'Wheelchair Accessible', icon: 'accessibility', category: 'accessibility' },
];

// Hotels data from CSV
const hotels: Hotel[] = ${JSON.stringify(hotels, null, 2).replace(/"hotelAmenities\.slice\(0, \d+\)"/g, match => match.slice(1, -1))};

// Restaurants data from CSV
const restaurants: Restaurant[] = ${JSON.stringify(restaurants, null, 2)};

// Scuba Operators data from CSV
const scubaOperators: ScubaOperator[] = ${JSON.stringify(scubaOperators, null, 2)};

// Boating Operators data (placeholder)
const boatingOperators: BoatingOperator[] = [];

// Combine all providers
export const allProviders: Provider[] = [
  ...hotels,
  ...restaurants,
  ...scubaOperators,
  ...boatingOperators
];

// Export individual arrays
export { hotels, restaurants, scubaOperators, boatingOperators };

// Export filtered providers by type
export const getProvidersByType = (type: string): Provider[] => {
  return allProviders.filter(provider => provider.type === type);
};

export const getProviderById = (id: string): Provider | undefined => {
  return allProviders.find(provider => provider.id === id);
};

export const getProviderBySlug = (slug: string): Provider | undefined => {
  return allProviders.find(provider => provider.slug === slug);
};
`;

const outputPath = path.join(__dirname, '../data/providers.ts');
fs.writeFileSync(outputPath, tsContent);
console.log(`TypeScript providers file generated: ${outputPath}`);
console.log(`Total providers: ${providers.length}`);
console.log(`Hotels: ${hotels.length}`);
console.log(`Restaurants: ${restaurants.length}`);
console.log(`Scuba operators: ${scubaOperators.length}`);
