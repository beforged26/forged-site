"use client";

import { useState } from "react";

const tiers = [
  "Community — $2,500",
  "Bronze — $5,000",
  "Silver — $10,000",
  "Gold — $25,000",
  "Presenting — $50,000",
  "Legacy — $100,000",
  "Transformational — $250,000+",
  "Not sure yet",
];

export default function PartnerForm() {
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ organization, email, interest }),
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
          Thanks — you&rsquo;re on our radar. 🔱
        </p>
        <p className="text-[13px] text-light">
          We&rsquo;ll follow up with the full deck and next steps shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[480px] mx-auto">
      <label className="text-[11px] tracking-[0.2em] uppercase text-gold-m block mb-3">
        Become a sponsor or founding partner
      </label>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="form-row">
          <input
            className="form-input"
            type="text"
            placeholder="Organization / Brand name"
            required
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
        </div>
        <div className="form-row">
          <input
            className="form-input"
            type="email"
            placeholder="your@email.com"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <select
            className="form-select"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          >
            <option value="" disabled>
              Interested tier (optional)
            </option>
            {tiers.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-gold border-none px-7 py-4 text-[11px] font-bold tracking-[0.18em] uppercase text-black cursor-pointer transition-colors hover:bg-gold-m w-full disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Request Sponsorship Deck"}
          </button>
        </div>
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
        Ready to talk now? Email{" "}
        <a href="mailto:pri@beforged.co" className="text-gold-m no-underline hover:underline">
          pri@beforged.co
        </a>{" "}
        or call{" "}
        <a href="tel:5164055549" className="text-gold-m no-underline hover:underline">
          516.405.5549
        </a>
        .
      </p>
    </div>
  );
}
