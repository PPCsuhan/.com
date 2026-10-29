export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyFeatures: string[];
  deliverables: string[];
  idealFor: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "google-ads-management",
    title: "Google Ads Management",
    shortDesc: "End-to-end campaign planning, setup, optimization, and reporting to drive qualified leads and sales.",
    fullDesc: "I build, manage, and continuously optimize high-performing Google Ads campaigns across Search, Display, Shopping, YouTube, and Performance Max. My focus is on strategic keyword targeting, compelling ad copy, negative keyword hygiene, budget efficiency, and continuous testing to attract high-intent prospects.",
    iconName: "TrendingUp",
    keyFeatures: [
      "Comprehensive keyword research & intent analysis",
      "Strategic ad group & campaign structure",
      "High-converting responsive search ad copy & extensions",
      "Advanced location, audience, and demographic targeting",
      "Negative keyword management to eliminate wasted spend",
      "Bid strategy management & ROI optimization"
    ],
    deliverables: [
      "Fully structured Google Ads account",
      "Custom ad copy & assets",
      "Bi-weekly or monthly performance reports",
      "Actionable insights and strategic recommendations"
    ],
    idealFor: "Businesses wanting consistent, high-intent leads or online sales through paid search."
  },
  {
    id: "google-ads-audit",
    title: "Google Ads Account Audit",
    shortDesc: "Comprehensive account review to uncover wasted budget, tracking flaws, and growth opportunities.",
    fullDesc: "If your current Google Ads campaigns aren't producing expected results, an audit provides a clear diagnostic check. I examine account structure, targeting settings, search term reports, quality scores, bidding strategies, negative keyword gaps, and conversion tracking integrity to identify immediate fixes and growth opportunities.",
    iconName: "SearchCheck",
    keyFeatures: [
      "Account structure & settings review",
      "Search term & negative keyword gap analysis",
      "Quality score & ad relevance evaluation",
      "Budget allocation & bidding efficiency check",
      "Conversion tracking verification",
      "Prioritized checklist of recommended improvements"
    ],
    deliverables: [
      "Detailed written audit report",
      "Video walkthrough (optional)",
      "Prioritized action items for immediate cost savings"
    ],
    idealFor: "Advertisers spending budget without seeing satisfactory return on ad spend (ROAS) or lead volume."
  },
  {
    id: "ga4-analytics",
    title: "Google Analytics 4 (GA4)",
    shortDesc: "Advanced GA4 setup, event tracking, custom dashboards, and user behavior analysis.",
    fullDesc: "Accurate measurement is the foundation of successful advertising. I configure Google Analytics 4 to track crucial user journeys, ecommerce purchases, form submissions, and engagement metrics so you can make confident, data-backed decisions.",
    iconName: "BarChart3",
    keyFeatures: [
      "Clean GA4 property setup & data stream configuration",
      "Custom event & conversion parameter setup",
      "Enhanced measurement configuration",
      "Cross-domain tracking & referral exclusion setup",
      "Custom exploration reports & dashboards"
    ],
    deliverables: [
      "Fully operational GA4 tracking property",
      "Verified conversion event triggers",
      "Custom dashboard for key marketing KPIs"
    ],
    idealFor: "Businesses needing reliable attribution and deep insights into website traffic behavior."
  },
  {
    id: "google-tag-manager",
    title: "Google Tag Manager (GTM)",
    shortDesc: "Robust tag implementation, trigger configuration, and tag governance without modifying raw code.",
    fullDesc: "Google Tag Manager allows efficient deployment of marketing and analytics tags. I set up clean GTM containers, configure custom triggers for button clicks, phone calls, form submissions, and ecommerce events, and rigorously test tags before publishing.",
    iconName: "Tag",
    keyFeatures: [
      "GTM container architecture & governance",
      "Custom click, scroll, and form submission triggers",
      "Data layer implementation support",
      "Google Ads, GA4, Meta Pixel & third-party tag integration",
      "Rigorous tag assistant testing & debugging"
    ],
    deliverables: [
      "Organized GTM container structure",
      "Tested and verified event triggers",
      "Documentation of all implemented tags and variables"
    ],
    idealFor: "Websites needing centralized, error-free management of analytics and advertising pixels."
  },
  {
    id: "conversion-tracking",
    title: "Conversion Tracking & Attribution",
    shortDesc: "Precise measurement of leads, phone calls, form fills, and purchases to power smart bidding.",
    fullDesc: "Without accurate conversion tracking, Google Ads algorithms cannot optimize effectively. I implement robust conversion tracking (including offline conversion imports and enhanced conversions where applicable) to ensure every lead and sale is accurately attributed.",
    iconName: "Target",
    keyFeatures: [
      "Primary & secondary conversion action definition",
      "Form submission & thank-you page tracking",
      "Phone call & click-to-call tracking integration",
      "Enhanced conversions setup for improved accuracy",
      "Attribution modeling review"
    ],
    deliverables: [
      "Verified conversion actions in Google Ads and GA4",
      "Test conversion verification report",
      "Attribution setup guidance"
    ],
    idealFor: "Companies relying on lead generation forms, inbound phone calls, or online store transactions."
  },
  {
    id: "campaign-optimization",
    title: "Campaign Optimization & Reporting",
    shortDesc: "Ongoing performance tuning, search term analysis, budget pacing, and executive reporting.",
    fullDesc: "Advertising requires constant vigilance. I provide ongoing management, weekly/monthly monitoring, search query reviews, ad rotation testing, bid adjustments, and clear, transparent reporting focused on business outcomes rather than vanity metrics.",
    iconName: "LineChart",
    keyFeatures: [
      "Continuous search term refinement & negative keyword updates",
      "Ad variation A/B testing & creative refreshment",
      "Budget pacing and seasonal adjustments",
      "Transparent executive reporting with actionable insights"
    ],
    deliverables: [
      "Monthly performance summary dashboard",
      "Key takeaways and strategic next steps",
      "Direct consultation call review"
    ],
    idealFor: "Business owners who want expert oversight of their ad accounts so they can focus on operations."
  },
  {
    id: "landing-page-recommendations",
    title: "Landing Page Recommendations",
    shortDesc: "Conversion rate optimization (CRO) insights to align ad messaging with landing page experience.",
    fullDesc: "Even the best Google Ads campaign will underperform if the landing page is confusing or slow. I evaluate message match, call-to-action clarity, mobile usability, form friction, and page speed to recommend high-impact improvements that boost conversion rates.",
    iconName: "Layout",
    keyFeatures: [
      "Ad-to-page message match analysis",
      "Call-to-action (CTA) prominence review",
      "Mobile UX & responsiveness evaluation",
      "Form friction & reduction suggestions",
      "Speed & trust signal recommendations"
    ],
    deliverables: [
      "Actionable CRO recommendation checklist",
      "Wireframe or layout suggestion notes"
    ],
    idealFor: "Advertisers seeking to improve conversion rates and lower cost-per-lead (CPL)."
  }
];
