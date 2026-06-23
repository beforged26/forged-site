import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "About — FORGED",
  description:
    "FORGED is an elite athlete, coach, and expert development summit founded by Pri Piantadosi-Lima. Built different. By design.",
};

const pillars = [
  {
    num: "01",
    title: "Athlete Development",
    desc: "Physical performance, mental readiness, recruiting education, and the honest truth about what it takes to get to the next level.",
  },
  {
    num: "02",
    title: "Coach Development",
    desc: "A rare space where coaches can grow, connect, and find community. Because the people developing athletes need development too.",
  },
  {
    num: "03",
    title: "Access & Scholarships",
    desc: "No athlete should be turned away because of finances. Our founding Access Initiative removes that barrier from day one.",
  },
];

const stats = [
  { number: "120", label: "Athletes Expected" },
  { number: "4", label: "Day Immersive Summit" },
  { number: "2026", label: "Inaugural Year — Phoenix, AZ" },
  { number: "ALL", label: "Sports — Long-Term Vision" },
];

const differentiators = [
  {
    title: "We See What's Underneath",
    desc: "The fire that builds you. FORGED addresses the doubt, fear, and uncertainty every athlete carries but nobody talks about. We develop the person, not just the player.",
  },
  {
    title: "Coaches Are People Too",
    desc: "FORGED is the first development ecosystem that treats coaches as humans who also need community, growth, and support — not just certification hours.",
  },
  {
    title: "Built For The Long Term",
    desc: "Development that doesn't stop when you leave. It's the beginning of a lifelong network. Athletes, coaches, and families who find FORGED don't leave. The community compounds over time.",
  },
  {
    title: "Access Is Non-Negotiable",
    desc: "Our founding scholarship initiative ensures financial barriers don't determine who gets access to elite development. Partners make this possible from day one.",
  },
];

export default function About() {
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
          About FORGED
        </p>
        <h1 className="font-display text-[clamp(56px,11vw,130px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          BUILT DIFFERENT.
          <br />BY <span className="gold-gradient-text">DESIGN.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[660px] mx-auto relative z-[1] leading-[1.5]">
          The world teaches athletes how to compete. It teaches coaches how to
          win. FORGED exists to develop the people behind both — through elite
          coaching, expert mentorship, leadership development, and a community
          built to last a lifetime.
        </p>
      </section>

      <div className="gold-rule" />

      {/* WHO WE ARE */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">Who We Are</p>
        <h2 className="font-display text-[clamp(42px,7vw,80px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
          BUILT DIFFERENT.
          <br />
          BY DESIGN.
        </h2>
        <p className="font-serif italic text-[clamp(18px,2.5vw,22px)] text-light max-w-[760px] leading-[1.6] mb-14">
          Every part of FORGED is built around three commitments — to
          athletes, to coaches, and to access. Together, they form a
          development ecosystem that doesn&rsquo;t end when the summit does,
          and a community that grows stronger every year.
        </p>

        <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 md:grid-cols-3">
          {pillars.map((p) => (
            <FadeUp key={p.num} className="bg-dark p-9 border-t-2 border-transparent transition-colors hover:border-gold-m hover:bg-dark2">
              <div className="font-display text-5xl text-gold/[0.15] leading-none mb-3">{p.num}</div>
              <div className="font-display text-xl tracking-[0.1em] text-gold mb-2.5">{p.title}</div>
              <p className="text-[13px] text-light leading-[1.6]">{p.desc}</p>
            </FadeUp>
          ))}
        </div>
      </FadeUp>

      {/* THE OPPORTUNITY */}
      <div className="bg-dark border-y border-gold/10 py-24 px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto">
          <p className="section-eyebrow center justify-center">The Opportunity</p>
          <h2 className="font-display text-center text-[clamp(42px,7vw,80px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
            THE SUMMIT.
            <br />
            THE NUMBERS.
          </h2>
          <p className="font-serif italic text-[clamp(18px,2.5vw,22px)] text-light max-w-[760px] mx-auto text-center leading-[1.6] mb-14">
            FORGED launches its inaugural summit Thanksgiving weekend 2026 in
            Phoenix, Arizona — a 4-day immersive development experience for
            athletes, coaches, and performance professionals. This is year one
            of a long-term national ecosystem. Brands and families that join
            now become part of the founding story.
          </p>

          <div className="grid gap-10 text-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
            {stats.map((s) => (
              <FadeUp key={s.label}>
                <div className="font-display text-[clamp(40px,6vw,70px)] tracking-[0.04em] gold-gradient-text leading-none mb-2">
                  {s.number}
                </div>
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted">{s.label}</div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <p className="font-serif italic text-[clamp(14px,1.8vw,17px)] text-light text-center mt-10">
              Sport focus, year one: Indoor Volleyball — expanding to beach
              volleyball, pickleball, and additional sports in subsequent
              years.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* WHY FORGED */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">Why FORGED</p>
        <h2 className="font-display text-[clamp(42px,7vw,80px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
          WHAT MAKES US
          <br />
          DIFFERENT.
        </h2>

        <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 md:grid-cols-2">
          {differentiators.map((d) => (
            <FadeUp key={d.title} className="bg-dark p-9 border-t-2 border-transparent transition-colors hover:border-gold-m hover:bg-dark2">
              <div className="font-display text-xl tracking-[0.1em] text-gold mb-2.5">{d.title}</div>
              <p className="text-[13px] text-light leading-[1.6]">{d.desc}</p>
            </FadeUp>
          ))}
        </div>
      </FadeUp>

      {/* FOUNDER QUOTE */}
      <FadeUp
        className="px-6 md:px-10 py-24 text-center border-t border-gold/[0.08]"
        style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #111111 100%)" }}
      >
        <div className="font-serif text-[80px] text-gold-d leading-[0.5] mb-6">&ldquo;</div>
        <p className="font-serif italic text-[clamp(22px,3.5vw,38px)] text-cream max-w-[780px] mx-auto mb-6 leading-[1.45]">
          I spent years building my own support system from scratch — one coach,
          one mentor, one piece at a time. FORGED exists so no athlete or coach
          ever has to do that alone again.
        </p>
        <p className="text-[11px] tracking-[0.15em] uppercase text-gold-m max-w-[700px] mx-auto leading-[1.9]">
          Founded by Pri Piantadosi-Lima &nbsp;·&nbsp; Former Professional
          Athlete &nbsp;·&nbsp; Former Division I Head Coach &nbsp;·&nbsp; USAV
          Club Coach of the Year &nbsp;·&nbsp; USAV NTDP Coach
        </p>
      </FadeUp>

      <div className="gold-rule" />

      {/* BOTTOM CTA */}
      <div className="px-6 md:px-10 py-28 text-center bg-black">
        <FadeUp>
          <h2 className="font-display text-[clamp(48px,9vw,110px)] tracking-[0.04em] leading-[0.95] mb-5">
            JOIN THE
            <br />
            <span className="gold-gradient-text">MOVEMENT.</span>
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="text-sm text-muted tracking-[0.08em] mb-12 max-w-[560px] mx-auto">
            Whether you&rsquo;re an athlete, a coach, or a brand that believes
            in investing in people — there&rsquo;s a place for you at FORGED.
          </p>
        </FadeUp>
        <FadeUp className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/register"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-7 py-3.5 hover:bg-gold-m transition-colors"
          >
            Register
          </Link>
          <Link
            href="/partner"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-7 py-3.5 hover:border-gold hover:text-[#F7EE78] transition-colors"
          >
            Partner With Us
          </Link>
        </FadeUp>
      </div>
    </>
  );
}
