import { Heart, Wifi, Database, Shield } from "lucide-react";

const Footer = () => {
  const features = [
    { icon: Wifi, text: "ESP32 IoT Integration" },
    { icon: Database, text: "Supabase Backend" },
    { icon: Heart, text: "Health Monitoring" },
    { icon: Shield, text: "Data Security" }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Cattle CARE System
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Sistem monitoring closed house untuk sapi dengan teknologi IoT terdepan. 
              Menggabungkan ESP32, Supabase, dan AI untuk peternakan modern yang efisien.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#monitoring" className="text-muted-foreground hover:text-primary transition-colors">
                  Monitoring Dashboard
                </a>
              </li>
              <li>
                <a href="#health" className="text-muted-foreground hover:text-primary transition-colors">
                  Health Tracking
                </a>
              </li>
              <li>
                <a href="#chatbot" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Assistant
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Dokumentasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontak</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Email: info@cattlecare.id</p>
              <p>Phone: +62 xxx-xxx-xxxx</p>
              <p>WhatsApp: +62 xxx-xxx-xxxx</p>
              <div className="mt-4">
                <p className="font-medium text-foreground mb-2">Teknologi:</p>
                <p>ESP32 • Supabase • React • TypeScript</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Cattle CARE System. Sistem monitoring peternakan modern dengan teknologi terdepan.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-destructive fill-current" />
              <span>untuk kemajuan peternakan Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;