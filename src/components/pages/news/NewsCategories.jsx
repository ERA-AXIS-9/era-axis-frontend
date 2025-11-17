import React from 'react';

const NewsCategories = () => {
  const categories = [
    { name: "All", count: 3, active: true },
    { name: "Achievement", count: 1, active: false },
    { name: "Recognition", count: 1, active: false },
    { name: "Innovation", count: 1, active: false }
  ];

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-[#39366F] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Showing 3 articles</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCategories;
