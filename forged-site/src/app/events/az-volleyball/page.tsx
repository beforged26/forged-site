import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AZ — Volleyball | FORGED",
  description:
    "FORGED inaugural summit — Phoenix, Arizona. November 26–29, 2026. Indoor Volleyball. 4 days of elite athlete and coach development.",
};

const schedule = [
  { day: "Day 1", date: "Nov 26", label: "Arrival & Orientation", desc: "Check-in, welcome session, team building, opening dinner." },
  { day: "Day 2", date: "Nov 27", label: "Performance & Mindset", desc: "Morning training, mental performance sessions, nutrition workshop, expert panels." },
  { day: "Day 3", date: "Nov 28", label: "Development & Access", desc: "Advanced skill sessions, recruiting education, coach development track, evening community gathering." },
  { day: "Day 4", date: "Nov 29", label: "Integration & Send-Off", desc: "Final training session, leadership workshop, closing ceremony, alumni network launch." },
];

export default function AZVolleyball() {
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
          Inaugural Event
        </p>
        <h1 className="font-display text-[clamp(52px,10vw,120px)] leading-[0.95] tracking-[0.04em] text-cream mb-4 relative z-[1]">
          ARIZONA
          <br />
          <span className="gold-gradient-text">VOLLEYBALL.</span>
        </h1>
        <p className="text-[11px] tracking-[0.25em] uppercase text-muted mb-8 relative z-[1]">
          Phoenix, AZ &nbsp;·&nbsp; Nov 26–29, 2026 &nbsp;·&nbsp; Indoor Volleyball
        </p>
        <p className="font-serif italic text-[clamp(16px,2.5vw,22px)] text-light max-w-[580px] mx-auto relative z-[1] leading-[1.6] mb-10">
          4 days. Elite coaches. World-class experts. The inaugural FORGED summit — and the beginning of something that expands across all sports.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap relative z-[1]">
          <Link href="/register/athlete" className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-7 py-3.5 hover:bg-gold-m transition-colors">
            Register as Athlete
          </Link>
          <Link href="/register/coach" className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-7 py-3.5 hover:border-gold transition-colors">
            Register as Coach
          </Link>
        </div>
      </section>

      <div className="gold-rule" />

      {/* QUICK STATS */}
      <div className="bg-dark border-y border-gold/10 py-16 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto grid gap-10 text-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
          {[
            { num: "120", label: "Athletes Expected" },
            { num: "4", label: "Day Immersive" },
            { num: "6+", label: "Expert Sessions" },
            { num: "2026", label: "Inaugural Year" },
          ].map((s) => (
            <FadeUp key={s.label}>
              <div className="font-display text-[clamp(40px,6vw,64px)] tracking-[0.04em] gold-gradient-text leading-none mb-2">{s.num}</div>
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted">{s.label}</div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* SCHEDULE */}
      <FadeUp className="max-w-[1000px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">Schedule Overview</p>
        <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
          FOUR DAYS.
          <br />
          ONE STANDARD.
        </h2>
        <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 md:grid-cols-2">
          {schedule.map((s) => (
            <FadeUp key={s.day} className="bg-dark p-8 border-t-2 border-transparent hover:border-gold-m hover:bg-dark2 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-display text-gold text-lg tracking-[0.1em]">{s.day}</span>
                <span className="text-[11px] text-muted tracking-[0.15em] uppercase">{s.date}</span>
              </div>
              <div className="font-display text-lg tracking-[0.08em] text-cream mb-2">{s.label}</div>
              <p className="text-[13px] text-light leading-[1.6]">{s.desc}</p>
            </FadeUp>
          ))}
        </div>
      </FadeUp>

      {/* LINEUP CTA */}
      <div className="bg-dark border-y border-gold/10 py-20 px-6 md:px-10 text-center">
        <FadeUp>
          <p className="section-eyebrow center justify-center">Who You&apos;ll Learn From</p>
          <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
            MEET THE
            <br />
            <span className="gold-gradient-text">LINEUP.</span>
          </h2>
          <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light max-w-[560px] mx-auto mb-10 leading-[1.6]">
            Elite coaches and world-class experts — all under one roof for 4 days. See who&apos;s joining FORGED Year 1.
          </p>
          <Link href="/events/az-volleyball/lineup" className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-3.5 hover:bg-gold-m transition-colors">
            View Full Lineup
          </Link>
        </FadeUp>
      </div>

      {/* BOTTOM CTA */}
      <div className="px-6 md:px-10 py-24 text-center">
        <FadeUp>
          <h2 className="font-display text-[clamp(42px,7vw,90px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
            SECURE YOUR
            <br />
            <span className="gold-gradient-text">SPOT.</span>
          </h2>
        </FadeUp>
        <FadeUp className="flex items-center justify-center gap-4 flex-wrap mt-8">
          <Link href="/register/athlete" className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-7 py-3.5 hover:bg-gold-m transition-colors">
            Athlete — Early Bird $757
          </Link>
          <Link href="/register/coach" className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-7 py-3.5 hover:border-gold transition-colors">
            Coach — $250
          </Link>
        </FadeUp>
      </div>
    </>
  );
}
