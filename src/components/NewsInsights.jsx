import React from 'react';
import { ChevronRight } from 'lucide-react';

const NewsInsights = () => {
  const articles = [
    {
      title: "Article placeholder",
      excerpt: "Brief description of the article content and key insights.",
      image: "/images/workingspace.png",
      date: "Oct 2024",
      category: "Innovation"
    },
    {
      title: "Article placeholder", 
      excerpt: "Brief description of the article content and key insights.",
      image: "/images/software.png",
      date: "Oct 2024",
      category: "Technology"
    },
    {
      title: "Article placeholder",
      excerpt: "Brief description of the article content and key insights.", 
      image: "/images/manufacturing.png",
      date: "Oct 2024",
      category: "Impact"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-black tracking-tight">News & Insights</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {articles.map((article, index) => (
            <article 
              key={index} 
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-3 group-hover:text-[#39366F] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    {article.date}
                  </span>
                  <a 
                    href="#"
                    className="text-[#39366F] hover:text-[#2a2850] font-semibold text-sm inline-flex items-center gap-1 transition-colors duration-300 group/btn"
                  >
                    Read More
                    <ChevronRight 
                      size={14} 
                      className="group-hover/btn:translate-x-0.5 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#39366F] to-[#5B9BD5] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </article>
          ))}
        </div>
        
        {/* See More Button */}
        <div className="flex justify-end mb-8">
          <a 
            href="/news"
            className="bg-[#39366F] hover:bg-[#2a2850] text-white px-5 py-2 rounded-md font-semibold inline-flex items-center gap-1 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
          >
            See More
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsInsights;
