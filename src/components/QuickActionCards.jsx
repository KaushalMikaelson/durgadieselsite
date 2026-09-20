import React from 'react';
import { Activity, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Computerized Telemetry Scan',
    titleHi: 'कंप्यूटराइज्ड प्रेशर स्कैन',
    desc: 'Precision electronic diagnosis measuring pilot delivery, full-load rail pressure up to 2,200 Bar, and back-leakage telemetry.',
    metric: '0 to 2,200 BAR',
    icon: Activity
  },
  {
    step: '02',
    title: 'Ultrasonic Micron De-Carbon',
    titleHi: 'अल्ट्रासोनिक डी-कार्बन बाथ',
    desc: 'High-frequency cavitation bath removing sub-micron carbon clogs and gum deposits without damaging delicate micro-orifices.',
    metric: '40 kHz Cavitation',
    icon: Sparkles
  },
  {
    step: '03',
    title: 'EPS-625 Bench Calibration',
    titleHi: 'माइक्रोन कैलिब्रेशन एवं QR कोडिंग',
    desc: 'Laser shimming, nozzle pop-setting, dynamic fuel curve matching, and generation of genuine ECU IMA QR calibration codes.',
    metric: '±0.001 mm Tolerance',
    icon: Sliders
  },
  {
    step: '04',
    title: 'Zero-Smoke Express Dispatch',
    titleHi: 'टेस्टेड एवं सीलबंद डिलीवरी',
    desc: 'Final high-speed simulation run, tamper-evident anti-leak sealing, verified dyno report, and express vehicle dispatch.',
    metric: 'Same-Day 100% Tested',
    icon: CheckCircle2
  }
];

export default function QuickActionCards() {
  return (
    <section id="process" className="py-16 sm:py-24 border-b border-white/10 relative overflow-hidden bg-obsidian-950/60">
      <div className="container-custom">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3 shadow-glow-amber">
            PRECISION BLUEPRINT / हमारी कार्यप्रणाली
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display uppercase tracking-tight">
            Keep Your Engine <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Running Like New</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-mono">
            From initial telemetry scan to same-day express dispatch, every injector and pump passes through our strict 4-step computerized restoration process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div key={idx} className="carbon-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between border border-white/10 relative group">
                
                {/* Glowing Accent Top Bar */}
                <div className="h-1 w-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-6 group-hover:w-full transition-all duration-500"></div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-3xl sm:text-4xl text-amber-400/80 group-hover:text-amber-400 transition-colors font-mono">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-black text-white">{step.title}</h3>
                    <div className="text-xs text-amber-400/90 font-medium mt-0.5">{step.titleHi}</div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-500 uppercase text-[10px]">Standard</span>
                  <span className="text-emerald-400 font-bold">{step.metric}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
