import { Provider, Hotel, Restaurant, ScubaOperator, BoatingOperator, Amenity } from '@/types';

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

// Hotels data - Real data from CSV
const hotels: Hotel[] = [
  {
    id: 'ChIJtdOI5ttGvDsRvc9gcrVbLtA',
    type: 'hotel',
    name: 'RNS Residency',
    slug: 'rns-residency',
    description: 'Temple side property with beautiful views of the Arabian Sea',
    shortDescription: 'Temple side property with sea views',
    category: 'mid-range',
    images: [
      {
        id: 'img1',
        type: 'image',
        url: 'https://lh3.ggpht.com/p/AF1QipMhFIfVI7tv2p3LdI3t7aXCe6e3ctGiUFZBfPKb=s1024',
        alt: 'RNS Residency',
        isPrimary: true
      }
    ],
    location: {
      coordinates: { lat: 14.0950465, lng: 74.4830117 },
      address: 'Murudeshwar Temple Hwy, Murdeshwar, Karnataka 581350',
      landmark: 'Near Murudeshwar Temple',
      distanceFromTemple: 0.2
    },
    contact: {
      phone: '917829008264',
      whatsapp: '917829008264',
      email: 'info@rnsresidency.com',
      website: 'https://www.naveenhotels.com/RNS-Residency/'
    },
    rating: {
      average: 4.2,
      count: 4398,
      breakdown: { 5: 2199, 4: 1319, 3: 660, 2: 176, 1: 44 }
    },
    isInstantConfirm: true,
    isVerified: true,
    tags: ['temple-view', 'comfortable', 'clean', 'sea-view'],
    amenities: hotelAmenities.slice(0, 6),
    rooms: [
      {
        id: 'room-1',
        name: 'Deluxe Room',
        description: 'Spacious room with modern amenities',
        capacity: 2,
        bedType: 'Queen Bed',
        area: 280,
        images: [
          {
            id: 'room-img1',
            type: 'image',
            url: 'https://lh3.ggpht.com/p/AF1QipMhFIfVI7tv2p3LdI3t7aXCe6e3ctGiUFZBfPKb=s1024',
            alt: 'Deluxe room'
          }
        ],
        amenities: hotelAmenities.slice(0, 5),
        basePrice: 4500,
        taxes: 810,
        availability: true
      }
    ],
    checkInTime: '14:00',
    checkOutTime: '12:00',
    policies: {
      cancellation: 'Free cancellation up to 12 hours before check-in',
      children: 'Children under 10 stay free',
      pets: 'Pets not allowed',
      smoking: 'Non-smoking property'
    },
    nearbyAttractions: ['Murudeshwar Temple', 'Local Markets', 'Beach'],
    createdAt: '2023-02-15T00:00:00Z',
    updatedAt: '2025-01-12T00:00:00Z'
  },
  {
    id: 'ChIJLfX9VAhHvDsRZHnVTBYPYgc',
    type: 'hotel',
    name: 'Nestle Sahyadri Beachfront Homestay',
    slug: 'nestle-sahyadri-beachfront-homestay',
    description: 'Beachfront homestay with excellent hospitality, hygienic meals, and stunning views of Lord Shiva statue and sunset over the Arabian Sea.',
    shortDescription: 'Beachfront homestay with sea views',
    category: 'mid-range',
    images: [
      {
        id: 'img2',
        type: 'image',
        url: 'https://lh3.ggpht.com/p/AF1QipMiq01lItUBp9UjyhRqynw7oUbM7SHMvQiDnSEs=s1024',
        alt: 'Nestle Sahyadri Beachfront Homestay',
        isPrimary: true
      }
    ],
    location: {
      coordinates: { lat: 14.110781, lng: 74.4855951 },
      address: 'House No 1, Christian Colony, Tuddalli, Bailur, Murdeshwar, Karnataka 581350',
      landmark: 'Beachfront',
      distanceFromTemple: 1.5
    },
    contact: {
      phone: '919945494973',
      whatsapp: '919945494973',
      website: 'https://beachstaymurudeshwar.in/'
    },
    rating: {
      average: 4.9,
      count: 588,
      breakdown: { 5: 529, 4: 47, 3: 9, 2: 2, 1: 1 }
    },
    isInstantConfirm: true,
    isVerified: true,
    tags: ['beachfront', 'luxury', 'sea-view', 'restaurant'],
    amenities: hotelAmenities.slice(0, 7),
    rooms: [
      {
        id: 'room-2',
        name: 'Sea View Suite',
        description: 'Luxury suite with panoramic sea views',
        capacity: 3,
        bedType: 'King Bed + Sofa',
        area: 420,
        images: [
          {
            id: 'room-img2',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Sea view suite'
          }
        ],
        amenities: hotelAmenities.slice(0, 6),
        basePrice: 7800,
        taxes: 1404,
        availability: true
      }
    ],
    checkInTime: '15:00',
    checkOutTime: '11:00',
    policies: {
      cancellation: 'Free cancellation up to 24 hours before check-in',
      children: 'Children under 12 stay free',
      pets: 'Pets not allowed',
      smoking: 'Non-smoking property'
    },
    nearbyAttractions: ['Murudeshwar Temple', 'Murudeshwar Beach', 'Netrani Island'],
    createdAt: '2023-03-01T00:00:00Z',
    updatedAt: '2025-01-18T00:00:00Z'
  },
  {
    id: 'ChIJ9zzFW9JBvDsR5J35VOP_r6k',
    type: 'hotel',
    name: 'Coastal Pearl Homestay',
    slug: 'coastal-pearl-homestay',
    description: 'Excellent property with outstanding hospitality and management, perfect for a peaceful vacation near Murudeshwar beach and hills.',
    shortDescription: 'Cozy homestay near beach',
    category: 'mid-range',
    images: [
      {
        id: 'img3',
        type: 'image',
        url: 'https://lh3.ggpht.com/p/AF1QipMUicwuX4PDJzfSPV28VbDFRIFf7-FSt7IOhtg2=s1024',
        alt: 'Coastal Pearl Homestay',
        isPrimary: true
      }
    ],
    location: {
      coordinates: { lat: 14.0965413, lng: 74.5102689 },
      address: '1, Hotel Road, opp. to RNS Highway, Konarkeri, Mavalli, Murdeshwar, Karnataka 581350',
      landmark: 'Opposite RNS Highway',
      distanceFromTemple: 2.0
    },
    contact: {
      phone: '916361553206',
      whatsapp: '916361553206',
      website: 'https://www.coastalpearlhomestay.com/'
    },
    rating: {
      average: 4.9,
      count: 320,
      breakdown: { 5: 288, 4: 26, 3: 5, 2: 1, 1: 0 }
    },
    isInstantConfirm: true,
    isVerified: true,
    tags: ['luxury', 'beachfront', 'spa', 'restaurant', 'pool'],
    amenities: hotelAmenities,
    rooms: [
      {
        id: 'room-3',
        name: 'Premium Ocean View',
        description: 'Spacious room with direct ocean views',
        capacity: 2,
        bedType: 'King Bed',
        area: 380,
        images: [
          {
            id: 'room-img3',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Premium ocean view room'
          }
        ],
        amenities: hotelAmenities.slice(0, 7),
        basePrice: 9500,
        taxes: 1710,
        availability: true
      }
    ],
    checkInTime: '14:00',
    checkOutTime: '12:00',
    policies: {
      cancellation: 'Free cancellation up to 48 hours before check-in',
      children: 'Children under 15 stay free',
      pets: 'Pets not allowed',
      smoking: 'Non-smoking property'
    },
    nearbyAttractions: ['Murudeshwar Temple', 'Murudeshwar Beach', 'Netrani Island'],
    createdAt: '2023-03-15T00:00:00Z',
    updatedAt: '2025-01-20T00:00:00Z'
  },
  {
    id: 'ChIJVTbOcdBGvDsR5FXaw3PiDpo',
    type: 'hotel',
    name: 'Aryana Guest House - Sea View',
    slug: 'aryana-guest-house-sea-view',
    description: 'Clean and comfortable guest house with balcony views, hot water facilities, and close to the beach and Shiva statue.',
    shortDescription: 'Sea view guest house',
    category: 'budget',
    images: [
      {
        id: 'img4',
        type: 'image',
        url: 'https://lh3.ggpht.com/p/AF1QipPAY_MqnFDEOSGirKxnOLe-wC4IcGuKFwJt2iMP=s1024',
        alt: 'Aryana Guest House',
        isPrimary: true
      }
    ],
    location: {
      coordinates: { lat: 14.0921934, lng: 74.4883581 },
      address: 'Beach road, Murdeshwar Temple Main Rd, Matadahitlu, Murdeshwar, Karnataka 581350',
      landmark: 'Near Beach Road',
      distanceFromTemple: 0.5
    },
    contact: {
      phone: '918988338383',
      whatsapp: '918988338383'
    },
    rating: {
      average: 4.1,
      count: 2238,
      breakdown: { 5: 1119, 4: 671, 3: 336, 2: 89, 1: 23 }
    },
    isInstantConfirm: true,
    isVerified: true,
    tags: ['budget', 'central', 'clean', 'basic'],
    amenities: hotelAmenities.slice(0, 4),
    rooms: [
      {
        id: 'room-4',
        name: 'Standard Room',
        description: 'Basic room with essential amenities',
        capacity: 2,
        bedType: 'Double Bed',
        area: 200,
        images: [
          {
            id: 'room-img4',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Standard room'
          }
        ],
        amenities: hotelAmenities.slice(0, 3),
        basePrice: 2500,
        taxes: 450,
        availability: true
      }
    ],
    checkInTime: '12:00',
    checkOutTime: '11:00',
    policies: {
      cancellation: 'Free cancellation up to 6 hours before check-in',
      children: 'Children under 8 stay free',
      pets: 'Pets not allowed',
      smoking: 'Smoking allowed in designated areas'
    },
    nearbyAttractions: ['Murudeshwar Temple', 'Local Markets'],
    createdAt: '2023-04-01T00:00:00Z',
    updatedAt: '2025-01-22T00:00:00Z'
  },
  {
    id: 'hotel-5',
    type: 'hotel',
    name: 'Temple View Inn',
    slug: 'temple-view-inn',
    description: 'A comfortable mid-range hotel with excellent temple views and modern amenities.',
    shortDescription: 'Comfortable hotel with temple views',
    category: 'mid-range',
    images: [
      {
        id: 'img5',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        alt: 'Temple View Inn',
        isPrimary: true
      }
    ],
    location: {
      coordinates: { lat: 14.0925, lng: 74.4835 },
      address: 'Temple Road, Murudeshwar, Karnataka 581350',
      landmark: 'Opposite Murudeshwar Temple',
      distanceFromTemple: 0.2
    },
    contact: {
      phone: '+91 8385 260005',
      whatsapp: '+91 9876543214',
      email: 'info@templeviewinn.com'
    },
    rating: {
      average: 4.2,
      count: 847,
      breakdown: { 5: 423, 4: 254, 3: 127, 2: 32, 1: 11 }
    },
    isInstantConfirm: true,
    isVerified: true,
    tags: ['temple-view', 'budget-friendly', 'clean', 'central'],
    amenities: hotelAmenities.slice(0, 6),
    rooms: [
      {
        id: 'room-5',
        name: 'Standard Room',
        description: 'Clean and comfortable standard room',
        capacity: 2,
        bedType: 'Double Bed',
        area: 250,
        images: [
          {
            id: 'room-img5',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Standard room'
          }
        ],
        amenities: hotelAmenities.slice(0, 4),
        basePrice: 3500,
        taxes: 630,
        availability: true
      }
    ],
    checkInTime: '12:00',
    checkOutTime: '11:00',
    policies: {
      cancellation: 'Free cancellation up to 6 hours before check-in',
      children: 'Children under 8 stay free',
      pets: 'Small pets allowed with prior notice',
      smoking: 'Smoking allowed in designated areas'
    },
    nearbyAttractions: ['Murudeshwar Temple', 'Local Markets', 'Beach'],
    createdAt: '2023-02-01T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  },
  {
    id: 'hotel-6',
    type: 'hotel',
    name: 'Coastal Paradise Resort',
    slug: 'coastal-paradise-resort',
    description: 'An eco-friendly beach resort with sustainable practices and serene ambiance.',
    shortDescription: 'Eco-friendly beach resort',
    category: 'resort',
    images: [
      {
        id: 'img6',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        alt: 'Coastal Paradise Resort',
        isPrimary: true
      }
    ],
    location: {
      coordinates: { lat: 14.1015, lng: 74.4892 },
      address: 'Coastal Highway, Murudeshwar, Karnataka 581350',
      landmark: 'Near Murudeshwar Beach',
      distanceFromTemple: 1.2
    },
    contact: {
      phone: '+91 8385 260006',
      whatsapp: '+91 9876543215',
      email: 'info@coastalparadise.com'
    },
    rating: {
      average: 4.4,
      count: 723,
      breakdown: { 5: 367, 4: 217, 3: 98, 2: 28, 1: 13 }
    },
    isInstantConfirm: false,
    isVerified: true,
    tags: ['eco-friendly', 'beach', 'resort', 'peaceful'],
    amenities: hotelAmenities.slice(0, 8),
    rooms: [
      {
        id: 'room-6',
        name: 'Garden Villa',
        description: 'Eco-friendly villa surrounded by gardens',
        capacity: 4,
        bedType: 'King + Twin Beds',
        area: 450,
        images: [
          {
            id: 'room-img6',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Garden villa'
          }
        ],
        amenities: hotelAmenities.slice(0, 6),
        basePrice: 6500,
        taxes: 1170,
        availability: true
      }
    ],
    checkInTime: '15:00',
    checkOutTime: '11:00',
    policies: {
      cancellation: 'Free cancellation up to 24 hours before check-in',
      children: 'Children under 12 stay free',
      pets: 'Pets welcome with eco-friendly policies',
      smoking: 'Non-smoking property'
    },
    nearbyAttractions: ['Murudeshwar Beach', 'Nature Trails', 'Bird Watching'],
    createdAt: '2023-04-15T00:00:00Z',
    updatedAt: '2025-01-25T00:00:00Z'
  },
  {
    id: 'hotel-7',
    type: 'hotel',
    name: 'Murudeshwar Beach Resort',
    slug: 'murudeshwar-beach-resort',
    description: 'A luxury beachfront resort offering stunning views of the Arabian Sea and Murudeshwar Temple.',
    shortDescription: 'Luxury beachfront resort with temple views',
    category: 'luxury',
    images: [
      {
        id: 'img7',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        alt: 'Murudeshwar Beach Resort exterior',
        isPrimary: true
      }
    ],
    location: {
      coordinates: { lat: 14.0942, lng: 74.4843 },
      address: 'Beach Road, Murudeshwar, Karnataka 581350',
      landmark: 'Near Murudeshwar Temple',
      distanceFromTemple: 0.5
    },
    contact: {
      phone: '+91 8385 260007',
      whatsapp: '+91 9876543216',
      email: 'info@murudeshwarbeachresort.com',
      website: 'https://murudeshwarbeachresort.com'
    },
    rating: {
      average: 4.6,
      count: 1247,
      breakdown: { 5: 756, 4: 312, 3: 124, 2: 35, 1: 20 }
    },
    isInstantConfirm: true,
    isVerified: true,
    tags: ['beachfront', 'luxury', 'temple-view', 'spa', 'restaurant'],
    amenities: hotelAmenities.slice(0, 8),
    rooms: [
      {
        id: 'room-7',
        name: 'Sea View Deluxe',
        description: 'Spacious room with panoramic sea views',
        capacity: 2,
        bedType: 'King Bed',
        area: 350,
        images: [
          {
            id: 'room-img7',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Sea view deluxe room'
          }
        ],
        amenities: hotelAmenities.slice(0, 5),
        basePrice: 8500,
        taxes: 1530,
        availability: true
      }
    ],
    checkInTime: '14:00',
    checkOutTime: '12:00',
    policies: {
      cancellation: 'Free cancellation up to 24 hours before check-in',
      children: 'Children under 12 stay free with existing bedding',
      pets: 'Pets are not allowed',
      smoking: 'Non-smoking property'
    },
    nearbyAttractions: ['Murudeshwar Temple', 'Murudeshwar Beach', 'Netrani Island'],
    createdAt: '2023-01-15T00:00:00Z',
    updatedAt: '2025-01-15T00:00:00Z'
  },
  {
    id: 'hotel-8',
    type: 'hotel',
    name: 'Heritage Stay',
    slug: 'heritage-stay',
    description: 'Traditional heritage property showcasing local architecture and culture.',
    shortDescription: 'Heritage property with traditional charm',
    category: 'mid-range',
    images: [
      {
        id: 'img8',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        alt: 'Heritage Stay',
        isPrimary: true
      }
    ],
    location: {
      coordinates: { lat: 14.0920, lng: 74.4830 },
      address: 'Heritage Street, Murudeshwar, Karnataka 581350',
      landmark: 'Near Murudeshwar Temple',
      distanceFromTemple: 0.6
    },
    contact: {
      phone: '+91 8385 260008',
      whatsapp: '+91 9876543217',
      email: 'info@heritagestay.com'
    },
    rating: {
      average: 4.0,
      count: 456,
      breakdown: { 5: 182, 4: 183, 3: 68, 2: 18, 1: 5 }
    },
    isInstantConfirm: false,
    isVerified: true,
    tags: ['heritage', 'traditional', 'cultural', 'authentic'],
    amenities: hotelAmenities.slice(0, 5),
    rooms: [
      {
        id: 'room-8',
        name: 'Heritage Room',
        description: 'Traditional room with local artwork and furniture',
        capacity: 2,
        bedType: 'Queen Bed',
        area: 300,
        images: [
          {
            id: 'room-img8',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Heritage room'
          }
        ],
        amenities: hotelAmenities.slice(0, 4),
        basePrice: 5500,
        taxes: 990,
        availability: true
      }
    ],
    checkInTime: '13:00',
    checkOutTime: '11:00',
    policies: {
      cancellation: 'Free cancellation up to 12 hours before check-in',
      children: 'Children under 10 stay free',
      pets: 'Pets not allowed',
      smoking: 'Smoking allowed in designated areas'
    },
    nearbyAttractions: ['Murudeshwar Temple', 'Local Art Gallery', 'Cultural Center'],
    createdAt: '2023-05-01T00:00:00Z',
    updatedAt: '2025-01-28T00:00:00Z'
  }
];

// Restaurants data
const restaurants: Restaurant[] = [
  {
    id: 'ChIJscd_0ttGvDsR0qmXqsHXCTE',
    type: 'restaurant',
    name: 'Naveen Beach Restaurant',
    slug: 'naveen-beach-restaurant',
    description: "Seaside hotel's dining room offering dishes from around the world & views over the ocean.",
    shortDescription: 'Seaside dining with ocean views',
    images: [
      {
        id: 'rest-img1',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        alt: 'Naveen Beach Restaurant'
      }
    ],
    location: {
      coordinates: { lat: 14.0945975, lng: 74.4885506 },
      address: 'Beach Road, Murudeshwar, Karnataka 581350',
      landmark: 'Near Murudeshwar Beach',
      distanceFromTemple: 0.8
    },
    contact: {
      phone: '918385260101',
      whatsapp: '918385260101'
    },
    rating: {
      average: 2.6,
      count: 661,
      breakdown: { 5: 132, 4: 99, 3: 132, 2: 132, 1: 166 }
    },
    isInstantConfirm: false,
    isVerified: true,
    tags: ['seafood', 'south-indian', 'beachside', 'family'],
    cuisine: ['South Indian', 'Seafood', 'North Indian'],
    mealTypes: ['lunch', 'dinner'],
    priceRange: 'mid-range',
    openingHours: {
      monday: { open: '11:00', close: '22:00', isOpen: true },
      tuesday: { open: '11:00', close: '22:00', isOpen: true },
      wednesday: { open: '11:00', close: '22:00', isOpen: true },
      thursday: { open: '11:00', close: '22:00', isOpen: true },
      friday: { open: '11:00', close: '22:00', isOpen: true },
      saturday: { open: '11:00', close: '22:00', isOpen: true },
      sunday: { open: '11:00', close: '22:00', isOpen: true }
    },
    features: ['Ocean View', 'Fresh Seafood', 'Family Friendly', 'Outdoor Seating'],
    menu: [
      {
        id: 'menu-1',
        name: 'Murudeshwar Fish Curry',
        description: 'Traditional coastal fish curry with coconut and spices',
        price: 320,
        category: 'Main Course',
        isVegetarian: false,
        isVegan: false,
        spiceLevel: 'medium'
      }
    ],
    averageCostForTwo: 800,
    createdAt: '2023-01-10T00:00:00Z',
    updatedAt: '2025-01-12T00:00:00Z'
  },
  {
    id: 'restaurant-2',
    type: 'restaurant',
    name: 'Temple View Vegetarian',
    slug: 'temple-view-vegetarian',
    description: 'Pure vegetarian restaurant serving traditional Karnataka cuisine with temple views.',
    shortDescription: 'Pure vegetarian with temple views',
    images: [
      {
        id: 'rest-img2',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        alt: 'Temple View Vegetarian Restaurant'
      }
    ],
    location: {
      coordinates: { lat: 14.0928, lng: 74.4838 },
      address: 'Temple Street, Murudeshwar, Karnataka 581350',
      landmark: 'Near Murudeshwar Temple',
      distanceFromTemple: 0.3
    },
    contact: {
      phone: '+91 8385 260102',
      whatsapp: '+91 9876543302'
    },
    rating: {
      average: 4.1,
      count: 892,
      breakdown: { 5: 401, 4: 312, 3: 134, 2: 35, 1: 10 }
    },
    isInstantConfirm: false,
    isVerified: true,
    tags: ['vegetarian', 'traditional', 'temple-view', 'authentic'],
    cuisine: ['South Indian', 'North Indian', 'Udupi'],
    mealTypes: ['breakfast', 'lunch', 'dinner'],
    priceRange: 'budget',
    openingHours: {
      monday: { open: '06:00', close: '21:00', isOpen: true },
      tuesday: { open: '06:00', close: '21:00', isOpen: true },
      wednesday: { open: '06:00', close: '21:00', isOpen: true },
      thursday: { open: '06:00', close: '21:00', isOpen: true },
      friday: { open: '06:00', close: '21:00', isOpen: true },
      saturday: { open: '06:00', close: '21:00', isOpen: true },
      sunday: { open: '06:00', close: '21:00', isOpen: true }
    },
    features: ['Pure Vegetarian', 'Temple View', 'Traditional Recipes', 'Clean & Hygienic'],
    menu: [
      {
        id: 'menu-2',
        name: 'Udupi Thali',
        description: 'Traditional South Indian thali with variety of dishes',
        price: 180,
        category: 'Thali',
        isVegetarian: true,
        isVegan: false,
        spiceLevel: 'mild'
      }
    ],
    averageCostForTwo: 350,
    createdAt: '2023-01-15T00:00:00Z',
    updatedAt: '2025-01-08T00:00:00Z'
  }
];

// Scuba Operators data
const scubaOperators: ScubaOperator[] = [
  {
    id: 'ChIJfTRmm89GvDsRlWZZvAgLpOM',
    type: 'scuba',
    name: 'Netrani Adventures',
    slug: 'netrani-adventures',
    description: 'Certified Scuba Diving Centre offering professional diving experiences at Netrani Island with experienced instructors.',
    shortDescription: 'Certified scuba diving at Netrani',
    images: [
      {
        id: 'scuba-img1',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        alt: 'Scuba diving at Netrani Island'
      }
    ],
    location: {
      coordinates: { lat: 14.0947445, lng: 74.4877738 },
      address: 'Boat Jetty, Murudeshwar, Karnataka 581350',
      landmark: 'Near Murudeshwar Boat Jetty',
      distanceFromTemple: 0.7
    },
    contact: {
      phone: '918385260201',
      whatsapp: '918385260201',
      email: 'info@netraniadventures.com'
    },
    rating: {
      average: 4.7,
      count: 1405,
      breakdown: { 5: 1053, 4: 281, 3: 56, 2: 11, 1: 4 }
    },
    isInstantConfirm: false,
    isVerified: true,
    tags: ['padi-certified', 'experienced', 'safe', 'netrani-island'],
    certifications: ['PADI', 'SSI', 'NAUI'],
    languages: ['English', 'Hindi', 'Kannada'],
    experience: 12,
    packages: [
      {
        id: 'scuba-pkg-1',
        name: 'Discover Scuba Diving',
        description: 'Perfect for beginners - no experience required',
        duration: 4,
        depth: 12,
        difficulty: 'beginner',
        includes: ['Equipment', 'Boat Transfer', 'Instructor', 'Lunch', 'Photos'],
        excludes: ['Transport to Murudeshwar', 'Personal Expenses'],
        price: 3500,
        groupSize: { min: 2, max: 8 },
        images: [
          {
            id: 'pkg-img1',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Beginner scuba diving'
          }
        ]
      }
    ],
    equipment: ['BCDs', 'Regulators', 'Wetsuits', 'Masks', 'Fins', 'Tanks'],
    safetyRecord: 'Zero incidents in 5+ years of operation',
    diveSites: ['Netrani Island', 'Coral Gardens', 'Fish Bowl', 'Trigger Fish Point'],
    createdAt: '2023-02-01T00:00:00Z',
    updatedAt: '2025-01-15T00:00:00Z'
  }
];

// Boating Operators data
const boatingOperators: BoatingOperator[] = [
  {
    id: 'boat-1',
    type: 'boating',
    name: 'Murudeshwar Marine Adventures',
    slug: 'murudeshwar-marine-adventures',
    description: 'Experience the beautiful coastline with our boat trips to Netrani Island and sunset cruises.',
    shortDescription: 'Boat trips to Netrani Island and sunset cruises',
    images: [
      {
        id: 'boat-img1',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        alt: 'Boat trip to Netrani Island'
      }
    ],
    location: {
      coordinates: { lat: 14.0940, lng: 74.4848 },
      address: 'Main Jetty, Murudeshwar, Karnataka 581350',
      landmark: 'Murudeshwar Main Jetty',
      distanceFromTemple: 0.6
    },
    contact: {
      phone: '+91 8385 260301',
      whatsapp: '+91 9876543501',
      email: 'info@murudeshwarmarine.com'
    },
    rating: {
      average: 4.4,
      count: 756,
      breakdown: { 5: 412, 4: 234, 3: 87, 2: 18, 1: 5 }
    },
    isInstantConfirm: true,
    isVerified: true,
    tags: ['family-friendly', 'experienced-crew', 'safe', 'scenic'],
    boatTypes: ['Speed Boat', 'Traditional Boat', 'Catamaran'],
    capacity: { min: 4, max: 20 },
    trips: [
      {
        id: 'trip-1',
        name: 'Netrani Island Day Trip',
        description: 'Full day trip to pristine Netrani Island with snorkeling',
        duration: 8,
        capacity: 15,
        includes: ['Boat Transfer', 'Snorkeling Equipment', 'Lunch', 'Guide'],
        route: ['Murudeshwar Jetty', 'Netrani Island', 'Return'],
        price: 2500,
        timeSlots: ['08:00'],
        images: [
          {
            id: 'trip-img1',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1580479960030-0b67492b55a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Netrani Island trip'
          }
        ]
      }
    ],
    safetyEquipment: ['Life Jackets', 'First Aid Kit', 'GPS', 'Radio Communication'],
    licenses: ['Commercial Boat License', 'Tourist Operator License'],
    createdAt: '2023-01-20T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  }
];

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