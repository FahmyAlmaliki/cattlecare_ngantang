import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Activity, Heart, MessageSquare, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import cattleCareLogo from "@/assets/cattle-care-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "#dashboard", icon: BarChart3 },
    { name: "Monitoring", href: "#monitoring", icon: Activity },
    { name: "Kesehatan", href: "#health", icon: Heart },
    { name: "AI Assistant", href: "#chatbot", icon: MessageSquare },
  ];

  return (
    <nav className="bg-card/90 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img 
                src={cattleCareLogo} 
                alt="Cattle CARE Logo" 
                className="h-10 w-10 object-contain"
              />
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Cattle CARE
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded="false"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-b border-border">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;