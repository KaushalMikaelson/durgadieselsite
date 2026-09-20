import React from 'react';
import { Sparkles, Gauge, Wind, Truck, Tractor, CheckCircle } from 'lucide-react';

export default function ServicesGrid({ onBookService }) {
  const SERVICES_DATA = [
    {
      id: 'crdi-injector',
      num: '01',
      title: 'CRDI INJECTOR CALIBRATION',
      tag: 'MOST POPULAR',
      desc: 'High-pressure computerized testing up to 2,200 Bar. Ultrasonic nozzle carbon wash, flow balancing across all cylinders & ECU QR code (IMA) coding. Fixes black smoke & misfires.',
      price: 'From ₹1,200',
      icon: Sparkles
    },
    {
      id: 'fip-pump',
      num: '02',
      title: 'DIESEL PUMP (FIP) OVERHAUL',
      tag: 'HEAVY DUTY',
      desc: 'Complete repair of Rotary VE, Inline & High-Pressure Common Rail (CP1-CP4) pumps. Solves morning starting hardness, airlocks, diesel dripping & power loss under heavy load.',
      price: 'From ₹1,800',
      icon: Gauge
    },
    {
      id: 'turbocharger',
      num: '03',
      title: 'TURBO REPAIR & BALANCING',
      tag: 'POWER RESTORE',
      desc: 'High-speed digital rotor balancing up to 150,000 RPM on computerized rig. CHRA core cartridge replacement, VNT actuator calibration & zero oil-leak guarantee.',
      price: 'From ₹3,500',
      icon: Wind
    },
    {
      id: 'fleet-priority',
      num: '04',
      title: 'COMMERCIAL TRUCK FLEET',
      tag: 'SAME-DAY EXPRESS',
      desc: 'Priority express bay on Patna Bypass for Tata Signa, Prima, Leyland & BharatBenz. Fast 2-4 hour injector turnaround, multi-rig packages & direct highway breakdown assistance.',
      price: 'From ₹4,500',
      icon: Truck
    },
    {
      id: 'tractor-service',
      num: '05',
      title: 'TRACTOR & HARVESTER SERVICE',
      tag: 'FARMER FRIENDLY',
      desc: 'Affordable, reliable pump tuning for Swaraj, Mahindra 575 DI & John Deere so tractors pull heavy trolleys effortlessly without engine stalling. Eliminates storage diesel water rust.',
      price: 'From ₹1,500',
      icon: Tractor
    },
    {
      id: 'smoke-mileage',
      num: '06',
      title: 'SMOKE FIX & MILEAGE TUNING',
      tag: 'SAVE 15-20% DIESEL',
      desc: 'Guaranteed dense black smoke reduction to pass PUC emissions and boost fuel economy by 2 to 3 km per liter. Balanced cylinder delivery eliminates engine vibrations.',
      price: 'From ₹999',
      icon: CheckCircle
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-garage-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3 Visual Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Showcase 1 */}
          <div className="relative group overflow-hidden rounded-sm border border-white/10 bg-garage-surface">
            <img
              src="data/unnamed%20(1).webp"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"; }}
              alt="CRDI Injector Calibration"
              className="w-full h-52 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="font-display font-black text-xl tracking-wider text-garage-orange uppercase">
                CRDI CALIBRATION
              </span>
            </div>
          </div>

          {/* Showcase 2 */}
          <div className="relative group overflow-hidden rounded-sm border border-white/10 bg-garage-surface">
            <img
              src="data/unnamed.webp"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80"; }}
              alt="Fuel Injection Pump Repair"
              className="w-full h-52 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="font-display font-black text-xl tracking-wider text-garage-orange uppercase">
                PUMP OVERHAUL
              </span>
            </div>
          </div>

          {/* Showcase 3 */}
          <div className="relative group overflow-hidden rounded-sm border border-white/10 bg-garage-surface">
            <img
              src="data/download.jpg"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"; }}
              alt="Turbocharger & Heavy Machinery"
              className="w-full h-52 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="font-display font-black text-xl tracking-wider text-garage-orange uppercase">
                TURBO & TRACTOR
              </span>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="font-mono text-xs font-bold tracking-[0.25em] text-garage-orange uppercase mb-2">
            // COMPREHENSIVE CRDI & PUMP SERVICES
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
            HIGH-PRECISION CALIBRATION LAB
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Every injector and pump at Maa Durga Diesel is calibrated on automated digital test rigs with genuine Bosch & Delphi seal kits and computerized flow telemetry.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((srv) => {
            const IconComponent = srv.icon;
            return (
              <div
                key={srv.id}
                className="relative group bg-garage-surface p-7 rounded-sm border border-white/10 hover:border-garage-orange/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-card-elevated hover:-translate-y-1"
              >
                {/* Huge Translucent Number in Background */}
                <span className="text-outline-faint absolute top-2 right-4 font-display font-black text-7xl select-none pointer-events-none group-hover:text-garage-orange/10 transition-colors">
                  {srv.num}
                </span>

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-sm bg-black/60 border border-white/10 flex items-center justify-center text-garage-orange group-hover:bg-garage-orange group-hover:text-black transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="chamfer-badge bg-garage-orange/15 border border-garage-orange/30 text-garage-orange text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 uppercase">
                      {srv.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-2xl uppercase tracking-wide text-white group-hover:text-garage-orange transition-colors mb-3">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                {/* Pricing & Trigger */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase block">Starting at</span>
                    <span className="font-display font-extrabold text-lg text-garage-orange">{srv.price}</span>
                  </div>
                  <button
                    onClick={() => onBookService && onBookService(srv.title)}
                    className="chamfer-btn-sm bg-white/10 hover:bg-garage-orange hover:text-black text-white font-display font-bold text-xs uppercase px-4 py-2 transition-all cursor-pointer"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
