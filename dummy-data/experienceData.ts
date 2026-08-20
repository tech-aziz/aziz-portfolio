export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  bulletPoints: string[];
  skills: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  focus: string;
  status: string;
}

export const experiencesData: ExperienceItem[] = [
  {
    title: "Mobile Application Developer",
    company: "ATRULE Technologies",
    period: "2021 — Present",
    location: "Lahore, Punjab, Pakistan",
    type: "Full-Time Partnership (5+ Years)",
    description:
      "Leading cross-platform and native mobile application engineering, architectural design, store releases, and AI feature integration across 15+ production applications.",
    bulletPoints: [
      "Architected scalable MVVM & Clean Architecture codebases in Flutter, serving over 200,000+ total active installs.",
      "Spearheaded Kotlin Multiplatform (KMP) adoption with shared Kotlin core logic and native Jetpack Compose / SwiftUI user interfaces.",
      "Integrated RevenueCat subscription paywalls, FCM push notifications, WebSockets real-time sync, and Google Maps API.",
      "Engineered on-device AI capabilities including ML Kit OCR document parsing and OpenAI LLM assistants.",
      "Managed 100% of Google Play Console & Apple App Store Connect submission lifecycles and phased rollouts."
    ],
    skills: ["Flutter", "KMP", "Jetpack Compose", "SwiftUI", "RevenueCat", "Firebase", "AI Integration"],
  },
  {
    title: "Top Rated Mobile Application Developer",
    company: "Upwork & Independent Client Services",
    period: "2020 — Present",
    location: "Remote (Global Clients)",
    type: "Freelance Consultancy",
    description:
      "Delivered end-to-end mobile app development with a 100% Job Success score for clients across North America, Europe, UAE, and Asia.",
    bulletPoints: [
      "Delivered 15+ private NDA mobile projects in fintech, trading utilities, fitness, and enterprise logistics.",
      "Partnered directly with founders and product teams to refactor legacy codebases and reduce app crash rates by 80%.",
      "Conducted code audits and performance optimization for smooth 60fps mobile UI rendering."
    ],
    skills: ["Flutter", "Dart", "REST APIs", "Fintech Apps", "Client Strategy", "Code Review"],
  },
  {
    title: "Mobile Software Engineer",
    company: "CodeDesk Studio & Freelance Projects",
    period: "2019 — 2021",
    location: "Lahore, Pakistan",
    type: "Mobile Engineering",
    description:
      "Built native Android applications and early cross-platform Flutter mobile solutions.",
    bulletPoints: [
      "Developed native Android apps using Kotlin and Java with SQLite local databases.",
      "Integrated Firebase Authentication, FCM notifications, and AdMob monetization streams.",
      "Collaborated with UI/UX designers to translate Figma mockups into responsive pixel-perfect screens."
    ],
    skills: ["Android", "Kotlin", "Java", "Flutter", "SQLite", "Firebase"],
  },
];

export const educationData: EducationItem = {
  school: "COMSATS University Islamabad",
  degree: "Bachelor of Science in Computer Science (BSCS)",
  focus: "Core Focus: Mobile Application Architecture, Object-Oriented Systems, Data Structures & Algorithms, Software Engineering.",
  status: "Graduated",
};
