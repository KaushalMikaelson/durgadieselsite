import React, { useState, useMemo } from 'react';
import { Check, CalendarCheck } from 'lucide-react';

export default function Estimator({ onBookCustomPackage }) {
  const [vehicleType, setVehicleType] = useState('truck');
  const [selectedIssues, setSelectedIssues] = useState(['black-smoke', 'crdi-injector']);

  const VEHICLES = [
    { id: 'truck', name: 'Commercial Heavy Truck', sub: 'Tata Signa, Prima, Leyland, BharatBenz', multiplier: 1.4 },
    { id: 'pickup', name: 'Commercial Pickup & LCV', sub: 'Bolero Maxi Truck, Tata Ace, Intra', multiplier: 1.0 },
    { id: 'tractor', name: 'Agricultural Tractor', sub: 'Swaraj, Mahindra 575 DI, John Deere', multiplier: 0.9 },
    { id: 'car', name: 'Passenger Diesel SUV & Car', sub: 'Scorpio, Innova, Fortuner, Swift, Creta', multiplier: 1.1 },
    { id: 'generator', name: 'Industrial DG Set Generator', sub: 'Cummins, Kirloskar, Ashok Leyland', multiplier: 1.3 }
  ];

  const ISSUES = [
    { id: 'black-smoke', name: 'Dense Black Smoke & Loss of Pulling Power', base: 1200 },
    { id: 'starting-trouble', name: 'Morning Hard Starting / Long Cranking / Battery Drain', base: 1000 },
    { id: 'crdi-injector', name: 'Engine Knocking Clatter / Check Engine Light / Misfire', base: 2200 },
    { id: 'pump-leakage', name: 'Diesel Fuel Leaking / Fuel Line Air-Lock', base: 1500 },
    { id: 'turbo-whistle', name: 'Turbo Whistling Noise / Intercooler Oil Dripping', base: 3500 }
  ];

  const toggleIssue = (id) => {
    if (selectedIssues.includes(id)) {
      setSelectedIssues(selectedIssues.filter(item => item !== id));
    } else {
      setSelectedIssues([...selectedIssues, id]);
    }
  };

  const { originalTotal, discountedTotal, savings } = useMemo(() => {
    const currentVehicle = VEHICLES.find(v => v.id === vehicleType) || VEHICLES[0];
    const raw = selectedIssues.reduce((sum, id) => {
      const issue = ISSUES.find(i => i.id === id);
      return sum + (issue ? issue.base * currentVehicle.multiplier : 0);
    }, 0);

    const discount = raw * 0.25;
    return {
      originalTotal: Math.round(raw),
      discountedTotal: Math.round(raw - discount),
      savings: Math.round(discount)
    };
  }, [vehicleType, selectedIssues]);

  return (
    <section id="estimator" className="py-20 bg-garage-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="font-mono text-xs font-bold tracking-[0.25em] text-garage-orange uppercase mb-2">
            // REAL-TIME TRANSPARENT PRICING
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white">
            DIAGNOSTIC & COST ESTIMATOR
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Select your vehicle class and engine symptoms. 25% promotional lab discount is automatically applied!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-garage-surface p-6 sm:p-10 rounded-sm border border-white/10 shadow-2xl">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Vehicle Segment */}
            <div>
              <label className="font-mono text-xs text-garage-orange uppercase tracking-wider font-bold block mb-3">
                STEP 1: SELECT YOUR VEHICLE CLASS
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {VEHICLES.map(v => (
                  <button
                    key={v.id}
                    onClick={() => setVehicleType(v.id)}
                    className={`text-left p-3.5 rounded-sm border transition-all ${
                      vehicleType === v.id
                        ? 'border-garage-orange bg-garage-orange/10 shadow-glow-subtle'
                        : 'border-white/10 bg-black/40 hover:border-white/30'
                    }`}
                  >
                    <span className="font-display font-black text-base uppercase block text-white">
                      {v.name}
                    </span>
                    <span className="text-[11px] text-gray-400 block truncate font-mono">
                      {v.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Symptom Selection */}
            <div>
              <label className="font-mono text-xs text-garage-orange uppercase tracking-wider font-bold block mb-3">
                STEP 2: CHOOSE ENGINE SYMPTOMS
              </label>
              <div className="space-y-3">
                {ISSUES.map(issue => {
                  const isSelected = selectedIssues.includes(issue.id);
                  return (
                    <div
                      key={issue.id}
                      onClick={() => toggleIssue(issue.id)}
                      className={`flex items-center justify-between p-3.5 rounded-sm border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-garage-orange/80 bg-garage-orange/10'
                          : 'border-white/10 bg-black/40 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-none border flex items-center justify-center ${
                          isSelected ? 'bg-garage-orange border-garage-orange' : 'border-white/30'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 text-black stroke-[3]" />}
                        </div>
                        <span className="font-medium text-sm text-gray-200">{issue.name}</span>
                      </div>
                      <span className="font-mono font-bold text-xs text-garage-orange">
                        +₹{issue.base}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Price Summary Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-black/70 border border-white/10 p-6 sm:p-8 rounded-sm">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <span className="font-display font-black text-xl uppercase text-white">ESTIMATE BREAKDOWN</span>
                <span className="chamfer-badge bg-garage-orange text-black font-display font-bold text-xs px-2.5 py-0.5 uppercase">
                  25% OFF APPLIED
                </span>
              </div>

              <div className="space-y-3 text-sm font-mono mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Vehicle Category:</span>
                  <span className="text-white font-bold uppercase">
                    {VEHICLES.find(v => v.id === vehicleType)?.name}
                  </span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Symptoms Selected:</span>
                  <span className="text-white font-bold">{selectedIssues.length} Items</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Standard Calibration Rate:</span>
                  <span className="text-gray-400 line-through">₹{originalTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-bold">
                  <span>Promo Savings (25%):</span>
                  <span>-₹{savings.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-mono text-xs uppercase text-gray-400">Estimated Net Cost:</span>
                <div className="text-right">
                  <span className="font-display font-black text-4xl sm:text-5xl text-garage-orange">
                    ₹{discountedTotal.toLocaleString()}
                  </span>
                  <span className="block text-[11px] font-mono text-gray-400">Includes Computer Flow Test Report</span>
                </div>
              </div>

              <button
                onClick={() => onBookCustomPackage && onBookCustomPackage({
                  vehicle: VEHICLES.find(v => v.id === vehicleType)?.name,
                  total: discountedTotal,
                  count: selectedIssues.length
                })}
                className="w-full chamfer-btn bg-garage-orange hover:bg-garage-orange-glow text-black font-display font-extrabold text-base tracking-wider uppercase py-3.5 shadow-glow-orange flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform cursor-pointer"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>BOOK THIS ESTIMATE</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
