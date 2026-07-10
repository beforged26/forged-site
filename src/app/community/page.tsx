import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";
import CommunityEmailForm from "@/components/CommunityEmailForm";

export const metadata: Metadata = {
  title: "FORGED Community",
  description:
    "The FORGED Community is where the work continues after the summit ends. Athletes, coaches, and experts — connected year-round.",
};

const pillars = [
  {
    num: "01",
    title: "Year-Round Development",
    desc: "The summit is 4 days. The community is the other 361. Access to training resources, expert content, and accountability structures that keep you growing between events.",
  },
  {
    num: "02",
    title: "Athlete & Coach Network",
    desc: "A private space built for people who take this seriously. Connect with athletes across sports, find training partners, share film, and build relationships that last beyond a weekend.",
  },
  {
    num: "03",
    title: "Expert Access",
    desc: "FORGED coaches and experts stay connected to the community through exclusive content drops, Zoom sessions, and group calls — sharing what they know with athletes and coaches who are serious about growing.",
  },
  {
    num: "04",
    title: "Early Access & Discounts",
    desc: "Summit alumni and community members get first access to new events, priority registration, and alumni pricing. You put in the work — the rewards follow.",
  },
];

export default function Community() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          Coming Soon
        </p>
        <h1 className="font-display text-[clamp(52px,10vw,120px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          THE WORK
          <br />
          <span className="gold-gradient-text">DOESN'T STOP.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,2.8vw,24px)] text-light max-w-[640px] mx-auto relative z-[1] leading-[1.6] mb-10">
          The FORGED Community is where summit alumni and committed athletes stay
          connected, stay accountable, and keep growing — year-round, across all sports.
        </p>
        <a
          href="#notify"
          className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-4 hover:bg-gold-m transition-colors relative z-[1]"
        >
          Get Early Access
        </a>
      </section>

      <div className="gold-rule" />

      {/* PILLARS */}
      <FadeUp className="max-w-[1000px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">What It Is</p>
        <h2 className="font-display text-[clamp(38px,6vw,72px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
          BUILT FOR
          <br />
          WHAT COMES NEXT.
        </h2>

        <div className="flex flex-col gap-0">
          {pillars.map((p) => (
            <FadeUp key={p.num} className="flex gap-8 py-7 border-b border-gold/10 last:border-b-0">
              <div className="font-display text-[clamp(28px,4vw,48px)] tracking-[0.06em] text-gold/30 leading-none shrink-0 w-14">
                {p.num}
              </div>
              <div>
                <p className="font-display text-xl tracking-[0.08em] text-gold mb-2">{p.title}</p>
                <p className="text-[14px] text-light leading-[1.7]">{p.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </FadeUp>

      {/* WHO IT'S FOR */}
      <div className="bg-dark border-y border-gold/10 py-20 px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-3 gap-[2px] bg-gold/[0.08]">
          {[
            { title: "Summit Alumni", desc: "Automatically invited. The community is the next chapter of your FORGED experience." },
            { title: "Committed Athletes", desc: "You don't have to have attended a summit yet. If you're serious about your development, there's a place for you here." },
            { title: "Coaches", desc: "FORGED coaches are a community of their own. Peer development, shared resources, and a network that understands the work." },
          ].map((item) => (
            <FadeUp key={item.title} className="bg-dark p-8">
              <p className="font-display text-lg tracking-[0.08em] text-gold mb-3">{item.title}</p>
              <p className="text-[13px] text-light leading-[1.7]">{item.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* NOTIFY FORM */}
      <FadeUp className="max-w-[640px] mx-auto px-6 md:px-10 py-24 text-center">
        <div style={{ scrollMarginTop: "100px" }} id="notify" />
        <p className="section-eyebrow center justify-center">Early Access</p>
        <h2 className="font-display text-[clamp(38px,6vw,72px)] tracking-[0.04em] leading-[0.95] text-cream mb-4">
          BE FIRST IN.
        </h2>
        <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light leading-[1.6] mb-10">
          The community launches after the 2026 summit. Leave your email and you'll be
          the first to know — and the first through the door.
        </p>

        <CommunityEmailForm />

        <p className="text-[11px] text-muted mt-5 tracking-[0.05em]">
          Summit alumni get priority access. No spam.
        </p>
      </FadeUp>

      <div className="gold-rule" />

      {/* CTA */}
      <div className="px-6 md:px-10 py-20 text-center">
        <FadeUp>
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5">
            In the meantime
          </p>
          <h2 className="font-display text-[clamp(38px,6vw,72px)] tracking-[0.04em] leading-[0.95] text-cream mb-8">
            COME TO THE SUMMIT.
          </h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/register/athlete"
              className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-3.5 hover:bg-gold-m transition-colors"
            >
              Register as Athlete
            </Link>
            <Link
              href="/register/coach"
              className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-8 py-3.5 hover:border-gold transition-colors"
            >
              Register as Coach
            </Link>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
