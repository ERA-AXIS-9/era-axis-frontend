import React from 'react';

const DashboardShowcase = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Dashboard Showcase
          </h2>
        </div>

        {/* Dashboard Preview - Simple Placeholder */}
        <div className="bg-gray-100 rounded-xl p-16 text-center border border-gray-200">
          <p className="text-gray-400 text-sm">
            Interactive sample of our IoT dashboard (coming soon). Clean, intuitive, and fully customizable.
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Custom dashboards built to fit your organization's needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
