export type IconName =
  | "BriefcaseBusiness"
  | "Building2"
  | "Landmark"
  | "Orbit"
  | "ShieldCheck"
  | "Waypoints"
  | "Workflow";

export const siteContent = {
  companyName: "Alpha-Pi Group",
  email: "hello@alphapigroup.com",
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Independent advisory and operating perspective",
    title: "Deliberate strategy for businesses that value clarity over noise.",
    highlightedText: "clarity over noise.",
    description:
      "Alpha-Pi Group helps leadership teams sharpen direction, strengthen positioning, and move with disciplined conviction. We work quietly, think long term, and focus on decisions that compound.",
    primaryAction: {
      label: "Start a Conversation",
      href: "mailto:hello@alphapigroup.com",
    },
    secondaryAction: {
      label: "Explore Services",
      href: "#services",
    },
    plaqueTitle: "A steady hand at pivotal moments.",
    plaqueDescription:
      "Built for operators, founders, and leadership teams who need strategic traction without performative complexity.",
    plaqueHighlights: [
      "Strategic clarity",
      "Structured execution",
      "Long-horizon perspective",
    ],
    supportingNotes: [
      {
        title: "Senior attention",
        description: "Direct engagement with focused, high-context work.",
      },
      {
        title: "Measured pace",
        description: "Deliberate recommendations with practical next steps.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "A modern partner for complex business decisions.",
    description:
      "We support high-stakes moments where positioning, structure, and judgment matter. Our role is to reduce friction in decision-making, create coherent operating paths, and help teams align around the right next move.",
    principles: [
      {
        title: "Clarity first",
        description:
          "We turn ambiguity into clear priorities, concise narratives, and actionable direction.",
      },
      {
        title: "Operationally grounded",
        description:
          "Strategy only matters if it survives contact with execution, resources, and timelines.",
      },
      {
        title: "Built for trust",
        description:
          "Our approach is quiet, rigorous, and designed to strengthen confidence at the leadership level.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Focused support across strategy, structure, and growth readiness.",
    description:
      "The work is tailored to context, but the mandate stays consistent: sharpen positioning, improve decision quality, and create momentum without unnecessary complexity.",
    items: [
      {
        title: "Strategic Advisory",
        description:
          "Refine direction, frame key choices, and align leadership around the decisions that matter most.",
        icon: "BriefcaseBusiness" as const,
      },
      {
        title: "Corporate Positioning",
        description:
          "Strengthen how the business is understood by stakeholders, partners, and the market.",
        icon: "Building2" as const,
      },
      {
        title: "Operating Model Design",
        description:
          "Clarify responsibilities, flows, and priorities so execution becomes more deliberate and scalable.",
        icon: "Workflow" as const,
      },
      {
        title: "Capital and Growth Readiness",
        description:
          "Prepare the narrative, structure, and strategic materials needed for the next phase of expansion.",
        icon: "Landmark" as const,
      },
    ],
  },
  whyUs: {
    eyebrow: "Why Us",
    title: "Premium by discipline, not by decoration.",
    description:
      "Alpha-Pi Group is designed for teams that prefer substance, discretion, and thoughtful execution over broad promises.",
    points: [
      {
        title: "Senior-level judgment",
        description:
          "You get experienced thinking, direct communication, and recommendations that respect context.",
        icon: "ShieldCheck" as const,
      },
      {
        title: "Structured movement",
        description:
          "We create clear frameworks that help teams move forward without introducing extra noise.",
        icon: "Waypoints" as const,
      },
      {
        title: "Long-horizon view",
        description:
          "Every recommendation is weighed against durability, credibility, and long-term strategic value.",
        icon: "Orbit" as const,
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Move with conviction.",
    description:
      "If you need a sharper point of view, a more coherent strategic position, or a trusted thought partner for the next phase, start here.",
    primaryAction: {
      label: "Email Alpha-Pi Group",
      href: "mailto:hello@alphapigroup.com",
    },
    secondaryAction: {
      label: "Back to Top",
      href: "#top",
    },
  },
  footer: {
    note: "Independent advisory for businesses that value precision, trust, and long-term thinking.",
  },
} as const;

export type SiteContent = typeof siteContent;

