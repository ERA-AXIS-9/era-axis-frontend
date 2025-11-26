import React from 'react';
import { Check } from 'lucide-react';

const catalogItems = [
  { name: '3D Printers', specs: 'FDM & Resin models available' },
  { name: 'Laser Cutter', specs: 'CO2 laser, 600x400mm bed' },
  { name: 'CNC Router', specs: 'Wood, plastic, soft metals' },
  { name: 'Oscilloscope', specs: 'Digital, 100MHz bandwidth' },
  { name: 'Power Supply', specs: 'Variable DC, 0-30V, 0-5A' },
  { name: 'Drill Press', specs: 'Bench-mounted, variable speed' }
];

const EquipmentCatalog = () => {
  return (
    <section id="equipment-catalog" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Equipment Catalog
          </h2>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {catalogItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-[#39366F]/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <Check size={18} className="text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-black mb-1 group-hover:text-[#39366F] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {item.specs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Note */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <p className="text-sm text-blue-900">
            <span className="font-semibold">📋 Note:</span> Equipment availability may vary. Contact us to confirm specific tools before your visit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EquipmentCatalog;
