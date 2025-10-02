import React from 'react';

const NewsAndInsights = () => {
  const articles = [
    {
      title: "ERA AXIS Launches New Coding Bootcamp for Youth",
      excerpt: "Our new program aims to train 500 young people in software development by 2024.",
      date: "October 1, 2023",
      category: "Announcement"
    },
    {
      title: "How Circular Manufacturing is Changing Lives",
      excerpt: "Exploring the impact of our e-waste upcycling initiative in local communities.",
      date: "September 15, 2023",
      category: "Impact Story"
    },
    {
      title: "Meet the 2023 Cohort of ERA AXIS Innovators",
      excerpt: "Highlighting the talented individuals driving change through technology.",
      date: "August 28, 2023",
      category: "Community"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">News & Insights</h2>
          <button className="text-[#39366F] font-medium hover:text-[#2a2850]">
            See More
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <span className="inline-block bg-[#39366F] bg-opacity-10 text-[#39366F] text-xs px-2 py-1 rounded-full mb-2">
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="text-sm text-gray-500">{article.date}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndInsights;