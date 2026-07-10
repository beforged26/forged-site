"use client";
import { useState } from "react";

export default function CommunityEmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to API route
    setStatus("done");
  }

  if (status === "done") {
    return (
      <p className="text-[13px] text-gold font-semibold tracking-[0.1em] py-4">
        You're on the list. We'll be in touch.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 bg-[#111] border border-gold/20 text-cream text-[13px] px-4 py-3.5 focus:outline-none focus:border-gold/60 placeholder:text-muted transition-colors"
      />
      <button
        type="submit"
        className="text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-7 py-3.5 hover:bg-gold-m transition-colors whitespace-nowrap"
      >
        Notify Me
      </button>
    </form>
  );
}
