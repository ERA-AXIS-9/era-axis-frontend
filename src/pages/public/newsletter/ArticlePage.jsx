import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Mail, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { articlesData } from '../../../data/articlesData';

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const article = articlesData[id];

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
                {Object.values(articlesData)
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
