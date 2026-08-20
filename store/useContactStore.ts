import { create } from "zustand";

interface FormData {
  name: string;
  email: string;
  inquiryType: string;
  subject: string;
  message: string;
}

interface ContactState {
  copied: boolean;
  submitted: boolean;
  loading: boolean;
  formData: FormData;
  emailAddress: string;
  setCopied: (copied: boolean) => void;
  setSubmitted: (submitted: boolean) => void;
  setLoading: (loading: boolean) => void;
  updateField: (field: keyof FormData, value: string) => void;
  resetForm: () => void;
  copyEmail: () => void;
  submitForm: (e: React.FormEvent) => Promise<void>;
}

export const useContactStore = create<ContactState>((set, get) => ({
  copied: false,
  submitted: false,
  loading: false,
  emailAddress: "faisalarshadciit@gmail.com", // Keeping original email as base (or can be configured)
  formData: {
    name: "",
    email: "",
    inquiryType: "Mobile App Project",
    subject: "",
    message: "",
  },
  setCopied: (copied) => set({ copied }),
  setSubmitted: (submitted) => set({ submitted }),
  setLoading: (loading) => set({ loading }),
  updateField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
  resetForm: () =>
    set({
      formData: { name: "", email: "", inquiryType: "Mobile App Project", subject: "", message: "" },
      submitted: false,
      loading: false,
    }),
  copyEmail: () => {
    if (typeof window === "undefined") return;
    navigator.clipboard.writeText(get().emailAddress);
    set({ copied: true });
    setTimeout(() => {
      set({ copied: false });
    }, 2000);
  },
  submitForm: async (e) => {
    e.preventDefault();
    set({ loading: true });
    
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    set({
      loading: false,
      submitted: true,
    });
  },
}));
