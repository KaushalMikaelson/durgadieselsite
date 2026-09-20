import React from 'react';
import { Truck, Car, Tractor } from 'lucide-react';

export default function BrandsEcosystem() {
  const fuelSystems = [
    { name: 'BOSCH', country: 'Germany' },
    { name: 'DELPHI', country: 'Technologies' },
    { name: 'DENSO', country: 'Japan' },
    { name: 'CONTINENTAL', country: 'VDO' },
    { name: 'STANADYNE', country: 'USA' },
    { name: 'MICO', country: 'India' },
    { name: 'GARRETT', country: 'Turbochargers' },
    { name: 'BORGWARNER', country: 'Schwitzer' },
    { name: 'HOLSET', country: 'Cummins' }
  ];

  const vehicles = [
    {
      brand: 'TATA MOTORS',
      icon: <Truck className="w-5 h-5 text-amber-400" />,
      models: 'Signa, Prima, 407, Ace, Intra, Xenon, Harrier'
    },
    {
      brand: 'MAHINDRA',
      icon: <Car className="w-5 h-5 text-amber-400" />,
      models: 'Bolero Pickup, Maxi Truck, Scorpio, Thar, Blazo'
    },
    {
      brand: 'ASHOK LEYLAND',
      icon: <Truck className="w-5 h-5 text-amber-400" />,
      models: 'Captain, Boss, Dost, Bada Dost, Partner, Ecomet'
    },
    {
      brand: 'TRACTORS (JOHN DEERE & SWARAJ)',
      icon: <Tractor className="w-5 h-5 text-amber-400" />,
      models: 'Swaraj 744/855, John Deere 5000, Sonalika, Mahindra DI'
    },
    {
      brand: 'TOYOTA & HYUNDAI',
      icon: <Car className="w-5 h-5 text-amber-400" />,
      models: 'Innova Crysta, Fortuner D-4D, Creta CRDi, Verna'
    },
    {
      brand: 'BHARATBENZ & EICHER',
      icon: <Truck className="w-5 h-5 text-amber-400" />,
      models: 'Heavy Haulage Multi-Axle Trucks, Tippers, Pro Series'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-black/50 border-b border-white/10">
      <div className="container-custom">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3 shadow-glow-amber">
            BRANDS & SYSTEMS / समर्थित ब्रांड्स
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display uppercase tracking-tight">
            Systems & Vehicle Brands <span className="text-amber-400">We Service Daily</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 font-mono">
            Original spare parts and calibration software for all major European, Japanese, American, and Indian diesel fuel systems.
          </p>
        </div>

        {/* Fuel Injection Equipment Brands */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 text-center font-bold">
            OEM Fuel Injection Systems Supported:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
            {fuelSystems.map((item, idx) => (
              <div
                key={idx}
                className="carbon-card p-3.5 rounded-2xl text-center border border-white/10 hover:border-amber-500/50 transition-colors"
              >
                <div className="font-heading font-black text-xs sm:text-sm text-white tracking-wider">{item.name}</div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5 truncate">{item.country}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v, idx) => (
            <div
              key={idx}
              className="carbon-card p-6 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                {v.icon}
              </div>
              <div className="flex-1">
                <div className="font-heading font-bold text-base text-white tracking-wide">{v.brand}</div>
                <p className="text-xs text-slate-400 mt-1 font-mono leading-relaxed">{v.models}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
