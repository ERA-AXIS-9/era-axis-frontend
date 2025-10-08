import React from 'react';
import ProjectsHero from '../../../components/pages/projects/ProjectsHero';
import FeaturedProjects from '../../../components/pages/projects/FeaturedProjects';
import PlannedProjects from '../../../components/pages/projects/PlannedProjects';
import ProjectsGallery from '../../../components/pages/projects/ProjectsGallery';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ProjectsHero />
      <FeaturedProjects />
      <PlannedProjects />
      <ProjectsGallery />
    </div>
  );
};

export default ProjectsPage;