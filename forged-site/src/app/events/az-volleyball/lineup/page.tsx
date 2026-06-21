import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lineup — AZ Volleyball | FORGED",
  description:
    "Meet the coaches and experts joining FORGED 2026 in Phoenix, AZ. Elite volleyball coaches and world-class performance experts.",
};

// ── ADD COACHES HERE ──────────────────────────────────────────────────────────
const coaches = [
  {
    name: "Coach Name",
    role: "Head Coach — [School/Club]",
    bio: "Short bio about this coach — their background, accolades, and what they bring to FORGED.",
    website: "",
  },
  // Duplicate and fill in for each coach
];

// ── ADD EXPERTS HERE ──────────────────────────────────────────────────────────
const experts = [
  {
    name: "Priscilla Tallman",
    role: "Mental Performance Coach",
    bio: "Specialist in mental performance, pressure management, and building the mindset that separates good from elite. Priscilla works with athletes to develop the mental tools that drive sustainable high performance.",
    website: "",
  },
  {
    name: "Sara Putt",
    role: "Sport Nutritionist — Fueling for Performance",
    bio: "Expert in athlete nutrition, fueling strategies, recovery, and long-term performance. Sara helps athletes understand how to fuel their bodies to perform at their highest level — and sustain it.",
    website: "",
  },
  {
    name: "Kamila Tan",
    role: "Body Image Mentor — Athlete Identity",
    bio: "Specialist in athlete identity, body image, and the mental side of physical performance. Kamila guides athletes through the often unspoken challenges of how they see and relate to their own bodies.",
    website: "",
  },
  {
    name: "Karlee Owens",
    role: "Primal Movement Coach — Body Assessment",
    bio: "Movement specialist focused on assessing and optimizing how athletes move — reducing injury risk and unlocking performance potential from the ground up.",
    website: "",
  },
  {
    name: "Falyn Fonoimoana",
    role: "Social Media Expert — Personal Brand & Recruiting",
    bio: "Helping athletes build their digital presence, understand recruiting optics, and use social media as a competitive advantage — because how you show up online matters as much as how you show up on the court.",
    website: "",
  },
  {
    name: "Tree",
    role: "Culture Coach — Leadership & Team Culture",
    bio: "Expert in building high-performance team cultures — for athletes and coaches alike. Tree works with teams to develop the leadership, trust, and accountability that separate good programs from great ones.",
    website: "",
  },
  {
    name: "Benjamin",
    role: "FirstBeat — Heart Rate & Performance Monitoring",
    bio: "Using FirstBeat technology to give athletes real-time insight into their physiological performance, recovery, and readiness. Data-driven development that shows you exactly where you are and how to get better.",
    website: "",
  },
  {
    name: "Mike",
    role: "Ver — AI Eye Tracking & Performance",
    bio: "Leveraging cutting-edge AI eye-tracking technology to personalize athletic development. Ver's system analyzes visual patterns to enhance on-court decision-making, reaction time, and performance.",
    website: "",
  },
  {
    name: "Agility Coach",
    role: "Speed & Footwork — Coming Soon",
    bio: "Elite-level speed and agility training with a focus on volleyball-specific movement patterns. Confirmation coming soon.",
    website: "",
  },
  {
    name: "Olympic Performance Coach",
    role: "Olympic-Level Performance — Coming Soon",
    bio: "An Olympic-level coach bringing elite performance frameworks to FORGED athletes. Confirmation coming soon.",
    website: "",
  },
];

function PersonCard({ person }: { person: typeof coaches[0] }) {
  return (
    <FadeUp className="bg-dark p-8 border-t-2 border-transparent hover:border-gold-m hover:bg-dark2 transition-colors flex flex-col gap-5">
      {/* Headshot */}
      <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
        <span className="font-display text-2xl text-gold/40">{person.name.charAt(0)}</span>
      </div>
      <div className="flex-1">
        <div className="font-display text-xl tracking-[0.08em] text-cream mb-1">{person.name}</div>
        <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-m mb-3">{person.role}</div>
        <p className="text-[13px] text-light leading-[1.6]">{person.bio}</p>
      </div>
      {person.website && (
        <a href={person.website} target="_blank" rel="noopener noreferrer" className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gold hover:text-gold-m transition-colors">
          Website →
        </a>
      )}
    </FadeUp>
  );
}

export default function Lineup() {
  return (
    <>
      {/* HERO */}
      <section className="hero-anim min-h-[55vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          AZ — Volleyball &nbsp;·&nbsp; Phoenix, Nov 26–29, 2026
        </p>
        <h1 className="font-display text-[clamp(52px,10vw,120px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          THE
          <br />
          <span className="gold-gradient-text">LINEUP.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[580px] mx-auto relative z-[1] leading-[1.5]">
          Elite coaches. World-class experts. All under one roof.
        </p>
      </section>

      <div className="gold-rule" />

      {/* COACHES */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">Coaches</p>
        <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
          WHO YOU&apos;LL
          <br />
          TRAIN WITH.
        </h2>
        <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {coaches.map((c) => <PersonCard key={c.name} person={c} />)}
        </div>
      </FadeUp>

      <div className="gold-rule" />

      {/* EXPERTS */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">Experts</p>
        <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
          WHO YOU&apos;LL
          <br />
          LEARN FROM.
        </h2>
        <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((e) => <PersonCard key={e.role} person={e} />)}
        </div>
      </FadeUp>

      {/* CTA */}
      <div className="bg-dark border-t border-gold/10 py-20 px-6 md:px-10 text-center">
        <FadeUp>
          <p className="font-serif italic text-[clamp(18px,2.5vw,26px)] text-light max-w-[580px] mx-auto mb-10 leading-[1.6]">
            Ready to learn from the best? Secure your spot before early bird pricing closes.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/register/athlete" className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-7 py-3.5 hover:bg-gold-m transition-colors">
              Athlete — Early Bird $757
            </Link>
            <Link href="/register/coach" className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-7 py-3.5 hover:border-gold transition-colors">
              Coach — $250
            </Link>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
