// src/components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image"; // <--- Import Image
import { 
  Coffee, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  MapPin, 
  Mail, 
  Phone 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-8 border-t border-white/10 relative overflow-hidden text-white">
      
      {/* --- 1. Background Image with Overlay --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/footer-bg.jpeg" 
          alt="Footer Background" 
          fill 
          className="object-cover"
        />
        {/* Dark Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/90" /> 
        {/* Optional: Add a subtle brown tint to match the theme */}
        <div className="absolute inset-0 bg-coffee-950/50 mix-blend-overlay" />
      </div>

      {/* Background decoration (Golden Glow) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* --- 2. Main Content (z-10 to sit above image) --- */}
      <div className="container-custom relative z-10">
        
        {/* Top Section: 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Coffee className="w-8 h-8 text-gold-500" />
              <span className="text-2xl font-bold font-serif text-white">
                Café Aura
              </span>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Café Aura offers premium, expertly crafted coffee that delivers 
              rich flavors and an unforgettable experience in every cup.
            </p>

            <div className="space-y-4 pt-2">
              <h4 className="text-white font-medium">Join Our Coffee Community</h4>
              <div className="flex items-center gap-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 bg-black/20 backdrop-blur-sm"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: About Links */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6 border-b border-gold-500/30 inline-block pb-2">
              About
            </h3>
            <ul className="space-y-4">
              {["Menu", "Features", "News & Blogs", "Help & Supports"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6 border-b border-gold-500/30 inline-block pb-2">
              Company
            </h3>
            <ul className="space-y-4">
              {["How we work", "Terms of service", "Pricing", "FAQ"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6 border-b border-gold-500/30 inline-block pb-2">
              Get in Touch
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                <span>1234 Coffee Lane, Suite 100 <br /> Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="mailto:majidur.uiux@gmail.com" className="hover:text-white transition-colors">
                  ken@auracoffee.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="tel:+254741255424" className="hover:text-white transition-colors">
                  +254 741-255-424
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Developer Credit */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © 2025 Café Aura. All Rights Reserved.
          </p>
          
          <p className="text-gray-400 text-sm flex flex-col md:flex-row gap-1 items-center justify-center">
            <span>Developed by veteran fullstack developer</span>
            <span className="text-gold-500 font-medium hover:text-white cursor-pointer transition-colors">
              Kenneth Obul
            </span>
            <span className="text-xs text-white/40">(obulken10@gmail.com)</span>
          </p>
        </div>

      </div>
    </footer>
  );
}