export interface Project {
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


export const projects: Project[] = [
    {
        id: "1",
        title: "Real Estate Dashboard",
        description: "A real-time analytics dashboard for real estate agents with complex data visualization and property management.",
        challenge: "The client needed a highly performant dashboard capable of visualizing millions of data points in real-time while maintaining responsive UI and 12 screens form to add properties",
        solution: "I used Vue.js with Tailwind CSS on the frontend and Google Maps API for map integration.",
        results: [
            "Reduced dashboard loading time by 65% compared to previous solution",
            "Allowed the client to eaisly manage properties with 12 screens form",
            "Cut development time for new features by 30% with component-driven architecture"
        ],
        images: ["/assets/images/projects/qdash.png", "/assets/images/projects/qdash2.png", "/assets/images/projects/qdash3.png"],
        technologies: ["Vue.js", "TypeScript", "Google Maps API", "Tailwind CSS"],
        architecture: `
    // Frontend Architecture
    ├── /src
    │   ├── /components      # Reusable UI components
    │   ├── /assets          # Assets for the project   
    │   ├── /router          # Routes for the project
    │   ├── /store           # State management Pinia
    │   ├── /views           # Views
    │   └── /layouts         # Layouts
    `,
        demoUrl: "https://example.com/demo",
        codeUrl: "https://github.com/alimalikali",
        featured: true,
    },
    {
        id: "2",
        title: "News Platform",
        description: "A high-performance, responsive and dynamic news platform with real-time data.",
        challenge: "The client needed to migrate their legacy news platform to a modern stack capable of handling 100,000+ users and multiple themes and colors for all categories ",
        solution: "Implemented a vue.js solution with tailwind css and fast initial loads. Used a php Api for content management.",
        results: [
            "Achieved 300ms average page load time (95th percentile under 1.2s)",
            "Increased mobile conversion rate by 23% through responsive design",
            "Handled youtube video integration and shorts",
            "Multiple color website for all categories",
        ],
        images: ["/assets/images/projects/current1.png", "/assets/images/projects/current2.png", "/assets/images/projects/current3.png"],
        technologies: ["Vue.js", "Tailwind CSS", "PHP", "MySQL"],
        architecture: `
    // Architecture Overview
    ├── /frontend (Vue.js)
    │   ├── /api          # Api for the project
    │   ├── /assets          # Assets for the project
    │   ├── /components     # UI components
    │   ├── /config         # Config for the project
    │   ├── /router         # Routes for the project
    │   ├── /views          # Views
    `,
        demoUrl: "https://thecurrent.pk/",
        codeUrl: "https://github.com/alimalikali",
        featured: true,
    },
    {
        id: "3",
        title: "Jabar Builders",
        description: "A construction company website.Admin can add, edit and delete projects and users can view projects and contact the company.",
        challenge: "The client needed a website for his construction company. He also needed a dashboard to manage the projects and testimonials.",
        solution: "I used Next.js with Tailwind CSS on the frontend and MongoDB for the database and Next js Inbuilt API routes. I also used Vercel for hosting and Resend for email integration.",
        results: [
            "Achieved 300ms average page load time (95th percentile under 1.2s)",
            "Admin can add, edit and delete projects and testimonials",
            "Users can view projects and contact the company",
            "Animations and transitions are used to make the website more engaging",
        ],
        architecture: `
    // Architecture Overview
    ├── /docs                # Documentation
    ├── /public              # Public assets
    ├── /src
    │   ├── /app              # App routes
    │   │   ├── /api              # API routes
    │   │   ├── /(main)           # Main public routes
    │   │   ├── /(admin)          # Admin dashboard routes
    │   ├── /components      # Reusable UI components
    │   ├── /config          # Config for the project   
    │   ├── /hooks           # Hooks for the project
    │   ├── /lib             # Lib for the project
    │   ├── /models          # Models for the project
    │   ├── /types           # Types for the project
    │   └── /middleware.ts   # Middleware for the project
    `,
        images: ["/assets/images/projects/jb1.png", "/assets/images/projects/jb2.png", "/assets/images/projects/jb3.png"],
        technologies: ["Next.js", "Tailwind CSS", "Next.js API Routes", "MongoDB", "Vercel", "Resend"],
        demoUrl: "https://jabalbuilders.vercel.app/",
        codeUrl: "https://github.com/alimalikali/jabar-builders-rebuilds",
        featured: true,
    },
    {
        id: "4",
        title: "Islamic Acdemia (under development)",
        description: "An online udemy like platform for islamic courses where skilled teachers can upload their courses and students can enroll in them.",
        challenge: "The client needed a platform for his islamic courses where skilled teachers can upload their courses and students can enroll in them.",
        solution: "I used Next.js with Tailwind CSS on the frontend and MongoDB for the database and Next js Inbuilt API routes. I also used Vercel for hosting and Resend for email integration.",
        results: [
            "Achieved 300ms average page load time (95th percentile under 1.2s)",
            "Admin can add, edit and delete projects and testimonials",
            "Users can view projects and contact the company",
            "Animations and transitions are used to make the website more engaging",
        ],
        architecture: `
    // Architecture Overview
    ├── /frontend                # client side code
    ├── /backend                 # server side code
        `,
        images: ["/assets/images/projects/is1.png"],
        technologies: ["Next.js", "Tailwind CSS", "Next.js API Routes", "MongoDB", "Vercel", "Resend"],
        demoUrl: "https://islamicacdemia.vercel.app/",
        codeUrl: "https://github.com/alimalikali/Islamic-Acdemia",
        featured: true,
    },
    {
        title: "E-commerce Platform",
        description: "A high-performance, responsive and dynamic e-commerce platform with real-time data.",
        images: ["/assets/images/projects/ecom1.png"],
        architecture: `
    // Architecture Overview
    ├── /frontend                # client side code
    ├── /backend                 # server side code
        `,
        technologies: ["Next.js", "Tailwind CSS", "Express", "MongoDB", "vercel", "stripe", "cloudinary", "jwt"],
        demoUrl: "https://alidev-pup.vercel.app/",
        codeUrl: "https://github.com/alimalikali/supreme-pup",
        featured: true,
        challenge: "The client needed a platform for his e-commerce store. He also needed a dashboard to manage the products and orders.",
        solution: "I used Next.js with Tailwind CSS on the frontend and MongoDB for the database and Next js Inbuilt API routes. I also used Vercel for hosting and Resend for email integration.",
        results: [
            "Achieved 300ms average page load time (95th percentile under 1.2s)",
            "Admin can add, edit and delete projects and testimonials",
            "Users can view projects and contact the company",
        ],
        id: "5",
    },
];