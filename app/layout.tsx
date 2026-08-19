import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azizul Hakim | Senior Mobile Application Engineer | Flutter, KMP & AI-Enabled Delivery",
  description:
    "Senior Mobile Application Engineer focused on Flutter, Kotlin Multiplatform, Jetpack Compose, SwiftUI, and AI-enabled mobile features for Android and iOS. 15+ apps shipped, 15+ private NDA projects, and 200K+ installs.",
  keywords: [
    "Azizul Hakim",
    "Mobile Application Engineer",
    "Flutter Developer",
    "Kotlin Multiplatform",
    "KMP",
    "Jetpack Compose",
    "SwiftUI",
    "Android Developer",
    "iOS Developer",
    "AI Mobile Engineer",
    "On-Device AI",
    "RevenueCat",
    "ATRULE Technologies",
  ],
  authors: [{ name: "Azizul Hakim", url: "https://faisalarashad.com/" }],
  creator: "Azizul Hakim",
  openGraph: {
    title: "Azizul Hakim | Senior Mobile Application Engineer | Flutter, KMP & AI-Enabled Delivery",
    description:
      "Senior Mobile Application Engineer focused on Flutter, Kotlin Multiplatform, Jetpack Compose, SwiftUI, and AI-enabled mobile features for Android and iOS. 15+ apps shipped, 15+ private NDA projects, and 200K+ installs.",
    url: "https://faisalarashad.com/",
    siteName: "Azizul Hakim Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Azizul Hakim - Senior Mobile Application Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azizul Hakim | Senior Mobile Application Engineer | Flutter, KMP & AI-Enabled Delivery",
    description:
      "Senior Mobile Application Engineer focused on Flutter, Kotlin Multiplatform, Jetpack Compose, SwiftUI, and AI-enabled mobile features for Android and iOS. 15+ apps shipped, 15+ private NDA projects, and 200K+ installs.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Azizul Hakim",
  url: "https://faisalarshad.com",
  jobTitle: "Senior Mobile Application Engineer | Flutter, KMP & AI-Enabled Delivery",
  description:
    "Senior Mobile Application Engineer focused on Flutter, Kotlin Multiplatform, Jetpack Compose, SwiftUI, and AI-enabled mobile features for Android and iOS. 15+ apps shipped, 15+ private NDA projects, and 200K+ installs.",
  knowsAbout: [
    "Flutter",
    "Dart",
    "Kotlin",
    "Kotlin Multiplatform",
    "KMP",
    "Jetpack Compose",
    "SwiftUI",
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
    "https://github.com/faisalarshadciit",
    "https://www.linkedin.com/in/faisal-arshad-bb5ab1153/",
    "https://www.upwork.com/freelancers/~0143722ece1833a4ed",
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
      className={`${roboto.variable} ${robotoMono.variable} h-full antialiased`}
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

