import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Smartphone, Play, Apple } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { PROJECTS_LIST } from "../../../dummy-data/projectsData";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS_LIST.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Combine categories and tech, removing case-insensitive duplicates and blacklisted tags
  const rawTags = [...project.filterCategories, ...project.tech];
  const blacklist = new Set(["utilities", "highlights"]);
  const uniqueTagsMap = new Map<string, string>();
  for (const tag of rawTags) {
    const cleaned = tag.trim();
    const lower = cleaned.toLowerCase();
    if (blacklist.has(lower)) {
      continue;
    }
    if (!uniqueTagsMap.has(lower)) {
      uniqueTagsMap.set(lower, cleaned);
    } else {
      const existing = uniqueTagsMap.get(lower)!;
      // Prefer capitalized tag over lowercase
      if (cleaned !== lower && existing === lower) {
        uniqueTagsMap.set(lower, cleaned);
      }
    }
  }
  const uniqueTags = Array.from(uniqueTagsMap.values());

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <Navbar />

      <main id="main-content" className="flex-1 py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Back to Projects link */}
          <div>
            <Link
              href="/#projects"
              className="text-sm font-mono text-[#10b981] no-underline flex items-center gap-1 cursor-pointer"
            >
              <span className="text-lg leading-none -mt-0.5">‹</span>
              <span>Back to Projects</span>
            </Link>
          </div>

          {/* Tags / categories */}
          <div className="flex flex-wrap gap-2">
            {uniqueTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] font-mono rounded-full border border-[#10b981]/25 bg-emerald-500/5 text-[#10b981]/90"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Subtitle */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-[var(--color-text)] mb-2 tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm md:text-base text-[var(--color-text-muted)] font-medium font-sans">
              {project.subtitle}
            </p>
          </div>

          {/* Download & Rating badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 text-[11px] font-mono rounded-full bg-[var(--color-bg-card)] text-[var(--color-text-muted)] border border-[var(--color-border)]">
              {project.playStoreUrl && project.appStoreUrl
                ? "Google Play + App Store"
                : project.playStoreUrl
                  ? "Google Play"
                  : project.appStoreUrl
                    ? "App Store"
                    : "Production Mobile App"}
            </span>
            {project.installs && (
              <span className="px-3 py-1 text-[11px] font-mono rounded-full bg-[var(--color-bg-card)] text-[var(--color-text-muted)] border border-[var(--color-border)]">
                {project.installs} installs
              </span>
            )}
            {project.rating && (
              <span className="px-3 py-1 text-[11px] font-mono rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {project.rating}
              </span>
            )}
          </div>

          {/* Banner Image Visual (Mockup style, rounded corners) */}
          {(project.bannerUrl || project.imageUrl) && (
            <div className="w-full max-w-3xl mx-auto rounded-3xl border border-[var(--color-border)] overflow-hidden bg-[var(--color-bg-card)] flex items-center justify-center p-4 md:p-6">
              <img
                src={project.bannerUrl || project.imageUrl}
                alt={`${project.title} mockup`}
                className="max-h-[680px] w-auto object-contain rounded-2xl"
              />
            </div>
          )}

          {/* About / Description */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-mono text-[var(--color-text)] mb-3">
              About
            </h2>
            <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem, Solution, Outcome Vertical Stack */}
          {(project.problem || project.solution || project.outcome) && (
            <div className="space-y-4">
              {project.problem && (
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
                  <h4 className="text-sm font-mono font-bold text-[var(--color-text)] mb-2">
                    Problem
                  </h4>
                  <p className="text-xs md:text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
                  <h4 className="text-sm font-mono font-bold text-[var(--color-text)] mb-2">
                    Solution
                  </h4>
                  <p className="text-xs md:text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
              {project.outcome && (
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
                  <h4 className="text-sm font-mono font-bold text-[var(--color-text)] mb-2">
                    Outcome
                  </h4>
                  <p className="text-xs md:text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              )}
            </div>
          )}

          {project.myRole && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-mono text-[var(--color-text)] mb-3">
                My Role
              </h2>
              <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed">
                {project.myRole}
              </p>
            </div>
          )}

          {project.coreCapabilities && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-3 font-semibold">
                Core Capabilities
              </h4>
              <div className="space-y-3 bg-[var(--color-bg-card)] p-5 rounded-2xl border border-[var(--color-border)]">
                {project.coreCapabilities.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.architecture && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-3 font-semibold">
                Architecture
              </h4>
              <div className="space-y-3 bg-[var(--color-bg-card)] p-5 rounded-2xl border border-[var(--color-border)]">
                {project.architecture.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!project.problem && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-3 font-semibold">
                Key Technical Deliverables &amp; Impact
              </h4>
              <div className="space-y-3 bg-[var(--color-bg-card)] p-5 rounded-2xl border border-[var(--color-border)]">
                {project.fullDetails.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-3 font-semibold">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {(project.techStack || project.tech).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-mono rounded-lg bg-[var(--color-bg-green-card)] text-[#10b981] border border-[var(--color-border-green-card)] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--color-border)]">
            <div className="flex items-center gap-3 flex-wrap">
              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[#10b981]/50 hover:text-[#10b981] transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 512 512">
                    <path d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0 0 48 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06L307.14 256 89.06 472.39c-3.62 3.48.56 9.46 5 7.06l.16-.09L345.8 338c39.91-28.16 39.91-135.84 0-164zM477.44 221.63l-55.8-31.61-75.72 66 75.72 66 55.8-31.61c16-9.06 16-59.72 0-68.78z" />
                  </svg>
                  Google Play
                </a>
              )}
              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[#10b981]/50 hover:text-[#10b981] transition-colors text-sm font-medium"
                >
                  <Apple className="w-4 h-4" />
                  App Store
                </a>
              )}
            </div>

            <Link
              href="/#projects"
              className="px-5 py-2 rounded-xl border border-[var(--color-border)] text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-card)] transition-colors w-full sm:w-auto cursor-pointer text-center"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
