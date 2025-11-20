
import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const { data } = usePortfolio();
  const { projects } = data;

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Showcasing data-driven solutions and machine learning implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div key={project.id} className="bg-slate-800/30 rounded-xl border border-slate-700 overflow-hidden hover:shadow-xl hover:shadow-brand-900/20 transition-all hover:-translate-y-1 flex flex-col">
                    <div className="p-6 flex-grow">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white">{project.title}</h3>
                            {project.link && (
                                <a href={project.link} className="text-slate-400 hover:text-brand-400 transition-colors">
                                    <ArrowUpRight size={20} />
                                </a>
                            )}
                        </div>
                        <div className="space-y-3 mb-6">
                             {project.description.map((desc, i) => (
                                 <p key={i} className="text-sm text-slate-400 leading-relaxed border-l-2 border-slate-700 pl-3">
                                     {desc}
                                 </p>
                             ))}
                        </div>
                    </div>
                    <div className="p-6 bg-slate-800/50 border-t border-slate-700">
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                                <span key={tech} className="text-xs font-semibold px-2 py-1 bg-brand-500/10 text-brand-400 rounded border border-brand-500/20">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
