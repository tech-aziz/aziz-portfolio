"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, ExternalLink, X, Smartphone, ArrowRight, Play, Apple } from "lucide-react";

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
}

const PROJECTS_LIST: ProjectCardData[] = [
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
    tech: ["Flutter", "Dart", "REST APIs", "SQFLite", "Firebase"],
    filterCategories: ["flutter", "utilities"],
    featured: true,
    installs: "1K+",
    rating: "4.8★",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartsoftware.snakebite",
    imageUrl: "/projects/snakebite.png",
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
    filterCategories: ["flutter", "ai"],
    featured: true,
    installs: "Recently Launched",
    rating: "New",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.dreamtrace.ai",
    imageUrl: "/projects/dreamtrace.png",
  },
  {
    id: "com.skillquester.app",
    title: "SkillQuester",
    subtitle: "Master Real Life Skills",
    description: "SkillQuester is a gamified learning app designed to help users build practical real-life skills through bite-sized lessons, challenges, and interactive progress systems. Starting with budgeting and personal finance, the app helps users develop better money habits and make smarter financial decisions through simple, engaging, and actionable learning experiences.",
    fullDetails: [
      "Provides bite-sized lessons focused on practical real-life skills and personal finance.",
      "Covers budgeting, saving, debt management, smart spending, financial goals, credit, and long-term wealth habits.",
      "Uses gamified learning with progress levels, skill paths, achievements, milestones, and daily learning streaks.",
      "Includes bite-sized challenges and clear progress tracking to help users build skills consistently.",
      "Designed with beginner-friendly, practical, and actionable lessons that can be completed in just a few minutes."
    ],
    tech: ["Flutter", "Dart", "GetX", "Dio", "REST APIs", "Firebase", "Secure Data Storage", "Local Storage"],
    filterCategories: ["flutter", "habits"],
    featured: true,
    installs: "Recently Launched",
    rating: "New",
    appStoreUrl: "https://apps.apple.com/us/app/skillquester/id6755081369",
    imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/77/b1/e9/77b1e923-1c10-ae48-1381-f161e1902d48/1.png/230x498bb.webp",
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
    filterCategories: ["flutter", "commerce"],
    featured: true,
    installs: "1K+",
    rating: "3.6★",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartsoftware.hrm",
    imageUrl: "/projects/smart_hrm.png",
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
    filterCategories: ["flutter", "commerce"],
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
    filterCategories: ["flutter", "ai", "utilities"],
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

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null);

  const filterTabs = [
    { id: "all", label: "All Work", count: 19 },
    { id: "highlights", label: "Highlights", count: 6 },
    { id: "flutter", label: "Flutter Delivery", count: 10 },
    { id: "kmp", label: "KMP + Native", count: 9 },
    { id: "trading", label: "Trading & Fintech", count: 8 },
    { id: "utilities", label: "Utilities & Travel", count: 8 },
    { id: "habits", label: "Habits & Wellness", count: 4 },
    { id: "commerce", label: "Commerce & Business", count: 3 },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_LIST.filter((project) => {
      let matchesFilter = true;
      if (activeFilter !== "all") {
        matchesFilter = project.filterCategories.includes(activeFilter);
      }

      let matchesSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        matchesSearch =
          project.title.toLowerCase().includes(q) ||
          project.subtitle.toLowerCase().includes(q) ||
          project.description.toLowerCase().includes(q) ||
          project.tech.some((t) => t.toLowerCase().includes(q));
      }

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-[1250px] mx-auto space-y-8">
        {/* Header Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-[var(--color-text)]">
              Projects
            </h2>
            <p className="text-[var(--color-text-muted)] mt-2 text-base">
              15+ production mobile apps across fintech, utility, commerce, and wellness domains.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#161B18] border border-[#10b981]/25 focus:border-[#10b981] outline-none text-xs text-[var(--color-text)] placeholder-[var(--color-text-muted)] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills List */}
        <div className="flex flex-wrap gap-2.5 overflow-x-auto pb-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#10b981] text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                    : "bg-[#161B18] text-gray-300 hover:text-white border border-[#10b981]/20 hover:border-[#10b981]/40"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-slate-950/20 text-slate-950 font-extrabold"
                      : "bg-slate-800 text-gray-400"
                  }`}
                >
                  ({tab.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* 3-Column Projects Grid (#161B18 Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#161B18] border border-slate-800/80 hover:border-[#10b981]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between shadow-xl shadow-black/20"
            >
              {/* Full Top Card Cover Image (No Mobile Shape Frame) */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900 border-b border-slate-800/80">
                {/* Floating Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
                  {project.featured ? (
                    <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-500/50 backdrop-blur-md">
                      FEATURED
                    </span>
                  ) : <span />}

                  <div className="flex items-center gap-1.5">
                    {project.installs && (
                      <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold rounded-full bg-slate-950/80 text-gray-200 border border-white/15 backdrop-blur-md">
                        {project.installs}
                      </span>
                    )}
                    {project.rating && (
                      <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold rounded-full bg-emerald-950/85 text-emerald-400 border border-emerald-500/40 backdrop-blur-md">
                        {project.rating}
                      </span>
                    )}
                  </div>
                </div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161B18] via-transparent to-black/40 z-10 pointer-events-none" />

                {/* Full Cover Image */}
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>

              {/* Card Body Content (#161B18) */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#10b981] transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Platform Indicator */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#10b981] font-semibold">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Android + iOS</span>
                  </div>

                  {/* Green Tech Pills Row */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons Row */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.playStoreUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-1.5 rounded-lg bg-[#10b981]/10 hover:bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30 text-[11px] font-medium flex items-center gap-1.5 transition-colors"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Play</span>
                      </a>

                      <a
                        href={project.appStoreUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-1.5 rounded-lg bg-[#10b981]/10 hover:bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30 text-[11px] font-medium flex items-center gap-1.5 transition-colors"
                      >
                        <Apple className="w-3 h-3" />
                        <span>iOS</span>
                      </a>
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono font-bold text-[#10b981] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>View</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Modal Dialog */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div
              className="bg-[#161B18] border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-white border border-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 pr-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 text-xs font-mono rounded-full bg-emerald-500/10 text-[#10b981] border border-emerald-500/20 font-bold">
                    {selectedProject.installs ? `${selectedProject.installs} Downloads` : "Production Mobile App"}
                  </span>
                  {selectedProject.rating && (
                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                      {selectedProject.rating} Rating
                    </span>
                  )}
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                  {selectedProject.title}
                </h2>
                <p className="text-sm font-mono text-[#10b981]">
                  {selectedProject.subtitle}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 font-semibold">
                  Overview
                </h4>
                <p className="text-sm text-gray-200 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3 font-semibold">
                  Key Technical Deliverables &amp; Impact
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.fullDetails.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3 font-semibold">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-700 text-sm font-medium text-gray-400 hover:text-white hover:bg-slate-900 transition-colors"
                >
                  Close
                </button>
                {selectedProject.playStoreUrl && (
                  <a
                    href={selectedProject.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#10b981] text-slate-950 text-sm font-bold transition-colors shadow-md shadow-emerald-500/20"
                  >
                    <span>View Store App</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
