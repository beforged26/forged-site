import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PartnerForm from "@/components/PartnerForm";

export const metadata: Metadata = {
  title: "Partner With Us — FORGED",
  description:
    "Partner with FORGED — an elite athlete, coach, and expert development summit. First event: Phoenix, AZ, November 26–29, 2026. Founding partner sponsorship tiers from $2,500 to $250,000+.",
};

const audiences = [
  {
    title: "Athletes",
    desc: "High school athletes pursuing college opportunities and pre-professional players seeking their next level. Ages 13–23 indoor, 13–28 beach. Motivated, coachable, hungry for real growth.",
    tag: "Highly Engaged",
  },
  {
    title: "Parents",
    desc: "Decision-makers and check-writers who want proof their investment matters — looking for a community that sees their child, not just another transaction.",
    tag: "High-Intent Buyers",
  },
  {
    title: "Coaches",
    desc: "Youth, club, high school, and college coaches hungry for connection, growth, and a community that understands the weight of the job.",
    tag: "Influencers & Leaders",
  },
  {
    title: "Experts",
    desc: "Sports psychologists, culture coaches, nutritionists, body image coaches, strength & conditioning specialists, and more — with established, trusted audiences.",
    tag: "Trusted Voices",
  },
];

const tiers = [
  {
    tier: "Community",
    amount: "$2,500",
    items: [
      "Logo on event materials",
      "Website logo placement",
      "Social media mention (×2)",
      "Post-event sponsor recap",
      "Newsletter recognition",
    ],
  },
  {
    tier: "Bronze",
    amount: "$5,000",
    everything: "Everything in Community, plus:",
    items: [
      "On-site signage",
      "Social media features (×4)",
      "Product placement opportunity",
      "Named scholarship contribution",
    ],
  },
  {
    tier: "Silver",
    amount: "$10,000",
    everything: "Everything in Bronze, plus:",
    items: [
      "Logo on athlete gear",
      "Video feature content",
      "Dedicated social campaign",
      "1 scholarship naming right",
      "Year-round community visibility",
    ],
  },
  {
    tier: "Gold",
    amount: "$25,000",
    everything: "Everything in Silver, plus:",
    items: [
      "Brand moment / speaking opportunity",
      "Co-branded content series",
      "Multiple scholarship naming rights",
      "Exclusive product category",
      "Executive access to founder",
    ],
  },
  {
    tier: "Presenting",
    amount: "$50,000",
    everything: "Everything in Gold, plus:",
    items: [
      "Premier naming rights — summit session/stage",
      "Full on-site brand takeover opportunity",
      "Exclusive athlete activation access",
      "Multi-year commitment option",
      "First right of refusal — future summits",
    ],
    featured: true,
    badge: "Limited Spots",
  },
  {
    tier: "Legacy",
    amount: "$100,000",
    everything: "Everything in Presenting, plus:",
    items: [
      "Co-presenting summit title rights",
      "Named in founding story — permanently",
      "Full scholarship program naming rights",
      "Custom long-term partnership structure",
      "Annual strategic review with founder",
    ],
  },
  {
    tier: "Transformational",
    amount: "$250,000",
    amountSuffix: "+",
    everything: "Everything in Legacy, plus:",
    items: [
      "Co-founder brand positioning",
      "National expansion partnership rights",
      "Equity-level relationship with FORGED",
      "Board advisory access",
      "Fully custom partnership — built around you",
    ],
    badge: "By Invitation",
  },
];

const benefits = [
  {
    title: "Sponsor-Only Post-Event Recap",
    desc: "A curated visual document showing athlete stories, community moments, and the direct impact your investment created. Not a report — a story.",
  },
  {
    title: "Logo on Athlete Gear",
    desc: "Your brand worn by athletes on the court, in content, and beyond the summit. Lasting visibility that travels with your audience.",
  },
  {
    title: "On-Site Brand Presence",
    desc: "Signage, activation opportunities, and brand moments inside a high-energy, purpose-driven environment that athletes, coaches, and families remember.",
  },
  {
    title: "Community Access",
    desc: "Year-round visibility inside the FORGED athlete and coach community — not just a 4-day event. Your brand stays present between summits.",
  },
  {
    title: "Scholarship Naming Rights",
    desc: "Directly fund athlete access. Your brand becomes synonymous with opportunity — the kind of association money rarely buys.",
  },
  {
    title: "Content & Media Features",
    desc: "Video features, social campaigns, newsletter placements, and co-branded content that extends your reach into a highly engaged, purpose-driven audience.",
  },
];

const businessStats = [
  { number: "~300", label: "Direct Touchpoints / Event" },
  { number: "96K+", label: "Social Impressions / Activation" },
  { number: "$10K+", label: "Avg. Family Annual Sport Spend" },
];

