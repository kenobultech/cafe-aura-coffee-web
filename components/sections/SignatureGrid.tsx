// src/components/sections/SignatureGrid.tsx
import Image from "next/image";
import { Heart, Star, ShoppingBag } from "lucide-react";

const signatures = [
  {
    id: 1,
    name: "Latte Supreme",
    price: 10.99,
    rating: 4.8,
    image: "/images/coffee-image-1.jpeg"
  },
  {
    id: 2,
    name: "Caramel Cloud",
    price: 12.99,
    rating: 4.9,
    image: "/images/cofee-image-2.jpeg"
  },
  {
    id: 3,
    name: "Vanilla Ember",
    price: 14.99,
    rating: 4.7,
    image: "/images/cofee-image-3.jpeg"
  },
  {
    id: 4,
    name: "Espresso Eclipse",
    price: 11.94,
    rating: 4.6,
    image: "/images/cofee-image-4.jpeg" // Paper cup style
  },
  {
    id: 5,
    name: "Maple Morning",
    price: 12.50,
    rating: 4.8,
    image: "/images/cofee-image-5.jpeg" // Latte art
  },
  {
    id: 6,
    name: "Cinnamon Drift",
    price: 13.90,
    rating: 4.4,
    image: "/images/cofee-image-6.jpeg" // Mug
  }
];

export default function SignatureGrid() {
  return (
    <section className="w-full py-20 bg-coffee-950 relative">
      <div className="container-custom space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream">
            Our Signature Coffees
          </h2>
          <p className="text-muted text-lg">
            Explore our premium coffee blends, each one carefully crafted to deliver 
            rich, bold flavors that will transform your coffee experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatures.map((coffee) => (
            <div 
              key={coffee.id}
              className="group relative bg-[#231712] rounded-2xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
            >
              
              {/* Image Area */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={coffee.image}
                  alt={coffee.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Floating Price Tag */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-gold-500 font-bold border border-white/10">
                  ${coffee.price}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 space-y-4 bg-linear-to-b from-[#231712] to-coffee-950">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-serif font-bold text-cream group-hover:text-gold-500 transition-colors">
                    {coffee.name}
                  </h3>
                  <div className="flex items-center gap-1 text-gold-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{coffee.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <button className="text-sm font-medium text-white/80 hover:text-white underline decoration-gold-500/50 underline-offset-4 hover:decoration-gold-500 transition-all">
                    Buy Now
                  </button>
                  
                  <button className="p-2 rounded-full hover:bg-gold-500 hover:text-white text-muted transition-all duration-300">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}