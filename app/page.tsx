// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import BestSellers from "@/components/sections/BestSellers";
import CoffeeTicker from "@/components/sections/CoffeeTicker"; 
import SignatureGrid from "@/components/sections/SignatureGrid";
import OurStory from "@/components/sections/OurStory";
import Journey from "@/components/sections/Journey";
import Testimonials from "@/components/sections/Testimonials"; // <--- Import
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTABanner from "@/components/sections/CTABanner";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-coffee-950">
      <Hero />
      <BestSellers />
      
      <div className="mt-12 md:mt-20">
        <CoffeeTicker />
      </div>

      <SignatureGrid />
      <OurStory />
      <Journey />
      
      {/* Testimonials added here */}
      <Testimonials />
      <WhyChooseUs />
      <CTABanner />
    </main>
  );
}