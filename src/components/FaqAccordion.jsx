import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  const FAQS = [
    {
      q: "What causes dense black smoke and poor pickup in diesel engines?",
      a: "Dense black smoke is caused by incomplete diesel combustion due to worn injector nozzles, incorrect injection timing, clogged spray orifices, or a malfunctioning turbocharger. Computerized testing at 2,200 Bar precisely measures return flow and atomization to restore clean combustion."
    },
    {
      q: "How long does computerized CRDI injector calibration take?",
      a: "For most passenger SUVs, pickups, and trucks, calibration of a complete set of 4 to 6 injectors takes approximately 2 to 3 hours. We provide priority same-day turnaround for commercial trucks on Patna Bypass."
    },
    {
      q: "Do you use 100% genuine Bosch, Delphi, and Denso parts?",
      a: "Yes. We strictly use genuine OEM nozzles, control valves, and seal kits directly sourced from Bosch, Delphi, and MICO to ensure long-term durability and factory mileage."
    },
    {
      q: "Can I get direct highway assistance or same-day service near Paijawa?",
      a: "Yes. Our lab is strategically located right at Mahadev Asthan, Paijawa on Patna Bypass with spacious parking bays for commercial multi-axle trucks, trailers, and tractors. Call 099312 27178 directly for express priority."
    }
  ];

  return (
    <section className="py-20 bg-garage-black border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="font-mono text-xs font-bold tracking-[0.25em] text-garage-orange uppercase mb-2">
            // COMMON QUESTIONS
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-white/10 rounded-sm bg-garage-surface overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-lg uppercase text-white hover:text-garage-orange transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-garage-orange shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-garage-orange shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-gray-300 text-sm leading-relaxed border-t border-white/5 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
