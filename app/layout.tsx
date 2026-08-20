import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azizul Hakim | Mobile Application Developer | Flutter & AI-Enabled Delivery",
  description:
    "Mobile Application Developer focused on Flutter and AI-enabled mobile features for Android and iOS. 15+ apps shipped, 15+ private NDA projects, and 200K+ installs.",
  keywords: [
    "Azizul Hakim",
    "Mobile Application Developer",
    "Flutter Developer",
    "Android Developer",
    "iOS Developer",
    "AI Mobile Engineer",
    "On-Device AI",
    "RevenueCat",
    "ATRULE Technologies",
  ],
  authors: [{ name: "Azizul Hakim", url: "https://github.com/tech-aziz" }],
  creator: "Azizul Hakim",
  openGraph: {
    title: "Azizul Hakim | Mobile Application Developer | Flutter & AI-Enabled Delivery",
    description:
      "Mobile Application Developer focused on Flutter and AI-enabled mobile features for Android and iOS. 15+ apps shipped, 15+ private NDA projects, and 200K+ installs.",
    url: "https://github.com/tech-aziz",
    siteName: "Azizul Hakim Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Azizul Hakim - Mobile Application Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azizul Hakim | Mobile Application Developer | Flutter & AI-Enabled Delivery",
    description:
      "Mobile Application Developer focused on Flutter and AI-enabled mobile features for Android and iOS. 15+ apps shipped, 15+ private NDA projects, and 200K+ installs.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Azizul Hakim",
  url: "https://github.com/tech-aziz",
  jobTitle: "Mobile Application Developer | Flutter & AI-Enabled Delivery",
  description:
    "Mobile Application Developer focused on Flutter and AI-enabled mobile features for Android and iOS. 15+ apps shipped, 15+ private NDA projects, and 200K+ installs.",
  knowsAbout: [
    "Flutter",
    "Dart",
    "Kotlin",
    "Java",
    "Swift",
    "Android",
    "iOS",
    "MVVM",
    "Clean Architecture",
    "REST APIs",
    "Firebase",
    "Google Maps",
    "WebSockets",
    "RevenueCat",
    "OneSignal",
    "Push Notifications",
    "Deep Linking",
    "Google Play Console",
    "App Store Connect",
    "Coroutines",
    "Provider",
    "GetX",
    "SQFLite",
    "GitHub Actions",
    "Postman",
    "Jira",
    "ChatGPT",
    "Claude",
    "Codex",
    "OpenAI",
    "ML Kit",
    "TensorFlow Lite",
    "OCR",
    "Speech-to-Text",
    "Semantic Search",
    "AI Code Review",
  ],
  sameAs: [
    "https://github.com/tech-aziz",
    "https://www.linkedin.com/in/faisal-arshad-bb5ab1153/",
    "https://www.upwork.com/freelancers/~01bc46ada7bc95dc8f?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~01bc46ada7bc95dc8f%2Fprofile",
  ],
  worksFor: {
    "@type": "Organization",
    name: "ATRULE Technologies",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "Pakistan",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "COMSATS University Islamabad",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem("theme");
                if (theme === "light") {
                  document.documentElement.classList.add("light");
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}

