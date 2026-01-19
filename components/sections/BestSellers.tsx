// src/components/sections/BestSellers.tsx
import Image from "next/image";
import { Heart, Star } from "lucide-react";

interface CoffeeProduct {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
}

const products: CoffeeProduct[] = [
  {
    id: 1,
    name: "Iced Coffee",
    price: "$16.00",
    rating: 4.9,
    image: "/images/iced-coffee.jpeg"
  },
  {
    id: 2,
    name: "Latte Supreme",
    price: "$19.00",
    rating: 4.9,
    image: "/images/latte.jpeg"
  },
  {
    id: 3,
    name: "Cappuccino",
    price: "$12.00",
    rating: 4.9,
    image: "/images/cappuccino.jpeg"
  }
];



export default function BestSellers() {
  return (
    <section className="w-full py-16 bg-coffee-950 relative z-20 -mt-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              // Card Container
              className="flex items-center gap-4 bg-[#2A1E16] p-4 rounded-xl border border-white/5 hover:border-gold-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 group"
            >
              {/* Circular Image */}
              <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-full border-2 border-white/5 group-hover:border-gold-500/50 transition-colors">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0"> {/* min-w-0 helps truncate text if needed */}
                <h3 className="font-serif text-lg text-cream truncate mb-1 group-hover:text-gold-500 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-semibold text-white">{product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                    <span className="text-sm text-gold-500 font-medium">{product.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button className="text-sm text-muted underline decoration-transparent hover:decoration-gold-500 hover:text-white transition-all">
                    Details
                  </button>
                  <button className="text-muted hover:text-red-500 transition-colors">
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