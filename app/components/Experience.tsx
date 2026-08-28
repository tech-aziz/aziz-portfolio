"use client";

import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { usePortfolioStore } from "../../store/usePortfolioStore";

export default function Experience() {
  const { experiences, education } = usePortfolioStore();

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-[var(--color-text)]">
            Work Experience
          </h2>
          <p className="text-[var(--color-text-muted)] mt-2 mb-12 text-base">
            Professional mobile engineering experience building, shipping, and scaling Flutter apps
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
                {education.school}
              </h3>
              <p className="text-sm font-semibold text-[#10b981] mb-1">
                {education.degree}
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                {education.focus}
              </p>
            </div>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-[var(--color-bg)] text-xs font-mono text-[var(--color-text-muted)] border border-[var(--color-border)] shrink-0">
            {education.status}
          </span>
        </div>

        {/* Bottom CTA Banner (Exact Replica of Reference Screenshot) */}
        <div className="relative overflow-hidden bg-[var(--color-bg-green-card)] border border-[var(--color-border-green-card)] rounded-3xl p-10 md:p-14 text-center shadow-2xl space-y-6 max-w-[950px] mx-auto w-full">
          {/* Top Status Pill */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-xs font-sans font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
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
            <p>8+ production apps shipped across Flutter, Android, and iOS.</p>
            <p>Bring me the mobile brief. I&apos;ll help scope it, ship it, and support it through release.</p>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <a
              href="https://www.upwork.com/freelancers/~01bc46ada7bc95dc8f?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~01bc46ada7bc95dc8f%2Fprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#10b981] hover:bg-[#0e9f6e] text-white font-semibold text-sm font-sans transition-all hover:scale-105 shadow-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
              </svg>
              <span>Hire Me on Upwork</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://www.fiverr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[var(--color-bg)]/80 hover:bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] text-[var(--color-text)] font-medium text-sm font-sans transition-all hover:scale-105 shadow-sm"
            >
              <span className="font-bold text-lg leading-none font-sans text-[#10b981]">f</span>
              <span>Hire Me on Fiverr</span>
            </a>
          </div>

          {/* Bottom Code Review Link */}
          <div className="pt-2">
            <p className="text-xs text-[var(--color-text-muted)] flex items-center justify-center gap-1.5 flex-wrap">
              <span>Prefer to review code first?</span>
              <a
                href="https://github.com/tech-aziz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10b981] hover:underline inline-flex items-center gap-1.5 font-medium"
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
