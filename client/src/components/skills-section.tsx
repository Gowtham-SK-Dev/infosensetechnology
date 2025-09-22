"use client"

import { useEffect, useRef, useState } from "react"
import { Server, GitBranch, BarChart3, Rocket, CreditCard, Network } from "lucide-react"

export default function SkillsSection() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const backendSkills = [
    { name: "PHP (Laravel)", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "MySQL", level: 92 },
    { name: "ERP", level: 85 },
  ]

  const frontendSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "React Js", level: 93 },
    { name: "Next Js", level: 87 },
    { name: "AngularJS", level: 88 },
  ]

  const tools = [
    { icon: Server, name: "Postman", color: "text-primary" },
    { icon: GitBranch, name: "Git", color: "text-orange-600" },
    { icon: BarChart3, name: "AWS S3", color: "text-success" },
    { icon: Rocket, name: "PM2", color: "text-purple-600" },
    { icon: CreditCard, name: "FTP", color: "text-blue-600" },
    { icon: Network, name: "Microservices", color: "text-red-600" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="skill-item" data-testid={`skill-${skill.name.toLowerCase().replace(/[^\\w]/g, "-")}`}>
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-foreground">{skill.name}</span>
        <span className="text-muted-foreground font-medium">{skill.level}%</span>
      </div>
      <div className="bg-muted rounded-full h-3 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-1000 ease-out ${
            inView ? "transform-none" : "transform -translate-x-full"
          }`}
          style={{ width: inView ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  )

  return (
    <section className="py-20 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="skills-title">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficiency in modern technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div data-testid="backend-skills">
            <h3 className="text-2xl font-bold text-foreground mb-8">Backend Technologies</h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div data-testid="frontend-skills">
            <h3 className="text-2xl font-bold text-foreground mb-8">Frontend & Tools</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" data-testid="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="text-center group">
              <div className="bg-background/60 backdrop-blur-sm p-4 rounded-xl group-hover:bg-background/80 group-hover:shadow-lg transition-all">
                <tool.icon className={`text-3xl ${tool.color} mb-2 mx-auto`} />
                <p className="text-sm font-semibold text-foreground">{tool.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
