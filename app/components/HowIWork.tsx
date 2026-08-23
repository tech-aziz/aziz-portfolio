"use client";

import React from "react";
import { Search, BrainCircuit, TrendingUp, Upload } from "lucide-react";
import { howIWorkData } from "../../dummy-data/howIWorkData";

const iconMap: Record<string, React.ElementType> = {
  Search,
  BrainCircuit,
  TrendingUp,
  Upload,
};

export default function HowIWork() {
  const { heading, subheading, methods } = howIWorkData;

  return (
    <section
      id="how-i-work"
      className="py-20 px-6 bg-[var(--color-bg)]/40 border-t border-[var(--color-border)]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-center text-[var(--color-text)]">
          {heading}
        </h2>
        <p className="text-[var(--color-text-muted)] mt-3 mb-12 text-center max-w-2xl mx-auto text-base leading-relaxed">
          {subheading}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {methods.map((method, idx) => {
            const Icon = iconMap[method.iconName] ?? Search;
            return (
              <div
                key={idx}
                className="bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/5"
              >
                <div className="w-11 h-11 rounded-2xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] mb-5">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
