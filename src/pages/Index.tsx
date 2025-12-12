import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrustedBySection from "@/components/TrustedBySection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import NewsSection from "@/components/NewsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TrustedBySection />
        <CaseStudiesSection />
        <NewsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
