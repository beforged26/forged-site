import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";
import CommunityEmailForm from "@/components/CommunityEmailForm";

export const metadata: Metadata = {
  title: "FORGED Community",
  description:
    "The FORGED Community is where the work continues after the summit ends. Athletes, coaches, and experts — connected year-round.",
};

const athletePillars = [
  {
    num: "01",
    title: "Year-Round Development",
    desc: "The summit is 4 days. The community is the other 361. Training resources, expert content, and accountability structures that keep you growing between events.",
  },
  {
    num: "02",
    title: "Athlete Network",
    desc: "A private space built for athletes who take this seriously. Connect across sports, find training partners, share film, and build relationships that last beyond a weekend.",
  },
  {
    num: "03",
    title: "Expert Content Drops",
    desc: "FORGED coaches and experts share exclusive content, resources, and insights inside the community — material you won't find anywhere else.",
  },
  {
    num: "04",
    title: "Early Access & Alumni Pricing",
    desc: "Summit alumni get first access to new events, priority registration, and alumni pricing. You put in the work — the rewards follow.",
  },
];

const coachPillars = [
  {
    num: "01",
    title: "Sport-Specific Groups",
    desc: "Connect with coaches in your sport. Share film, talk strategy, and build the kind of peer relationships that make you better at your craft.",
  },
  {
    num: "02",
    title: "Women's Spaces",
    desc: "Dedicated groups for women in coaching — where the conversations go deeper and the support is built around shared experience.",
  },
  {
    num: "03",
    title: "Expert Zoom Sessions",
    desc: "Live calls and Q&As with FORGED coaches and experts. Not a lecture — a room where coaches actually talk to each other.",
  },
  {
    num: "04",
    title: "The Human Side",
    desc: "Burnout, identity, sacrifice, purpose — the parts of coaching nobody puts in a job description. This is a community where that conversation is welcome.",
  },
];

const podcasts = [
  {
    tag: "The Sessions",
    title: "Where Coaches and Experts Talk.",
    desc: "Each episode of The Sessions brings coaches and experts together around a specific subject — technique, mental performance, recruiting, team culture, athlete development, and more. These aren't surface-level conversations. They're the kind that happen when serious people stop performing and start actually talking. We also go inside the summit itself: success stories from FORGED alumni, breakthroughs on the court, athletes who showed up one way and left another. If you're committed to development — yours or the athletes you serve — The Sessions is the room you want to be in.",
  },
  {
    tag: "Coach Unscripted",
    title: "The Human Behind the Whistle.",
    desc: "Coaching is more than drills, film sessions, and game plans. It's relationships that keep you up at night. It's doubting yourself in the middle of a season. It's giving everything to a group of athletes and wondering if it's enough. Nobody talks about that part — and Coach Unscripted exists because they should. Raw, honest conversations with coaches about what it actually takes, what it costs, what keeps them coming back, and who they are when the whistle isn't around their neck. Every coach carries more than their athletes know. This is where we say that out loud.",
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
          The FORGED Community is where athletes stay connected, stay accountable,
          and keep growing — and where coaches finally have a space built for them.
          Year-round. Across all sports.
        </p>
        <a
          href="#notify"
          className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-4 hover:bg-gold-m transition-colors relative z-[1]"
        >
          Get Early Access
        </a>
      </section>

      <div className="gold-rule" />

      {/* ATHLETES BANNER */}
      <div className="border-b border-gold/20 px-6 md:px-10 py-10 flex items-center gap-6">
        <div className="w-1.5 h-16 bg-gold shrink-0" />
        <div>
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-1">Section 01</p>
          <p className="font-display text-[clamp(32px,6vw,72px)] tracking-[0.06em] leading-none text-cream">FOR ATHLETES</p>
        </div>
      </div>

      {/* ATHLETES */}
      <FadeUp className="max-w-[1000px] mx-auto px-6 md:px-10 py-24">
        <h2 className="font-display text-[clamp(38px,6vw,72px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
          BUILT FOR
          <br />
          WHAT COMES NEXT.
        </h2>

        <div className="flex flex-col gap-0">
          {athletePillars.map((p) => (
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

      {/* COACHES BANNER */}
      <div className="bg-dark border-y border-gold/20 px-6 md:px-10 py-10 flex items-center gap-6">
        <div className="w-1.5 h-16 bg-gold shrink-0" />
        <div>
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-1">Section 02</p>
          <p className="font-display text-[clamp(32px,6vw,72px)] tracking-[0.06em] leading-none text-cream">FOR COACHES</p>
        </div>
      </div>

      {/* COACHES */}
      <div className="bg-dark border-b border-gold/10 py-24 px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeUp>
            <p className="section-eyebrow">For Coaches</p>
            <h2 className="font-display text-[clamp(38px,6vw,72px)] tracking-[0.04em] leading-[0.95] text-cream mb-6">
              YOUR OWN
              <br />
              COMMUNITY.
            </h2>
            <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light max-w-[640px] leading-[1.6] mb-14">
              Coaches pour everything into their athletes. The FORGED Coaches Community
              is where someone pours into them. Sport-specific groups, women's spaces,
              live expert calls, and honest conversations about what coaching actually
              costs — and what makes it worth it.
            </p>
          </FadeUp>

          <div className="flex flex-col gap-0 mb-16">
            {coachPillars.map((p) => (
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

          {/* COACH.beforged.co teaser */}
          <FadeUp className="border border-gold/30 bg-[#0D0D0D] p-8 md:p-12">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-4">
              Coming Soon
            </p>
            <p className="font-display text-[clamp(28px,4vw,52px)] tracking-[0.04em] leading-[0.95] text-cream mb-4">
              COACH.BEFORGED.CO
            </p>
            <p className="font-serif italic text-[clamp(15px,2vw,19px)] text-light max-w-[560px] leading-[1.6] mb-0">
              A dedicated home for the coaching community. Groups for every sport,
              women-only spaces, expert access, and a place where coaches can be
              coaches — not just the person in charge. Built specifically for the people
              who build athletes.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* PODCASTS */}
      <FadeUp className="max-w-[1000px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">FORGED Podcasts</p>
        <h2 className="font-display text-[clamp(38px,6vw,72px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
          THE
          <br />
          CONVERSATION.
        </h2>

        <div className="flex flex-col gap-[2px] bg-gold/[0.06]">
          {podcasts.map((pod) => (
            <FadeUp key={pod.tag} className="bg-[#0a0a0a] p-8 md:p-12">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-m mb-3">
                {pod.tag}
              </p>
              <p className="font-display text-[clamp(22px,3vw,36px)] tracking-[0.04em] leading-[1] text-cream mb-5">
                {pod.title}
              </p>
              <p className="text-[14px] text-light leading-[1.8] max-w-[680px]">
                {pod.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </FadeUp>

      <div className="gold-rule" />

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
          Summit alumni get free access for the first year — sign up above to claim it. No spam.
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
