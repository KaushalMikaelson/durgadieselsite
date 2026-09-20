import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

function EmbersCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.9 + 0.3,
      speedX: (Math.random() - 0.5) * 0.5,
      alpha: Math.random() * 0.7 + 0.2,
      fadeSpeed: Math.random() * 0.008 + 0.003
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.alpha -= p.fadeSpeed;

        if (p.y < 0 || p.alpha <= 0) {
          p.y = canvas.height + Math.random() * 20;
          p.x = Math.random() * canvas.width;
          p.alpha = Math.random() * 0.8 + 0.2;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 85, 0, ${p.alpha})`;
        ctx.shadowColor = '#ff5500';
        ctx.shadowBlur = p.radius * 5;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
}

function LowPolyDieselRig() {
  return (
    <div className="relative w-full max-w-[650px] aspect-[16/9] flex items-center justify-center select-none group">
      {/* Ambient Warm Underglow */}
      <div className="absolute -bottom-8 w-4/5 h-20 bg-garage-orange/30 blur-2xl rounded-full pointer-events-none"></div>

      <svg viewBox="0 0 800 450" className="w-full h-full drop-shadow-2xl overflow-visible">
        <defs>
          <filter id="orangeGlowHero" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="bodyTopHero" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff7733" />
            <stop offset="60%" stopColor="#ff5500" />
            <stop offset="100%" stopColor="#e64400" />
          </linearGradient>

          <linearGradient id="bodySideHero" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff5500" />
            <stop offset="60%" stopColor="#d94000" />
            <stop offset="100%" stopColor="#992b00" />
          </linearGradient>

          <linearGradient id="bodyDarkHero" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a32e00" />
            <stop offset="100%" stopColor="#571600" />
          </linearGradient>

          <linearGradient id="windowTintHero" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#303846" />
            <stop offset="100%" stopColor="#11141a" />
          </linearGradient>
        </defs>

        {/* Ground Shadow & Speed Lines */}
        <ellipse cx="400" cy="365" rx="350" ry="18" fill="black" opacity="0.65" filter="blur(8px)" />
        <line x1="80" y1="355" x2="180" y2="355" stroke="rgba(255,85,0,0.3)" strokeWidth="3" strokeDasharray="16 10" />
        <line x1="120" y1="365" x2="210" y2="365" stroke="rgba(255,85,0,0.2)" strokeWidth="2" strokeDasharray="10 8" />

        {/* Heavy Commercial Truck & Diesel Rig Low-Poly Facets */}
        <polygon points="120,335 180,345 340,345 460,345 620,345 710,330 690,348 150,348" fill="#111317" />
        <polygon points="110,325 180,335 240,295 190,285" fill="#e64400" />
        <polygon points="110,325 190,285 270,270 210,310" fill="#ff6200" />
        <polygon points="110,325 140,338 210,338 210,310" fill="#b33300" />

        {/* Headlight */}
        <polygon points="145,305 180,308 175,315 138,312" fill="#ffffff" filter="url(#orangeGlowHero)" opacity="0.9" />

        {/* Hood / Bonnet */}
        <polygon points="190,285 270,270 380,265 310,285" fill="#ff7733" />
        <polygon points="270,270 380,265 410,240 330,245" fill="#ff8544" />
        
        {/* Windshield & Cabin Roof */}
        <polygon points="330,245 410,240 500,238 430,248" fill="#ff6a1a" />
        <polygon points="410,240 500,238 600,245 560,285 415,285" fill="url(#windowTintHero)" stroke="#222834" strokeWidth="1.5" />
        <polygon points="440,250 510,248 540,280 435,280" fill="#2d3748" opacity="0.6" />
        <polygon points="500,238 600,245 640,265 560,285" fill="#181e29" />

        {/* Side Body */}
        <polygon points="270,270 310,285 430,285 410,335 280,335 240,295" fill="url(#bodyTopHero)" />
        <polygon points="430,285 560,285 540,335 410,335" fill="url(#bodySideHero)" />
        <polygon points="480,295 535,295 520,325" fill="#220a00" stroke="#ff5500" strokeWidth="1" />

        {/* Cargo / Tail Section */}
        <polygon points="600,245 680,270 640,295 560,285" fill="#e64400" />
        <polygon points="640,295 680,270 720,295 670,315 570,315 560,285" fill="#ff5500" />
        <polygon points="670,315 720,295 725,320 670,335 580,335" fill="url(#bodyDarkHero)" />
        <polygon points="720,295 735,310 725,320" fill="#b33300" />
        <line x1="710" y1="300" x2="735" y2="308" stroke="#ff2200" strokeWidth="4" filter="url(#orangeGlowHero)" />

        {/* FRONT WHEEL */}
        <g transform="translate(225, 340)">
          <circle cx="0" cy="0" r="48" fill="#0c0e12" />
          <circle cx="0" cy="0" r="44" fill="#1b1e24" stroke="#08090b" strokeWidth="4" />
          <circle cx="0" cy="0" r="38" fill="none" stroke="#ff5500" strokeWidth="5" filter="url(#orangeGlowHero)" className="animate-wheel-pulse" />
          <circle cx="0" cy="0" r="32" fill="none" stroke="#ff7733" strokeWidth="2" />
          <circle cx="0" cy="0" r="12" fill="#ff5500" />
          <circle cx="0" cy="0" r="6" fill="#111317" />
          <line x1="-32" y1="0" x2="32" y2="0" stroke="#ff6a00" strokeWidth="4" />
          <line x1="0" y1="-32" x2="0" y2="32" stroke="#ff6a00" strokeWidth="4" />
          <line x1="-22" y1="-22" x2="22" y2="22" stroke="#ff6a00" strokeWidth="3" />
          <line x1="-22" y1="22" x2="22" y2="-22" stroke="#ff6a00" strokeWidth="3" />
        </g>

        {/* REAR WHEEL */}
        <g transform="translate(610, 340)">
          <circle cx="0" cy="0" r="48" fill="#0c0e12" />
          <circle cx="0" cy="0" r="44" fill="#1b1e24" stroke="#08090b" strokeWidth="4" />
          <circle cx="0" cy="0" r="38" fill="none" stroke="#ff5500" strokeWidth="5" filter="url(#orangeGlowHero)" className="animate-wheel-pulse" />
          <circle cx="0" cy="0" r="32" fill="none" stroke="#ff7733" strokeWidth="2" />
          <circle cx="0" cy="0" r="12" fill="#ff5500" />
          <circle cx="0" cy="0" r="6" fill="#111317" />
          <line x1="-32" y1="0" x2="32" y2="0" stroke="#ff6a00" strokeWidth="4" />
          <line x1="0" y1="-32" x2="0" y2="32" stroke="#ff6a00" strokeWidth="4" />
          <line x1="-22" y1="-22" x2="22" y2="22" stroke="#ff6a00" strokeWidth="3" />
          <line x1="-22" y1="22" x2="22" y2="-22" stroke="#ff6a00" strokeWidth="3" />
        </g>

        <circle cx="225" cy="340" r="54" fill="none" stroke="rgba(255,85,0,0.4)" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="610" cy="340" r="54" fill="none" stroke="rgba(255,85,0,0.4)" strokeWidth="1.5" strokeDasharray="4 6" />
      </svg>
    </div>
  );
}

export default function Hero({ onBookClick }) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center bg-garage-black overflow-hidden">
      <EmbersCanvas />

      {/* Volumetric Radial Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-garage-orange/15 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Technical HUD crosshair */}
      <div className="absolute top-28 right-1/4 w-7 h-7 rounded-full border border-garage-orange/40 pointer-events-none hidden lg:block">
        <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-garage-orange/60 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-center">
          
          {/* Left Column: Bold Typography */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-garage-orange inline-block"></span>
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">
                MAA DURGA DIESEL · PATNA (ESTD. 2002)
              </span>
            </div>

            <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.88] tracking-tight uppercase select-none">
              <span className="block text-white">YOUR</span>
              <span className="block text-white">DIESEL</span>
              <span className="block text-garage-orange">DESERVES</span>
              <span className="block text-outline-white">THE BEST</span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed pt-2">
              Patna's premier computerized CRDI fuel injector, diesel pump & turbocharger calibration lab. 2,200 Bar digital testing, ±0.001mm precision & genuine Bosch / Delphi parts at Mahadev Asthan, Paijawa.
            </p>

            <div className="pt-3 flex flex-wrap gap-4 sm:hidden">
              <button
                onClick={() => onBookClick && onBookClick()}
                className="chamfer-btn bg-garage-orange text-black font-display font-extrabold text-base tracking-wider uppercase px-8 py-3.5 shadow-glow-orange flex items-center gap-2"
              >
                <span>BOOK LAB SLOT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Low Poly Rig + Floating Badges */}
          <div className="lg:col-span-6 relative flex flex-col items-center lg:items-end">
            <LowPolyDieselRig />

            <div className="relative mt-2 lg:-mt-10 sm:self-end w-full max-w-sm">
              <div className="bg-garage-surface/85 backdrop-blur-md border border-white/10 rounded-sm p-4 shadow-2xl space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono tracking-wider text-gray-200">
                  <span className="w-2 h-2 rounded-full bg-garage-orange shadow-glow-orange shrink-0"></span>
                  <span>2,200 BAR CRDI TEST BENCH</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono tracking-wider text-garage-orange font-bold">
                  <span className="w-2 h-2 rounded-full bg-garage-orange shadow-glow-orange shrink-0"></span>
                  <span>25% OFF LAB DIAGNOSTICS</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono tracking-wider text-gray-200">
                  <span className="w-2 h-2 rounded-full bg-garage-orange shadow-glow-orange shrink-0"></span>
                  <span>25+ YRS BOSCH TRAINED MASTERS</span>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-400">PAIJAWA, PATNA</span>
                  <button
                    onClick={() => onBookClick && onBookClick()}
                    className="chamfer-btn-sm bg-garage-orange hover:bg-garage-orange-glow text-black font-display font-extrabold text-xs tracking-wider uppercase px-4 py-2 flex items-center gap-1.5 shadow-glow-orange transition-all hover:scale-105"
                  >
                    <span>BOOK NOW</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
