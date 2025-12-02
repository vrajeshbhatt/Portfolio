import React from 'react';

const SectionHeading = ({ children }) => (
    <div className="flex items-center gap-4 mb-12 group">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 relative">
            {children}
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-neon-cyan to-transparent rounded-full" />
        </h2>
        <div className="h-px bg-slate-800 flex-grow max-w-xs ml-4 group-hover:bg-slate-700 transition-colors" />
    </div>
);

export default SectionHeading;
