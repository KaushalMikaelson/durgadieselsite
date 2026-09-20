/**
 * MAA DURGA DIESEL - Official Interactive Script
 * Handles:
 * 1. Live Workshop Open/Closed Status (8:30 AM - 7:00 PM IST)
 * 2. Interactive Diagnostic & Cost Estimator with Dynamic WhatsApp Quotation
 * 3. Mobile Navigation Drawer & Backdrop
 * 4. FAQ Accordion
 * 5. Contact Callback Form with WhatsApp Forwarding
 * 6. Smooth Scroll & Back to Top Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveWorkshopStatus();
  initDiagnosticEstimator();
  initMobileNavigation();
  initFaqAccordion();
  initContactForm();
  initScrollEffects();
  initCurrentYear();
});

/* ==========================================================================
   1. Live Workshop Open / Closed Status
   Working Hours: Monday - Sunday, 8:30 AM - 7:00 PM (19:00)
   ========================================================================== */
function initLiveWorkshopStatus() {
  const statusPill = document.getElementById('liveStatusPill');
  const statusText = document.getElementById('liveStatusText');
  const mobileStatusText = document.getElementById('mobileStatusText');
  const contactStatusBadge = document.getElementById('contactStatusBadge');

  function updateStatus() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const openTimeInMinutes = 8 * 60 + 30; // 8:30 AM = 510 mins
    const closeTimeInMinutes = 19 * 60;    // 7:00 PM = 1140 mins

    const isOpen = currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes;

    if (isOpen) {
      if (statusPill) statusPill.classList.remove('status-closed');
      if (statusText) statusText.textContent = '🟢 Workshop Open Now • Closes at 7:00 PM';
      if (mobileStatusText) mobileStatusText.textContent = 'Open Now • Closes 7:00 PM';
      if (contactStatusBadge) {
        contactStatusBadge.textContent = 'Open Today (Until 7 PM)';
        contactStatusBadge.className = 'badge-status-inline text-green';
      }
    } else {
      if (statusPill) statusPill.classList.add('status-closed');
      if (statusText) statusText.textContent = '🔴 Closed Now • Opens 8:30 AM (Helpline Active)';
      if (mobileStatusText) mobileStatusText.textContent = 'Closed Now • Opens 8:30 AM';
      if (contactStatusBadge) {
        contactStatusBadge.textContent = 'Closed for the day (Opens 8:30 AM)';
        contactStatusBadge.className = 'badge-status-inline text-red';
      }
    }
  }

  updateStatus();
  // Refresh status every 60 seconds
  setInterval(updateStatus, 60000);
}

/* ==========================================================================
   2. Interactive Diesel Diagnostic & Cost Estimator
   ========================================================================== */
