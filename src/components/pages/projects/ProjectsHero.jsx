import React from 'react';
import Breadcrumb from '../../Breadcrumb';

const ProjectsHero = () => {
  const breadcrumbItems = [
    { label: 'Services', link: '/services/projects' },
    { label: 'Projects' }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumb items={breadcrumbItems} homePath="/services/projects" />

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Real Projects. Real Impact.
          </h1>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
            View All Projects
          </button>
          <button className="border-2 border-gray-300 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-6 py-3 font-medium rounded-lg transition-all duration-200">
            Submit a Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
