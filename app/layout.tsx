import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', 'arial'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  fallback: ['serif'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F8FF' },
    { media: '(prefers-color-scheme: dark)', color: '#0E1C2E' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'Murudeshwar Bookings - Your Perfect Coastal Escape Awaits',
    template: '%s | Murudeshwar Bookings'
  },
  description: 'Discover and book the best hotels, restaurants, scuba diving, and boating experiences near Murudeshwar Temple, Karnataka. Instant confirmation, verified providers, and unbeatable prices.',
  keywords: [
    'Murudeshwar booking',
    'Murudeshwar hotels',
    'Murudeshwar restaurants',
    'Netrani Island scuba diving',
    'Murudeshwar boating',
    'Karnataka tourism',
    'temple stay',
    'beach resort',
    'coastal Karnataka',
    'Arabian Sea activities'
  ],
  authors: [{ name: 'Murudeshwar Bookings' }],
  creator: 'Murudeshwar Bookings',
  publisher: 'Murudeshwar Bookings',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://murudeshwar-bookings.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://murudeshwar-bookings.vercel.app',
    siteName: 'Murudeshwar Bookings',
    title: 'Murudeshwar Bookings - Your Perfect Coastal Escape',
    description: 'Book hotels, restaurants, scuba diving & boating near Murudeshwar Temple. Verified providers, instant confirmation.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Murudeshwar Temple and coastline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Murudeshwar Bookings - Your Perfect Coastal Escape',
    description: 'Book hotels, restaurants, scuba diving & boating near Murudeshwar Temple. Verified providers, instant confirmation.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'travel',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Murudeshwar Bookings',
  description: 'Premier booking platform for accommodation, dining, and activities near Murudeshwar Temple, Karnataka',
  url: 'https://murudeshwar-bookings.vercel.app',
  logo: 'https://murudeshwar-bookings.vercel.app/images/logo.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Murudeshwar',
    addressRegion: 'Karnataka',
    postalCode: '581350',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 14.0942,
    longitude: 74.4843,
  },
  sameAs: [
    'https://www.facebook.com/murudeshwarbookings',
    'https://www.instagram.com/murudeshwarbookings',
    'https://twitter.com/murudeshwarbookings',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Murudeshwar Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LodgingBusiness',
          name: 'Hotel Bookings',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Restaurant',
          name: 'Restaurant Reservations',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'TouristActivity',
          name: 'Scuba Diving Tours',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'BoatTrip',
          name: 'Boating Experiences',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F5F8FF" />
        <meta name="msapplication-TileColor" content="#F5F8FF" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body 
        className={`${inter.className} antialiased bg-primary-50 text-neutral-800`}
        suppressHydrationWarning
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 btn-primary"
        >
          Skip to main content
        </a>
        
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}