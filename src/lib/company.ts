export const company = {
  name: "Antofity Concepts",
  tagline: "Technology Infrastructure Built for Business.",
  founded: "September 2017",
  phone: "0722 844 134",
  phoneHref: "tel:+254722844134",
  email: "info@antofityconcepts.co.ke",
  address: [
    "Office No. 99, Keneth Matiba Road",
    "White Angle Building",
    "P.O. Box 50975-00100, GPO",
    "Nairobi, Kenya",
  ],
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Why Antofity", to: "/why-antofity" },
  { label: "Contact", to: "/contact" },
] as const;

export const solutions = [
  {
    number: "01",
    slug: "network-infrastructure",
    title: "Network & Infrastructure",
    summary:
      "Seamless integration across employees, customers, partners and suppliers — designed to leverage existing IT investments and minimise operational and security risk.",
    capabilities: [
      "Architecture Design",
      "Systems Integration",
      "Interface Development",
      "Legacy System Migration",
      "Structured Network Cabling",
      "Network Infrastructure Design & Implementation",
    ],
    benefits: ["Scalable", "Secure", "Compatible", "Future-ready"],
  },
  {
    number: "02",
    slug: "hardware",
    title: "Hardware Sales & Support",
    summary:
      "A technology procurement, deployment and support partner — from specification through to lifecycle maintenance.",
    capabilities: [
      "Switches, Routers, Firewalls, Access Points",
      "PCs, Laptops, Tablets, Servers, Storage",
      "Kaspersky, McAfee, UTM Systems",
      "Structured Cabling & Data Centre Installations",
    ],
    benefits: ["Procure", "Configure", "Deploy", "Maintain"],
  },
  {
    number: "03",
    slug: "unified-communications",
    title: "Unified Communications",
    summary:
      "Integrated communication environments bringing voice, video, messaging, conferencing and collaboration into one business platform.",
    capabilities: [
      "VoIP / IP Telephony Systems",
      "Video Conferencing",
      "PBX / Intercom Setups",
      "Email & Messaging Systems",
    ],
    benefits: [
      "Better collaboration",
      "Improved communication",
      "Greater productivity",
      "Stronger connectivity",
    ],
  },
  {
    number: "04",
    slug: "managed-it",
    title: "Managed IT Services",
    summary:
      "Focus on your business. We handle the monitoring, maintenance and support of your technology environment.",
    capabilities: [
      "Network Infrastructure Management",
      "Application & Software Monitoring",
      "Business Process Outsourcing",
      "Data Backup & Recovery",
      "Proactive Maintenance & Troubleshooting",
      "Monitoring & Support",
    ],
    benefits: [
      "Reduced downtime",
      "Predictable IT costs",
      "Enhanced system security",
      "24/7 monitoring & support",
    ],
  },
];

export const industries = [
  {
    name: "Government",
    description:
      "Secure, standards-driven infrastructure and communications for public institutions that need dependable, well-documented technology environments.",
  },
  {
    name: "NGOs",
    description:
      "Cost-effective connectivity, hardware and managed support for organisations operating across multiple offices and programme sites.",
  },
  {
    name: "Multinational Corporations",
    description:
      "Interoperable network architecture and unified communications that connect local operations with global systems and standards.",
  },
  {
    name: "Large Enterprises",
    description:
      "Scalable structured cabling, data centre installations and managed IT that keep complex business operations running without interruption.",
  },
  {
    name: "Telecom",
    description:
      "Infrastructure design, active device supply and implementation support for high-availability, performance-critical network environments.",
  },
];

export const differentiators = [
  {
    title: "End-to-End ICT Solutions",
    description:
      "One technology partner across infrastructure, hardware, communications and managed services.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Solutions designed around organisational requirements and real business needs.",
  },
  {
    title: "Experienced & Certified Professionals",
    description: "Highly skilled professionals delivering technology solutions.",
  },
  {
    title: "Proven Track Record",
    description:
      "A stated company strength built on consistent delivery for organisations across sectors.",
  },
  {
    title: "Strong Vendor Partnerships",
    description:
      "Reliable technology sourcing and solution delivery through established supply relationships.",
  },
  {
    title: "Quick Turnaround Times",
    description:
      "Responsive engagement from requirement to deployment, and on through support.",
  },
  {
    title: "Reliable After-Sales Support",
    description:
      "Support treated as part of a long-term client relationship, not a closing transaction.",
  },
];

export const process = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the organisation's technology requirements.",
  },
  {
    step: "02",
    title: "Design",
    description: "Develop the appropriate solution architecture.",
  },
  {
    step: "03",
    title: "Implement",
    description: "Deploy and integrate the required technology.",
  },
  {
    step: "04",
    title: "Support",
    description: "Maintain, monitor and support the environment.",
  },
];

export const pillars = [
  {
    title: "Infrastructure",
    description:
      "Structured network cabling, network design and data centre installations engineered for reliability.",
  },
  {
    title: "Hardware",
    description:
      "Procurement, configuration and deployment of network equipment, computing and storage.",
  },
  {
    title: "Communications",
    description:
      "IP telephony, video conferencing, PBX and messaging systems that connect teams and clients.",
  },
  {
    title: "Security",
    description:
      "CCTV installation, firewalls, UTM systems and endpoint security software.",
  },
  {
    title: "Managed IT",
    description:
      "Proactive monitoring, maintenance, backup and support across the technology environment.",
  },
];
