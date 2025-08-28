import { useEffect, useState } from "react";
import { Linkedin, Twitter, Github, MessageCircle } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [visitorCount, setVisitorCount] = useState(1247); // Simulated visitor count

  useEffect(() => {
    // Update year if needed
    const year = new Date().getFullYear();
    setCurrentYear(year);

    // Simulate real-time visitor count (in a real app, this would come from analytics)
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    { name: "Custom Development", href: "services" },
    { name: "Web & Mobile Apps", href: "services" },
    { name: "SaaS Solutions", href: "services" },
    { name: "API Development", href: "services" },
    { name: "ERP Integration", href: "services" }
  ];

  const company = [
    { name: "About Us", href: "about" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Products", href: "products" },
    { name: "Contact", href: "contact" },
    { name: "Privacy Policy", href: "#" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" }
  ];

  return (
    <footer className="bg-secondary text-white py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2" data-testid="footer-brand">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Infosense Technology</h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Building scalable solutions for real problems. We specialize in custom software development, SaaS solutions, and enterprise integrations.
            </p>
            <div className="text-sm text-gray-400 mb-4">
              <p>🌍 Serving clients worldwide</p>
              <p>👥 {visitorCount.toLocaleString()}+ visitors this month</p>
              <p>⚡ Real-time support available</p>
            </div>
            <div className="flex space-x-4" data-testid="footer-social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                  aria-label={social.label}
                  data-testid={`social-link-${social.label.toLowerCase()}`}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
          
          <div data-testid="footer-services">
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="hover:text-white transition-colors text-left"
                    data-testid={`footer-service-${index}`}
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-testid="footer-company">
            <h4 className="text-xl font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              {company.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="hover:text-white transition-colors text-left"
                    data-testid={`footer-company-${index}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8" data-testid="footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © {currentYear} Infosense Technology. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-gray-300">
              <span>Made with ❤️ by Gowtham & Team</span>
              <span className="text-xs">Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
