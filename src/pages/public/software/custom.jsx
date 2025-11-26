import React from 'react';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import CustomSoftwareHero from '../../../components/pages/software/CustomSoftwareHero';
import CustomWhyChooseUs from '../../../components/pages/software/CustomWhyChooseUs';
import OurProcess from '../../../components/pages/software/OurProcess';
import CaseStudyHighlight from '../../../components/pages/software/CaseStudyHighlight';
import SoftwareCTA from '../../../components/pages/software/SoftwareCTA';

const CustomSoftwarePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SoftwareNavbar />
      <CustomSoftwareHero />
      <CustomWhyChooseUs />
      <OurProcess />
      <CaseStudyHighlight />
      <SoftwareCTA />
    </div>
  );
};

export default CustomSoftwarePage;
