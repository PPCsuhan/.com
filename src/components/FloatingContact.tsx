import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Send, X, PhoneCall } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 w-72 animate-fadeIn space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold text-sm overflow-hidden border border-blue-200">
                <img src={SITE_CONFIG.logoImage} alt="AS" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">Ahmad Shibli</p>
                <p className="text-[11px] text-emerald-600 font-medium flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Online • Ready to chat</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600">
            Have a question about Google Ads or tracking? Connect with me instantly:
          </p>

          <div className="space-y-2 pt-1">
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl transition-colors font-semibold text-xs border border-emerald-200 group"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-bold text-emerald-900">Chat on WhatsApp</p>
                <p className="text-[10px] text-emerald-700">Instant response</p>
              </div>
            </a>

            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 bg-sky-50 hover:bg-sky-100 text-sky-800 rounded-xl transition-colors font-semibold text-xs border border-sky-200 group"
            >
              <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Send className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-bold text-sky-900">Chat on Telegram</p>
                <p className="text-[10px] text-sky-700">@{SITE_CONFIG.telegramUsername}</p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Glowing light pulse animation wrapper */}
      <div className="relative">
        <div className="absolute -inset-2 bg-[#0066FF] rounded-full blur-md opacity-75 animate-ping pointer-events-none"></div>
        <div className="absolute -inset-1 bg-emerald-400 rounded-full blur-sm opacity-60 animate-pulse pointer-events-none"></div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 relative z-10 border-2 border-white"
          aria-label="Quick Contact"
        >
          {isOpen ? <X className="w-6 h-6" /> : <PhoneCall className="w-6 h-6 animate-bounce" />}
        </button>
      </div>
    </div>
  );
};
