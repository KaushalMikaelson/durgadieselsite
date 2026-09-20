import React from 'react';
import { Star } from 'lucide-react';

export default function Reviews() {
  const REVIEWS = [
    {
      name: "Suresh Yadav",
      car: "Tata Signa 4825.TK (6-Axle Tipper)",
      rating: 5,
      text: "Running 14 tippers on Patna-Gaya sand & gravel route. Our Signa had extreme power drop on loaded flyovers. Maa Durga Diesel calibrated all 6 Delphi injectors in 3 hours. Black smoke completely vanished and truck pulls full load effortlessly.",
      date: "Fleet Owner · Patna Bypass"
    },
    {
      name: "Ramakant Singh",
      car: "Swaraj 855 FE Tractor",
      rating: 5,
      text: "Heavy trolley pulling problem solved! Tractor used to stall in 3rd gear with loaded trolley. Maa Durga Diesel overhauled the MICO pump and set pop-tester nozzles. Mileage increased noticeably per bigha.",
      date: "Farmer · Fatuha, Patna"
    },
    {
      name: "Amit Verma",
      car: "Mahindra Scorpio S11 (mHawk 2.2)",
      rating: 5,
      text: "Scorpio had long cranking morning problem and clattering sound at 2000 RPM. Agency quoted 45,000 for replacement. Durga Diesel calibrated the CRDI injectors and generated new QR codes at a fraction of the cost. Engine runs smooth like new.",
      date: "SUV Owner · Kankarbagh"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-garage-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="font-mono text-xs font-bold tracking-[0.25em] text-garage-orange uppercase mb-2">
            // 25+ YEARS OF CUSTOMER TRUST
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white">
            VERIFIED VEHICLE OWNER REVIEWS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div key={idx} className="bg-garage-black border border-white/10 p-7 rounded-sm flex flex-col justify-between shadow-card-elevated">
              <div>
                <div className="flex gap-1 text-garage-orange mb-4">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-garage-orange text-garage-orange" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <span className="font-display font-black text-base uppercase text-white block">
                    {rev.name}
                  </span>
                  <span className="font-mono text-xs text-garage-orange block">
                    {rev.car}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-gray-500 uppercase border border-white/10 px-2 py-0.5">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
