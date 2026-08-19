"use client";

import React from "react";
import { Smartphone, Layers, CheckCircle2, Bot, Compass } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "Flutter",
      desc: "Cross-platform Android/iOS delivery",
      icon: Smartphone,
    },
    {
      title: "KMP + Native UI",
      desc: "Shared logic with native UX quality",
      icon: Layers,
    },
    {
      title: "15+ Apps Shipped",
      desc: "Play Store + App Store, 200K+ installs",
      icon: CheckCircle2,
    },
    {
      title: "AI-Enabled Delivery",
      desc: "Faster debugging and smarter release cycles",
      icon: Bot,
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-[1250px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-[var(--color-text)]">
          About Me
        </h2>

        {/* Currently Exploring Pill */}
        <div className="mt-6 mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
            </span>
            <span className="text-sm text-[var(--color-text)]">
              Currently exploring:{" "}
              <span className="text-[var(--color-accent)] font-semibold">
                Agentic AI, on-device AI, multimodal AI, OCR, voice AI, and semantic search
              </span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Main Bio Paragraphs */}
          <div className="space-y-5">
            <p className="text-[var(--color-text-muted)] leading-relaxed text-base">
              I’m a senior mobile application engineer focused on shipping Android and iOS products that are easier to launch, maintain, and grow. Over the last{" "}
              <span className="text-[var(--color-text)] font-semibold">5+ years</span>, I’ve delivered{" "}
              <span className="text-[var(--color-text)] font-semibold">15+ production apps</span> across{" "}
              <span className="text-[var(--color-text)] font-semibold">Flutter, Kotlin Multiplatform, Jetpack Compose, and SwiftUI</span>.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed text-base">
              I help clients with architecture cleanup, integrations, subscriptions, push notifications, deep links, testing, store submissions, and post-launch maintenance. I also build AI-enabled mobile features like OCR, voice flows, semantic search, and LLM-powered assistants when the product needs them.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed text-base">
              I use ChatGPT, Claude, and Codex to speed up debugging and review, but production decisions and release quality stay human-led.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 content-start">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center mb-3 text-[var(--color-accent)]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-[var(--color-text)] text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-snug">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
