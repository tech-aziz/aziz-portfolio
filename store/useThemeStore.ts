import { create } from "zustand";

interface ThemeState {
  isLight: boolean;
  initTheme: () => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  isLight: false,
  initTheme: () => {
    if (typeof window === "undefined") return;
    const storedTheme = localStorage.getItem("theme");
    const isLightMode =
      storedTheme === "light" ||
      document.documentElement.classList.contains("light") ||
      document.body.classList.contains("light");
    
    set({ isLight: isLightMode });

    // Sync body/html classes
    if (isLightMode) {
      document.documentElement.classList.add("light");
      document.body.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.body.classList.remove("light");
    }
  },
  toggleTheme: () => {
    const nextLight = !get().isLight;
    set({ isLight: nextLight });

    if (typeof window === "undefined") return;
    if (nextLight) {
      document.documentElement.classList.add("light");
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  },
}));
