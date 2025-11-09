const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../data/providers-master.json');
const allProviders = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

// Sort providers by rating and review count
function scoreProvider(p) {
  return (p.rating.average * 100) + (p.rating.count / 10);
}

// Get top providers from each category
const hotels = allProviders
  .filter(p => p.type === 'hotel')
  .sort((a, b) => scoreProvider(b) - scoreProvider(a))
  .slice(0, 50); // Top 50 hotels

const restaurants = allProviders
  .filter(p => p.type === 'restaurant')
  .sort((a, b) => scoreProvider(b) - scoreProvider(a))
  .slice(0, 15); // Top 15 restaurants

const scubaOperators = allProviders
  .filter(p => p.type === 'scuba')
  .sort((a, b) => scoreProvider(b) - scoreProvider(a))
  .slice(0, 10); // Top 10 scuba operators

const boatingOperators = allProviders
  .filter(p => p.type === 'boating')
  .sort((a, b) => scoreProvider(b) - scoreProvider(a))
  .slice(0, 10); // Top 10 boating operators

console.log(`Selected top providers:`);
console.log(`Hotels: ${hotels.length} (from ${allProviders.filter(p => p.type === 'hotel').length})`);
console.log(`Restaurants: ${restaurants.length} (from ${allProviders.filter(p => p.type === 'restaurant').length})`);
console.log(`Scuba: ${scubaOperators.length} (from ${allProviders.filter(p => p.type === 'scuba').length})`);
console.log(`Boating: ${boatingOperators.length} (from ${allProviders.filter(p => p.type === 'boating').length})`);
console.log(`Total: ${hotels.length + restaurants.length + scubaOperators.length + boatingOperators.length}`);

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

// Hotels data from CSV - Top ${hotels.length} rated properties
const hotels: Hotel[] = ${JSON.stringify(hotels, null, 2).replace(/"hotelAmenities\.slice\(0, \d+\)"/g, match => match.slice(1, -1))};

// Restaurants data from CSV - Top ${restaurants.length} rated
const restaurants: Restaurant[] = ${JSON.stringify(restaurants, null, 2)};

// Scuba Operators data from CSV - Top ${scubaOperators.length} rated
const scubaOperators: ScubaOperator[] = ${JSON.stringify(scubaOperators, null, 2)};

// Boating Operators data from CSV
const boatingOperators: BoatingOperator[] = ${JSON.stringify(boatingOperators, null, 2)};

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
console.log(`\nTypeScript providers file generated: ${outputPath}`);
console.log(`\nTop 5 hotels by score:`);
hotels.slice(0, 5).forEach(h => {
  console.log(`  - ${h.name} (${h.rating.average}★, ${h.rating.count} reviews)`);
});
