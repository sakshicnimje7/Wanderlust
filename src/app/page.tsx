import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from './components/HeroSection';
import MoodSearchSection from './components/MoodSearchSection';
import FeaturedDestinationsSection from './components/FeaturedDestinationsSection';
import TravelVideoShowcase from './components/TravelVideoShowcase';
import TravelServicesSection from './components/TravelServicesSection';
import ItineraryTeaser from './components/ItineraryTeaser';
import TravelIntelPanel from './components/TravelIntelPanel';
import WhyWanderlust from './components/WhyWanderlust';
import TestimonialsSection from './components/TestimonialsSection';
import LiveBookingToast from './components/LiveBookingToast';
import SpotlightCardInit from './components/SpotlightCardInit';

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-background">
      <Header />
      <HeroSection />
      <TravelVideoShowcase />
      <TravelServicesSection />
      <MoodSearchSection />
      <FeaturedDestinationsSection />
      <ItineraryTeaser />
      <TravelIntelPanel />
      <WhyWanderlust />
      <TestimonialsSection />
      <Footer />
      <LiveBookingToast />
      <SpotlightCardInit />
    </main>
  );
}