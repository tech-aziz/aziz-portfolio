"use client";

import React from "react";
import { Smartphone, Layers, Bot, ShieldCheck, ArrowRight } from "lucide-react";

export default function WorkTogether() {
  const options = [
    {
      icon: Smartphone,
      title: "Full Mobile App Delivery",
      description:
        "End-to-end mobile product execution for iOS and Android with Flutter or KMP from initial spec to Play Store & App Store releases.",
      tag: "Greenfield / MVP",
    },
    {
      icon: Layers,
      title: "KMP & Cross-Platform Architecture",
      description:
        "Shared Kotlin business logic across iOS and Android with native Jetpack Compose & SwiftUI interfaces for maximum performance.",
      tag: "Multiplatform",
    },
    {
      icon: Bot,
      title: "AI Mobile Feature Integration",
      description:
        "Adding intelligent capabilities to your mobile app: ML Kit OCR, OpenAI LLMs, on-device vector search, voice flows, and speech-to-text.",
      tag: "AI / ML Features",
    },
    {
      icon: ShieldCheck,
      title: "Code Audit & Store Submissions",
      description:
        "Refactoring messy codebases, fixing memory leaks, configuring RevenueCat subscriptions, FCM push alerts, and handling store submissions.",
      tag: "Optimization & Release",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[var(--color-bg)]/40 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-center text-[var(--color-text)]">
          How We Can Work Together
        </h2>
        <p className="text-[var(--color-text-muted)] mt-2 mb-12 text-center max-w-2xl mx-auto text-base">
          Flexible engagement models for startups, software agencies, and product teams needing senior mobile execution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((option, idx) => {
            const Icon = option.icon;
            return (
              <div
                key={idx}
                className="bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 font-medium">
                      {option.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                    {option.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-accent)] hover:underline font-semibold"
                >
                  <span>Inquire about this model</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
