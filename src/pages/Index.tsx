import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import InternshipRoles from "@/components/landing/InternshipRoles";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <InternshipRoles />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
