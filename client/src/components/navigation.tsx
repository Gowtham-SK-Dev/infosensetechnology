import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg" 
          : "bg-transparent"
      }`}
      data-testid="main-navigation"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold gradient-text" data-testid="logo">
              Vedan 360<span className="text-primary"></span>
            </h2>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {["home", "about", "services", "portfolio", "products", "blog", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 capitalize relative group"
                  data-testid={`nav-${item}`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button 
                onClick={() => scrollToSection("contact")}
                className="btn-primary ml-2"
                data-testid="nav-cta-button"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/80 hover:text-primary"
              data-testid="mobile-menu-button"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden" data-testid="mobile-menu">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-background/95 backdrop-blur-xl border-t border-border">
              {["home", "about", "services", "portfolio", "products", "blog", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 transition-all capitalize"
                  data-testid={`mobile-nav-${item}`}
                >
                  {item}
                </button>
              ))}
              <div className="pt-4 border-t border-border">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="w-full btn-primary"
                  data-testid="mobile-cta-button"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
