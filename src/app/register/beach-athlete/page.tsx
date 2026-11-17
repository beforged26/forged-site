import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Beach Athlete Registration — FORGED",
  description:
    "FORGED Beach — Dania Beach, FL, February 12–15, 2027. Registration coming soon.",
};

export default function BeachAthleteRegister() {
  return (
    <>
      <section className="hero-anim min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,164,76,0.04) 0%, transparent 60%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          Beach Athlete Registration
        </p>
        <h1 className="font-display text-[clamp(56px,11vw,130px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          REGISTRATION
          <br />
          <span className="gold-gradient-text">COMING SOON.</span>
        </h1>
        <p className="text-[11px] tracking-[0.25em] uppercase text-muted mb-8 relative z-[1]">
          Dania Beach, FL &nbsp;·&nbsp; Feb 12–15, 2027 &nbsp;·&nbsp; Beach Volleyball
        </p>
        <p className="font-serif italic text-[clamp(16px,2.5vw,22px)] text-light max-w-[580px] mx-auto relative z-[1] leading-[1.6] mb-10">
          Registration opens soon. Join the newsletter and you&rsquo;ll hear first, with the lineup, schedule and pricing.
        </p>
        <div className="w-full max-w-[640px] relative z-[1]">
          <WaitlistForm id="beach-athlete-notify" label="Join our newsletter" />
        </div>
        <div className="mt-10 relative z-[1]">
          <Link
            href="/events/fl-beach-volleyball"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-8 py-3.5 hover:border-gold transition-colors"
          >
            Back to Beach Details
          </Link>
        </div>
      </section>
    </>
  );
}
