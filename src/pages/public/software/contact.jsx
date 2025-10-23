import React from 'react';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import SoftwareContactHero from '../../../components/pages/software/SoftwareContactHero';
import MapSection from '../../../components/pages/contact/MapSection';
import PartnershipCTA from '../../../components/pages/contact/PartnershipCTA';
import FAQ from '../../../components/pages/contact/FAQ';

const SoftwareContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SoftwareNavbar />
      <SoftwareContactHero />
      <MapSection />
      <PartnershipCTA />
      <FAQ />
    </div>
  );
};

export default SoftwareContactPage;
