import React from 'react';
import { CheckCircle2, XCircle, ShieldCheck, Clock, TrendingUp } from 'lucide-react';

export default function WhyChooseUs() {
  const comparisonRows = [
    {
      feature: 'Testing Method',
      featureHi: 'जांच का तरीका',
      maaDurga: 'Computerized Digital Flow Bench with live pressure telemetry',
      roadside: 'Manual guesswork or crude bubble tests in open air'
    },
    {
      feature: 'Spare Parts Authenticity',
      featureHi: 'स्पेयर पार्ट्स की शुद्धता',
      maaDurga: '100% Genuine Bosch, Delphi, Denso kits with sealed packaging',
      roadside: 'Often low-grade duplicate nozzles that fail in a few weeks'
    },
    {
      feature: 'Turnaround Time',
      featureHi: 'काम पूरा होने का समय',
      maaDurga: 'Same Day Delivery in 2 to 4 Hours for most CRDI injectors',
      roadside: '2 to 5 days of costly vehicle downtime and lost earnings'
    },
    {
      feature: 'Precision & Calibration',
      featureHi: 'सटीकता और बैलेंसिंग',
      maaDurga: 'Micron-level balancing tested up to 2,200 Bar pressure',
      roadside: 'Unequal delivery causing engine vibration, knocking & smoke'
    },
    {
      feature: 'Mileage & Power Result',
      featureHi: 'माइलेज और पिकअप असर',
      maaDurga: 'Full factory power restored + up to 15% better fuel mileage',
      roadside: 'Continuous black smoke and sluggish pickup under load'
    },
    {
      feature: 'Location & Truck Parking',
      featureHi: 'गाड़ी खड़ी करने की सुविधा',
      maaDurga: 'Directly on Paijawa Bypass with wide road access & safe parking',
      roadside: 'Hard to navigate narrow alleys with risk of scratches'
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 border-b border-white/10 scroll-mt-20">
      <div className="container-custom">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3 shadow-glow-amber">
            WHY CHOOSE US / हमारा अंतर जानिए
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display uppercase tracking-tight">
            Why Fleet Owners <span className="text-amber-400">Choose Maa Durga Diesel</span>
          </h2>
          <p className="text-amber-400 font-bold text-sm sm:text-base mt-2 font-mono">
            सड़क किनारे के अनाड़ी मिस्त्री और माँ दुर्गा डीजल के काम में फर्क साफ देखिए
          </p>
        </div>

        {/* Comparison Table */}
        <div className="carbon-card rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-black/60 font-mono text-xs uppercase tracking-wider text-slate-300">
                  <th className="p-4 sm:p-5">Engineering Parameter</th>
                  <th className="p-4 sm:p-5 text-amber-400 font-bold bg-amber-500/10 border-x border-white/10">
                    Maa Durga Diesel (Computerized Lab)
                  </th>
                  <th className="p-4 sm:p-5 text-slate-400">
                    Roadside Unauthorized Mechanics
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-5">
                      <div className="font-heading font-bold text-white text-sm">{row.feature}</div>
                      <div className="text-[11px] text-amber-400/80 font-medium">{row.featureHi}</div>
                    </td>
                    <td className="p-4 sm:p-5 bg-amber-500/5 border-x border-white/10">
                      <div className="flex items-start gap-2 text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{row.maaDurga}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5">
                      <div className="flex items-start gap-2 text-slate-400">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{row.roadside}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
