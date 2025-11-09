export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Location {
  coordinates: Coordinates;
  address: string;
  landmark: string;
  distanceFromTemple: number; // in km
}

export interface Contact {
  phone: string;
  whatsapp: string;
  email?: string;
  website?: string;
}

export interface Rating {
  average: number;
  count: number;
  breakdown: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  category: 'basic' | 'premium' | 'safety' | 'accessibility';
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  alt: string;
  caption?: string;
  isPrimary?: boolean;
}

export interface BaseProvider {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  images: MediaItem[];
  location: Location;
  contact: Contact;
  rating: Rating;
  isInstantConfirm: boolean;
  isVerified: boolean;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface HotelRoom {
  id: string;
  name: string;
  description: string;
  capacity: number;
  bedType: string;
  area: number; // in sq ft
  images: MediaItem[];
  amenities: Amenity[];
  basePrice: number;
  taxes: number;
  availability: boolean;
}

export interface Hotel extends BaseProvider {
  type: 'hotel';
  category: 'budget' | 'mid-range' | 'luxury' | 'resort';
  amenities: Amenity[];
  rooms: HotelRoom[];
  checkInTime: string;
  checkOutTime: string;
  policies: {
    cancellation: string;
    children: string;
    pets: string;
    smoking: string;
  };
  nearbyAttractions: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isVegetarian: boolean;
  isVegan: boolean;
  spiceLevel?: 'mild' | 'medium' | 'hot' | 'very-hot';
  allergens?: string[];
  image?: string;
}

export interface Restaurant extends BaseProvider {
  type: 'restaurant';
  cuisine: string[];
  mealTypes: ('breakfast' | 'lunch' | 'dinner' | 'snacks')[];
  priceRange: 'budget' | 'mid-range' | 'fine-dining';
  openingHours: {
    [key: string]: {
      open: string;
      close: string;
      isOpen: boolean;
    };
  };
  features: string[];
  menu: MenuItem[];
  averageCostForTwo: number;
}

export interface ScubaPackage {
  id: string;
  name: string;
  description: string;
  duration: number; // in hours
  depth: number; // in meters
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  includes: string[];
  excludes: string[];
  price: number;
  groupSize: {
    min: number;
    max: number;
  };
  images: MediaItem[];
}

export interface ScubaOperator extends BaseProvider {
  type: 'scuba';
  certifications: string[];
  languages: string[];
  experience: number; // in years
  packages: ScubaPackage[];
  equipment: string[];
  safetyRecord: string;
  diveSites: string[];
}

export interface BoatTrip {
  id: string;
  name: string;
  description: string;
  duration: number; // in hours
  capacity: number;
  includes: string[];
  route: string[];
  price: number;
  timeSlots: string[];
  images: MediaItem[];
}

export interface BoatingOperator extends BaseProvider {
  type: 'boating';
  boatTypes: string[];
  capacity: {
    min: number;
    max: number;
  };
  trips: BoatTrip[];
  safetyEquipment: string[];
  licenses: string[];
}

export type Provider = Hotel | Restaurant | ScubaOperator | BoatingOperator;

export interface SearchFilters {
  category: 'all' | 'hotels' | 'restaurants' | 'scuba' | 'boating';
  priceRange: [number, number];
  distance: number;
  rating: number;
  amenities: string[];
  instantConfirm: boolean;
  sortBy: 'relevance' | 'price-low' | 'price-high' | 'rating' | 'distance';
}

export interface BookingGuest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age?: number;
  emergencyContact?: {
    name: string;
    phone: string;
    relation: string;
  };
}

export interface BookingDetails {
  checkIn?: string;
  checkOut?: string;
  guests: BookingGuest[];
  roomIds?: string[];
  packageIds?: string[];
  tripIds?: string[];
  specialRequests?: string;
  totalAmount: number;
  taxes: number;
  discountAmount?: number;
  finalAmount: number;
}

export interface Booking {
  id: string;
  providerId: string;
  provider: Provider;
  details: BookingDetails;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentId?: string;
  razorpayOrderId?: string;
  createdAt: string;
  updatedAt: string;
  confirmationNumber?: string;
}

export interface PaymentDetails {
  amount: number;
  currency: string;
  razorpayKeyId: string;
  orderId: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
} 