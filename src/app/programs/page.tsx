import type { Metadata } from "next";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Founding Programs — FORGED",
  description:
    "The clubs and high schools standing with FORGED in year one. Mesa, AZ — November 26–29, 2026.",
};

// ── ADD PROGRAMS HERE ────────────────────────────────────────────────────────
// tier: "lead" (20+) | "featured" (12+) | "founding" (6+)
// logo: path under /public/programs (optional until the file is added)
// url: the program's website (optional)
type Program = {
  name: string;
  location: string;
  tier: "lead" | "featured" | "founding";
  logo?: string;
  url?: string;
};

const programs: Program[] = [
  {
    name: "Acadian Juniors Volleyball Club",
    location: "Breaux Bridge, Louisiana",
    tier: "founding",
    logo: "/programs/acadian-juniors.png",
    url: "https://acadianjuniors.com",
  },
  {
    name: "Westminster Christian Academy",
    location: "Opelousas, Louisiana",
    tier: "founding",
    logo: "/programs/westminster-christian-academy.png",
    url: "https://wcala.org",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const tierLabel = { lead: "Lead Program", featured: "Featured Program", founding: "Founding Club or School" } as const;
const order = ["lead", "featured", "founding"] as const;
const sorted = [...programs].sort((a, b) => order.indexOf(a.tier) - order.indexOf(b.tier));

const tiers = [
  { size: "6+", name: "Founding Club or School", perk: "Your logo and a link on this page." },
  { size: "12+", name: "Featured Program", perk: "A larger logo and an Instagram story feature." },
  { size: "20+", name: "Lead Program", perk: "The largest logo at the top of the wall and a dedicated Instagram post." },
];

export default function Programs() {
  return (
    <>
      <section className="hero-anim min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          Year One
        </p>
        <h1 className="font-display text-[clamp(52px,10vw,120px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          FOUNDING
          <br />
          <span className="gold-gradient-text">PROGRAMS.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[640px] mx-auto relative z-[1] leading-[1.5]">
          The clubs and high schools standing with FORGED in year one.
        </p>
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted mt-6 relative z-[1]">
          Mesa, AZ &nbsp;·&nbsp; Nov 26–29, 2026 &nbsp;·&nbsp; Indoor Volleyball
        </p>
      </section>

      <div className="gold-rule" />

      <FadeUp className="max-w-[1000px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow text-center justify-center">The Wall</p>
        <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-14 text-center">
          THE PROGRAMS
          <br />
          <span className="gold-gradient-text">BRINGING THEIR ATHLETES.</span>
        </h2>

        <div className="grid gap-[2px] bg-gold/[0.06] grid-cols-1 md:grid-cols-2">
          {sorted.map((p) => {
            const card = (
              <div className="bg-dark p-10 text-center hover:bg-dark2 transition-colors h-full flex flex-col items-center justify-center">
                {p.logo && (
                  <div className="bg-[#f5f0e6] px-8 py-5 mb-6">
                    <Image
                      src={p.logo}
                      alt={`${p.name} logo`}
                      width={246}
                      height={183}
                      className="h-28 w-auto object-contain"
                    />
                  </div>
                )}
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold-m mb-2">{tierLabel[p.tier]}</p>
                <div className="font-display text-[clamp(20px,2.4vw,26px)] tracking-[0.06em] text-cream mb-1">{p.name}</div>
                <p className="font-serif italic text-[14px] text-muted">{p.location}</p>
              </div>
            );
            return p.url ? (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="block">
                {card}
              </a>
            ) : (
              <div key={p.name}>{card}</div>
            );
          })}
          <div className="bg-dark p-10 text-center flex flex-col items-center justify-center border border-dashed border-gold/15">
            <div className="font-display text-[clamp(22px,3vw,34px)] tracking-[0.06em] text-gold/25 mb-3">YOUR PROGRAM HERE.</div>
            <a
              href="/clubs"
              className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-3.5 hover:bg-gold-m transition-colors"
            >
              Bring Your Program
            </a>
          </div>
        </div>
      </FadeUp>

      <div className="bg-dark border-y border-gold/10 py-20 px-6 md:px-10">
        <FadeUp className="max-w-[1000px] mx-auto">
          <p className="section-eyebrow">How you get on the wall</p>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] tracking-[0.04em] leading-[0.95] text-cream mb-10">
            BRING 6 OR MORE.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-gold/[0.08]">
            {tiers.map((t) => (
              <div key={t.name} className="bg-dark p-8">
                <div className="font-display text-[clamp(36px,5vw,52px)] gold-gradient-text leading-none mb-3">{t.size}</div>
                <div className="font-display text-lg tracking-[0.06em] text-cream mb-3">{t.name}</div>
                <p className="text-[13px] text-light leading-[1.7]">{t.perk}</p>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-muted mt-8 leading-[1.7]">
            Every athlete in a group of 6 or more pays $650 instead of $757. Your club or school does not pay or sign anyone up. Offer ends Nov 10.
          </p>
        </FadeUp>
      </div>
    </>
  );
}
