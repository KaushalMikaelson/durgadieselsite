import React from 'react';
import { MapPin, PhoneCall, Clock, MessageCircle, Navigation, Send } from 'lucide-react';

export default function ContactHub() {
  const PHONE_NUMBER = "09931227178";
  const PHONE_DISPLAY = "099312 27178";
  const WA_NUMBER = "919931227178";
  const WORKSHOP_ADDRESS = "Mahadev Asthan, Paijawa, Patna Bypass, Bihar 800009";
  const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Maa+Durga+Diesel+Mahadev+Asthan+Paijawa+Patna+Bihar+800009";

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const phone = e.target.elements.phone.value;
    const vehicle = e.target.elements.vehicle.value;
    const service = e.target.elements.service.value;
    const msg = `Hello Maa Durga Diesel, My name is ${name}. Phone: ${phone}. Vehicle: ${vehicle}. Issue: ${service}. Please contact me!`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-garage-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="font-mono text-xs font-bold tracking-[0.25em] text-garage-orange uppercase">
              // LOCATION & LAB ACCESS
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white">
              VISIT MAA DURGA DIESEL
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Conveniently situated at Mahadev Asthan, Paijawa on Patna Bypass. Spacious facility equipped with high-pressure digital calibration benches and heavy vehicle parking.
            </p>

            <div className="space-y-4 pt-4 font-mono text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-black/60 border border-white/10 flex items-center justify-center text-garage-orange shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase block">Lab Location</span>
                  <span className="text-white font-medium">{WORKSHOP_ADDRESS}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-black/60 border border-white/10 flex items-center justify-center text-garage-orange shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase block">Direct Phone</span>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-white hover:text-garage-orange transition-colors font-bold text-base">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-black/60 border border-white/10 flex items-center justify-center text-garage-orange shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase block">Working Hours</span>
                  <span className="text-white">Monday – Sunday: 8:30 AM – 7:00 PM (Daily Open)</span>
                  <span className="block text-gray-400 text-xs">Emergency Highway Support Available</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hello%20Maa%20Durga%20Diesel%2C%20I%20am%20chatting%20from%20your%20website%20and%20need%20diesel%20pump%20or%20CRDI%20injector%20calibration.`}
                target="_blank"
                rel="noopener noreferrer"
                className="chamfer-btn bg-emerald-600 hover:bg-emerald-500 text-white font-display font-extrabold text-sm uppercase px-6 py-3 shadow-lg flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </a>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="chamfer-btn bg-white/10 hover:bg-white/20 text-white font-display font-extrabold text-sm uppercase px-6 py-3 flex items-center gap-2"
              >
                <Navigation className="w-4 h-4 text-garage-orange" />
                <span>OPEN ON GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* Right Quick Inquiry Form */}
          <div className="lg:col-span-6 bg-garage-black border border-white/10 p-8 rounded-sm shadow-2xl">
            <h3 className="font-display font-black text-2xl uppercase tracking-wide text-white mb-2">
              REQUEST LAB CALLBACK
            </h3>
            <p className="text-gray-400 text-xs font-mono uppercase mb-6">
              Speak directly with our senior calibration master within 15 minutes.
            </p>

            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Your Full Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full bg-garage-surface border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-garage-orange font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Phone Number (WhatsApp)</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="e.g. 099312 27178"
                  className="w-full bg-garage-surface border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-garage-orange font-sans"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Vehicle / Engine</label>
                  <input
                    name="vehicle"
                    type="text"
                    required
                    placeholder="e.g. Tata Signa / Bolero"
                    className="w-full bg-garage-surface border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-garage-orange font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Service Needed</label>
                  <select
                    name="service"
                    className="w-full bg-garage-surface border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-garage-orange font-sans"
                  >
                    <option value="CRDI Injector Testing">CRDI Injector Testing</option>
                    <option value="Diesel Pump Overhaul">Diesel Pump Overhaul</option>
                    <option value="Black Smoke & Pickup Fix">Black Smoke & Pickup Fix</option>
                    <option value="Turbocharger Balancing">Turbocharger Balancing</option>
                    <option value="Tractor Pump Tuning">Tractor Pump Tuning</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full chamfer-btn bg-garage-orange hover:bg-garage-orange-glow text-black font-display font-extrabold text-base tracking-wider uppercase py-3.5 shadow-glow-orange flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>SUBMIT INQUIRY (25% LAB DISCOUNT)</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
