import React from 'react';
import Breadcrumb from '../../../components/pages/donate/Breadcrumb';
import DonateHero from '../../../components/pages/donate/DonateHero';
import WhyDonate from '../../../components/pages/donate/WhyDonate';
import WaysToSupport from '../../../components/pages/donate/WaysToSupport';
import DonorStories from '../../../components/pages/donate/DonorStories';
import FinalCTA from '../../../components/pages/donate/FinalCTA';

const DonatePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      <DonateHero />
      <WhyDonate />
      <WaysToSupport />
      <DonorStories />
      <FinalCTA />
    </div>
  );
};

export default DonatePage;
