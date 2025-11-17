import React from 'react';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import ProjectDetailHero from '../../../components/pages/projects/ProjectDetailHero';
import ProjectOverview from '../../../components/pages/projects/ProjectOverview';
import ProjectChallenges from '../../../components/pages/projects/ProjectChallenges';
import ProjectGallery from '../../../components/pages/projects/ProjectGallery';
import ProjectImpact from '../../../components/pages/projects/ProjectImpact';
import RelatedProjects from '../../../components/pages/projects/RelatedProjects';
import ProjectDetailCTA from '../../../components/pages/projects/ProjectDetailCTA';

const SafeDrivePage = () => {
  const projectData = {
    title: 'SafeDrive',
    category: 'Transportation',
    description: 'An intelligent road safety innovation that detects driver fatigue, alcohol influence, and risky driving behaviors. It provides real-time alerts to prevent accidents, protect lives, and promote safer transportation systems across Africa.',
    status: 'Active',
    year: '2024',
    image: '/images/Homepage/ERA SAFEDRIVE.jpeg'
  };

  const overview = {
    description: 'SafeDrive is a comprehensive road safety system designed to detect and prevent dangerous driving behaviors before they lead to accidents. The system uses advanced sensors and AI algorithms to monitor driver condition in real-time.',
    details: 'By providing immediate alerts and intervention mechanisms, SafeDrive helps reduce road accidents and save lives across African transportation networks. The technology is adaptable to various vehicle types and driving conditions.',
    techStack: ['React', 'Python', 'TensorFlow', 'IoT Sensors', 'GPS', 'Cloud Computing'],
    timeline: '8 months',
    teamSize: '6 developers + 3 engineers + 2 safety experts'
  };

  const challenges = [
    {
      type: 'challenge',
      description: 'Developing accurate detection algorithms for diverse driving conditions and driver behaviors across different African regions.'
    },
    {
      type: 'solution',
      description: 'Implemented machine learning models trained on extensive local driving data and adapted for various road conditions and vehicle types.'
    },
    {
      type: 'results',
      description: 'Achieved 94% accuracy in detecting risky behaviors and helped reduce accident rates by 40% in pilot programs.'
    }
  ];

  const metrics = [
    { value: '94%', label: 'Detection Accuracy' },
    { value: '40%', label: 'Accident Reduction' },
    { value: '15K+', label: 'Active Installations' }
  ];

  const relatedProjects = [
    {
      title: 'AgrizPlanter',
      description: 'Automated rice planting device',
      image: '/images/Homepage/agriz planter.png',
      link: '#'
    },
    {
      title: 'EcoWatch',
      description: 'Air quality monitoring system',
      image: '/images/Homepage/ECOWATCH.png',
      link: '/projects/ecowatch'
    },
    {
      title: 'IoT & Data Platforms',
      description: 'IoT data management solutions',
      image: '/images/Homepage/PXL_20240913_102510357.MP.jpg',
      link: '/services/software/iot'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SoftwareNavbar />
      <ProjectDetailHero project={projectData} />
      <ProjectOverview overview={overview} />
      <ProjectChallenges challenges={challenges} />
      <ProjectGallery />
      <ProjectImpact metrics={metrics} />
      <RelatedProjects projects={relatedProjects} />
      <ProjectDetailCTA />
    </div>
  );
};

export default SafeDrivePage;
