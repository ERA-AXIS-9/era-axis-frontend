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
      <Newsletter />
    </div>
  );
};

export default HomePage;