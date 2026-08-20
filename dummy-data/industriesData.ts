export interface IndustryItem {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export const industriesData: IndustryItem[] = [
  {
    emoji: "📈",
    title: "Trader Companion Utilities",
    subtitle: "8+ apps on App Store & Play Store",
    description:
      "Helper tools for traders with no order execution: position sizing, Forex session tracking, countdowns, signal alerts, currency strength, stock/index lookup, and trading journals.",
    tags: ["Forex Helpers", "Position Sizing", "Market Sessions", "RevenueCat", "No Order Execution"],
  },
  {
    emoji: "🧠",
    title: "Trading Mindset & Habits",
    subtitle: "2 KMP products",
    description:
      "Performance and habit apps for discipline, routines, readiness monitoring, emotional check-ins, progress analytics, and behavior consistency across Android and iOS.",
    tags: ["Kotlin Multiplatform", "Jetpack Compose", "SwiftUI", "Firebase", "Coroutines"],
  },
  {
    emoji: "⛽",
    title: "Consumer Utility Apps",
    subtitle: "100K+ installs supported",
    description:
      "Everyday mobile utilities for fuel prices, personal vehicle expense tracking, local records, push engagement, offline-friendly storage, and simple repeat-use workflows.",
    tags: ["Flutter", "SQFLite", "Firebase", "OneSignal", "AdMob"],
  },
  {
    emoji: "🌦️",
    title: "Weather, Maps & Travel",
    subtitle: "50K+ installs supported",
    description:
      "Location-aware travel apps with motorway road conditions, weather forecasts, route information, maps, API-driven updates, and mobile-first travel utility screens.",
    tags: ["Flutter", "Google Maps", "Weather APIs", "REST APIs", "Location UX"],
  },
  {
    emoji: "🛒",
    title: "E-Commerce & Retail",
    subtitle: "Retail mobile storefront",
    description:
      "Shopping apps for brand discovery, products, offers, push-based engagement, ad-supported monetization, Firebase-backed data, and mobile-first browsing flows.",
    tags: ["Flutter", "Firebase", "GetX", "OneSignal", "AdMob"],
  },
  {
    emoji: "🧘",
    title: "Wellbeing & Productivity",
    subtitle: "Habit and nutrition products",
    description:
      "Habit tracking, nutrition, and personal productivity apps designed for low-friction daily use, progress visibility, and repeat engagement.",
    tags: ["Habit Tracking", "Nutrition", "Productivity", "Retention", "Low Friction UX"],
  },
];
