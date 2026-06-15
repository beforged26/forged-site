"use client";

import { useState } from "react";

const sports = [
  "Indoor Volleyball",
  "Beach Volleyball",
  "Pickleball",
  "Basketball",
  "Soccer",
  "Other",
];

const ageGroups = ["13–15", "16–18", "19–23", "24–28", "N/A — Coach / Other"];

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Athlete",
    sport: "Indoor Volleyball",
    ageGroup: "16–18",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/register", {
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
          You&rsquo;re in. 🔱
        </p>
        <p className="text-sm text-light">
          Thanks, {form.name.split(" ")[0] || "athlete"} — we&rsquo;ve received your
          application. We&rsquo;ll be in touch with next steps as registration
          opens for the Phoenix, AZ summit (Nov 26–29, 2026).
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[640px] mx-auto flex flex-col gap-4">
      <div className="form-row">
        <input
          className="form-input"
          type="text"
          placeholder="Full name"
          required
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
        />
      </div>

      <div className="form-row">
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

      <div className="form-row">
        <input
          className="form-input"
          type="tel"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="form-row flex-1">
          <select
            className="form-select"
            value={form.role}
            onChange={(e) => update("role", e.target.value)}
          >
            <option>Athlete</option>
            <option>Coach</option>
            <option>Parent / Guardian</option>
            <option>Performance Professional</option>
          </select>
        </div>

        <div className="form-row flex-1">
          <select
            className="form-select"
            value={form.sport}
            onChange={(e) => update("sport", e.target.value)}
          >
            {sports.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="form-row flex-1">
          <select
            className="form-select"
            value={form.ageGroup}
            onChange={(e) => update("ageGroup", e.target.value)}
          >
            {ageGroups.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <textarea
          className="form-textarea"
          placeholder="Anything else we should know? (optional)"
          rows={4}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-gold border-none px-7 py-4 text-[11px] font-bold tracking-[0.18em] uppercase text-black cursor-pointer transition-colors hover:bg-gold-m disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : "Submit Application"}
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

      <p className="text-[11px] text-muted text-center">
        No payment required to apply. We&rsquo;ll follow up with full
        registration details and pricing.
      </p>
    </form>
  );
}
