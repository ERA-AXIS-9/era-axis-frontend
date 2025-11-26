import React from 'react';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import HouseholdHero from '../../../components/pages/software/HouseholdHero';
import EverydaySolutions from '../../../components/pages/software/EverydaySolutions';
import HowItWorks from '../../../components/pages/software/HowItWorks';
import HouseholdShowcase from '../../../components/pages/software/HouseholdShowcase';
import WhyHouseholdSolutions from '../../../components/pages/software/WhyHouseholdSolutions';
import HouseholdSuccessStory from '../../../components/pages/software/HouseholdSuccessStory';
import HouseholdCTA from '../../../components/pages/software/HouseholdCTA';

const HouseholdPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SoftwareNavbar />
      <HouseholdHero />
      <EverydaySolutions />
      <HowItWorks />
      <HouseholdShowcase />
      <WhyHouseholdSolutions />
      <HouseholdSuccessStory />
      <HouseholdCTA />
    </div>
  );
};

export default HouseholdPage;
