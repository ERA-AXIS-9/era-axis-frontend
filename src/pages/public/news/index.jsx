import React from 'react';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import NewsHero from '../../../components/pages/news/NewsHero';
import NewsCategories from '../../../components/pages/news/NewsCategories';
import NewsGrid from '../../../components/pages/news/NewsGrid';
import NewsCTA from '../../../components/pages/news/NewsCTA';

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SoftwareNavbar />
      <NewsHero />
      <NewsCategories />
      <NewsGrid />
      <NewsCTA />
    </div>
  );
};

export default NewsPage;
