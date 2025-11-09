const fs = require('fs');
const path = require('path');

// CSV parsing function with proper quote handling
function parseCSV(csvText) {
  const lines = csvText.split('\n').filter(line => line.trim());
  if (lines.length === 0) return [];

  const headers = lines[0].split(',').map(h => h.trim());
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = [];
    let currentValue = '';
    let inQuotes = false;

    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j];

      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.trim());

    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    rows.push(row);
  }

  return rows;
}

// Extract coordinates from Google Maps link
function extractCoordinates(link) {
  const coordMatch = link.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
  if (coordMatch) {
    return { lat: parseFloat(coordMatch[1]), lng: parseFloat(coordMatch[2]) };
  }
  return { lat: 14.0945, lng: 74.4845 };
}

// Clean phone number
function cleanPhone(phone) {
  if (!phone) return '919876543210';
  const cleaned = phone.replace(/[^0-9]/g, '');
  if (cleaned.length === 10) return '91' + cleaned;
  if (cleaned.length === 12 && cleaned.startsWith('91')) return cleaned;
  return cleaned || '919876543210';
}

// Validate if string is a valid image URL
function isValidImageUrl(url) {
  if (!url || typeof url !== 'string') return false;
  return url.startsWith('http://') || url.startsWith('https://');
}

// Determine provider type from category
function getProviderType(category, mainCategory, categories) {
  const catStr = (category + ' ' + mainCategory + ' ' + categories).toLowerCase();

  if (catStr.includes('scuba') || catStr.includes('diving')) return 'scuba';
  if (catStr.includes('boat') || catStr.includes('jet ski') || catStr.includes('water sport')) return 'boating';
  if (catStr.includes('restaurant') || catStr.includes('cafe') || catStr.includes('food') || catStr.includes('dining')) return 'restaurant';
  if (catStr.includes('bike') || catStr.includes('rental') || catStr.includes('taxi')) return null; // Skip bikes/taxis

  // Default to hotel for accommodations
  return 'hotel';
}

// Determine hotel category
function getHotelCategory(mainCategory, categories) {
  const cat = (mainCategory + ' ' + categories).toLowerCase();
  if (cat.includes('luxury') || cat.includes('resort')) return 'luxury';
  if (cat.includes('budget') || cat.includes('lodge')) return 'budget';
  return 'mid-range';
}

