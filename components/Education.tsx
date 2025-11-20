
import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { Award, GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const { data } = usePortfolio();
  const { education, awards } = data;

  return (
    <section id="education" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
                <GraduationCap size={32} className="text-brand-500" />
                <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            
            <div className="space-y-8">
                {education.map((edu, idx) => (
                    <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                        <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                            <div>
                                <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                                <p className="text-brand-400">{edu.degree}</p>
                            </div>
                            <span className="text-sm font-medium text-slate-500 bg-slate-800 px-3 py-1 rounded-full whitespace-nowrap">
                                {edu.period}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Awards Column */}
          <div>
             <div className="flex items-center gap-3 mb-8">
                <Award size={32} className="text-accent-500" />
                <h2 className="text-3xl font-bold text-white">Awards & Achievements</h2>
            </div>
            
            <div className="space-y-6">
                {awards.map((award, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                        <div className="mt-1 h-2 w-2 rounded-full bg-accent-500 flex-shrink-0 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
                        <p className="text-slate-300 leading-relaxed">{award}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
