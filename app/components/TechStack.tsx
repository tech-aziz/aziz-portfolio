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

  const renderGridSection = (
    title: string,
    items: TechItem[],
    gridCols: string = "grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8",
    containerClass: string = "w-full"
  ) => (
    <div className={`bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-lg shadow-black/5 ${containerClass}`}>
      <h3 className="font-mono text-xs font-semibold text-[var(--color-text-muted)] tracking-wider uppercase mb-6">
        {title}
      </h3>

      <div className={`grid ${gridCols} gap-6 sm:gap-8 items-center justify-items-center`}>
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
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-[var(--color-text)]">
            Tech Stack
          </h2>
          <p className="text-[var(--color-text-muted)] mt-2 text-base">
            Core mobile stack, delivery tooling, and AI helpers I use daily
          </p>
        </div>

        {/* 1. Top Row: Left (CORE LANGUAGES) & Right (AI & MOBILE INTELLIGENCE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            {renderGridSection(
              "CORE LANGUAGES (DIRECT FLUENCY)",
              coreLanguages,
              "grid-cols-3 gap-4 sm:gap-6",
              "h-full"
            )}
          </div>
          <div className="lg:col-span-7">
            {renderGridSection(
              "AI & MOBILE INTELLIGENCE",
              aiIntelligence,
              "grid-cols-3 sm:grid-cols-5 md:grid-cols-5",
              "h-full"
            )}
          </div>
        </div>

        {/* 2. Middle Row: Left (MOBILE & CROSS-PLATFORM) & Right (DATA & STORAGE) */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            {renderGridSection("MOBILE & CROSS-PLATFORM", mobileCrossPlatform, "grid-cols-2 sm:grid-cols-4 md:grid-cols-4")}
          </div>
          <div>
            {renderGridSection("DATA & STORAGE", dataStorage, "grid-cols-2 sm:grid-cols-4 md:grid-cols-4")}
          </div>
        </div>

        {/* 3. BACKEND & INTEGRATIONS - Full Width */}
        <div>
          {renderGridSection(
            "BACKEND & INTEGRATIONS",
            backendIntegrations,
            "grid-cols-3 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-7"
          )}
        </div>

        {/* 4. TOOLS & DELIVERY - Full Width */}
        <div>
          {renderGridSection(
            "TOOLS & DELIVERY",
            toolsDelivery,
            "grid-cols-3 sm:grid-cols-5 md:grid-cols-9 lg:grid-cols-9"
          )}
        </div>
      </div>
    </section>
  );
}
