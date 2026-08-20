import { Smartphone, Layers, Bot, ShieldCheck } from "lucide-react";
import React from "react";

export interface CollaborationOption {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tag: string;
}

export const collaborationOptions: CollaborationOption[] = [
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
