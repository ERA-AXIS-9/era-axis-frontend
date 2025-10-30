import React, { useState } from 'react';
import { ChevronRight, TrendingUp, Users, Award } from 'lucide-react';
import Breadcrumb from '../../../components/pages/open-labs/Breadcrumb';

const categories = ['All Projects', 'Hardware', 'Software', 'Community'];

const projects = [
  {
    title: 'Smart Recycling Bins',
    category: 'Hardware',
    description: 'IoT-enabled waste sorting for communities.',
    image: '/images/project-placeholder.jpg',
    status: 'Completed'
  },
  {
    title: 'AgriZplanter',
    category: 'Hardware',
    description: 'Smart planting tool for farmers.',
    image: '/images/project-placeholder.jpg',
    status: 'In Progress'
  },
  {
    title: 'EcoWatch Dashboard',
    category: 'Software',
    description: 'Air quality monitoring platform.',
    image: '/images/project-placeholder.jpg',
    status: 'Completed'
  },
  {
    title: 'Community Water Filter',
    category: 'Community',
    description: 'Low-cost filtration system.',
    image: '/images/project-placeholder.jpg',
    status: 'In Progress'
  },
  {
    title: 'Solar Lamp Kit',
    category: 'Hardware',
    description: 'Portable solar-powered lighting.',
    image: '/images/project-placeholder.jpg',
    status: 'Completed'
  },
  {
    title: 'School Lab Tools',
    category: 'Community',
    description: 'Custom science equipment from e-waste.',
    image: '/images/project-placeholder.jpg',
    status: 'Completed'
  }
];

const featuredProject = {
  title: 'Smart Health Wearable',
  description: 'An affordable health tracking device built entirely in our Open Labs using recycled components and 3D printing. This project demonstrates how accessible technology can solve real healthcare challenges.',
  impact: 'Used by 50+ community members for daily health monitoring.',
  team: 'Built by a team of 3 students over 6 months.',
  image: '/images/project-placeholder.jpg'
};

const stats = [
  { icon: TrendingUp, value: '50+', label: 'Projects completed', color: '#39366F' },
  { icon: Users, value: '100+', label: 'Innovators involved', color: '#5B9BD5' },
  { icon: Award, value: '15+', label: 'Awards won', color: '#2a2850' }
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = activeCategory === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="pt-12 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3">
              Innovations Born in Our Labs
            </h1>
            <p className="text-gray-600 text-lg">
              Real solutions built by real innovators using our facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#39366F] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-sm">Project Image</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-[#39366F]/10 text-[#39366F] rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                    <span className={`text-xs font-medium ${
                      project.status === 'Completed' ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <a
                    href="/projects"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#39366F] hover:gap-2 transition-all"
                  >
                    Learn More
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-black mb-8">Featured Innovation</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-sm">Featured Project Image</span>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">{featuredProject.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {featuredProject.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-gray-600 text-sm">{featuredProject.impact}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-gray-600 text-sm">{featuredProject.team}</p>
                </div>
              </div>

              <a
                href="/projects"
                className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                View Details
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-black mb-8 text-center">Impact in Numbers</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${stat.color}15`, border: `2px solid ${stat.color}30` }}
                    >
                      <IconComponent size={32} style={{ color: stat.color }} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <p className="text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#39366F] to-[#2a2850] rounded-2xl p-8 sm:p-12 text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Do you have a project idea? Let's build it together.
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our labs and mentors are ready to help you turn your vision into reality.
            </p>
            <a
              href="/contact"
              className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Start Your Project
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
