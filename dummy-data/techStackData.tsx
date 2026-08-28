import React from "react";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Wrench,
  Bot,
  Zap,
  Layers,
  Cpu,
  Flame,
  Radio,
  MapPin,
  Shield,
  Hammer,
  GitBranch,
  Terminal,
  Search,
  CheckCircle,
  FileCode,
  Mic,
  ScanText,
  Workflow,
  Share2,
  Server,
  Sliders
} from "lucide-react";

export interface TechItem {
  name: string;
  color: string;
  iconBg?: string;
  customIcon?: React.ReactNode;
}

export const coreLanguages: TechItem[] = [
  {
    name: "Dart",
    color: "#0175C2",
    customIcon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M4.5 12.5L12 5L19.5 12.5L12 20L4.5 12.5Z" fill="#0175C2" />
        <path d="M12 5L19.5 12.5L14.5 17.5L7 10L12 5Z" fill="#02569B" />
      </svg>
    ),
  },
  {
    name: "Java",
    color: "#E51F24",
    customIcon: (
      <svg className="w-8 h-8" viewBox="0 0 128 128">
        <path fill="#5382A1" d="M46.7 91.5c0 0-5.8 3.4 4.2 4.6 12.1 1.4 18.3 1.3 31.7-.7 0 0 3.7 2.3 8.8 4.3-30.8 11.2-65.7-1.3-44.7-8.2zm-2.4-14.8c0 0-6.1 4.5 3.5 5.7 13.1 1.7 23.9 1.8 42.1-.9 0 0 2.6 2.6 6.2 3.9-37.1 9.7-74.1.8-51.8-8.7zm25.9-25.1c5.2 6 2.7 11.4-4.2 16.7-7.9 6-10.9 9.3-3.9 14.8 0 0-21.7-10.9-10.7-22.3 9.4-9.8 14.4-9.6 18.8-.2zm24.6 30.6c-4.4 2.8-10.5 4.3-17.7 5.3 6.6-4.1 11.5-8.5 11.5-13.4 0-1.8-.7-3.4-1.9-4.8 5.6 3.6 11.2 7.7 8.1 12.9zm-49.6 19.8c0 0-5.3 4.1 3.5 5 11.7 1.2 21.6 1.4 39.8-.7 0 0 1.9 2.2 4.5 3.3-32.3 8.3-66.9.7-47.8-7.6zm42.7-52.9c7.6 8.7 1.9 18.1-13.4 26 0 0 18.1-9.5 13.4-26z"/>
        <path fill="#EA2D2E" d="M68.5 12c4.1 4.7 1.1 9.4-4.8 13.8-7.7 5.8-12.7 10.6-2.5 19.3 0 0-22-12.1-12.4-23.7 8.7-10.4 15.6-9.5 19.7-.4zm21 21.6c4.9 5.6 1.1 11.3-5.8 16.6-8.9 6.8-11.8 11.4-3.5 18 0 0-22.8-12.6-11.7-25.1 9.7-11 16.1-9.7 21-.9zm-38 68.7c18.5 1.4 39.6-.3 52.8-5.3-3.9 3.2-9.4 5.3-16.1 6.8-19.4 4.3-45.7 3.3-57.5-.8 0 0 4 3 10.2 4.4-21.9 7-42.5 1.5-33.8-4 8.7-5.5 28.5-3.3 44.4-1.1zm52.4-7.4c1.1-.9 2-1.8 2.6-2.8.9 1.1 1.2 2.2.9 3.3-1.1 2.3-5.2 4.1-11.5 5.5 2.8-1.7 5.7-3.7 8-6zm-17.7 11.5c-20.1 3.2-46.7 3-57.7-1.3 0 0 4 2.8 11.3 4.1-23.2 6.8-40.4 1.7-33.2-3.4 9.1-6.5 35.8-4.5 56.4-1.9 8.2 1 16.7 1.9 23.2 2.5zm-59.5 7.1c-16.1 5.3-25.3 1.2-20.3-2.5 7.8-5.8 30.6-4.5 47.9-2.3 8.3 1.1 16.3 2 22.3 2.4-19 2.5-38.6 1.2-49.9 2.4z"/>
      </svg>
    ),
  },
  {
    name: "XML",
    color: "#00E699",
    customIcon: <FileCode className="w-8 h-8 text-emerald-400" />,
  },
];

