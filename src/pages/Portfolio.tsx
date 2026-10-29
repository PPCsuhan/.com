import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/portfolioData';
import { ProjectModal } from '../components/ProjectModal';
import { ArrowRight, ShieldCheck, Filter } from 'lucide-react';

interface PortfolioProps {
  setCurrentPage: (page: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'Google Ads Campaign', 'Google Ads & Call Tracking', 'Google Ads Management', 'Google Ads & CRO', 'Analytics & Tracking'];

  const filteredProjects = selectedCategory === 'All' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF] px-3.5 py-1.5 bg-blue-50 rounded-full">
            Portfolio & Case Studies
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Real Projects. Real Results.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Explore recent Google Ads, analytics, and conversion tracking case studies. Each project reflects strategic campaign planning and disciplined execution.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0066FF] text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm card-hover cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-[#0066FF] text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                  {project.isDemo && (
                    <span className="px-2.5 py-0.5 bg-amber-50 text-amber-700 text-[11px] font-medium rounded-full border border-amber-200">
                      Demo Project
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-xs text-slate-500 mb-3 font-medium">{project.industry} • {project.location}</p>
                <p className="text-slate-600 text-sm line-clamp-3 mb-6">{project.objective}</p>
              </div>

              <div>
                <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-slate-50 rounded-xl mb-4 text-center">
                  <div>
                    <p className="text-[10px] text-slate-500 font-medium">Result</p>
                    <p className="text-xs font-bold text-[#0066FF]">{project.metrics.callsOrLeads}</p>
                  </div>
                  <div className="border-x border-slate-200">
                    <p className="text-[10px] text-slate-500 font-medium">Conv. Rate</p>
                    <p className="text-xs font-bold text-slate-900">{project.metrics.conversionRate}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-medium">Efficiency</p>
                    <p className="text-xs font-bold text-emerald-600">{project.metrics.roasOrEfficiency}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-[#0066FF]">
                  <span>View Case Study Details</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </div>
  );
};
