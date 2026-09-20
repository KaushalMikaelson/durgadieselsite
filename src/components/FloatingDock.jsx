import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';

const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Maa+Durga+Diesel+Mahadev+Asthan+Paijawa+Patna+Bihar+800009";

export default function FloatingDock() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function checkScroll() {
      setShowTop(window.scrollY > 400);
    }
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 flex items-center justify-center sm:justify-end gap-2.5">
      {/* Direct Call Button */}
      <a
        href="tel:09931227178"
        className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-xs sm:text-sm px-5 py-3.5 rounded-full shadow-glow-amber transition-all hover:scale-105 btn-tap"
        title="Direct Phone Call"
      >
        <Phone className="w-4 h-4 stroke-[2.8]" />
        <span>Call 099312 27178</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919931227178?text=Hello%20Maa%20Durga%20Diesel%2C%20I%20am%20chatting%20from%20your%20website%20and%20need%20diesel%20pump%20or%20injector%20service."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm px-5 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 btn-tap"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      {/* Google Maps Location Pin */}
      <a
        href={GOOGLE_MAPS_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 bg-black/80 hover:bg-black text-white font-bold text-xs sm:text-sm px-4 py-3.5 rounded-full shadow-dock border border-white/20 backdrop-blur-md transition-all hover:scale-105 btn-tap"
        title="Open Workshop Location on Google Maps"
      >
        <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
        <span className="hidden sm:inline">Map</span>
      </a>

      {/* Scroll to Top */}
      {showTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-black/80 hover:bg-black text-white shadow-dock border border-white/20 backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 shrink-0 btn-tap"
          title="Scroll to Top"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
