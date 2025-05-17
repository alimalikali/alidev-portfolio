"use client"
import { useEffect, useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";

interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: Date
  endDate?: Date
  current: boolean
  description: string
  achievements: string[]
  technologies: string[]
}

export default function Experience({ experiences }: { experiences: Experience[] }) {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience");
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="mb-4">Professional <span className="highlight">Journey</span></h2>
          <p className="text-lg text-muted-foreground">
            A timeline of my career growth, showcasing key roles and projects that have shaped my expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
          {/* Timeline */}
          <div
            ref={timelineRef}
            className={`space-y-2 md:border-r md:pr-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}
          >
            {experiences.map((experience: Experience, index: number) => (
              <button
                key={experience.id}
                className={`text-left w-full p-4 rounded-lg transition-all ${activeId === experience.id
                    ? 'bg-secondary/80 border-l-2 border-blue-500'
                    : 'hover:bg-secondary/40'
                  }`}
                onClick={() => setActiveId(experience.id)}
              >
                <div className="font-medium">{experience.title}</div>
                <div className="text-sm text-muted-foreground">{experience.company}</div>
                <div className="text-xs text-muted-foreground mt-1">{new Date(experience.startDate).toLocaleDateString()} - {experience.endDate ? new Date(experience.endDate).toLocaleDateString() : "Present"}</div>
              </button>
            ))}
          </div>

          {/* Experience details */}
          <div>
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className={`transition-all duration-500 ${activeId === experience.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 absolute -left-[9999px]'
                  }`}
              >
                <h3 className="text-2xl font-medium mb-2">{experience.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-muted-foreground">{experience.company}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{experience.location}</span>
                </div>

                <p className="mb-6">{experience.description}</p>

                <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">Key Achievements</h4>
                <ul className="space-y-2 mb-6">
                  {experience.achievements.map((achievement: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-blue-500 mt-1">›</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.technologies.map((technology: string, index: number) => (
                    <Badge key={index} variant="outline" className="font-mono text-xs">
                      {technology}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
