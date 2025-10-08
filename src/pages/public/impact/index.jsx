import React from 'react';
import ImpactHero from '../../../components/pages/impact/ImpactHero';
import ImpactMetrics from '../../../components/pages/impact/ImpactMetrics';
import StoriesOfChange from '../../../components/pages/impact/StoriesOfChange';
import ImpactTestimonials from '../../../components/pages/impact/ImpactTestimonials';
import WhyItMatters from '../../../components/pages/impact/WhyItMatters';

const ImpactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ImpactHero />
      <ImpactMetrics />
      <StoriesOfChange />
      <ImpactTestimonials />
      <WhyItMatters />
    </div>
  );
};

export default ImpactPage;