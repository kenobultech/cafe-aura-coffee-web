// src/components/layout/Navbar.tsx
"use client"; // <--- Necessary for interactivity

import { useState } from "react";
import Link from "next/link";
import { Coffee, Heart, Search, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu"; // Import the component

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Coffee", href: "/coffee" },
    { name: "Offer", href: "/offer" },
    { name: "FAQ's", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="w-full py-6 fixed top-0 z-50 backdrop-blur-md bg-coffee-950/80 border-b border-white/5 transition-all duration-300">
        <div className="container-custom flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Coffee className="w-8 h-8 text-gold-500 group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold font-serif tracking-wide text-gold-500">
              Café Aura
            </span>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-gold-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Icons (Hidden on very small screens if needed, but kept here) */}
            <div className="hidden sm:flex items-center gap-4 text-white">
              <button className="hover:text-gold-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="hover:text-gold-500 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Auth Buttons (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/login" className="text-sm font-medium hover:text-gold-500">
                Login
              </Link>
              <Link
                href="/signup"
                className="px-5 py-2 rounded-full border border-gold-500 text-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-white transition-all duration-300"
              >
                Sign up
              </Link>
            </div>

            {/* Mobile Menu Toggle Button (Visible only on small screens) */}
            <button 
              className="md:hidden p-2 text-white hover:text-gold-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}