import { create } from "zustand";

interface NavbarState {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setScrolled: (scrolled: boolean) => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  navLinks: Array<{ label: string; href: string }>;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  isScrolled: false,
  isMobileMenuOpen: false,
  setScrolled: (scrolled) => set({ isScrolled: scrolled }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  navLinks: [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/#projects" },
    { label: "Tech Stack", href: "/#tech-stack" },
    { label: "Experience", href: "/#experience" },
  ],
}));
