"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 px-6 border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-[1250px] mx-auto flex items-center justify-between gap-4 text-xs text-[var(--color-text-muted)] font-mono">
        <div>
          <p>© 2026 Azizul Hakim</p>
        </div>

        <div className="flex items-center gap-4">
          <p>
            Built with <span className="text-[#10b981] font-semibold">Next.js</span>
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Back to top"
            className="p-2 rounded-lg bg-[#182f27] hover:bg-[#1e3b31] border border-[#10b981]/25 text-[var(--color-text-muted)] hover:text-[#10b981] transition-all cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
