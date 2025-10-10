import React, { useState } from 'react';
import { Search } from 'lucide-react';

const FilterNavigation = ({ onFilterChange, onSearchChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'education', label: 'Education' },
    { key: 'manufacturing', label: 'Manufacturing' },
    { key: 'open-labs', label: 'Open Labs' },
    { key: 'projects', label: 'Projects' },
    { key: 'events', label: 'Events' },
    { key: 'impact', label: 'Impact' }
  ];

  const handleFilterClick = (filterKey) => {
    setActiveFilter(filterKey);
    if (onFilterChange) {
      onFilterChange(filterKey);
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => handleFilterClick(category.key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.key
                    ? 'bg-[#39366F] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search gallery"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#39366F] focus:ring-1 focus:ring-[#39366F] bg-white"
            />
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default FilterNavigation;
