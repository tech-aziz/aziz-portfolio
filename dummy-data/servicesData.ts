import { Smartphone, Settings, BarChart2, CheckCircle2, Lightbulb } from "lucide-react";
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
    icon: Settings,
    title: "Monetization & Subscriptions",
    description:
      "Subscription and payment flows for mobile apps, including paywalls, trials, restore purchases, and store-side setup.",
    tags: ["RevenueCat", "In-App Purchases", "StoreKit", "Play Billing", "Google Pay", "Apple Pay"],
  },
  {
    icon: BarChart2,
    title: "Firebase & API Integrations",
    description:
      "REST APIs, WebSockets, auth flows, push notifications, deep linking, and real-time sync for mobile products.",
    tags: ["REST APIs", "WebSockets", "FCM", "Deep Linking", "Auth"],
  },
  {
    icon: CheckCircle2,
    title: "Release & Maintenance",
    description:
      "Full release lifecycle: Google Play Console, App Store Connect, provisioning, TestFlight, phased rollouts, and long-term app maintenance.",
    tags: ["Google Play Console", "App Store Connect", "TestFlight", "GitHub Actions", "Production Rollouts"],
  },
  {
    icon: Lightbulb,
    title: "AI-Enabled Mobile Features",
    description:
      "LLM-powered mobile features using OpenAI API, Gemini, and Claude for smarter, AI-driven user experiences.",
    tags: ["OpenAI API", "Gemini", "Claude", "ChatGPT"],
  },
];
