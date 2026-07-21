import {
  Banknote,
  Brain,
  Building2,
  Cloud,
  Compass,
  Landmark,
  Server,
  ShieldCheck,
  Sun,
  type LucideIcon,
} from "lucide-react";

export type Solution = {
  slug: string;
  path: string;
  navLabel: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  services: string[];
  poweredBy?: string;
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "domains-hosting",
    path: "/domains-hosting",
    navLabel: "Domains & Web Hosting",
    icon: Server,
    eyebrow: "Own Your Online Presence",
    title: "Domain Names & Hosting Built for",
    highlight: "Nigerian Businesses.",
    description:
      "Register your .ng or global domain and host your website, email, and applications on fast, reliable infrastructure—backed by local support.",
    services: [
      "Domain Registration (.ng, .com.ng, .com & more)",
      "Shared Web Hosting",
      "VPS & Dedicated Servers",
      "Business Email Hosting",
      "SSL Certificates",
      "Domain Transfers & Renewals",
      "Website Migration",
      "Bulk Domain Management for Resellers",
    ],
  },
  {
    slug: "ai-solutions",
    path: "/ai-solutions",
    navLabel: "Artificial Intelligence",
    icon: Brain,
    eyebrow: "Intelligence at Scale",
    title: "Cognitive Solutions for Enterprise",
    highlight: "Impact.",
    description:
      "Leverage AI to automate repetitive tasks, improve customer experiences, and make smarter business decisions.",
    services: [
      "AI Business Automation",
      "AI Customer Support",
      "AI Chatbots",
      "Intelligent Document Processing",
      "Predictive Analytics",
      "AI Strategy & Consulting",
      "Generative AI Integration",
      "AI Training for Organizations",
    ],
  },
  {
    slug: "enterprise-software",
    path: "/enterprise-software",
    navLabel: "Enterprise Software Development",
    icon: Building2,
    eyebrow: "Mission-Critical Systems",
    title: "Enterprise Software Built for",
    highlight: "Your Business.",
    description:
      "We build mission-critical software tailored to your business needs.",
    services: [
      "ERP Systems",
      "HR & Payroll",
      "CRM",
      "Inventory Management",
      "School Management Systems",
      "Hospital Management Systems",
      "Church Management Platforms",
      "Custom Enterprise Applications",
    ],
  },
  {
    slug: "cloud-infrastructure",
    path: "/cloud-infrastructure",
    navLabel: "Cloud & Infrastructure",
    icon: Cloud,
    eyebrow: "Modern IT Foundations",
    title: "Secure, Scalable",
    highlight: "Cloud Infrastructure.",
    description:
      "Modernize your IT infrastructure with secure and scalable cloud solutions.",
    services: [
      "Microsoft 365 Deployment",
      "Google Workspace",
      "Cloud Migration",
      "Virtual Servers",
      "Backup & Disaster Recovery",
      "Hybrid Cloud",
      "Infrastructure Monitoring",
      "Managed Cloud Services",
    ],
  },
  {
    slug: "cybersecurity",
    path: "/cybersecurity",
    navLabel: "Cybersecurity",
    icon: ShieldCheck,
    eyebrow: "Defense in Depth",
    title: "Protecting Your Business from",
    highlight: "Modern Threats.",
    description: "Protect your business from modern cyber threats.",
    services: [
      "Security Assessments",
      "Vulnerability Testing",
      "Penetration Testing",
      "Email Security",
      "Endpoint Protection",
      "Security Operations",
      "Compliance Consulting",
      "Employee Security Awareness Training",
    ],
  },
  {
    slug: "digital-transformation",
    path: "/digital-transformation",
    navLabel: "Digital Transformation Consulting",
    icon: Compass,
    eyebrow: "Strategy & Outcomes",
    title: "Technology That Transforms",
    highlight: "Business Outcomes.",
    description:
      "Technology is only valuable when it transforms business outcomes. We help organizations:",
    services: [
      "Digitize Operations",
      "Automate Business Processes",
      "Design Digital Strategies",
      "Improve Customer Experience",
      "Reduce Operational Costs",
      "Increase Productivity",
    ],
  },
  {
    slug: "government",
    path: "/government",
    navLabel: "Government Digital Solutions",
    icon: Landmark,
    eyebrow: "Public Sector Excellence",
    title: "Powering the Digital Backbone of",
    highlight: "Sovereign Nations.",
    description:
      "Supporting public institutions with secure and scalable digital infrastructure.",
    services: [
      "e-Government Platforms",
      "Tax Management Systems",
      "Identity Management",
      "Land Administration",
      "Citizen Service Portals",
      "Document Management Systems",
      "Smart City Technologies",
    ],
  },
  {
    slug: "fintech",
    path: "/fintech",
    navLabel: "FinTech Solutions",
    icon: Banknote,
    eyebrow: "Payments Infrastructure",
    title: "Secure Payment Infrastructure for",
    highlight: "Africa.",
    description: "Building secure payment infrastructure for Africa.",
    services: [
      "Payment Platforms",
      "Wallet Solutions",
      "Bill Payment Systems",
      "Merchant Portals",
      "Financial APIs",
      "Agency Banking Platforms",
      "Digital Banking Solutions",
    ],
    poweredBy: "Powered by the innovation behind Pennycount.",
  },
  {
    slug: "smart-energy",
    path: "/smart-energy",
    navLabel: "Smart Energy Technology",
    icon: Sun,
    eyebrow: "Sustainable Innovation",
    title: "Technology Meets",
    highlight: "Sustainable Energy.",
    description:
      "Working alongside Sumex Energy, we provide smart energy technology for a sustainable future.",
    services: [
      "Solar Monitoring Platforms",
      "Energy Analytics",
      "IoT Energy Management",
      "Smart Meter Integration",
      "Commercial Energy Dashboards",
      "Energy Optimization Systems",
    ],
    poweredBy: "In partnership with Sumex Energy.",
  },
];

export const INDUSTRIES: string[] = [
  "Financial Services",
  "Healthcare",
  "Education",
  "Government",
  "Manufacturing",
  "Logistics",
  "Oil & Gas",
  "Agriculture",
  "Telecommunications",
  "Real Estate",
  "Retail & E-commerce",
  "Faith-Based Organizations",
];

export const ADVANTAGES = [
  {
    title: "Innovation First",
    description: "We leverage emerging technologies to solve real business problems.",
  },
  {
    title: "Enterprise Expertise",
    description: "Our solutions are built to scale with your organization.",
  },
  {
    title: "Security by Design",
    description: "Cybersecurity is integrated into every solution we deliver.",
  },
  {
    title: "Business-Focused",
    description: "We align technology investments with measurable business outcomes.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We don't just deliver projects—we build lasting relationships that help organizations evolve.",
  },
];

export const PROCESS_STEPS = [
  { step: "Step 01", title: "Discover", description: "Understanding your business and technology needs." },
  { step: "Step 02", title: "Design", description: "Creating a strategic roadmap and solution architecture." },
  { step: "Step 03", title: "Develop", description: "Building secure, scalable, and future-ready solutions." },
  { step: "Step 04", title: "Deploy", description: "Seamless implementation with minimal disruption." },
  {
    step: "Step 05",
    title: "Support",
    description: "Continuous optimization, monitoring, and managed services.",
  },
];
