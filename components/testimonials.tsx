"use client"


import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  imageUrl?: string
  rating: number
}
export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("testimonials");
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
    <section id="testimonials" className="py-20 lg:py-28 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="mb-4">Client <span className="highlight">Testimonials</span></h2>
          <p className="text-lg text-muted-foreground">
            Feedback from clients and colleagues who have experienced the quality and impact of my work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700`}
              style={{
                transitionDelay: `${index * 200}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <Card className="h-full flex flex-col border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6 px-6 flex-grow flex flex-col">
                  <div className="mb-6 flex-grow">
                    <svg className="h-8 w-8 text-blue-500/80 mb-4" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="italic">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          width={100}
                          height={100}
                          src={testimonial.imageUrl || "/assets/images/teach1.png"}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
