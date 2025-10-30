import React from 'react';
import ManufacturingNavbar from '../../../components/ManufacturingNavbar';
import Breadcrumb from '../../../components/pages/manufacturing/Breadcrumb';
import ManufacturingHero from '../../../components/pages/manufacturing/ManufacturingHero';
import CoreServices from '../../../components/pages/manufacturing/CoreServices';
import WhyChooseUs from '../../../components/pages/manufacturing/WhyChooseUs';
import FeaturedProjects from '../../../components/pages/manufacturing/FeaturedProjects';
import TestimonialsImpact from '../../../components/pages/manufacturing/TestimonialsImpact';
import ReadyToBuild from '../../../components/pages/manufacturing/ReadyToBuild';

const ManufacturingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ManufacturingNavbar />
      <Breadcrumb />
      <ManufacturingHero />
      <CoreServices />
      <WhyChooseUs />
      <FeaturedProjects />
      <TestimonialsImpact />
      <ReadyToBuild />
    </div>
  );
};

export default ManufacturingPage;