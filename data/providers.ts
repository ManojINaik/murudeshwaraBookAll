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

// Hotels data from CSV - Top 50 rated properties
const hotels: Hotel[] = [
  {
    "id": "ChIJLw4orXBHvDsRQe-kl4dONDs",
    "type": "hotel",
    "name": "Mavalli Sea House",
    "slug": "mavalli-sea-house",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipNuYN64dWUKH9uEmX9bfLZWrbYpfjpmhI5MVI1m=s1024",
        "alt": "Mavalli Sea House",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "2, Christ the King Church Rd, Matadahitlu, Mavalli, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.67
    },
    "contact": {
      "phone": "09741696107",
      "whatsapp": "09741696107",
      "website": "https://mavalliseahouse.com/"
    },
    "rating": {
      "average": 4.1,
      "count": 25,
      "breakdown": {
        "1": 0,
        "2": 1,
        "3": 3,
        "4": 7,
        "5": 12
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [
      "parking",
      "price",
      "clean rooms",
      "mirror",
      "tv"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.520Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipNuYN64dWUKH9uEmX9bfLZWrbYpfjpmhI5MVI1m=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 3228,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJUX4v-w5BvDsR5G7Jw5CEVMA",
    "type": "hotel",
    "name": "Shri Murudeshwara Shiva Temple",
    "slug": "shri-murudeshwara-shiva-temple",
    "description": "Colossal statue dedicated to the Hindu god Shiva boasting striking sea views.",
    "shortDescription": "Colossal statue dedicated to the Hindu god Shiva boasting striking sea views.",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Shri Murudeshwara Shiva Temple",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.36
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 4.7,
      "count": 60275,
      "breakdown": {
        "1": 602,
        "2": 2411,
        "3": 9041,
        "4": 18082,
        "5": 30137
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.523Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 4648,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJmwOd7NlGvDsRIkT08vclLFo",
    "type": "hotel",
    "name": "Shri Murdeshwara Beach",
    "slug": "shri-murdeshwara-beach",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AG0ilSw_jlVW_B3B0ixs-7mEDuGc3bdM0NeVN4lSat44YXM6NzLmbgcbHsLQjfM0j8F3e-gNIVarEQFTOUZucAeNM4NBl_NxsBqfrQwcyUJbAvEWXGY9gLGF1zVi2cnNI9iLOSzbBVd_=s1024",
        "alt": "Shri Murdeshwara Beach",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murdeshwar, Karnataka",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.27
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 4.5,
      "count": 8403,
      "breakdown": {
        "1": 84,
        "2": 336,
        "3": 1260,
        "4": 2520,
        "5": 4201
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "lord shiva",
      "temple",
      "statue",
      "gopuram",
      "spiritual"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.520Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AG0ilSw_jlVW_B3B0ixs-7mEDuGc3bdM0NeVN4lSat44YXM6NzLmbgcbHsLQjfM0j8F3e-gNIVarEQFTOUZucAeNM4NBl_NxsBqfrQwcyUJbAvEWXGY9gLGF1zVi2cnNI9iLOSzbBVd_=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 2889,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJtdOI5ttGvDsRvc9gcrVbLtA",
    "type": "hotel",
    "name": "RNS Residency",
    "slug": "rns-residency",
    "description": "Temple side property with beautiful views of the Arabian Sea",
    "shortDescription": "Temple side property with beautiful views of the Arabian Sea",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipMhFIfVI7tv2p3LdI3t7aXCe6e3ctGiUFZBfPKb=s1024",
        "alt": "RNS Residency",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar Temple Hwy, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.6
    },
    "contact": {
      "phone": "08762471752",
      "whatsapp": "08762471752",
      "website": "https://www.naveenhotels.com/RNS-Residency/"
    },
    "rating": {
      "average": 4.2,
      "count": 4398,
      "breakdown": {
        "1": 43,
        "2": 175,
        "3": 659,
        "4": 1319,
        "5": 2199
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [
      "balcony",
      "renovation",
      "room service",
      "vegetarian",
      "shiva"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.523Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipMhFIfVI7tv2p3LdI3t7aXCe6e3ctGiUFZBfPKb=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 6569,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJCfWMWqFHvDsRUCCt8f_3-Hg",
    "type": "hotel",
    "name": "Murudeshwara Ocean Edge Beach Resort",
    "slug": "murudeshwara-ocean-edge-beach-resort",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipM5TLz6xS6uR443sUS3MxkVnaAkv8xSvudEr6A4=s1024",
        "alt": "Murudeshwara Ocean Edge Beach Resort",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Near Temple, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 2.46
    },
    "contact": {
      "phone": "08660965151",
      "whatsapp": "08660965151",
      "website": "https://www.murdeshwaroceanedge.com/"
    },
    "rating": {
      "average": 4.6,
      "count": 2244,
      "breakdown": {
        "1": 22,
        "2": 89,
        "3": 336,
        "4": 673,
        "5": 1122
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "meals",
      "clean rooms",
      "cottages",
      "snacks",
      "homestay"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.521Z",
    "category": "luxury",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipM5TLz6xS6uR443sUS3MxkVnaAkv8xSvudEr6A4=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 6563,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJjdxWobZHvDsRoiZ773syNV0",
    "type": "hotel",
    "name": "Murudeshwara Beach",
    "slug": "murudeshwara-beach",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Murudeshwara Beach",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.33
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 4.5,
      "count": 1980,
      "breakdown": {
        "1": 19,
        "2": 79,
        "3": 297,
        "4": 594,
        "5": 990
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.520Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 5282,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJVTbOcdBGvDsR5FXaw3PiDpo",
    "type": "hotel",
    "name": "Aryana Guest House - Sea View",
    "slug": "aryana-guest-house-sea-view",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipPAY_MqnFDEOSGirKxnOLe-wC4IcGuKFwJt2iMP=s1024",
        "alt": "Aryana Guest House - Sea View",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Beach road, Murdeshwar Temple Main Rd, Matadahitlu, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.89
    },
    "contact": {
      "phone": "08988338383",
      "whatsapp": "08988338383"
    },
    "rating": {
      "average": 4.1,
      "count": 2238,
      "breakdown": {
        "1": 22,
        "2": 89,
        "3": 335,
        "4": 671,
        "5": 1119
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [
      "balcony",
      "hot water",
      "distance",
      "clean rooms",
      "budget"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.521Z",
    "category": "luxury",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipPAY_MqnFDEOSGirKxnOLe-wC4IcGuKFwJt2iMP=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 5705,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJM6Dxv9BGvDsRAgkEzIsDMFM",
    "type": "hotel",
    "name": "Dhenu Atithya",
    "slug": "dhenu-atithya",
    "description": "Unfussy rooms, some with air-conditioning, in a bright, cosy property with a Chinese restaurant.",
    "shortDescription": "Unfussy rooms, some with air-conditioning, in a bright, cosy property with a Chi",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipOwiSzucTk8ipyhC-JTGNcToL7YoplcKQ6pPnB7=s1024",
        "alt": "Dhenu Atithya",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Bus Stand, Murudeshwar Temple Hwy, opp. KSRTC Ticket Booking Centre, Gangavati, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.64
    },
    "contact": {
      "phone": "09620625718",
      "whatsapp": "09620625718"
    },
    "rating": {
      "average": 3.8,
      "count": 2521,
      "breakdown": {
        "1": 25,
        "2": 100,
        "3": 378,
        "4": 756,
        "5": 1260
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [
      "hot water",
      "vegetarian",
      "distance",
      "pooja",
      "cow"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.523Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipOwiSzucTk8ipyhC-JTGNcToL7YoplcKQ6pPnB7=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 6801,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJfTRmm89GvDsRlWZZvAgLpOM",
    "type": "hotel",
    "name": "Netrani Adventures",
    "slug": "netrani-adventures",
    "description": "Certified Scuba Diving Centre.",
    "shortDescription": "Certified Scuba Diving Centre.",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Netrani Adventures",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.04
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 4.7,
      "count": 1405,
      "breakdown": {
        "1": 14,
        "2": 56,
        "3": 210,
        "4": 421,
        "5": 702
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.527Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 6880,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJATaCNG1BvDsRFe7_YXlclTU",
    "type": "hotel",
    "name": "Kamat Restaurant",
    "slug": "kamat-restaurant",
    "description": "Kamat Restaurant situated on the West Coast Highway is the perfect spot for travelers wanting to stop over for some delicious and tummy comforting meal.The menu is loaded with South Indian and North Indian delicacies along with thirst quenching fresh fruit juices and coolers to beat the sunny highways and not to forget the Heat Beating Desserts to end your super yummy meals.The restaurant has ample car parking space and clean and well maintained washrooms to help you make your journey on the highway a comfortable one.",
    "shortDescription": "Kamat Restaurant situated on the West Coast Highway is the perfect spot for trav",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Kamat Restaurant",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 2.17
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 3.9,
      "count": 2159,
      "breakdown": {
        "1": 21,
        "2": 86,
        "3": 323,
        "4": 647,
        "5": 1079
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.522Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 4322,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJSUcavdBGvDsR9GzlSIes358",
    "type": "hotel",
    "name": "Nayak Fish Land",
    "slug": "nayak-fish-land",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Nayak Fish Land",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.4
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 3.8,
      "count": 2110,
      "breakdown": {
        "1": 21,
        "2": 84,
        "3": 316,
        "4": 633,
        "5": 1055
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.521Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 6674,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJhT4Zyy1BvDsR1KNWxR7nxa4",
    "type": "hotel",
    "name": "RNS Highway Hotel",
    "slug": "rns-highway-hotel",
    "description": "Basic rooms, some with air-conditioning, in a roadside retreat featuring a restaurant.",
    "shortDescription": "Basic rooms, some with air-conditioning, in a roadside retreat featuring a resta",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AG0ilSyE-1JqsZh_PccCWHPRlDgYAYZEC3KiySuaSujhVnuHMOF7I3LPoE3AlMcprfl1jIlUAZZ2Jtkk1j71473xaDOSmxAP5RuRqq5LFiThRRcZpXaA42JV731FwJwP_iBXH331GGN46g=s1024",
        "alt": "RNS Highway Hotel",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "NH 17, Taluk, near RNS Hospital, Bhatkal, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.46
    },
    "contact": {
      "phone": "08385268192",
      "whatsapp": "08385268192",
      "website": "http://www.naveenhotels.com/"
    },
    "rating": {
      "average": 3.6,
      "count": 2246,
      "breakdown": {
        "1": 22,
        "2": 89,
        "3": 336,
        "4": 673,
        "5": 1123
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [
      "service",
      "budget",
      "food quality",
      "behavior",
      "vehicle"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.523Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AG0ilSyE-1JqsZh_PccCWHPRlDgYAYZEC3KiySuaSujhVnuHMOF7I3LPoE3AlMcprfl1jIlUAZZ2Jtkk1j71473xaDOSmxAP5RuRqq5LFiThRRcZpXaA42JV731FwJwP_iBXH331GGN46g=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 4683,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJjcy8dEFHvDsRrvRqfHZruLg",
    "type": "hotel",
    "name": "Netrani Reef Adventures",
    "slug": "netrani-reef-adventures",
    "description": "Scuba Diving in Netrani Island, Scuba Diving in Murdeshwar",
    "shortDescription": "Scuba Diving in Netrani Island, Scuba Diving in Murdeshwar",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Netrani Reef Adventures",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 2.14
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 4.5,
      "count": 1314,
      "breakdown": {
        "1": 13,
        "2": 52,
        "3": 197,
        "4": 394,
        "5": 657
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.527Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 2858,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJP3sB90BHvDsR4ACJcGSR-uo",
    "type": "hotel",
    "name": "SCUBA SPIRIT NETRANI",
    "slug": "scuba-spirit-netrani",
    "description": "SCUBA SPIRIT",
    "shortDescription": "SCUBA SPIRIT",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "SCUBA SPIRIT NETRANI",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.92
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 4.9,
      "count": 622,
      "breakdown": {
        "1": 6,
        "2": 24,
        "3": 93,
        "4": 186,
        "5": 311
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.527Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 2629,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJ603obx9HvDsRFgL6ihB9NfM",
    "type": "hotel",
    "name": "Murudeshwara Beach",
    "slug": "murudeshwara-beach",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Murudeshwara Beach",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.8
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 4.5,
      "count": 997,
      "breakdown": {
        "1": 9,
        "2": 39,
        "3": 149,
        "4": 299,
        "5": 498
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.520Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 3700,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJLfX9VAhHvDsRZHnVTBYPYgc",
    "type": "hotel",
    "name": "Nestle Sahyadri Beachfront Homestay Murudeshwar",
    "slug": "nestle-sahyadri-beachfront-homestay-murudeshwar",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipMiq01lItUBp9UjyhRqynw7oUbM7SHMvQiDnSEs=s1024",
        "alt": "Nestle Sahyadri Beachfront Homestay Murudeshwar",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "House No 1, Christian Colony, Tuddalli, Bailur, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.92
    },
    "contact": {
      "phone": "09945494973",
      "whatsapp": "09945494973",
      "website": "https://beachstaymurudeshwar.in/"
    },
    "rating": {
      "average": 4.9,
      "count": 588,
      "breakdown": {
        "1": 5,
        "2": 23,
        "3": 88,
        "4": 176,
        "5": 294
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "hospitality",
      "property",
      "meals",
      "hygienic",
      "statue"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.519Z",
    "category": "luxury",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipMiq01lItUBp9UjyhRqynw7oUbM7SHMvQiDnSEs=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 3966,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJX336RgBHvDsRzscoMVlTlYw",
    "type": "hotel",
    "name": "Canara Vibes Home Stay",
    "slug": "canara-vibes-home-stay",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipOgf6eRnFzbVKQ1ES_pwdPu9vHaWR4I6s172RKf=s1024",
        "alt": "Canara Vibes Home Stay",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Beach Road, Church Cross, Matadahitlu, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.4
    },
    "contact": {
      "phone": "08904175022",
      "whatsapp": "08904175022",
      "website": "https://www.canaravibes.com/"
    },
    "rating": {
      "average": 4.9,
      "count": 534,
      "breakdown": {
        "1": 5,
        "2": 21,
        "3": 80,
        "4": 160,
        "5": 267
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "beach",
      "clean rooms",
      "cooperative",
      "hot water",
      "walking"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.519Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipOgf6eRnFzbVKQ1ES_pwdPu9vHaWR4I6s172RKf=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 5461,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJ78tM2tlGvDsRSVEHfwnTIQ4",
    "type": "hotel",
    "name": "Amani Beach Home stay",
    "slug": "amani-beach-home-stay",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipMcGbs3pXFSPd-m2DcQm9iujMdfZv-hGAK702yb=s1024",
        "alt": "Amani Beach Home stay",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Naveen Beach Rd, Qazi Mohalla, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.09
    },
    "contact": {
      "phone": "07406903665",
      "whatsapp": "07406903665",
      "website": "http://www.amanibeachhomestay.in/"
    },
    "rating": {
      "average": 4.6,
      "count": 825,
      "breakdown": {
        "1": 8,
        "2": 33,
        "3": 123,
        "4": 247,
        "5": 412
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "hygienic",
      "dormitory",
      "sea",
      "clean rooms",
      "barbecue"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.519Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipMcGbs3pXFSPd-m2DcQm9iujMdfZv-hGAK702yb=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 5758,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJ0dom3_5HvDsR5ZlZ2f_QpOw",
    "type": "hotel",
    "name": "Shiva of Murudeshwara",
    "slug": "shiva-of-murudeshwara",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Shiva of Murudeshwara",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.75
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 4.7,
      "count": 683,
      "breakdown": {
        "1": 6,
        "2": 27,
        "3": 102,
        "4": 204,
        "5": 341
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.523Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 3732,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJF1FtHdhGvDsRD0ga-FLLiu8",
    "type": "hotel",
    "name": "Sun & Sand Luxury Stays Sea View",
    "slug": "sun-sand-luxury-stays-sea-view",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipMkHQZ3J5vfQsNEH7kzLPlv2E0PVAASj1pEEDbA=s1024",
        "alt": "Sun & Sand Luxury Stays Sea View",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Naveen Beach Rd, Qazi Mohalla, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.69
    },
    "contact": {
      "phone": "08989842828",
      "whatsapp": "08989842828",
      "website": "http://sunandsandluxurystays.com/"
    },
    "rating": {
      "average": 4.9,
      "count": 362,
      "breakdown": {
        "1": 3,
        "2": 14,
        "3": 54,
        "4": 108,
        "5": 181
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "balcony",
      "property",
      "statue",
      "shiva",
      "clean rooms"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.523Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipMkHQZ3J5vfQsNEH7kzLPlv2E0PVAASj1pEEDbA=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 4711,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJA62YnM9GvDsRarWzcZRZmjg",
    "type": "hotel",
    "name": "The Ocean Front",
    "slug": "the-ocean-front",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipP2fUoGAdGbzhp4txrxLNQzGWay0Y5PXdpocFkG=s1024",
        "alt": "The Ocean Front",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "GOLF BEACH ROAD, near church, Matadahitlu, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.58
    },
    "contact": {
      "phone": "09482321777",
      "whatsapp": "09482321777",
      "website": "http://theoceanfront.in/"
    },
    "rating": {
      "average": 4.9,
      "count": 322,
      "breakdown": {
        "1": 3,
        "2": 12,
        "3": 48,
        "4": 96,
        "5": 161
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "beach",
      "property",
      "resort",
      "atmosphere",
      "sound"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.523Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipP2fUoGAdGbzhp4txrxLNQzGWay0Y5PXdpocFkG=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 2481,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJ9zzFW9JBvDsR5J35VOP_r6k",
    "type": "hotel",
    "name": "Coastal Pearl Homestay - Murudeshwar, Karnataka",
    "slug": "coastal-pearl-homestay-murudeshwar-karnataka",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipMUicwuX4PDJzfSPV28VbDFRIFf7-FSt7IOhtg2=s1024",
        "alt": "Coastal Pearl Homestay - Murudeshwar, Karnataka",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "1, Hotel Road, opp. to RNS Highway, Konarkeri, Mavalli, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.57
    },
    "contact": {
      "phone": "06361553206",
      "whatsapp": "06361553206",
      "website": "https://www.coastalpearlhomestay.com/"
    },
    "rating": {
      "average": 4.9,
      "count": 320,
      "breakdown": {
        "1": 3,
        "2": 12,
        "3": 48,
        "4": 96,
        "5": 160
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "property",
      "hospitality",
      "highway",
      "management",
      "feel"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.519Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipMUicwuX4PDJzfSPV28VbDFRIFf7-FSt7IOhtg2=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 6216,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJeVCR_NlGvDsRtu5OHWGRdn4",
    "type": "hotel",
    "name": "Naveen Beach Resort",
    "slug": "naveen-beach-resort",
    "description": "Casual hotel with modest rooms & a suite, plus 2 restaurants, including 1 with sea views.",
    "shortDescription": "Casual hotel with modest rooms & a suite, plus 2 restaurants, including 1 with s",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipNG-XIfkdhS_ZEkQ1-v6IARbPGl0rgTwFgYfSks=s1024",
        "alt": "Naveen Beach Resort",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Naveen Beach Rd, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.53
    },
    "contact": {
      "phone": "08762471917",
      "whatsapp": "08762471917",
      "website": "http://www.naveenhotels.com/"
    },
    "rating": {
      "average": 3.7,
      "count": 1420,
      "breakdown": {
        "1": 14,
        "2": 56,
        "3": 213,
        "4": 426,
        "5": 710
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [
      "taste",
      "veg food",
      "sea food",
      "room service",
      "quality"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.521Z",
    "category": "luxury",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipNG-XIfkdhS_ZEkQ1-v6IARbPGl0rgTwFgYfSks=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 2359,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJL2c9WWpHvDsR1nPInwybkz4",
    "type": "hotel",
    "name": "BHAIRAVA BIKE RENTAL",
    "slug": "bhairava-bike-rental",
    "description": "Bhairava Bike Rentals takes pride in its well-conditioned bikes, offering a safe and reliable ride to all customers. The team is dedicated to delivering top-notch customer service, ensuring that your biking experience is both enjoyable and memorable. Their in-depth knowledge of the local area enables them to provide valuable insights into the best routes, hidden gems, and must-visit spots, adding a touch of personalized guidance to your journey.",
    "shortDescription": "Bhairava Bike Rentals takes pride in its well-conditioned bikes, offering a safe",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "BHAIRAVA BIKE RENTAL",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.41
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 89,
      "breakdown": {
        "1": 0,
        "2": 3,
        "3": 13,
        "4": 26,
        "5": 44
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.518Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 5456,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJe90LnTZHvDsRXR3JE7XlJ3U",
    "type": "hotel",
    "name": "Ocean Mist",
    "slug": "ocean-mist",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipO_-VgpAURpGJdISZ8VgWSTUjf28SVByZeGoO41=s1024",
        "alt": "Ocean Mist",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Bailur Beach Road, Bastimakki, Near, Ocean Edge Beach Resort Rd, Bailur, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.74
    },
    "contact": {
      "phone": "09008031744",
      "whatsapp": "09008031744",
      "website": "https://oceanmistbeachhomestay.homestaybuddy.in/"
    },
    "rating": {
      "average": 5,
      "count": 88,
      "breakdown": {
        "1": 0,
        "2": 3,
        "3": 13,
        "4": 26,
        "5": 44
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "beach",
      "clean rooms",
      "resort",
      "meals",
      "co operative"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.519Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipO_-VgpAURpGJdISZ8VgWSTUjf28SVByZeGoO41=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 2920,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJ7ePzOgBBvDsRYHmW-vlxTtg",
    "type": "hotel",
    "name": "Hotel sagari murdeshwar",
    "slug": "hotel-sagari-murdeshwar",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Hotel sagari murdeshwar",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.94
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 4.9,
      "count": 184,
      "breakdown": {
        "1": 1,
        "2": 7,
        "3": 27,
        "4": 55,
        "5": 92
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.521Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 4166,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJubYCSG1BvDsR1YOmddfVtx8",
    "type": "hotel",
    "name": "Ezee Bikes - it's really easy",
    "slug": "ezee-bikes-it-s-really-easy",
    "description": "Explore the freedom of two wheels with our premier rental bike service. Immerse yourself in the scenic beauty of your surroundings as you glide effortlessly on our top-notch motorcycles. Explore the surrounding areas with your family and friends . Whether you're a leisure seeker or an adventure enthusiast, we have the perfect ride for you. Conveniently located pickup and drop point and flexible rental durations make exploring your destination a breeze. Experience the joy of travelling without the hassle – choose us for a memorable ride every time. Pick a bike near Railway Station or Bustand enjoy your time and drop the bike near the Railway station or Bustand very much conveniently.",
    "shortDescription": "Explore the freedom of two wheels with our premier rental bike service. Immerse ",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Ezee Bikes - it's really easy",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.86
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 63,
      "breakdown": {
        "1": 0,
        "2": 2,
        "3": 9,
        "4": 18,
        "5": 31
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.519Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 3820,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJXeuCVQBBvDsRqihd9-KXpTU",
    "type": "hotel",
    "name": "STONE WOOD STAY",
    "slug": "stone-wood-stay",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AG0ilSzBJWoa5QLjIyYqbB0j1AKOJ43rGaQNprOVme9JQbpTkZ3nVDvDZydder8F6yu1ekts_JPZeHS1bVFKZh8yvhMHF1Thw_TzbJkQe9GVX03YocC3Q8KjUiI1s1RiWiAuxHrCd4Me0fUmCA4C=s1024",
        "alt": "STONE WOOD STAY",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "3FWX+5X2, Murudeshwar Temple Hwy, Mavalli, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.48
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 27,
      "breakdown": {
        "1": 0,
        "2": 1,
        "3": 4,
        "4": 8,
        "5": 13
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "price",
      "clean rooms",
      "nature"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.523Z",
    "category": "budget",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AG0ilSzBJWoa5QLjIyYqbB0j1AKOJ43rGaQNprOVme9JQbpTkZ3nVDvDZydder8F6yu1ekts_JPZeHS1bVFKZh8yvhMHF1Thw_TzbJkQe9GVX03YocC3Q8KjUiI1s1RiWiAuxHrCd4Me0fUmCA4C=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 5191,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJHY-NiA5BvDsRUXAxRF-kblU",
    "type": "hotel",
    "name": "Hill View Home stay MURDESHWAR",
    "slug": "hill-view-home-stay-murdeshwar",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipP_qbERUkexqSQ1xZC04AAopitumq-suhl11_bu=s1024",
        "alt": "Hill View Home stay MURDESHWAR",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "SHIVANUGRAHA,Konarkeri, Uttarkoppa Road, Murdeshwar, Karnataka 581421",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.65
    },
    "contact": {
      "phone": "09986027593",
      "whatsapp": "09986027593"
    },
    "rating": {
      "average": 5,
      "count": 26,
      "breakdown": {
        "1": 0,
        "2": 1,
        "3": 3,
        "4": 7,
        "5": 13
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "property",
      "nature",
      "floor",
      "morning",
      "kitchen"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.519Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipP_qbERUkexqSQ1xZC04AAopitumq-suhl11_bu=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 3831,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJs0QNcw9HvDsR3X_A81ciTxY",
    "type": "hotel",
    "name": "Murdeshwar Shivani's Beach Resort",
    "slug": "murdeshwar-shivani-s-beach-resort",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipO5qESmGEUwWpxxYpKHtA3sagCFh29mDvoLkCfd=s1024",
        "alt": "Murdeshwar Shivani's Beach Resort",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "4F7P+PG Shivani’s sunset bay beach resort, Bastimakki, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 2.38
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 17,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 2,
        "4": 5,
        "5": 8
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "couples",
      "cruises",
      "sunset",
      "balcony",
      "check-in"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.526Z",
    "category": "luxury",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipO5qESmGEUwWpxxYpKHtA3sagCFh29mDvoLkCfd=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 6951,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJHyUakFxBvDsR51TEjzfu7mA",
    "type": "hotel",
    "name": "FREEDOM TOURS AND BIKE RENTAL MURDESHWAR",
    "slug": "freedom-tours-and-bike-rental-murdeshwar",
    "description": "FREEDOM TAXI AND BIKE RENTAL MURDESHWAR",
    "shortDescription": "FREEDOM TAXI AND BIKE RENTAL MURDESHWAR",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "FREEDOM TOURS AND BIKE RENTAL MURDESHWAR",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.71
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 13,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 3,
        "5": 6
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.519Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 5603,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJc-fIhShHvDsRycxX54KmU80",
    "type": "hotel",
    "name": "Netrani Inn",
    "slug": "netrani-inn",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipPH7eCfOdvLQbThB8c9DM6aKDxDAIohSzLU8PL_=s1024",
        "alt": "Netrani Inn",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar Temple Hwy, opposite Sea Beach view, Beach, Matadahitlu, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 2.48
    },
    "contact": {
      "phone": "08088998888",
      "whatsapp": "08088998888",
      "website": "https://www.netrani.in/"
    },
    "rating": {
      "average": 5,
      "count": 12,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 3,
        "5": 6
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "beach",
      "AC",
      "parking"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.521Z",
    "category": "budget",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipPH7eCfOdvLQbThB8c9DM6aKDxDAIohSzLU8PL_=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 6825,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJSZAAeOtBvDsR85FDVkl2yU0",
    "type": "hotel",
    "name": "DHANUSH BIKE RENTAL AND TAXI SERVICES",
    "slug": "dhanush-bike-rental-and-taxi-services",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "DHANUSH BIKE RENTAL AND TAXI SERVICES",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.46
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 9,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 2,
        "5": 4
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.519Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 5352,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJ-WHUCfJHvDsRKaavtgWrII8",
    "type": "hotel",
    "name": "PANCHAJANYA Rooms, Hall and Home stay",
    "slug": "panchajanya-rooms-hall-and-home-stay",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "PANCHAJANYA Rooms, Hall and Home stay",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.67
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 8,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 2,
        "5": 4
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.520Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 6618,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJByVF44pHvDsR91UP9rXONdA",
    "type": "hotel",
    "name": "Murudeshwar Ocean Stay",
    "slug": "murudeshwar-ocean-stay",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Murudeshwar Ocean Stay",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.28
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 8,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 2,
        "5": 4
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.520Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 2737,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJ2fUJCwBHvDsR24WDotNJdlY",
    "type": "hotel",
    "name": "Shivani’s sunset bay beach resort",
    "slug": "shivani-s-sunset-bay-beach-resort",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AG0ilSwfL8X3CRMzdOZMZDByoKB6NJJBXpvjF1V8Qq62f3yHbfWDD7jUMhb3471lnN9RCwEZQGpXBY_txg_DGS2648QKYVxysuqQKawSk7fxO1lvv-URnfZ_XXzsCzZ9mdwwwz-rV7QUg0Vj1Ern=s1024",
        "alt": "Shivani’s sunset bay beach resort",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "4F7P+PG, Bastimakki, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.46
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 7,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 2,
        "5": 3
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.521Z",
    "category": "luxury",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AG0ilSwfL8X3CRMzdOZMZDByoKB6NJJBXpvjF1V8Qq62f3yHbfWDD7jUMhb3471lnN9RCwEZQGpXBY_txg_DGS2648QKYVxysuqQKawSk7fxO1lvv-URnfZ_XXzsCzZ9mdwwwz-rV7QUg0Vj1Ern=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 5177,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJz8PLcABBvDsRUfO6wKCOpys",
    "type": "hotel",
    "name": "Hotel Aathithya ಹೋಟೆಲ್ ಆತಿಥ್ಯ",
    "slug": "hotel-aathithya-",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Hotel Aathithya ಹೋಟೆಲ್ ಆತಿಥ್ಯ",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.9
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 7,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 2,
        "5": 3
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.522Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 4058,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJLyRzPgBHvDsRoFJxKfKrGpw",
    "type": "hotel",
    "name": "Savion Homestay",
    "slug": "savion-homestay",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AG0ilSxrNHHoBwnjvFdBll-tntVuvrQrl0tzQfexM8UNHWM9n7aTHEbp-ih1v0FzJoFqRGJIWpWG_wijchWbnAIbLiNfWvBJFbwPbMwasZrc2zeka-vo6N1j1nJ7qwzuTvgdJ_z-KuGl=s1024",
        "alt": "Savion Homestay",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "3FRQ+2QC, NH 66, Matadahitlu, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.67
    },
    "contact": {
      "phone": "09611547015",
      "whatsapp": "09611547015"
    },
    "rating": {
      "average": 5,
      "count": 6,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 1,
        "5": 3
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.519Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AG0ilSxrNHHoBwnjvFdBll-tntVuvrQrl0tzQfexM8UNHWM9n7aTHEbp-ih1v0FzJoFqRGJIWpWG_wijchWbnAIbLiNfWvBJFbwPbMwasZrc2zeka-vo6N1j1nJ7qwzuTvgdJ_z-KuGl=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 4863,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJyYrhUPZBvDsRpfB4_LF39qk",
    "type": "hotel",
    "name": "Shri Eshwari Homestay Murdeshwar",
    "slug": "shri-eshwari-homestay-murdeshwar",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipOuf3c3eIipys-3O-u1L6G7h7umfmlu3XvMPzh3=s1024",
        "alt": "Shri Eshwari Homestay Murdeshwar",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Kaikini, Murdeshwar, Bhatkal, Karnataka 581421",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.54
    },
    "contact": {
      "phone": "07090550433",
      "whatsapp": "07090550433"
    },
    "rating": {
      "average": 5,
      "count": 6,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 1,
        "5": 3
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "price"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.519Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipOuf3c3eIipys-3O-u1L6G7h7umfmlu3XvMPzh3=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 3129,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJYTEEbQBHvDsRzCt8p7KSgsM",
    "type": "hotel",
    "name": "Shanti Nivas Homestay",
    "slug": "shanti-nivas-homestay",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AG0ilSwJWQ8oeXqsYkqqsPUBc4u2P9Ud5OMO4rGVnA6CQ9u-RwBTHdio50ZsFS2BXX0y8qvLyJNW4NRwQMAtcsVCZq5wy3CJVROtqjFg_ayH3ZXc5Dm-z2y1AorifpCypKi70w=s1024",
        "alt": "Shanti Nivas Homestay",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "3FQV+7RC, KG School basti road, near Mahima event hall, Matadahitlu, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 2.3
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 5,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 1,
        "5": 2
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.520Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AG0ilSwJWQ8oeXqsYkqqsPUBc4u2P9Ud5OMO4rGVnA6CQ9u-RwBTHdio50ZsFS2BXX0y8qvLyJNW4NRwQMAtcsVCZq5wy3CJVROtqjFg_ayH3ZXc5Dm-z2y1AorifpCypKi70w=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 3283,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJNyO7FrxBvDsRu3GRJUg5vlQ",
    "type": "hotel",
    "name": "Kumuda Organic Farm Products - Murudeshwar",
    "slug": "kumuda-organic-farm-products-murudeshwar",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Kumuda Organic Farm Products - Murudeshwar",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.16
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 5,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 1,
        "5": 2
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.520Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 2258,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJiXwjA8hHvDsRre9OZ1SEX6w",
    "type": "hotel",
    "name": "Coral Adventures Netrani",
    "slug": "coral-adventures-netrani",
    "description": "Coral Adventures Netrani offers unforgettable scuba diving experiences at the stunning Netrani Island, near Murudeshwar. Dive into crystal-clear waters and explore vibrant coral reefs teeming with marine life. Whether you’re a beginner or an experienced diver, our certified instructors ensure a safe and thrilling adventure tailored to your skill level. We provide premium equipment, expert guidance, and breathtaking underwater photography. Perfect for thrill-seekers, nature lovers, and adventurers, Coral Adventures promises memories that last a lifetime. Book now to discover the magic of the Arabian Sea and elevate your Murudeshwar trip with Coral Adventures Netrani!",
    "shortDescription": "Coral Adventures Netrani offers unforgettable scuba diving experiences at the st",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Coral Adventures Netrani",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 2.03
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 4,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 1,
        "5": 2
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.527Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 3617,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJRRteMQBBvDsR5U6CfQmZVqg",
    "type": "hotel",
    "name": "Sri Nagachoudeswari",
    "slug": "sri-nagachoudeswari",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Sri Nagachoudeswari",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.63
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 3,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 1
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.523Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 3986,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJY7icAABBvDsRzh6gP_HsfXc",
    "type": "hotel",
    "name": "Shree Sagar Residency",
    "slug": "shree-sagar-residency",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=7jBZBzIRYIcwKaU79NZzkg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=350.82208&pitch=0&thumbfov=100",
        "alt": "Shree Sagar Residency",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "3GV4+637, Road, Mavalli, Murdeshwar, Karnataka 581421",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 2.05
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 3,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 1
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.524Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=7jBZBzIRYIcwKaU79NZzkg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=350.82208&pitch=0&thumbfov=100",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 3242,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJKyEEfrVHvDsRbE_ZyJutNYE",
    "type": "hotel",
    "name": "Nehan Car Bike rentals",
    "slug": "nehan-car-bike-rentals",
    "description": "We provide rent a bike and car service in murudeshwar",
    "shortDescription": "We provide rent a bike and car service in murudeshwar",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Nehan Car Bike rentals",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.25
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 2,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 1
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.519Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 3171,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJi9alD85GvDsRKJzAxEImbvE",
    "type": "hotel",
    "name": "Sheshu Home Stay",
    "slug": "sheshu-home-stay",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AG0ilSwWhe7xogDWCgcPI16tvQ6uli-BEDFtafGtgJubQ1rrZj5JfrX4swLXxEbIeIzaOd8MRq_OM4rNNlb3PkKiFE0sXmTy23lGCFR39UDcTUasB_6g41G6ZckZEZc1d3Olo646g7Chl0bW9bQ=s1024",
        "alt": "Sheshu Home Stay",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Sheshu Compound, Murdeshwar Rd, near Bakthal, Matadahitlu, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.76
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 2,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 1
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.519Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AG0ilSwWhe7xogDWCgcPI16tvQ6uli-BEDFtafGtgJubQ1rrZj5JfrX4swLXxEbIeIzaOd8MRq_OM4rNNlb3PkKiFE0sXmTy23lGCFR39UDcTUasB_6g41G6ZckZEZc1d3Olo646g7Chl0bW9bQ=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 3586,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJk9gxx0xHvDsRoQ1ZmDXJzPA",
    "type": "hotel",
    "name": "Mrudesh Residency and Delux AC Homestay",
    "slug": "mrudesh-residency-and-delux-ac-homestay",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Mrudesh Residency and Delux AC Homestay",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.7
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 2,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 1
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.520Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 3647,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJ5RlldQBBvDsRdg3JRdP5Gro",
    "type": "hotel",
    "name": "JOY HOMESTAY MURDESHWAR",
    "slug": "joy-homestay-murdeshwar",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "JOY HOMESTAY MURDESHWAR",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.66
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 2,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 1
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.520Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 5200,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJL74BDUFHvDsRd_b3IxoQTcA",
    "type": "hotel",
    "name": "Nagashree Yatri Nivas",
    "slug": "nagashree-yatri-nivas",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipPElTMrtZNj18z-_r7VpFg_DoxCq1svsL3rzdmm=s1024",
        "alt": "Nagashree Yatri Nivas",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar Temple Hwy, Beach Road, Matadahitlu, Murdeshwara, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 2.24
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 2,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 1
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.520Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://lh3.ggpht.com/p/AF1QipPElTMrtZNj18z-_r7VpFg_DoxCq1svsL3rzdmm=s1024",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 6596,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  },
  {
    "id": "ChIJNzSAVgBBvDsRiy1Oo7kdEwI",
    "type": "hotel",
    "name": "HOTEL SWAGATH LUNCH HOME",
    "slug": "hotel-swagath-lunch-home",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "HOTEL SWAGATH LUNCH HOME",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.39
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 2,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 1
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.523Z",
    "category": "mid-range",
    "amenities": hotelAmenities.slice(0, 6),
    "rooms": [
      {
        "id": "room-1",
        "name": "Standard Room",
        "description": "Comfortable room with modern amenities",
        "capacity": 2,
        "bedType": "Queen Bed",
        "area": 250,
        "images": [
          {
            "id": "room-img-1",
            "type": "image",
            "url": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
            "alt": "Room"
          }
        ],
        "amenities": hotelAmenities.slice(0, 4),
        "basePrice": 4256,
        "taxes": 360,
        "availability": true
      }
    ],
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "policies": {
      "cancellation": "Free cancellation up to 24 hours before check-in",
      "children": "Children under 10 stay free",
      "pets": "Pets not allowed",
      "smoking": "Non-smoking property"
    },
    "nearbyAttractions": [
      "Murudeshwar Temple",
      "Beach",
      "Local Markets"
    ]
  }
];

// Restaurants data from CSV - Top 14 rated
const restaurants: Restaurant[] = [
  {
    "id": "ChIJcQ6UiNNGvDsR7rKXuSm54uc",
    "type": "restaurant",
    "name": "Shree Vinayaka Residency",
    "slug": "shree-vinayaka-residency",
    "description": "Unfussy rooms, some with air conditioning, in a down-to-earth hotel with a restaurant.",
    "shortDescription": "Unfussy rooms, some with air conditioning, in a down-to-earth hotel with a resta",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipP6MXYgwSd1zDqLQ07h4xQjmwJfxusQI9_vuyun=s1024",
        "alt": "Shree Vinayaka Residency",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar Temple Main Road, Murudeshwara, Opp H.P Gas, Bhatkal, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.94
    },
    "contact": {
      "phone": "09535961455",
      "whatsapp": "09535961455",
      "website": "http://shreevinayakaresidency.com/"
    },
    "rating": {
      "average": 3.8,
      "count": 1393,
      "breakdown": {
        "1": 13,
        "2": 55,
        "3": 208,
        "4": 417,
        "5": 696
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [
      "hot water",
      "beach",
      "car parking",
      "check in",
      "railway station"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.521Z",
    "cuisine": [
      "South Indian",
      "North Indian"
    ],
    "mealTypes": [
      "lunch",
      "dinner"
    ],
    "priceRange": "budget",
    "openingHours": {
      "monday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "tuesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "wednesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "thursday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "friday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "saturday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "sunday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      }
    },
    "features": [
      "Family Friendly",
      "Good Food",
      "Clean"
    ],
    "menu": [],
    "averageCostForTwo": 1815
  },
  {
    "id": "ChIJIfyHDx1HvDsRadtMKD7ryTk",
    "type": "restaurant",
    "name": "Hotel Udupis Pingar murdeshwara",
    "slug": "hotel-udupis-pingar-murdeshwara",
    "description": "Open from 11pm to 11am, hotel udupis pingar is lively eatery in murdeshwar offering both vegetarian and non vegeterian cuisine and also south indian food are available",
    "shortDescription": "Open from 11pm to 11am, hotel udupis pingar is lively eatery in murdeshwar offer",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AG0ilSyEVL310Wh4LKYZcDG0pP1830nNPENoxE-XaH9fi9wH9rSLJNEnk8k8Cq_Pi4YPAiOhSA-kauTtqqo05_Bxz9EX9NAAhfEWsavYKDk7JNVh8fyLg1mVjfanM6HewFJwBC2Nu8vtAtLlnpCC=s1024",
        "alt": "Hotel Udupis Pingar murdeshwara",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "opp. to canara bank, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.18
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 13,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 3,
        "5": 6
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "curry"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.522Z",
    "cuisine": [
      "South Indian",
      "North Indian"
    ],
    "mealTypes": [
      "lunch",
      "dinner"
    ],
    "priceRange": "mid-range",
    "openingHours": {
      "monday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "tuesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "wednesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "thursday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "friday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "saturday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "sunday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      }
    },
    "features": [
      "Family Friendly",
      "Good Food",
      "Clean"
    ],
    "menu": [],
    "averageCostForTwo": 1424
  },
  {
    "id": "ChIJOWGrLwBHvDsRv4F5BbevGJY",
    "type": "restaurant",
    "name": "Hotel Shri Annapoorneshwari pure veg",
    "slug": "hotel-shri-annapoorneshwari-pure-veg",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AG0ilSxHS2AS1RoVQ10Pg84Ug3EqBN1bmlxZuSK3ZUBB_REvH_2GQ5qzvVCGkY3tGZXgUZ3C5W9ka_baMvXGBVvUkfUfG049QAvK0qrN7x2CsGUuzWoqPYk0wrhxMoI9fycSv7DpzcYsLk_ku28=s1024",
        "alt": "Hotel Shri Annapoorneshwari pure veg",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "3FVQ+WXX, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.34
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 5,
      "count": 5,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 1,
        "5": 2
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "idli"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.522Z",
    "cuisine": [
      "South Indian",
      "North Indian"
    ],
    "mealTypes": [
      "lunch",
      "dinner"
    ],
    "priceRange": "mid-range",
    "openingHours": {
      "monday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "tuesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "wednesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "thursday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "friday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "saturday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "sunday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      }
    },
    "features": [
      "Family Friendly",
      "Good Food",
      "Clean"
    ],
    "menu": [],
    "averageCostForTwo": 985
  },
  {
    "id": "ChIJrzoYXnBHvDsR_WQYFzyYjGo",
    "type": "restaurant",
    "name": "Seapearl Homestay Murudeshwar",
    "slug": "seapearl-homestay-murudeshwar",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipP6TrALWV7bQnGbAHrGtZk9DTw-ULn-I7xVWAqT=s1024",
        "alt": "Seapearl Homestay Murudeshwar",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Ocean Edge Beach Resort Rd, Murdeshwar, Bailur, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.63
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210",
      "website": "https://seapearlhomestay.homestaybuddy.in/"
    },
    "rating": {
      "average": 4.7,
      "count": 155,
      "breakdown": {
        "1": 1,
        "2": 6,
        "3": 23,
        "4": 46,
        "5": 77
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "beach",
      "distance",
      "price",
      "clean room",
      "property"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.521Z",
    "cuisine": [
      "South Indian",
      "North Indian"
    ],
    "mealTypes": [
      "lunch",
      "dinner"
    ],
    "priceRange": "mid-range",
    "openingHours": {
      "monday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "tuesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "wednesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "thursday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "friday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "saturday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "sunday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      }
    },
    "features": [
      "Family Friendly",
      "Good Food",
      "Clean"
    ],
    "menu": [],
    "averageCostForTwo": 1032
  },
  {
    "id": "ChIJvTO5HgBBvDsRGATPBdR1G0Y",
    "type": "restaurant",
    "name": "RNS FOOD PLAZA",
    "slug": "rns-food-plaza",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AG0ilSw2uGw4WFFF-UlDM6gTUGr-NCY7Hi_bJZixS1sLHoKG83yuXwRfPvVcXFSyRUYbBIEfYVVmnQp3wQZv3IZe0yOlKbvEJTv48XdpKRxIdw1YKktwgYG6RxrU6DGXfsaYRUJkNYE=s1024",
        "alt": "RNS FOOD PLAZA",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "NH 66, Kaikini, Murdeshwar, Mavalli, Karnataka 581421",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 2.34
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210",
      "website": "https://www.naveenhotels.com/"
    },
    "rating": {
      "average": 4.8,
      "count": 22,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 3,
        "4": 6,
        "5": 11
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.522Z",
    "cuisine": [
      "South Indian",
      "North Indian"
    ],
    "mealTypes": [
      "lunch",
      "dinner"
    ],
    "priceRange": "mid-range",
    "openingHours": {
      "monday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "tuesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "wednesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "thursday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "friday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "saturday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "sunday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      }
    },
    "features": [
      "Family Friendly",
      "Good Food",
      "Clean"
    ],
    "menu": [],
    "averageCostForTwo": 1571
  },
  {
    "id": "ChIJV--VFABBvDsRiaP5UmAVY74",
    "type": "restaurant",
    "name": "Benzy’s Family Restaurant",
    "slug": "benzy-s-family-restaurant",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AG0ilSyQeRAWBpcRG12NGlpz0CgEszoB0cXqel594POAPfFpgwUoeEH-pEK_FUQqYEOUGhp26xLzI6fiL4hvAZyz7PklTYfhRtLgLRtqsjkDF91R-uMX6sqgecwiMaspM1AA32TStQ2ZTA=s1024",
        "alt": "Benzy’s Family Restaurant",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "ಮೂಡಲ ಮನೆ ವಠಾರ, 1, Mane Colony, Moodala, Mavalli, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.15
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 4.7,
      "count": 9,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 2,
        "5": 4
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.522Z",
    "cuisine": [
      "South Indian",
      "North Indian"
    ],
    "mealTypes": [
      "lunch",
      "dinner"
    ],
    "priceRange": "mid-range",
    "openingHours": {
      "monday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "tuesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "wednesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "thursday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "friday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "saturday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "sunday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      }
    },
    "features": [
      "Family Friendly",
      "Good Food",
      "Clean"
    ],
    "menu": [],
    "averageCostForTwo": 1510
  },
  {
    "id": "ChIJ10ABGs5gvjsRQwcq7Fa-_qs",
    "type": "restaurant",
    "name": "Sea View Beach Resort",
    "slug": "sea-view-beach-resort",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AG0ilSwpCr43reiH0oUvv_CdYOWbcbZWOrwUI3zv_ebqhJtVe895jfD3--eH65SJX7XQ0Y32i6HiyTG_XihCOvjk6696QzETwIguRQStVMhYSdqjz_IE0NVsyWrSQQSfA-UiHNuitOPj=s1024",
        "alt": "Sea View Beach Resort",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Golf beach Road, Taluk, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.76
    },
    "contact": {
      "phone": "09483421777",
      "whatsapp": "09483421777"
    },
    "rating": {
      "average": 3.9,
      "count": 771,
      "breakdown": {
        "1": 7,
        "2": 30,
        "3": 115,
        "4": 231,
        "5": 385
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [
      "hot water",
      "price",
      "budget",
      "bedsheets",
      "behaviour"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.521Z",
    "cuisine": [
      "South Indian",
      "North Indian"
    ],
    "mealTypes": [
      "lunch",
      "dinner"
    ],
    "priceRange": "budget",
    "openingHours": {
      "monday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "tuesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "wednesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "thursday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "friday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "saturday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "sunday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      }
    },
    "features": [
      "Family Friendly",
      "Good Food",
      "Clean"
    ],
    "menu": [],
    "averageCostForTwo": 717
  },
  {
    "id": "ChIJOcygy09mvDsRi-KqfEhKvzk",
    "type": "restaurant",
    "name": "Wild Woods Resort",
    "slug": "wild-woods-resort",
    "description": "Secluded forest resort offering polished cottages, plus a warm open-air eatery & an Ayurvedic spa.",
    "shortDescription": "Secluded forest resort offering polished cottages, plus a warm open-air eatery &",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipMPLi_zpJA_0JaPSz12Z9X6yuY-vKxqrFKkDF9b=s1024",
        "alt": "Wild Woods Resort",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Toodalli, Village, Yedthare Post, Shirur, Checkpost, Baindur, Karnataka 576228",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.87
    },
    "contact": {
      "phone": "07760976680",
      "whatsapp": "07760976680"
    },
    "rating": {
      "average": 4.4,
      "count": 177,
      "breakdown": {
        "1": 1,
        "2": 7,
        "3": 26,
        "4": 53,
        "5": 88
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [
      "villas",
      "relax",
      "plants",
      "peaceful",
      "river"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.521Z",
    "cuisine": [
      "South Indian",
      "North Indian"
    ],
    "mealTypes": [
      "lunch",
      "dinner"
    ],
    "priceRange": "mid-range",
    "openingHours": {
      "monday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "tuesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "wednesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "thursday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "friday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "saturday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "sunday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      }
    },
    "features": [
      "Family Friendly",
      "Good Food",
      "Clean"
    ],
    "menu": [],
    "averageCostForTwo": 1520
  },
  {
    "id": "ChIJMUbdnMVHvDsRsBMArHQbeSc",
    "type": "restaurant",
    "name": "Coral Beach Shack & Coral Seafront Cottage",
    "slug": "coral-beach-shack-coral-seafront-cottage",
    "description": "We are specialized in Sea food & fish thali. .We are right on the beach facing the Arabian sea. We also have AC beach facing rooms available with Free wifi and hot shower. Anything else please feel free to message.",
    "shortDescription": "We are specialized in Sea food & fish thali. .We are right on the beach facing t",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipMeYJK9AZihlsos0VSHBS08f_L9KKHZGpGR9fFl=s1024",
        "alt": "Coral Beach Shack & Coral Seafront Cottage",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "H.no 07, on the, beach, Matadahitlu, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.55
    },
    "contact": {
      "phone": "09945434843",
      "whatsapp": "09945434843"
    },
    "rating": {
      "average": 4.1,
      "count": 126,
      "breakdown": {
        "1": 1,
        "2": 5,
        "3": 18,
        "4": 37,
        "5": 63
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [
      "rooms",
      "service",
      "price",
      "ghee roast",
      "property"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.523Z",
    "cuisine": [
      "South Indian",
      "North Indian"
    ],
    "mealTypes": [
      "lunch",
      "dinner"
    ],
    "priceRange": "mid-range",
    "openingHours": {
      "monday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "tuesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "wednesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "thursday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "friday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "saturday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "sunday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      }
    },
    "features": [
      "Family Friendly",
      "Good Food",
      "Clean"
    ],
    "menu": [],
    "averageCostForTwo": 1153
  },
  {
    "id": "ChIJuW7ENzFBvDsRELOSGXJ1n2w",
    "type": "restaurant",
    "name": "HOTEL KADAMBA",
    "slug": "hotel-kadamba",
    "description": "Best non veg restaurant in bhatkal taluk",
    "shortDescription": "Best non veg restaurant in bhatkal taluk",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipOg4lWecsgj5Sf4cT4x1gacv-WsGVVbQv0B7UWD=s1024",
        "alt": "HOTEL KADAMBA",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "NH 66, Kaikini, Bhatkal, Mavalli, Karnataka 581421",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 2.21
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210"
    },
    "rating": {
      "average": 4,
      "count": 97,
      "breakdown": {
        "1": 0,
        "2": 3,
        "3": 14,
        "4": 29,
        "5": 48
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [
      "fish"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.523Z",
    "cuisine": [
      "South Indian",
      "North Indian"
    ],
    "mealTypes": [
      "lunch",
      "dinner"
    ],
    "priceRange": "mid-range",
    "openingHours": {
      "monday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "tuesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "wednesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "thursday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "friday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "saturday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "sunday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      }
    },
    "features": [
      "Family Friendly",
      "Good Food",
      "Clean"
    ],
    "menu": [],
    "averageCostForTwo": 774
  },
  {
    "id": "Reviews: 30 reviews,,093098 86781,,Royal Plate Restaurant (Owner),https://www.google.com/maps/contrib/105709283617289173161,https://lh3.ggpht.com/p/AF1QipMq-zVgpyNcz2JsoF3UXgRAbjj6z54BPQRrujj4=s1024,Family restaurant,Family restaurant",
    "type": "restaurant",
    "name": "Restaurant,,,Open All Days,Temple Road",
    "slug": "restaurant-open-all-days-temple-road",
    "description": "near KSRTC) bustand",
    "shortDescription": "near KSRTC) bustand",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Restaurant,,,Open All Days,Temple Road",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.8
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210",
      "website": "price"
    },
    "rating": {
      "average": 4,
      "count": 0,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.521Z",
    "cuisine": [
      "South Indian",
      "North Indian"
    ],
    "mealTypes": [
      "lunch",
      "dinner"
    ],
    "priceRange": "mid-range",
    "openingHours": {
      "monday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "tuesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "wednesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "thursday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "friday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "saturday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "sunday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      }
    },
    "features": [
      "Family Friendly",
      "Good Food",
      "Clean"
    ],
    "menu": [],
    "averageCostForTwo": 1796
  },
  {
    "id": "Reviews: 27 reviews,,,,Netrani Cafe (Owner),https://www.google.com/maps/contrib/107669217693172539894,https://lh3.ggpht.com/p/AF1QipOLxDPsGXcNkgYg3Hp5RQFEBYVvKlDjieM06zx9=s1024,Cafe,Cafe",
    "type": "restaurant",
    "name": "Coffee shop,,,Open All Days,Netrani Cafe",
    "slug": "coffee-shop-open-all-days-netrani-cafe",
    "description": "above Uttarkannada Product",
    "shortDescription": "above Uttarkannada Product",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Coffee shop,,,Open All Days,Netrani Cafe",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.91
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210",
      "website": "atmosphere"
    },
    "rating": {
      "average": 4,
      "count": 0,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.521Z",
    "cuisine": [
      "South Indian",
      "North Indian"
    ],
    "mealTypes": [
      "lunch",
      "dinner"
    ],
    "priceRange": "mid-range",
    "openingHours": {
      "monday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "tuesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "wednesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "thursday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "friday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "saturday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "sunday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      }
    },
    "features": [
      "Family Friendly",
      "Good Food",
      "Clean"
    ],
    "menu": [],
    "averageCostForTwo": 885
  },
  {
    "id": "Reviews: 154 reviews,,098456 90271,,Nayak Fish Land (Owner),https://www.google.com/maps/contrib/100460882514604295924,https://lh3.ggpht.com/p/AF1QipMzOGjfNV5OqfLEnoHGf8TMuMOwl699Aq_1v6jf=s1024,Seafood restaurant,Seafood restaurant",
    "type": "restaurant",
    "name": "Restaurant,,,Open All Days,Main Road Murdeshwar",
    "slug": "restaurant-open-all-days-main-road-murdeshwar",
    "description": "beside Hotel Bharath Bhawan",
    "shortDescription": "beside Hotel Bharath Bhawan",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Restaurant,,,Open All Days,Main Road Murdeshwar",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.19
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210",
      "website": "fish curry"
    },
    "rating": {
      "average": 4,
      "count": 0,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.521Z",
    "cuisine": [
      "South Indian",
      "North Indian"
    ],
    "mealTypes": [
      "lunch",
      "dinner"
    ],
    "priceRange": "mid-range",
    "openingHours": {
      "monday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "tuesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "wednesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "thursday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "friday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "saturday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "sunday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      }
    },
    "features": [
      "Family Friendly",
      "Good Food",
      "Clean"
    ],
    "menu": [],
    "averageCostForTwo": 1538
  },
  {
    "id": "ChIJDYJDodBGvDsRn6fCnhE_tGA",
    "type": "restaurant",
    "name": "Hotel Shri Ganesh Bhavan",
    "slug": "hotel-shri-ganesh-bhavan",
    "description": "A great place in Murudeshwar",
    "shortDescription": "Great accommodation",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AG0ilSz42qwfAhKSh_l7F8NYbS9L6V6roMfbUdVZ-2zEpmTT0XVXMASasCan_NnXW-yBDuhtwQr5WQKQBu2lu0YwI8jPC-ukMtDZQvA24Fo2XpKMHmRL4ahj_USvOL5taA_m9gZspiq7=s1024",
        "alt": "Hotel Shri Ganesh Bhavan",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar Temple Hwy, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.74
    },
    "contact": {
      "phone": "09480462175",
      "whatsapp": "09480462175"
    },
    "rating": {
      "average": 3.7,
      "count": 291,
      "breakdown": {
        "1": 2,
        "2": 11,
        "3": 43,
        "4": 87,
        "5": 145
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [
      "idli",
      "service",
      "south indian food",
      "price",
      "set dosa"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.522Z",
    "cuisine": [
      "South Indian",
      "North Indian"
    ],
    "mealTypes": [
      "lunch",
      "dinner"
    ],
    "priceRange": "budget",
    "openingHours": {
      "monday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "tuesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "wednesday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "thursday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "friday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "saturday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      },
      "sunday": {
        "open": "11:00",
        "close": "22:00",
        "isOpen": true
      }
    },
    "features": [
      "Family Friendly",
      "Good Food",
      "Clean"
    ],
    "menu": [],
    "averageCostForTwo": 1949
  }
];

// Scuba Operators data from CSV - Top 5 rated
const scubaOperators: ScubaOperator[] = [
  {
    "id": "ChIJ8QhbOw1HvDsRVlyWtsCPNOo",
    "type": "scuba",
    "name": "Murdeshwar scuba diving",
    "slug": "murdeshwar-scuba-diving",
    "description": "Netrani scuba",
    "shortDescription": "Netrani scuba",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://lh3.ggpht.com/p/AF1QipNmTJGz8YDaCXCXht5nGdJs3x-kJc4Llbew-qCM=s1024",
        "alt": "Murdeshwar scuba diving",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Netrani, Matadahitlu, Murdeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.51
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210",
      "website": "http://murdeshwarscubadiving.com/"
    },
    "rating": {
      "average": 5,
      "count": 55,
      "breakdown": {
        "1": 0,
        "2": 2,
        "3": 8,
        "4": 16,
        "5": 27
      }
    },
    "isInstantConfirm": true,
    "isVerified": true,
    "tags": [
      "adventure"
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.527Z",
    "certifications": [
      "PADI",
      "SSI"
    ],
    "languages": [
      "English",
      "Hindi",
      "Kannada"
    ],
    "experience": 7,
    "packages": [
      {
        "id": "pkg-1",
        "name": "Discover Scuba",
        "description": "Perfect for beginners",
        "duration": 4,
        "depth": 12,
        "difficulty": "beginner",
        "includes": [
          "Equipment",
          "Instructor",
          "Lunch"
        ],
        "excludes": [
          "Transport"
        ],
        "price": 3941,
        "groupSize": {
          "min": 2,
          "max": 8
        },
        "images": []
      }
    ],
    "equipment": [
      "BCDs",
      "Regulators",
      "Wetsuits",
      "Masks"
    ],
    "safetyRecord": "Excellent safety record",
    "diveSites": [
      "Netrani Island"
    ]
  },
  {
    "id": "Reviews: 10 reviews,http://netraniadventures.com/,099004 31111,,Netrani Adventures (Owner),https://www.google.com/maps/contrib/109795284132416829487,https://lh3.ggpht.com/p/AF1QipPvkwT7yCxJ8pkZMPY3U8fkIVGpTDWYDu3AjtpX=s1024,SCUBA instructor,SCUBA instructor",
    "type": "scuba",
    "name": "Adventure Sports Center",
    "slug": "adventure-sports-center",
    "description": "Entertainment agency",
    "shortDescription": "Entertainment agency",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Adventure Sports Center",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.61
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210",
      "website": "snacks"
    },
    "rating": {
      "average": 4,
      "count": 0,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.527Z",
    "certifications": [
      "PADI",
      "SSI"
    ],
    "languages": [
      "English",
      "Hindi",
      "Kannada"
    ],
    "experience": 6,
    "packages": [
      {
        "id": "pkg-1",
        "name": "Discover Scuba",
        "description": "Perfect for beginners",
        "duration": 4,
        "depth": 12,
        "difficulty": "beginner",
        "includes": [
          "Equipment",
          "Instructor",
          "Lunch"
        ],
        "excludes": [
          "Transport"
        ],
        "price": 3038,
        "groupSize": {
          "min": 2,
          "max": 8
        },
        "images": []
      }
    ],
    "equipment": [
      "BCDs",
      "Regulators",
      "Wetsuits",
      "Masks"
    ],
    "safetyRecord": "Excellent safety record",
    "diveSites": [
      "Netrani Island"
    ]
  },
  {
    "id": "Reviews: 4 reviews,https://www.dolphindive.net/,082775 25511,,Dolphin Dive (Owner),https://www.google.com/maps/contrib/106118108747906325856,https://lh3.ggpht.com/p/AF1QipOStv51xAlYlO0waBApOWCLoy_sCkZ1QVIR0Uz2=s1024,Dive shop,Dive shop",
    "type": "scuba",
    "name": "Diving center",
    "slug": "diving-center",
    "description": "SCUBA instructor,Open 24 hours,,Open All Days,Murudeshwar Temple Hwy",
    "shortDescription": "SCUBA instructor,Open 24 hours,,Open All Days,Murudeshwar Temple Hwy",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Diving center",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.44
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210",
      "website": "coral"
    },
    "rating": {
      "average": 4,
      "count": 0,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.527Z",
    "certifications": [
      "PADI",
      "SSI"
    ],
    "languages": [
      "English",
      "Hindi",
      "Kannada"
    ],
    "experience": 5,
    "packages": [
      {
        "id": "pkg-1",
        "name": "Discover Scuba",
        "description": "Perfect for beginners",
        "duration": 4,
        "depth": 12,
        "difficulty": "beginner",
        "includes": [
          "Equipment",
          "Instructor",
          "Lunch"
        ],
        "excludes": [
          "Transport"
        ],
        "price": 4035,
        "groupSize": {
          "min": 2,
          "max": 8
        },
        "images": []
      }
    ],
    "equipment": [
      "BCDs",
      "Regulators",
      "Wetsuits",
      "Masks"
    ],
    "safetyRecord": "Excellent safety record",
    "diveSites": [
      "Netrani Island"
    ]
  },
  {
    "id": "Reviews: 9 reviews,https://www.coasttocoastadventurers.in/,,,Coast to Coast Adventurers Murdeshwara (Owner),https://www.google.com/maps/contrib/117692814047800975232,https://lh3.ggpht.com/p/AF1QipPHIzPsV3J9wxGn8c79m7M9AmR-t3Mpa20o0ye6=s1024,Dive shop,Dive shop",
    "type": "scuba",
    "name": "SCUBA instructor,Open 24 hours,,Open All Days,Main Road",
    "slug": "scuba-instructor-open-24-hours-open-all-days-main-road",
    "description": "near Temple Street",
    "shortDescription": "near Temple Street",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "SCUBA instructor,Open 24 hours,,Open All Days,Main Road",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 0.5
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210",
      "website": "videos"
    },
    "rating": {
      "average": 4,
      "count": 0,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.527Z",
    "certifications": [
      "PADI",
      "SSI"
    ],
    "languages": [
      "English",
      "Hindi",
      "Kannada"
    ],
    "experience": 10,
    "packages": [
      {
        "id": "pkg-1",
        "name": "Discover Scuba",
        "description": "Perfect for beginners",
        "duration": 4,
        "depth": 12,
        "difficulty": "beginner",
        "includes": [
          "Equipment",
          "Instructor",
          "Lunch"
        ],
        "excludes": [
          "Transport"
        ],
        "price": 3518,
        "groupSize": {
          "min": 2,
          "max": 8
        },
        "images": []
      }
    ],
    "equipment": [
      "BCDs",
      "Regulators",
      "Wetsuits",
      "Masks"
    ],
    "safetyRecord": "Excellent safety record",
    "diveSites": [
      "Netrani Island"
    ]
  },
  {
    "id": "Reviews: 194 reviews,http://www.justdivescuba.in/,087624 12121,,Just Dive (Owner),https://www.google.com/maps/contrib/117950412157372227024,https://lh3.ggpht.com/p/AF1QipMkncujdeu07d3iEkAkRWoLRyydFNd70wsSuxIa=s1024,SCUBA instructor,SCUBA instructor",
    "type": "scuba",
    "name": "Dive shop,7 am–7 pm,,Open All Days,Golf Beach road",
    "slug": "dive-shop-7-am-7-pm-open-all-days-golf-beach-road",
    "description": "Matadahitlu",
    "shortDescription": "Matadahitlu",
    "images": [
      {
        "id": "img-1",
        "type": "image",
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "alt": "Dive shop,7 am–7 pm,,Open All Days,Golf Beach road",
        "isPrimary": true
      }
    ],
    "location": {
      "coordinates": {
        "lat": 14.0945,
        "lng": 74.4845
      },
      "address": "Murudeshwar, Karnataka 581350",
      "landmark": "Near Murudeshwar Temple",
      "distanceFromTemple": 1.74
    },
    "contact": {
      "phone": "919876543210",
      "whatsapp": "919876543210",
      "website": "room"
    },
    "rating": {
      "average": 4,
      "count": 0,
      "breakdown": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0
      }
    },
    "isInstantConfirm": false,
    "isVerified": true,
    "tags": [],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2025-11-09T10:28:31.527Z",
    "certifications": [
      "PADI",
      "SSI"
    ],
    "languages": [
      "English",
      "Hindi",
      "Kannada"
    ],
    "experience": 14,
    "packages": [
      {
        "id": "pkg-1",
        "name": "Discover Scuba",
        "description": "Perfect for beginners",
        "duration": 4,
        "depth": 12,
        "difficulty": "beginner",
        "includes": [
          "Equipment",
          "Instructor",
          "Lunch"
        ],
        "excludes": [
          "Transport"
        ],
        "price": 3645,
        "groupSize": {
          "min": 2,
          "max": 8
        },
        "images": []
      }
    ],
    "equipment": [
      "BCDs",
      "Regulators",
      "Wetsuits",
      "Masks"
    ],
    "safetyRecord": "Excellent safety record",
    "diveSites": [
      "Netrani Island"
    ]
  }
];

// Boating Operators data from CSV
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
