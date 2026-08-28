"use client";

import React from "react";
import { Mail, Copy, Check, Send, MessageSquare, Sparkles } from "lucide-react";
import { useContactStore } from "../../store/useContactStore";

export default function Contact() {
  const {
    copied,
    submitted,
    loading,
    formData,
    emailAddress,
    updateField,
    resetForm,
    copyEmail,
    submitForm,
  } = useContactStore();

  return (
    <section id="contact" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Inquiry</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-[var(--color-text)]">
            Contact Me
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Have an app idea, project requirements, or a role to discuss? Send a message below and I&apos;ll get back to you promptly.
          </p>
        </div>

        {/* Small Compact Contact Card */}
        <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 shadow-xl shadow-black/5 space-y-6">
          {/* Quick Direct Info Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#10b981]/10 text-[#10b981] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <a
                href={`mailto:${emailAddress}`}
                className="text-xs font-mono font-semibold text-[var(--color-text)] hover:text-[#10b981] transition-colors truncate"
              >
                {emailAddress}
              </a>
            </div>

            <div className="flex items-center shrink-0">
              <button
                onClick={copyEmail}
                type="button"
                className="px-3 py-1.5 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[#10b981]/40 text-xs font-mono text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Form / Success Feedback */}
          {submitted ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-3 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[var(--color-text)]">Message Sent!</h4>
              <p className="text-xs md:text-sm text-[var(--color-text-muted)] max-w-md mx-auto">
                Thank you for reaching out, {formData.name || "friend"}. Your message has been delivered to Azizul Hakim. I will respond to your email shortly!
              </p>
              <button
                onClick={resetForm}
                className="mt-2 px-5 py-2 rounded-xl bg-[#10b981] hover:bg-[#0e9f6e] text-white text-xs font-medium transition-colors cursor-pointer shadow-sm"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={submitForm} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[var(--color-text-muted)] mb-1 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[#10b981] outline-none text-xs text-[var(--color-text)] placeholder-[var(--color-text-muted)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--color-text-muted)] mb-1 font-medium">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="e.g. john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[#10b981] outline-none text-xs text-[var(--color-text)] placeholder-[var(--color-text-muted)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--color-text-muted)] mb-1 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => updateField("subject", e.target.value)}
                  placeholder="e.g. Flutter Mobile App Development"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[#10b981] outline-none text-xs text-[var(--color-text)] placeholder-[var(--color-text-muted)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--color-text-muted)] mb-1 font-medium">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Describe your mobile application requirements, timeline, or inquiries..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[#10b981] outline-none text-xs text-[var(--color-text)] placeholder-[var(--color-text-muted)] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-[#10b981] hover:bg-[#0e9f6e] text-white font-semibold text-xs md:text-sm transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:scale-[1.01]"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                    Sending Email...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
