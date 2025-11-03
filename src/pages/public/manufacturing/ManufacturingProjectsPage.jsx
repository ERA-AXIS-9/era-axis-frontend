import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Filter, ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Custom Solar Panel Mounting System',
    category: 'Custom Fabrication',
    client: 'Green Energy Ghana',
    description: 'Designed and fabricated custom mounting systems for 500+ solar panels across rural communities.',
    image: '/images/manufacturing.png',
    tags: ['Metal Fabrication', 'Solar', 'Custom Design'],
    results: '500+ panels installed, 30% cost reduction'
  },
  {
    id: 2,
    title: 'School Computer Lab Repair',
    category: 'Repair & Maintenance',
    client: 'Accra Public Schools',
    description: 'Repaired and refurbished 200+ computers for 5 schools, extending device lifespan by 3+ years.',
    image: '/images/manufacturing.png',
    tags: ['Electronics Repair', 'E-waste Recovery', 'Education'],
    results: '200+ devices restored, $50K saved'
  },
  {
    id: 3,
    title: 'Agricultural Drone Prototype',
    category: 'Product Development',
    client: 'AgroTech Innovations',
    description: 'Developed prototype agricultural drone for crop monitoring and precision farming applications.',
    image: '/images/manufacturing.png',
    tags: ['Prototyping', 'IoT', 'Agriculture'],
    results: 'Functional prototype, 3 patents pending'
  },
  {
    id: 4,
    title: 'Medical Equipment Calibration',
    category: 'Repair & Maintenance',
    client: 'Regional Hospital Network',
    description: 'Calibrated and repaired critical medical equipment, ensuring compliance with health standards.',
    image: '/images/manufacturing.png',
    tags: ['Medical Devices', 'Calibration', 'Healthcare'],
    results: '50+ devices serviced, 100% uptime'
  },
  {
    id: 5,
    title: 'Custom Furniture Manufacturing',
    category: 'Custom Fabrication',
    client: 'Modern Office Solutions',
    description: 'Fabricated custom office furniture using sustainable materials and modern design principles.',
    image: '/images/manufacturing.png',
    tags: ['Woodworking', 'Custom Design', 'Sustainable'],
    results: '100+ pieces delivered, 95% satisfaction'
  },
  {
    id: 6,
    title: 'Water Filtration System',
    category: 'Product Development',
    client: 'Clean Water Initiative',
    description: 'Designed affordable water filtration system for rural communities using locally-sourced materials.',
    image: '/images/manufacturing.png',
    tags: ['Product Design', 'Social Impact', 'Engineering'],
    results: '1000+ units deployed, 5000+ beneficiaries'
  },
  {
    id: 7,
    title: 'Industrial Machine Overhaul',
    category: 'Repair & Maintenance',
    client: 'Manufacturing Co.',
    description: 'Complete overhaul of industrial CNC machines, restoring to factory specifications.',
    image: '/images/manufacturing.png',
    tags: ['Industrial Repair', 'CNC', 'Precision'],
    results: '3 machines restored, $200K saved'
  },
  {
    id: 8,
    title: 'Smart Home Automation Kit',
    category: 'Product Development',
    client: 'HomeTech Ghana',
    description: 'Developed affordable smart home automation kit with local manufacturing and support.',
    image: '/images/manufacturing.png',
    tags: ['IoT', 'Smart Home', 'Electronics'],
    results: '500+ kits sold, 4.8★ rating'
  },
  {
    id: 9,
    title: 'Custom Signage & Branding',
    category: 'Custom Fabrication',
    client: 'Retail Businesses',
    description: 'Fabricated custom signage, displays, and branding materials for local businesses.',
    image: '/images/manufacturing.png',
    tags: ['Laser Cutting', 'Branding', 'Design'],
    results: '50+ businesses served'
  }
];

const categories = ['All Projects', 'Custom Fabrication', 'Repair & Maintenance', 'Product Development'];

const ManufacturingProjectsPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  // Handle URL parameter for category filtering
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const filteredProjects = selectedCategory === 'All Projects'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-[#39366F] to-[#2a2850] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Our Manufacturing Work
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Explore our portfolio of custom fabrication, repair services, and product development projects. From concept to completion, we bring ideas to life.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl">
              <div className="text-center">
                <p className="text-4xl font-bold mb-1">500+</p>
                <p className="text-sm text-white/80">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-1">200+</p>
                <p className="text-sm text-white/80">Clients Served</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-1">98%</p>
                <p className="text-sm text-white/80">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Left - Title and Description */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                Featured Case Study
              </h2>
              <p className="text-gray-600 max-w-2xl mb-8">
                Deep dive into one of our most impactful manufacturing projects
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-black mb-2">Challenge</h4>
                  <p className="text-gray-600 text-sm">
                    Communities lacked access to clean water, and imported filtration systems were too expensive.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Solution</h4>
                  <p className="text-gray-600 text-sm">
                    Developed a low-cost filtration system using local materials, designed for easy maintenance and repair.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Impact</h4>
                  <p className="text-gray-600 text-sm">
                    1000+ units deployed, providing clean water to over 5000 people. 90% reduction in waterborne illnesses.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="text-2xl font-bold text-[#39366F] mb-1">1000+</p>
                  <p className="text-xs text-gray-600">Units Deployed</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="text-2xl font-bold text-[#39366F] mb-1">5000+</p>
                  <p className="text-xs text-gray-600">Beneficiaries</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <p className="text-2xl font-bold text-[#39366F] mb-1">90%</p>
                  <p className="text-xs text-gray-600">Illness Reduction</p>
                </div>
              </div>
            </div>
            
            {/* Right - Image and Project Info */}
            <div>
              <div className="relative h-64 lg:h-80 bg-gradient-to-br from-[#39366F] to-[#5B9BD5] rounded-xl overflow-hidden mb-6">
                <img 
                  src="/images/manufacturing.png" 
                  alt="Water Filtration System"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div>
                <span className="inline-block px-3 py-1 bg-[#39366F] text-white rounded-full text-xs font-semibold mb-4">
                  Featured Project
                </span>
                <h3 className="text-3xl font-bold text-black mb-4">
                  Water Filtration System for Rural Communities
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Partnering with Clean Water Initiative, we designed and manufactured an affordable water filtration system using locally-sourced materials. The system provides clean drinking water to rural communities across Ghana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#39366F] to-[#2a2850] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's bring your manufacturing vision to life. Get a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/services/manufacturing/book-technician')}
              className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Request a Quote
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-[#39366F] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Contact Us
              <ExternalLink size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingProjectsPage;
