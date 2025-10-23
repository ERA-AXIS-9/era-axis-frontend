import React from 'react';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import ProjectsHero from '../../../components/pages/projects/ProjectsHero';
import ProjectsGrid from '../../../components/pages/projects/ProjectsGrid';
import FeaturedCaseStudy from '../../../components/pages/projects/FeaturedCaseStudy';
import PartnersSay from '../../../components/pages/projects/PartnersSay';
import ProjectsCTA from '../../../components/pages/projects/ProjectsCTA';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SoftwareNavbar />
      <ProjectsHero />
      <ProjectsGrid />
      <FeaturedCaseStudy />
      <PartnersSay />
      <ProjectsCTA />
    </div>
  );
};

export default ProjectsPage;