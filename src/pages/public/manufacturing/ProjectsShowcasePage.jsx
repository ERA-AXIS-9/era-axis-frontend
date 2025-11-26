import React from 'react';
import ManufacturingNavbar from '../../../components/ManufacturingNavbar';
import ProjectsShowcase from '../../../components/pages/manufacturing/ProjectsShowcase';

const ProjectsShowcasePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ManufacturingNavbar />
      <ProjectsShowcase />
    </div>
  );
};

export default ProjectsShowcasePage;
