import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { 
  Mail, Phone, Send, Linkedin, Facebook, Calendar, 
  ArrowRight, CheckCircle2, AlertCircle, Loader2, ExternalLink 
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    website: '',
    service: 'Google Ads Management',
    budget: '$1,000 - $3,000 / mo',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const servicesList = [
    'Google Ads Management',
    'Google Ads Audit',
    'Google Analytics 4 (GA4)',
    'Google Tag Manager',
    'Conversion Tracking',
    'Campaign Optimization',
    'Other'
  ];

  const budgetOptions = [
    'Under $1,000 / mo',
    '$1,000 - $3,000 / mo',
    '$3,000 - $7,000 / mo',
    '$7,000+ / mo',
    'Not sure / Audit first'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(data.message || 'Thank you! Your message has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          businessName: '',
          website: '',
          service: 'Google Ads Management',
          budget: '$1,000 - $3,000 / mo',
          message: ''
        });
      } else {
        setError(data.error || 'Failed to send message. Please try again or reach out via WhatsApp/Telegram.');
      }
    } catch (err) {
      console.error(err);
      setError('Network error. Please try again or contact via WhatsApp/Telegram.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF] px-3.5 py-1.5 bg-blue-50 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Let's Talk About Your Google Ads Goals
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Share a little about your business and what you want to achieve. I'll review your requirements and get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Methods Cards */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Connect Directly</h2>

            <a
              href={SITE_CONFIG.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-5 bg-blue-50/70 hover:bg-blue-50 rounded-2xl border border-blue-100 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-md">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900 group-hover:text-[#0066FF] transition-colors">Book Free Consultation</p>
                <p className="text-xs text-slate-500">Schedule via Calendly</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0066FF]" />
            </a>

            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-5 bg-emerald-50/60 hover:bg-emerald-50 rounded-2xl border border-emerald-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <WhatsAppIcon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">WhatsApp Chat</p>
                <p className="text-xs text-slate-500">{SITE_CONFIG.phoneDisplay}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" />
            </a>

            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-5 bg-sky-50/60 hover:bg-sky-50 rounded-2xl border border-sky-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <Send className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900 group-hover:text-sky-600 transition-colors">Telegram</p>
                <p className="text-xs text-slate-500">@{SITE_CONFIG.telegramUsername}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-500" />
            </a>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center space-x-4 p-5 bg-slate-50 hover:bg-slate-100 rounded-2xl border border-slate-200/80 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900 group-hover:text-[#0066FF] transition-colors">Direct Email</p>
                <p className="text-xs text-slate-500">{SITE_CONFIG.email}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0066FF]" />
            </a>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 p-3.5 bg-slate-100 hover:bg-[#0066FF] hover:text-white rounded-xl text-slate-700 text-sm font-semibold transition-colors shadow-2xs"
              >
                <Linkedin className="w-4 h-4 text-blue-600 group-hover:text-white" />
                <span>LinkedIn</span>
              </a>
              <a
                href={SITE_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 p-3.5 bg-slate-100 hover:bg-[#0066FF] hover:text-white rounded-xl text-slate-700 text-sm font-semibold transition-colors shadow-2xs"
              >
                <Facebook className="w-4 h-4 text-blue-700 group-hover:text-white" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-50/70 p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Send a Message</h2>

            {success && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center space-x-3 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{success}</span>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl flex items-center space-x-3 text-sm font-medium">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Business Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Website URL (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                  >
                    {servicesList.map((srv) => (
                      <option key={srv} value={srv}>{srv}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Monthly Ad Budget (Optional)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Message / Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your business goals and what you would like to achieve..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 bg-[#0066FF] hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md transition-all text-base disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center">
                Your contact details are kept strictly private and used solely to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
