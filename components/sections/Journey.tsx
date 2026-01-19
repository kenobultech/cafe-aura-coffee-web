// src/components/sections/Journey.tsx
import Image from "next/image";

export default function Journey() {
  return (
    <section className="w-full py-20 bg-coffee-950 relative">
      <div className="container-custom space-y-12">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream leading-tight">
            Explore the journey of <br />
            coffee, from farm to cup.
          </h2>
          <p className="text-muted text-lg">
            Explore the process—handpicked beans, expertly roasted, and brewed with passion. 
            Witness the craftsmanship that brings our signature flavors to life.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-[600px]">
          
          {/* Column 1: Tall Image (Book & Coffee) */}
          <div className="relative col-span-1 md:row-span-2 h-64 md:h-auto rounded-2xl overflow-hidden group">
            <Image
              src="/images/journey-1.jpeg"
              alt="Relaxing with coffee"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>

          {/* Column 2 Top: Hands Toasting */}
          <div className="relative h-48 md:h-auto rounded-2xl overflow-hidden group">
            <Image
              src="/images/journey-2.jpeg" 
              alt="Cheers with coffee"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Column 3 Top: Coffee Beans */}
          <div className="relative h-48 md:h-auto rounded-2xl overflow-hidden group">
            <Image
              src="/images/journey-3.jpeg" 
              alt="Roasted Beans"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Column 4: Tall Image (Steaming Cup) */}
          <div className="relative col-span-1 md:row-span-2 h-64 md:h-auto rounded-2xl overflow-hidden group">
            <Image
              src="/images/journey-4.jpeg" 
              alt="Steaming coffee smoke"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>

          {/* Column 2 Bottom: Neon Sign */}
          <div className="relative h-48 md:h-auto rounded-2xl overflow-hidden group">
            <Image
              src="/images/journey-5.jpeg" 
              alt="Coffee Neon Sign"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Column 3 Bottom: Pouring Coffee */}
          <div className="relative h-48 md:h-auto rounded-2xl overflow-hidden group">
            <Image
              src="/images/journey-6.jpeg" 
              alt="Barista Pouring"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

        </div>
      </div>
    </section>
  );
}