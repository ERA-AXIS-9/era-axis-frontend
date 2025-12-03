import React from 'react';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import SoftwareHero from '../../../components/pages/software/SoftwareHero';
import OurServices from '../../../components/pages/software/OurServices';
import Projects from '../../../components/pages/home/Projects';
import WhyChooseUs from '../../../components/pages/software/WhyChooseUs';
import SoftwareCTA from '../../../components/pages/software/SoftwareCTA';

const SoftwarePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SoftwareNavbar />
      <SoftwareHero />
      <OurServices />
      <Projects />
      <WhyChooseUs />
      <SoftwareCTA />
    </div>
  );
};

export default SoftwarePage;