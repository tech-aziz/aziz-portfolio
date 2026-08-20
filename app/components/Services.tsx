"use client";

import React from "react";
import { usePortfolioStore } from "../../store/usePortfolioStore";

export default function Services() {
  const { services } = usePortfolioStore();

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-[var(--color-text)]">
          What I Do
        </h2>
        <p className="text-[var(--color-text-muted)] mt-2 mb-12 text-base">
          Capabilities I use to ship, release, and maintain mobile products with AI-enabled execution and production delivery
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-accent)]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center mb-4 text-[var(--color-accent)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--color-border)]">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
