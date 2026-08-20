import { Smartphone, Layers, CreditCard, Network, Rocket, Sparkles } from "lucide-react";
import React from "react";

export interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tags: string[];
}

export const servicesData: ServiceItem[] = [
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
