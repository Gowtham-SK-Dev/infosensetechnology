import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Zap, Award, Rocket } from "lucide-react";

export default function HeroSection() {
  const [counters, setCounters] = useState({ projects: 0, experience: 0, saas: 0 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const targets = { projects: 200, experience: 4.4, saas: 100 };
    const duration = 2000;
    const steps = { projects: targets.projects / 100, experience: targets.experience / 100, saas: targets.saas / 100 };

    let current = { projects: 0, experience: 0, saas: 0 };
    const interval = setInterval(() => {
      current.projects = Math.min(current.projects + steps.projects, targets.projects);
      current.experience = Math.min(current.experience + steps.experience, targets.experience);
      current.saas = Math.min(current.saas + steps.saas, targets.saas);

      setCounters({
        projects: Math.floor(current.projects),
        experience: Number(current.experience.toFixed(1)),
        saas: Math.floor(current.saas)
      });

      if (current.projects >= targets.projects && 
          current.experience >= targets.experience && 
          current.saas >= targets.saas) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl animate-spin-slow"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({ length: 120 }).map((_, i) => (
            <div key={i} className="border-r border-b border-muted-foreground/20"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="stagger-children">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Zap className="w-4 h-4" />
            <span>Trusted by 200+ Businesses</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="hero-title">
            Welcome to <span className="gradient-text">Infosense Technology</span><br />
            Building Tomorrow's Solutions Today
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="hero-description">
            Welcome to the future of software development! Led by <span className="text-foreground font-semibold">Gowtham</span>, we transform your ideas into powerful digital solutions. Experience innovation, reliability, and excellence in every project we deliver.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("contact")}
              className="btn-primary px-8 py-4 text-lg"
              data-testid="button-hire-us"
            >
              <Rocket className="mr-2 w-5 h-5" />
              Start Your Project
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="btn-secondary px-8 py-4 text-lg"
              data-testid="button-our-services"
            >
              <Play className="mr-2 w-5 h-5" />
              View Our Work
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="modern-card p-8 text-center group" data-testid="stat-projects">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {counters.projects}+
              </div>
              <div className="text-muted-foreground font-medium">Projects Delivered</div>
            </div>
            <div className="modern-card p-8 text-center group" data-testid="stat-experience">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-success/20 transition-colors">
                <Zap className="w-6 h-6 text-success" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {counters.experience}+
              </div>
              <div className="text-muted-foreground font-medium">Years of Experience</div>
            </div>
            <div className="modern-card p-8 text-center group" data-testid="stat-saas">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                <Rocket className="w-6 h-6 text-purple-500" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {counters.saas}%
              </div>
              <div className="text-muted-foreground font-medium">SaaS Solutions Available</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle" data-testid="scroll-indicator">
        <ChevronDown className="text-muted-foreground w-6 h-6" />
      </div>
    </section>
  );
}
