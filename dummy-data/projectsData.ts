export interface ProjectCardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDetails: string[];
  tech: string[];
  filterCategories: string[];
  featured?: boolean;
  installs?: string;
  rating?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  webUrl?: string;
  isNda?: boolean;
  imageUrl: string;
  problem?: string;
  solution?: string;
  outcome?: string;
  myRole?: string;
  coreCapabilities?: string[];
  architecture?: string[];
  bannerUrl?: string;
  techStack?: string[];
}

export interface FilterTab {
  id: string;
  label: string;
}

export const filterTabsData: FilterTab[] = [
  { id: "all", label: "All Work" },
  { id: "highlights", label: "Highlights" },
  { id: "flutter", label: "Flutter Apps" },
  { id: "ai", label: "AI Integration" },
  { id: "utilities", label: "Utilities & Health" },
  { id: "commerce", label: "Business & Commerce" },
  { id: "habits", label: "Wellness & EdTech" },
];

export const PROJECTS_LIST: ProjectCardData[] = [
  {
    id: "smartsoftware.snakebite",
    title: "সর্প দংশনে সচেতনতা অ্যাপ",
    subtitle: "Snakebite Awareness & Emergency Support",
    description: "Every year in Bangladesh, approximately 400,000 people are bitten by snakes, with around 7,500 deaths reported. Many of these deaths occur due to unscientific treatment by traditional healers and delays in reaching proper medical facilities. Timely access to accurate information, awareness, and appropriate medical care can significantly reduce snakebite-related deaths. With this goal in mind, the Awareness, Rescue and Protection in Snakebite mobile app, the first of its kind in Bangladesh, was developed under the Innovation Grant funded by the Sustainable Forest and Livelihood (SUFAL) Project, implemented by the Forest Department, as part of the vision for building a Smart Bangladesh.",
    fullDetails: [
      "1K+ total downloads on Google Play Store with a 4.8+ star rating.",
      "Developed to provide snakebite awareness, first-aid guidance, and emergency support.",
      "Includes information on 30+ snake species, hospitals, antivenom availability, trained snake rescuers, and emergency contacts.",
      "Built to help users quickly access reliable snakebite information and nearby treatment resources.",
      "Features information on snake species, hospitals, antivenom, rescuers, and emergency contacts.",
      "Innovation Grant funded by the SUFAL project, implemented by the Bangladesh Forest Department."
    ],
    tech: ["Flutter", "SQLite", "mobile app", "Android", "awareness", "emergency support"],
    techStack: ["Flutter", "SQLite", "GetX", "Dio", "shared_preferences", "REST APIs", "Firebase"],
    filterCategories: ["flutter", "utilities", "highlights"],
    featured: true,
    installs: "1K+",
    rating: "4.8★",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartsoftware.snakebite",
    imageUrl: "/projects/snakebite.png",
    bannerUrl: "/projects/snakebite_banner.png",
    problem: "Delayed medical response, reliance on unscientific treatments, and difficulty in locating antivenom availability and trained snake rescuers during emergencies.",
    solution: "Developed an offline-first mobile app using Flutter to provide instant access to emergency rescuers, antivenom hospitals, first aid guides, and snake identification resources.",
    outcome: "Successfully deployed on Google Play Store, earning a 4.8+ star rating and serving as Bangladesh's first governmental-backed emergency response app for snakebites.",
    myRole: "Led architecture and implementation across Flutter UI modules, designed the offline database layout, implemented location tracking for rescuers, and developed the hospital and antivenom stock directory integration.",
    coreCapabilities: [
      "Live hospital & antivenom stock directory locator",
      "One-click emergency helpline dialer & direct rescuer contacts",
      "Offline-enabled snake identification guide (30+ species)",
      "Interactive first-aid response guidelines and safety FAQs"
    ],
    architecture: [
      "Flutter & Dart for cross-platform utility structure",
      "GetX for responsive state tracking and lightweight routing",
      "SQLite (SQFLite) for offline database caching of emergency contacts",
      "REST API integration for dynamic hospital & antivenom listings"
    ]
  },
  {
    id: "com.dreamtrace.ai",
    title: "DreamTrace AI",
    subtitle: "AI-Powered Dream Analysis & Insights",
    description: "DreamTrace AI is an AI-powered mobile application designed to help users explore, understand, and reflect on their dreams through personalized AI-generated interpretations. Users can describe their dreams through text or voice and receive meaningful insights based on their dream entries. DreamTrace AI was developed using Flutter and OpenAI API integration, providing personalized dream analysis, dream history tracking, and secure data storage. The app aims to make AI-powered dream exploration simple, accessible, and engaging for everyday users.",
    fullDetails: [
      "AI-powered dream analysis using OpenAI API for personalized interpretations.",
      "Supports text and voice-to-text dream submissions for a convenient user experience.",
      "Provides personalized dream insights and helps users explore possible meanings.",
      "Includes smart dream history analysis to help users track and reflect on their dreams.",
      "Built with Flutter, REST API, Firebase, secure data storage, and encrypted user data."
    ],
    tech: ["Flutter", "OpenAI API", "REST APIs", "Firebase", "Secure Data Storage"],
    filterCategories: ["flutter", "ai", "highlights"],
    featured: true,
    installs: "Recently Launched",
    rating: "New",
    problem: "Many people struggle to make sense of their dreams, lacking tools that provide meaningful, personalized interpretation — while existing solutions are either too generic, require manual journaling effort, or fail to track emotional patterns over time.",
    solution: "Built an AI-powered mobile app using Flutter and OpenAI API that lets users log dreams via text or voice, then generates personalized interpretations and tracks emotional tone, mood trends, and dream history in a clean, engaging interface.",
    outcome: "Successfully launched on Google Play Store with a \"Recently Launched\" designation, delivering a seamless AI dream journaling experience with positive early user engagement and a growing active user base.",
    myRole: "Led full-stack mobile development — designed the UI/UX, integrated OpenAI API for dream interpretation, implemented voice-to-text input, built the dream history and mood tracking system, and managed Firebase backend and secure data storage.",
    coreCapabilities: [
      "AI-generated dream interpretations powered by OpenAI API",
      "Voice-to-text dream logging for fast, hands-free entry",
      "Mood tracking with emotional tone analysis per dream entry",
      "Dream history dashboard with insights and weekly summaries",
      "Secure encrypted storage of personal dream data via Firebase"
    ],
    architecture: [
      "Flutter & Dart for cross-platform mobile UI",
      "OpenAI API for natural language dream interpretation",
      "GetX for state management and lightweight routing",
      "Firebase for authentication, cloud storage, and real-time sync",
      "REST APIs for AI model communication and data retrieval"
    ],
    techStack: ["Flutter", "OpenAI API", "GetX", "Firebase", "REST APIs", "Dio", "shared_preferences"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.dreamtrace.ai",
    imageUrl: "/projects/dreamtrace_card.png",
    bannerUrl: "/projects/dreamtrace_banner.png",
  },
  {
    id: "com.skillquester.app",
    title: "SkillQuester",
    subtitle: "Master Real Life Skills",
    description: "SkillQuester is a gamified learning app designed to help users build practical real-life skills through fun, bite-sized learning. It transforms essential life knowledge into an interactive experience.",
    fullDetails: [
      "Provides bite-sized lessons focused on practical real-life skills and personal finance.",
      "Covers budgeting, saving, debt management, smart spending, financial goals, credit, and long-term wealth habits.",
      "Uses gamified learning with progress levels, skill paths, achievements, milestones, and daily learning streaks.",
      "Includes bite-sized challenges and clear progress tracking to help users build skills consistently.",
      "Designed with beginner-friendly, practical, and actionable lessons that can be completed in just a few minutes."
    ],
    tech: ["Flutter", "Dart", "GetX", "Dio", "REST APIs", "Firebase", "Secure Data Storage", "Local Storage"],
    techStack: ["Flutter", "Dart", "GetX", "Dio", "Firebase", "REST APIs", "Secure Storage"],
    filterCategories: ["flutter", "habits", "highlights"],
    featured: true,
    installs: "Recently Launched",
    rating: "New",
    problem: "Most people graduate school without learning essential skills like budgeting, saving, investing, and managing money. Existing resources often rely on boring lectures or complicated financial jargon, making it difficult for individuals to stay motivated and actively improve their financial health.",
    solution: "Developed a mobile app using Flutter that turns practical life skills into an engaging, game-like learning experience. The app teaches step-by-step through simple lessons, bite-sized challenges, and interactive progress systems, launching initially with a comprehensive Budgeting & Finance skill path.",
    outcome: "Successfully launched on the App Store, providing users with a motivating way to level up their life skills. The app encourages consistent learning through daily streaks, progress levels, achievements, and clear milestones.",
    myRole: "Led the end-to-end development of the iOS application using Flutter and Dart. Implemented robust state management with GetX, handled network requests via Dio, and integrated Firebase along with Secure Data Storage and Local Storage to ensure seamless progress tracking and data security.",
    coreCapabilities: [
      "Bite-sized challenges and interactive progress systems",
      "Daily learning streaks and clear progress tracking",
      "Budgeting & Finance skill path",
      "Gamified learning with progress levels and achievements"
    ],
    architecture: [
      "Flutter & Dart for cross-platform utility structure",
      "GetX for responsive state tracking and lightweight routing",
      "Firebase for backend and database",
      "REST API integration using Dio for data fetching"
    ],
    appStoreUrl: "https://apps.apple.com/us/app/skillquester/id6755081369",
    imageUrl: "/projects/skillquester_card.png",
    bannerUrl: "/projects/skillquester_banner.png",
  },
  {
    id: "com.smartsoftware.hrm",
    title: "Smart HRM",
    subtitle: "Complete HR & Payroll Management Solution",
    description: "Smart HRM is a comprehensive HR and payroll management solution designed for corporate employees. The platform helps organizations manage employee salaries, payroll, attendance, leave, loans, salary increments, late management, and other essential HR operations. Its mobile app provides employees with easy access to attendance, GPS tracking, leave management, work reports, pay-slip details, salary status, loans, and company notifications.",
    fullDetails: [
      "Comprehensive HR and payroll management for corporate employees.",
      "Tracks employee salary, payroll, attendance, leave, loans, salary increments, and late management.",
      "Provides employee profiles and daily work report management.",
      "Supports daily attendance with Work-In and Work-Out tracking.",
      "Includes GPS-based attendance and employee location tracking.",
      "Allows employees to submit leave applications and manage recommendation and approval workflows.",
      "Supports outwork submission and approval.",
      "Allows employees to view pay-slip details and salary status.",
      "Enables employees to apply for HR loans through the mobile app.",
      "Provides news, holiday, and birthday notifications."
    ],
    tech: ["Flutter", "Dart", "REST APIs", "Firebase", "GPS & Location Services", "Push Notifications"],
    techStack: ["Flutter", "Dart", "REST APIs", "Firebase", "GPS Services"],
    filterCategories: ["flutter", "commerce", "highlights"],
    featured: true,
    installs: "1K+",
    rating: "3.6★",
    problem: "Managing HR processes manually or using disjointed tools often leads to errors in attendance tracking, payroll processing delays, and difficulty in monitoring employee field locations. Employees also struggle with fragmented systems for applying for leaves, tracking their daily work, and viewing pay-slips.",
    solution: "Developed a cross-platform mobile application using Flutter to serve as a centralized hub for employees. It integrates GPS-based attendance tracking, secure leave management workflows, real-time work reporting, and payroll status viewing into a single, intuitive interface.",
    outcome: "Deployed successfully and used by over 1,000 corporate employees. It has significantly streamlined HR operations, reduced payroll discrepancies, and increased transparency between management and employees.",
    myRole: "Led the mobile application development using Flutter and Dart. Designed the UI for the dashboard, implemented GPS location tracking for attendance, integrated REST APIs for real-time synchronization with the HR backend, and utilized Firebase for push notifications.",
    coreCapabilities: [
      "GPS-based attendance and live employee location tracking",
      "Leave applications with recommendation and approval workflows",
      "Easy access to pay-slip details and salary status tracking",
      "Daily work report management and HR loan applications"
    ],
    architecture: [
      "Flutter & Dart for cross-platform mobile application structure",
      "REST API integration for real-time data sync with corporate servers",
      "Firebase Cloud Messaging for instant news, holiday, and birthday notifications",
      "Native device integration for GPS services and location monitoring"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartsoftware.hrm",
    imageUrl: "/projects/smart_hrm_dashboard.png",
    bannerUrl: "/projects/smart_hrm_dashboard.png",
  },
  {
    id: "com.primehospitalltd.smart",
    title: "Prime Hospitals Ltd",
    subtitle: "Healthcare Services & Hospital Information",
    description: "Prime Hospitals Ltd is a healthcare-focused mobile application developed for Prime Hospital Ltd in Noakhali, Bangladesh. The app provides users with information about the hospital, its healthcare services, outpatient facilities, emergency services, consultants, and indoor healthcare facilities, helping patients and visitors stay informed about the hospital and its available services.",
    fullDetails: [
      "Provides information about Prime Hospital Ltd and its healthcare services.",
      "Showcases the hospital's multidisciplinary healthcare facilities and specialized services.",
      "Provides information about outpatient services and consultant availability.",
      "Highlights the hospital's 24/7 emergency healthcare services.",
      "Provides information about the hospital's 150-bed indoor healthcare facilities.",
      "Designed to make hospital and healthcare information easily accessible to patients and visitors."
    ],
    tech: ["Flutter", "Dart", "REST APIs", "Firebase"],
    filterCategories: ["flutter", "utilities"],
    featured: false,
    installs: "100+",
    rating: "New",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.primehospitalltd.smart",
    imageUrl: "/projects/prime_hospitals.png",
  },
  {
    id: "com.theakktricks.app",
    title: "Theakktricks",
    subtitle: "Act. Shine. Get Discovered.",
    description: "Theakktricks is an entertainment and social platform designed for aspiring actors, performers, content creators, and movie enthusiasts. Users can recreate iconic movie scenes, record and share their performances, connect with other creators, receive ratings and feedback, build personalized performer profiles, share stories, and interact with their audience through live streaming.",
    fullDetails: [
      "Provides a movie scene library with iconic scenes across different genres and categories.",
      "Allows users to record performances using the front or rear camera and preview recordings before publishing.",
      "Enables performers to upload and showcase their talents while building a personal performance portfolio.",
      "Includes community ratings from 1 to 10, comments, likes, follows, and social engagement.",
      "Provides personalized profiles to showcase performances and track followers, ratings, and achievements.",
      "Supports photo and video Stories for engaging with followers.",
      "Includes live streaming with real-time comments and audience reactions.",
      "Provides notifications for likes, comments, follows, ratings, and other community activities.",
      "Includes content reporting and moderation features for a safer community."
    ],
    tech: ["Flutter", "Dart", "REST APIs", "Firebase", "Push Notifications", "Camera & Video", "Live Streaming", "Social Media Integration"],
    filterCategories: ["flutter", "commerce", "highlights"],
    featured: true,
    installs: "Recently Launched",
    rating: "5.0★",
    appStoreUrl: "https://apps.apple.com/us/app/theakktricks/id6777671595",
    imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/94/51/aa/9451aab1-8cd7-d635-ff0a-aa535d1988f9/Frame_2147238779.jpg/230x498bb.webp",
  },
  {
    id: "com.hvacassistant.app",
    title: "HVAC Assistant",
    subtitle: "AI Diagnostics & Repair Help",
    description: "HVAC Assistant is an AI-powered mobile application designed to help HVAC technicians and homeowners diagnose and troubleshoot heating, ventilation, and air conditioning systems. The app provides AI-driven diagnostic guidance, fault-code resolution, real-time system health monitoring, and access to a comprehensive HVAC brand and model resource library.",
    fullDetails: [
      "Provides AI-powered troubleshooting for HVAC system faults and error codes.",
      "Allows users to describe issues or enter fault codes and receive step-by-step diagnostic guidance.",
      "Provides real-time system health monitoring with live health scores, intake temperature, and airflow status.",
      "Includes a comprehensive resource library covering major HVAC brands and hundreds of models.",
      "Provides manufacturer-specific fault-code explanations with actionable repair guidance.",
      "Automatically saves diagnostic conversations by location and date for easy reference and recurring issue tracking."
    ],
    tech: ["Flutter", "Dart", "AI Integration", "REST APIs", "Firebase", "Real-Time Monitoring", "Secure Data Storage"],
    filterCategories: ["flutter", "ai", "utilities", "highlights"],
    featured: true,
    installs: "Recently Launched",
    rating: "New",
    appStoreUrl: "https://apps.apple.com/us/app/hvac-assistant/id6784973205",
    imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/66/34/82/663482e1-e59f-cc29-2f21-90430d4947bb/02_fixed.jpg/230x498bb.webp",
  },
  {
    id: "com.somtalk.app",
    title: "Somtalk",
    subtitle: "AI-Powered Language Learning & Speaking Practice",
    description: "Somtalk is an AI-powered language learning and communication app designed to help users improve their speaking and communication skills through real-time interaction with people around the world. Users can join live voice and video rooms, make private audio calls, receive AI-powered learning assistance, and practice languages in an interactive global community.",
    fullDetails: [
      "Provides live voice rooms for real-time language and speaking practice.",
      "Supports live video rooms for face-to-face communication and language learning.",
      "Allows users to make private one-to-one audio calls for focused speaking practice.",
      "Includes AI-powered learning assistance and smart suggestions to help users improve faster.",
      "Supports virtual gifts and a coin-based system for premium features and special rooms.",
      "Includes a global leaderboard to encourage users through gamified learning.",
      "Connects users from different countries to practice languages through real conversations.",
      "Combines social interaction, gamification, and AI-assisted learning in one platform."
    ],
    tech: ["Flutter", "Dart", "REST APIs", "Firebase", "AI Integration", "Real-Time Communication", "Voice & Video Calling", "Push Notifications"],
    filterCategories: ["flutter", "ai", "habits"],
    featured: true,
    installs: "10+",
    rating: "New",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.somtalk.app",
    imageUrl: "/projects/somtalk.png",
  },
  {
    id: "com.smartsoftware.apcombd",
    title: "Apcom e-Shop",
    subtitle: "Online Medical Products Shopping",
    description: "Apcom e-Shop is an online medical products shopping application designed to provide customers with a convenient way to browse and purchase genuine healthcare products. The app focuses on providing quality medical products at reasonable prices with a simple and reliable shopping experience.",
    fullDetails: [
      "Provides an online platform for purchasing medical and healthcare products.",
      "Allows customers to browse and shop for genuine medical products conveniently.",
      "Designed to provide quality products at reasonable prices.",
      "Provides a simple and convenient mobile shopping experience for healthcare products.",
      "Focuses on customer satisfaction, trust, quality, and reliable service."
    ],
    tech: ["Flutter", "Dart", "REST APIs", "Firebase", "Push Notifications", "E-Commerce Integration"],
    filterCategories: ["flutter", "commerce"],
    featured: false,
    installs: "10+",
    rating: "New",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartsoftware.apcombd",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
  },
];
