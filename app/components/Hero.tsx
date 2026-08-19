"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const TYPING_PHRASES = [
  "Agentic AI for Mobile",
  "On-Device AI",
  "LLM + OpenAI Integrations",
  "OCR, Vision & Voice AI",
  "Semantic Search + RAG",
  "Flutter + KMP Delivery",
  "Play Store + App Store Releases",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetPhrase = TYPING_PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(targetPhrase.slice(0, currentText.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      }
    } else {
      if (currentText.length < targetPhrase.length) {
        timer = setTimeout(() => {
          setCurrentText(targetPhrase.slice(0, currentText.length + 1));
        }, 50);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "15+", label: "Apps Shipped" },
    { value: "200K+", label: "Installs" },
    { value: "15+", label: "Private (NDA) Projects" },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-28 pb-20 bg-[#0a0f0c]" id="hero">
      {/* Exact Background Radial Glow Effect from original site inspect element */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(16, 185, 129, 0.18) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(34, 197, 94, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full space-y-6">
        {/* Profile Avatar Ring with Glowing Green Halo (#10B981) */}
        <div className="flex justify-center mb-4">
          <div className="relative group">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#10b981] p-1 shadow-2xl shadow-emerald-500/50 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden relative border-2 border-emerald-400/50">
                <Image
                  src="/azizul-headshot.png"
                  alt="Azizul Hakim"
                  fill
                  sizes="128px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Intro Greeting */}
        <p className="text-gray-400 text-base font-medium tracking-wide">Hi, I&apos;m</p>

        {/* Main Monospace Name Title */}
        <h1 className="font-mono font-extrabold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none">
          Azizul Hakim
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto leading-relaxed">
          Senior Mobile Application Engineer <span className="text-gray-500 font-normal">|</span> Flutter, KMP &amp; AI-Enabled Delivery
        </p>

        {/* Cycling Typing Effect Text (#10B981) */}
        <div className="h-10 flex items-center justify-center">
          <div className="inline-flex items-center gap-1">
            <span className="text-xl md:text-2xl font-mono font-bold text-[#10b981]">
              {currentText}
            </span>
            <span className="text-xl md:text-2xl font-mono font-bold text-[#10b981] animate-blink">
              |
            </span>
          </div>
        </div>

        {/* Monospace Tagline Bar */}
        <p className="text-xs md:text-sm text-gray-400 font-mono tracking-wider">
          5+ Years <span className="text-[#10b981]">|</span> 15+ Apps Shipped <span className="text-[#10b981]">|</span> 200K+ Installs <span className="text-[#10b981]">|</span> 15+ Private (NDA) Projects
        </p>

        {/* 4 Stat Counter Cards Grid (#182F27) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 pt-4 max-w-3xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#182f27] border border-[#10b981]/25 hover:border-[#10b981]/60 rounded-2xl p-5 md:p-6 text-center transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/20 group"
            >
              <div className="text-4xl md:text-5xl font-extrabold font-mono text-[#10b981] group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs text-gray-300 mt-2 font-sans font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons Centered Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-slate-950 font-extrabold px-7 py-3 rounded-xl font-mono text-sm transition-all shadow-lg shadow-emerald-500/25 hover:scale-105 cursor-pointer"
          >
            <span>View Projects</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#182f27] border border-[#10b981]/30 hover:border-[#10b981]/60 text-white font-medium px-7 py-3 rounded-xl font-mono text-sm transition-all hover:scale-105 cursor-pointer"
          >
            <span>Contact Me</span>
          </a>
        </div>

        {/* Available Status Pill */}
        <div className="pt-4 flex justify-center">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#182f27] border border-[#10b981]/30 text-emerald-400 text-xs md:text-sm font-medium shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]"></span>
            </span>
            Available for Mobile App Projects &amp; Roles
          </span>
        </div>
      </div>
    </section>
  );
}
