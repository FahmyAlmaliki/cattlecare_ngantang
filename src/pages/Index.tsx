import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AppContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MonitoringDashboard from "@/components/MonitoringDashboard";
import HealthTracking from "@/components/HealthTracking";
import ChatbotSection from "@/components/ChatbotSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Memuat...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

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
