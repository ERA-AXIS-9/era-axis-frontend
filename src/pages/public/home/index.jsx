import React from 'react';
import Hero from '../../../components/Hero';
import ImpactStats from '../../../components/pages/home/ImpactStats';
import About from '../../../components/About';
import Pillars from '../../../components/Pillars';
import Projects from '../../../components/Projects';
import Impact from '../../../components/Impact';
import Testimonials from '../../../components/Testimonials';
import Partners from '../../../components/Partners';
import NewsInsights from '../../../components/NewsInsights';
import Gallery from '../../../components/Gallery';
import Newsletter from '../../../components/Newsletter';
import Footer from '../../../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ImpactStats />
      <About />
      <Pillars />
      <Projects />
      <Impact />
      <Testimonials />
      <Partners />
      <NewsInsights />
      <Gallery />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;