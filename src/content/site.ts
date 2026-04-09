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
  },
  navigation: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Alpha-Pi Group",
    title: "Driver recruiting and carrier support for transportation businesses.",
    description:
      "We help carriers recruit drivers, stay organized, and communicate professionally.",
    primaryAction: {
      label: "Contact Us",
      href: "#contact",
    },
    secondaryAction: {
      label: "View Services",
      href: "#services",
    },
  },
  about: {
    eyebrow: "About",
    title: "Direct, reliable, and professional.",
    description:
      "Alpha-Pi Group works directly with carriers and keeps recruiting and communication clear, responsive, and dependable.",
    supportingLine:
      "Direct contact. Fast follow-through. Professional communication.",
  },
  services: {
    eyebrow: "Services",
    title: "Focused support for carriers.",
    description:
      "Three core services, handled clearly and directly.",
    items: [
      {
        index: "01",
        title: "Driver Recruiting",
        description:
          "Direct recruiting support to reach drivers, keep follow-up moving, and reduce hiring friction.",
      },
      {
        index: "02",
        title: "Carrier Support",
        description:
          "Clear coordination for scheduling, updates, and day-to-day carrier communication.",
      },
      {
        index: "03",
        title: "Business Communication",
        description:
          "Professional communication that keeps your company responsive, organized, and credible.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact Alpha-Pi Group.",
    description:
      "Reach out directly for recruiting, carrier support, or business communication.",
  },
  footer: {
    note: "Driver recruiting, carrier support, and business communication.",
  },
} as const;

export type SiteContent = typeof siteContent;
