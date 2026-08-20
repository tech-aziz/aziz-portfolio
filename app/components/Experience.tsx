"use client";

import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Mobile Application Engineer",
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
      title: "Top Rated Mobile Application Engineer",
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

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-[1250px] mx-auto space-y-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-[var(--color-text)]">
            Work Experience
          </h2>
          <p className="text-[var(--color-text-muted)] mt-2 mb-12 text-base">
            5+ years of production engineering experience building, shipping, and scaling mobile apps
          </p>
        </div>

        <div className="relative border-l-2 border-[var(--color-border)] ml-3 md:ml-6 pl-6 md:pl-10 space-y-12 mb-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] md:-left-[47px] top-0.5 w-8 h-8 rounded-full bg-[var(--color-bg)] border-2 border-[#10b981] flex items-center justify-center text-[#10b981] shadow-md group-hover:scale-110 transition-transform">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Timeline Card */}
              <div className="bg-[var(--color-bg-green-card)] border border-[var(--color-border-green-card)] rounded-2xl p-6 md:p-8 hover:border-[#10b981]/60 transition-all duration-300 shadow-lg shadow-black/5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text)]">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#10b981]">
                      {exp.company}{" "}
                      <span className="text-[var(--color-text-muted)] font-normal">
                        ({exp.type})
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--color-text-muted)] font-mono">
                    <span className="flex items-center gap-1.5 bg-[var(--color-bg)] px-3 py-1 rounded-full border border-[var(--color-border)]">
                      <Calendar className="w-3 h-3 text-[#10b981]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-[var(--color-bg)] px-3 py-1 rounded-full border border-[var(--color-border)]">
                      <MapPin className="w-3 h-3 text-[#10b981]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="space-y-2 mb-6">
                  {exp.bulletPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#10b981] mt-0.5 shrink-0" />
                      <p className="text-xs md:text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--color-border)]">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Box */}
        <div className="bg-[var(--color-bg-green-card)] border border-[var(--color-border-green-card)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg shadow-black/5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">
                COMSATS University Islamabad
              </h3>
              <p className="text-sm font-semibold text-[#10b981] mb-1">
                Bachelor of Science in Computer Science (BSCS)
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                Core Focus: Mobile Application Architecture, Object-Oriented Systems, Data Structures &amp; Algorithms, Software Engineering.
              </p>
            </div>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-[var(--color-bg)] text-xs font-mono text-[var(--color-text-muted)] border border-[var(--color-border)] shrink-0">
            Graduated
          </span>
        </div>

        {/* Bottom CTA Banner (Exact Replica of Reference Screenshot) */}
        <div className="relative overflow-hidden bg-[var(--color-bg-green-card)] border border-[var(--color-border-green-card)] rounded-3xl p-10 md:p-14 text-center shadow-2xl space-y-6">
          {/* Top Status Pill */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#10b981] text-xs font-mono font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
              </span>
              Available for freelance &amp; full-time mobile roles
            </span>
          </div>

          {/* Title */}
          <h3 className="font-mono text-3xl md:text-5xl font-extrabold text-[var(--color-text)] tracking-tight leading-tight max-w-2xl mx-auto">
            Let&apos;s Build Your Next Mobile App
          </h3>

          {/* Description */}
          <div className="text-[var(--color-text-muted)] text-sm md:text-base max-w-xl mx-auto space-y-1 leading-relaxed">
            <p>15+ production apps shipped across Flutter, KMP, Android, and iOS.</p>
            <p>Bring me the mobile brief. I&apos;ll help scope it, ship it, and support it through release.</p>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <a
              href="https://www.upwork.com/freelancers/~0143722ece1833a4ed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#10b981] hover:bg-[#059669] text-slate-950 font-bold text-sm font-sans transition-all shadow-lg shadow-emerald-500/25 hover:scale-105"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-4.444 0-6.42 2.736-7.234 5.372-1.222-2.164-2.183-4.577-2.724-6.883H4.743v7.419c0 2.316 1.879 4.2 4.195 4.2 2.315 0 4.195-1.884 4.195-4.2V6.634c.732 1.637 1.83 3.654 3.25 4.966-1.002 1.341-2.222 2.348-3.662 2.923l.972 3.864c2.096-.869 3.842-2.355 5.148-4.28 1.483.743 3.123 1.157 4.881 1.157 3.65 0 6.618-2.969 6.618-6.618 0-3.649-2.968-6.618-6.618-6.618z" />
              </svg>
              <span>Hire Me on Upwork</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://www.fiverr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 text-[var(--color-text)] font-medium text-sm font-sans transition-all hover:scale-105"
            >
              <span className="font-bold text-lg leading-none font-mono">f</span>
              <span>Hire Me on Fiverr</span>
            </a>
          </div>

          {/* Bottom Code Review Link */}
          <div className="pt-2">
            <p className="text-xs text-[var(--color-text-muted)]">
              Prefer to review code first?{" "}
              <a
                href="https://github.com/tech-aziz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10b981] hover:underline font-mono inline-flex items-center gap-1 font-semibold"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub @tech-aziz
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
