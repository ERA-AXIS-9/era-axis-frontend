import React from 'react';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import ProjectDetailHero from '../../../components/pages/projects/ProjectDetailHero';
import ProjectOverview from '../../../components/pages/projects/ProjectOverview';
import ProjectChallenges from '../../../components/pages/projects/ProjectChallenges';
import ProjectGallery from '../../../components/pages/projects/ProjectGallery';
import ProjectImpact from '../../../components/pages/projects/ProjectImpact';
import RelatedProjects from '../../../components/pages/projects/RelatedProjects';
import ProjectDetailCTA from '../../../components/pages/projects/ProjectDetailCTA';

const EcoWatchPage = () => {
  const projectData = {
    title: 'EcoWatch – Air Quality Monitoring',
    category: 'Environment',
    description: 'A real-time air quality monitoring system that tracks pollution levels across multiple locations and provides actionable insights for communities.',
    status: 'Active',
    year: '2022',
    image: '/images/Homepage/ECOWatch1.png'
  };

  const overview = {
    description: 'EcoWatch is a comprehensive air quality monitoring platform designed to help communities track and respond to environmental pollution. The system collects data from IoT sensors deployed across urban and rural areas.',
    details: 'By providing real-time alerts and historical trends, EcoWatch empowers local governments and citizens to make informed decisions about air quality management and public health interventions.',
    techStack: ['React', 'Node.js', 'MongoDB', 'IoT Sensors', 'AWS'],
    timeline: '2 months',
    teamSize: '2 developers + 2 electronic engineers'
  };

  const challenges = [
    {
      type: 'challenge',
      description: 'Tracking air quality across multiple locations with limited infrastructure and connectivity issues in remote areas.'
    },
    {
      type: 'solution',
      description: 'Deployed low-cost IoT sensors with offline data storage and batch synchronization when connectivity is available.'
    },
    {
      type: 'results',
      description: 'Successfully monitoring 50+ locations with 99% uptime and providing real-time alerts to 10,000+ users.'
    }
  ];

  const metrics = [
    { value: '5', label: 'Monitoring Stations' },
    { value: '5', label: 'Communities Impacted' },
    { value: '99.2%', label: 'System Uptime' }
  ];

  const relatedProjects = [
    {
      title: 'Smart Farm IoT',
      description: 'Agricultural monitoring system',
      image: '/images/Homepage/agriz planter.png',
      link: '#'
    },
    {
      title: 'EduConnect Platform',
      description: 'Digital learning platform',
      image: '/images/Homepage/PXL_20250612_144423482.MP.jpg',
      link: '#'
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions',
      image: '/images/Homepage/PXL_20250913_140827397.MP.jpg',
      link: '/services/software/custom'
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

export default EcoWatchPage;
