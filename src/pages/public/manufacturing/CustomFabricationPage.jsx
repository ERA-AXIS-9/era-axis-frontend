import React from 'react';
import Breadcrumb from '../../../components/pages/manufacturing/Breadcrumb';
import CustomFabricationHero from '../../../components/pages/manufacturing/CustomFabricationHero';
import ServiceCategories from '../../../components/pages/manufacturing/ServiceCategories';
import HowItWorks from '../../../components/pages/manufacturing/HowItWorks';
import FeaturedFabricationProjects from '../../../components/pages/manufacturing/FeaturedFabricationProjects';
import CustomFabricationCTA from '../../../components/pages/manufacturing/CustomFabricationCTA';

const CustomFabricationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      <CustomFabricationHero />
      <ServiceCategories />
      <HowItWorks />
      <FeaturedFabricationProjects />
      <CustomFabricationCTA />
    </div>
  );
};

export default CustomFabricationPage;