import React from 'react';
import Hero from '../../../components/pages/home/Hero';
import ImpactStats from '../../../components/pages/home/ImpactStats';
import About from '../../../components/pages/home/About';
import Pillars from '../../../components/pages/home/Pillars';
import Projects from '../../../components/pages/home/Projects';
import Testimonials from '../../../components/pages/home/Testimonials';
import Partners from '../../../components/pages/home/Partners';
import NewsInsights from '../../../components/pages/home/NewsInsights';
import Gallery from '../../../components/pages/home/Gallery';
import StorePromoBanner from '../../../components/pages/common/StorePromoBanner';
import Newsletter from '../../../components/pages/home/Newsletter';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ImpactStats />
      <About />
      <Pillars />
      <Projects />
      <Testimonials />
      <Partners />
      <NewsInsights />
      <Gallery />
      <StorePromoBanner 
        headline="Explore Our Official Store"
        bodyText="Discover the tools, components, and materials that power innovation at ERA AXIS. From project supplies to lab equipment, everything you need to create is here."
        ctaText="Visit the Store →"
      />
      <Newsletter />
    </div>
  );
};

export default HomePage;