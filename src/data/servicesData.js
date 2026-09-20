// Simple, clear services data tailored for easy understanding by vehicle owners

export const SERVICES_DATA = [
  {
    id: 'crdi-injector',
    title: 'CRDI Injector Testing & Calibration',
    titleHi: 'सीआरडीआई इंजेक्टर रिपेयर एवं टेस्टिंग',
    badge: 'Most Popular',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    icon: 'Sparkles',
    simpleSummary: 'Fixes black smoke, cold starting trouble, and engine misfire. Every injector is digitally tested on computer test bench.',
    points: [
      'Tested at real highway pressures up to 2,200 Bar',
      'Ultrasonic cleaning removes stubborn carbon from nozzles',
      'Computerized flow matching for all 4 to 6 cylinders',
      'ECU QR Code (IMA) generation for smooth engine idling'
    ],
    suitedFor: 'Scorpio, Innova, Bolero, Tata Signa, Prima, Swift, Creta'
  },
  {
    id: 'fip-pump',
    title: 'Diesel Fuel Injection Pump (FIP) Overhaul',
    titleHi: 'डीजल पम्प ओवरहाल एवं लीकेज रिपेयर',
    badge: 'Heavy Duty',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
    icon: 'Gauge',
    simpleSummary: 'Complete repair of leaking pumps, hard starting, air-locks, and power loss on loaded trucks and tractors.',
    points: [
      'Rotary VE, Inline, and High-Pressure Common Rail (CP1-CP4)',
      '100% genuine Bosch, Delphi, and MICO seal kits used',
      'Accurate fuel delivery governor calibration',
      'Eliminates morning starting hardness and fuel dripping'
    ],
    suitedFor: 'Trucks, Tippers, Bolero Pickups, Tractors, DG Sets'
  },
  {
    id: 'turbocharger',
    title: 'Turbocharger Repair & High-Speed Balancing',
    titleHi: 'टर्बो रिपेयर एवं हाई-स्पीड बैलेंसिंग',
    badge: 'Power Restore',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    icon: 'Wind',
    simpleSummary: 'Stops turbo whistling noise, prevents engine oil from entering the intercooler, and restores full acceleration.',
    points: [
      'Dynamic rotor balancing up to 150,000 RPM on digital rig',
      'New CHRA core cartridge and bearing replacement',
      'Electronic & vacuum VNT actuator calibration',
      'Zero oil-leak warranty after installation'
    ],
    suitedFor: 'Commercial Trucks, Scorpio, Harvester, Innova'
  },
  {
    id: 'commercial-fleet',
    title: 'Commercial Truck & Fleet Priority Service',
    titleHi: 'ट्रांसपोर्टर एवं कमर्शियल ट्रक प्रायोरिटी सर्विस',
    badge: 'Fast Turnaround',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    icon: 'Truck',
    simpleSummary: 'Priority bays for fleet operators and transport trucks on Patna Bypass to ensure same-day vehicle delivery.',
    points: [
      'Fast turnaround: Most injectors completed in 2 to 4 hours',
      'Tata Cummins, Ashok Leyland H/N Series, BharatBenz, Eicher',
      'Discounted packages for multi-vehicle fleet operators',
      'Direct highway breakdown support on Patna Bypass / NH'
    ],
    suitedFor: 'Fleet Owners, Transporters, Tipper & Tanker Operators'
  },
  {
    id: 'tractor-service',
    title: 'Agricultural Tractor & Harvester Service',
    titleHi: 'किसान भाइयों के ट्रैक्टर एवं हार्वेस्टर पम्प सर्विस',
    badge: 'Farmer Friendly',
    badgeColor: 'bg-green-100 text-green-900 border-green-300',
    icon: 'Tractor',
    simpleSummary: 'Affordable, reliable pump tuning for farmers so tractors pull heavy trolleys effortlessly without engine stalling.',
    points: [
      'Swaraj, Mahindra DI/Bhoomiputra, John Deere, Sonalika',
      'Removes rust & water damage caused by storage diesel',
      'Affordable nozzle pressure testing & spray adjustment',
      'Noticeable improvement in diesel mileage per bigha'
    ],
    suitedFor: 'Tractor Owners, Harvesters, Agricultural Pumps'
  },
  {
    id: 'smoke-mileage',
    title: 'Smoke Elimination & Mileage Tuning',
    titleHi: 'काला धुआँ बंद एवं 15-20% माइलेज सुधार',
    badge: 'Save Diesel',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
    icon: 'CheckCircle2',
    simpleSummary: 'Guaranteed black smoke reduction to pass PUC emissions and boost fuel economy by 2 to 3 km per liter.',
    points: [
      'Complete elimination of dense black exhaust smoke',
      'OBD-II computer scanner diagnostic health report',
      'Balanced cylinder delivery eliminates engine vibration',
      'Save thousands of rupees in monthly diesel bills'
    ],
    suitedFor: 'All Diesel Cars, Pickups, Trucks & Tractors'
  }
];
