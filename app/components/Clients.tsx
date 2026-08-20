"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { usePortfolioStore } from "../../store/usePortfolioStore";

export default function Clients() {
  const { clients } = usePortfolioStore();

  return (
    <section id="clients" className="py-20 px-6 bg-[var(--color-bg)]/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-center text-[var(--color-text)]">
          Clients &amp; Products I&apos;ve Worked On
        </h2>
        <p className="text-[var(--color-text-muted)] mt-3 mb-12 text-center max-w-2xl mx-auto text-base">
          Mobile products across fintech, commerce, and community workflows, delivered through remote engagements and NDA work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client, idx) => {
            const Icon = client.icon;
            const CardWrapper = client.link ? "a" : "div";
            const linkProps = client.link
              ? {
                  href: client.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <CardWrapper
                key={idx}
                {...linkProps}
                className="group relative bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-5 hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[140px] shadow-md shadow-black/5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    {client.link && (
                      <ExternalLink className="w-3.5 h-3.5 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                    )}
                  </div>
                  <h3 className="font-bold text-[var(--color-text)] text-sm leading-tight mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-snug">
                    {client.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--color-border)] flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[var(--color-accent)] font-mono font-medium uppercase tracking-wider">
                      {client.categoryTag}
                    </span>
                    <span className="text-[var(--color-text-muted)] font-mono">
                      {client.metric}
                    </span>
                  </div>
                  <span className="text-[10px] text-[var(--color-accent)]/80 font-mono uppercase tracking-wider">
                    {client.nicheTag}
                  </span>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
