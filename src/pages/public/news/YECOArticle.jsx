import React from 'react';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const YECOArticle = () => {
  const article = {
    title: "ERA AXIS Selected for the 2025 Youth Ecopreneur Programme (YECO)",
    date: "November 2024",
    author: "ERA AXIS Team",
    readTime: "6 min read",
    category: "Recognition",
    image: "/images/Homepage/YECO 2025.png"
  };

  const content = `We're excited to announce that ERA AXIS has been selected to participate in the 2025 Youth Ecopreneur Programme (YECO), a prestigious global initiative empowering young entrepreneurs driving sustainable, green, and inclusive innovations across the world.

## Global Recognition for STEM Innovation

Out of hundreds of applications from around the globe, ERA AXIS was chosen for its groundbreaking work in making STEM education practical, affordable, and impact-driven, enabling young Africans to design real-world solutions from locally available and recycled materials.

## About the YECO Programme

The YECO Programme, organized by the International Trade Centre (ITC) and Ye! Community, supports youth-led ventures tackling environmental and social challenges through entrepreneurship. As part of this year's cohort, ERA AXIS will join other exceptional ecopreneurs to strengthen our climate-smart innovation strategies, expand partnerships, and scale our impact across Africa.

## Leadership Vision

"This opportunity reinforces our mission to empower Africa's innovators and accelerate homegrown climate solutions. YECO provides the perfect platform to exchange ideas, build collaborations, and position ERA AXIS at the forefront of sustainable innovation on the continent."
— John Ransford Arthur, Founder & CEO, ERA AXIS

## Strategic Impact

Through the YECO journey, ERA AXIS aims to deepen its work in STEM for All, advance circular manufacturing, and grow its Open Labs network creating pathways for African youth to design, build, and commercialize sustainable technologies.

## Looking Ahead

Stay tuned as we share our progress throughout the programme and beyond. Together, we're building a generation of innovators solving Africa's most pressing challenges through science, technology, and creativity.

#EmpoweringAfricasInnovators | #YECO2025 | #ERAAXIS`;

  const relatedArticles = [
    {
      title: "ERA AXIS Among Top 32 Finalists in NEF 2025",
      excerpt: "Selected from 350+ entries across 38 African countries in the Africa Energy Innovation Challenge.",
      image: "/images/Homepage/NEF 2025.png",
      link: "/news/nef-2025-finalist"
    },
    {
      title: "BagaBoard Wins 1st Runner-Up at Nexora 2025", 
      excerpt: "BagaBoard transforms sugarcane waste into eco-friendly electrical casings.",
      image: "/images/Homepage/BagaBoard Nexora.png",
      link: "/news/bagaboard-nexora-2025"
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
            } else if (paragraph.startsWith('—')) {
              return (
                <blockquote key={index} className="border-l-4 border-[#39366F] pl-6 py-2 my-6 bg-gray-50 italic text-gray-700">
                  {paragraph.trim()}
                </blockquote>
              );
            } else if (paragraph.startsWith('#')) {
              return (
                <div key={index} className="flex flex-wrap gap-2 my-6">
                  {paragraph.split(' ').filter(tag => tag.startsWith('#')).map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-[#39366F]/10 text-[#39366F] px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
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

export default YECOArticle;
