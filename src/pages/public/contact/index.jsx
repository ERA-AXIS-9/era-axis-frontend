import React from 'react';
import Breadcrumb from '../../../components/pages/contact/Breadcrumb';
import ContactHero from '../../../components/pages/contact/ContactHero';
import MapSection from '../../../components/pages/contact/MapSection';
import PartnershipCTA from '../../../components/pages/contact/PartnershipCTA';
import FAQ from '../../../components/pages/contact/FAQ';

const ContactPage = () => {
  return (
    <div>
      <Breadcrumb />
      <ContactHero />
      <MapSection />
      <PartnershipCTA />
      <FAQ />
    </div>
  );
};

export default ContactPage;