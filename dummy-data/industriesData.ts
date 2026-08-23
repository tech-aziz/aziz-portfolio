export interface IndustryItem {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export const industriesData: IndustryItem[] = [
  {
    emoji: "🩺",
    title: "Healthcare & Emergency Medical",
    subtitle: "Snakebite Guide & Prime Hospital portals",
    description:
      "Doctor consultation platforms, patient scheduling portals, and specialised first-aid utility apps providing emergency guidelines and medical support.",
    tags: ["Hospital Portals", "Doctor Booking", "First Aid Guides", "HIPAA/Data Security"],
  },
  {
    emoji: "🧠",
    title: "AI-Powered Wellness & Journals",
    subtitle: "Dreamtrace.ai dream tracker",
    description:
      "Intelligent mobile logs integrating generative AI engines to analyze user logs, track sleep patterns, perform mood check-ins, and deliver behavioral insights.",
    tags: ["AI Integrations", "Dream Journals", "On-device AI", "Habit Analysis"],
  },
  {
    emoji: "🎓",
    title: "Gamified EdTech & Skill Building",
    subtitle: "Skillquester & The Akktricks portals",
    description:
      "Interactive tutorial and learning apps designed for gamified course delivery, skill quest tracking, and video guides for creative professionals.",
    tags: ["Skill Quests", "Video Tutorials", "Interactive Quizzes", "In-App Purchases"],
  },
  {
    emoji: "🛠️",
    title: "Field Utilities & Enterprise HRM",
    subtitle: "HVAC Assistant & Smart HRM apps",
    description:
      "B2B mobile tools containing calculator engines for HVAC technicians, combined with smart HR management portals for employee attendance, payroll, and logs.",
    tags: ["HVAC Utilities", "Employee Portals", "Offline Tools", "Payroll Systems"],
  },
  {
    emoji: "💬",
    title: "Community Socials & Networks",
    subtitle: "Somtalk app & APCOM directory",
    description:
      "Real-time communication portals, community messaging forums, and corporate directory databases for associations and local networking.",
    tags: ["Realtime Chat", "Member Databases", "WebSockets", "Push Notifications"],
  },
];
