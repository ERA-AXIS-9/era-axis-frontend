import React from 'react';
import HeroSection from '../../../components/pages/home/HeroSection';
import ImpactStats from '../../../components/pages/home/ImpactStats';
import AboutPreview from '../../../components/pages/home/AboutPreview';
import PillarsSection from '../../../components/pages/home/PillarsSection';
import FeaturedProjects from '../../../components/pages/home/FeaturedProjects';
import ImpactSection from '../../../components/pages/home/ImpactSection';
import Testimonials from '../../../components/pages/home/Testimonials';
import Partners from '../../../components/pages/home/Partners';
import NewsAndInsights from '../../../components/pages/home/NewsAndInsights';
import MediaGallery from '../../../components/pages/home/MediaGallery';
import CtaSection from '../../../components/pages/home/CtaSection';
import Footer from '../../../components/layout/Footer';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ImpactStats />
      <AboutPreview />
      <PillarsSection />
      <FeaturedProjects />
      <ImpactSection />
      <Testimonials />
      <Partners />
      <NewsAndInsights />
      <MediaGallery />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default HomePage;