function initDiagnosticEstimator() {
  const vehicleButtons = document.querySelectorAll('.vehicle-btn');
  const issueButtons = document.querySelectorAll('.issue-btn');

  const resultVehicleBadge = document.getElementById('resultVehicleBadge');
  const resultIssueTitle = document.getElementById('resultIssueTitle');
  const resultPriceRange = document.getElementById('resultPriceRange');
  const resultCause = document.getElementById('resultCause');
  const resultProcedure = document.getElementById('resultProcedure');
  const resultTurnaround = document.getElementById('resultTurnaround');
  const whatsappEstimateBtn = document.getElementById('whatsappEstimateBtn');

  // Diagnostic Knowledge Matrix
  const diagnosticData = {
    truck: {
      name: "Heavy Commercial Truck / Bus",
      issues: {
        "black-smoke": {
          title: "Heavy Commercial: Black Smoke & Pickup Drop",
          price: "₹1,800 - ₹3,800*",
          cause: "Clogged or worn nozzle spray holes, worn delivery valves, or fuel pump delivery volume mismatch across 6 cylinders.",
          procedure: "Bench testing on digital flow rig, ultrasonic cleaning of 6 nozzles, plunger delivery volume recalibration.",
          turnaround: "3 to 4 Hours (Same Day Delivery)"
        },
        "starting-trouble": {
          title: "Heavy Commercial: Hard Starting & Long Cranking",
          price: "₹2,500 - ₹5,500*",
          cause: "Excessive injector back-leakage bleeding off rail pressure, worn low-pressure feed pump or leaking relief valve.",
          procedure: "CRDI back-leak test, high pressure pump pressure hold test, control valve replacement and seal kit refresh.",
          turnaround: "3 to 5 Hours"
        },
        "crdi-injector": {
          title: "Heavy Commercial: CRDI Injector Knock & Check Engine Code",
          price: "₹2,200 - ₹6,000*",
          cause: "Faulty solenoid actuator or jammed piezo needle causing erratic fuel rail pressure under load.",
          procedure: "Computerized flow curve calibration, nozzle tip replacement, high-pressure leak testing up to 2,200 bar.",
          turnaround: "3 to 4 Hours"
        },
        "pump-leak": {
          title: "Heavy Commercial: FIP Pump Leakage & Air-Lock",
          price: "₹3,000 - ₹7,500*",
          cause: "Hardened O-rings, drive shaft oil seal wear, or worn rotor head leaking diesel into engine sump or floor.",
          procedure: "Complete pump strip-down, seal kit replacement, governor re-indexing, delivery volume balancing.",
          turnaround: "4 to 6 Hours"
        },
        "turbo-noise": {
          title: "Heavy Commercial: Turbo Whistle / Low Boost",
          price: "₹3,500 - ₹8,500*",
          cause: "Turbine shaft bearing play, worn seals causing oil seepage into intercooler, or jammed wastegate/VGT actuator.",
          procedure: "High-speed dynamic rotor balancing (up to 150,000 RPM), core cartridge renewal, actuator pressure test.",
          turnaround: "Same Day (4 Hours)"
        },
        "general-service": {
          title: "Heavy Commercial: Preventive Fuel System Overhaul",
          price: "₹2,000 - ₹4,500*",
          cause: "Accumulation of heavy diesel sulfur varnish and carbon deposits after 80,000+ km of highway haulage.",
          procedure: "Ultrasonic cleaning of complete injector set, flow matching, new copper washers, rail sensor verification.",
          turnaround: "2 to 3 Hours"
        }
      }
    },
    pickup: {
      name: "Commercial Pickup & LCV (Bolero / Tata Ace)",
      issues: {
        "black-smoke": {
          title: "Pickup & LCV: Black Smoke & Power Loss Under Load",
          price: "₹1,200 - ₹2,800*",
          cause: "Nozzle carbon fouling, poor spray atomization, or worn CRDI injector needle valve.",
          procedure: "Nozzle tip replacement, digital spray pattern test, injector flow calibration.",
          turnaround: "2 to 3 Hours"
        },
        "starting-trouble": {
          title: "Pickup & LCV: Morning Cold Starting Problem",
          price: "₹1,500 - ₹3,500*",
          cause: "Injector back-leakage draining rail priming pressure; battery drains on multiple cranking attempts.",
          procedure: "Back-leak measurement, nozzle seating, high pressure pump pressure hold test.",
          turnaround: "2 to 4 Hours"
        },
        "crdi-injector": {
          title: "Pickup & LCV: Bolero / Ace CRDI Injector Knocking",
          price: "₹1,800 - ₹4,200*",
          cause: "Common rail pressure sensor error, solenoid valve delay, or contaminated diesel damage.",
          procedure: "Precision bench recalibration, nozzle ultrasonic bath, generation of ECU calibration codes.",
          turnaround: "2 to 3 Hours"
        },
        "pump-leak": {
          title: "Pickup & LCV: Diesel Pump Leakage & Hardness",
          price: "₹2,000 - ₹4,800*",
          cause: "Rotary/CRDI pump shaft seal deterioration, causing diesel smell, dripping, and air entering the fuel line.",
          procedure: "Complete seal overhaul, drive shaft inspection, pressure testing on test rig.",
          turnaround: "3 to 5 Hours"
        },
        "turbo-noise": {
          title: "Pickup & LCV: Turbocharger Whistling / Oil Loss",
          price: "₹2,500 - ₹6,000*",
          cause: "Excessive shaft play or carbon deposits on turbine blades causing whistling and low pickup on inclines.",
          procedure: "CHRA core overhaul, dynamic rotor balancing, oil line cleaning.",
          turnaround: "3 to 4 Hours"
        },
        "general-service": {
          title: "Pickup & LCV: Mileage & Performance Service",
          price: "₹1,200 - ₹2,500*",
          cause: "Carbon buildup reducing fuel economy from usual 14 km/l down to 10-11 km/l.",
          procedure: "Complete injector cleaning, flow volume balance, copper seal renewal.",
          turnaround: "2 Hours"
        }
      }
    },
    tractor: {
      name: "Agricultural Tractor & Farm Machinery",
      issues: {
        "black-smoke": {
          title: "Tractor: Black Smoke & Engine Bogging Down in Field",
          price: "₹1,000 - ₹2,200*",
          cause: "Worn tractor nozzle tips, unburned diesel due to water in fuel, or pump timing drift.",
          procedure: "MICO/Bosch nozzle testing, popping pressure adjustment, spray angle verification.",
          turnaround: "1 to 2 Hours (Quick Service for Farmers)"
        },
        "starting-trouble": {
          title: "Tractor: Hard Starting / Repeated Cranking",
          price: "₹1,400 - ₹3,000*",
          cause: "Loss of delivery valve priming pressure, stuck plunger in inline pump, or air lock in suction line.",
          procedure: "Inline pump delivery valve seating, plunger stroke test, hand primer check.",
          turnaround: "2 to 3 Hours"
        },
        "crdi-injector": {
          title: "Tractor: CRDI Engine Vibration / Misfiring",
          price: "₹1,800 - ₹3,800*",
          cause: "CRDI injector nozzle blockage due to storage diesel contamination and dirt particles.",
          procedure: "Ultrasonic cleaning, digital flow bench matching, return valve recalibration.",
          turnaround: "2 to 3 Hours"
        },
        "pump-leak": {
          title: "Tractor: Diesel Fuel Pump Leaking / Air Lock",
          price: "₹1,500 - ₹3,800*",
          cause: "Governor housing gasket leakage, worn throttle shaft bushes dripping diesel.",
          procedure: "Pump resealing with genuine Bosch/MICO seal kit, governor calibration.",
          turnaround: "2 to 4 Hours"
        },
        "turbo-noise": {
          title: "Tractor: Turbo Whistle / Boost Drop on Harvester",
          price: "₹2,800 - ₹6,500*",
          cause: "Dust ingress through air filter damaging compressor wheel blades.",
          procedure: "Compressor wheel replacement, journal bearing renewal, dynamic balancing.",
          turnaround: "3 to 4 Hours"
        },
        "general-service": {
          title: "Tractor: Pre-Season Harvest & Sowing Tune-up",
          price: "₹900 - ₹1,800*",
          cause: "Preventive maintenance before peak plowing or harvesting season to prevent field breakdown.",
          procedure: "Nozzle pressure test, flow equalization, filter check, rust removal treatment.",
          turnaround: "1 to 2 Hours"
        }
      }
    },
    passenger: {
      name: "Passenger SUV / Car (Scorpio, Innova, Swift, Creta)",
      issues: {
        "black-smoke": {
          title: "Car / SUV: Black Smoke on Acceleration & Low Mileage",
          price: "₹1,500 - ₹3,200*",
          cause: "Carbon-choked CRDI nozzles causing unburned diesel, EGR valve imbalance, or low rail pressure.",
          procedure: "Ultrasonic injector bath, computerized flow calibration across 4 injection phases.",
          turnaround: "2 to 3 Hours"
        },
        "starting-trouble": {
          title: "Car / SUV: Long Cranking / Cold Start Delay",
          price: "₹2,000 - ₹4,500*",
          cause: "High injector return back-leakage preventing common rail from reaching 250 Bar ignition pressure.",
          procedure: "Common rail back-leak testing, valve seat replacement, pressure test.",
          turnaround: "2 to 4 Hours"
        },
        "crdi-injector": {
          title: "Car / SUV: CRDI Engine Knocking & Limp Mode",
          price: "₹2,500 - ₹5,500*",
          cause: "Solenoid coil degradation or stuck piezo actuator triggering ECU check engine light and limp mode.",
          procedure: "Bench testing on computerized Hartridge/Bosch rig, nozzle replacement, IMA QR coding.",
          turnaround: "3 to 4 Hours"
        },
        "pump-leak": {
          title: "Car / SUV: High Pressure Common Rail Pump Leak",
          price: "₹2,800 - ₹6,000*",
          cause: "CP1 / CP3 / CP4 pump head O-ring failure, fuel metering unit (DRV/IMV) seal failure.",
          procedure: "Disassembly, replacement of OEM high-pressure seal kit, bench pressure test up to 2,000 Bar.",
          turnaround: "3 to 5 Hours"
        },
        "turbo-noise": {
          title: "Car / SUV: Turbo Whistling & Black Smoke Boost Drop",
          price: "₹3,000 - ₹7,500*",
          cause: "Variable Geometry (VGT) carbon clogging or journal bearing clearance widening.",
          procedure: "Turbo cartridge replacement, VGT actuator calibration, dynamic balancing.",
          turnaround: "3 to 4 Hours"
        },
        "general-service": {
          title: "Car / SUV: Periodic CRDI Fuel System Cleaning",
          price: "₹1,500 - ₹2,800*",
          cause: "Routine 50,000 km carbon buildup causing sluggish acceleration and diesel clatter.",
          procedure: "Ultrasonic nozzle cleaning, delivery equalization, smooth idle calibration.",
          turnaround: "2 Hours"
        }
      }
    },
    generator: {
      name: "Diesel Generator (DG Set)",
      issues: {
        "black-smoke": {
          title: "DG Set: Heavy Smoke & Voltage Fluctuation on Load",
          price: "₹2,000 - ₹4,500*",
          cause: "Uneven cylinder fuel delivery causing hunting governor and incomplete combustion.",
          procedure: "Governor calibration, nozzle spray balancing, delivery valve renewal.",
          turnaround: "3 to 4 Hours"
        },
        "starting-trouble": {
          title: "DG Set: DG Not Starting on Power Cut / Long Cranking",
          price: "₹2,200 - ₹5,000*",
          cause: "Air-lock in fuel line, stuck fuel shut-off solenoid, or low fuel injection pressure.",
          procedure: "Solenoid check, plunger delivery test, primer seal replacement.",
          turnaround: "2 to 3 Hours"
        },
        "crdi-injector": {
          title: "DG Set: Electronic Engine Misfire & RPM Hunt",
          price: "₹2,500 - ₹5,500*",
          cause: "Contaminated diesel damaging electronic fuel metering unit or injector solenoids.",
          procedure: "Digital bench calibration, ultrasonic wash, electronic actuator testing.",
          turnaround: "3 to 4 Hours"
        },
        "pump-leak": {
          title: "DG Set: Fuel Pump Gasket / Seal Seepage",
          price: "₹2,500 - ₹5,500*",
          cause: "Deteriorated rubber seals from standing diesel during long idle periods.",
          procedure: "Full seal overhaul, pressure governor calibration, zero-leak certification.",
          turnaround: "3 to 5 Hours"
        },
        "turbo-noise": {
          title: "DG Set: Turbo Whistle / Exhaust Manifold Oil Wetting",
          price: "₹3,500 - ₹8,000*",
          cause: "Exhaust turbine oil seal blow-by or carbon accumulation on rotor.",
          procedure: "Core overhaul, dynamic rotor balancing, wastegate setting.",
          turnaround: "4 Hours"
        },
        "general-service": {
          title: "DG Set: Annual Generator Fuel Service",
          price: "₹1,800 - ₹3,500*",
          cause: "Preventive maintenance for standby generators at hospitals, banks, and apartments.",
          procedure: "Nozzle overhaul, pump pressure test, fuel line flushing.",
          turnaround: "2 to 3 Hours"
        }
      }
    }
  };

  let currentVehicle = 'truck';
  let currentIssue = 'black-smoke';

  function updateEstimatorUI() {
    const vehicleData = diagnosticData[currentVehicle] || diagnosticData.truck;
    const issueData = vehicleData.issues[currentIssue] || vehicleData.issues['black-smoke'];

    if (resultVehicleBadge) resultVehicleBadge.textContent = vehicleData.name;
    if (resultIssueTitle) resultIssueTitle.textContent = issueData.title;
    if (resultPriceRange) resultPriceRange.textContent = issueData.price;
    if (resultCause) resultCause.textContent = issueData.cause;
    if (resultProcedure) resultProcedure.textContent = issueData.procedure;
    if (resultTurnaround) resultTurnaround.textContent = issueData.turnaround;

    // Generate WhatsApp Pre-filled link
    const waText = `Hello Maa Durga Diesel, I am checking repair options on your website:%0A%0A` +
      `🚗 *Vehicle Category:* ${vehicleData.name}%0A` +
      `⚠️ *Problem/Symptom:* ${issueData.title}%0A` +
      `💰 *Estimated Price Range:* ${issueData.price}%0A` +
      `⏱️ *Expected Turnaround:* ${issueData.turnaround}%0A%0A` +
      `Please provide an exact quote and tell me when I can bring my vehicle/pump to your Paijawa workshop.`;

    if (whatsappEstimateBtn) {
      whatsappEstimateBtn.href = `https://wa.me/919931227178?text=${waText}`;
    }
  }

  // Event Listeners for Vehicle Selection
  vehicleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      vehicleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentVehicle = btn.getAttribute('data-vehicle');
      updateEstimatorUI();
    });
  });

  // Event Listeners for Issue Selection
  issueButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      issueButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentIssue = btn.getAttribute('data-issue');
      updateEstimatorUI();
    });
  });

  // Initialize with defaults
  updateEstimatorUI();
}

