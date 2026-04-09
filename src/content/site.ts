export const siteContent = {
  companyName: "Alpha-Pi Group",
  contactDetails: {
    operators: [
      {
        name: "Aiden Wilson",
        email: {
          label: "Email",
          value: "aiden@alphapigroup.com",
          href: "mailto:aiden@alphapigroup.com",
        },
        phone: {
          label: "Phone",
          value: "(314) 266-4949",
          href: "tel:+13142664949",
        },
      },
      {
        name: "Alvyn Reed",
        email: {
          label: "Email",
          value: "alvyn@alphapigroup.com",
          href: "mailto:alvyn@alphapigroup.com",
        },
        phone: {
          label: "Phone",
          value: "(314) 254-3399",
          href: "tel:+13142543399",
        },
      },
    ],
    note: "Alpha-Pi Group is run directly by Aiden Wilson and Alvyn Reed.",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Driver recruiting / carrier support",
    titleLines: [
      "Driver recruiting",
      "and carrier support",
      "with a sharper",
      "business presence.",
    ],
    description:
      "Alpha-Pi Group helps transportation businesses recruit drivers, manage communication, and move with a cleaner operational rhythm from first contact to ongoing coordination.",
    primaryAction: {
      label: "View Contacts",
      href: "#contact",
    },
    secondaryAction: {
      label: "Explore Services",
      href: "#services",
    },
    supportingIntro:
      "Built for carriers that want the process to look as deliberate as the operation behind it.",
    panels: [
      {
        index: "01",
        title: "Recruiting that feels intentional",
        description:
          "Targeted driver conversations, cleaner follow-through, and less wasted motion.",
      },
      {
        index: "02",
        title: "Carrier-side coordination",
        description:
          "Responsive communication across hiring, updates, and day-to-day support.",
      },
      {
        index: "03",
        title: "Operational momentum",
        description:
          "Structure, pace, and a more credible business presentation as the business grows.",
      },
    ],
    contactLabel: "Direct line",
    scrollLabel: "Scroll to explore",
  },
  about: {
    eyebrow: "About",
    title:
      "A more disciplined front end for transportation businesses that want to look established.",
    lead:
      "Alpha-Pi Group is run directly by Aiden Wilson and Alvyn Reed, supporting carriers with recruiting and communication systems that feel current, responsive, and serious.",
    manifesto: [
      "The business is built around direct contact, fast follow-through, and a cleaner experience for drivers, carrier teams, and partners.",
      "Instead of adding noise, the focus stays on execution: clearer outreach, tighter coordination, and a workflow that reflects a company operating with intent.",
    ],
    principles: [
      {
        index: "A1",
        title: "Direct outreach",
        description:
          "Driver conversations stay personal, clear, and organized rather than fragmented.",
      },
      {
        index: "A2",
        title: "Controlled follow-through",
        description:
          "Updates, replies, and next steps are handled with pace so the process keeps moving.",
      },
      {
        index: "A3",
        title: "Professional presentation",
        description:
          "Every touchpoint should feel like a serious transportation business, not a temporary patchwork operation.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Three focused disciplines. One higher standard of execution.",
    description:
      "The offer stays disciplined: recruit better, communicate faster, and support growth without letting the business feel improvised.",
    items: [
      {
        index: "01",
        label: "Driver Recruiting",
        title:
          "Find and engage drivers with a process that feels credible from the first touch.",
        description:
          "Alpha-Pi Group supports recruiting conversations, follow-up cadence, and presentation so carriers can move faster without looking disjointed.",
        outcomes: [
          "Cleaner outreach",
          "Faster follow-through",
          "Less recruiting friction",
        ],
      },
      {
        index: "02",
        label: "Carrier Support",
        title:
          "Keep day-to-day coordination sharp, responsive, and easy to trust.",
        description:
          "Carrier-side communication stays organized across updates, scheduling, and general support so fewer details get lost in motion.",
        outcomes: [
          "Clearer communication",
          "More reliable coordination",
          "Less operational drag",
        ],
      },
      {
        index: "03",
        label: "Business Operations",
        title:
          "Support growth with a workflow that looks more deliberate and runs with more control.",
        description:
          "Practical operational support helps the business move with stronger structure, cleaner presentation, and better momentum as demands increase.",
        outcomes: [
          "Stronger business presence",
          "Better internal rhythm",
          "Support that scales with growth",
        ],
      },
    ],
  },
  whyUs: {
    eyebrow: "Why Alpha-Pi",
    title: "Why serious carriers keep the process close.",
    description:
      "The value is not hype. It is sharper communication, tighter control, and a business presence that feels deliberate at every step.",
    railLabel: "Operating principles",
    points: [
      {
        index: "01",
        title: "Direct communication",
        description:
          "Straight answers, clear updates, and fewer loose ends across recruiting and coordination.",
      },
      {
        index: "02",
        title: "Fast response time",
        description:
          "Momentum matters, so replies and follow-ups are treated like part of the service itself.",
      },
      {
        index: "03",
        title: "Professional workflow",
        description:
          "A cleaner process helps carriers look established and operate with more confidence.",
      },
      {
        index: "04",
        title: "Modern business posture",
        description:
          "The work stays current, organized, and aligned with how serious transportation businesses want to be perceived.",
      },
      {
        index: "05",
        title: "Dependable follow-through",
        description:
          "Consistency matters. Alpha-Pi Group is built to stay responsive where execution actually counts.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "If the business needs to move with more control, start here.",
    description:
      "Reach out directly to Aiden Wilson or Alvyn Reed for recruiting support, carrier coordination, or operational conversations.",
    primaryAction: {
      label: "Email Aiden",
      href: "mailto:aiden@alphapigroup.com",
    },
    secondaryAction: {
      label: "Email Alvyn",
      href: "mailto:alvyn@alphapigroup.com",
    },
    availability:
      "Aiden Wilson and Alvyn Reed handle recruiting support, carrier partnerships, and business operations conversations directly.",
  },
  footer: {
    note: "Modern recruiting and carrier support for transportation businesses that prefer a cleaner standard.",
  },
} as const;

export type SiteContent = typeof siteContent;
