import { Smartphone, Layers, CheckCircle2, Bot } from "lucide-react";
import React from "react";

export interface AboutHighlight {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const aboutHighlights: AboutHighlight[] = [
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

export const exploringText = "Agentic AI, on-device AI, multimodal AI, OCR, voice AI, and semantic search";

export const bioParagraphs = [
  `I’m a mobile application developer focused on shipping Android and iOS products that are easier to launch, maintain, and grow. Over the last 5+ years, I’ve delivered 15+ production apps across Flutter, Kotlin Multiplatform, Jetpack Compose, and SwiftUI.`,
  `I help clients with architecture cleanup, integrations, subscriptions, push notifications, deep links, testing, store submissions, and post-launch maintenance. I also build AI-enabled mobile features like OCR, voice flows, semantic search, and LLM-powered assistants when the product needs them.`,
  `I use ChatGPT, Claude, and Codex to speed up debugging and review, but production decisions and release quality stay human-led.`
];
