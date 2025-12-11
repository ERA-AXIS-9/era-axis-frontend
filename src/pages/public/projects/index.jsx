import React from 'react';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import ProjectsHero from '../../../components/pages/projects/ProjectsHero';
import ProjectsGrid from '../../../components/pages/projects/ProjectsGrid';
import StorePromoBanner from '../../../components/pages/common/StorePromoBanner';
import FeaturedCaseStudy from '../../../components/pages/projects/FeaturedCaseStudy';
import PartnersSay from '../../../components/pages/projects/PartnersSay';
import ProjectsCTA from '../../../components/pages/projects/ProjectsCTA';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SoftwareNavbar />
      <ProjectsHero />
      <ProjectsGrid />
      <StorePromoBanner 
        headline="Ready to turn inspiration into innovation?"
        bodyText="Our official store stocks the exact components and materials used in our community Makerspaces. Get the right gear for your next project."
        ctaText="Shop Project Supplies Now →"
      />
      <FeaturedCaseStudy />
      <PartnersSay />
      <ProjectsCTA />
    </div>
  );
};

export default ProjectsPage;