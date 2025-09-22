"use client"

import { Code, Smartphone, Cloud, Plug, Settings, TrendingUp } from "lucide-react"
import { useTheme } from "next-themes"

export default function ServicesSection() {
  const { resolvedTheme } = useTheme()
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored software solutions built from ground up to meet your specific business requirements and challenges.",
      color:
        resolvedTheme === "dark"
          ? "text-primary bg-primary/10 group-hover:bg-primary/20"
          : "text-primary bg-primary/10 group-hover:bg-primary/20",
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Development",
      description:
        "Responsive web applications and mobile apps that deliver exceptional user experiences across all platforms.",
      color:
        resolvedTheme === "dark"
          ? "text-success bg-success/10 group-hover:bg-success/20"
          : "text-success bg-success/10 group-hover:bg-success/20",
    },
    {
      icon: Cloud,
      title: "SaaS Solutions",
      description:
        "Cloud-based software solutions including our Gmail Validator and other productivity tools for businesses.",
      color:
        resolvedTheme === "dark"
          ? "text-purple-600 bg-purple-100 group-hover:bg-purple-200"
          : "text-purple-600 bg-purple-100 group-hover:bg-purple-200",
    },
    {
      icon: Plug,
      title: "API Development & Integration",
      description: "Secure, scalable APIs and seamless third-party integrations to connect your systems efficiently.",
      color:
        resolvedTheme === "dark"
          ? "text-orange-600 bg-orange-100 group-hover:bg-orange-200"
          : "text-orange-600 bg-orange-100 group-hover:bg-orange-200",
    },
    {
      icon: Settings,
      title: "ERP Integration",
      description: "Oracle ERP and other enterprise system integrations to streamline your business processes.",
      color:
        resolvedTheme === "dark"
          ? "text-red-600 bg-red-100 group-hover:bg-red-200"
          : "text-red-600 bg-red-100 group-hover:bg-red-200",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Database optimization, microservices architecture, and performance tuning for maximum efficiency.",
      color:
        resolvedTheme === "dark"
          ? "text-indigo-600 bg-indigo-100 group-hover:bg-indigo-200"
          : "text-indigo-600 bg-indigo-100 group-hover:bg-indigo-200",
    },
  ]

  const highlights = [
    { icon: "fab fa-php", title: "PHP Laravel", color: resolvedTheme === "dark" ? "text-primary" : "text-primary" },
    { icon: "fab fa-node-js", title: "Node.js", color: resolvedTheme === "dark" ? "text-success" : "text-success" },
    {
      icon: "fas fa-database",
      title: "Database Optimization",
      color: resolvedTheme === "dark" ? "text-primary" : "text-primary",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Secure APIs",
      color: resolvedTheme === "dark" ? "text-success" : "text-success",
    },
  ]

  return (
    <>
      {/* Quick Highlights */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="expertise-title">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specializing in modern technologies to deliver robust, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-testid="tech-highlights">
            {highlights.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="modern-card p-6 transform group-hover:scale-105">
                  <i className={`${tech.icon} text-4xl ${tech.color} mb-4`}></i>
                  <h3 className="font-semibold text-foreground">{tech.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 modern-card p-8" data-testid="gmail-validator-highlight">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Real-time Gmail Validation Tool</h3>
                <p className="text-muted-foreground">Validate email addresses instantly with our advanced API</p>
              </div>
              <button
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
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
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="services-title">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive software development services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="modern-card p-8 transform hover:scale-105 group"
                data-testid={`service-card-${index}`}
              >
                <div
                  className={`p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 transition-colors ${service.color}`}
                >
                  <service.icon className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
