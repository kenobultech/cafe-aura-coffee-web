// src/components/sections/OurStory.tsx
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="w-full py-24 bg-coffee-950 relative overflow-hidden">
      
      {/* Background decoration (Swoosh) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-coffee-800/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-8 relative z-20 max-w-xl">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
            Our Story
          </h2>
          
          <div className="space-y-6">
            <h3 className="text-lg md:text-xl text-gold-500 font-medium tracking-widest uppercase">
              From Passion to Perfection: <br /> The Journey of Café Aura
            </h3>
            
            <p className="text-muted text-lg md:text-xl leading-relaxed">
              At Café Aura, coffee isn’t just a drink — it’s a passion, a ritual, and an experience. 
              Our journey began in 1954, when a group of coffee lovers came together with a 
              simple mission: to create exceptional coffee that people could truly enjoy, 
              share, and savor every day. 
              <span className="text-gold-500 font-bold cursor-pointer hover:underline ml-2">
                Read more...
              </span>
            </p>
          </div>

          <div className="pt-8 space-y-8 border-t border-white/10">
            <p className="text-2xl md:text-3xl font-serif text-cream">
              Want to experience the quality and care behind every cup?
            </p>
            
            <button className="px-10 py-4 bg-linear-to-r from-gold-500 to-amber-700 text-white font-bold text-lg rounded-lg shadow-xl shadow-amber-900/30 hover:scale-105 transition-transform duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Column: Image - BIGGER VERSION */}
        {/* We increased height to h-[800px] and removed width restrictions */}
        <div className="relative h-[600px] lg:h-[800px] w-full flex justify-center lg:justify-end items-center z-10">
          
          {/* Main Image Container */}
          <div className="relative w-full h-full">
            <Image
              src="/images/coffee-machine.png" 
              alt="Artistic Coffee Grinder"
              fill
              /* 
                 Changes:
                 1. object-contain: ensures the whole machine is visible
                 2. lg:object-right: pushes it to the right edge
                 3. scale-110: slightly zooms it in to make it feel imposing
              */
              className="object-contain object-center lg:object-right scale-110 lg:scale-125 drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Optional: Glow behind the machine */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-[80px] -z-10" />
        </div>

      </div>
    </section>
  );
}