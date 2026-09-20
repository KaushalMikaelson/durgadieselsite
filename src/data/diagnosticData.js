// Plain-language diagnostic data with simple bilingual cues for easy use by any vehicle owner

export const VEHICLE_CATEGORIES = [
  {
    id: 'truck',
    name: 'Heavy Truck & Bus',
    nameHi: 'ट्रक एवं बस (Tata / Leyland)',
    icon: 'Truck',
    examples: 'Tata Signa, Prima, 407, Leyland, BharatBenz, Eicher'
  },
  {
    id: 'pickup',
    name: 'Pickup & Commercial LCV',
    nameHi: 'पिकअप / लोडर (Bolero / Ace)',
    icon: 'Caravan',
    examples: 'Mahindra Bolero Pickup, Maxi Truck, Tata Ace, Intra, Dost'
  },
  {
    id: 'tractor',
    name: 'Tractor & Farm Equipment',
    nameHi: 'ट्रैक्टर एवं कृषि मशीनरी',
    icon: 'Tractor',
    examples: 'Mahindra, Swaraj, John Deere, Sonalika, Farmtrac, JCB'
  },
  {
    id: 'passenger',
    name: 'Personal Car & SUV',
    nameHi: 'निजी कार / जीप (Scorpio / Innova)',
    icon: 'Car',
    examples: 'Scorpio, Innova, Fortuner, Swift, Creta, Bolero Neo'
  },
  {
    id: 'generator',
    name: 'Diesel Generator (DG)',
    nameHi: 'डीजल जनरेटर (DG Set)',
    icon: 'Zap',
    examples: 'Cummins, Kirloskar, Ashok Leyland DG Sets'
  }
];

export const SYMPTOM_OPTIONS = [
  {
    id: 'black-smoke',
    title: 'Heavy Black Smoke & Low Pickup',
    titleHi: 'गाड़ी से काला धुआँ निकल रहा है और पिकअप नहीं बन रहा',
    icon: 'CloudFog',
    shortDesc: 'Engine feels sluggish, struggles on load or slopes.'
  },
  {
    id: 'starting-trouble',
    title: 'Starting Problem / Long Cranking',
    titleHi: 'सुबह स्टार्ट होने में बहुत परेशानी या बार-बार सेल्फ़ लेना',
    icon: 'KeyRound',
    shortDesc: 'Battery drains, engine turns over multiple times before starting.'
  },
  {
    id: 'crdi-injector',
    title: 'Engine Knocking / Check Engine Light',
    titleHi: 'इंजन से खट-खट की आवाज या मीटर में बत्ती जलना',
    icon: 'AlertTriangle',
    shortDesc: 'CRDI injector clatter, engine vibrates or goes into limp mode.'
  },
  {
    id: 'pump-leak',
    title: 'Diesel Fuel Leakage / Air Lock',
    titleHi: 'पम्प से डीजल टपकना या बार-बार हवा (Air-Lock) पकड़ना',
    icon: 'Droplet',
    shortDesc: 'Diesel smell, fuel pooling under pump, sudden engine stalling.'
  },
  {
    id: 'turbo-noise',
    title: 'Turbo Whistling / Power Drop',
    titleHi: 'टर्बो से सीटी की तेज आवाज या अचानक दम तोड़ना',
    icon: 'Wind',
    shortDesc: 'Whining whistle from turbocharger or oil wetness around intercooler.'
  },
  {
    id: 'general-service',
    title: 'Routine Cleaning & Mileage Tune-up',
    titleHi: 'माइलेज बढ़ाने के लिए सर्विस एवं कंप्यूटर चेकअप',
    icon: 'Wrench',
    shortDesc: 'Periodic injector nozzle decarbonizing to restore original fuel economy.'
  }
];

