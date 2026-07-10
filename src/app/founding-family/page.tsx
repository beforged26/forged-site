import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Founding Family — FORGED",
  description:
    "The people who made FORGED possible. Everyone who gives $1,000 or more is remembered here — permanently.",
};

// ── ADD FOUNDING FAMILY NAMES HERE ───────────────────────────────────────────
// Each entry: { name: string, note?: string }
// note is optional — a short dedication or location the donor wants displayed
const foundingFamily: { name: string; note?: string }[] = [
  // { name: "Jane & John Smith", note: "In honor of our daughter, Maya" },
  // Add names below as gifts are confirmed
];
// ─────────────────────────────────────────────────────────────────────────────

// ── STRIPE LINK ──────────────────────────────────────────────────────────────
const STRIPE_LINK = "https://donate.stripe.com/fZudR9aRK4ul71U52H3AY0f";
// ─────────────────────────────────────────────────────────────────────────────

export default function FoundingFamily() {
  return (
    <>
      {/* HERO */}
      <section className="hero-anim min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 65%, rgba(201,148,26,0.09) 0%, transparent 70%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-6 relative z-[1]">
          With Gratitude
        </p>
        <h1 className="font-display text-[clamp(52px,10vw,120px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          FOUNDING
          <br />
          <span className="gold-gradient-text">FAMILY.</span>
        </h1>
        <p className="font-serif italic text-[clamp(20px,2.8vw,30px)] text-light max-w-[700px] mx-auto relative z-[1] leading-[1.55] mb-10">
          This page exists because of you.
        </p>
        <div className="relative z-[1]">
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-10 py-4 hover:bg-gold-m transition-colors"
          >
            Join the Founding Family — Give $1,000+
          </a>
        </div>
      </section>

      <div className="gold-rule" />

      {/* HEARTFELT NOTE */}
      <FadeUp className="max-w-[820px] mx-auto px-6 md:px-10 py-28 text-center">
        <div className="font-serif text-[70px] text-gold/20 leading-[0.5] mb-8">&ldquo;</div>
        <div className="font-serif italic text-[clamp(19px,2.5vw,26px)] text-light leading-[1.8] space-y-6 text-left md:text-center">
          <p>
            I built FORGED because I spent years figuring it out alone. I know what it feels like to have the drive but not the roadmap — to work twice as hard just to find what the athletes with the right resources already had.
          </p>
          <p>
            FORGED exists to close that gap. Not just for one athlete, not just for one season. For every athlete and coach who walks through this program, at every level, for as long as we run it.
          </p>
          <p>
            The Founding Family makes that possible. If your name is on this wall — or if it&apos;s about to be — I want you to know something: I think about the weight of what you&apos;ve done. You funded a scholarship for a kid who didn&apos;t think elite development was for them. You helped a coach become someone their athletes will remember their whole lives. You gave someone a team they didn&apos;t know they could have.
          </p>
          <p>
            That is not a small thing. That is everything.
          </p>
          <p>
            From the bottom of my heart — thank you for believing in this before you had any reason to. That kind of trust is rare, and I do not take it lightly.
          </p>
        </div>
        <p className="mt-10 text-[12px] font-semibold tracking-[0.2em] uppercase text-gold-m">
          Pri Piantadosi-Lima &nbsp;·&nbsp; Founder, FORGED
        </p>
      </FadeUp>

      {/* WHAT YOUR GIFT DOES */}
      <div className="bg-dark border-y border-gold/10 py-24 px-6 md:px-10">
        <FadeUp className="max-w-[1000px] mx-auto">
          <p className="section-eyebrow text-center justify-center">Your Impact</p>
          <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-16 text-center">
            WHAT YOUR
            <br />
            <span className="gold-gradient-text">GIFT DOES.</span>
          </h2>
          <div className="grid gap-[2px] bg-gold/[0.06] grid-cols-1 md:grid-cols-3">
            {[
              {
                icon: "🏅",
                title: "Funds Access Scholarships",
                desc: "Your gift goes directly toward bringing athletes to FORGED who couldn't afford to come otherwise. No athlete gets turned away. That's your doing.",
              },
              {
                icon: "🤝",
                title: "Develops Coaches",
                desc: "FORGED invests in coaches as much as athletes. Coaches who grow here become the mentors, the models, the reasons athletes stay in sport.",
              },
              {
                icon: "🔥",
                title: "Builds the Foundation",
                desc: "Year one sets the standard for everything that follows. Your founding gift shapes what FORGED becomes — the culture, the access, the reach.",
              },
            ].map((item) => (
              <FadeUp key={item.title} className="bg-dark p-10 hover:bg-dark2 transition-colors text-center">
                <div className="text-4xl mb-5">{item.icon}</div>
                <div className="font-display text-[clamp(16px,2vw,20px)] tracking-[0.08em] text-cream mb-3">{item.title}</div>
                <p className="text-[13px] text-light leading-[1.7]">{item.desc}</p>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* DONOR WALL */}
      <div className="py-28 px-6 md:px-10">
        <FadeUp className="max-w-[1000px] mx-auto">
          <p className="section-eyebrow text-center justify-center">The Wall</p>
          <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-4 text-center">
            THE PEOPLE WHO
            <br />
            <span className="gold-gradient-text">MADE THIS.</span>
          </h2>
          <p className="font-serif italic text-[clamp(14px,1.8vw,17px)] text-muted text-center mb-16 max-w-[480px] mx-auto leading-[1.7]">
            Listed in the order they joined. This wall never comes down.
          </p>

          {foundingFamily.length === 0 ? (
            <div className="border border-gold/15 py-24 text-center">
              <div className="font-display text-[clamp(28px,4vw,52px)] tracking-[0.06em] text-gold/20 mb-5">
                YOUR NAME HERE.
              </div>
              <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-muted mb-8">
                Be the first to join the Founding Family.
              </p>
              <a
                href={STRIPE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-3.5 hover:bg-gold-m transition-colors"
              >
                Give $1,000+
              </a>
            </div>
          ) : (
            <div className="grid gap-[2px] bg-gold/[0.06] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {foundingFamily.map((person, i) => (
                <FadeUp key={i} className="bg-dark p-8 hover:bg-dark2 transition-colors">
                  <div className="font-display text-[clamp(18px,2vw,22px)] tracking-[0.06em] text-cream mb-1">
                    {person.name}
                  </div>
                  {person.note && (
                    <div className="font-serif italic text-[13px] text-muted leading-[1.6] mt-1">
                      {person.note}
                    </div>
                  )}
                </FadeUp>
              ))}
            </div>
          )}
        </FadeUp>
      </div>

      {/* CTA */}
      <div className="bg-dark border-t border-gold/10 py-28 px-6 md:px-10 text-center">
        <FadeUp>
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5">Ready to Join?</p>
          <h2 className="font-display text-[clamp(42px,7vw,90px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
            LEAVE YOUR
            <br />
            <span className="gold-gradient-text">MARK.</span>
          </h2>
          <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light max-w-[560px] mx-auto mb-4 leading-[1.7]">
            Give any amount $1,000 or more. After your gift is confirmed, email{" "}
            <a href="mailto:pri@beforged.co" className="text-gold hover:text-gold-m transition-colors">
              pri@beforged.co
            </a>{" "}
            with the name you&apos;d like on the wall — and any dedication you&apos;d like included.
          </p>
          <p className="font-serif italic text-[clamp(14px,1.6vw,17px)] text-muted mb-12">
            Your name will be added within 48 hours of confirmation.
          </p>
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-12 py-4 hover:bg-gold-m transition-colors"
          >
            Give $1,000 or More
          </a>
        </FadeUp>
      </div>
    </>
  );
}
