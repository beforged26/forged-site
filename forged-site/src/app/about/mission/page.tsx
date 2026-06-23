import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Mission — FORGED",
  description:
    "FORGED exists to develop athletes, coaches, and the people behind both — through elite programming, expert mentorship, and access that removes financial barriers.",
};

const pillars = [
  {
    num: "01",
    title: "Develop the Whole Person",
    body: "Sport develops skill. FORGED develops people. We address the mental performance, identity, nutrition, leadership, and community that most programs skip — because those are the things that actually determine long-term success.",
  },
  {
    num: "02",
    title: "Invest in Coaches",
    body: "Coaches give everything to their athletes and receive almost nothing in return. FORGED is the first development ecosystem that treats coaches as humans who also need community, growth, and support — not just certification hours.",
  },
  {
    num: "03",
    title: "Make Access Non-Negotiable",
    body: "The best young athletes in this country don't lack talent. They lack access. Our founding Access Initiative ensures financial barriers don't determine who gets elite development. Partners make this possible from day one.",
  },
  {
    num: "04",
    title: "Build Community That Lasts",
    body: "The relationships formed at FORGED don't end on Day 4. Athletes, coaches, and families who find FORGED become part of a community that compounds in value every year. The network grows. The support grows. The standard grows.",
  },
];

export default function Mission() {
  return (
    <>
      {/* HERO */}
      <section className="hero-anim min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          Our Mission
        </p>
        <h1 className="font-display text-[clamp(52px,10vw,120px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          WHY
          <br />
          <span className="gold-gradient-text">FORGED EXISTS.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[660px] mx-auto relative z-[1] leading-[1.5]">
          The world teaches athletes how to compete. It teaches coaches how to win. FORGED exists to develop the people behind both.
        </p>
      </section>

      <div className="gold-rule" />

      {/* MISSION STATEMENT */}
      <FadeUp className="max-w-[900px] mx-auto px-6 md:px-10 py-24 text-center">
        <p className="section-eyebrow center justify-center">Mission Statement</p>
        <p className="font-serif italic text-[clamp(22px,3.5vw,36px)] text-cream leading-[1.5] max-w-[780px] mx-auto">
          FORGED exists to develop athletes, coaches, and the people behind both — through elite programming, expert mentorship, and a community built to outlast any single event. We believe access to elite development should be determined by commitment, not finances.
        </p>
      </FadeUp>

      {/* PILLARS */}
      <div className="bg-dark border-y border-gold/10 py-24 px-6 md:px-10">
        <FadeUp className="max-w-[1100px] mx-auto">
          <p className="section-eyebrow">What We Stand For</p>
          <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
            FOUR
            <br />
            COMMITMENTS.
          </h2>
          <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 md:grid-cols-2">
            {pillars.map((p) => (
              <FadeUp key={p.num} className="bg-dark p-9 border-t-2 border-transparent hover:border-gold-m hover:bg-dark2 transition-colors">
                <div className="font-display text-5xl text-gold/[0.15] leading-none mb-3">{p.num}</div>
                <div className="font-display text-xl tracking-[0.1em] text-gold mb-3">{p.title}</div>
                <p className="text-[13px] text-light leading-[1.7]">{p.body}</p>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* ACCESS INITIATIVE */}
      <FadeUp className="max-w-[860px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">Access Initiative</p>
        <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-8">
          NO ATHLETE
          <br />
          <span className="gold-gradient-text">LEFT BEHIND.</span>
        </h2>
        <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light leading-[1.7] mb-8">
          From day one, a platform where sponsorship dollars go to actual scholarships. No athlete should be turned away from FORGED because of finances. Our founding partners make this possible — and every brand that joins FORGED becomes part of a mission that goes beyond sport.
        </p>
        <Link
          href="/partner"
          className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-7 py-3.5 hover:bg-gold-m transition-colors"
        >
          Become a Partner
        </Link>
      </FadeUp>
    </>
  );
}
