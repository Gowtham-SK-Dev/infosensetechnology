import gowthamImg from "../images/gowtham.jpg"
export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8" data-testid="about-title">
              About <span className="gradient-text">Infosense</span> Technology
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Infosense Technology is a forward-thinking software development company led by{" "}
              <strong className="text-foreground">Gowtham</strong>, delivering innovative and scalable solutions that
              solve real-world problems. With over 4.4 years of experience in the industry, we specialize in creating
              robust applications that drive business growth.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to bridge the gap between complex technical challenges and elegant solutions, ensuring our
              clients receive not just software, but strategic advantages that propel their businesses forward.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the go-to technology partner for businesses seeking innovative, scalable, and reliable
                software solutions that transform ideas into successful digital products.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-6" data-testid="company-timeline">
              <h3 className="text-2xl font-bold mb-6">Our Journey</h3>
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                  2020
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Company Founded</h4>
                  <p className="text-muted-foreground">Started with a vision to deliver quality software solutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                  2022
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Major Projects</h4>
                  <p className="text-muted-foreground">Successfully delivered TVS-FIT and Partsmart solutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-success text-success-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                  2024
                </div>
                <div>
                  <h4 className="font-semibold mb-1">SaaS Innovation</h4>
                  <p className="text-muted-foreground">Launched Gmail Validator and expanding product portfolio</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
<<<<<<< HEAD
              <img
                src={gowthamImg || "/placeholder.svg"}
=======
              <img 
                src="/attached_assets/Image (1).jpg" 
>>>>>>> f446e33ed014b564ec594b525d6eecbd68cd549d
                alt="Gowtham - Founder & Lead Developer at Infosense Technology"
                className="rounded-2xl w-full modern-card overflow-hidden"
                data-testid="about-image"
                loading="lazy"
              />
            </div>

            {/* Founder Highlight */}
            <div
              className="absolute -bottom-6 -left-6 p-6 rounded-xl shadow-xl border modern-card"
              data-testid="founder-highlight"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
<<<<<<< HEAD
                  <img
                    src={gowthamImg || "/placeholder.svg"}
=======
                  <img 
                    src="/attached_assets/Image (1).jpg" 
>>>>>>> f446e33ed014b564ec594b525d6eecbd68cd549d
                    alt="Gowtham headshot"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Gowtham</h3>
                  <p className="text-muted-foreground">Founder & Lead Developer</p>
                  <p className="text-sm text-muted-foreground">4.4+ Years Experience</p>
                  <p className="text-xs text-primary font-medium">Building the Future</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
