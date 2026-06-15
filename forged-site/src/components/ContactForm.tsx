"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="text-center px-8 py-10 border border-gold/30 bg-gold/5 max-w-[640px] mx-auto">
        <p className="font-display text-2xl tracking-[0.1em] text-gold mb-2">
          Message sent. 🔱
        </p>
        <p className="text-sm text-light">
          Thanks for reaching out — we&rsquo;ll get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[640px] mx-auto flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="form-row flex-1">
          <input
            className="form-input"
            type="text"
            placeholder="Full name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </div>
        <div className="form-row flex-1">
          <input
            className="form-input"
            type="email"
            placeholder="your@email.com"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <input
          className="form-input"
          type="text"
          placeholder="Subject (optional)"
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
        />
      </div>

      <div className="form-row">
        <textarea
          className="form-textarea"
          placeholder="Your message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-gold border-none px-7 py-4 text-[11px] font-bold tracking-[0.18em] uppercase text-black cursor-pointer transition-colors hover:bg-gold-m disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-[11px] text-gold-m text-center">
          Something went wrong — email us directly at{" "}
          <a href="mailto:pri@beforged.co" className="underline">
            pri@beforged.co
          </a>
          .
        </p>
      )}
    </form>
  );
}
