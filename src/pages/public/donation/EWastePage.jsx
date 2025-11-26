import React from 'react';
import Breadcrumb from '../../../components/pages/ewaste/Breadcrumb';
import EWasteHero from '../../../components/pages/ewaste/EWasteHero';
import DonationForm from '../../../components/pages/ewaste/DonationForm';

const EWastePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      <EWasteHero />
      <DonationForm />
    </div>
  );
};

export default EWastePage;