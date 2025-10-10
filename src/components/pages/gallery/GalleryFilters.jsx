import React, { useState, useContext } from 'react';
import { Search, Filter, X } from 'lucide-react';

// Create Gallery Context for state management
export const GalleryContext = React.createContext();

const GalleryFilters = ({ onFiltersChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeMediaType, setActiveMediaType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { key: 'all', label: 'All Categories' },
    { key: 'agriculture', label: 'Agriculture' },
    { key: 'environment', label: 'Environment' },
    { key: 'sustainability', label: 'Sustainability' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'fintech', label: 'FinTech' },
    { key: 'community', label: 'Community' }
  ];

  const mediaTypes = [
    { key: 'all', label: 'All Media' },
    { key: 'images', label: 'Images' },
    { key: 'videos', label: 'Videos' },
    { key: 'documents', label: 'Documents' }
  ];

  // Handle filter changes and notify parent component
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    notifyFiltersChange(value, activeCategory, activeMediaType);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    notifyFiltersChange(searchTerm, category, activeMediaType);
  };

  const handleMediaTypeChange = (type) => {
    setActiveMediaType(type);
    notifyFiltersChange(searchTerm, activeCategory, type);
  };

  const notifyFiltersChange = (search, category, mediaType) => {
    if (onFiltersChange) {
      onFiltersChange({
        searchTerm: search,
        category: category,
        mediaType: mediaType
      });
    }
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setActiveCategory('all');
    setActiveMediaType('all');
    notifyFiltersChange('', 'all', 'all');
  };

  const hasActiveFilters = searchTerm || activeCategory !== 'all' || activeMediaType !== 'all';

  return (
    <section className="py-8 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search media by title, project, or keyword..."
              className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#39366F] focus:ring-1 focus:ring-[#39366F]"
            />
            {searchTerm && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <Filter className="text-gray-500 mr-2" size={20} />
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => handleCategoryChange(category.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-[#39366F] text-white shadow-md transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Media Type Filters & Clear Button */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {mediaTypes.map((type) => (
                <button
                  key={type.key}
                  onClick={() => handleMediaTypeChange(type.key)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                    activeMediaType === type.key
                      ? 'bg-[#39366F] text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-1 px-3 py-2 text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
              >
                <X size={14} />
                Clear All
              </button>
            )}
          </div>

        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap gap-2 items-center">
            <span className="text-sm text-gray-600">Active filters:</span>
            
            {searchTerm && (
              <span className="inline-flex items-center gap-1 bg-[#39366F] text-white px-3 py-1 rounded-full text-xs">
                Search: "{searchTerm}"
                <button onClick={() => handleSearchChange('')}>
                  <X size={12} />
                </button>
              </span>
            )}
            
            {activeCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                {categories.find(c => c.key === activeCategory)?.label}
                <button onClick={() => handleCategoryChange('all')}>
                  <X size={12} />
                </button>
              </span>
            )}
            
            {activeMediaType !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                {mediaTypes.find(t => t.key === activeMediaType)?.label}
                <button onClick={() => handleMediaTypeChange('all')}>
                  <X size={12} />
                </button>
              </span>
            )}
          </div>
        )}
        
      </div>
    </section>
  );
};

export default GalleryFilters;
