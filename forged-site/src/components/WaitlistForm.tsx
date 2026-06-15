"use client";

import { useState } from "react";

export default function WaitlistForm({
  id,
  label,
  privacyNote,
}: {
  id: string;
  label: string;
  privacyNote?: React.ReactNode;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="text-center px-5 py-5 border border-gold/30 bg-gold/5 max-w-[480px] mx-auto">
        <p className="font-display text-[22px] tracking-[0.1em] text-gold mb-1.5">
          You&rsquo;re on the list. 🔱
        </p>
        <p className="text-[13px] text-light">
          We&rsquo;ll reach out when registration opens. Stay sharp.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[480px] mx-auto">
      <label htmlFor={id} className="text-[11px] tracking-[0.2em] uppercase text-gold-m block mb-3">
        {label}
      </label>
      <form onSubmit={handleSubmit} className="form-row flex-col sm:flex-row">
        <input
          id={id}
          className="form-input"
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-gold border-none px-7 py-4 text-[11px] font-bold tracking-[0.18em] uppercase text-black cursor-pointer transition-colors hover:bg-gold-m whitespace-nowrap disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Join 🔱"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-[11px] text-gold-m mt-3 text-center">
          Something went wrong — email us directly at{" "}
          <a href="mailto:pri@beforged.co" className="underline">
            pri@beforged.co
          </a>
          .
        </p>
      )}
      <p className="text-[11px] text-muted mt-3 text-center">
        {privacyNote ?? "No spam. Just the information you need when it matters."}
      </p>
    </div>
  );
}
