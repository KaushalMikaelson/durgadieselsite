import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import OfferBanner from './components/OfferBanner';
import ServicesGrid from './components/ServicesGrid';
import DiagnosticSlider from './components/PaintCorrectionSlider';
import Estimator from './components/Estimator';
import Reviews from './components/Reviews';
import FaqAccordion from './components/FaqAccordion';
import ContactHub from './components/ContactHub';
import Footer from './components/Footer';
import FloatingCta from './components/FloatingCta';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState("CRDI Injector Testing");

  const handleOpenBooking = (serviceName = "CRDI Injector Testing") => {
    setSelectedServiceForModal(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-garage-black text-gray-100 flex flex-col font-sans selection:bg-garage-orange selection:text-black">
      {/* Top Fixed Header */}
      <Navbar onBookClick={() => handleOpenBooking("General Lab Inquiry")} />

      {/* Main Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section (Screenshot 1 Layout with Maa Durga Diesel content) */}
        <Hero onBookClick={() => handleOpenBooking("Hero Lab Booking")} />

        {/* 2. About Us Section (Screenshot 2 Layout) */}
        <AboutSection />

        {/* 3. 25% Off Promotional Banner (Screenshot 3 Layout) */}
        <OfferBanner onBookClick={() => handleOpenBooking("25% Off Lab Offer")} />

        {/* 4. Precision Crafted Services (Screenshot 3 Layout) */}
        <ServicesGrid onBookService={(srv) => handleOpenBooking(srv)} />

        {/* 5. Before & After Calibration Slider */}
        <DiagnosticSlider />

        {/* 6. Vehicle Diagnostic & Cost Estimator */}
        <Estimator onBookCustomPackage={(pkg) => handleOpenBooking(`Custom Estimate: ${pkg.vehicle} (₹${pkg.total})`)} />

        {/* 7. Reviews */}
        <Reviews />

        {/* 8. FAQ Accordion */}
        <FaqAccordion />

        {/* 9. Contact & Location Hub */}
        <ContactHub />
      </main>

      {/* Footer */}
      <Footer />

      {/* Pinned Bottom-Right "BOOK NOW" Floating Button */}
      <FloatingCta onBookClick={() => handleOpenBooking("Floating CTA")} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedServiceForModal}
      />
    </div>
  );
}