export const ESTIMATE_MATRIX = {
  truck: {
    'black-smoke': {
      price: '₹1,800 - ₹3,500*',
      time: '3 to 4 Hours (Same Day)',
      cause: 'Nozzle spray holes are enlarged or jammed with carbon, causing incomplete diesel burning.',
      procedure: 'Computer test bench calibration, ultrasonic cleaning of all 6 nozzles, plunger delivery volume matching.'
    },
    'starting-trouble': {
      price: '₹2,500 - ₹5,000*',
      time: '3 to 5 Hours',
      cause: 'Internal injector back-leakage bleeding off rail pressure before ignition.',
      procedure: 'Injector return flow leak test, rail pressure hold check, control valve seal refresh.'
    },
    'crdi-injector': {
      price: '₹2,200 - ₹5,500*',
      time: '3 to 4 Hours',
      cause: 'Damaged solenoid or stuck piezo valve in CRDI injector.',
      procedure: 'Digital flow curve matching up to 2,200 Bar pressure, nozzle tip replacement, ECU QR recoding.'
    },
    'pump-leak': {
      price: '₹3,000 - ₹7,000*',
      time: '4 to 6 Hours',
      cause: 'Worn pump seals, hardened O-rings, or drive shaft seal leaking diesel.',
      procedure: 'Complete pump strip-down, seal kit replacement, governor pressure testing on bench.'
    },
    'turbo-noise': {
      price: '₹3,500 - ₹8,000*',
      time: '4 Hours (Same Day)',
      cause: 'Bearing play or unbalanced turbine shaft scraping against housing.',
      procedure: 'High-speed dynamic rotor balancing (up to 150,000 RPM), core cartridge replacement.'
    },
    'general-service': {
      price: '₹1,800 - ₹3,500*',
      time: '2 to 3 Hours',
      cause: 'Highway soot and carbon accumulation in fuel injectors.',
      procedure: 'Ultrasonic nozzle decarbonization, copper washer replacement, smooth idle tuning.'
    }
  },
  pickup: {
    'black-smoke': {
      price: '₹1,200 - ₹2,600*',
      time: '2 to 3 Hours (Same Day)',
      cause: 'Choked injector nozzles causing diesel to dribble rather than mist.',
      procedure: 'Nozzle tip servicing, ultrasonic cleaning, delivery calibration.'
    },
    'starting-trouble': {
      price: '₹1,500 - ₹3,200*',
      time: '2 to 4 Hours',
      cause: 'Injector back-leakage draining starting pressure; starter motor strains.',
      procedure: 'Back-leak test, high pressure pump pressure hold test, seal kit replacement.'
    },
    'crdi-injector': {
      price: '₹1,800 - ₹3,800*',
      time: '2 to 3 Hours',
      cause: 'Solenoid valve timing drift or contaminated diesel particles.',
      procedure: 'Precision bench recalibration, nozzle ultrasonic bath, smooth idle tuning.'
    },
    'pump-leak': {
      price: '₹2,000 - ₹4,500*',
      time: '3 to 4 Hours',
      cause: 'Pump shaft seal wear creating diesel drips and air bubbles in fuel line.',
      procedure: 'Seal overhaul, pressure testing on test rig, zero-leak guarantee.'
    },
    'turbo-noise': {
      price: '₹2,500 - ₹5,500*',
      time: '3 to 4 Hours',
      cause: 'Carbon deposits on turbine blades or bearing play causing whistling.',
      procedure: 'CHRA core overhaul, dynamic rotor balancing, boost pressure check.'
    },
    'general-service': {
      price: '₹1,200 - ₹2,200*',
      time: '2 Hours',
      cause: 'Carbon buildup reducing pickup and fuel economy down to 10 km/l.',
      procedure: 'Complete injector cleaning, flow volume balance, copper seal renewal.'
    }
  },
  tractor: {
    'black-smoke': {
      price: '₹1,000 - ₹2,000*',
      time: '1 to 2 Hours (Quick Service)',
      cause: 'Worn tractor nozzle tips, unburned diesel due to moisture in fuel.',
      procedure: 'Bosch/MICO nozzle testing, spray angle setting, popping pressure adjustment.'
    },
    'starting-trouble': {
      price: '₹1,400 - ₹2,800*',
      time: '2 to 3 Hours',
      cause: 'Stuck delivery valve or air lock in inline pump suction line.',
      procedure: 'Inline pump delivery valve seating, plunger stroke check, hand primer test.'
    },
    'crdi-injector': {
      price: '₹1,800 - ₹3,500*',
      time: '2 to 3 Hours',
      cause: 'Dirt or rust particles in field storage diesel blocking micro-orifices.',
      procedure: 'Ultrasonic cleaning, digital flow bench matching, return valve recalibration.'
    },
    'pump-leak': {
      price: '₹1,500 - ₹3,500*',
      time: '2 to 4 Hours',
      cause: 'Worn governor gasket or throttle shaft bush dripping diesel.',
      procedure: 'Pump resealing with genuine OEM kit, governor calibration.'
    },
    'turbo-noise': {
      price: '₹2,800 - ₹6,000*',
      time: '3 to 4 Hours',
      cause: 'Fine field dust ingress through air filter damaging compressor wheel.',
      procedure: 'Compressor wheel replacement, journal bearing renewal, dynamic balancing.'
    },
    'general-service': {
      price: '₹900 - ₹1,600*',
      time: '1 to 2 Hours',
      cause: 'Preventive maintenance before peak plowing or harvesting season.',
      procedure: 'Nozzle pressure test, flow equalization, filter check, rust treatment.'
    }
  },
  passenger: {
    'black-smoke': {
      price: '₹1,500 - ₹3,000*',
      time: '2 to 3 Hours (Same Day)',
      cause: 'Carbon-fouled CRDI nozzles causing unburned diesel and emission fail.',
      procedure: 'Ultrasonic bath, computerized flow calibration across 4 injection stages.'
    },
    'starting-trouble': {
      price: '₹2,000 - ₹4,200*',
      time: '2 to 4 Hours',
      cause: 'High injector back-leakage preventing rail from reaching 250 Bar firing pressure.',
      procedure: 'Common rail back-leak test, valve seat replacement, pressure test.'
    },
    'crdi-injector': {
      price: '₹2,500 - ₹5,000*',
      time: '3 to 4 Hours',
      cause: 'Solenoid or piezo sensor error triggering check engine light and limp mode.',
      procedure: 'Bench testing on computerized rig, nozzle replacement, IMA QR coding.'
    },
    'pump-leak': {
      price: '₹2,800 - ₹5,500*',
      time: '3 to 5 Hours',
      cause: 'CP1/CP3/CP4 pump head O-ring failure, fuel metering unit seal leak.',
      procedure: 'Disassembly, OEM high-pressure seal kit replacement, bench pressure test.'
    },
    'turbo-noise': {
      price: '₹3,000 - ₹7,000*',
      time: '3 to 4 Hours',
      cause: 'Variable Geometry (VGT) carbon clogging or journal bearing clearance widening.',
      procedure: 'Turbo cartridge replacement, VGT actuator calibration, dynamic balancing.'
    },
    'general-service': {
      price: '₹1,500 - ₹2,500*',
      time: '2 Hours',
      cause: 'Routine 50,000 km carbon buildup causing sluggish acceleration.',
      procedure: 'Ultrasonic nozzle cleaning, delivery equalization, smooth idle tuning.'
    }
  },
  generator: {
    'black-smoke': {
      price: '₹1,800 - ₹4,000*',
      time: '3 to 4 Hours',
      cause: 'Uneven cylinder fuel delivery causing hunting governor and thick smoke under load.',
      procedure: 'Governor calibration, nozzle spray balancing, delivery valve renewal.'
    },
    'starting-trouble': {
      price: '₹2,000 - ₹4,500*',
      time: '2 to 3 Hours',
      cause: 'Air-lock in fuel line, stuck fuel shut-off solenoid, or low injection pressure.',
      procedure: 'Solenoid check, plunger delivery test, primer seal replacement.'
    },
    'crdi-injector': {
      price: '₹2,500 - ₹5,000*',
      time: '3 to 4 Hours',
      cause: 'Contaminated diesel damaging electronic fuel metering unit.',
      procedure: 'Digital bench calibration, ultrasonic wash, electronic actuator testing.'
    },
    'pump-leak': {
      price: '₹2,200 - ₹5,000*',
      time: '3 to 5 Hours',
      cause: 'Deteriorated rubber seals from standing diesel during long idle periods.',
      procedure: 'Full seal overhaul, pressure governor calibration, zero-leak certification.'
    },
    'turbo-noise': {
      price: '₹3,500 - ₹7,500*',
      time: '4 Hours',
      cause: 'Exhaust turbine oil seal blow-by or carbon buildup on rotor.',
      procedure: 'Core overhaul, dynamic rotor balancing, wastegate setting.'
    },
    'general-service': {
      price: '₹1,800 - ₹3,200*',
      time: '2 to 3 Hours',
      cause: 'Preventive service for standby generators in hospitals, apartments & banks.',
      procedure: 'Nozzle overhaul, pump pressure test, fuel line flushing.'
    }
  }
};
