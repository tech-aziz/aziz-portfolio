import { create } from "zustand";

interface HeroState {
  phraseIndex: number;
  currentText: string;
  isDeleting: boolean;
  setPhraseIndex: (index: number) => void;
  setCurrentText: (text: string) => void;
  setIsDeleting: (deleting: boolean) => void;
  nextPhrase: (totalPhrases: number) => void;
}

export const useHeroStore = create<HeroState>((set) => ({
  phraseIndex: 0,
  currentText: "",
  isDeleting: false,
  setPhraseIndex: (index) => set({ phraseIndex: index }),
  setCurrentText: (text) => set({ currentText: text }),
  setIsDeleting: (deleting) => set({ isDeleting: deleting }),
  nextPhrase: (totalPhrases) =>
    set((state) => ({
      phraseIndex: (state.phraseIndex + 1) % totalPhrases,
      isDeleting: false,
    })),
}));
