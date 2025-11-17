import React from 'react';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BagaBoardArticle = () => {
  const article = {
    title: "BagaBoard Wins 1st Runner-Up at Nexora Business Pitching Challenge 2025",
    date: "November 2024",
    author: "ERA AXIS Team",
    readTime: "4 min read",
    category: "Innovation",
    image: "/images/Homepage/BagaBoard Nexora.png"
  };

  const content = `We are proud to announce that BagaBoard, one of ERA AXIS's innovative projects, emerged as the 1st Runner-Up at the Nexora Business Pitching Challenge 2025, held at the National Theatre, Accra.

## Revolutionary Innovation in Electrical Safety

BagaBoard is redefining electrical safety and sustainability in Ghana by transforming sugarcane waste into eco-friendly, fire-resistant electrical casings. This breakthrough innovation not only enhances household safety but also promotes a cleaner environment by converting agricultural waste into durable, locally manufactured products.

## Sustainable Manufacturing Excellence

This innovation represents a perfect example of circular economy principles in action. By utilizing sugarcane waste - an abundant agricultural byproduct in Ghana - BagaBoard creates value from what would otherwise be environmental waste, turning it into life-saving electrical safety components.

## Recognition and Impact

This recognition marks a major milestone in our mission to build safer, greener, and affordable innovations, Made in Ghana, for Africa. It reinforces ERA AXIS's commitment to empowering young innovators to create sustainable solutions that address real challenges in manufacturing, energy, and environmental protection.

## Local Innovation, Global Standards

The Nexora Business Pitching Challenge is one of Ghana's most prestigious platforms for innovative startups and entrepreneurs. Securing 1st Runner-Up position among hundreds of contestants demonstrates the viability and market potential of BagaBoard's solution.

## Future Vision

BagaBoard stands as a testament to what's possible when African innovation meets local challenges. The project continues to develop new applications for agricultural waste in electrical safety, contributing to both job creation and environmental sustainability in Ghana.

BagaBoard — From Waste to Watt.`;

  const relatedArticles = [
    {
      title: "ERA AXIS Among Top 32 Finalists in NEF 2025",
      excerpt: "Selected from 350+ entries across 38 African countries in the Africa Energy Innovation Challenge.",
      image: "/images/Homepage/NEF 2025.png",
      link: "/news/nef-2025-finalist"
    },
    {
      title: "ERA AXIS Selected for 2025 Youth Ecopreneur Programme", 
      excerpt: "Chosen from hundreds of global applications for groundbreaking STEM education work.",
      image: "/images/Homepage/YECO 2025.png",
      link: "/news/yeco-2025-selection"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SoftwareNavbar />
      
      {/* Article Header */}
      <div className="bg-gradient-to-br from-[#39366F] to-[#5B9BD5] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/news"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to News & Insights
          </Link>
          
          <div className="text-white">
            <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>By {article.author}</span>
              </div>
              <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-64 sm:h-96 object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-black mt-8 mb-4">
                  {paragraph.replace('##', '').trim()}
                </h2>
              );
            } else if (paragraph.startsWith('**')) {
              return (
                <p key={index} className="text-lg font-semibold text-[#39366F] my-6">
                  {paragraph.replace(/\*\*/g, '').trim()}
                </p>
              );
            } else {
              return (
                <p key={index} className="text-gray-700 leading-relaxed my-6">
                  {paragraph.trim()}
                </p>
              );
            }
          })}
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((related, index) => (
              <article 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex gap-4">
                  <img 
                    src={related.image}
                    alt={related.title}
                    className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-black mb-2 hover:text-[#39366F] transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {related.excerpt}
                    </p>
                    <Link 
                      to={related.link}
                      className="text-sm text-[#39366F] hover:text-[#2a2850] font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagaBoardArticle;
