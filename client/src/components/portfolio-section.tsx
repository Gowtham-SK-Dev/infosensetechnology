import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PortfolioSection() {
  const projects = [
    {
      title: "TVS-FIT",
      description: "Enterprise fleet management solution with real-time tracking and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tech: ["Laravel", "MySQL", "Angular"],
      achievement: "Improved fleet efficiency by 35%",
      techColors: ["bg-primary/10 text-primary", "bg-success/10 text-success", "bg-orange-100 text-orange-600"]
    },
    {
      title: "Partsmart",
      description: "Comprehensive parts inventory management system with automated reordering capabilities.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tech: ["PHP", "Node.js", "Oracle"],
      achievement: "Reduced inventory costs by 25%",
      techColors: ["bg-primary/10 text-primary", "bg-success/10 text-success", "bg-purple-100 text-purple-600"]
    },
    {
      title: "Olabi",
      description: "Custom CRM solution with advanced reporting and customer relationship management features.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      tech: ["Laravel", "MySQL", "APIs"],
      achievement: "Increased customer retention by 40%",
      techColors: ["bg-primary/10 text-primary", "bg-success/10 text-success", "bg-red-100 text-red-600"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="portfolio-title">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our successful implementations and client solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
              data-testid={`project-card-${project.title.toLowerCase()}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} project workspace`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  data-testid={`project-image-${project.title.toLowerCase()}`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-secondary mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className={`${project.techColors[techIndex]} px-3 py-1 rounded-full text-sm`}
                        data-testid={`tech-badge-${tech.toLowerCase()}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="bg-accent p-3 rounded-lg" data-testid={`achievement-${project.title.toLowerCase()}`}>
                  <p className="text-sm text-secondary font-semibold">Achievement:</p>
                  <p className="text-sm text-gray-600">{project.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            onClick={scrollToContact}
            className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            data-testid="button-view-full-portfolio"
          >
            <span>View Full Portfolio</span>
            <span>→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
