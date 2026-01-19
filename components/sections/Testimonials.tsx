// src/components/sections/Testimonials.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Mock Data matching the screenshot
const testimonials = [
  {
    id: 1,
    name: "Kamal Hassan",
    role: "Professor",
    image: "/images/testimonial-1.jpeg", 
    rating: 5,
    quote: "The richness of the flavor is unlike anything I've tasted before. Truly the best start to my mornings."
  },
  {
    id: 2,
    name: "Willy Wonka",
    role: "Chocolate Maker",
    image: "/images/testimonial-2.jpeg",
    rating: 5,
    quote: "I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries."
  },
  {
    id: 3,
    name: "Rakib Khan",
    role: "Designer",
    image: "/images/testimonial-3.jpeg",
    rating: 5,
    quote: "The ambiance and the quality of the roast are simply world-class. Highly recommended!"
  },
  {
    id: 4,
    name: "Byron Collins",
    role: "Barista",
    image: "/images/testimonial-4.jpeg",
    rating: 4,
    quote: "As a barista, I can appreciate the attention to detail in every bean. A masterpiece."
  },
  {
    id: 5,
    name: "Emily York",
    role: "Software Engineer",
    image: "/images/testimonial-5.jpeg",
    rating: 5,
    quote: "Fuel for my coding sessions. The delivery is fast and the coffee stays fresh."
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the second item (John De)

  // Helper to handle circular navigation
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Helper to determine the position of a card relative to the active one
  const getCardStyle = (index: number) => {
    if (index === activeIndex) return "active";
    
    // Calculate previous and next indices handling array wrapping
    const prevIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;

    if (index === prevIndex) return "prev";
    if (index === nextIndex) return "next";
    return "hidden";
  };

  return (
    <section className="relative w-full py-24 bg-coffee-950 overflow-hidden">
      
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/testimonials-bg.jpeg" // Place your beans background here
          alt="Coffee Beans Background"
          fill
          className="object-cover opacity-20" // Low opacity to blend with dark bg
        />
        {/* Gradient Overlay to fade edges */}
        <div className="absolute inset-0 bg-linear-to-b from-coffee-950/90 via-coffee-950/40 to-coffee-950/90" />
      </div>

      <div className="container-custom relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Join Thousands of Happy <br /> Coffee Lovers!
          </h2>
          <p className="text-muted text-lg">
            Don't just take our word for it — hear what our customers have to say!
          </p>
        </div>

        {/* Carousel Area */}
        <div className="relative w-full max-w-6xl h-[450px] flex items-center justify-center">
          
          {testimonials.map((item, index) => {
            const position = getCardStyle(index);
            
            // Only render items that are active, prev, or next (others hidden)
            if (position === "hidden") return null;

            const isActive = position === "active";

            return (
              <div
                key={item.id}
                className={`
                  absolute transition-all duration-500 ease-in-out
                  ${isActive ? "z-20 w-[90%] md:w-[450px] opacity-100 scale-100" : "z-10 w-[85%] md:w-[350px] opacity-40 scale-90 grayscale-50 blur-[1px] cursor-pointer"}
                  ${position === "prev" ? "-translate-x-8 md:-translate-x-[380px]" : ""}
                  ${position === "next" ? "translate-x-8 md:translate-x-[380px]" : ""}
                `}
                onClick={() => {
                  if (position === "prev") handlePrev();
                  if (position === "next") handleNext();
                }}
              >
                {/* Card Design */}
                <div 
                  className={`
                    flex flex-col items-center justify-center text-center p-8 rounded-2xl h-[400px] border
                    ${isActive ? "bg-[#231712] border-gold-500/30 shadow-2xl shadow-black/50" : "bg-coffee-950 border-transparent"}
                  `}
                >
                  {/* Avatar */}
                  <div className={`relative mb-6 rounded-full overflow-hidden border-2 border-gold-500 ${isActive ? "w-24 h-24" : "w-20 h-20"}`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Name & Role */}
                  <h3 className={`font-serif font-bold text-cream ${isActive ? "text-xl" : "text-lg"}`}>
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted uppercase tracking-wider mb-4">
                    {item.role}
                  </p>

                  {/* Stars (Only visible on active in typical carousel, but we show slightly dimmed on sides) */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < item.rating ? "fill-gold-500 text-gold-500" : "text-gray-600"}`} 
                      />
                    ))}
                  </div>

                  {/* Quote (Only fully visible on active card for readability) */}
                  <p className={`text-muted font-medium italic leading-relaxed ${isActive ? "line-clamp-none" : "line-clamp-3 opacity-0 md:opacity-50"}`}>
                    "{item.quote}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 mt-8">
          <button 
            onClick={handlePrev}
            className="p-4 rounded-lg bg-[#231712] border border-white/5 text-muted hover:bg-gold-500 hover:text-white hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="p-4 rounded-lg bg-[#231712] border border-white/5 text-muted hover:bg-gold-500 hover:text-white hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}