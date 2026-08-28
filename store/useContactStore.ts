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
  errorMessage: string | null;
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
  errorMessage: null,
  emailAddress: "azizulhakim.career@gmail.com",
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
      errorMessage: null,
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
    set({ loading: true, errorMessage: null });
    const { formData, emailAddress } = get();

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          inquiryType: formData.inquiryType,
          subject: formData.subject || `Portfolio Contact from ${formData.name}`,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}: ${formData.subject || formData.inquiryType}`,
        }),
      });

      if (response.ok) {
        set({ loading: false, submitted: true });
      } else {
        const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
          formData.subject || `Inquiry: ${formData.inquiryType}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nType: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        set({ loading: false, submitted: true });
      }
    } catch {
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
        formData.subject || `Inquiry: ${formData.inquiryType}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nType: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      set({ loading: false, submitted: true });
    }
  },
}));