// Generate provider from CSV row
function csvRowToProvider(row) {
  const type = getProviderType(row.category || '', row.main_category || '', row.categories || '');

  if (!type) return null; // Skip non-accommodation/restaurant/activity providers

  const coords = extractCoordinates(row.link || '');
  const avgRating = parseFloat(row.rating) || 4.0;
  const reviewCount = parseInt(row.reviews) || 0;

  // Calculate rating breakdown
  const breakdown = {
    5: Math.floor(reviewCount * 0.5),
    4: Math.floor(reviewCount * 0.3),
    3: Math.floor(reviewCount * 0.15),
    2: Math.floor(reviewCount * 0.04),
    1: Math.floor(reviewCount * 0.01)
  };

  const provider = {
    id: row.place_id || `${type}-${Math.random().toString(36).substr(2, 9)}`,
    type: type,
    name: row.name || 'Unknown',
    slug: (row.name || 'unknown').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    description: row.description || 'A great place in Murudeshwar',
    shortDescription: (row.description || 'Great accommodation').substring(0, 80),
    images: [
      {
        id: 'img-1',
        type: 'image',
        url: isValidImageUrl(row.featured_image) ? row.featured_image : 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
        alt: row.name || 'Property image',
        isPrimary: true
      }
    ],
    location: {
      coordinates: coords,
      address: row.address || 'Murudeshwar, Karnataka 581350',
      landmark: 'Near Murudeshwar Temple',
      distanceFromTemple: parseFloat((0.5 + Math.random() * 2).toFixed(2))
    },
    contact: {
      phone: cleanPhone(row.phone),
      whatsapp: cleanPhone(row.phone),
      website: row.website || undefined
    },
    rating: {
      average: avgRating,
      count: reviewCount,
      breakdown: breakdown
    },
    isInstantConfirm: avgRating >= 4.5,
    isVerified: true,
    tags: (row.review_keywords || '').split(',').map(k => k.trim()).filter(k => k).slice(0, 5),
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: new Date().toISOString()
  };

  // Add type-specific fields
  if (type === 'hotel') {
    provider.category = getHotelCategory(row.main_category, row.categories);
    provider.amenities = 'hotelAmenities.slice(0, 6)';
    provider.rooms = [{
      id: 'room-1',
      name: 'Standard Room',
      description: 'Comfortable room with modern amenities',
      capacity: 2,
      bedType: 'Queen Bed',
      area: 250,
      images: [{ id: 'room-img-1', type: 'image', url: isValidImageUrl(row.featured_image) ? row.featured_image : 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800', alt: 'Room' }],
      amenities: 'hotelAmenities.slice(0, 4)',
      basePrice: 2000 + Math.floor(Math.random() * 5000),
      taxes: 360,
      availability: true
    }];
    provider.checkInTime = '14:00';
    provider.checkOutTime = '11:00';
    provider.policies = {
      cancellation: 'Free cancellation up to 24 hours before check-in',
      children: 'Children under 10 stay free',
      pets: 'Pets not allowed',
      smoking: 'Non-smoking property'
    };
    provider.nearbyAttractions = ['Murudeshwar Temple', 'Beach', 'Local Markets'];
  } else if (type === 'restaurant') {
    provider.cuisine = ['South Indian', 'North Indian'];
    provider.mealTypes = ['lunch', 'dinner'];
    provider.priceRange = avgRating >= 4.0 ? 'mid-range' : 'budget';
    provider.openingHours = {
      monday: { open: '11:00', close: '22:00', isOpen: true },
      tuesday: { open: '11:00', close: '22:00', isOpen: true },
      wednesday: { open: '11:00', close: '22:00', isOpen: true },
      thursday: { open: '11:00', close: '22:00', isOpen: true },
      friday: { open: '11:00', close: '22:00', isOpen: true },
      saturday: { open: '11:00', close: '22:00', isOpen: true },
      sunday: { open: '11:00', close: '22:00', isOpen: true }
    };
    provider.features = ['Family Friendly', 'Good Food', 'Clean'];
    provider.menu = [];
    provider.averageCostForTwo = 500 + Math.floor(Math.random() * 1500);
  } else if (type === 'scuba') {
    provider.certifications = ['PADI', 'SSI'];
    provider.languages = ['English', 'Hindi', 'Kannada'];
    provider.experience = 5 + Math.floor(Math.random() * 10);
    provider.packages = [{
      id: 'pkg-1',
      name: 'Discover Scuba',
      description: 'Perfect for beginners',
      duration: 4,
      depth: 12,
      difficulty: 'beginner',
      includes: ['Equipment', 'Instructor', 'Lunch'],
      excludes: ['Transport'],
      price: 3000 + Math.floor(Math.random() * 2000),
      groupSize: { min: 2, max: 8 },
      images: []
    }];
    provider.equipment = ['BCDs', 'Regulators', 'Wetsuits', 'Masks'];
    provider.safetyRecord = 'Excellent safety record';
    provider.diveSites = ['Netrani Island'];
  } else if (type === 'boating') {
    provider.boatTypes = ['Speed Boat', 'Jet Ski'];
    provider.capacity = { min: 2, max: 10 };
    provider.trips = [{
      id: 'trip-1',
      name: 'Coastal Tour',
      description: 'Scenic coastal boat ride',
      duration: 2,
      capacity: 8,
      includes: ['Life Jackets', 'Guide'],
      route: ['Murudeshwar Beach', 'Coastal Views', 'Return'],
      price: 1000 + Math.floor(Math.random() * 1500),
      timeSlots: ['09:00', '11:00', '14:00', '16:00'],
      images: []
    }];
    provider.safetyEquipment = ['Life Jackets', 'First Aid Kit'];
    provider.licenses = ['Tourist Operator License'];
  }

  return provider;
}

// Main function
async function generateProviders() {
  const csvPath = path.join(__dirname, '../public/csv/all_murudeshwar_listings.csv');

  if (!fs.existsSync(csvPath)) {
    console.error('CSV file not found:', csvPath);
    return;
  }

  const csvText = fs.readFileSync(csvPath, 'utf-8');
  const rows = parseCSV(csvText);

  console.log(`Total rows in CSV: ${rows.length}`);

  const providers = [];
  const typeCount = { hotel: 0, restaurant: 0, scuba: 0, boating: 0, skipped: 0 };

  rows.forEach((row, index) => {
    if (row.name && row.place_id) {
      const provider = csvRowToProvider(row);
      if (provider) {
        providers.push(provider);
        typeCount[provider.type]++;
      } else {
        typeCount.skipped++;
      }
    }
  });

  console.log(`\nProviders generated:`);
  console.log(`Hotels: ${typeCount.hotel}`);
  console.log(`Restaurants: ${typeCount.restaurant}`);
  console.log(`Scuba operators: ${typeCount.scuba}`);
  console.log(`Boating operators: ${typeCount.boating}`);
  console.log(`Skipped: ${typeCount.skipped}`);
  console.log(`Total: ${providers.length}`);

  // Write to JSON file
  const outputPath = path.join(__dirname, '../data/providers-master.json');
  fs.writeFileSync(outputPath, JSON.stringify(providers, null, 2));
  console.log(`\nGenerated providers saved to: ${outputPath}`);

  return providers;
}

generateProviders().catch(console.error);
