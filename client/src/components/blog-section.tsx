import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogSection() {
  const posts = [
    {
      id: 1,
      title: "Building Scalable SaaS Applications with Laravel and Node.js",
      excerpt: "Learn the best practices for creating scalable SaaS applications using modern PHP and JavaScript frameworks. We share our experience from building multiple successful products.",
      category: "Development",
      readTime: "8 min read",
      publishedAt: "2024-01-15",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      featured: true
    },
    {
      id: 2,
      title: "API Security Best Practices in 2024",
      excerpt: "Comprehensive guide to securing your APIs against modern threats. From authentication strategies to rate limiting and monitoring.",
      category: "Security",
      readTime: "6 min read",
      publishedAt: "2024-01-10",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      featured: false
    },
    {
      id: 3,
      title: "Database Optimization Techniques for High-Performance Applications",
      excerpt: "Advanced database optimization strategies that we've implemented across various enterprise projects to achieve significant performance improvements.",
      category: "Performance",
      readTime: "10 min read",
      publishedAt: "2024-01-05",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      featured: false
    },
    {
      id: 4,
      title: "The Future of ERP Integration: Microservices Architecture",
      excerpt: "How we're revolutionizing ERP integrations using microservices patterns. Real-world case studies from our enterprise clients.",
      category: "Enterprise",
      readTime: "12 min read",
      publishedAt: "2023-12-28",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      featured: false
    }
  ];

  const categories = ["All", "Development", "Security", "Performance", "Enterprise"];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="blog-title">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends in software development, technical insights, and industry best practices from our team of experts.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" data-testid="blog-categories">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className="rounded-full"
              data-testid={`category-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16" data-testid="featured-post">
          {posts.filter(post => post.featured).map(post => (
            <div key={post.id} className="modern-card overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button className="w-fit group" data-testid="read-featured-post">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" data-testid="blog-posts-grid">
          {posts.filter(post => !post.featured).map(post => (
            <article key={post.id} className="modern-card overflow-hidden group" data-testid={`blog-post-${post.id}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <Badge className="absolute top-4 left-4 bg-background/90 text-foreground">
                  {post.category}
                </Badge>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto font-semibold group">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold mb-4">Want to Share Your Story?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Have a software development challenge or success story? We'd love to feature your project 
              and share insights that could help other businesses.
            </p>
            <Button onClick={scrollToContact} className="btn-primary" data-testid="button-contact-blog">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}