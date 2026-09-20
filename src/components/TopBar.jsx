import React, { useState, useEffect } from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Maa+Durga+Diesel+Mahadev+Asthan+Paijawa+Patna+Bihar+800009";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    function checkStatus() {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const timeInMinutes = currentHour * 60 + currentMinute;
      
      const openTime = 8 * 60 + 30; // 8:30 AM
      const closeTime = 19 * 60;    // 7:00 PM
      
      setIsOpen(timeInMinutes >= openTime && timeInMinutes < closeTime);
    }

    checkStatus();
    const timer = setInterval(checkStatus, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-obsidian-950/90 border-b border-white/10 backdrop-blur-md text-slate-300 text-xs py-2 px-4 sticky top-0 z-50">
      <div className="container-custom flex flex-wrap items-center justify-between gap-3">
        
        {/* Left Side: Heritage Mark & Location Landmark */}
        <div className="flex items-center flex-wrap gap-x-3 gap-y-1.5">
          <span className="font-mono font-black text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded text-[10px] tracking-wider uppercase">
            ESTD. 2002
          </span>
          <span className="text-slate-600 font-bold">•</span>
          <span className="text-slate-300 font-mono text-[11px] uppercase tracking-wider font-semibold">
            PATNA BYPASS NH-30
          </span>
          <span className="text-slate-600 font-bold hidden sm:inline">•</span>
          <a 
            href={GOOGLE_MAPS_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors font-medium group"
            title="Open GPS Location on Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-500 group-hover:scale-110 transition-transform" />
            <span className="underline decoration-slate-600 hover:decoration-amber-400">Opposite Mahadev Asthan, Paijawa, Patna</span>
          </a>
        </div>

        {/* Center: Live Operating Status (8:30 AM – 7:00 PM) */}
        <div className="flex items-center">
          <div className={`inline-flex items-center gap-2 px-3 py-0.5 rounded-full border text-[11px] font-mono font-bold transition-colors ${
            isOpen 
              ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40 shadow-sm' 
              : 'bg-rose-950/60 text-rose-300 border-rose-500/40 shadow-sm'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className={`absolute inline-flex h-full w-full rounded-full ${isOpen ? 'bg-emerald-400 beacon-active' : 'bg-rose-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
            </span>
            <span>{isOpen ? 'WORKSHOP OPEN NOW' : 'CLOSED NOW'}</span>
            <span className="text-slate-600 font-normal">|</span>
            <span className="font-medium text-slate-300">8:30 AM – 7:00 PM</span>
          </div>
        </div>

        {/* Right Side: Direct Helpline & WhatsApp */}
        <div className="flex items-center gap-3 ml-auto sm:ml-0">
          <a 
            href="tel:09931227178" 
            className="inline-flex items-center gap-1.5 font-mono font-black text-white hover:text-amber-400 transition-colors tracking-tight text-xs sm:text-sm"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>099312 27178</span>
          </a>

          <a 
            href="https://wa.me/919931227178?text=Hello%20Maa%20Durga%20Diesel%2C%20I%20need%20help%20with%20diesel%20injector%20or%20pump%20service." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded-full font-bold text-[11px] transition-all shadow-sm btn-tap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
