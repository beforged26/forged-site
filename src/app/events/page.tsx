import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Events — FORGED",
  description:
    "What's next for FORGED: FORGED Beach in Dania Beach, FL (Feb 12–15, 2027, registration coming soon), East Coast pop-up clinics, and a larger indoor summit in 2027.",
};

const upcoming = [
  {
    title: "FORGED Beach",
    detail: "Dania Beach, FL · Feb 12–15, 2027",
    desc: "The same elite development model, built for the sand. Lineup, schedule and pricing will be announced when registration opens.",
    tag: "Registration Coming Soon",
    href: "/events/fl-beach-volleyball",
    cta: "View Beach Details",
  },
  {
    title: "Pop-Up Clinics",
    detail: "East Coast · Dates & cities to be announced",
    desc: "Shorter FORGED clinics in cities up and down the East Coast, built around where athletes and coaches want them. Tell us where you'd like one.",
    tag: "Interest-Based",
    href: "/contact",
    cta: "Request a Clinic",
  },
  {
    title: "Next Indoor Summit",
    detail: "2027 · Details coming soon",
    desc: "A larger indoor volleyball summit is planned for 2027. Join the newsletter and you'll hear first.",
    tag: "2027",
    href: "#notify",
    cta: "Get Updates",
  },
];

export default function Events() {
  return (
    <>
      {/* HERO */}
      <section className="hero-anim min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,164,76,0.04) 0%, transparent 60%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          FORGED Events
        </p>
        <h1 className="font-display text-[clamp(56px,11vw,130px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          WHAT&rsquo;S
          <br />
          <span className="gold-gradient-text">NEXT.</span>
        </h1>
        <p className="font-serif italic text-[clamp(16px,2.5vw,22px)] text-light max-w-[640px] mx-auto relative z-[1] leading-[1.6]">
          The FORGED summit planned for Mesa, AZ (November 26&ndash;29, 2026) has been cancelled, and every
          registration has been refunded. Thank you to the athletes, coaches, clubs and families who stood
          behind it. Here is what&rsquo;s coming.
        </p>
      </section>

      <div className="gold-rule" />

      {/* WHAT'S COMING */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">Coming Up</p>
        <h2 className="font-display text-[clamp(42px,7vw,80px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
          THE NEXT
          <br />
          CHAPTER.
        </h2>

        <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 md:grid-cols-3">
          {upcoming.map((e) => (
            <FadeUp
              key={e.title}
              className="bg-dark p-9 border-t-2 border-transparent transition-colors hover:border-gold-m hover:bg-dark2 flex flex-col gap-4"
            >
              <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-gold-m">{e.tag}</span>
              <div className="font-display text-2xl tracking-[0.08em] text-gold">{e.title}</div>
              <div className="text-[11px] tracking-[0.15em] uppercase text-muted">{e.detail}</div>
              <p className="text-[13px] text-light leading-[1.6] flex-1">{e.desc}</p>
              <Link
                href={e.href}
                className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-6 py-3 hover:border-gold hover:text-[#F7EE78] transition-colors text-center"
              >
                {e.cta}
              </Link>
            </FadeUp>
          ))}
        </div>
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
          Join the newsletter and you&rsquo;ll hear about registration, clinics and the next summit before anyone else.
        </p>
        <WaitlistForm id="events-notify" label="Join our newsletter" />
      </FadeUp>
    </>
  );
}
