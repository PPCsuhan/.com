export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  status: string;
  credentialUrl?: string;
}

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Google Ads Search Certification",
    issuer: "Google Skillshop",
    issueDate: "Verified Credential",
    status: "Active",
  },
  {
    id: "cert-2",
    title: "Google Analytics 4 (GA4) Certification",
    issuer: "Google Skillshop",
    issueDate: "Verified Credential",
    status: "Active",
  },
  {
    id: "cert-3",
    title: "Google Ads Display & Measurement Certification",
    issuer: "Google Skillshop",
    issueDate: "Verified Credential",
    status: "Active",
  }
];
