import React from 'react';
import { useLocation } from 'react-router-dom';
import EducationNavbar from '../../../components/EducationNavbar';
import ManufacturingNavbar from '../../../components/ManufacturingNavbar';
import OpenLabsNavbar from '../../../components/OpenLabsNavbar';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import Breadcrumb from '../../../components/pages/contact/Breadcrumb';
import ContactHero from '../../../components/pages/contact/ContactHero';
import MapSection from '../../../components/pages/contact/MapSection';
import PartnershipCTA from '../../../components/pages/contact/PartnershipCTA';
import FAQ from '../../../components/pages/contact/FAQ';

const ContactPage = () => {
  const location = useLocation();
  
  // Determine which service navbar to show based on the state or previous path
  const serviceContext = location.state?.from || '';
  
  // Check if coming from a service page
  const isFromEducation = serviceContext.includes('education');
  const isFromManufacturing = serviceContext.includes('manufacturing');
  const isFromOpenLabs = serviceContext.includes('open-labs');
  const isFromSoftware = serviceContext.includes('software');
  
  return (
    <div>
      {/* Show appropriate service navbar if coming from a service */}
      {isFromEducation && <EducationNavbar />}
      {isFromManufacturing && <ManufacturingNavbar />}
      {isFromOpenLabs && <OpenLabsNavbar />}
      {isFromSoftware && <SoftwareNavbar />}
      
      <Breadcrumb />
      <ContactHero />
      <MapSection />
      <PartnershipCTA />
      <FAQ />
    </div>
  );
};

export default ContactPage;