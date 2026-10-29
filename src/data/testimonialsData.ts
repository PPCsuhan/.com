export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  text: string;
  rating: number;
  serviceUsed: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "James Smith",
    role: "Business Owner",
    company: "Foundation Repair USA",
    location: "United States",
    text: "Ahmad did an excellent job setting up our Google Ads campaign. We got more qualified calls and the tracking is now accurate. Highly recommended!",
    rating: 5,
    serviceUsed: "Google Ads Management"
  },
  {
    id: "test-2",
    clientName: "Sarah Rahman",
    role: "Founder",
    company: "Home Restoration Services",
    location: "Canada",
    text: "Professional, responsive and results-driven. Our leads increased significantly within a few weeks. Great experience!",
    rating: 5,
    serviceUsed: "Google Ads Audit & Optimization"
  },
  {
    id: "test-3",
    clientName: "Mohammad Khalid",
    role: "Marketing Manager",
    company: "Waterproofing Pros",
    location: "UAE",
    text: "Very knowledgeable and easy to work with. The reporting is clear and the results speak for themselves.",
    rating: 5,
    serviceUsed: "GA4 & GTM Setup"
  }
];
