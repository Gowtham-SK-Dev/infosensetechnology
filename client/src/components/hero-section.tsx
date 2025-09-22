"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Play, Zap, Award, Rocket } from "lucide-react"

const Button = ({ children, onClick, variant = "default", className = "", ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default function HeroSection() {
  const [counters, setCounters] = useState({ projects: 0, experience: 0, saas: 0 })
  const [mounted, setMounted] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    setMounted(true)

    const targets = { projects: 200, experience: 4.4, saas: 100 }
    const duration = 2000
    const steps = { projects: targets.projects / 100, experience: targets.experience / 100, saas: targets.saas / 100 }

    const current = { projects: 0, experience: 0, saas: 0 }
    const interval = setInterval(() => {
      current.projects = Math.min(current.projects + steps.projects, targets.projects)
      current.experience = Math.min(current.experience + steps.experience, targets.experience)
      current.saas = Math.min(current.saas + steps.saas, targets.saas)

      setCounters({
        projects: Math.floor(current.projects),
        experience: Number(current.experience.toFixed(1)),
        saas: Math.floor(current.saas),
      })

      if (
        current.projects >= targets.projects &&
        current.experience >= targets.experience &&
        current.saas >= targets.saas
      ) {
        clearInterval(interval)
      }
    }, 20)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({ length: 120 }).map((_, i) => (
            <div key={i} className="border-r border-b border-gray-300/20"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10 px-4">
        <div className="stagger-children animate">
          {/* Badge */}
          <div className="inline-flex items-center gap-2  text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6 "></div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white mt-16 md:mt-20">
            Building <span className="gradient-text">Scalable Solutions</span>
            <br />
            for Real Problems
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Led by <span className="text-gray-900 dark:text-white font-semibold">Gowtham</span>, Infosense Technology
            delivers innovative software development services with cutting-edge technology and proven expertise. From
            custom applications to SaaS solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("contact")}
              className="transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Rocket className="mr-2 w-5 h-5" />
              Start Your Project
            </Button>
            <Button variant="outline" onClick={() => scrollToSection("services")} className="transform hover:scale-105">
              <Play className="mr-2 w-5 h-5" />
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="modern-card p-8 text-center group">
              <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/20 transition-colors">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{counters.projects}+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projects Delivered</div>
            </div>
            <div className="modern-card p-8 text-center group">
              <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600/20 transition-colors">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{counters.experience}+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Years of Experience</div>
            </div>
            <div className="modern-card p-8 text-center group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                <Rocket className="w-6 h-6 text-purple-500" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{counters.saas}%</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">SaaS Solutions Available</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <ChevronDown className="text-gray-500 w-6 h-6" />
      </div>
    </section>
  )
}
