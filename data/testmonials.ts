
export interface Testimonial {
    id: string
    name: string
    position: string
    company: string
    content: string
    imageUrl?: string
    rating: number
  }

export const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Kashif",
      position: ".NET Developer",
      company: "Tech Solutions",
      content: "I gave him two web projects, and he delivered with professionalism and skill. Solid understanding of MERN stack workflows and great communication throughout.",
      imageUrl: "/assets/images/teach1.png",
      rating: 5
    },
    {
      id: "2",
      name: "Saad",
      position: "Team Lead",
      company: "Tech Solutions",
      content: "We worked together on a news channel and a real estate app. He took ownership of core modules and delivered top-notch work. Impressive collaboration.",
      imageUrl: "/assets/images/teach3.png",
      rating: 5
    },
    {
      id: "3",
      name: "Zain",
      position: "Senior Developer",
      company: "Tech Solutions",
      content: "He built two websites under my supervision. His frontend skills and attention to detail made the final products feel premium and production-ready.",
      imageUrl: "/assets/images/teach2.png",
      rating: 5
    },
  ];