"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 px-6 border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
        <div>
          <p>© 2026 Azizul Hakim</p>
        </div>

        <div>
          <p>
            Built with <span className="text-[#10b981] font-semibold">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
