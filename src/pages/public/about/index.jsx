import React from 'react';
import Breadcrumb from '../../../components/pages/about/Breadcrumb';
import AboutHero from '../../../components/pages/about/AboutHero';
import OurStory from '../../../components/pages/about/OurStory';
import MissionVision from '../../../components/pages/about/MissionVision';
import OurDifference from '../../../components/pages/about/OurDifference';
import TeamSection from '../../../components/pages/about/TeamSection';
import AwardsRecognition from '../../../components/pages/about/AwardsRecognition';
import PartnerCTA from '../../../components/pages/about/PartnerCTA';

const AboutPage = () => {
  return (
    <div>
      <Breadcrumb />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <OurDifference />
      {/* <TeamSection /> */}
      <AwardsRecognition />
      <PartnerCTA />
    </div>
  );
};

export default AboutPage;