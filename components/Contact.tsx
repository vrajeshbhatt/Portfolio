
import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { Mail } from 'lucide-react';
import { DynamicIcon } from '../utils/iconHelper';

const Contact: React.FC = () => {
  const { data } = usePortfolio();
  const { personalInfo, socialLinks } = data;

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-slate-400 mb-10 text-lg">
          I'm currently looking for new opportunities. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-brand-900/50 mb-12"
        >
          <Mail size={20} />
          Say Hello
        </a>

        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map((link) => (
            <a 
              key={link.platform}
              href={link.url}
              className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full"
              aria-label={link.platform}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DynamicIcon name={link.icon} size={24} />
            </a>
          ))}
        </div>

        <div className="text-sm text-slate-600 pt-8 border-t border-slate-800">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
