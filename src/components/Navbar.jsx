import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-garage-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo - MAA DURGA DIESEL */}
        <a href="#home" className="flex flex-col group">
          <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-garage-orange uppercase transition-transform group-hover:scale-105">
            MAA DURGA DIESEL
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-gray-400 font-semibold uppercase -mt-1">
            CRDI & DIESEL PUMP LAB · PAIJAWA, PATNA (ESTD. 2002)
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="font-display text-sm tracking-widest uppercase font-bold text-garage-orange border-b-2 border-garage-orange pb-0.5 transition-colors">
            HOME
          </a>
          <a href="#about" className="font-display text-sm tracking-widest uppercase font-bold text-gray-300 hover:text-white transition-colors">
            ABOUT LAB
          </a>
          <a href="#services" className="font-display text-sm tracking-widest uppercase font-bold text-gray-300 hover:text-white transition-colors">
            SERVICES
          </a>
          <a href="#estimator" className="font-display text-sm tracking-widest uppercase font-bold text-gray-300 hover:text-white transition-colors">
            COST ESTIMATOR
          </a>
          <a href="#contact" className="font-display text-sm tracking-widest uppercase font-bold text-gray-300 hover:text-white transition-colors">
            CONTACT & MAP
          </a>
        </nav>

        {/* Right Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => onBookClick && onBookClick()}
            className="chamfer-btn bg-garage-orange hover:bg-garage-orange-glow text-black font-display font-extrabold text-sm sm:text-base tracking-wider uppercase px-6 py-2.5 shadow-glow-orange hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer"
          >
            <span>BOOK LAB SLOT</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-garage-surface/98 border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <a 
            href="#home" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block font-display text-lg tracking-wider text-garage-orange font-bold"
          >
            HOME
          </a>
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block font-display text-lg tracking-wider text-gray-300 hover:text-white font-bold"
          >
            ABOUT LAB
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block font-display text-lg tracking-wider text-gray-300 hover:text-white font-bold"
          >
            SERVICES
          </a>
          <a 
            href="#estimator" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block font-display text-lg tracking-wider text-gray-300 hover:text-white font-bold"
          >
            COST ESTIMATOR
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block font-display text-lg tracking-wider text-gray-300 hover:text-white font-bold"
          >
            CONTACT & MAP
          </a>
          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onBookClick && onBookClick(); }}
              className="w-full chamfer-btn bg-garage-orange text-black font-display font-extrabold text-base tracking-wider uppercase py-3 shadow-glow-orange flex items-center justify-center gap-2"
            >
              <span>BOOK LAB SLOT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
