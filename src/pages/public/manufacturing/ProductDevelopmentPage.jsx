import React from 'react';
import Breadcrumb from '../../../components/pages/manufacturing/Breadcrumb';
import ProductDevelopmentHero from '../../../components/pages/manufacturing/ProductDevelopmentHero';
import ProjectsShowcase from '../../../components/pages/manufacturing/ProjectsShowcase';
import ProductDevelopmentCTA from '../../../components/pages/manufacturing/ProductDevelopmentCTA';

const ProductDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      <ProductDevelopmentHero />
      <ProjectsShowcase />
      <ProductDevelopmentCTA />
    </div>
  );
};

export default ProductDevelopmentPage;