import React from 'react';
import ManufacturingNavbar from '../../../components/ManufacturingNavbar';
import ManufacturingHero from '../../../components/pages/manufacturing/ManufacturingHero';
import ManufacturingImpact from '../../../components/pages/manufacturing/ManufacturingImpact';
import CoreServices from '../../../components/pages/manufacturing/CoreServices';
import SustainableApproach from '../../../components/pages/manufacturing/SustainableApproach';
import WhyChooseUs from '../../../components/pages/manufacturing/WhyChooseUs';
import FeaturedProjects from '../../../components/pages/manufacturing/FeaturedProjects';
import TestimonialsImpact from '../../../components/pages/manufacturing/TestimonialsImpact';
import ReadyToBuild from '../../../components/pages/manufacturing/ReadyToBuild';

const ManufacturingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ManufacturingNavbar />
      <ManufacturingHero />
      <ManufacturingImpact />
      <CoreServices />
      <SustainableApproach />
      <WhyChooseUs />
      <FeaturedProjects />
      <TestimonialsImpact />
      <ReadyToBuild />
    </div>
  );
};

export default ManufacturingPage;