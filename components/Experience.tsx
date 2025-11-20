
import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const { data } = usePortfolio();
  const { experience } = data;

  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <div className="h-1 w-20 bg-brand-500 rounded-full"></div>
        </div>

        <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
          {experience.map((job) => (
            <div key={job.id} className="relative pl-8 md:pl-12 group">
              {/* Dot on timeline */}
              <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-slate-600 border-2 border-slate-950 group-hover:bg-brand-500 transition-colors"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                    {job.role}
                    </h3>
                    <h4 className="text-lg text-slate-300 font-medium">{job.company}</h4>
                </div>
                <div className="flex flex-col sm:items-end mt-2 sm:mt-0 text-sm text-slate-500 space-y-1">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{job.location}</span>
                    </div>
                </div>
              </div>
              
              <ul className="mt-4 space-y-2">
                {job.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500/50"></span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
