"use client";

import React from "react";
import Image from "next/image";
import { Search, Smartphone, ArrowRight, Play, Apple } from "lucide-react";
import Link from "next/link";
import { useProjectsStore } from "../../store/useProjectsStore";
import { ProjectCardData } from "../../dummy-data/projectsData";

export default function Projects() {
  const {
    activeFilter,
    searchQuery,
    selectedProject,
    filterTabs,
    setActiveFilter,
    setSearchQuery,
    setSelectedProject,
    getFilteredProjects
  } = useProjectsStore();

  const filteredProjects = getFilteredProjects();



  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-[var(--color-text)]">
              Projects
            </h2>
            <p className="text-[var(--color-text-muted)] mt-2 text-base">
              8+ production mobile apps built using Flutter, Firebase, and AI across healthcare, EdTech, enterprise utility, and social domains.
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

        <div className="flex flex-wrap gap-2.5 overflow-x-auto pb-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4.5 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 border ${isActive
                  ? "bg-[#10b981] text-white border-transparent shadow-md shadow-emerald-500/10 font-semibold"
                  : "bg-white/5 text-gray-300 hover:text-white border-white/10 hover:border-white/20"
                  }`}
              >
                <span>{tab.label}</span>
                <span className={isActive ? "text-white/80 text-[11px]" : "text-gray-500 text-[11px]"}>
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
              className="group bg-[#161B18] border border-slate-800/80 hover:border-[#10b981]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-start shadow-xl shadow-black/20 hover-card-shadow"
            >
              {/* Full Top Card Cover Image (No Mobile Shape Frame) */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-900 border-b border-slate-800/80">
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
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Card Body Content (#161B18) */}
              {/* Card Body Content (#161B18) */}
              <div className="p-5 flex-1 flex flex-col justify-start">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#10b981] transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Platform Indicator */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#10b981] font-semibold">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>
                      {project.playStoreUrl && project.appStoreUrl
                        ? "Android + iOS"
                        : project.playStoreUrl
                          ? "Android"
                          : project.appStoreUrl
                            ? "iOS"
                            : "Android + iOS"}
                    </span>
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
                </div>

                {/* Action Buttons Row */}
                <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs mt-2.5">
                  <div className="flex items-center gap-2">
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-1.5 rounded-lg bg-[#10b981]/10 hover:bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30 text-[11px] font-medium flex items-center gap-1.5 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 shrink-0 fill-current" viewBox="0 0 512 512">
                          <path d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0 0 48 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06L307.14 256 89.06 472.39c-3.62 3.48.56 9.46 5 7.06l.16-.09L345.8 338c39.91-28.16 39.91-135.84 0-164zM477.44 221.63l-55.8-31.61-75.72 66 75.72 66 55.8-31.61c16-9.06 16-59.72 0-68.78z" />
                        </svg>
                        <span>Play</span>
                      </a>
                    )}

                    {project.appStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-1.5 rounded-lg bg-[#10b981]/10 hover:bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30 text-[11px] font-medium flex items-center gap-1.5 transition-colors"
                      >
                        <Apple className="w-3 h-3" />
                        <span>iOS</span>
                      </a>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="text-xs font-mono font-bold text-[#10b981] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
