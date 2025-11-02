import React from 'react';
import EducationNavbar from '../../../components/EducationNavbar';
import EducationHero from '../../../components/pages/education/EducationHero';
import ProgramOptions from '../../../components/pages/education/ProgramOptions';
import StudentSuccess from '../../../components/pages/education/StudentSuccess';
import HowEnrollmentWorks from '../../../components/pages/education/HowEnrollmentWorks';
import WhoBenefits from '../../../components/pages/education/WhoBenefits';
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
      <ProgramsEnrollment />
      <StudentSuccess />
      <ReadyToStart />
    </div>
  );
};

export default EducationPage;