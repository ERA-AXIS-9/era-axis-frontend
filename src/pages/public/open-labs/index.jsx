import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import OpenLabsNavbar from '../../../components/OpenLabsNavbar';
import Breadcrumb from '../../../components/pages/open-labs/Breadcrumb';
import OpenLabsHero from '../../../components/pages/open-labs/OpenLabsHero';
import AboutTheLabs from '../../../components/pages/open-labs/AboutTheLabs';
import WhoCanUse from '../../../components/pages/open-labs/WhoCanUse';
import FacilitiesPreview from '../../../components/pages/open-labs/FacilitiesPreview';
import MembershipPlans from '../../../components/pages/open-labs/MembershipPlans';
import StorePromoBanner from '../../../components/pages/common/StorePromoBanner';
import ProjectShowcase from '../../../components/pages/open-labs/ProjectShowcase';
import OpenLabsTestimonials from '../../../components/pages/open-labs/OpenLabsTestimonials';
import OpenLabsCTA from '../../../components/pages/open-labs/OpenLabsCTA';

const FacilitiesPage = React.lazy(() => import('./facilities.jsx'));
const MembershipPage = React.lazy(() => import('./MembershipPage.jsx'));
const ProjectsPage = React.lazy(() => import('./ProjectsPage.jsx'));
const BookSessionPage = React.lazy(() => import('./BookSessionPage.jsx'));

const OpenLabsMain = () => (
  <div className="min-h-screen bg-white">
    <OpenLabsNavbar />
    <Breadcrumb />
    <OpenLabsHero />
    <AboutTheLabs />
    <WhoCanUse />
    <FacilitiesPreview />
    <MembershipPlans />
    <StorePromoBanner 
      headline="Enhance Your Lab Experience"
      bodyText="Access our curated collection of tools, components, and equipment designed for makers and innovators. Everything you need to bring your projects to life."
      ctaText="Explore Lab Equipment →"
    />
    <ProjectShowcase />
    <OpenLabsTestimonials />
    <OpenLabsCTA />
  </div>
);

const OpenLabsPage = () => {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <Routes>
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/book-session" element={<BookSessionPage />} />
        <Route index element={<OpenLabsMain />} />
      </Routes>
    </Suspense>
  );
};

export default OpenLabsPage;