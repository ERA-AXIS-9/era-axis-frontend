import React from 'react';
import EducationNavbar from '../../../components/EducationNavbar';
import Breadcrumb from '../../../components/pages/education/Breadcrumb';
import EnrollmentHero from '../../../components/pages/education/EnrollmentHero';
import ProgramOptions from '../../../components/pages/education/ProgramOptions';
import HowEnrollmentWorks from '../../../components/pages/education/HowEnrollmentWorks';
import WhatStudentsSay from '../../../components/pages/education/WhatStudentsSay';
import ReadyToBegin from '../../../components/pages/education/ReadyToBegin';

const EnrollmentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <EducationNavbar />
      <Breadcrumb />
      <EnrollmentHero />
      <ProgramOptions />
      <HowEnrollmentWorks />
      <WhatStudentsSay />
      <ReadyToBegin />
    </div>
  );
};

export default EnrollmentPage;