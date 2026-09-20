import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function OfferBanner({ onBookClick }) {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-12">
      <div className="chamfer-banner bg-gradient-to-r from-garage-orange via-garage-orange-glow to-garage-orange text-black p-6 sm:p-8 shadow-glow-orange flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: 25% Huge Typography */}
        <div className="flex items-center gap-6 sm:gap-8">
          <span className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter leading-none text-black">
            25%
          </span>
          <div className="space-y-1">
            <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-black leading-none">
              OFF LAB DIAGNOSTICS & TESTING
            </h3>
            <p className="font-mono text-xs sm:text-sm font-bold tracking-wider uppercase text-black/90">
              LIMITED TIME ONLINE OFFER — MAHADEV ASTHAN, PATNA
            </p>
          </div>
        </div>

        {/* Right: Black Angled Button */}
        <button
          onClick={() => onBookClick && onBookClick()}
          className="chamfer-btn bg-black hover:bg-neutral-900 text-white font-display font-black text-base sm:text-lg tracking-wider uppercase px-8 py-3.5 shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform shrink-0 cursor-pointer"
        >
          <span>BOOK LAB SLOT</span>
          <ArrowRight className="w-4 h-4 text-garage-orange" />
        </button>

      </div>
    </section>
  );
}
