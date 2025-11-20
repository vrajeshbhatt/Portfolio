
import React from 'react';
import { ChevronDown, Download, MapPin } from 'lucide-react';
import { usePortfolio } from '../contexts/PortfolioContext';

const Hero: React.FC = () => {
  const { data } = usePortfolio();
  const { personalInfo } = data;

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-16">
      {/* Background Gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Open to opportunities in {personalInfo.location}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Turning Data Into <br />
            <span className="bg-gradient-to-r from-brand-400 to-accent-500 bg-clip-text text-transparent">
              Actionable Insights
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
            Hi, I'm <strong className="text-slate-200">{personalInfo.name}</strong>. {personalInfo.summary}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-500 transition-all shadow-[0_0_20px_-5px_rgba(14,165,233,0.5)] flex items-center justify-center gap-2"
            >
              View Projects
            </a>
            <a 
              href="#" 
              className="px-8 py-3 rounded-full bg-slate-800 text-slate-200 font-semibold hover:bg-slate-700 transition-all border border-slate-700 flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
                <MapPin size={18} className="text-brand-400" />
                <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
