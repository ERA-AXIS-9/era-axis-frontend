import React from 'react';
import EducationNavbar from '../../../components/EducationNavbar';
import EducationHero from '../../../components/pages/education/EducationHero';
import ProgramOptions from '../../../components/pages/education/ProgramOptions';
import StudentSuccess from '../../../components/pages/education/StudentSuccess';
import HowEnrollmentWorks from '../../../components/pages/education/HowEnrollmentWorks';
import WhoBenefits from '../../../components/pages/education/WhoBenefits';
import StorePromoBanner from '../../../components/pages/common/StorePromoBanner';
import ProgramsEnrollment from '../../../components/pages/education/ProgramsEnrollment';
import ReadyToStart from '../../../components/pages/education/ReadyToStart';

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <EducationNavbar />
      <EducationHero />
      <ProgramOptions />
      <HowEnrollmentWorks />
      <WhoBenefits />
      <StorePromoBanner 
        headline="Need to Book a Lab and Stock Up?"
        bodyText="Combine lab access, specialized tools, and learning kits in one easy checkout at our official store."
        ctaText="View Lab Tools & Kits →"
      />
      <ProgramsEnrollment />
      <StudentSuccess />
      <ReadyToStart />
    </div>
  );
};

export default EducationPage;