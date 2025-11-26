import React, { useState } from 'react';
import Breadcrumb from '../../Breadcrumb';

const ProjectsHero = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Education', 'Health', 'Climate', 'Business'];
  
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
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
            View All Projects
          </button>
          <button className="border-2 border-gray-300 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-6 py-3 font-medium rounded-lg transition-all duration-200">
            Submit a Project
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-[#39366F] text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#39366F] hover:text-[#39366F]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
