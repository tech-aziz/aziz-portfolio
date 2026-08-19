"use client";

import React from "react";
import { Smartphone, Layers, CreditCard, Network, Rocket, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Cross-Platform App Delivery",
      description:
        "Production mobile apps for Android and iOS with polished UX, stable architecture, and delivery support from first build to store release.",
      tags: ["Flutter", "Dart", "Android", "iOS", "Reusable UI"],
    },
    {
      icon: Layers,
      title: "Kotlin Multiplatform (KMP)",
      description:
        "Shared business logic across Android and iOS with Kotlin Multiplatform, paired with native UIs in Jetpack Compose and SwiftUI.",
      tags: ["Kotlin Multiplatform", "Kotlin", "Jetpack Compose", "SwiftUI", "Coroutines"],
    },
    {
      icon: CreditCard,
      title: "Monetization & Subscriptions",
      description:
        "Subscription and payment flows for mobile apps, including paywalls, trials, restore purchases, and store-side setup.",
      tags: ["RevenueCat", "In-App Purchases", "StoreKit", "Play Billing", "Google Pay", "Apple Pay"],
    },
    {
      icon: Network,
      title: "Firebase & API Integrations",
      description:
        "REST APIs, WebSockets, auth flows, push notifications, deep linking, and real-time sync for mobile products.",
      tags: ["REST APIs", "WebSockets", "FCM", "Deep Linking", "Auth"],
    },
    {
      icon: Rocket,
      title: "Release & Maintenance",
      description:
        "Full release lifecycle: Google Play Console, App Store Connect, provisioning, TestFlight, phased rollouts, and long-term app maintenance.",
      tags: ["Google Play Console", "App Store Connect", "TestFlight", "GitHub Actions", "Production Rollouts"],
    },
    {
      icon: Sparkles,
      title: "AI-Enabled Mobile Features",
      description:
        "On-device AI, OCR, voice flows, semantic search, and LLM-powered assistants for mobile apps that need smarter UX.",
      tags: ["OpenAI", "Claude", "ChatGPT", "ML Kit", "TFLite", "OCR"],
    },
  ];

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