export const mobileCrossPlatform: TechItem[] = [
  {
    name: "Flutter",
    color: "#02569B",
    customIcon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M14 2L5 11L8 14L17 5L14 2Z" fill="#54C5F8" />
        <path d="M8 14L14 20H17L11 14L8 14Z" fill="#01579B" />
        <path d="M11 14L14 17L17 14H11Z" fill="#29B6F6" />
      </svg>
    ),
  },
  {
    name: "Android",
    color: "#3DDC84",
    customIcon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M6 12C6 8.7 8.7 6 12 6C15.3 6 18 8.7 18 12V18H6V12Z" fill="#3DDC84" />
        <circle cx="9" cy="10" r="1" fill="white" />
        <circle cx="15" cy="10" r="1" fill="white" />
      </svg>
    ),
  },
  {
    name: "MVVM",
    color: "#00D2FF",
    customIcon: <Layers className="w-8 h-8 text-cyan-400" />,
  },
  {
    name: "Clean Arch",
    color: "#10B981",
    customIcon: <Cpu className="w-8 h-8 text-emerald-400" />,
  },
];

export const dataStorage: TechItem[] = [
  {
    name: "SQLite",
    color: "#003B57",
    customIcon: <Database className="w-8 h-8 text-sky-400" />,
  },
  {
    name: "SharedPreferences",
    color: "#00E676",
    customIcon: <Sliders className="w-8 h-8 text-emerald-400" />,
  },
  {
    name: "Hive",
    color: "#F59E0B",
    customIcon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill="#F59E0B" />
      </svg>
    ),
  },
  {
    name: "Firestore",
    color: "#FFCA28",
    customIcon: <Flame className="w-8 h-8 text-amber-400" />,
  },
];

export const backendIntegrations: TechItem[] = [
  { name: "Dio", color: "#E53935", customIcon: <Share2 className="w-7 h-7 text-red-500" /> },
  { name: "REST APIs", color: "#007AFF", customIcon: <Globe className="w-7 h-7 text-blue-500" /> },
  { name: "WebSockets", color: "#34C759", customIcon: <Share2 className="w-7 h-7 text-green-400" /> },
  { name: "Firebase Auth", color: "#FFCA28", customIcon: <Flame className="w-7 h-7 text-amber-400" /> },
  { name: "FCM", color: "#FF9800", customIcon: <Radio className="w-7 h-7 text-orange-400" /> },
  { name: "Google Maps SDK", color: "#34A853", customIcon: <MapPin className="w-7 h-7 text-emerald-400" /> },
  { name: "RevenueCat", color: "#FF6B00", customIcon: <Shield className="w-7 h-7 text-orange-500" /> },
];

export const toolsDelivery: TechItem[] = [
  { name: "Android Studio", color: "#3DDC84", customIcon: <Wrench className="w-7 h-7 text-emerald-400" /> },
  { name: "Xcode", color: "#147EFB", customIcon: <Hammer className="w-7 h-7 text-sky-400" /> },
  { name: "VS Code", color: "#007ACC", customIcon: <Code2 className="w-7 h-7 text-blue-400" /> },
  { name: "GitHub", color: "#FFFFFF", customIcon: <GitBranch className="w-7 h-7 text-gray-200" /> },
  { name: "GitHub CI/CD", color: "#2088FF", customIcon: <Workflow className="w-7 h-7 text-blue-500" /> },
  { name: "Postman", color: "#FF6C37", customIcon: <Terminal className="w-7 h-7 text-orange-500" /> },
  { name: "Jira", color: "#0052CC", customIcon: <Workflow className="w-7 h-7 text-indigo-400" /> },
  { name: "Play Console", color: "#34A853", customIcon: <Smartphone className="w-7 h-7 text-green-400" /> },
  { name: "App Store Connect", color: "#007AFF", customIcon: <Smartphone className="w-7 h-7 text-blue-400" /> },
];

export const aiIntelligence: TechItem[] = [
  { name: "ChatGPT", color: "#10A37F", customIcon: <Bot className="w-7 h-7 text-emerald-400" /> },
  { name: "Codex", color: "#00D2FF", customIcon: <Code2 className="w-7 h-7 text-cyan-400" /> },
  { name: "Claude", color: "#D97706", customIcon: <Bot className="w-7 h-7 text-amber-500" /> },
  { name: "OpenAI", color: "#10A37F", customIcon: <Bot className="w-7 h-7 text-emerald-500" /> },
  { name: "Speech-to-Text", color: "#06B6D4", customIcon: <Mic className="w-7 h-7 text-cyan-400" /> },
];
