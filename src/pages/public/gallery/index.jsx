import React, { useState } from 'react';
import Breadcrumb from '../../../components/pages/gallery/Breadcrumb';
import GalleryHero from '../../../components/pages/gallery/GalleryHero';
import FeaturedStory from '../../../components/pages/gallery/FeaturedStory';
import FilterNavigation from '../../../components/pages/gallery/FilterNavigation';
import OrganizedContentGrid from '../../../components/pages/gallery/OrganizedContentGrid';
import FeaturedJourney from '../../../components/pages/gallery/FeaturedJourney';
import VideoSection from '../../../components/pages/gallery/VideoSection';
import NewsletterCTA from '../../../components/pages/gallery/NewsletterCTA';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      <GalleryHero />
      <FeaturedStory />
      <FilterNavigation 
        onFilterChange={setActiveFilter}
        onSearchChange={setSearchTerm}
      />
      <OrganizedContentGrid 
        activeFilter={activeFilter}
        searchTerm={searchTerm}
      />
      
      {/* Featured Journey Section */}
      <FeaturedJourney />
      
      {/* Video Section */}
      <VideoSection />
      
      {/* Newsletter CTA */}
      <NewsletterCTA />
    </div>
  );
};

export default GalleryPage;