import React from 'react';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import ProjectDetailHero from '../../../components/pages/projects/ProjectDetailHero';
import ProjectOverview from '../../../components/pages/projects/ProjectOverview';
import ProjectChallenges from '../../../components/pages/projects/ProjectChallenges';
import ProjectVideos from '../../../components/pages/projects/ProjectVideos';
import ProjectGallery from '../../../components/pages/projects/ProjectGallery';
import ProjectImpact from '../../../components/pages/projects/ProjectImpact';
import RelatedProjects from '../../../components/pages/projects/RelatedProjects';
import ProjectDetailCTA from '../../../components/pages/projects/ProjectDetailCTA';

const AgrizPlanterPage = () => {
  const projectData = {
    title: 'AgrizPlanter',
    category: 'Agriculture',
    description: 'An automated rice planting device designed to eliminate the stress of manual transplanting, increase planting speed and accuracy, and improve farmers\' efficiency and productivity.',
    status: 'In Progress',
    year: '2024',
    image: '/images/agrizplanter/agrizplanter.jpg'
  };

  const overview = {
    description: 'AgrizPlanter is a revolutionary agricultural automation device that transforms the traditional rice planting process. The system mechanizes the tedious task of rice seedling transplantation, making it faster and more efficient.',
    details: 'By eliminating manual labor requirements and improving planting precision, AgrizPlanter helps farmers increase their yield while reducing physical strain and operational costs. The technology is designed for small to medium-sized farms across African agricultural communities.',
    techStack: ['Mechanical Engineering', 'Arduino', 'GPS Navigation', 'Sensor Technology', 'Solar Power'],
    timeline: '6 months',
    teamSize: '4 engineers + 2 agricultural experts'
  };

  const challenges = [
    {
      type: 'challenge',
      description: 'Designing an affordable automated solution that works effectively in diverse rice field conditions and terrains across different African regions.'
    },
    {
      type: 'solution',
      description: 'Developed a modular design with adjustable planting mechanisms and terrain-adaptive wheels that can handle various soil types and field conditions.'
    },
    {
      type: 'results',
      description: 'Achieved 75% reduction in planting time and 30% increase in planting accuracy compared to manual methods, serving over 200 farmers in pilot programs.'
    }
  ];

  const metrics = [
    { value: '75%', label: 'Time Reduction' },
    { value: '30%', label: 'Accuracy Increase' },
    { value: '200+', label: 'Farmers Served' }
  ];

  const relatedProjects = [
    {
      title: 'SafeDrive',
      description: 'Intelligent road safety system',
      image: '/images/safedrive/safedrive.jpg',
      link: '/projects/safedrive'
    },
    {
      title: 'EcoWatch',
      description: 'Air quality monitoring system',
      image: '/images/Homepage/ECOWATCH.png',
      link: '/projects/ecowatch'
    },
    {
      title: 'Smart Farm IoT',
      description: 'Agricultural monitoring system',
      image: '/images/Homepage/PXL_20250913_140827397.MP.jpg',
      link: '#'
    }
  ];

  const galleryItems = [
    { image: '/images/agrizplanter/agrizplanter.jpg', alt: 'AgrizPlanter device in action' },
    { image: '/images/agrizplanter/agrizplanter1.jpg', alt: 'AgrizPlanter field deployment' }
  ];

  const videos = [
    { 
      src: '/videos/agrizplanter/agrizplanter.mp4', 
      title: 'Development Progress',
      description: 'Watch the AgrizPlanter development progress and crafting'
    },
    { 
      src: '/videos/agrizplanter/agrizplanter1.mp4', 
      title: 'Development in Action',
      description: 'See the AgrizPlanter being crafted during the development phase'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SoftwareNavbar />
      <ProjectDetailHero project={projectData} />
      <ProjectOverview overview={overview} />
      <ProjectChallenges challenges={challenges} />
      <ProjectVideos videos={videos} />
      <ProjectGallery items={galleryItems} galleryLink="/projects/agrizplanter/gallery" />
      <ProjectImpact metrics={metrics} />
      <RelatedProjects projects={relatedProjects} />
      <ProjectDetailCTA />
    </div>
  );
};

export default AgrizPlanterPage;
