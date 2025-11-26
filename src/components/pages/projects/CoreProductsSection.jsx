import React from 'react';
import { CheckCircle } from 'lucide-react';

const CoreProductsSection = ({ products }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Core Digital Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            ERA Technologies delivers three powerful, integrated solutions designed to address the core operational needs of African businesses, schools, and startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              <div className="space-y-3">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Why ERA Technologies?
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Built in Ghana, for Africa</strong> – solving operational problems with local context and affordability.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Fast, secure, and scalable</strong> – suitable for growing businesses and institutions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Integrated with ERA AXIS solutions</strong> – works seamlessly with IoT devices, student projects, and enterprise tools developed in-house.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CoreProductsSection;
