import React from 'react';
import { Monitor, Cpu, Waves, Award, Phone, CheckCircle2 } from 'lucide-react';

export default function TechShowcase() {
  return (
    <section id="technology" className="py-16 sm:py-24 border-b border-white/10 relative scroll-mt-20">
      <div className="container-custom">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Explanations */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 shadow-glow-amber">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>LABORATORY DIAGNOSTICS VS GUESSWORK</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display uppercase tracking-tight leading-tight">
              Why Computer Testing <span className="text-amber-400">Saves You Thousands</span>
            </h2>
            
            <p className="text-amber-400 font-bold text-sm sm:text-base">
              अंदाजे से काम नहीं, कंप्यूटर से सटीक जांच — ताकि सिर्फ वही बदला जाए जो सचमुच खराब है
            </p>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Diesel fuel injectors operate with micro-tolerances thinner than a human hair. Roadside mechanics often replace expensive parts by guesswork. At Maa Durga Diesel, our computerized test bench measures fuel delivery per stroke under real highway speeds and loads.
            </p>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="carbon-card p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <Monitor className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Digital Flow Graphing</span>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Measures fuel volume in idle, partial, and full power load to match all cylinders perfectly.
                </p>
              </div>

              <div className="carbon-card p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <Cpu className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>2,200 Bar Rail Simulation</span>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Tests latest Euro-6 and BS6 common rail injectors under extreme highway pressures.
                </p>
              </div>

              <div className="carbon-card p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <Waves className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Ultrasonic Carbon Bath</span>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Cleans microscopic carbon deposits from nozzle holes without scratching delicate needle valves.
                </p>
              </div>

              <div className="carbon-card p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <Award className="w-5 h-5 text-red-400 shrink-0" />
                  <span>Printed Test Report</span>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  You get a full test report showing fuel flow before and after calibration. 100% transparency.
                </p>
              </div>
            </div>

            {/* Call Action */}
            <div className="pt-2">
              <a
                href="tel:09931227178"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl shadow-glow-amber transition-all btn-tap"
              >
                <Phone className="w-4 h-4 text-slate-950 stroke-[2.8]" />
                <span>Ask Chief Engineer About Test Bench: 099312 27178</span>
              </a>
            </div>
          </div>

          {/* Right Column: Real Workshop Visual Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="carbon-card p-3 rounded-3xl border border-white/15 shadow-2xl">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-black relative group border border-white/10">
                <img
                  src="data/unnamed%20(1).webp"
                  alt="Bosch Fuel Injection Test Bench in Paijawa Patna"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="bg-amber-500 text-slate-950 font-mono text-[10px] font-black px-2 py-0.5 rounded w-fit mb-1">
                    REAL LAB APPARATUS
                  </span>
                  <div className="font-heading font-black text-lg">Bosch Calibration Test Bench</div>
                  <div className="text-xs text-slate-300 font-mono">Equipped with digital stroke counters & multi-cylinder flow tubes</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-sm aspect-[16/10] relative group bg-black">
                <img
                  src="data/unnamed.webp"
                  alt="Workshop Calibration Bay"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                />
                <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold border border-white/10">
                  Overhaul Bay
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-sm aspect-[16/10] relative group bg-black">
                <img
                  src="data/download.jpg"
                  alt="Tractor & Heavy Bay"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                />
                <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold border border-white/10">
                  Tractor Yard
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
