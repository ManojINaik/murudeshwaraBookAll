import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ExperienceTabs } from '@/components/sections/ExperienceTabs';
import { ProviderGrid } from '@/components/sections/ProviderGrid';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ExperienceTabs />
        <ProviderGrid />
      </main>
      <Footer />
    </>
  );
} 