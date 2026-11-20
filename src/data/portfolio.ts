export const resumeUrl = "/Rohit-Yadav-Resume.pdf";
export const portfolioUrl = "https://thoracic-gem-674.notion.site/Rohit-Yadav-UI-UX-Portfolio-2f92695918e180fd9d42e6c163d91db1";

type CaseStudy =
  | { kind: "new"; challenge: string; approach: string }
  | { kind: "redesign"; before: string; after: string; validation: string };

type Project = {
  slug: string;
  title: string;
  overview: string;
  contribution: string;
  platform: string;
  role: string;
  workflow: string[];
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "vecv-vehicle-tracking",
    title: "VECV Vehicle Tracking System",
    overview: "A mobile app and dashboard for Volvo Eicher Commercial Vehicles.",
    contribution: "Designed and developed responsive screens for live vehicle tracking, fleet analytics, and daily operations.",
    platform: "Mobile app & web dashboard",
    role: "UI/UX design and frontend development",
    workflow: ["Find a vehicle", "Check live status", "Review fleet activity"],
    caseStudy: {
      kind: "new",
      challenge: "Fleet teams need quick vehicle checks and a clear view of the whole fleet.",
      approach: "Keep live vehicle status on mobile. Group fleet analytics and operations on the dashboard.",
    },
  },
  {
    slug: "my-eicher",
    title: "My Eicher",
    overview: "A fleet-management web portal and mobile app for commercial fleet teams.",
    contribution: "Redesigned the fleet dashboard and service navigation across web and mobile.",
    platform: "Web portal and mobile app",
    role: "UI/UX and product redesign",
    workflow: ["Review fleet status", "Check alerts", "Find a service"],
    caseStudy: {
      kind: "redesign",
      before: "Fleet metrics, alerts, and service shortcuts competed for attention.",
      after: "Prioritise fleet status and critical alerts, then group related tools and services.",
      validation: "Test vehicle lookup, alert discovery, and service navigation with fleet users.",
    },
  },
  {
    slug: "edf-warehouse-management",
    title: "EDF Warehouse Management",
    overview: "A warehouse system for tracking meters and inventory.",
    contribution: "Designed responsive workflows for the meter lifecycle, GRN and MRN handling, and mobile warehouse tasks.",
    platform: "Responsive web & mobile",
    role: "UI/UX and workflow design",
    workflow: ["Find a meter", "Record movement", "Review receipt or issue"],
    caseStudy: {
      kind: "new",
      challenge: "Warehouse teams need a clear record of every meter movement from receipt to issue.",
      approach: "Give goods receipts and material requisitions separate flows within the meter lifecycle.",
    },
  },
  {
    slug: "job-portal",
    title: "Job Portal Website",
    overview: "A job listing platform for candidates and employers.",
    contribution: "Created wireframes and prototypes, then designed and developed responsive screens for job search, application tracking, and employer dashboards.",
    platform: "Responsive website",
    role: "UI/UX design and frontend development",
    workflow: ["Search for a role", "Apply", "Track the application"],
    caseStudy: {
      kind: "new",
      challenge: "Candidates need to find roles and track applications. Employers need to manage hiring.",
      approach: "Prototype candidate and employer flows before building the responsive screens.",
    },
  },
];

export const journey = [
  ["Apr 2025 – Present", "UI/UX Designer & Developer", "Sampark Softwares · Gurugram", "Design vehicle tracking, warehouse, inventory, supply chain, and HR workflows."],
  ["Feb 2024 – Mar 2025", "UI/UX Designer", "VanyaIT · Nagpur", "Designed a responsive job portal and music app features for chat, playlist sharing, and listening together."],
  ["Aug 2023 – Jan 2024", "UI/UX Developer Trainee", "Chetu Inc. · Noida", "Worked on admin panels, e-commerce interfaces, and responsive apps using HTML, CSS, Bootstrap, JavaScript, and jQuery."],
  ["Aug 2019 – Jul 2023", "B.Tech in Computer Science and Engineering", "Babu Banarasi Das Institute of Technology Management · Lucknow", ""],
] as const;
