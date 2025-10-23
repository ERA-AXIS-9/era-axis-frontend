import React from 'react';
import PartnershipHero from '../../../components/pages/partnership/PartnershipHero';
import WhyPartnerWithUs from '../../../components/pages/partnership/WhyPartnerWithUs';
import PartnershipBenefits from '../../../components/pages/partnership/PartnershipBenefits';
import Partners from '../../../components/pages/home/Partners';

const PartnershipPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <PartnershipHero />
      <WhyPartnerWithUs />
      <PartnershipBenefits />
      <Partners />
    </div>
  );
};

export default PartnershipPage;