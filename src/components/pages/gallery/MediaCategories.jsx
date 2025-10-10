import React from 'react';
import { Sprout, Leaf, Recycle, Heart, DollarSign, Users, ArrowRight } from 'lucide-react';

const MediaCategories = () => {
  const categories = [
    {
      id: 'agriculture',
      name: 'Agriculture',
      icon: Sprout,
      count: 45,
      description: 'Smart farming and agricultural innovation projects',
      image: '/images/manufacturing.png',
      color: 'bg-green-500'
    },
    {
      id: 'environment', 
      name: 'Environment',
      icon: Leaf,
      count: 38,
      description: 'Environmental monitoring and conservation solutions',
      image: '/images/software.png',
      color: 'bg-blue-500'
    },
    {
      id: 'sustainability',
      name: 'Sustainability',
      icon: Recycle,
      count: 32,
      description: 'Waste management and circular economy projects',
      image: '/images/workingspace.png',
      color: 'bg-emerald-500'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Heart,
      count: 28,
      description: 'Medical devices and community health initiatives',
      image: '/images/manufacturing.png',
      color: 'bg-red-500'
    },
    {
      id: 'fintech',
      name: 'FinTech',
      icon: DollarSign,
      count: 22,
      description: 'Financial technology and economic empowerment',
      image: '/images/software.png',
      color: 'bg-indigo-500'
    },
    {
      id: 'community',
      name: 'Community',
      icon: Users,
      count: 56,
      description: 'Community engagement and social impact programs',
      image: '/images/workingspace.png',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Explore media organized by project focus areas and impact domains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="group cursor-pointer">
                
                {/* Category Card */}
                <div className="relative rounded-2xl overflow-hidden aspect-video mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    
                    {/* Icon & Count */}
                    <div className="absolute top-4 left-4 flex items-center gap-3">
                      <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center`}>
                        <Icon className="text-white" size={20} />
                      </div>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {category.count} items
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="text-white" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default MediaCategories;
