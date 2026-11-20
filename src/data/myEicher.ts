export const objectives = [
  "Modernise the interface and improve information hierarchy.",
  "Make tracking, fuel, uptime, alerts, and services easier to find.",
  "Make fleet status and operational signals easy to scan from the first view.",
  "Group related features so navigation feels predictable.",
  "Improve consistency across web and mobile while keeping existing workflows familiar.",
];

export const researchGoals = [
  "Understand how the existing product organises its features and how much information each screen presents.",
  "Identify where the legacy interface makes information hard to scan or features hard to find.",
  "Decide which metrics, statuses, and actions need primary, secondary, or tertiary emphasis.",
  "Find repeated interface patterns that could be made more consistent.",
  "Determine how the same operational information should translate from web to mobile.",
];

export const researchMethods = [
  ["Existing UI audit", "Review legacy screens for hierarchy, layout, and consistency.", "List of interface improvements."],
  ["Feature and navigation review", "Understand how major modules are organised.", "Feature grouping and navigation direction."],
  ["Content and hierarchy analysis", "Review metrics, statuses, alerts, services, and actions.", "Dashboard information priorities."],
  ["Comparative pattern review", "Compare enterprise dashboards and fleet-management interaction patterns.", "Design principles and interface direction."],
  ["Stakeholder design review", "Refine selected screens through feedback and iteration.", "Updated layouts, spacing, and components."],
];

export const findings = [
  ["Finding what mattered took extra scanning", "Users had to scan several areas to understand what needed attention."],
  ["Critical states lacked emphasis", "Important operational statuses competed with secondary information."],
  ["Services were hard to find", "Users had to work through several categories to locate a service."],
  ["The interface felt inconsistent", "Different sections could feel like separate experiences."],
];

export const designExploration = [
  ["Information grouping", "Grouped related features around the work fleet teams do."],
  ["Priority mapping", "Separated critical operational signals from supporting information."],
  ["Layout exploration", "Compared card and dashboard layouts for the same data."],
  ["Responsive adaptation", "Decided what should stay visible, collapse, or move on mobile."],
];

export const webDecisions = [
  "Lead with the fleet overview and make critical states easy to spot.",
  "Separate tracking, fuel, uptime, alerts, and supporting information.",
  "Break dense information into modular cards.",
  "Use clearer charts for fleet utilisation and fuel and energy insights.",
  "Group related services so users can find them more easily.",
  "Use consistent spacing, components, and interaction patterns.",
];

export const mobileDecisions = [
  "Show a compact fleet overview for quick status checks.",
  "Give fuel and energy, uptime, alerts, and fleet activity dedicated sections.",
  "Organise services into groups that are easy to scan.",
  "Use bottom navigation for predictable access to primary areas.",
  "Adapt cards to smaller screens.",
];

export const dashboardHierarchy = [
  "Fleet overview and connected-vehicle status",
  "Critical states that need attention",
  "Tracking and utilisation",
  "Fuel and energy performance",
  "Uptime and service alerts",
  "Supporting reports and services",
];

export const typography = [
  ["Web portal", "Roboto", "Interface text, navigation, labels, tables, and dense data."],
  ["Mobile app", "Montserrat", "Headings, labels, and interface text."],
];

export const challenges = [
  "Modernise a mature product while keeping familiar workflows recognisable.",
  "Present large volumes of operational data without overwhelming users.",
  "Give important information more emphasis while keeping the full set of features accessible.",
  "Adapt desktop information architecture to a focused mobile experience.",
];

export const outcomes = [
  "Clearer dashboard hierarchy and greater emphasis on fleet status.",
  "Modular layouts for operational information.",
  "Better grouping of related services.",
  "A more focused mobile experience.",
  "More consistent layouts and components across selected screens.",
];

export const futureImprovements = [
  ["Personalised dashboards", "Let users prioritise the metrics and modules that matter to their role."],
  ["Advanced analytics", "Provide deeper fleet, fuel, and utilisation trends for decision-making."],
  ["Configurable alerts", "Let users choose notification types and priorities."],
  ["Accessibility", "Validate contrast, typography, touch targets, and assistive technology support."],
  ["Deeper usability testing", "Test common workflows with real fleet users and measurable tasks."],
  ["Product-wide rollout", "Extend the design system and interaction patterns across the remaining modules."],
];
