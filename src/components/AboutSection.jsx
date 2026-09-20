import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-garage-surface overflow-hidden border-t border-white/5">
      {/* Giant Watermark Text in Background */}
      <div className="watermark-garage absolute left-6 top-1/2 -translate-y-1/2 z-0 hidden md:block">
        MAA DURGA DIESEL
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Story + 6 Bullet Checks + Button */}
          <div className="lg:col-span-6 space-y-6">
            <div className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-garage-orange uppercase flex items-center gap-2">
              <span>// ABOUT MAA DURGA DIESEL</span>
            </div>

            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight uppercase">
              <span className="block text-white">PASSION FOR</span>
              <span className="block text-garage-orange">DIESEL POWER &</span>
              <span className="block text-white">PRECISION</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              <p>
                Established in 2002 at Mahadev Asthan, Paijawa, Patna, <strong className="text-white">Maa Durga Diesel</strong> is Bihar's most trusted computerized diesel fuel injection and CRDI calibration laboratory. We combine advanced computerized test benches with 25+ years of master engineering to restore peak fuel economy and pulling torque.
              </p>
              <p>
                From commercial heavy trucks and tippers on Patna Bypass to farmer tractors and personal diesel SUVs — every fuel pump, common rail injector, and turbo is digitally calibrated to factory micron specifications.
              </p>
            </div>

            {/* 6 Feature Bullet Points (2 Columns with Orange Square Bullets) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-2">
              {[
                "Computerized 2,200 Bar benches",
                "25+ Years master technicians",
                "Genuine Bosch & Delphi parts",
                "Live digital flow test reports",
                "All trucks, tractors, pickups & cars",
                "Ultrasonic nozzle carbon cleaning"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 bg-garage-orange rounded-none shadow-glow-orange shrink-0"></span>
                  <span className="font-medium text-sm sm:text-base text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Angled Action Button */}
            <div className="pt-4">
              <a
                href="#services"
                className="inline-flex chamfer-btn bg-garage-orange hover:bg-garage-orange-glow text-black font-display font-extrabold text-base tracking-wider uppercase px-8 py-3.5 shadow-glow-orange hover:scale-105 transition-all"
              >
                EXPLORE SERVICES
              </a>
            </div>
          </div>

          {/* Right Column: 3 Stacked Visual Cards */}
          <div className="lg:col-span-6 space-y-4">
            {/* Card 1: Computerized CRDI Test Bench */}
            <div className="relative group overflow-hidden rounded-sm border border-white/10 bg-garage-black tech-crosshair-tl">
              <img
                src="data/unnamed%20(1).webp"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"; }}
                alt="Bosch Computerized CRDI Test Bench at Maa Durga Diesel"
                className="w-full h-44 sm:h-48 object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-3 left-4">
                <span className="font-display font-black text-lg sm:text-xl tracking-wider text-garage-orange uppercase drop-shadow-md">
                  COMPUTERIZED CRDI BENCH
                </span>
              </div>
            </div>

            {/* Card 2: Diesel Fuel Injection Pump Overhaul */}
            <div className="relative group overflow-hidden rounded-sm border border-white/10 bg-garage-black">
              <img
                src="data/unnamed.webp"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80"; }}
                alt="Diesel Pump Calibration Bay at Maa Durga Diesel"
                className="w-full h-44 sm:h-48 object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-3 left-4">
                <span className="font-display font-black text-lg sm:text-xl tracking-wider text-garage-orange uppercase drop-shadow-md">
                  DIESEL PUMP OVERHAUL
                </span>
              </div>
            </div>

            {/* Card 3: Turbocharger Balancing & Tractor Bay */}
            <div className="relative group overflow-hidden rounded-sm border border-white/10 bg-garage-black tech-crosshair-br">
              <img
                src="data/download.jpg"
                onError={(e) => { e.target.src = "data/unnamed%20(3).webp"; }}
                alt="Heavy Machinery & Tractor Bay at Maa Durga Diesel"
                className="w-full h-44 sm:h-48 object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-3 left-4">
                <span className="font-display font-black text-lg sm:text-xl tracking-wider text-garage-orange uppercase drop-shadow-md">
                  TURBOCHARGER & TRACTOR BAY
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
