import React from 'react';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import IoTHero from '../../../components/pages/software/IoTHero';
import KeyFeatures from '../../../components/pages/software/KeyFeatures';
import IndustryApplications from '../../../components/pages/software/IndustryApplications';
import DashboardShowcase from '../../../components/pages/software/DashboardShowcase';
import HighlightedProject from '../../../components/pages/software/HighlightedProject';
import WhyIoTMatters from '../../../components/pages/software/WhyIoTMatters';
import IoTTestimonial from '../../../components/pages/software/IoTTestimonial';
import SoftwareCTA from '../../../components/pages/software/SoftwareCTA';

const IoTPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SoftwareNavbar />
      <IoTHero />
      <KeyFeatures />
      <IndustryApplications />
      <DashboardShowcase />
      <HighlightedProject />
      <WhyIoTMatters />
      <IoTTestimonial />
      <SoftwareCTA />
    </div>
  );
};

export default IoTPage;
