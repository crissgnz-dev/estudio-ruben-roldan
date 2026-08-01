import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServicesBento from './components/ServicesBento';
import ServiceModal from './components/ServiceModal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (service = null) => {
    setSelectedService(service || { title: 'Consulta de Habilitación / Ingeniería' });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans">
      {/* Navigation Header */}
      <Navbar onOpenQuoteModal={() => handleOpenModal()} />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero 
          onOpenQuoteModal={() => handleOpenModal()} 
          onSelectService={(service) => handleOpenModal(service)}
        />
        <AboutUs />
        <ServicesBento onSelectService={(service) => handleOpenModal(service)} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA */}
      <WhatsAppFloating />

      {/* Quote / Inquiry Modal */}
      <ServiceModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        selectedService={selectedService}
      />
    </div>
  );
}
