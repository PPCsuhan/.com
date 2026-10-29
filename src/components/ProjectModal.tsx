import React from 'react';
import { PortfolioProject } from '../data/portfolioData';
import { X, CheckCircle2, TrendingUp, Layers, Wrench, Globe } from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 mb-2">
          <span className="px-3 py-1 bg-blue-50 text-[#0066FF] text-xs font-semibold rounded-full">
            {project.category}
          </span>
          <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
            {project.industry}
          </span>
          {project.isDemo && (
            <span className="px-2.5 py-0.5 bg-amber-50 text-amber-700 text-[11px] font-medium rounded-full border border-amber-200">
              Demo Project
            </span>
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{project.title}</h2>

        <div className="grid grid-cols-3 gap-3 my-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="text-center">
            <p className="text-xs text-slate-500 font-medium">Results / Volume</p>
            <p className="text-base sm:text-lg font-bold text-[#0066FF]">{project.metrics.callsOrLeads}</p>
          </div>
          <div className="text-center border-x border-slate-200">
            <p className="text-xs text-slate-500 font-medium">Conversion Rate</p>
            <p className="text-base sm:text-lg font-bold text-slate-900">{project.metrics.conversionRate}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-slate-500 font-medium">ROAS / Efficiency</p>
            <p className="text-base sm:text-lg font-bold text-emerald-600">{project.metrics.roasOrEfficiency}</p>
          </div>
        </div>

        <div className="space-y-6 text-slate-700 text-sm sm:text-base">
          <div>
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1 flex items-center space-x-1.5">
              <Globe className="w-4 h-4 text-[#0066FF]" />
              <span>Project Objective</span>
            </h3>
            <p className="text-slate-600">{project.objective}</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1 flex items-center space-x-1.5">
              <TrendingUp className="w-4 h-4 text-[#0066FF]" />
              <span>Initial Challenge</span>
            </h3>
            <p className="text-slate-600">{project.challenge}</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1 flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
              <span>Strategy & Implementation</span>
            </h3>
            <p className="text-slate-600">{project.strategy}</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2 flex items-center space-x-1.5">
              <Wrench className="w-4 h-4 text-[#0066FF]" />
              <span>Tools Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
