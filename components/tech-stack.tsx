"use client"

import { useEffect, useState } from "react"


interface Skill {
  name: string;
  proficiency: number;
}

interface TechStack {
  frontend: Skill[];
  backend: Skill[];
  devops: Skill[];
}



const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level)
    }, delay)
    
    return () => clearTimeout(timer)
  }, [level, delay])
  
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  )
}

export default function TechStack({techStack}: {techStack: TechStack}) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills")
      if (!section) return
      
      const sectionTop = section.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      
      if (sectionTop < windowHeight * 0.75) {
        setIsVisible(true)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  
  return (
    <section id="skills" className="py-20 lg:py-28 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="mb-4 text-4xl font-bold tracking-tight crisp-text">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive overview of my professional skillset, refined over years of building complex web applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {/* Frontend skills */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-1">Frontend</h3>
              <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
            </div>
            {techStack.frontend.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={isVisible ? skill.proficiency : 0}
                delay={100 + index * 100}
              />
            ))}
          </div>
          
          {/* Backend skills */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-1">Backend</h3>
              <div className="h-1 w-16 bg-indigo-500 rounded-full"></div>
            </div>
            {techStack.backend.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={isVisible ? skill.proficiency : 0}
                delay={400 + index * 100}
              />
            ))}
          </div>
          
          {/* DevOps skills */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-1">DevOps</h3>
              <div className="h-1 w-16 bg-purple-500 rounded-full"></div>
            </div>
            {techStack.devops.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={isVisible ? skill.proficiency : 0}
                delay={700 + index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
