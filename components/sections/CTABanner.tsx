// src/components/sections/CtaBanner.tsx
import Image from "next/image";

export default function CtaBanner() {
  return (
    // Outer section with top margin to separate from previous content
    <section className="w-full mt-24 mb-0 bg-[#2C1E19] relative border-t border-white/5 overflow-hidden">
      
      {/* 
        Container:
        We use min-h-[450px] to ensure the banner is tall enough.
        We use 'relative' so we can absolutely position the images.
      */}
      <div className="container-custom relative flex flex-col lg:flex-row items-center justify-center min-h-[400px] lg:h-[500px] py-16 lg:py-0">

        {/* 
           1. Left Image: Vintage Grinder 
           - Positioned Absolute on Desktop (lg) to not squash text
           - Anchored to bottom left
        */}
        <div className="relative order-2 lg:absolute lg:left-0 lg:bottom-0 w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] shrink-0 lg:translate-y-6">
          <Image
            src="/images/white-coffee-grinder-image.png"
            alt="Vintage Coffee Grinder"
            fill
            className="object-contain object-bottom lg:object-bottom-left"
          />
        </div>

        {/* 
           2. Center Content: Text & Button 
           - z-10 ensures it sits on top of images if they overlap
           - w-full ensures it takes available width
        */}
        <div className="relative z-10 text-center space-y-8 order-1 lg:order-2 w-full max-w-4xl mx-auto px-4 mb-12 lg:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            {/* Force line break to match design exactly */}
            Ready to Experience the <br />
            Best Coffee?
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl font-light max-w-xl mx-auto">
            Take the first step towards discovering your new favorite brew.
          </p>
          
          <div className="pt-2">
            <button className="px-12 py-4 bg-linear-to-r from-gold-500 to-amber-700 text-white font-bold text-lg rounded shadow-xl hover:scale-105 transition-transform duration-300 border border-white/10">
              Shop Now
            </button>
          </div>
        </div>

        {/* 
           3. Right Image: Coffee Splash Cup 
           - Positioned Absolute on Desktop
           - Anchored to bottom right
        */}
        <div className="relative order-3 lg:absolute lg:right-0 lg:bottom-0 w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] shrink-0 lg:translate-x-12 lg:translate-y-12">
          <Image
            src="/images/white-coffee-splasher.png"
            alt="Delicious Chocolate Coffee"
            fill
            className="object-contain object-bottom lg:object-bottom-right drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}