import UrgencyBanner from "@/components/UrgencyBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PackagesSection from "@/components/PackagesSection";
import FAQSection from "@/components/FAQSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <UrgencyBanner />
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PackagesSection />
      <FAQSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
