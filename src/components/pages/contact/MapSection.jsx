import React from 'react';

const MapSection = () => {
  return (
    <section className="pt-4 pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Visit Our Location
          </h2>
          <p className="text-base text-gray-600 max-w-2xl">
            Located in the heart of Ghana's innovation district. We welcome visits for tours, meetings, and collaboration discussions.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
          
          {/* Map Container */}
          <div className="relative h-80 md:h-96 bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.8793207774065!2d-1.7167443000000002!3d4.9597231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe77b000eec9f9b%3A0x26cc1a1276bcd1c1!2sERA%20Axis%20Hub!5e0!3m2!1sen!2sgh!4v1764130262261!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="ERA AXIS Location in Ghana"
            ></iframe>
          </div>

          {/* Location Details Bar */}
          <div className="bg-gradient-to-r from-[#39366F] to-[#2a2850] p-6 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">ERA Axis Hub</h3>
                <p className="text-base text-white/90">Takoradi, Ghana • Innovation District</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://maps.app.goo.gl/GUM8jHMNA1q3vUDr5?g_st=atm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapSection;
