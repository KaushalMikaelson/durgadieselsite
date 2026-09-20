import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-garage-black border-t border-white/10 py-12 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="text-center md:text-left">
            <span className="font-display font-black text-3xl tracking-tight text-garage-orange uppercase block">
              MAA DURGA DIESEL
            </span>
            <span className="font-mono text-xs tracking-[0.2em] text-gray-400 font-semibold uppercase">
              माँ दुर्गा डीजल • CRDI & DIESEL PUMP LAB · PAIJAWA, PATNA (ESTD. 2002)
            </span>
          </div>

          <div className="flex items-center gap-8 font-display text-sm uppercase tracking-wider">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#estimator" className="hover:text-white transition-colors">Cost Estimator</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
          <span>© {new Date().getFullYear()} MAA DURGA DIESEL. ALL RIGHTS RESERVED.</span>
          <span className="text-gray-400">PATNA PREMIER CRDI & DIESEL FUEL INJECTION LAB (EST. 2002)</span>
        </div>
      </div>
    </footer>
  );
}
