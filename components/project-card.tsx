import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCode, FileImage, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  index: number;
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

export const ProjectCard = ({
  id,
  title,
  description,
  images,
  technologies,
  featured,
  demoUrl,
  codeUrl,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden border border-border h-full flex flex-col transition-all duration-500 hover:shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {featured && (
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="font-medium bg-blue-500/20 text-blue-600 dark:bg-blue-500/30 dark:text-blue-400 backdrop-blur-sm">
              Featured Project
            </Badge>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((technology) => (
            <Badge key={technology} variant="outline" className="font-mono text-xs">
              {technology}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        {demoUrl && (
          <Button variant="secondary" size="sm" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <FileImage className="h-4 w-4 mr-2" />
              <span>Live Demo</span>
            </a>
          </Button>
        )}

        {codeUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              <FileCode className="h-4 w-4 mr-2" />
              <span>View Code</span>
            </a>
          </Button>
        )}

        <Button variant="ghost" size="sm" className="ml-auto" asChild>
          <a href={`/projects/${id}`}>
            <span>Details</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
