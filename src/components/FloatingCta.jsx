import React from 'react';

export default function FloatingCta({ onBookClick }) {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onBookClick}
        className="chamfer-btn bg-garage-orange hover:bg-garage-orange-glow text-black font-display font-black text-sm sm:text-base tracking-wider uppercase px-6 py-3.5 shadow-glow-orange hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
      >
        <span>BOOK NOW</span>
      </button>
    </div>
  );
}
