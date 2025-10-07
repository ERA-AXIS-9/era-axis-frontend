import React from 'react';
import FaqHero from '../../../components/pages/faq/FaqHero';
import FaqCategories from '../../../components/pages/faq/FaqCategories';
import FaqSupport from '../../../components/pages/faq/FaqSupport';

const FaqPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <FaqHero />
      <FaqCategories />
      <FaqSupport />
    </div>
  );
};

export default FaqPage;