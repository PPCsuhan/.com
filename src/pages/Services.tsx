import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { 
  TrendingUp, SearchCheck, BarChart3, Tag, Target, LineChart, Layout, 
  CheckCircle2, ArrowRight, ShieldCheck, ExternalLink 
} from 'lucide-react';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-7 h-7 text-[#0066FF]" />;
      case 'SearchCheck': return <SearchCheck className="w-7 h-7 text-[#0066FF]" />;
      case 'BarChart3': return <BarChart3 className="w-7 h-7 text-[#0066FF]" />;
      case 'Tag': return <Tag className="w-7 h-7 text-[#0066FF]" />;
      case 'Target': return <Target className="w-7 h-7 text-[#0066FF]" />;
      case 'LineChart': return <LineChart className="w-7 h-7 text-[#0066FF]" />;
      case 'Layout': return <Layout className="w-7 h-7 text-[#0066FF]" />;
      default: return <TrendingUp className="w-7 h-7 text-[#0066FF]" />;
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF] px-3.5 py-1.5 bg-blue-50 rounded-full">
            Professional Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Google Ads & Analytics Services
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            End-to-end campaign management, rigorous account audits, advanced analytics setup, and precise conversion tracking designed to grow your business.
          </p>
        </div>

        {/* Services Detailed List */}
        <div className="space-y-16">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm bg-slate-50/50 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shadow-xs">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#0066FF] uppercase tracking-wider">Service {index + 1}</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-base leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Ideal For:</p>
                  <p className="text-sm font-medium text-slate-800">{service.idealFor}</p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={SITE_CONFIG.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#0066FF] hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm"
                  >
                    <span>Discuss This Service</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      setCurrentPage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-100 text-slate-800 font-semibold px-6 py-3.5 rounded-xl border border-slate-200 transition-all text-sm"
                  >
                    <span>Request Custom Quote</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-2xs">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                    <span>Key Features & Scope</span>
                  </h3>
                  <ul className="space-y-3">
                    {service.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] shrink-0 mt-2"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">Expected Deliverables</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((deliv, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-xl text-xs font-medium text-slate-700 border border-slate-100">
                        ✓ {deliv}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#0A1E3D] to-blue-900 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Not Sure Which Service Your Business Needs?</h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Book a free consultation and let's review your current Google Ads setup, tracking, and growth opportunities.
          </p>
          <div className="pt-2">
            <a
              href={SITE_CONFIG.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#0066FF] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-base"
            >
              <span>Book Free Consultation on Calendly</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
