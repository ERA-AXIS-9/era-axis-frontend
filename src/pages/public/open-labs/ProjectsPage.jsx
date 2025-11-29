import React, { useState } from 'react';
import { Filter, ChevronRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumb from '../../../components/pages/open-labs/Breadcrumb';

const projects = [
  {
    id: 1,
    title: 'Smart Recycling Bins',
    category: 'Hardware',
    client: 'Green Communities Initiative',
    description: 'IoT-enabled waste sorting system with real-time monitoring and automated sorting capabilities.',
    image: '/images/manufacturing.png',
    tags: ['IoT', 'Environmental', 'Smart City'],
    results: '50+ bins deployed, 40% better sorting'
  },
  {
    id: 2,
    title: 'AgriZplanter',
    category: 'Hardware',
    client: 'Local Farmers Cooperative',
    description: 'Smart planting tool with soil monitoring and automated watering for small-scale farmers.',
    image: '/images/manufacturing.png',
    tags: ['Agriculture', 'IoT', 'Automation'],
    results: '200+ farmers using, 30% yield increase'
  },
  {
    id: 3,
    title: 'EcoWatch Dashboard',
    category: 'Software',
    client: 'Environmental Protection Agency',
    description: 'Real-time air quality monitoring platform with predictive analytics and alert system.',
    image: '/images/manufacturing.png',
    tags: ['Software', 'Environment', 'Data Analytics'],
    results: '15 cities monitored, 100K+ users'
  },
  {
    id: 4,
    title: 'Community Water Filter',
    category: 'Hardware',
    client: 'Clean Water Foundation',
    description: 'Low-cost water filtration system using locally-sourced materials for rural communities.',
    image: '/images/manufacturing.png',
    tags: ['Water', 'Community', 'Engineering'],
    results: '100+ units installed, 5000+ beneficiaries'
  },
  {
    id: 5,
    title: 'Solar Lamp Kit',
    category: 'Hardware',
    client: 'Rural Electrification Project',
    description: 'Portable solar-powered lighting system with phone charging capabilities.',
    image: '/images/manufacturing.png',
    tags: ['Solar', 'Energy', 'Rural Development'],
    results: '1000+ kits distributed, 95% satisfaction'
  },
  {
    id: 6,
    title: 'School Lab Tools',
    category: 'Hardware',
    client: 'Education Ministry',
    description: 'Custom science laboratory equipment built from recycled e-waste components.',
    image: '/images/manufacturing.png',
    tags: ['Education', 'E-waste', 'Innovation'],
    results: '50 schools equipped, 10K+ students served'
  },
  {
    id: 7,
    title: 'Health Monitoring Device',
    category: 'Hardware',
    client: 'Community Health Centers',
    description: 'Affordable wearable health tracker built with 3D printing and open-source components.',
    image: '/images/manufacturing.png',
    tags: ['Healthcare', 'IoT', '3D Printing'],
    results: '500+ devices distributed, 24/7 monitoring'
  },
  {
    id: 8,
    title: 'Smart Traffic System',
    category: 'Software',
    client: 'City Transportation Authority',
    description: 'AI-powered traffic management system with real-time optimization and accident prevention.',
    image: '/images/manufacturing.png',
    tags: ['AI', 'Transportation', 'Smart City'],
    results: '30% traffic reduction, 50+ intersections'
  },
  {
    id: 9,
    title: 'Renewable Energy Trainer',
    category: 'Hardware',
    client: 'Technical Schools Network',
    description: 'Educational kit for teaching renewable energy concepts with hands-on experiments.',
    image: '/images/manufacturing.png',
    tags: ['Education', 'Renewable Energy', 'Training'],
    results: '100 schools adopted, 5K+ students trained'
  }
];

const categories = ['All Projects', 'Hardware', 'Software'];

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const filteredProjects = selectedCategory === 'All Projects'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-16 pb-8 bg-gradient-to-br from-[#39366F] to-[#2a2850] text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Open Labs Gallery
            </h1>
            <p className="text-xl text-white/90">
              Hardware, software, and community innovation projects
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-gray-700 font-semibold flex-shrink-0">
              <Filter size={20} />
              <span>Filter:</span>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-[#39366F] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-black">{filteredProjects.length}</span> projects
              {selectedCategory !== 'All Projects' && (
                <span> in <span className="font-semibold text-[#39366F]">{selectedCategory}</span></span>
              )}
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#39366F] rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Client: <span className="font-semibold text-gray-700">{project.client}</span>
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-green-600">Results:</span> {project.results}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Gallery */}
      <motion.section 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects Gallery
          </motion.h2>
          
          {/* Gallery Grid - Show top 6 projects */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            {projects.slice(0, 6).map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">
                        {project.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {project.client}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Start Your Project
          </motion.h2>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => navigate('/services/open-labs/book-session')}
              className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Book Session
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-[#39366F] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Contact
              <ExternalLink size={20} />
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectsPage;
