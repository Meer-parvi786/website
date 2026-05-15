import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DestinationsSlider from "@/components/sections/DestinationsSlider";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SeasonalBanner from "@/components/sections/SeasonalBanner";
import KKHBackupSection from "@/components/sections/KKHBackupSection";
import TeamSection from "@/components/sections/TeamSection";
import GallerySection from "@/components/sections/GallerySection";
import BlogSection from "@/components/sections/BlogSection";
import BookingSection from "@/components/sections/BookingSection";
import Footer from "@/components/sections/Footer";
import MobileStickyBar from "@/components/sections/MobileStickyBar";
import PaymentSection from "@/components/sections/PaymentSection";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      
      <WhyChooseUs />
      <DestinationsSlider />
      <TestimonialsSection />
      <SeasonalBanner />
      <KKHBackupSection />
      <TeamSection />
      <GallerySection />
      <BlogSection />
      <PaymentSection />
      <BookingSection />
      <Footer />
      <MobileStickyBar />

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-16 lg:hidden" />
    </main>
  );
}
