import React from 'react';
import EducationNavbar from '../../../components/EducationNavbar';
import Breadcrumb from '../../../components/pages/education/Breadcrumb';
import EducationHero from '../../../components/pages/education/EducationHero';
import WhoBenefits from '../../../components/pages/education/WhoBenefits';
import HowWeTeach from '../../../components/pages/education/HowWeTeach';
import ProgramsEnrollment from '../../../components/pages/education/ProgramsEnrollment';
import StudentStories from '../../../components/pages/education/StudentStories';
import ImpactMetrics from '../../../components/pages/education/ImpactMetrics';
import ReadyToStart from '../../../components/pages/education/ReadyToStart';

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <EducationNavbar />
      <Breadcrumb />
      <EducationHero />
      <WhoBenefits />
      <HowWeTeach />
      <ProgramsEnrollment />
      <StudentStories />
      <ImpactMetrics />
      <ReadyToStart />
    </div>
  );
};

export default EducationPage;