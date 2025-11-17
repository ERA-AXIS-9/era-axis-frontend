import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsGrid = () => {
  const articles = [
    {
      title: "ERA AXIS Among Top 32 Finalists in NEF 2025",
      excerpt: "Selected from 350+ entries across 38 African countries for STEM-driven e-waste innovation in the Africa Energy Innovation Challenge.",
      fullContent: `We are proud to announce that ERA AXIS has been selected among the Top 32 finalists out of more than 350 entries received from 38 countries across Africa in the 10th Africa Energy Innovation Challenge (AEIC), organized by the Nigeria Energy Forum (NEF). 

Themed "Transforming Energy Transition, Youth Employment & Local Manufacturing," this prestigious competition celebrates Africa's most promising innovators driving clean-energy and manufacturing transformation.

Representing Ghana, ERA AXIS is competing under Track 3: Greening Local Manufacturing & Value Addition with the project titled:

"Driving Green Manufacturing and Job Creation through Practical STEM and E-Waste Innovation in Ghana."

ERA AXIS's solution showcases how practical STEM education and e-waste innovation can empower youth to design and locally manufacture affordable clean technologies. By reusing discarded electronics, applying reverse engineering, and integrating software development, ERA AXIS reduces dependency on imported kits, lowers production costs, and creates pathways for youth employment and green manufacturing.

As one of Africa's Top 32 finalists, ERA AXIS proudly represents Ghana, demonstrating how STEM-driven local innovation can create green jobs, strengthen local industries, and contribute to a sustainable circular economy. We remain committed to making STEM practical, affordable, and inclusive empowering young Africans to turn waste into innovation and ideas into lasting impact.`,
      image: "/images/workingspace.png",
      date: "November 2024",
      category: "Achievement",
      author: "ERA AXIS Team",
      readTime: "5 min read",
      slug: "nef-2025-finalist"
    },
    {
      title: "ERA AXIS Selected for Youth Ecopreneur Programme 2025",
      excerpt: "Chosen from hundreds of global applications for practical STEM education innovation in the prestigious YECO programme.",
      fullContent: `We're excited to announce that ERA AXIS has been selected to participate in the 2025 Youth Ecopreneur Programme (YECO), a prestigious global initiative empowering young entrepreneurs driving sustainable, green, and inclusive innovations across the world.

Out of hundreds of applications from around the globe, ERA AXIS was chosen for its groundbreaking work in making STEM education practical, affordable, and impact-driven, enabling young Africans to design real-world solutions from locally available and recycled materials.

The YECO Programme, organized by the International Trade Centre (ITC) and Ye! Community, supports youth-led ventures tackling environmental and social challenges through entrepreneurship. As part of this year's cohort, ERA AXIS will join other exceptional ecopreneurs to strengthen our climate-smart innovation strategies, expand partnerships, and scale our impact across Africa.

"This opportunity reinforces our mission to empower Africa's innovators and accelerate homegrown climate solutions. YECO provides the perfect platform to exchange ideas, build collaborations, and position ERA AXIS at the forefront of sustainable innovation on the continent."
— John Ransford Arthur, Founder & CEO, ERA AXIS

Through the YECO journey, ERA AXIS aims to deepen its work in STEM for All, advance circular manufacturing, and grow its Open Labs network creating pathways for African youth to design, build, and commercialize sustainable technologies.

Stay tuned as we share our progress throughout the programme and beyond. Together, we're building a generation of innovators solving Africa's most pressing challenges through science, technology, and creativity.

#EmpoweringAfricasInnovators | #YECO2025 | #ERAAXIS`,
      image: "/images/software.png",
      date: "November 2024",
      category: "Recognition",
      author: "ERA AXIS Team",
      readTime: "6 min read",
      slug: "yeco-2025-selection"
    },
    {
      title: "BagaBoard Wins at Nexora Business Pitching Challenge 2025",
      excerpt: "BagaBoard transforms sugarcane waste into eco-friendly electrical casings, winning 1st Runner-Up at the prestigious competition.",
      fullContent: `We are proud to announce that BagaBoard, one of ERA AXIS's innovative projects, emerged as the 1st Runner-Up at the Nexora Business Pitching Challenge 2025, held at the National Theatre, Accra.

BagaBoard is redefining electrical safety and sustainability in Ghana by transforming sugarcane waste into eco-friendly, fire-resistant electrical casings. This breakthrough innovation not only enhances household safety but also promotes a cleaner environment by converting agricultural waste into durable, locally manufactured products.

This recognition marks a major milestone in our mission to build safer, greener, and affordable innovations, Made in Ghana, for Africa. It reinforces ERA AXIS's commitment to empowering young innovators to create sustainable solutions that address real challenges in manufacturing, energy, and environmental protection.

BagaBoard — From Waste to Watt.`,
      image: "/images/manufacturing.png",
      date: "November 2024",
      category: "Innovation",
      author: "ERA AXIS Team",
      readTime: "4 min read",
      slug: "bagaboard-nexora-2025"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Latest Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-[#39366F]/20"
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#39366F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#39366F] transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    By {article.author}
                  </span>
                  <Link 
                    to={`/news/${article.slug}`}
                    className="text-[#39366F] hover:text-[#2a2850] font-semibold text-sm inline-flex items-center gap-1 transition-colors duration-300 group/btn"
                  >
                    Read More
                    <ArrowRight 
                      size={14} 
                      className="group-hover/btn:translate-x-0.5 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
