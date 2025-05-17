export interface Experience {
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

  export const experiences: Experience[] = [
    {
      id: "1",
      title: "Junior Full Stack Developer",
      company: "Hybrid Solutions",
      location: "Lahore, Pakistan",
      startDate: new Date("2025-01-01"),
      endDate: new Date("2025-03-31"),
      current: false,
      description: "Leading the frontend architecture for enterprise-level solutions. Implemented frontend architecture.Mentored junior developers and established best practices for the engineering team.",
      achievements: [
        "Engineered a high-performance news website (The Current) using Vue.js and Tailwind CSS",
        "Refactored UI (Qwesty) property dealer website using Next.js improving performance by 35%",
        "Developed a responsive and user-friendly dashboard for the property dealer website using React and Tailwind CSS"
      ],
      technologies: ["Vue.js", "Next.js", "Tailwind CSS", "REST API"]
    },
    {
      id: "2",
      title: "Front-End Engineer",
      company: "Cybil Tech",
      location: "Lahore, Pakistan",
      startDate: new Date("2023-07-01"),
      endDate: new Date("2024-12-31"),
      current: false,
      description: "Developed and maintained multiple consumer-facing applications using modern JavaScript frameworks. Collaborated with product managers and designers to create user-friendly interfaces with focus on performance and accessibility.",
      achievements: [
        "Built Sotware House website using React and Tailwind CSS",
        "Designed and developed two dynamic, user-centric web applications",
        "Optimized website load time by 40%"
      ],
      technologies: ["React", "Node.js", "Next.js", "Tailwind CSS"]
    },
    {
      id: "3",
      title: "Senior Full Stack Developer",
      company: "Algo Tech",
      location: "Lahore, Pakistan",
      startDate: new Date("2025-01-01"),
      endDate: new Date("2025-03-31"),
      current: false,
      description: "Worked on client projects across various industries including e-commerce, finance, and education. Delivered responsive websites and progressive web applications focusing on performance and SEO optimization.",
      achievements: [
        "Developed custom User Task Management System using React, Node.js, and MySQL",
        "Developed a custom CRM system using React",
      ],
      technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"]
    }
  ];