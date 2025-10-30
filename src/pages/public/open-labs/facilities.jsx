import React from 'react';
import Breadcrumb from '../../../components/pages/open-labs/Breadcrumb';
import FacilitiesHero from '../../../components/pages/open-labs/FacilitiesHero';
import FacilityCategories from '../../../components/pages/open-labs/FacilityCategories';
import FeaturedEquipment from '../../../components/pages/open-labs/FeaturedEquipment';
import EquipmentCatalog from '../../../components/pages/open-labs/EquipmentCatalog';
import LabAccessTraining from '../../../components/pages/open-labs/LabAccessTraining';
import FacilitiesCTA from '../../../components/pages/open-labs/FacilitiesCTA';

const FacilitiesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      <FacilitiesHero />
      <FacilityCategories />
      <FeaturedEquipment />
      <EquipmentCatalog />
      <LabAccessTraining />
      <FacilitiesCTA />
    </div>
  );
};

export default FacilitiesPage;
