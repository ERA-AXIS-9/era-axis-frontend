import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Clock, User, Share2, ArrowUp } from 'lucide-react';

// Sample insights data
const insights = [
  {
    id: 1,
    title: "ERA AXIS Among Top 32 Finalists in NEF 2025 Africa Energy Innovation Challenge",
    category: "Achievement",
    date: "November 2024",
    readingTime: "5 min read",
    author: "ERA AXIS Team",
    image: "/images/workingspace.png",
    summary: "We are proud to announce that ERA AXIS has been selected as one of the top 32 finalists in the prestigious NEF 2025 Africa Energy Innovation Challenge. This recognition highlights our commitment to driving sustainable energy solutions across the African continent.",
    content: "Full article content would go here..."
  },
  {
    id: 2,
    title: "ERA AXIS Selected for the 2025 Youth Ecopreneur Programme (YECO)",
    category: "Partnership",
    date: "November 2024",
    readingTime: "4 min read",
    author: "ERA AXIS Team",
    image: "/images/manufacturing.png",
    summary: "ERA AXIS selected from hundreds of global applications for the prestigious 2025 Youth Ecopreneur Programme (YECO), a global initiative empowering young entrepreneurs driving sustainable, green, and inclusive innovations.",
    content: "Full article content would go here..."
  },
  {
    id: 3,
    title: "BagaBoard Wins 1st Runner-Up at Nexora Business Pitching Challenge 2025",
    category: "Innovation",
    date: "November 2024",
    readingTime: "4 min read",
    author: "ERA AXIS Team",
    image: "/images/newsletter/bagaboard-nexora-2025.jpeg",
    summary: "BagaBoard, one of ERA AXIS's innovative projects, emerged as the 1st Runner-Up at the Nexora Business Pitching Challenge 2025, transforming sugarcane waste into eco-friendly, fire-resistant electrical casings.",
    content: "Full article content would go here..."
  },
  
];

const NewsletterPage = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2339366F" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="pt-16 pb-12 bg-gradient-to-br from-[#39366F] to-[#2a2850] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                News & Insights
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Curated intelligence, emerging trends, and exclusive reports on Africa's transforming landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {insights.map((insight) => (
                <article
                  key={insight.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Article Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[#39366F] rounded-full text-sm font-semibold">
                        {insight.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-8">
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{insight.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{insight.readingTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{insight.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 group-hover:text-[#39366F] transition-colors leading-tight">
                      {insight.title}
                    </h2>

                    {/* Summary */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {insight.summary}
                    </p>

                    {/* CTA Button */}
                    <div className="flex items-center justify-between">
                      <Link 
                        to={`/newsletter/article/${insight.id}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#39366F] to-[#2a2850] hover:from-[#2a2850] hover:to-[#1a1a3a] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                      >
                        Read Full Insight
                        <ChevronRight size={20} />
                      </Link>
                      
                      {/* Share Buttons */}
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-600 hover:text-[#39366F] hover:bg-gray-100 rounded-lg transition-all">
                          <Share2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Persistent Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Newsletter Subscription Form */}
                <div className="bg-[#39366F] rounded-2xl shadow-xl p-8 text-white">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-3">
                      Join the Innovation Hub
                    </h3>
                    <p className="text-white/90">
                      Get exclusive insights directly to your inbox.
                    </p>
                  </div>

                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-white hover:bg-gray-100 text-[#39366F] px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      Subscribe Now →
                    </button>
                  </form>

                  {isSubscribed && (
                    <div className="mt-4 p-3 bg-green-500/20 border border-green-400/30 rounded-lg text-center">
                      <p className="text-green-100 text-sm">Thank you for subscribing!</p>
                    </div>
                  )}

                  <p className="text-xs text-white/70 text-center mt-4">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h4 className="text-lg font-bold text-black mb-4">Quick Links</h4>
                  <div className="space-y-3">
                    <a href="/about" className="block text-gray-700 hover:text-[#39366F] transition-colors">
                      About ERA AXIS
                    </a>
                    <a href="/services/manufacturing" className="block text-gray-700 hover:text-[#39366F] transition-colors">
                      Manufacturing Services
                    </a>
                    <a href="/services/open-labs" className="block text-gray-700 hover:text-[#39366F] transition-colors">
                      Open Labs
                    </a>
                    <a href="/contact" className="block text-gray-700 hover:text-[#39366F] transition-colors">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-[#39366F] to-[#2a2850] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-50"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsletterPage;