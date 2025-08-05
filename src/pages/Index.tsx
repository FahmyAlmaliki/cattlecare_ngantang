import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MonitoringDashboard from "@/components/MonitoringDashboard";
import HealthTracking from "@/components/HealthTracking";
import ChatbotSection from "@/components/ChatbotSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MonitoringDashboard />
      <HealthTracking />
      <ChatbotSection />
      <Footer />
    </div>
  );
};

export default Index;
