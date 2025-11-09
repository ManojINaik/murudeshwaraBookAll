const fs = require('fs');
const path = require('path');

// CSV parsing function
function parseCSV(csvText) {
  const lines = csvText.split('\n').filter(line => line.trim());
  if (lines.length === 0) return [];

  const headers = lines[0].split(',');
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
      row[header.trim()] = values[index] || '';
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
  // Default coordinates if not found
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

// Determine provider category
function getCategory(mainCategory, categories) {
  const cat = (mainCategory + ' ' + categories).toLowerCase();
  if (cat.includes('luxury') || cat.includes('resort')) return 'luxury';
  if (cat.includes('budget') || cat.includes('lodge')) return 'budget';
  return 'mid-range';
}

// Generate provider from CSV row
function csvRowToProvider(row, type) {
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
    description: row.description || 'A great place to stay in Murudeshwar',
    shortDescription: row.description ? row.description.substring(0, 80) : 'Great accommodation',
    images: [
      {
        id: 'img-1',
        type: 'image',
        url: row.featured_image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
        alt: row.name || 'Property image',
        isPrimary: true
      }
    ],
    location: {
      coordinates: coords,
      address: row.address || 'Murudeshwar, Karnataka 581350',
      landmark: row.landmark || 'Near Murudeshwar Temple',
      distanceFromTemple: 0.5 + Math.random() * 2
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
    isInstantConfirm: Math.random() > 0.5,
    isVerified: true,
    tags: (row.review_keywords || '').split(',').map(k => k.trim()).filter(k => k).slice(0, 5),
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: new Date().toISOString()
  };

  // Add type-specific fields
  if (type === 'hotel') {
    provider.category = getCategory(row.main_category, row.categories);
    provider.amenities = 'hotelAmenities.slice(0, 6)';
    provider.rooms = [{
      id: 'room-1',
      name: 'Standard Room',
      description: 'Comfortable room with modern amenities',
      capacity: 2,
      bedType: 'Queen Bed',
      area: 250,
      images: [{ id: 'room-img-1', type: 'image', url: row.featured_image || 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800', alt: 'Room' }],
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
    provider.priceRange = 'mid-range';
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
  }

  return provider;
}

// Main function
async function generateProviders() {
  const csvDir = path.join(__dirname, '../public/csv');
  const providers = [];

  // Process accommodation files (hotels, homestays, lodges, resorts, guesthouses, rooms)
  const hotelFiles = ['allrooms.csv', 'allhomestay.csv', 'alllodges.csv', 'allresort.csv', 'allguesthouse.csv'];
  for (const file of hotelFiles) {
    const filePath = path.join(csvDir, file);
    if (fs.existsSync(filePath)) {
      const csvText = fs.readFileSync(filePath, 'utf-8');
      const rows = parseCSV(csvText);
      console.log(`Processing ${file}: ${rows.length} entries`);

      // Take top 20 from each file
      const topRows = rows.slice(0, 20);
      topRows.forEach(row => {
        if (row.name && row.place_id) {
          providers.push(csvRowToProvider(row, 'hotel'));
        }
      });
    }
  }

  // Process restaurants
  const restaurantFile = path.join(csvDir, 'allrestaurents.csv');
  if (fs.existsSync(restaurantFile)) {
    const csvText = fs.readFileSync(restaurantFile, 'utf-8');
    const rows = parseCSV(csvText);
    console.log(`Processing restaurants: ${rows.length} entries`);

    const topRows = rows.slice(0, 15);
    topRows.forEach(row => {
      if (row.name && row.place_id) {
        providers.push(csvRowToProvider(row, 'restaurant'));
      }
    });
  }

  // Process scuba diving
  const scubaFile = path.join(csvDir, 'allscubadiving.csv');
  if (fs.existsSync(scubaFile)) {
    const csvText = fs.readFileSync(scubaFile, 'utf-8');
    const rows = parseCSV(csvText);
    console.log(`Processing scuba: ${rows.length} entries`);

    const topRows = rows.slice(0, 10);
    topRows.forEach(row => {
      if (row.name && row.place_id) {
        providers.push(csvRowToProvider(row, 'scuba'));
      }
    });
  }

  console.log(`\nTotal providers generated: ${providers.length}`);
  console.log(`Hotels: ${providers.filter(p => p.type === 'hotel').length}`);
  console.log(`Restaurants: ${providers.filter(p => p.type === 'restaurant').length}`);
  console.log(`Scuba: ${providers.filter(p => p.type === 'scuba').length}`);

  // Write to file
  const outputPath = path.join(__dirname, '../data/providers-generated.json');
  fs.writeFileSync(outputPath, JSON.stringify(providers, null, 2));
  console.log(`\nGenerated providers saved to: ${outputPath}`);
}

generateProviders().catch(console.error);
