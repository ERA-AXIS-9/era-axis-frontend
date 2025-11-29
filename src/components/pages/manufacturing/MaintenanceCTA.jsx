import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MaintenanceCTA = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#39366F] to-[#2a2850]">
      
      {/* CTA Container - Full Width */}
      <motion.div 
        className="w-full py-8 sm:py-10 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        
        {/* Heading */}
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Need repair support?
        </motion.h2>

        {/* Subtext */}
        <motion.p 
          className="text-lg text-white/90 mb-6 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get your equipment back up and running. Contact us for fast, reliable maintenance.
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="/services/manufacturing/book-technician"
            className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
          >
            Book a Service
            <ChevronRight size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MaintenanceCTA;
