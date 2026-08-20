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
  Server
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
    name: "Kotlin",
    color: "#7F52FF",
    customIcon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M20 20H4V4H20L12 12L20 20Z" fill="url(#kotlin-grad)" />
        <defs>
          <linearGradient id="kotlin-grad" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E44857" />
            <stop offset="0.5" stopColor="#C711E1" />
            <stop offset="1" stopColor="#7F52FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Java",
    color: "#E51F24",
    customIcon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8 2 6 5 6 7C6 9 8 10 12 10C16 10 18 9 18 7C18 5 16 2 12 2Z" fill="#EA2D2E" />
        <path d="M4 11C4 14 7.5 16.5 12 16.5C16.5 16.5 20 14 20 11H4Z" fill="#0074BD" />
        <path d="M7 18C8.5 19.5 10 20 12 20C14 20 15.5 19.5 17 18" stroke="#E51F24" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Swift",
    color: "#F05138",
    customIcon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M19.5 14C17.5 17.5 13.5 19.5 9 19.5C6 19.5 4 18.5 2.5 17C6 17 8.5 15.5 10.5 13.5C7.5 13.5 5 11.5 4 9C6 9.5 7.5 9 8.5 8.5C5.5 8 3.5 5.5 3.5 2.5C5.5 4.5 8 5.5 11 5.5C14.5 5.5 18 3.5 19.5 1.5C18.5 4.5 16.5 7 14 8.5C16.5 8.5 19 7.5 20.5 6C20 9 18 11.5 15.5 13C17.5 13 19 12 20 11C19.5 12.5 18.5 13.5 19.5 14Z" fill="#F05138" />
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
    name: "KMP",
    color: "#7F52FF",
    customIcon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#7F52FF" />
        <path d="M6 18V6L12 12L6 18Z" fill="white" />
        <path d="M18 18H12L18 12V18Z" fill="#C711E1" />
      </svg>
    ),
  },
  {
    name: "Jetpack Compose",
    color: "#4285F4",
    customIcon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#4285F4" />
        <path d="M12 6L7 9V15L12 18L17 15V9L12 6Z" fill="#34A853" />
      </svg>
    ),
  },
  {
    name: "SwiftUI",
    color: "#F05138",
    customIcon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#F05138" />
        <path d="M15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
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
    name: "Room",
    color: "#4285F4",
    customIcon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="4" fill="#4285F4" />
        <path d="M8 12H16" stroke="white" strokeWidth="2" />
      </svg>
    ),
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
  {
    name: "Supabase",
    color: "#3ECF8E",
    customIcon: <Zap className="w-8 h-8 text-emerald-400" />,
  },
];

export const backendIntegrations: TechItem[] = [
  { name: "Dio", color: "#E53935", customIcon: <Share2 className="w-7 h-7 text-red-500" /> },
  { name: "Retrofit", color: "#FFFFFF", customIcon: <Server className="w-7 h-7 text-gray-200" /> },
  { name: "URLSession", color: "#FF9500", customIcon: <Globe className="w-7 h-7 text-amber-500" /> },
  { name: "REST APIs", color: "#007AFF", customIcon: <Globe className="w-7 h-7 text-blue-500" /> },
  { name: "WebSockets", color: "#34C759", customIcon: <Share2 className="w-7 h-7 text-green-400" /> },
  { name: "Firebase Auth", color: "#FFCA28", customIcon: <Flame className="w-7 h-7 text-amber-400" /> },
  { name: "FCM", color: "#FF9800", customIcon: <Radio className="w-7 h-7 text-orange-400" /> },
  { name: "OneSignal", color: "#E54B4B", customIcon: <Radio className="w-7 h-7 text-red-400" /> },
  { name: "Google Maps SDK", color: "#34A853", customIcon: <MapPin className="w-7 h-7 text-emerald-400" /> },
  { name: "RevenueCat", color: "#FF6B00", customIcon: <Shield className="w-7 h-7 text-orange-500" /> },
  { name: "Play Billing", color: "#00C853", customIcon: <Zap className="w-7 h-7 text-green-500" /> },
  { name: "StoreKit", color: "#007AFF", customIcon: <Shield className="w-7 h-7 text-blue-400" /> },
];

export const toolsDelivery: TechItem[] = [
  { name: "Android Studio", color: "#3DDC84", customIcon: <Wrench className="w-7 h-7 text-emerald-400" /> },
  { name: "Xcode", color: "#147EFB", customIcon: <Hammer className="w-7 h-7 text-sky-400" /> },
  { name: "VS Code", color: "#007ACC", customIcon: <Code2 className="w-7 h-7 text-blue-400" /> },
  { name: "GitHub", color: "#FFFFFF", customIcon: <GitBranch className="w-7 h-7 text-gray-200" /> },
  { name: "GitHub CI/CD", color: "#2088FF", customIcon: <Workflow className="w-7 h-7 text-blue-500" /> },
  { name: "Postman", color: "#FF6C37", customIcon: <Terminal className="w-7 h-7 text-orange-500" /> },
  { name: "Jira", color: "#0052CC", customIcon: <Workflow className="w-7 h-7 text-indigo-400" /> },
  { name: "Shorebird OTA", color: "#10B981", customIcon: <Zap className="w-7 h-7 text-emerald-400" /> },
  { name: "Play Console", color: "#34A853", customIcon: <Smartphone className="w-7 h-7 text-green-400" /> },
  { name: "App Store Connect", color: "#007AFF", customIcon: <Smartphone className="w-7 h-7 text-blue-400" /> },
];

export const aiIntelligence: TechItem[] = [
  { name: "ChatGPT", color: "#10A37F", customIcon: <Bot className="w-7 h-7 text-emerald-400" /> },
  { name: "Codex", color: "#00D2FF", customIcon: <Code2 className="w-7 h-7 text-cyan-400" /> },
  { name: "Claude", color: "#D97706", customIcon: <Bot className="w-7 h-7 text-amber-500" /> },
  { name: "OpenAI", color: "#10A37F", customIcon: <Bot className="w-7 h-7 text-emerald-500" /> },
  { name: "ML Kit", color: "#4285F4", customIcon: <Zap className="w-7 h-7 text-blue-400" /> },
  { name: "TensorFlow Lite", color: "#FF6F00", customIcon: <Cpu className="w-7 h-7 text-orange-500" /> },
  { name: "OCR", color: "#10B981", customIcon: <ScanText className="w-7 h-7 text-emerald-400" /> },
  { name: "Speech-to-Text", color: "#06B6D4", customIcon: <Mic className="w-7 h-7 text-cyan-400" /> },
  { name: "Semantic Search", color: "#8B5CF6", customIcon: <Search className="w-7 h-7 text-purple-400" /> },
  { name: "AI Code Review", color: "#F59E0B", customIcon: <CheckCircle className="w-7 h-7 text-amber-400" /> },
];
