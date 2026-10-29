import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { CERTIFICATIONS_DATA } from '../data/certificationsData';
import { ShieldCheck, CheckCircle2, TrendingUp, Award, Wrench, ArrowRight, HeartHandshake } from 'lucide-react';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF] px-3.5 py-1.5 bg-blue-50 rounded-full">
              About Me
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              About Ahmad Shibli
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              I work with Google Ads, analytics, and conversion tracking to help businesses better understand their advertising performance. My approach is built around honest communication, thoughtful campaign management, and meaningful measurement.
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              Every business has unique objectives. Rather than relying on generic templates or vanity metrics, I focus on building sustainable campaign structures and reliable tracking systems that connect your ad spend directly to real business growth.
            </p>
            <div className="pt-2">
              <a
                href={SITE_CONFIG.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#0066FF] hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-md transition-all text-sm"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#0066FF] to-blue-200 rounded-3xl blur-xl opacity-25"></div>
              <div className="relative bg-white p-4 rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
                <img
                  src={SITE_CONFIG.profileImage}
                  alt={SITE_CONFIG.name}
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-lg flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Work Principle</p>
                    <p className="text-sm font-bold text-slate-900">Honesty & Transparent Collaboration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Approach */}
        <div className="bg-slate-50/70 rounded-3xl p-8 sm:p-12 border border-slate-100 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF] px-3 py-1 bg-blue-50 rounded-full">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">My Approach to Google Ads</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A commitment to honesty, practical execution, and reliable measurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Honesty Comes First",
                desc: "No exaggerated claims or guaranteed overnight miracles. I provide realistic assessments of your account potential and market competition."
              },
              {
                title: "Practical & Understandable",
                desc: "Recommendations are explained clearly without confusing jargon. You will always know what is being done and why."
              },
              {
                title: "Reliable Tracking",
                desc: "Properly tested conversion tracking is non-negotiable. Without accurate data, campaign optimization is just guessing."
              },
              {
                title: "Data-Driven Decisions",
                desc: "Advertising decisions are based on search intent, actual query data, and conversion metrics rather than assumptions."
              },
              {
                title: "Business Objective Focus",
                desc: "Campaigns are aligned with your actual business goals—whether that is lead generation, phone calls, or online sales."
              },
              {
                title: "Ongoing Partnership",
                desc: "Advertising requires constant refinement. I provide consistent oversight, negative keyword maintenance, and clear reporting."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Toolkit */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF] px-3 py-1 bg-blue-50 rounded-full">
                Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Professional Skills</h2>
              <p className="text-slate-600 text-sm">
                Specialized core competencies for managing performance advertising and analytics.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Google Ads Campaign Setup & Management (Search, Display, Shopping, YouTube, PMax)",
                "Google Ads Account Audits & Performance Diagnostics",
                "Google Analytics 4 (GA4) Configuration & Event Measurement",
                "Google Tag Manager (GTM) Container Setup & Trigger Governance",
                "Conversion Tracking & Attribution Setup",
                "Campaign Optimization, Bidding Strategy & Negative Keyword Scrubbing",
                "Landing Page Recommendations for Higher Conversion Rates"
              ].map((skill, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#0066FF] shrink-0" />
                  <span className="text-slate-800 text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Toolkit */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF] px-3 py-1 bg-blue-50 rounded-full">
                Tools & Platforms
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">My Toolkit</h2>
              <p className="text-slate-600 text-sm">
                Industry-standard platforms I use to deliver accurate tracking and optimized campaigns.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Google Ads", desc: "Campaign Management" },
                { name: "Google Analytics 4", desc: "User Behavior & GA4" },
                { name: "Google Tag Manager", desc: "Tag & Event Governance" },
                { name: "Google Search Console", desc: "Search Performance" },
                { name: "Google Sheets", desc: "Custom KPI Reporting" },
                { name: "WordPress / CMS", desc: "Tracking Integration" }
              ].map((tool, idx) => (
                <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">{tool.name}</h3>
                  <p className="text-xs text-slate-500">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF] px-3 py-1 bg-blue-50 rounded-full">
              Verified Credentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Google Ads Certifications</h2>
            <p className="text-slate-600 text-sm">
              Demonstrated proficiency in Google search advertising and measurement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div key={cert.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <Award className="w-8 h-8 text-[#0066FF] mx-auto" />
                <h3 className="font-bold text-slate-900 text-sm">{cert.title}</h3>
                <p className="text-xs text-slate-500">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
