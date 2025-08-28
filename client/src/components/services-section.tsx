import { Code, Smartphone, Cloud, Plug, Settings, TrendingUp } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built from ground up to meet your specific business requirements and challenges.",
      color: "text-primary bg-primary/10 group-hover:bg-primary/20"
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Development",
      description: "Responsive web applications and mobile apps that deliver exceptional user experiences across all platforms.",
      color: "text-success bg-success/10 group-hover:bg-success/20"
    },
    {
      icon: Cloud,
      title: "SaaS Solutions",
      description: "Cloud-based software solutions including our Gmail Validator and other productivity tools for businesses.",
      color: "text-purple-600 bg-purple-100 group-hover:bg-purple-200"
    },
    {
      icon: Plug,
      title: "API Development & Integration",
      description: "Secure, scalable APIs and seamless third-party integrations to connect your systems efficiently.",
      color: "text-orange-600 bg-orange-100 group-hover:bg-orange-200"
    },
    {
      icon: Settings,
      title: "ERP Integration",
      description: "Oracle ERP and other enterprise system integrations to streamline your business processes.",
      color: "text-red-600 bg-red-100 group-hover:bg-red-200"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Database optimization, microservices architecture, and performance tuning for maximum efficiency.",
      color: "text-indigo-600 bg-indigo-100 group-hover:bg-indigo-200"
    }
  ];

  const highlights = [
    { icon: "fab fa-php", title: "PHP Laravel", color: "text-primary" },
    { icon: "fab fa-node-js", title: "Node.js", color: "text-success" },
    { icon: "fas fa-database", title: "Database Optimization", color: "text-primary" },
    { icon: "fas fa-shield-alt", title: "Secure APIs", color: "text-success" }
  ];

  return (
    <>
      {/* Quick Highlights */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="expertise-title">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specializing in modern technologies to deliver robust, scalable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-testid="tech-highlights">
            {highlights.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <i className={`${tech.icon} text-4xl ${tech.color} mb-4`}></i>
                  <h3 className="font-semibold text-secondary">{tech.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl" data-testid="gmail-validator-highlight">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Real-time Gmail Validation Tool</h3>
                <p className="text-gray-600">Validate email addresses instantly with our advanced API</p>
              </div>
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-4 md:mt-0 bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                data-testid="button-try-gmail-validator"
              >
                Try Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="services-title">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development services tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                data-testid={`service-card-${index}`}
              >
                <div className={`p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 transition-colors ${service.color}`}>
                  <service.icon className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
