// src/components/layout/MobileMenu.tsx
"use client";

import Link from "next/link";
import { X, Coffee, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Coffee", href: "/coffee" },
    { name: "Offer", href: "/offer" },
    { name: "FAQ's", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div
      className={`fixed inset-0 z-60 bg-coffee-950/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      }`}
    >
      <div className="flex flex-col h-full p-6">
        
        {/* Header: Logo & Close Button */}
        <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-gold-500" />
            <span className="text-xl font-bold font-serif text-white">
              Café Aura
            </span>
          </Link>
          
          <button 
            onClick={onClose}
            className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col gap-6">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="group flex items-center justify-between text-2xl font-serif text-white/80 hover:text-gold-500 transition-colors"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span>{link.name}</span>
              <ChevronRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gold-500" />
            </Link>
          ))}
        </nav>

        {/* Footer Actions */}
        <div className="mt-auto space-y-4 pt-8 border-t border-white/10">
          <Link
            href="/login"
            onClick={onClose}
            className="flex items-center justify-center w-full py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            onClick={onClose}
            className="flex items-center justify-center w-full py-3 rounded-lg bg-gold-500 text-white font-bold shadow-lg shadow-gold-500/20 hover:bg-gold-600 transition-colors"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
}