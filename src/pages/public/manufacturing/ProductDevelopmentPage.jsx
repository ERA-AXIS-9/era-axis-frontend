import React from 'react';
import Breadcrumb from '../../../components/pages/manufacturing/Breadcrumb';
import ProductDevelopmentHero from '../../../components/pages/manufacturing/ProductDevelopmentHero';
import ServiceCategories from '../../../components/pages/manufacturing/ServiceCategories';
import HowItWorks from '../../../components/pages/manufacturing/HowItWorks';
import FeaturedProjects from '../../../components/pages/manufacturing/FeaturedProjects';
import ProductDevelopmentCTA from '../../../components/pages/manufacturing/ProductDevelopmentCTA';

const ProductDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      <ProductDevelopmentHero />
      <ServiceCategories />
      <HowItWorks />
      <FeaturedProjects />
      <ProductDevelopmentCTA />
    </div>
  );
};

export default ProductDevelopmentPage;
