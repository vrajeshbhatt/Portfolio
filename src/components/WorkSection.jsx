import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';

const WorkSection = ({ data }) => {
    const [activeTab, setActiveTab] = useState('experience');

    const tabs = [
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' }
    ];

    return (
        <section id="work" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading>My Work</SectionHeading>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex gap-2 p-1 bg-slate-900/50 rounded-xl border border-slate-800 backdrop-blur-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                  px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 relative
                  ${activeTab === tab.id ? 'text-cyber-black' : 'text-slate-400 hover:text-slate-200'}
                `}
                            >
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-neon-cyan rounded-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'experience' ? (
                        <motion.div
                            key="experience"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="space-y-12 border-l border-slate-800 ml-3 md:ml-6 pl-8 md:pl-12 relative">
                                {data.experience.map((job, index) => (
                                    <div key={job.id} className="relative group">
                                        {/* Timeline Node */}
                                        <div className="absolute -left-[41px] md:-left-[59px] top-1 w-5 h-5 rounded-full border-4 border-cyber-black bg-slate-600 group-hover:bg-neon-cyan group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_rgba(15,23,42,1)]" />

                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                            <h3 className="text-xl font-bold text-slate-100 group-hover:text-neon-cyan transition-colors">
                                                {job.role}
                                            </h3>
                                            <span className="text-sm font-mono text-neon-purple/80 bg-neon-purple/10 px-2 py-1 rounded">{job.period}</span>
                                        </div>

                                        <h4 className="text-neon-teal font-medium mb-4 text-lg flex items-center gap-2">
                                            {job.company}
                                        </h4>

                                        <div className="bg-cyber-slate/30 p-6 rounded-xl border border-slate-800/50 hover:border-slate-700 transition-colors">
                                            <ul className="space-y-3">
                                                {job.description.map((desc, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                                                        <span className="text-neon-cyan mt-1.5">▹</span>
                                                        {desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="projects"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {data.projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group relative bg-cyber-slate rounded-2xl overflow-hidden border border-slate-800 hover:border-neon-purple/50 transition-all duration-300 flex flex-col"
                                >
                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="p-8 flex flex-col flex-grow relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 bg-slate-900 rounded-xl text-neon-cyan border border-slate-800 group-hover:border-neon-cyan/30 transition-colors">
                                                <Code2 size={24} />
                                            </div>
                                            <div className="flex gap-4">
                                                {project.links.repo && (
                                                    <a
                                                        href={project.links.repo}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-slate-400 hover:text-neon-cyan transition-colors"
                                                    >
                                                        <Github size={20} />
                                                    </a>
                                                )}
                                                {project.links.demo && (
                                                    <a
                                                        href={project.links.demo}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-slate-400 hover:text-neon-purple transition-colors"
                                                    >
                                                        <ExternalLink size={20} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-neon-cyan transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-xs font-mono text-neon-cyan/80 bg-neon-cyan/5 px-2 py-1 rounded border border-neon-cyan/10"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default WorkSection;
