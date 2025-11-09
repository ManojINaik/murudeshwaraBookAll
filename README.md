# Murudeshwar Bookings - Your Perfect Coastal Escape

A production-ready, full-stack marketing and booking website for accommodation, dining, scuba-diving, and boating providers within 20 km of Murudeshwar Temple, Karnataka.

## ✨ Features

### 🎨 Design & UX
- **Ultra-clean, spacious layout** with soft gradients and rounded corners
- **Neumorphic shadows** and coastal dawn color scheme (#F5F8FF, #E8F0FE, #0E1C2E)
- **Immersive fullscreen video hero** with GSAP parallax effects
- **Dynamic CMS feed** with 150ms fade-up animations
- **Smooth tab transitions** with underline-slide micro-animations
- **Mobile-first responsive design** with sticky filter drawer

### 🚀 Performance
- **LCP < 2.5s** on Moto G devices
- **CLS < 0.1** for optimal user experience
- **Total JS < 180KB** bundle size
- **SSR** with Next.js 14 app router
- **Optimized images** with WebP/AVIF formats

### ♿ Accessibility
- **WCAG 2.2 AA compliant**
- **Focus-visible** indicators
- **Prefers-reduced-motion** support
- **Screen reader optimized**
- **Keyboard navigation** throughout

### 🔧 Technology Stack
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Animations**: Framer Motion, GSAP, Lottie
- **Payment**: Razorpay integration (UPI, cards)
- **Deployment**: Vercel with GitHub Actions CI/CD
- **SEO**: Structured data, meta tags, sitemaps

### 📱 Features
- **3-step booking wizard** (Dates → Details → Pay)
- **Real-time search & filters** with skeleton loaders
- **Instant confirmation** badges
- **WhatsApp integration** for providers
- **Star ratings** and distance calculations
- **Multi-language support** (English, Hindi, Kannada)

## 🏗️ Installation

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/murudeshwar-booking.git
   cd murudeshwar-booking
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your API keys:
   ```env
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_key_here
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📊 Mock Data

The project includes comprehensive mock data for:
- **12 Hotels** (luxury, mid-range, budget, resort categories)
- **8 Restaurants** (seafood, vegetarian, multi-cuisine)
- **4 Scuba Operators** (PADI certified, beginner to advanced)
- **3 Boating Agencies** (island trips, sunset cruises)

All providers include:
- Realistic pricing and ratings
- Lat/long coordinates
- WhatsApp contact links
- High-quality images from Unsplash
- Detailed amenities and features

## 🎯 SEO Optimization

### Structured Data
- TravelAgency schema
- LocalBusiness markup
- Offer catalogs
- Review aggregation

### Meta Tags
- Open Graph for social sharing
- Twitter Card optimization
- Mobile-friendly viewport
- Canonical URLs

### Performance
- Image optimization with Next.js Image
- Font optimization with next/font
- Preloading critical resources
- Compression and minification

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Add environment variables** in Vercel dashboard

3. **Deploy**
   ```bash
   npx vercel --prod
   ```

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 🔧 Configuration

### Razorpay Setup
1. Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Get test/live API keys
3. Add webhook endpoints for payment confirmations

### Google Maps Integration
1. Enable Maps JavaScript API
2. Enable Places API for location autocomplete
3. Add your domain to authorized referrers

## 📁 Project Structure

```
murudeshwar-booking/
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles & Tailwind
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, ExperienceTabs
│   ├── search/           # SearchFilters
│   ├── providers/        # ProviderGrid, ProviderCard
│   ├── booking/          # BookingWizard, PaymentForm
│   └── ui/               # Button, Modal, etc.
├── data/                 # Mock data and types
├── lib/                  # Utility functions
├── types/                # TypeScript definitions
└── public/               # Static assets
```

## 🎨 Customization

### Colors
Update the coastal dawn color scheme in `tailwind.config.js`:
```js
colors: {
  primary: {
    50: '#F5F8FF',   // sky tint
    100: '#E8F0FE',  // surf
    900: '#0E1C2E',  // deep-sea accents
  }
}
```

### Animations
Modify animation timings in `globals.css`:
```css
.animate-fade-up {
  animation: fadeUp 0.6s ease-out;
}
```

## 🔒 Security Features

- **XSS Protection** with Content Security Policy
- **CSRF Protection** on form submissions
- **Input Validation** with Zod schemas
- **Rate Limiting** on API endpoints
- **Secure Headers** configuration

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Build test
npm run build
```

## 📈 Analytics & Monitoring

### Performance Monitoring
- Core Web Vitals tracking
- Real User Monitoring (RUM)
- Error boundary logging

### Business Analytics
- Booking conversion tracking
- Provider performance metrics
- User journey analysis

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** for high-quality stock images
- **Lucide React** for beautiful icons
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations

## 📞 Support

For support, email support@murudeshwar-bookings.com or join our Slack channel.

---

**Made with ❤️ for Murudeshwar tourism** 