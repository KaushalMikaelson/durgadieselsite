import React, { useState, useRef } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

export default function DiagnosticSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <section className="py-20 bg-garage-surface border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="font-mono text-xs font-bold tracking-[0.25em] text-garage-orange uppercase mb-2">
            // REAL CALIBRATION RESULTS
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white">
            BEFORE & AFTER CALIBRATION
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Drag the interactive slider to see how computerized CRDI injector calibration eliminates black exhaust smoke and restores full compression torque.
          </p>
        </div>

        {/* Slider Container */}
        <div 
          ref={containerRef}
          onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
          onTouchMove={handleMove}
          onClick={handleMove}
          className="relative max-w-4xl mx-auto aspect-[16/9] rounded-sm overflow-hidden border border-white/15 cursor-ew-resize select-none shadow-2xl"
        >
          {/* AFTER (Calibrated, Clean Combustion) */}
          <img
            src="data/unnamed%20(1).webp"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"; }}
            alt="After CRDI Calibration: Zero Smoke & Peak Power"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-garage-orange/40 text-garage-orange text-xs font-mono font-bold px-3 py-1.5 uppercase rounded-none">
            AFTER: 2,200 BAR BALANCED • ZERO SMOKE
          </div>

          {/* BEFORE (Worn, Clogged Injectors) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="data/unnamed.webp"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80"; }}
              alt="Before Calibration: Worn Nozzle & Power Loss"
              className="absolute inset-0 w-full h-full object-cover filter contrast-75 brightness-75 sepia-50"
              style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%', maxWidth: 'none' }}
            />
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 text-gray-300 text-xs font-mono font-bold px-3 py-1.5 uppercase rounded-none">
              BEFORE: HEAVY SMOKE • LONG CRANKING
            </div>
          </div>

          {/* Center Divider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-garage-orange shadow-glow-orange cursor-ew-resize"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-garage-orange text-black rounded-full shadow-2xl flex items-center justify-center font-bold text-xs">
              <ChevronsLeftRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
            ◄ DRAG SLIDER TO INSPECT RESTORATION OF 2,200 BAR INJECTION ►
          </span>
        </div>
      </div>
    </section>
  );
}
