import React from 'react';
import Breadcrumb from '../../../components/pages/manufacturing/Breadcrumb';
import MaintenanceHero from '../../../components/pages/manufacturing/MaintenanceHero';
import MaintenanceServices from '../../../components/pages/manufacturing/MaintenanceServices';
import MaintenanceWorkflow from '../../../components/pages/manufacturing/MaintenanceWorkflow';
import ServicePlans from '../../../components/pages/manufacturing/ServicePlans';
import ClientTestimonials from '../../../components/pages/manufacturing/ClientTestimonials';
import MaintenanceCTA from '../../../components/pages/manufacturing/MaintenanceCTA';

const MaintenancePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      <MaintenanceHero />
      <MaintenanceServices />
      <MaintenanceWorkflow />
      <ServicePlans />
      <ClientTestimonials />
      <MaintenanceCTA />
    </div>
  );
};

export default MaintenancePage;