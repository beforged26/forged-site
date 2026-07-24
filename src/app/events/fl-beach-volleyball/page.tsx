import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "FL — Beach Volleyball | FORGED",
  description:
    "FORGED Beach Volleyball — Dania Beach, Florida. February 12–15, 2027. The same elite development model, built for the sand. Registrations opening soon.",
};

export default function FLBeachVolleyball() {
  return (
    <>
      {/* HERO */}
      <section className="hero-anim min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,164,76,0.04) 0%, transparent 60%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          Registration Open
        </p>
        <h1 className="font-display text-[clamp(52px,10vw,120px)] leading-[0.95] tracking-[0.04em] text-cream mb-4 relative z-[1]">
          FLORIDA
          <br />
          <span className="gold-gradient-text">BEACH.</span>
        </h1>
        <p className="text-[11px] tracking-[0.25em] uppercase text-muted mb-8 relative z-[1]">
          Dania Beach, FL &nbsp;·&nbsp; Feb 12–15, 2027 &nbsp;·&nbsp; Beach Volleyball
        </p>
        <p className="font-serif italic text-[clamp(16px,2.5vw,22px)] text-light max-w-[580px] mx-auto relative z-[1] leading-[1.6] mb-10">
          FORGED is coming to the sand. The same elite development model — expert coaches,
          mental performance, community — built for beach volleyball. Registrations opening soon.
        </p>
        <div className="flex items-center gap-4 flex-wrap justify-center relative z-[1]">
          <Link
            href="/register/beach-athlete"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-4 hover:bg-gold-m transition-colors"
          >
            Register Now
          </Link>
          <a
            href="#notify"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-8 py-4 hover:border-gold transition-colors"
          >
            Get Updates
          </a>
        </div>
      </section>

      <div className="gold-rule" />

      {/* QUICK FACTS */}
      <div className="bg-dark border-y border-gold/10 py-16 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto grid gap-10 text-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
          {[
            { num: "4", label: "Days of Development" },
            { num: "FLL", label: "Dania Beach, FL" },
            { num: "FEB", label: "12–15, 2027" },
            { num: "BEACH", label: "Volleyball" },
          ].map((s) => (
            <FadeUp key={s.label}>
              <div className="font-display text-[clamp(40px,6vw,64px)] tracking-[0.04em] gold-gradient-text leading-none mb-2">{s.num}</div>
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted">{s.label}</div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* WHAT TO EXPECT */}
      <FadeUp className="max-w-[1000px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">What to Expect</p>
        <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-10">
          FORGED.
          <br />
          ON THE SAND.
        </h2>
        <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light max-w-[640px] leading-[1.8]">
          Everything that makes FORGED different — the caliber of coaching, the mental performance
          work, the community standard — applied to beach volleyball. Four full days of development
          built specifically for the demands of the sand game. More details on lineup, schedule,
          and registration coming soon.
        </p>
      </FadeUp>

      <div className="gold-rule" />

      {/* NOTIFY */}
      <FadeUp className="max-w-[640px] mx-auto px-6 md:px-10 py-24 text-center">
        <div style={{ scrollMarginTop: "100px" }} id="notify" />
        <p className="section-eyebrow center justify-center">Stay in the Loop</p>
        <h2 className="font-display text-[clamp(38px,6vw,72px)] tracking-[0.04em] leading-[0.95] text-cream mb-4">
          BE FIRST
          <br />
          <span className="gold-gradient-text">TO KNOW.</span>
        </h2>
        <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light leading-[1.6] mb-10">
          Registrations open soon. Sign up to our newsletter and you'll hear
          about it before anyone else.
        </p>
        <WaitlistForm id="fl-beach-notify" label="Join our newsletter" />
      </FadeUp>

      <div className="gold-rule" />

      {/* AZ CTA */}
      <div className="px-6 md:px-10 py-20 text-center">
        <FadeUp>
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5">
            While You Wait
          </p>
          <h2 className="font-display text-[clamp(38px,6vw,72px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
            JOIN US IN
            <br />
            ARIZONA FIRST.
          </h2>
          <p className="font-serif italic text-[clamp(15px,2vw,18px)] text-light max-w-[500px] mx-auto mb-10 leading-[1.6]">
            The inaugural FORGED summit is November 26–29, 2026 in Mesa, AZ — indoor volleyball.
            Registration is open now.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/events/az-volleyball"
              className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-3.5 hover:bg-gold-m transition-colors"
            >
              View AZ Event
            </Link>
            <Link
              href="/register/athlete"
              className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-8 py-3.5 hover:border-gold transition-colors"
            >
              Register Now
            </Link>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
