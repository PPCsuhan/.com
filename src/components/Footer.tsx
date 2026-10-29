import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Mail, Phone, MapPin, Linkedin, Facebook, Send, ExternalLink } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-[#0A1E3D] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#0066FF] to-blue-400 flex items-center justify-center text-white font-bold overflow-hidden border border-blue-400/30">
                <img src={SITE_CONFIG.logoImage} alt={SITE_CONFIG.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{SITE_CONFIG.name}</h3>
                <p className="text-xs text-blue-400">Google Ads Specialist</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Helping businesses grow through data-driven Google Ads management, GA4 analytics, and reliable conversion tracking.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#0066FF] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#0066FF] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#0066FF] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-white capitalize transition-colors flex items-center space-x-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
                    <span>{page === 'home' ? 'Home' : page}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Core Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Google Ads Management</li>
              <li>Google Ads Account Audit</li>
              <li>Google Analytics 4 (GA4)</li>
              <li>Google Tag Manager (GTM)</li>
              <li>Conversion Tracking</li>
              <li>Campaign Optimization</li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Direct Contact</h4>
            <div className="flex items-start space-x-3 text-sm text-slate-400">
              <Mail className="w-4 h-4 text-[#0066FF] shrink-0 mt-1" />
              <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                {SITE_CONFIG.email}
              </a>
            </div>
            <div className="flex items-start space-x-3 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-[#0066FF] shrink-0 mt-1" />
              <span>{SITE_CONFIG.location}</span>
            </div>
            <div className="pt-2">
              <a
                href={SITE_CONFIG.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold bg-[#0066FF] hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                <span>Book Free Consultation</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <span>Google Ads</span>
            <span>•</span>
            <span>Analytics</span>
            <span>•</span>
            <span>Tracking</span>
            <span>•</span>
            <span>Lead Generation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
