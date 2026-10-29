import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA } from '../data/servicesData';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/portfolioData';
import { CERTIFICATIONS_DATA } from '../data/certificationsData';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { ProjectModal } from '../components/ProjectModal';
import { 
  ArrowRight, CheckCircle2, TrendingUp, SearchCheck, BarChart3, 
  Tag, Target, LineChart, Layout, Award, Star, ExternalLink, ShieldCheck, PhoneCall, Users, Check
} from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#0066FF]" />;
      case 'SearchCheck': return <SearchCheck className="w-6 h-6 text-[#0066FF]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#0066FF]" />;
      case 'Tag': return <Tag className="w-6 h-6 text-[#0066FF]" />;
      case 'Target': return <Target className="w-6 h-6 text-[#0066FF]" />;
      case 'LineChart': return <LineChart className="w-6 h-6 text-[#0066FF]" />;
      case 'Layout': return <Layout className="w-6 h-6 text-[#0066FF]" />;
      default: return <TrendingUp className="w-6 h-6 text-[#0066FF]" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-[#0066FF] text-xs font-semibold tracking-wide">
                <ShieldCheck className="w-4 h-4" />
                <span>Certified Google Ads & Analytics Specialist</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {SITE_CONFIG.name} — <span className="text-[#0066FF]">Google Ads Specialist</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                {SITE_CONFIG.subtitle}
              </p>

              <p className="text-slate-500 max-w-xl mx-auto lg:mx-0 text-base">
                {SITE_CONFIG.bio}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href={SITE_CONFIG.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#0066FF] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all text-base"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <button
                  onClick={() => {
                    setCurrentPage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-7 py-4 rounded-xl border border-slate-200 shadow-xs transition-all text-base"
                >
                  <span>Explore My Services</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-slate-100 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-extrabold text-slate-900">{SITE_CONFIG.experienceYears}</p>
                  <p className="text-xs text-slate-500 font-medium">Years Experience</p>
                </div>
                <div className="text-center lg:text-left border-x border-slate-200 px-4">
                  <p className="text-2xl font-extrabold text-slate-900">{SITE_CONFIG.successfulCampaigns}</p>
                  <p className="text-xs text-slate-500 font-medium">Successful Campaigns</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-extrabold text-[#0066FF]">{SITE_CONFIG.clientSatisfaction}</p>
                  <p className="text-xs text-slate-500 font-medium">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Photo Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0066FF] to-blue-300 rounded-3xl blur-lg opacity-30"></div>
                <div className="relative bg-white p-4 rounded-3xl border border-slate-100 shadow-2xl overflow-hidden">
                  <img
                    src={SITE_CONFIG.profileImage}
                    alt={SITE_CONFIG.name}
                    className="w-full h-[420px] object-cover rounded-2xl shadow-inner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF] px-3.5 py-1.5 bg-blue-50 rounded-full">
              What I Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Comprehensive Google Ads & Analytics Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              End-to-end campaign management and measurement solutions designed to drive qualified leads and maximize ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.shortDesc}</p>
                </div>
                <button
                  onClick={() => {
                    setCurrentPage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center space-x-2 text-[#0066FF] font-semibold text-sm group-hover:underline"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm shadow-md"
            >
              <span>View All Services & Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF] px-3.5 py-1.5 bg-blue-50 rounded-full">
                My Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Why Work With Ahmad Shibli?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                I believe in honest work, transparent communication, and meticulous attention to detail. Your advertising budget should work as hard as you do.
              </p>
              <div className="space-y-4 pt-2">
                {[
                  "A focus on business goals and lead quality rather than clicks alone",
                  "Meticulous campaign structure and relevant keyword research",
                  "Reliable conversion tracking and accurate attribution setup",
                  "Clear reporting with actionable, easy-to-understand insights",
                  "Honest communication and transparent work practices"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 text-sm sm:text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-blue-900 to-[#0A1E3D] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-6">How I Work</h3>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Discovery & Goal Setting", desc: "Understand your business, target audience, and growth objectives." },
                    { step: "02", title: "Audit & Requirements", desc: "Review campaign requirements, account structure, and tracking needs." },
                    { step: "03", title: "Setup & Optimization", desc: "Build or improve high-intent campaigns, ad copy, and measurement tags." },
                    { step: "04", title: "Monitoring & Reporting", desc: "Monitor ongoing performance, refine search terms, and provide clear reports." }
                  ].map((s, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/40 text-blue-300 border border-blue-400/20 flex items-center justify-center font-bold text-sm shrink-0">
                        {s.step}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base mb-1">{s.title}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF] px-3.5 py-1.5 bg-blue-50 rounded-full">
                Case Studies
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Featured Work & Demo Projects
              </h2>
              <p className="text-slate-600 text-base max-w-xl">
                Explore representative case studies demonstrating strategic Google Ads management and conversion tracking.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentPage('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-[#0066FF] hover:underline font-semibold text-sm"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.slice(0, 3).map((project) => (
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
                    <span className="px-2.5 py-0.5 bg-amber-50 text-amber-700 text-[11px] font-medium rounded-full border border-amber-200">
                      Demo Project
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-2 mb-6">{project.objective}</p>
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
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF] px-3.5 py-1.5 bg-blue-50 rounded-full">
              Credentials
            </span>
            <h2 className="text-3xl font-bold text-slate-900">Google Ads Certifications</h2>
            <p className="text-slate-600 text-sm">
              Certified expertise across Google Ads search advertising and measurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div key={cert.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-[#0066FF] flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">{cert.title}</h3>
                <p className="text-xs text-slate-500">{cert.issuer} • {cert.issueDate}</p>
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A1E3D] to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Improve Your Google Ads Strategy?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Let's discuss your advertising goals and identify practical opportunities to improve campaign measurement and performance.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#0066FF] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-base"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition-all text-base"
            >
              <span>Send a Message</span>
            </button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
