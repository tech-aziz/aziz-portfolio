import { Smartphone, CheckCircle2, Bot, Lock } from "lucide-react";
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
    title: "8+ Apps Shipped",
    desc: "Play Store + App Store, 6K+ installs",
    icon: CheckCircle2,
  },
  {
    title: "AI-Enabled Delivery",
    desc: "Faster debugging and smarter release cycles",
    icon: Bot,
  },
  {
    title: "5+ Private Projects",
    desc: "Confidential mobile solutions for private clients",
    icon: Lock,
  },
];

export const exploringText = "AI integration, AI-powered app development, and modern Flutter architecture";

export const bioParagraphs = [
  `I'm a mobile application developer focused on shipping Android and iOS products that are easier to launch, maintain, and grow. Over the last <strong class="font-semibold text-white">4+ years</strong>, I've worked primarily with <strong class="font-semibold text-white">Flutter</strong> and delivered <strong class="font-semibold text-white">8+ production apps</strong> across different industries.`,
  `I help clients turn designs and ideas into production-ready mobile apps, covering architecture, REST API integrations, Firebase services, authentication, subscriptions and payments, push notifications, deep links, testing, performance optimization, store submissions, and post-launch maintenance.`,
  `I use AI-powered tools to speed up debugging and review, but production decisions and release quality stay human-led.`
];


