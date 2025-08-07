import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Activity, Heart, MessageSquare, BarChart3, Plus, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AppContext";
import cattleCareLogo from "@/assets/cattle-care-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = useAuth();

  const handleAddActivityClick = () => {
    // Scroll to health section and trigger add activity
    const healthSection = document.getElementById('health');
    if (healthSection) {
      healthSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Dispatch custom event to open the add activity form
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('openAddActivity'));
    }, 500);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  const navItems = [
    { name: "Dashboard", href: "#dashboard", icon: BarChart3 },
    { name: "Monitoring", href: "#monitoring", icon: Activity },
    { name: "Kesehatan", href: "#health", icon: Heart },
    { name: "Tambah Aktivitas", href: "#add-activity", icon: Plus, onClick: handleAddActivityClick },
    { name: "AI Assistant", href: "#chatbot", icon: MessageSquare },
  ];

  const handleNavClick = (item: any, e: React.MouseEvent) => {
    if (item.onClick) {
      e.preventDefault();
      item.onClick();
      setIsOpen(false);
    }
  };

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
                className="h-20 w-20 object-contain"
              />
              <h1 className="text-xl font-bold text-gradient-primary">
                CattleCARE
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
                    onClick={(e) => handleNavClick(item, e)}
                    className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </a>
                );
              })}
              
              {/* User Info and Logout */}
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
                <span className="text-sm text-muted-foreground">
                  Hai, {user?.name}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-muted-foreground hover:text-primary flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Keluar
                </Button>
              </div>
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
                className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 cursor-pointer"
                onClick={(e) => handleNavClick(item, e)}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </a>
            );
          })}
          
          {/* Mobile User Info and Logout */}
          <div className="border-t border-border pt-2 mt-2">
            <div className="px-3 py-2">
              <p className="text-sm text-muted-foreground mb-2">
                Hai, {user?.name}
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-muted-foreground hover:text-primary flex items-center gap-2 w-full justify-start p-0"
              >
                <LogOut className="h-4 w-4" />
                Keluar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;