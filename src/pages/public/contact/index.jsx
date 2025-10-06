import React from 'react';
import ContactHero from '../../../components/pages/contact/ContactHero';
import MapSection from '../../../components/pages/contact/MapSection';
import PartnershipCTA from '../../../components/pages/contact/PartnershipCTA';
import FAQ from '../../../components/pages/contact/FAQ';

const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <MapSection />
      <PartnershipCTA />
      <FAQ />
    </div>
  );
};

export default ContactPage;