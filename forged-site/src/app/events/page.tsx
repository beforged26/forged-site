import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Events — FORGED",
  description:
    "FORGED 2026 — the inaugural elite athlete and coach development summit. Phoenix, AZ, November 26–29, 2026. Indoor Volleyball, expanding to all sports.",
};

const schedule = [
  {
    day: "Day 1",
    title: "Arrival & Foundations",
    desc: "Check-in, welcome session, and baseline assessments. Athletes and coaches meet their pods and set personal development goals for the summit.",
  },
  {
    day: "Day 2",
    title: "Elite Performance & Mental Game",
    desc: "Sport-specific training blocks led by expert coaches, paired with sports psychology and mindset sessions woven directly into the day.",
  },
  {
    day: "Day 3",
    title: "Wellness & Mentorship",
    desc: "Sports nutrition, body image, and athlete identity workshops, plus structured mentorship pairings between athletes, coaches, and performance experts.",
  },
  {
    day: "Day 4",
    title: "Showcase & Send-Off",
    desc: "Final training showcase, recognition ceremony, and the start of a year-round community that doesn't end when the summit does.",
  },
];

const expansion = [
  { stat: "120", label: "Athletes — Year One (2026)" },
  { stat: "600+", label: "Athletes — Year Three Target" },
  { stat: "Multi-City", label: "Expansion — Year Five Vision" },
];

const sports = [
  {
    title: "Indoor Volleyball",
    desc: "The sport focus for the inaugural 2026 summit in Phoenix, AZ. Ages 13–23.",
    tag: "2026 — Year One",
  },
  {
    title: "Beach Volleyball",
    desc: "Expanding the FORGED model to beach volleyball athletes and coaches in subsequent years.",
    tag: "Coming Soon",
  },
  {
    title: "Pickleball",
    desc: "Bringing the FORGED development standard to one of the fastest-growing sports in the country.",
    tag: "Coming Soon",
  },
  {
    title: "All Sports",
    desc: "The long-term vision: a development ecosystem for athletes, coaches, and experts across every sport.",
    tag: "Long-Term Vision",
  },
];

export default function Events() {
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
          The Inaugural Summit
        </p>
        <h1 className="font-display text-[clamp(56px,11vw,130px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          PHOENIX, AZ
          <br />
          <span className="gold-gradient-text">NOV 26–29, 2026.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[640px] mx-auto relative z-[1] leading-[1.5] mb-10">
          A 4-day immersive development experience for athletes, coaches,
          and performance professionals. Sport focus, year one: Indoor
          Volleyball.
        </p>
        <FadeUp className="relative z-[1]">
          <Link
            href="/register"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-7 py-3.5 hover:bg-gold-m transition-colors"
          >
            Register
          </Link>
        </FadeUp>
      </section>

      <div className="gold-rule" />

      {/* SCHEDULE */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">The Schedule</p>
        <h2 className="font-display text-[clamp(42px,7vw,80px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
          FOUR DAYS.
          <br />
          ONE STANDARD.
        </h2>
        <p className="font-serif italic text-[clamp(18px,2.5vw,22px)] text-light max-w-[640px] leading-[1.6] mb-14">
          Every day is intentional — built around elite performance, mental
          performance, wellness, and mentorship.
        </p>

        <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 md:grid-cols-2">
          {schedule.map((s) => (
            <FadeUp key={s.day} className="bg-dark p-9 border-t-2 border-transparent transition-colors hover:border-gold-m hover:bg-dark2">
              <div className="font-display text-2xl tracking-[0.1em] text-gold-m mb-1">{s.day}</div>
              <div className="font-display text-xl tracking-[0.1em] text-gold mb-2.5">{s.title}</div>
              <p className="text-[13px] text-light leading-[1.6]">{s.desc}</p>
            </FadeUp>
          ))}
        </div>
        <p className="text-[12px] text-muted text-center mt-8 tracking-[0.05em]">
          Full hour-by-hour schedule will be shared with registered
          athletes, coaches, and families closer to the event.
        </p>
      </FadeUp>

      {/* SPORT FOCUS / EXPANSION */}
      <div className="bg-dark border-y border-gold/10 py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="section-eyebrow center justify-center">Sport Focus &amp; Expansion</p>
          <h2 className="font-display text-center text-[clamp(42px,7vw,80px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
            ONE SPORT FIRST.
            <br />
            ALL SPORTS NEXT.
          </h2>
          <p className="font-serif italic text-[clamp(18px,2.5vw,22px)] text-light max-w-[640px] mx-auto text-center leading-[1.6] mb-14">
            FORGED launches with Indoor Volleyball in 2026 — and the model is
            built to expand.
          </p>

          <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 md:grid-cols-2 mb-16">
            {sports.map((s) => (
              <FadeUp key={s.title} className="bg-black p-9 border-t-2 border-transparent transition-colors hover:border-gold-m">
                <div className="font-display text-xl tracking-[0.1em] text-gold mb-2.5">{s.title}</div>
                <p className="text-[13px] text-light leading-[1.6] mb-3">{s.desc}</p>
                <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-gold-m">{s.tag}</span>
              </FadeUp>
            ))}
          </div>

          <div className="grid gap-10 text-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
            {expansion.map((e) => (
              <FadeUp key={e.label}>
                <div className="font-display text-[clamp(36px,5vw,60px)] tracking-[0.04em] gold-gradient-text leading-none mb-2">
                  {e.stat}
                </div>
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted">{e.label}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* LOCATION */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24 text-center">
        <p className="section-eyebrow center justify-center">Location</p>
        <h2 className="font-display text-[clamp(42px,7vw,80px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
          PHOENIX,
          <br />
          ARIZONA.
        </h2>
        <p className="font-serif italic text-[clamp(18px,2.5vw,22px)] text-light max-w-[640px] mx-auto leading-[1.6]">
          Thanksgiving weekend, 2026. Exact venue details, travel
          recommendations, and lodging information will be shared directly
          with registered athletes, coaches, and families.
        </p>
      </FadeUp>

      <div className="gold-rule" />

      {/* BOTTOM CTA */}
      <div className="px-6 md:px-10 py-28 text-center bg-black">
        <FadeUp>
          <h2 className="font-display text-[clamp(48px,9vw,110px)] tracking-[0.04em] leading-[0.95] mb-5">
            SAVE YOUR
            <br />
            <span className="gold-gradient-text">SPOT.</span>
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="text-sm text-muted tracking-[0.08em] mb-12 max-w-[560px] mx-auto">
            Spots for the inaugural FORGED summit are limited. Register now to
            reserve your place.
          </p>
        </FadeUp>
        <FadeUp>
          <Link
            href="/register"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-7 py-3.5 hover:bg-gold-m transition-colors"
          >
            Register
          </Link>
        </FadeUp>
      </div>
    </>
  );
}
