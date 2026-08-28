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
    title: "Mobile Application Developer (Flutter)",
    company: "bdCalling IT Ltd.",
    period: "Nov 2024 — Present",
    location: "Banasree, Dhaka, Bangladesh",
    type: "Full-Time",
    description:
      "BD Calling IT Ltd. delivers client-focused software solutions, where I contribute to multiple cross-platform mobile application projects using Flutter.",
    bulletPoints: [
      "Developed and maintained cross-platform mobile applications ensuring responsive UI, seamless performance, and optimal code quality across Android and iOS.",
      "Integrated RESTful APIs and third-party services to enable real-time data synchronization and enhance app functionality as per client requirements.",
      "Collaborated with cross-functional teams, including backend developers and UI/UX designers, to deliver tailored solutions within strict timelines.",
      "Participated in client discussions to gather requirements, provide technical input, and deliver user-friendly apps aligned with business goals."
    ],
    skills: ["Flutter", "Dart", "RESTful APIs", "Android", "iOS", "UI/UX Implementation", "Git"],
  },
  {
    title: "Junior Mobile Application Developer (Flutter)",
    company: "Smart Software Ltd.",
    period: "Nov 2023 — Nov 2024",
    location: "Panthapath, Dhaka, Bangladesh",
    type: "Full-Time",
    description:
      "Engineered government-backed and enterprise mobile solutions including the Bangladesh Forest Department's Snakebite Awareness app and Apcom e-Shop.",
    bulletPoints: [
      "Participated in the entire lifecycle of applications including research, planning, app launch, and client support under the SUFAL project for Bangladesh Forest Department.",
      "Contributed to the Smart Bangladesh initiative by providing life-saving emergency guidance, snake identification, and hospital locators.",
      "Integrated Google Maps SDK for locating antivenom-providing hospitals with GetX state management and built custom animations following Material Design best practices.",
      "Developed Apcom e-Shop with flexible payment options including SSLCommerz and Cash on Delivery using GetX and SharedPreferences.",
      "Collaborated with backend data services, implemented secure REST APIs, and managed Git version control workflows."
    ],
    skills: ["Flutter", "Dart", "GetX", "Google Maps SDK", "SharedPreferences", "SSLCommerz", "REST APIs"],
  },
  {
    title: "Flutter Mentor",
    company: "Atova Technology",
    period: "Sep 2023 — Nov 2023",
    location: "Mohammadpur, Dhaka, Bangladesh",
    type: "Mentorship",
    description:
      "Mentored aspiring polytechnic students in cross-platform mobile application development using Flutter.",
    bulletPoints: [
      "Mentored 30+ Polytechnic students in Flutter mobile app architecture, widget trees, and state management.",
      "Collaborated closely with students to solve practical programming roadblocks and accelerate learning curves.",
      "Guided students in building hands-on mobile applications aligned with industry requirements."
    ],
    skills: ["Flutter", "Dart", "Mentorship", "Technical Training", "Code Review"],
  },
  {
    title: "Mobile App Development Trainer (Flutter)",
    company: "Maktab",
    period: "Jun 2023 — Aug 2023",
    location: "Mirpur, Dhaka, Bangladesh",
    type: "Training",
    description:
      "Trained and prepared students for job-ready mobile software development roles in Flutter.",
    bulletPoints: [
      "Trained 50+ students in core Flutter app development, widget lifecycles, and API integrations.",
      "Identified individual student weaknesses and delivered targeted recovery mentorship to build job readiness.",
      "Conducted practical coding workshops and project reviews from concept to working mobile apps."
    ],
    skills: ["Flutter", "Dart", "Training & Mentorship", "UI Design", "App Architecture"],
  },
  {
    title: "Flutter Mobile App Developer (Internship)",
    company: "Mediasoft Data Systems Limited",
    period: "Sep 2022 — May 2023",
    location: "Karwan Bazar, Dhaka, Bangladesh",
    type: "Internship",
    description:
      "Contributed to enterprise POS application development at Software Technology Park-1 (BDBL Bhaban).",
    bulletPoints: [
      "Collaborated effectively with software development team members and cross-department personnel.",
      "Designed and developed the Restaurant Management POS mobile app in collaboration with the team.",
      "Learned software engineering process improvements, clean architecture, and industry best practices.",
      "Supported development, QA, and user experience staff to develop and test new product features."
    ],
    skills: ["Flutter", "Dart", "POS Systems", "Agile", "QA Testing", "Team Collaboration"],
  },
];

export const educationData: EducationItem = {
  school: "Daffodil International University",
  degree: "B.Sc. in Software Engineering (SWE)",
  focus: "Major in Software Engineering, Mobile Application Development, Java Programming, Object-Oriented Systems & Design Thinking.",
  status: "July 2013 — June 2017 (Graduated)",
};
