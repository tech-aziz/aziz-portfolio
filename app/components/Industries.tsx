"use client";

import React from "react";
import { usePortfolioStore } from "../../store/usePortfolioStore";

export default function Industries() {
  const { industries } = usePortfolioStore();

  return (
    <section id="industries" className="py-20 px-6 bg-[var(--color-bg)]/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-[var(--color-text)]">
          Industries I Work In
        </h2>
        <p className="text-[var(--color-text-muted)] mt-2 mb-12 max-w-3xl text-base">
          Deep mobile domain experience across product categories where repeat usage, reliability, store delivery, and real-world workflows matter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-accent)]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/5 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-3" aria-hidden="true">
                  {industry.emoji}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-1 leading-tight">
                  {industry.title}
                </h3>
                <p className="text-xs text-[var(--color-accent)] font-semibold mb-3">
                  {industry.subtitle}
                </p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                  {industry.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--color-border)]">
                {industry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-full bg-[var(--color-bg-card-hover)] text-[var(--color-text-muted)] border border-[var(--color-border)] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
