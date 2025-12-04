import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ArrowRight } from 'lucide-react';
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
      {/* Top back link */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={() => navigate('/newsletter')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#39366F]"
        >
          <ChevronLeft size={18} />
          <span className="text-sm font-medium">Back to News & Insights</span>
        </button>
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
              <span className="sm:hidden align-top">
                <span className="text-[#39366F]">{leadingLetter}</span>{titleRest}
              </span>
              <span className="hidden sm:inline align-top">{titleRest}</span>
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
          </article>

          {/* Right: sidebar */}
          <aside className="lg:col-span-2 space-y-6">
            {/* Hero image */}
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <img src={article.image} alt={article.title} className="w-full h-80 md:h-96 object-cover object-bottom" />
            </div>

            {/* Heading + excerpt under hero */}
            {(article.rightColumnHeading || article.rightColumnExcerpt) && (
              <div>
                {article.rightColumnHeading && (
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">{article.rightColumnHeading}</h3>
                )}
                {article.rightColumnExcerpt && (
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{article.rightColumnExcerpt}</p>
                )}
              </div>
            )}

            <div className="rounded-xl overflow-hidden border border-gray-200">
              <img
                src={article.secondaryImage || article.image}
                alt={`${article.title} secondary`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover object-center"
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
        
        <section className="mt-16 rounded-2xl bg-[#39366F] p-6 sm:p-8 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold">Want to Partner with ERA AXIS?</h3>
              <p className="text-white/90 mt-2 text-sm sm:text-base">Explore partnership opportunities and create impact together.</p>
            </div>
            <Link
              to="/partner"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-lg bg-white text-[#39366F] font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap flex-shrink-0 text-sm sm:text-base"
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
