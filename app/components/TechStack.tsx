"use client";

import React from "react";
import { usePortfolioStore } from "../../store/usePortfolioStore";
import { TechItem } from "../../dummy-data/techStackData";

export default function TechStack() {
  const { techStack } = usePortfolioStore();
  const {
    coreLanguages,
    mobileCrossPlatform,
    dataStorage,
    backendIntegrations,
    toolsDelivery,
    aiIntelligence
  } = techStack;

  const renderGridSection = (title: string, items: TechItem[], gridCols: string = "grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8") => (
    <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-lg shadow-black/5">
      <h3 className="font-mono text-xs font-semibold text-[var(--color-text-muted)] tracking-wider uppercase mb-6">
        {title}
      </h3>

      <div className={`grid ${gridCols} gap-6 items-center justify-items-center`}>
        {items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center group cursor-pointer text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/50 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 shadow-sm">
              {item.customIcon}
            </div>
            <span className="text-[11px] font-medium text-gray-300 mt-2 font-sans group-hover:text-white transition-colors truncate max-w-[90px]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="tech-stack" className="py-20 px-6">
      <div className="max-w-[1250px] mx-auto space-y-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-[var(--color-text)]">
            Tech Stack
          </h2>
          <p className="text-[var(--color-text-muted)] mt-2 text-base">
            Core mobile stack, delivery tooling, and AI helpers I use daily
          </p>
        </div>

        {/* 1. CORE LANGUAGES (DIRECT FLUENCY) - Full Width */}
        {renderGridSection("CORE LANGUAGES (DIRECT FLUENCY)", coreLanguages, "grid-cols-3 sm:grid-cols-5 md:grid-cols-5")}

        {/* 2. Middle Row: Left (MOBILE & CROSS-PLATFORM) & Right (DATA & STORAGE) */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {renderGridSection("MOBILE & CROSS-PLATFORM", mobileCrossPlatform, "grid-cols-3 sm:grid-cols-4 md:grid-cols-7")}
          </div>
          <div className="lg:col-span-1">
            {renderGridSection("DATA & STORAGE", dataStorage, "grid-cols-3 sm:grid-cols-3 md:grid-cols-5")}
          </div>
        </div>

        {/* 3. Lower Middle Row: Left (BACKEND & INTEGRATIONS) & Right (TOOLS & DELIVERY) */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            {renderGridSection("BACKEND & INTEGRATIONS", backendIntegrations, "grid-cols-3 sm:grid-cols-4 md:grid-cols-6")}
          </div>
          <div>
            {renderGridSection("TOOLS & DELIVERY", toolsDelivery, "grid-cols-3 sm:grid-cols-4 md:grid-cols-5")}
          </div>
        </div>

        {/* 4. AI & MOBILE INTELLIGENCE - Full Width */}
        {renderGridSection("AI & MOBILE INTELLIGENCE", aiIntelligence, "grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10")}
      </div>
    </section>
  );
}
