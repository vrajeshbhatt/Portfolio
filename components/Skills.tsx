
import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { DynamicIcon } from '../utils/iconHelper';

const Skills: React.FC = () => {
  const { data } = usePortfolio();
  const { skillCategories, skillChartData } = data;

  return (
    <section id="skills" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities across Data Science, Analytics, and Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Charts Side */}
          <div className="h-[400px] w-full bg-slate-950/50 rounded-2xl border border-slate-800 p-4 relative overflow-hidden">
             <div className="absolute top-4 left-4 text-sm font-mono text-brand-500">Skill_Distribution.viz</div>
             <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillChartData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Skill Level"
                    dataKey="A"
                    stroke="#0ea5e9"
                    strokeWidth={2}
                    fill="#0ea5e9"
                    fillOpacity={0.3}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f1f5f9' }}
                    itemStyle={{ color: '#38bdf8' }}
                  />
                </RadarChart>
             </ResponsiveContainer>
          </div>

          {/* Cards Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <div key={category.title} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-brand-500/50 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-brand-500/10 rounded-lg text-brand-400 group-hover:text-brand-300">
                    <DynamicIcon name={category.icon} size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 text-xs font-medium rounded-md bg-slate-700 text-slate-300 border border-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
