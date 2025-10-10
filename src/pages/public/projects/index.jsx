import React from 'react';
import Breadcrumb from '../../../components/pages/projects/Breadcrumb';
import ProjectsHero from '../../../components/pages/projects/ProjectsHero';
import FeaturedProjects from '../../../components/pages/projects/FeaturedProjects';
import PlannedProjects from '../../../components/pages/projects/PlannedProjects';
import ProjectsGallery from '../../../components/pages/projects/ProjectsGallery';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      <ProjectsHero />
      <FeaturedProjects />
      <PlannedProjects />
      <ProjectsGallery />
    </div>
  );
};

export default ProjectsPage;