const businessReasons = [
  {
    title: "Category Exclusivity",
    desc: "One brand per category. If you are the nutrition partner, no other nutrition brand is in the room. Your competition is not here.",
  },
  {
    title: "Compounding Reach",
    desc: "120 athletes year one → 600+ year three → multi-city year five. Founding partners grow with the brand at entry-level cost.",
  },
  {
    title: "Year-Round Visibility",
    desc: "Your brand lives in the FORGED community between summits — not just during 4 days. Ongoing presence, ongoing value.",
  },
  {
    title: "Founding Partner Pricing",
    desc: "Year 1 rates are the lowest FORGED will ever offer. As the audience grows, so does the value — your rate does not.",
  },
  {
    title: "Post-Event Impact Recap",
    desc: "After every summit, sponsors receive a curated document showing exactly what their investment built — faces, stories, outcomes.",
  },
  {
    title: "CSR & ESG Alignment",
    desc: "Scholarship naming rights give your brand a direct, reportable social impact story — the kind that matters internally and publicly.",
  },
];

export default function Partner() {
  return (
    <>
      {/* HERO */}
      <section className="hero-anim min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,164,76,0.04) 0%, transparent 60%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          Partnership &amp; Sponsorship Opportunities
        </p>
        <h1 className="font-display text-[clamp(56px,11vw,130px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          BUILT DIFFERENT.
          <br />BY <span className="gold-gradient-text">DESIGN.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[660px] mx-auto relative z-[1] leading-[1.5] mb-10">
          The world teaches athletes how to compete. It teaches coaches how to
          win. FORGED exists to develop the people behind both — through elite
          coaching, expert mentorship, leadership development, and a community
          built to last a lifetime.
        </p>

        <div className="mb-10 relative z-[1]">
          <div className="flex items-center justify-center gap-6 flex-wrap mb-3.5">
            <span className="text-[11px] tracking-[0.22em] uppercase text-muted">
              First Event — Phoenix, AZ
            </span>
            <span className="w-[3px] h-[3px] bg-gold-d rounded-full" />
            <span className="text-[11px] tracking-[0.22em] uppercase text-muted">
              Nov 26–29, 2026
            </span>
            <span className="w-[3px] h-[3px] bg-gold-d rounded-full" />
            <span className="text-[11px] tracking-[0.22em] uppercase text-muted">
              Indoor Volleyball
            </span>
          </div>
          <p className="font-serif italic text-[clamp(14px,1.8vw,17px)] text-light text-center">
            FORGED is expanding across all sports — this is just the beginning.
          </p>
        </div>

        <FadeUp className="flex items-center justify-center gap-4 flex-wrap relative z-[1]">
          <a
            href="#partner"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-4 hover:bg-gold-m transition-colors"
          >
            Become a Founding Partner
          </a>
          <a
            href="#tiers"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-8 py-4 hover:border-gold hover:text-[#F7EE78] transition-colors"
          >
            View Partnership Tiers
          </a>
        </FadeUp>
      </section>

      <div className="gold-rule" />

      {/* WHO WE REACH */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">Who We Reach</p>
        <h2 className="font-display text-[clamp(42px,7vw,80px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
          YOUR BRAND,
          <br />
          THEIR WORLD.
        </h2>

        <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <FadeUp key={a.title} className="bg-dark p-9 border-t-2 border-transparent transition-colors hover:border-gold-m hover:bg-dark2">
              <div className="font-display text-xl tracking-[0.1em] text-gold mb-2.5">{a.title}</div>
              <p className="text-[13px] text-light leading-[1.6] mb-3">{a.desc}</p>
              <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-gold-m">{a.tag}</span>
            </FadeUp>
          ))}
        </div>
      </FadeUp>

      {/* PARTNERSHIP TIERS */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <div id="tiers" style={{ scrollMarginTop: "100px" }} />
        <p className="section-eyebrow">Partnership Tiers</p>
        <h2 className="font-display text-[clamp(42px,7vw,80px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
          FIND YOUR
          <br />
          LEVEL.
        </h2>
        <p className="font-serif italic text-[clamp(18px,2.5vw,22px)] text-light max-w-[760px] leading-[1.6] mb-14">
          Year-one rates are the lowest FORGED will ever offer. As the
          audience grows, so does the value — your rate doesn&rsquo;t.
        </p>

        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
          {tiers.map((t) => (
            <FadeUp
              key={t.tier}
              className={`relative flex flex-col p-7 border transition-all hover:-translate-y-1 ${
                t.featured
                  ? "border-gold-m bg-[linear-gradient(180deg,rgba(201,164,76,0.08),#111111_60%)]"
                  : "border-gold/10 bg-dark hover:border-gold-m"
              }`}
            >
              {t.badge && (
                <span className="absolute -top-px -right-px bg-gold text-black text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1.5">
                  {t.badge}
                </span>
              )}
              <div className="font-display text-2xl tracking-[0.1em] text-gold mb-2">{t.tier}</div>
              <div className="font-display text-[clamp(28px,3.2vw,38px)] tracking-[0.04em] text-cream mb-4">
                {t.amount}
                {t.amountSuffix && <span className="font-body text-[13px] text-muted font-normal tracking-normal">{t.amountSuffix}</span>}
              </div>
              <p className="text-xs text-light leading-[1.8] flex-1">
                {t.everything && <span className="text-gold-m italic block mb-1.5">{t.everything}</span>}
                {t.items.map((item, idx) => (
                  <span key={idx} className="block">
                    {item}
                  </span>
                ))}
              </p>
            </FadeUp>
          ))}
        </div>

        <p className="text-center text-xs text-muted mt-9 tracking-[0.05em]">
          <span className="text-gold-m">All tiers include:</span> Post-event
          sponsor recap · Digital brand presence · FORGED founding partner
          recognition · Access to athlete + coach community
        </p>
      </FadeUp>

      {/* WHAT YOU GET */}
      <div className="bg-dark border-y border-gold/10 py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="section-eyebrow center justify-center">What You Get</p>
          <h2 className="font-display text-center text-[clamp(42px,7vw,80px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
            BEYOND THE
            <br />
            LOGO PLACEMENT.
          </h2>
          <p className="font-serif italic text-[clamp(18px,2.5vw,22px)] text-light max-w-[760px] mx-auto text-center leading-[1.6] mb-14">
            FORGED sponsors don&rsquo;t just get visibility. They get proof.
            Every partner receives a post-event sponsor recap — a visual,
            story-driven document showing exactly what their investment
            built.
          </p>

          <div className="grid gap-[2px] bg-gold/10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <FadeUp key={b.title} className="bg-black p-9 border-t-2 border-transparent transition-colors hover:border-gold-m">
                <div className="font-display text-xl tracking-[0.1em] text-gold mb-2.5">{b.title}</div>
                <p className="text-[13px] text-light leading-[1.6]">{b.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* THE BUSINESS CASE */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">The Business Case</p>
        <h2 className="font-display text-[clamp(42px,7vw,80px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
          WHY THIS IS A
          <br />
          SMART INVESTMENT.
        </h2>
        <p className="font-serif italic text-[clamp(18px,2.5vw,22px)] text-light max-w-[760px] leading-[1.6] mb-14">
          FORGED reaches a concentrated audience of high-intent sport families
          — not the general public. Every person in the room is an active
          investor in athletic development.
        </p>

        <div className="grid gap-10 text-center mb-14" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
          {businessStats.map((s) => (
            <FadeUp key={s.label}>
              <div className="font-display text-[clamp(40px,6vw,70px)] tracking-[0.04em] gold-gradient-text leading-none mb-2">
                {s.number}
              </div>
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted">{s.label}</div>
            </FadeUp>
          ))}
        </div>

        <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {businessReasons.map((r) => (
            <FadeUp key={r.title} className="bg-dark p-9 border-t-2 border-transparent transition-colors hover:border-gold-m hover:bg-dark2">
              <div className="font-display text-xl tracking-[0.1em] text-gold mb-2.5">{r.title}</div>
              <p className="text-[13px] text-light leading-[1.6]">{r.desc}</p>
            </FadeUp>
          ))}
        </div>
      </FadeUp>

      <div className="gold-rule" />

      {/* BOTTOM CTA / PARTNER FORM */}
      <div className="px-6 md:px-10 py-28 text-center bg-black" id="partner" style={{ scrollMarginTop: "100px" }}>
        <FadeUp>
          <h2 className="font-display text-[clamp(40px,8vw,100px)] tracking-[0.04em] leading-[1.05] mb-5">
            YOUR BRAND DIDN&rsquo;T JUST
            <br />
            SPONSOR AN EVENT.
            <br />
            <span className="gold-gradient-text">
              YOU HELPED BUILD
              <br />
              SOMEONE&rsquo;S FUTURE.
            </span>
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="text-sm text-muted tracking-[0.04em] mb-12 max-w-[640px] mx-auto">
            FORGED is building the most trusted athlete and coach development
            ecosystem in America. We&rsquo;re looking for partners who share
            our belief that investing in people is the most powerful thing a
            brand can do.
          </p>
        </FadeUp>

        <FadeUp>
          <PartnerForm />
        </FadeUp>

        <FadeUp className="mt-10">
          <Link
            href="/about"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-7 py-3.5 hover:border-gold hover:text-[#F7EE78] transition-colors"
          >
            Learn More About FORGED
          </Link>
        </FadeUp>
      </div>
    </>
  );
}
