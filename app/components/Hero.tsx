"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useHeroStore } from "../../store/useHeroStore";
import { TYPING_PHRASES, heroStats } from "../../dummy-data/heroData";

export default function Hero() {
  const {
    phraseIndex,
    currentText,
    isDeleting,
    setPhraseIndex,
    setCurrentText,
    setIsDeleting,
    nextPhrase
  } = useHeroStore();

  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const targetPhrase = TYPING_PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(targetPhrase.slice(0, currentText.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        nextPhrase(TYPING_PHRASES.length);
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
  }, [currentText, isDeleting, phraseIndex, setCurrentText, setIsDeleting, nextPhrase, mounted]);

  const stats = heroStats;

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-36 md:pt-44 pb-20 bg-[var(--color-bg)]" id="hero">
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
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-[#10b981] shadow-2xl shadow-emerald-500/30 overflow-hidden relative transition-transform duration-300 group-hover:scale-105">
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

        {/* Intro Greeting */}
        <p className="text-[var(--color-text-muted)] text-base font-medium tracking-wide">Hi, I&apos;m</p>

        {/* Main Monospace Name Title */}
        <h1 className="font-mono font-extrabold text-4xl md:text-6xl lg:text-7xl text-[var(--color-text)] tracking-tight leading-none">
          Azizul Hakim
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-[var(--color-text)] font-medium max-w-3xl mx-auto leading-relaxed">
          Mobile Application Developer <span className="text-[var(--color-text-muted)] font-normal">|</span> Flutter &amp; AI-Enabled Delivery
        </p>

        {/* Cycling Typing Effect Text (#10B981) */}
        <div className="h-10 flex items-center justify-center">
          <div className="inline-flex items-center gap-1">
            <span className="text-xl md:text-2xl font-mono font-bold text-[#10b981]">
              {mounted ? currentText : ""}
            </span>
            <span className="text-xl md:text-2xl font-mono font-bold text-[#10b981] animate-blink">
              |
            </span>
          </div>
        </div>

        {/* Monospace Tagline Bar */}
        <p className="text-xs md:text-sm text-[var(--color-text-muted)] font-mono tracking-wider">
          4+ Years <span className="text-[#10b981]">|</span> 8+ Apps Delivered <span className="text-[#10b981]">|</span> 6K+ Installs <span className="text-[#10b981]">|</span> 5+ Private Projects
        </p>

        {/* 4 Stat Counter Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 pt-4 max-w-3xl mx-auto w-full">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-bg-green-card)] border border-[var(--color-border-green-card)] hover:border-[#10b981]/60 rounded-2xl p-5 md:p-6 text-center transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/10 group flex flex-col justify-center items-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-mono text-[#10b981] group-hover:scale-105 transition-transform whitespace-nowrap">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs text-[var(--color-text-muted)] mt-2 font-mono tracking-wide whitespace-nowrap">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons Centered Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-[#10b981] hover:bg-[#0e9f6e] text-white font-medium px-6 py-3 rounded-xl transition-all hover:scale-105 cursor-pointer text-base shadow-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] text-[var(--color-text)] font-medium px-6 py-3 rounded-xl transition-all hover:scale-105 cursor-pointer text-base"
          >
            Contact Me
          </a>
        </div>

        {/* Available Status Pill */}
        <div className="pt-4 flex justify-center">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-xs md:text-sm font-medium shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]"></span>
            </span>
            Available for Mobile App Projects &amp; Roles
          </span>
        </div>
      </div>
    </section>
  );
}
