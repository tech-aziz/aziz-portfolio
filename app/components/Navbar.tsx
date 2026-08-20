"use client";

import React, { useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useThemeStore } from "../../store/useThemeStore";
import { useNavbarStore } from "../../store/useNavbarStore";

export default function Navbar() {
  const { isLight, initTheme, toggleTheme } = useThemeStore();
  const {
    isScrolled,
    isMobileMenuOpen,
    setScrolled,
    toggleMobileMenu,
    closeMobileMenu,
    navLinks
  } = useNavbarStore();

  useEffect(() => {
    // Check and set theme on mount
    initTheme();

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [initTheme, setScrolled]);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "backdrop-blur-xl border-b border-[var(--color-border)] shadow-lg shadow-black/5"
        : "bg-transparent"
        }`}
      style={{
        backgroundColor: isScrolled
          ? "color-mix(in srgb, var(--color-bg) 80%, transparent)"
          : "transparent",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="font-mono text-2xl font-bold tracking-tight text-[var(--color-accent)] hover:opacity-85 transition-opacity flex items-center gap-2 group"
        >
          AH
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions (Theme Toggle & Mobile Menu) */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl bg-[var(--color-bg-card)] hover:bg-[var(--color-bg-card-hover)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-all cursor-pointer shadow-sm"
          >
            {isLight ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={toggleMobileMenu}
            type="button"
            aria-label="Toggle menu"
            className="md:hidden p-2.5 rounded-xl bg-[var(--color-bg-card)] hover:bg-[var(--color-bg-card-hover)] border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[var(--color-text)]" />
            ) : (
              <Menu className="w-5 h-5 text-[var(--color-text)]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-2xl px-6 py-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-base font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
