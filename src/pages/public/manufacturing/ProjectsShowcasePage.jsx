import React from 'react';
import ManufacturingNavbar from '../../../components/ManufacturingNavbar';
import ProjectsShowcase from '../../../components/pages/manufacturing/ProjectsShowcase';

const ProjectsShowcasePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ManufacturingNavbar />
      <section className="pt-16 pb-8 bg-gradient-to-br from-[#39366F] to-[#2a2850] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              All Projects
            </h1>
            <p className="text-xl text-white/90">
              Explore our complete portfolio of manufacturing projects
            </p>
          </div>
        </div>
      </section>
      <ProjectsShowcase />
    </div>
  );
};

export default ProjectsShowcasePage;
