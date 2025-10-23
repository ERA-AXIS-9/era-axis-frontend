import React from 'react';

const ProjectDetailCTA = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
          
          <h2 className="text-2xl font-bold text-black mb-4">
            Interested in a similar solution?
          </h2>
          
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can build something tailored to your needs.
          </p>
          
          <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-3 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailCTA;
