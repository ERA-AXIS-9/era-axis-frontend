import React from 'react';
import ManufacturingNavbar from '../../../components/ManufacturingNavbar';
import ManufacturingHero from '../../../components/pages/manufacturing/ManufacturingHero';
import ManufacturingImpact from '../../../components/pages/manufacturing/ManufacturingImpact';
import CoreServices from '../../../components/pages/manufacturing/CoreServices';
import SustainableApproach from '../../../components/pages/manufacturing/SustainableApproach';
import WhyChooseUs from '../../../components/pages/manufacturing/WhyChooseUs';
import FeaturedProjects from '../../../components/pages/manufacturing/FeaturedProjects';
import StorePromoBanner from '../../../components/pages/common/StorePromoBanner';
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
      <StorePromoBanner 
        headline="Ready to Build Your Next Project?"
        bodyText="Stock up on premium manufacturing tools, materials, and equipment from our official store. Everything you need for custom fabrication and product development."
        ctaText="Shop Manufacturing Tools →"
      />
      <TestimonialsImpact />
      <ReadyToBuild />
    </div>
  );
};

export default ManufacturingPage;