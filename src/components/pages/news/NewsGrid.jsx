import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { articlesData } from '../../../data/articlesData';

const NewsGrid = () => {
  // Get only the first 3 articles for the news grid
  const articles = Object.values(articlesData).slice(0, 3);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Latest Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-[#39366F]/20"
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#39366F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#39366F] transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    By {article.author}
                  </span>
                  <Link 
                    to={`/newsletter/article/${article.id}`}
                    className="text-[#39366F] hover:text-[#2a2850] font-semibold text-sm inline-flex items-center gap-1 transition-colors duration-300 group/btn"
                  >
                    Read More
                    <ArrowRight 
                      size={14} 
                      className="group-hover/btn:translate-x-0.5 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
