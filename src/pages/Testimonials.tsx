import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { Star, Quote, ShieldCheck } from 'lucide-react';

interface TestimonialsProps {
  setCurrentPage: (page: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <div className="min-h-screen bg-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF] px-3.5 py-1.5 bg-blue-50 rounded-full">
            Client Feedback
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            What Clients Say
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Read feedback from business owners and marketing managers who partnered with Ahmad Shibli for Google Ads and tracking management.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div key={item.id} className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 relative overflow-hidden">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100 pointer-events-none" />
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-base leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="font-bold text-slate-900 text-base">{item.clientName}</p>
                <p className="text-xs text-slate-500 font-medium">{item.role} • {item.company}</p>
                <p className="text-[11px] text-[#0066FF] font-semibold mt-1">{item.serviceUsed}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
