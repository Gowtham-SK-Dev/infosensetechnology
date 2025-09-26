"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Check, Wrench, Users, ExternalLink } from "lucide-react"

export default function ProductsSection() {
  const features = ["Real-time validation", "99.9% accuracy rate", "API integration ready", "Bulk validation support"]

  const comingSoonProducts = [
    {
      icon: Users,
      title: "Digital House",
      description:
        "Private social networking platform connecting community members across India and abroad with verified profiles, marriage corner, job board, business directory, and event management.",
    },
  ]

  return (
    <section id="products" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4" data-testid="products-title">
            SaaS Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative tools and solutions to streamline your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gmail Validator */}
          <div
            className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden"
            data-testid="gmail-validator-card"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Mail className="text-4xl mr-4" />
                <h3 className="text-3xl font-bold">Gmail Validator</h3>
              </div>
              <p className="text-xl mb-6 leading-relaxed">
                Real-time email validation service that verifies Gmail addresses instantly with advanced API integration
                and high accuracy rates.
              </p>
              <div className="space-y-3 mb-8" data-testid="gmail-validator-features">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="text-green-300 mr-3 w-5 h-5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors"
                data-testid="button-try-gmail-validator-free"
              >
                Try Now - Free
              </Button>
            </div>
          </div>

          {/* Live and Coming Soon Products */}
          <div className="space-y-6" data-testid="products-list">
            <div
              className="modern-card p-6 border-2 border-solid border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 dark:border-green-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
              data-testid="online-tools-product"
              onClick={() => window.open("https://www.infosensetechnologies.com/online-tools/", "_blank")}
            >
              <div className="flex items-center mb-4">
                <Wrench className="text-2xl text-green-600 dark:text-green-400 mr-4" />
                <h3 className="text-2xl font-bold text-secondary">Online Tools</h3>
                <ExternalLink className="ml-auto text-green-600 dark:text-green-400 w-5 h-5" />
              </div>
              <p className="text-muted-foreground mb-4">
                Comprehensive collection of developer and productivity tools including JSON formatter, Base64 encoder,
                password generator, QR code generator, and 50+ other essential utilities.
              </p>
              <div className="flex items-center justify-between">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Live Now
                </Badge>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open("https://www.infosensetechnologies.com/online-tools/", "_blank")
                  }}
                >
                  Visit Tools
                </Button>
              </div>
            </div>

            {/* Coming Soon Products */}
            {comingSoonProducts.map((product, index) => (
              <div
                key={index}
                className="modern-card p-6 border-2 border-dashed border-muted"
                data-testid={`coming-soon-product-${index}`}
              >
                <div className="flex items-center mb-4">
                  <product.icon className="text-2xl text-muted-foreground mr-4" />
                  <h3 className="text-2xl font-bold text-secondary">{product.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <Badge className="bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Coming Soon
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
