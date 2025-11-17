import React from 'react';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const NEFArticle = () => {
  const article = {
    title: "ERA AXIS Among Top 32 Finalists in NEF 2025 Africa Energy Innovation Challenge",
    date: "November 2024",
    author: "ERA AXIS Team",
    readTime: "5 min read",
    category: "Achievement",
    image: "/images/Homepage/NEF 2025.png"
  };

  const content = `We are proud to announce that ERA AXIS has been selected among the Top 32 finalists out of more than 350 entries received from 38 countries across Africa in the 10th Africa Energy Innovation Challenge (AEIC), organized by the Nigeria Energy Forum (NEF).

## Prestigious Recognition Across Africa

Themed "Transforming Energy Transition, Youth Employment & Local Manufacturing," this prestigious competition celebrates Africa's most promising innovators driving clean-energy and manufacturing transformation. Being selected as one of the Top 32 finalists from such a competitive pool of entries demonstrates the significant impact and potential of ERA AXIS's innovative approach.

## Representing Ghana with Pride

Representing Ghana, ERA AXIS is competing under Track 3: Greening Local Manufacturing & Value Addition with the project titled:

**"Driving Green Manufacturing and Job Creation through Practical STEM and E-Waste Innovation in Ghana."**

## Innovation in Action

ERA AXIS's solution showcases how practical STEM education and e-waste innovation can empower youth to design and locally manufacture affordable clean technologies. By reusing discarded electronics, applying reverse engineering, and integrating software development, ERA AXIS reduces dependency on imported kits, lowers production costs, and creates pathways for youth employment and green manufacturing.

## Creating Sustainable Impact

As one of Africa's Top 32 finalists, ERA AXIS proudly represents Ghana, demonstrating how STEM-driven local innovation can:

- Create green jobs for youth
- Strengthen local industries 
- Contribute to a sustainable circular economy
- Reduce dependency on imported technology
- Transform e-waste into valuable resources

## Commitment to Excellence

We remain committed to making STEM practical, affordable, and inclusive, empowering young Africans to turn waste into innovation and ideas into lasting impact. This recognition from the Nigeria Energy Forum validates our mission and strengthens our resolve to continue driving positive change across Africa through technology education and innovation.

## Looking Ahead

As we progress in the competition, we continue to refine our solutions and expand our impact. The NEF 2025 Africa Energy Innovation Challenge provides an excellent platform to showcase our work and collaborate with other innovators across the continent who are working towards similar goals of sustainable development and youth empowerment.`;

  const relatedArticles = [
    {
      title: "ERA AXIS Selected for 2025 Youth Ecopreneur Programme",
      excerpt: "Chosen from hundreds of global applications for groundbreaking STEM education work.",
      image: "/images/Homepage/YECO 2025.png",
      link: "/news/yeco-2025-selection"
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
            } else if (paragraph.startsWith('-')) {
              return (
                <ul key={index} className="list-disc list-inside my-4 space-y-2 text-gray-700">
                  {paragraph.split('\n').filter(item => item.startsWith('-')).map((item, itemIndex) => (
                    <li key={itemIndex}>{item.replace('- ', '').trim()}</li>
                  ))}
                </ul>
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

export default NEFArticle;
