// src/components/sections/WhyChooseUs.tsx
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Premium Quality Beans",
    description: "We source only the finest coffee beans from sustainable farms around the world, flavorful, and ethically produced.",
    image: "/images/why-1.jpeg"
  },
  {
    id: 2,
    title: "Freshness Guaranteed",
    description: "Our beans are roasted to perfection and shipped directly to your door, ensuring the freshest possible coffee every time.",
    image: "/images/why-2.jpeg"
  },
  {
    id: 3,
    title: "Variety of Options",
    description: "Whether you're a fan of bold espressos, smooth lattes, or refreshing cold brews, we have a coffee to suit every taste.",
    image: "/images/why-3.jpeg"
  },
  {
    id: 4,
    title: "Eco-Friendly Packaging",
    description: "Our packaging is 100% recyclable, and we're working hard to reduce our carbon footprint every step of the way.",
    image: "/images/why-4.jpeg"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-24 bg-coffee-950 relative">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Why Choose Us?
          </h2>
          <p className="text-muted text-lg">
            From bean to cup, we ensure every sip is a premium experience.
          </p>
        </div>

        {/* Grid Content with Dividers */}
        <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-t border-b border-white/10">
          
          {features.map((feature) => (
            <div key={feature.id} className="group p-6 flex flex-col h-full hover:bg-white/2 transition-colors duration-300">
              
              {/* Image Area */}
              <div className="relative w-full aspect-4/3 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-serif font-semibold text-white group-hover:text-gold-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                <button className="w-12 h-8 flex items-center justify-center rounded-full border border-white/20 text-white hover:border-gold-500 hover:text-gold-500 hover:w-16 transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}