import React, { useState } from 'react';

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      console.log('Newsletter subscription:', email);
      alert('Thanks for subscribing!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-[#39366F] to-[#2a2850] rounded-2xl border-2 border-[#39366F] p-8 sm:p-12 shadow-lg">
          
          {/* Newsletter Content */}
          <div className="max-w-3xl mx-auto">
            
            {/* Header Text */}
            <div className="text-left mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                <span className="text-white">Stay updated on our latest events — </span>
                <span className="text-yellow-300">Join Our Newsletter.</span>
              </h3>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#39366F] focus:ring-2 focus:ring-[#39366F]/20 text-base transition-all"
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-[#39366F] hover:bg-[#2a2850] text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 text-left mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default NewsletterCTA;
