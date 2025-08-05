import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Database, Bot } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern Cattle Farm" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-pulse-farm">
            <Wifi className="h-4 w-4 text-white mr-2" />
            <span className="text-sm font-medium text-white">Sistem IoT Terdepan</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Sistem Monitoring
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Closed House Sapi
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Platform IoT terintegrasi dengan ESP32, Supabase, dan AI untuk monitoring lingkungan kandang, 
            rekording kesehatan sapi, tracking reproduksi, dan chatbot assistant yang cerdas.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/80 drop-shadow-md">
              <Wifi className="h-5 w-5 text-primary drop-shadow-sm" />
              <span>Real-time Monitoring</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 drop-shadow-md">
              <Database className="h-5 w-5 text-primary drop-shadow-sm" />
              <span>Data Recording</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 drop-shadow-md">
              <Bot className="h-5 w-5 text-primary drop-shadow-sm" />
              <span>AI Assistant</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 shadow-farm transition-all duration-300 transform hover:scale-105"
            >
              Mulai Monitoring
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Lihat Demo
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/10 rounded-full animate-float hidden lg:block" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-primary/10 rounded-full animate-float hidden lg:block" style={{animationDelay: '4s'}}></div>
      </div>
    </section>
  );
};

export default HeroSection;