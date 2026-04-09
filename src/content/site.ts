export type IconName =
  | "BriefcaseBusiness"
  | "Building2"
  | "Clock3"
  | "Landmark"
  | "MessageSquareText"
  | "PhoneCall"
  | "Orbit"
  | "ShieldCheck"
  | "Truck"
  | "Waypoints"
  | "Workflow";

export const siteContent = {
  companyName: "Alpha-Pi Group",
  contactDetails: {
    email: {
      label: "Placeholder business email",
      value: "business@alphapigroup.com",
      href: "mailto:business@alphapigroup.com",
    },
    phone: {
      label: "Placeholder business phone",
      value: "(000) 000-0000",
      href: "tel:+10000000000",
    },
    note: "Replace the placeholder email and phone number with live business contact details before launch.",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Modern driver recruiting and carrier support",
    title:
      "Professional recruiting and carrier support for transportation businesses that expect a higher standard.",
    highlightedText: "higher standard.",
    description:
      "Alpha-Pi Group works with motor carriers to help connect them with drivers through direct communication, organized follow-through, and a professional workflow that reflects serious business.",
    primaryAction: {
      label: "Get in Touch",
      href: "mailto:business@alphapigroup.com",
    },
    secondaryAction: {
      label: "Our Services",
      href: "#services",
    },
    plaqueTitle: "Built for carriers that value professionalism.",
    plaqueDescription:
      "We support recruiting, communication, and day-to-day coordination in a way that feels modern, responsive, and legitimate from the first conversation.",
    plaqueHighlights: [
      "Driver recruiting",
      "Carrier support",
      "Operational follow-through",
    ],
    supportingNotes: [
      {
        title: "Direct communication",
        description: "Clear outreach, fast replies, and less back-and-forth.",
      },
      {
        title: "Professional workflow",
        description:
          "A cleaner process for carriers, drivers, and business partners.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "A serious business supporting carriers and recruiting drivers.",
    description:
      "Alpha-Pi Group focuses on driver recruiting and carrier support in the trucking and transportation space. We help motor carriers communicate clearly, move faster, and present a more professional process to drivers and partners.",
    principles: [
      {
        title: "Driver recruiting",
        description:
          "We help carriers connect with drivers through direct communication and a more organized recruiting process.",
      },
      {
        title: "Carrier support",
        description:
          "We stay close to the workflow so carriers get responsive support, cleaner coordination, and fewer loose ends.",
      },
      {
        title: "Professional execution",
        description:
          "The work is modern, reliable, and built to reflect the standard of a legitimate transportation business.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Focused support for recruiting, communication, and operational follow-through.",
    description:
      "Alpha-Pi Group keeps the offer simple: help carriers recruit drivers, support daily communication, and improve the business workflow around growth and execution.",
    items: [
      {
        title: "Driver Recruiting",
        description:
          "Direct recruiting support that helps carriers connect with drivers without looking disorganized or transactional.",
        icon: "Truck" as const,
      },
      {
        title: "Carrier Support",
        description:
          "Responsive communication and follow-through for carrier-side needs, updates, and day-to-day coordination.",
        icon: "PhoneCall" as const,
      },
      {
        title: "Business Operations & Growth Support",
        description:
          "Practical support around workflow, business structure, and operational momentum as the company grows.",
        icon: "Workflow" as const,
      },
    ],
  },
  whyUs: {
    eyebrow: "Why Us",
    title: "Why carriers choose Alpha-Pi Group.",
    description:
      "The difference is not noise or hype. It is cleaner communication, faster follow-through, and a workflow that treats every interaction like real business.",
    points: [
      {
        title: "Direct communication",
        description:
          "Clear contact, straightforward updates, and less wasted time across the process.",
        icon: "MessageSquareText" as const,
      },
      {
        title: "Fast response",
        description:
          "Speed matters in recruiting and carrier coordination, so response time stays a priority.",
        icon: "Clock3" as const,
      },
      {
        title: "Professional workflow",
        description:
          "A cleaner, more consistent process helps carriers look established and operate with confidence.",
        icon: "Workflow" as const,
      },
      {
        title: "Modern business approach",
        description:
          "The work is organized, current, and built for transportation businesses that want a more professional standard.",
        icon: "Waypoints" as const,
      },
      {
        title: "Reliable support",
        description:
          "Consistent follow-through matters. Alpha-Pi Group is built to be dependable where it counts.",
        icon: "ShieldCheck" as const,
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Start the conversation.",
    description:
      "For business inquiries, recruiting support, or carrier partnership conversations, reach out directly. The contact details below are placeholders and can be replaced before launch.",
    primaryAction: {
      label: "Email Alpha-Pi Group",
      href: "mailto:business@alphapigroup.com",
    },
    secondaryAction: {
      label: "Our Services",
      href: "#services",
    },
  },
  footer: {
    note: "Modern driver recruiting and carrier support for serious transportation businesses.",
  },
} as const;

export type SiteContent = typeof siteContent;
