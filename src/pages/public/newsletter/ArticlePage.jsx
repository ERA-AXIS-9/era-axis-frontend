import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Mail, Twitter, Linkedin, ArrowRight } from 'lucide-react';

// Full article content data
const articles = {
  1: {
    id: 1,
    title: "ERA AXIS Among Top 32 Finalists in NEF 2025 Africa Energy Innovation Challenge",
    category: "Achievement",
    date: "November 2024",
    readingTime: "5 min read",
    author: "ERA AXIS Team",
    image: "/images/workingspace.png",
    secondaryImage: "/images/manufacturing.png",
    rightColumnHeading: "Innovation in Practice",
    rightColumnExcerpt: "In ERA AXIS among top 32 finalists, our approach integrates practical STEM with clean manufacturing to remove barriers to innovation and scale local impact.",
    content: `
      <p>We are proud to announce that ERA AXIS has been selected as one of the top 32 finalists in the prestigious NEF 2025 Africa Energy Innovation Challenge. This recognition highlights our commitment to driving sustainable energy solutions across the African continent.</p>
      
      <h2>The Challenge and Our Achievement</h2>
      <p>The NEF Africa Energy Innovation Challenge represents one of the continent's most prestigious platforms for showcasing groundbreaking energy solutions. Out of hundreds of applicants from across Africa, ERA AXIS's innovative approach to sustainable manufacturing and energy efficiency has earned us a place among the elite finalists.</p>
      
      <blockquote>"This recognition validates our mission to empower African innovation through sustainable technology and collaborative solutions. We're honored to represent Ghana on this continental stage."</blockquote>
      
      <h2>Our Innovation Approach</h2>
      <p>Our submission focused on integrated smart manufacturing solutions that combine IoT technology with renewable energy systems. This approach addresses critical challenges in Africa's industrial sector while promoting environmental sustainability.</p>
      
      <h3>Key Innovation Highlights:</h3>
      <ul>
        <li>Smart energy monitoring systems for manufacturing facilities</li>
        <li>Integration of renewable energy sources with industrial processes</li>
        <li>Real-time optimization algorithms for energy efficiency</li>
        <li>Community-focused solutions that create local impact</li>
      </ul>
      
      <h2>What This Means for Africa</h2>
      <p>Being selected as a finalist demonstrates the growing recognition of African-led innovation in the global energy sector. Our success paves the way for increased investment in sustainable technologies across the continent and showcases Ghana's emergence as a hub for technological innovation.</p>
      
      <p>The NEF 2025 challenge provides us with an unprecedented opportunity to scale our solutions, connect with global partners, and contribute to Africa's energy transition. We remain committed to our vision of empowering communities through innovative, sustainable technology solutions.</p>
    `
  },
  2: {
    id: 2,
    title: "The Future of African Tech: Emerging Trends and Investment Opportunities",
    category: "Market Analysis",
    date: "October 2024",
    readingTime: "8 min read",
    author: "Research Team",
    image: "/images/manufacturing.png",
    secondaryImage: "/images/workingspace.png",
    rightColumnHeading: "Investment Hotspots",
    rightColumnExcerpt: "Fintech, AgriTech, logistics and AI continue to attract capital as local solutions mature across African markets.",
    content: `
      <p>Africa's technology landscape is undergoing a remarkable transformation, driven by innovation, investment, and a growing ecosystem of entrepreneurs and developers. This comprehensive analysis explores the key trends shaping the continent's digital future and identifies the most promising investment opportunities for 2025 and beyond.</p>
      
      <h2>The Digital Revolution Accelerates</h2>
      <p>African tech startups raised over $5 billion in 2024, marking a significant milestone in the continent's journey toward digital transformation. This surge in investment reflects growing confidence in African innovation and the immense potential of local markets.</p>
      
      <blockquote>"Africa is not just adopting technology; we're creating solutions uniquely suited to our challenges and opportunities. The next decade will see African-led innovations addressing global challenges."</blockquote>
      
      <h2>Key Emerging Trends</h2>
      
      <h3>1. Fintech Evolution</h3>
      <p>Financial technology continues to lead African innovation, with new focus areas including embedded finance, decentralized solutions, and cross-border payment systems. The success of mobile money has created a foundation for more sophisticated financial services.</p>
      
      <h3>2. AgriTech Transformation</h3>
      <p>Agriculture technology is attracting significant investment as solutions address food security challenges. Smart farming, supply chain optimization, and market access platforms are revolutionizing traditional agricultural practices.</p>
      
      <h2>Investment Hotspots for 2025</h2>
      <ul>
        <li><strong>Renewable Energy Tech:</strong> Solutions addressing Africa's energy access challenges</li>
        <li><strong>Educational Technology:</strong> Platforms democratizing access to quality education</li>
        <li><strong>Logistics and Supply Chain:</strong> Optimizing movement of goods and services</li>
        <li><strong>Artificial Intelligence:</strong> Local AI solutions for African contexts</li>
      </ul>
      
      <h2>The Road Ahead</h2>
      <p>As we look toward 2025, the African tech ecosystem is poised for exponential growth. Strong government support, increasing local talent development, and growing international partnerships create a fertile environment for innovation.</p>
    `
  },
  3: {
    id: 3,
    title: "Smart Manufacturing Solutions: Revolutionizing Ghana's Industrial Sector",
    category: "Innovation Spotlight",
    date: "October 2024",
    readingTime: "6 min read",
    author: "Engineering Team",
    image: "/images/manufacturing.png",
    secondaryImage: "/images/workingspace.png",
    rightColumnHeading: "Industry 4.0",
    rightColumnExcerpt: "IoT monitoring and additive manufacturing enable real-time optimization and faster product cycles for local firms.",
    content: `
      <p>Ghana's industrial sector is experiencing a technological renaissance as smart manufacturing solutions transform traditional production processes. This revolution is creating new opportunities for local businesses, reducing operational costs, and positioning Ghana as a regional leader in industrial innovation.</p>
      
      <h2>The Smart Manufacturing Advantage</h2>
      <p>Smart manufacturing integrates advanced technologies such as IoT, AI, and automation to create more efficient, flexible, and responsive production systems. For Ghana's industrial sector, this means increased competitiveness and the ability to serve both local and international markets more effectively.</p>
      
      <blockquote>"Smart manufacturing is not just about technology; it's about empowering local businesses to compete globally while creating sustainable jobs and economic growth in Ghana."</blockquote>
      
      <h2>Key Technologies Driving Transformation</h2>
      
      <h3>1. IoT-Enabled Production Monitoring</h3>
      <p>Internet of Things sensors provide real-time data on production processes, enabling predictive maintenance, quality control, and optimization of resource usage. Ghanaian manufacturers are seeing 30-40% improvements in efficiency through IoT implementation.</p>
      
      <h3>2. Custom Fabrication and 3D Printing</h3>
      <p>Additive manufacturing is revolutionizing prototyping and small-batch production, reducing costs and time-to-market for innovative products. Local entrepreneurs can now test and iterate designs rapidly without massive upfront investment.</p>
      
      <h2>Building the Future</h2>
      <p>ERA AXIS is at the forefront of this transformation, providing Ghanaian businesses with access to smart manufacturing technologies, training, and support. Our Open Labs facilities serve as innovation hubs where local entrepreneurs can experiment with advanced manufacturing technologies.</p>
    `
  }
  ,
  4: {
    id: 4,
    title: "Building Sustainable Communities: The Impact of Open Labs Innovation",
    category: "Community Impact",
    date: "September 2024",
    readingTime: "7 min read",
    author: "Community Team",
    image: "/images/workingspace.png",
    secondaryImage: "/images/manufacturing.png",
    rightColumnHeading: "Innovation Hubs",
    rightColumnExcerpt: "Open Labs provide access to tools and mentoring, turning curiosity into real products and services.",
    content: `
      <p>Discover how our shared innovation spaces are empowering local entrepreneurs, students, and creators to turn their ideas into reality while fostering sustainable development in communities across Ghana.</p>
      
      <h2>Innovation Hubs for All</h2>
      <p>Open Labs provide access to tools, mentoring, and practical training that transform curiosity into real products and services. From rapid prototyping to collaborative learning, communities benefit from inclusive spaces that reduce barriers to innovation.</p>
      
      <h2>Community Impact</h2>
      <ul>
        <li>Skills development and employability for youth</li>
        <li>Local manufacturing capacity and circular economy practices</li>
        <li>Entrepreneurship support and market access</li>
      </ul>
    `
  },
  5: {
    id: 5,
    title: "Renewable Energy in Africa: Opportunities and Challenges for 2025",
    category: "Energy Insights",
    date: "September 2024",
    readingTime: "10 min read",
    author: "Energy Analyst",
    image: "/images/manufacturing.png",
    secondaryImage: "/images/workingspace.png",
    rightColumnHeading: "Energy Transition",
    rightColumnExcerpt: "Falling costs and policy momentum open new investment windows for mini-grids and C&I systems.",
    content: `
      <p>An in-depth analysis of Africa's renewable energy landscape, examining key opportunities for investment, technological innovations driving change, and the challenges that must be overcome for sustainable growth.</p>
      
      <h2>Opportunities</h2>
      <p>Rapidly falling technology costs and policy momentum create new investment windows in solar mini-grids, C&I rooftop systems, and productive-use applications.</p>
      
      <h2>Key Challenges</h2>
      <p>Grid reliability, financing mechanisms, and local capacity development remain central barriers that must be addressed to scale impact in 2025 and beyond.</p>
    `
  }
};

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const article = articles[id];

  // Derive decorative initial and rest of title for layout
  const leadingLetter = article?.title ? article.title.charAt(0) : '';
  const titleRest = article?.title ? article.title.slice(1) : '';

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = article ? article.title : '';
    
    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`, '_blank');
        break;
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <button
            onClick={() => navigate('/newsletter')}
            className="text-[#39366F] hover:text-[#2a2850] font-semibold"
          >
            ← Back to News & Insights
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top back link and share */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/newsletter')}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#39366F]"
          >
            <ChevronLeft size={18} />
            <span className="text-sm font-medium">Back to News & Insights</span>
          </button>
          <div className="hidden sm:flex items-center gap-2 text-gray-600">
            <button onClick={() => handleShare('linkedin')} className="p-2 hover:text-[#39366F]" title="Share on LinkedIn">
              <Linkedin size={18} />
            </button>
            <button onClick={() => handleShare('twitter')} className="p-2 hover:text-[#39366F]" title="Share on X">
              <Twitter size={18} />
            </button>
            <button onClick={() => handleShare('email')} className="p-2 hover:text-[#39366F]" title="Share via Email">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Header + Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title and meta */}
        <header className="mb-8">
          <div className="flex items-start gap-4">
            {leadingLetter && (
              <span className="hidden sm:block text-6xl sm:text-7xl font-black text-[#39366F] leading-none mt-1">
                {leadingLetter}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-gray-900">
              <span className="align-top">{titleRest || article.title}</span>
            </h1>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600">
            <span className="font-medium text-[#39366F]">{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readingTime}</span>
            <span className="hidden sm:inline">•</span>
            <span className="w-full sm:w-auto text-gray-500">By {article.author}</span>
          </div>
        </header>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: main article */}
          <article className="lg:col-span-3">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-[#39366F] prose-h3:text-[#39366F] prose-h2:text-2xl sm:prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:font-black prose-h2:leading-tight prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:font-bold">
              <div
                className="text-gray-800 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            <section className="mt-10">
              <div className="rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm bg-white">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Enjoying this Insight?</h3>
                <p className="text-gray-600 mt-1">Subscribe for more insights.</p>
                <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row gap-3">
                  <label htmlFor="article-email" className="sr-only">Email address</label>
                  <input
                    id="article-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39366F]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-md bg-[#39366F] hover:bg-[#2a2850] text-white font-semibold inline-flex items-center justify-center gap-2"
                    aria-label="Subscribe"
                  >
                    Subscribe
                    <ArrowRight size={16} />
                  </button>
                </form>
                {isSubscribed && (
                  <p className="mt-2 text-sm text-green-600">Thanks! You'll hear from us soon.</p>
                )}
              </div>
            </section>

            {/* Related */}
            <section className="mt-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-6 bg-green-500 rounded"></span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Related Articles</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.values(articles)
                  .filter((a) => a.id !== parseInt(id))
                  .slice(0, 3)
                  .map((rel) => (
                    <Link key={rel.id} to={`/newsletter/article/${rel.id}`} className="group">
                      <div className="h-full rounded-lg border border-gray-200 hover:border-gray-300 overflow-hidden">
                        <div className="flex gap-4 p-4">
                          <img src={rel.image} alt={rel.title} className="w-20 h-20 rounded object-cover flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900 group-hover:text-[#39366F]">{rel.title}</h4>
                            <p className="text-sm text-gray-500">{rel.readingTime}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          </article>

          {/* Right: sidebar */}
          <aside className="lg:col-span-2 space-y-6">
            {/* Hero image */}
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <img src={article.image} alt={article.title} className="w-full h-80 md:h-96 object-cover" />
            </div>

            {/* Heading + excerpt under hero */}
            {(article.rightColumnHeading || article.rightColumnExcerpt) && (
              <div>
                {article.rightColumnHeading && (
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{article.rightColumnHeading}</h3>
                )}
                {article.rightColumnExcerpt && (
                  <p className="text-sm text-gray-600">{article.rightColumnExcerpt}</p>
                )}
              </div>
            )}

            <div className="rounded-xl overflow-hidden border border-gray-200">
              <img
                src={article.secondaryImage || article.image}
                alt={`${article.title} secondary`}
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>

            {/* Note below row */}
            <p className="text-xs text-gray-600">It was among other quotes from users that guides design improvements.</p>

            {/* Quote */}
            <div className="p-4 rounded-lg border-l-4 border-green-500 bg-gray-50 text-gray-700">
              <p className="italic">“We believe in empowering Africa’s innovators through technology and collaboration.”</p>
            </div>
          </aside>
        </div>

        {/* Related heading accent */}
        
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-[#39366F] to-[#5B9BD5] p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">Want to Partner with ERA AXIS?</h3>
              <p className="text-white/90 mt-1">Explore partnership opportunities and create impact together.</p>
            </div>
            <Link
              to="/partner"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#39366F] font-semibold hover:bg-gray-100"
            >
              Explore Partnership Opportunities
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArticlePage;
