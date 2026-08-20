"use client";

import React from "react";
import Image from "next/image";
import { Search, ExternalLink, X, Smartphone, ArrowRight, Play, Apple } from "lucide-react";
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
              className="bg-[#161B18] border border-slate-800 rounded-3xl max-w-2xl lg:max-w-[70vw] w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative"
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
