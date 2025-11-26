import React from 'react';
import { User, Users, Building2, Handshake } from 'lucide-react';

const usersData = [
  {
    icon: <User className="w-8 h-8 text-[#39366F] mb-2" />, title: 'Individuals',
    desc: 'Build personal or household solutions in our labs.',
  },
  {
    icon: <Users className="w-8 h-8 text-[#39366F] mb-2" />, title: 'Communities & Organizations',
    desc: 'Co-create local solutions with our experts and partners.',
  },
  {
    icon: <Building2 className="w-8 h-8 text-[#39366F] mb-2" />, title: 'Startups & Companies',
    desc: 'Design, test, and launch new products efficiently.',
  },
  {
    icon: <Handshake className="w-8 h-8 text-[#39366F] mb-2" />, title: 'Schools & Groups',
    desc: 'Hands-on STEM and innovation for learners of all backgrounds.',
  },
];

const WhoCanUseLabs = () => (
  <section className="py-10 bg-white" id="users-labs">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">Who Can Use the Labs</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {usersData.map((u, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/20 flex flex-col items-center text-center min-h-[170px]"
          >
            {u.icon}
            <h3 className="text-base font-semibold text-black mb-1">{u.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{u.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoCanUseLabs;
