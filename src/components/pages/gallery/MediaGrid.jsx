import React, { useState, useMemo } from 'react';
import { Play, Download, Eye, Heart, Grid, List, SortAsc } from 'lucide-react';

const MediaGrid = ({ filters = {} }) => {
  const [viewMode, setViewMode] = useState('grid'); // grid, list
  const [sortBy, setSortBy] = useState('date'); // date, views, likes, title
  const [likedItems, setLikedItems] = useState(new Set());
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  // Complete media items with more variety
  const allMediaItems = [
    {
      id: 1,
      title: "RecySim Smart Prototype Testing",
      type: "images",
      image: "/images/workingspace.png",
      category: "sustainability",
      views: 856,
      likes: 23,
      date: "2024-03-15",
      dateDisplay: "March 15, 2024",
      keywords: ["recycling", "smart", "prototype", "testing", "waste"]
    },
    {
      id: 2,
      title: "Carbon Credit Platform Demo", 
      type: "videos",
      image: "/images/software.png",
      duration: "3:45",
      category: "fintech",
      views: 1240,
      likes: 45,
      date: "2024-03-10",
      dateDisplay: "March 10, 2024",
      keywords: ["carbon", "credits", "platform", "demo", "fintech"]
    },
    {
      id: 3,
      title: "Health Wearables Workshop",
      type: "images",
      image: "/images/manufacturing.png",
      category: "healthcare",
      views: 672,
      likes: 18,
      date: "2024-03-08",
      dateDisplay: "March 8, 2024",
      keywords: ["health", "wearables", "workshop", "medical", "devices"]
    },
    {
      id: 4,
      title: "Community Innovation Session",
      type: "videos",
      image: "/images/workingspace.png",
      duration: "12:30",
      category: "community",
      views: 2100,
      likes: 67,
      date: "2024-03-05",
      dateDisplay: "March 5, 2024",
      keywords: ["community", "innovation", "session", "collaboration"]
    },
    {
      id: 5,
      title: "AgriSplanter Assembly Process",
      type: "images",
      image: "/images/manufacturing.png",
      category: "agriculture",
      views: 945,
      likes: 31,
      date: "2024-03-01",
      dateDisplay: "March 1, 2024",
      keywords: ["agriculture", "splanter", "assembly", "farming", "precision"]
    },
    {
      id: 6,
      title: "EcoWatch Sensor Calibration",
      type: "videos",
      image: "/images/software.png",
      duration: "7:20",
      category: "environment",
      views: 1580,
      likes: 52,
      date: "2024-02-28",
      dateDisplay: "February 28, 2024",
      keywords: ["ecowatch", "sensor", "calibration", "environment", "monitoring"]
    },
    {
      id: 7,
      title: "Student Innovation Report 2024",
      type: "documents",
      image: "/images/software.png",
      category: "community",
      views: 420,
      likes: 12,
      date: "2024-02-25",
      dateDisplay: "February 25, 2024",
      keywords: ["report", "innovation", "students", "research", "document"]
    },
    {
      id: 8,
      title: "Sustainable Agriculture Presentation",
      type: "documents",
      image: "/images/manufacturing.png",
      category: "agriculture",
      views: 680,
      likes: 24,
      date: "2024-02-20",
      dateDisplay: "February 20, 2024",
      keywords: ["sustainable", "agriculture", "presentation", "farming", "green"]
    }
  ];

  // Filter and search functionality
  const filteredItems = useMemo(() => {
    let filtered = allMediaItems;

    // Apply search filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchLower) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
      );
    }

    // Apply category filter
    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(item => item.category === filters.category);
    }

    // Apply media type filter
    if (filters.mediaType && filters.mediaType !== 'all') {
      filtered = filtered.filter(item => item.type === filters.mediaType);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'views':
          return b.views - a.views;
        case 'likes':
          return b.likes - a.likes;
        case 'title':
          return a.title.localeCompare(b.title);
        case 'date':
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });

    return filtered;
  }, [filters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  // Handle like toggle
  const toggleLike = (itemId) => {
    const newLikedItems = new Set(likedItems);
    if (newLikedItems.has(itemId)) {
      newLikedItems.delete(itemId);
    } else {
      newLikedItems.add(itemId);
    }
    setLikedItems(newLikedItems);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
              Media Gallery
            </h2>
            <p className="text-gray-600">
              {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
              {filters.searchTerm && ` for "${filters.searchTerm}"`}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm font-medium focus:outline-none focus:border-[#39366F] focus:ring-1 focus:ring-[#39366F]"
              >
                <option value="date">Newest First</option>
                <option value="views">Most Viewed</option>
                <option value="likes">Most Liked</option>
                <option value="title">A-Z Title</option>
              </select>
              <SortAsc className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#39366F] shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                title="Grid View"
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-[#39366F] shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                title="List View"
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No media found</h3>
            <p className="text-gray-600">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        ) : (
          <>
            {/* Media Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 lg:grid-cols-2'
            }`}>
            {paginatedItems.map((item) => (
              <div key={item.id} className={`group cursor-pointer ${
                viewMode === 'list' ? 'flex gap-4' : ''
            }`}>
              
              {/* Media Thumbnail */}
              <div className={`relative overflow-hidden rounded-xl ${
                viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'aspect-video'
              }`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
                  
                  {/* Play Button for Videos */}
                  {item.type === 'videos' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Play className="text-white ml-1" size={20} />
                      </div>
                    </div>
                  )}

                  {/* Duration */}
                  {item.duration && (
                    <div className="absolute bottom-2 right-2">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {item.duration}
                      </span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Heart size={14} className="text-white" />
                    </button>
                    <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Download size={14} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <span className="bg-[#39366F]/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`${viewMode === 'list' ? 'flex-1' : 'mt-3'}`}>
                <h3 className="font-bold text-black group-hover:text-[#39366F] transition-colors mb-1 line-clamp-2">
                  {item.title}
                </h3>
                
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Eye size={12} />
                    {item.views.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart size={12} />
                    {item.likes}
                  </div>
                  <span>{item.dateDisplay}</span>
                </div>
              </div>
            </div>
          ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
              
              <div className="flex gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-lg transition-colors ${
                        currentPage === pageNum
                          ? 'bg-[#39366F] text-white'
                          : 'border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                Next
              </button>
            </div>
          )}
          </>
        )}
        
      </div>
    </section>
  );
};

export default MediaGrid;