/* ==========================================================================
   3. Mobile Drawer Navigation
   ========================================================================== */
function initMobileNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   4. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items
      faqItems.forEach(i => i.classList.remove('active'));

      // If it wasn't active, open it
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   5. Contact / Callback Form with WhatsApp Forwarding
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const formSuccessBox = document.getElementById('formSuccessBox');
  const successMsgText = document.getElementById('successMsgText');
  const whatsappRedirectLink = document.getElementById('whatsappRedirectLink');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const clientName = document.getElementById('clientName').value.trim();
    const clientPhone = document.getElementById('clientPhone').value.trim();
    const vehicleModel = document.getElementById('vehicleModel').value.trim() || 'Not Specified';
    const serviceType = document.getElementById('serviceType').value;
    const clientMessage = document.getElementById('clientMessage').value.trim() || 'No additional note';

    // Basic Validation
    if (!clientName || !clientPhone) {
      alert('Please fill in your Name and Mobile Phone Number.');
      return;
    }

    if (clientPhone.replace(/\D/g, '').length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Format WhatsApp Message
    const encodedMsg = `Hello Maa Durga Diesel, I am submitting a service request from your website:%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(clientName)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(clientPhone)}%0A` +
      `🚛 *Vehicle Model:* ${encodeURIComponent(vehicleModel)}%0A` +
      `⚙️ *Service Needed:* ${encodeURIComponent(serviceType)}%0A` +
      `📝 *Details:* ${encodeURIComponent(clientMessage)}%0A%0A` +
      `Please call me back or confirm when I can visit the Paijawa workshop.`;

    const waUrl = `https://wa.me/919931227178?text=${encodedMsg}`;

    // Show Success Box
    contactForm.style.display = 'none';
    if (formSuccessBox) {
      formSuccessBox.classList.add('show');
      if (successMsgText) {
        successMsgText.innerHTML = `Thank you <strong>${clientName}</strong>! Your inquiry for <strong>${vehicleModel} (${serviceType})</strong> has been logged. Our technician will call you on <strong>${clientPhone}</strong> shortly.`;
      }
      if (whatsappRedirectLink) {
        whatsappRedirectLink.href = waUrl;
      }
    }

    // Automatically open WhatsApp in new tab for immediate contact
    window.open(waUrl, '_blank');
  });
}

/* ==========================================================================
   6. Scroll Effects & Back to Top Controller
   ========================================================================== */
function initScrollEffects() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Show / Hide Back to Top button
    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active Nav Indicator on Scroll
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* ==========================================================================
   7. Auto Current Year
   ========================================================================== */
function initCurrentYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
