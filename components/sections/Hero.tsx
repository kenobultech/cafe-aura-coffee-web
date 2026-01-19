// src/components/sections/Hero.tsx
import Image from "next/image";
import { Star } from "lucide-react";

export default function Hero() {
  // Array to map your local avatar files (1 to 5)
  const avatarIds = [1, 2, 3, 4, 5];

  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-coffee-950">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 right-0 md:right-20 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] tracking-tight">
            Awaken Your <br />
            Senses With <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gold-500 to-orange-400">
              Every Sip
            </span>
          </h1>
          
          <p className="text-muted text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Discover hand-roasted blends from sustainable farms across the globe. 
            Experience the true taste of passion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="px-8 py-4 bg-linear-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-full shadow-lg shadow-gold-500/20 hover:scale-105 transition-all duration-300">
              Shop Our Roasts
            </button>
            <button className="px-8 py-4 text-white font-medium hover:text-gold-500 transition-colors">
              Our Story
            </button>
          </div>

          {/* --- UPDATED: Social Proof Section with Local Avatars --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-6">
            
            {/* Avatar Stack (Overlapping) */}
            <div className="flex -space-x-5">
              {avatarIds.map((num) => (
                <div 
                  key={num} 
                  className="relative w-14 h-14 rounded-full border-[3px] border-coffee-950 overflow-hidden hover:scale-110 hover:z-10 transition-transform duration-300"
                >
                  <Image 
                    /* 
                       Make sure files are named avatar-1.png, avatar-2.png etc.
                       inside the 'public' folder. 
                    */
                    src={`/images/avatar-${num}.jpeg`} 
                    alt={`Customer ${num}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Rating Text */}
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-base font-medium text-cream">
                Loved by <span className="font-bold text-white">1000+</span> customers
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------- */}

        </div>

        {/* Right Content (Image) */}
        <div className="relative h-[400px] md:h-[600px] w-full flex justify-center items-center order-1 lg:order-2">
          <div className="relative w-full h-full animate-float">
            <Image
              src="/images/coffee-splash-cup.png" 
              alt="Coffee Splash"
              fill
              priority
              className="object-contain drop-shadow-2xl scale-110 md:scale-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
}