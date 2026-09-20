import React, { useState, useEffect } from 'react';
import { X, CalendarCheck } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, defaultService = "CRDI Injector Testing" }) {
  const [service, setService] = useState(defaultService);
  const [vehicle, setVehicle] = useState("Commercial Heavy Truck");
  const [pickupNeeded, setPickupNeeded] = useState(false);

  const WA_NUMBER = "919931227178";

  useEffect(() => {
    setService(defaultService);
  }, [defaultService]);

  if (!isOpen) return null;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const address = pickupNeeded ? form.address.value : "Direct visit to workshop at Mahadev Asthan, Paijawa";

    const text = `*NEW LAB APPOINTMENT - MAA DURGA DIESEL*\n\n` +
      `• *Customer:* ${name}\n` +
      `• *Phone:* ${phone}\n` +
      `• *Service:* ${service}\n` +
      `• *Vehicle / Engine:* ${vehicle}\n` +
      `• *Preferred Date:* ${date}\n` +
      `• *Location/Address:* ${address}\n` +
      `• *Promo:* 25% Online Discount Applied!\n\n` +
      `Please confirm my lab calibration slot.`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-garage-surface border border-garage-orange/40 rounded-sm shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <span className="font-mono text-xs font-bold text-garage-orange tracking-widest uppercase block">
            // MAA DURGA DIESEL LAB BOOKING
          </span>
          <h3 className="font-display font-black text-3xl uppercase tracking-tight text-white mt-1">
            BOOK LAB APPOINTMENT
          </h3>
          <p className="text-gray-400 text-xs font-mono uppercase mt-1">
            25% Online Discount Applied • Computerized 2,200 Bar Testing
          </p>
        </div>

        <form onSubmit={handleBookingSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Your Full Name</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full bg-garage-black border border-white/10 rounded-sm px-4 py-2.5 text-white text-sm focus:outline-none focus:border-garage-orange font-sans"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Phone (WhatsApp)</label>
              <input
                name="phone"
                type="tel"
                required
                placeholder="e.g. 099312 27178"
                className="w-full bg-garage-black border border-white/10 rounded-sm px-4 py-2.5 text-white text-sm focus:outline-none focus:border-garage-orange font-sans"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Preferred Date</label>
              <input
                name="date"
                type="date"
                required
                defaultValue={new Date().toISOString().split('T')[0]}
                className="w-full bg-garage-black border border-white/10 rounded-sm px-4 py-2.5 text-white text-sm focus:outline-none focus:border-garage-orange font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Primary Service</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-garage-black border border-white/10 rounded-sm px-3 py-2.5 text-white text-sm focus:outline-none focus:border-garage-orange font-sans"
              >
                <option value="CRDI INJECTOR CALIBRATION">CRDI Injector Testing</option>
                <option value="DIESEL PUMP (FIP) OVERHAUL">Diesel Pump Overhaul</option>
                <option value="TURBO REPAIR & BALANCING">Turbo Balancing</option>
                <option value="COMMERCIAL TRUCK FLEET">Commercial Fleet Express</option>
                <option value="TRACTOR & HARVESTER SERVICE">Tractor Pump Tuning</option>
                <option value="SMOKE FIX & MILEAGE TUNING">Smoke Fix & Mileage</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Vehicle / Engine</label>
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full bg-garage-black border border-white/10 rounded-sm px-3 py-2.5 text-white text-sm focus:outline-none focus:border-garage-orange font-sans"
              >
                <option value="Commercial Heavy Truck">Heavy Truck (Tata / Leyland)</option>
                <option value="Pickup / LCV">Pickup (Bolero / Tata Ace)</option>
                <option value="Agricultural Tractor">Tractor (Swaraj / Mahindra)</option>
                <option value="Passenger Diesel SUV">Diesel Car / SUV (Scorpio / Innova)</option>
                <option value="DG Set Generator">DG Set Generator</option>
              </select>
            </div>
          </div>

          <div className="pt-1">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={pickupNeeded}
                onChange={(e) => setPickupNeeded(e.target.checked)}
                className="w-4 h-4 accent-garage-orange"
              />
              <span className="font-mono text-xs text-garage-orange font-bold uppercase">
                Need Part Pickup / On-Site Highway Assistance
              </span>
            </label>
          </div>

          {pickupNeeded && (
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Pickup Location / Highway Area</label>
              <input
                name="address"
                type="text"
                required={pickupNeeded}
                placeholder="Enter location on Patna Bypass / City area"
                className="w-full bg-garage-black border border-white/10 rounded-sm px-4 py-2.5 text-white text-sm focus:outline-none focus:border-garage-orange font-sans"
              />
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              className="w-full chamfer-btn bg-garage-orange hover:bg-garage-orange-glow text-black font-display font-extrabold text-base tracking-wider uppercase py-3.5 shadow-glow-orange flex items-center justify-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>CONFIRM ON WHATSAPP (25% OFF)</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
