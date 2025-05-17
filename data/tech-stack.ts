

interface Skill {
    name: string;
    proficiency: number;
}

interface TechStack {
    frontend: Skill[];
    backend: Skill[];
    devops: Skill[];
}

export const techStack: TechStack = {
    frontend: [
        { name: "React.js / Next.js", proficiency: 95 },
        { name: "Tailwind CSS / SCSS / CSS", proficiency: 90 },
        { name: "Redux / Zustand", proficiency: 70 },
        { name: "TypeScript", proficiency: 90 },
        { name: "Vue.js", proficiency: 80 },
        { name: "Angular", proficiency: 50 },
        { name: "Framer Motion / Three.js", proficiency: 50 },
        { name: "React Native (Expo) / Electron", proficiency: 40 },
    ],
    backend: [
        { name: "Node.js / Express.js / Nest.js", proficiency: 90 },
        { name: "TypeScript (Back-End)", proficiency: 85 },
        { name: "MongoDB (Mongoose)", proficiency: 85 },
        { name: "PostgreSQL / MySQL (Sequelize)", proficiency: 80 },
        { name: "JWT / Clerk", proficiency: 80 },
        { name: "Multer / Cloudinary", proficiency: 50 },
        { name: "Vercel (Deployment)", proficiency: 50 },
    ],
    devops: [
        { name: "Git / GitHub", proficiency: 90 },
        { name: "API Clients: Axios / TanStack / RTK Query", proficiency: 80 },
        { name: "Docker", proficiency: 70 },
        { name: "CI/CD (GitHub Actions, etc.)", proficiency: 20 },
    ]
}
