import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CTO, TechCorp Solutions",
      content: "Infosense Technology delivered our project ahead of schedule with exceptional quality. Their expertise in Laravel and API development is outstanding.",
      avatar: "R",
      avatarColor: "from-primary to-blue-600"
    },
    {
      name: "Sarah Johnson",
      position: "Product Manager, InnovateHub",
      content: "Working with Gowtham and his team was exceptional. Their attention to detail and technical expertise helped us achieve 30% better performance in our application.",
      avatar: "S",
      avatarColor: "from-success to-green-600"
    },
    {
      name: "Michael Chen",
      position: "Founder, StartupVenture",
      content: "Excellent communication and project delivery. The SaaS solution they built for us has significantly improved our business operations.",
      avatar: "M",
      avatarColor: "from-purple-500 to-purple-600"
    }
  ];

  const StarRating = () => (
    <div className="flex text-yellow-400 mb-6" data-testid="star-rating">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses for delivering exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-testid="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg"
              data-testid={`testimonial-card-${index}`}
            >
              <StarRating />
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
