export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  industry: string;
  location: string;
  objective: string;
  challenge: string;
  strategy: string;
  tools: string[];
  metrics: {
    callsOrLeads: string;
    conversionRate: string;
    roasOrEfficiency: string;
  };
  imageType: string;
  isDemo: boolean;
  date: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "foundation-repair-usa",
    title: "Foundation Repair Lead Generation",
    category: "Google Ads Campaign",
    industry: "Home Services / Construction",
    location: "United States",
    objective: "Generate high-intent phone calls and consultation form inquiries for structural foundation repair services.",
    challenge: "High cost-per-click (CPC) in competitive metropolitan regions with low initial conversion rates due to generic landing page messaging.",
    strategy: "Restructured campaign into tight single-keyword ad groups (SKAGs) focusing on urgent local search terms. Implemented negative keyword scrubbing, call extension tracking, and mobile-optimized click-to-call bidding.",
    tools: ["Google Ads", "Google Tag Manager", "GA4", "Google Sheets"],
    metrics: {
      callsOrLeads: "487 Leads",
      conversionRate: "3.2%",
      roasOrEfficiency: "215% ROI"
    },
    imageType: "foundation",
    isDemo: true,
    date: "2026"
  },
  {
    id: "water-damage-restoration",
    title: "Emergency Water Damage Restoration Ads",
    category: "Google Ads & Call Tracking",
    industry: "Emergency Services",
    location: "United States",
    objective: "Capture emergency search queries for 24/7 water extraction and flood cleanup services.",
    challenge: "Competing against aggressive national franchises with unlimited ad budgets while minimizing wasted clicks during off-peak hours.",
    strategy: "Configured dayparting and geographic bid adjustments for immediate service areas. Deployed call-only ads paired with high-urgency ad copy and offline conversion tracking.",
    tools: ["Google Ads", "GA4", "Call Tracking", "GTM"],
    metrics: {
      callsOrLeads: "623 Calls",
      conversionRate: "4.1%",
      roasOrEfficiency: "278% ROAS"
    },
    imageType: "water",
    isDemo: true,
    date: "2026"
  },
  {
    id: "mold-removal-canada",
    title: "Mold Remediation Search Campaign",
    category: "Google Ads Management",
    industry: "Environmental Services",
    location: "Canada",
    objective: "Increase qualified leads for residential mold inspection and remediation services.",
    challenge: "Broad keyword overlap generating irrelevant informational queries ('how to clean mold yourself') instead of active buyers.",
    strategy: "Built robust negative keyword lists, added phrase and exact match modifiers, and created tailored ad groups for basement mold vs. attic mold testing.",
    tools: ["Google Ads", "Google Analytics 4", "Google Tag Manager"],
    metrics: {
      callsOrLeads: "342 Inquiries",
      conversionRate: "3.7%",
      roasOrEfficiency: "196% ROAS"
    },
    imageType: "mold",
    isDemo: true,
    date: "2025"
  },
  {
    id: "basement-waterproofing-usa",
    title: "Basement Waterproofing Lead Campaign",
    category: "Google Ads & CRO",
    industry: "Home Waterproofing",
    location: "United States",
    objective: "Drive form submissions and estimate requests for seasonal basement waterproofing services.",
    challenge: "Seasonal fluctuations in demand and high competition during rainy spring months.",
    strategy: "Created seasonal ad extensions, dynamic keyword insertion (DKI) for local city names, and conversion rate optimization (CRO) recommendations for estimate forms.",
    tools: ["Google Ads", "GA4", "GTM", "WordPress"],
    metrics: {
      callsOrLeads: "518 Leads",
      conversionRate: "5.2%",
      roasOrEfficiency: "243% ROAS"
    },
    imageType: "basement",
    isDemo: true,
    date: "2025"
  },
  {
    id: "crawl-space-repair",
    title: "Crawl Space Encapsulation Campaign",
    category: "Google Ads Campaign",
    industry: "Home Improvement",
    location: "United States",
    objective: "Generate high-value estimates for crawl space encapsulation and vapor barrier installations.",
    challenge: "Low search volume for niche technical terms requiring careful audience expansion without losing relevancy.",
    strategy: "Leveraged Google Ads custom intent audiences combined with targeted search campaigns and conversion-focused landing page review.",
    tools: ["Google Ads", "GA4", "Google Tag Manager"],
    metrics: {
      callsOrLeads: "276 Leads",
      conversionRate: "3.9%",
      roasOrEfficiency: "181% ROI"
    },
    imageType: "crawl",
    isDemo: true,
    date: "2025"
  },
  {
    id: "ga4-gtm-setup",
    title: "GA4 & Advanced Tracking Infrastructure",
    category: "Analytics & Tracking",
    industry: "SaaS & E-Commerce",
    location: "Global",
    objective: "Migrate legacy Universal Analytics to a clean, robust GA4 and GTM event tracking setup.",
    challenge: "Fragmented tracking across multiple subdomains with unmeasured form submissions and missing attribution data.",
    strategy: "Designed a comprehensive GTM container architecture, configured custom event triggers for key user interactions, and verified e-commerce data streams.",
    tools: ["Google Tag Manager", "GA4", "Google Sheets"],
    metrics: {
      callsOrLeads: "100% Tracking Accuracy",
      conversionRate: "Real-time Data",
      roasOrEfficiency: "Better Attribution"
    },
    imageType: "analytics",
    isDemo: true,
    date: "2026"
  }
];
