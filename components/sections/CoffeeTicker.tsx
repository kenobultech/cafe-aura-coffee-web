// src/components/sections/CoffeeTicker.tsx
import { Coffee } from "lucide-react";

export default function CoffeeTicker() {
  const items = [
    "Cappuccino", "Espresso", "Mocha", "Latte", "Americano", "Macchiato",
    "Cappuccino", "Espresso", "Mocha", "Latte", "Americano", "Macchiato" 
  ];

  return (
    <div className="w-full bg-black py-6 border-y border-white/5 overflow-hidden relative z-20">
      <div className="flex w-max animate-marquee">
        {/* Double the list to ensure seamless scrolling */}
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8 mx-8">
            <span className="text-2xl md:text-3xl font-serif text-white/80 tracking-wide uppercase">
              {item}
            </span>
            <Coffee className="w-6 h-6 text-gold-500" />
          </div>
        ))}
      </div>
    </div>
  );
}