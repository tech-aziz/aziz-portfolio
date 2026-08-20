"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Award, MapPin, Send, MessageSquare } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1-2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 1.63 1.63a1.63 1.63 0 0 0-1.63-1.63z" />
    </svg>
  );
}


export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Mobile App Project",
    subject: "",
    message: "",
  });

  const emailAddress = "faisalarshadciit@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[var(--color-bg)]/40 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-[var(--color-text)]">
          Get In Touch
        </h2>
        <p className="text-[var(--color-text-muted)] mt-2 mb-12 text-base max-w-2xl">
          Interested in building a new mobile product, integrating AI capabilities, or hiring for a senior engineering role? Let&apos;s connect.
        </p>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Quick Direct Info Column (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Email Card with Copy Button */}
            <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-lg shadow-black/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] text-sm">Direct Email</h3>
                  <p className="text-xs text-[var(--color-text-muted)]">Copy or click to send</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                <span className="font-mono text-xs text-[var(--color-text)] truncate">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  aria-label="Copy email"
                  className="px-3 py-1.5 rounded-lg bg-[var(--color-accent)]/10 hover:bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
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

            {/* Social & Profiles */}
            <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-lg shadow-black/5">
              <h3 className="font-bold text-[var(--color-text)] text-sm mb-4">
                Online Profiles &amp; Work
              </h3>

              <div className="space-y-3">
                <a
                  href="https://github.com/tech-aziz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 text-xs font-medium text-[var(--color-text)] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    <span>GitHub / tech-aziz</span>
                  </div>
                  <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] font-mono">&rarr;</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/faisal-arshad-bb5ab1153/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 text-xs font-medium text-[var(--color-text)] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] font-mono">&rarr;</span>
                </a>

                <a
                  href="https://www.upwork.com/freelancers/~0143722ece1833a4ed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 text-xs font-medium text-[var(--color-text)] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[var(--color-accent)]" />
                    <span>Upwork (Top Rated 100% Success)</span>
                  </div>
                  <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] font-mono">&rarr;</span>
                </a>
              </div>

              <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex items-center gap-2 text-xs text-[var(--color-text-muted)] font-mono">
                <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                <span>Lahore, Punjab, Pakistan (PKT / UTC+5)</span>
              </div>
            </div>
          </div>

          {/* Interactive Form Column (3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)] text-lg">Send a Message</h3>
                  <p className="text-xs text-[var(--color-text-muted)]">I usually respond within 24 hours.</p>
                </div>
              </div>

              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[var(--color-text)]">Message Received!</h4>
                  <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto">
                    Thank you for reaching out, {formData.name || "friend"}. I will review your note regarding &quot;{formData.inquiryType}&quot; and get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        inquiryType: "Mobile App Project",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-4 px-5 py-2 rounded-xl bg-[var(--color-accent)] text-white text-xs font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[var(--color-text-muted)] mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[var(--color-accent)] outline-none text-xs text-[var(--color-text)] placeholder-[var(--color-text-muted)] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[var(--color-text-muted)] mb-1.5 font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[var(--color-accent)] outline-none text-xs text-[var(--color-text)] placeholder-[var(--color-text-muted)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[var(--color-text-muted)] mb-1.5 font-medium">
                        Inquiry Type
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[var(--color-accent)] outline-none text-xs text-[var(--color-text)] transition-colors cursor-pointer"
                      >
                        <option value="Mobile App Project">Mobile App Project (Flutter / KMP)</option>
                        <option value="AI Mobile Integration">AI Mobile Feature Integration</option>
                        <option value="Code Review & Architecture">Code Review &amp; Architecture Clean-up</option>
                        <option value="Full-Time / Contract Role">Full-Time / Contract Engineering Role</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[var(--color-text-muted)] mb-1.5 font-medium">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project timeline & Scope"
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[var(--color-accent)] outline-none text-xs text-[var(--color-text)] placeholder-[var(--color-text-muted)] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--color-text-muted)] mb-1.5 font-medium">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your app project, goals, or requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[var(--color-accent)] outline-none text-xs text-[var(--color-text)] placeholder-[var(--color-text-muted)] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-medium text-sm transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
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
        </div>
      </div>
    </section>
  );
}
