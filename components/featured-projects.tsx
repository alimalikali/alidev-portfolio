"use client"

import ProjectCard from "./project-card";
import AnimatedSection from "./animated-section";

interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  technologies: string[];
  architecture: string;
  demoUrl: string;
  codeUrl: string;
  featured: boolean;
}

export const FeaturedProjects = ({ featuredProjects }: { featuredProjects: Project[] }) => {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 tracking-tight crisp-text">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A curated selection of my professional work — each project representing unique challenges and innovative solutions.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-10">
            {featuredProjects
              .filter(project => project.featured)
              .slice(0, 4) // Limit to 4 featured projects
              .map((project, index) => (
                <ProjectCard
                  key={project.id}
                  index={index}
                  {...project}
                />
              ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedProjects;
