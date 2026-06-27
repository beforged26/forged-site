import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import WaitlistForm from "@/components/WaitlistForm";

const pillars = [
  {
    num: "01",
    title: "Elite Performance",
    desc: "Sport-specific training led by expert coaches — built to challenge athletes at every level. Every rep is intentional. Every session is designed to push you past your current ceiling.",
  },
  {
    num: "02",
    title: "Mental Performance",
    desc: "Sports psychology, mindset frameworks, and pressure training. Not an add-on — woven into every day.",
  },
  {
    num: "03",
    title: "Wellness",
    desc: "Sports nutrition, body image, and athlete identity. The whole person. Not just the player.",
  },
  {
    num: "04",
    title: "Mentorship",
    desc: "Athletes and coaches developing side by side. Iron sharpens iron. The relationships don't end on Day 4.",
  },
  {
    num: "05",
    title: "Opportunity & Access",
    desc: "Registration is open to all. Scholarships are awarded on talent and character — because finances should never be the barrier to growth. Any sport. Any background.",
  },
];

const stats = [
  { number: "2026", label: "Inaugural Class" },
  { number: "4", label: "Days of Development" },
  { number: "6+", label: "Expert Sessions" },
  { number: "ALL", label: "Sports Welcome" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-anim min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,164,76,0.04) 0%, transparent 60%)",
          }}
        />

        <div className="mb-4 animate-[float_6s_ease-in-out_infinite] relative z-[1]">
          <Image
            src="/forged-logo.png"
            alt="FORGED"
            width={440}
            height={440}
            priority
            className="w-[clamp(260px,40vw,440px)] h-auto mx-auto"
          />
        </div>

        <p className="font-body text-[clamp(11px,1.4vw,14px)] font-medium tracking-[0.32em] uppercase text-gold-m mb-11 relative z-[1]">
          Greatness Isn&rsquo;t Born. It&rsquo;s Forged.
        </p>

        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          Athlete &amp; Coach Development Summit
        </p>

        <h1 className="font-display text-[clamp(72px,14vw,160px)] leading-[0.9] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          BUILT
          <br />
          DIFFERENT.
          <br />
          BY <span className="gold-gradient-text">DESIGN.</span>
        </h1>

        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[560px] mx-auto mb-10 leading-[1.5] relative z-[1]">
          Four days. Elite coaches. Expert sessions. The standard in this room
          is elite — and the door is open to every athlete committed enough to meet it.
        </p>

        <div className="mb-14 relative z-[1]">
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
          <p className="font-serif italic text-[clamp(14px,1.8vw,17px)] text-light">
            FORGED is expanding across all sports — this is just the beginning.
          </p>
        </div>

        <div className="relative z-[1] w-full">
          <WaitlistForm id="email-input" label="Get early access — join the list" />
        </div>

        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 relative z-[1]">
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted">Scroll</span>
          <div className="w-5 h-5 border-r border-b border-gold-d rotate-45 animate-bounce" />
        </div>
      </section>

      <div className="gold-rule" />

      {/* WHAT IS FORGED */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">What is FORGED</p>
        <h2 className="font-display text-[clamp(42px,7vw,80px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
          NOT A SHORTCUT.
          <br />
          A DEVELOPMENT SYSTEM.
        </h2>
        <p className="font-serif italic text-[clamp(18px,2.5vw,22px)] text-light max-w-[640px] leading-[1.6] mb-14">
          Four intentional days of elite training, expert sessions, and a
          community that pushes you to a standard you haven&rsquo;t reached
          yet.
        </p>

        <div className="grid gap-[2px] bg-gold/[0.08]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {pillars.map((p) => (
            <FadeUp key={p.num} className="bg-dark p-9 border-t-2 border-transparent transition-colors hover:border-gold-m hover:bg-dark2">
              <div className="font-display text-5xl text-gold/[0.15] leading-none mb-3">{p.num}</div>
              <div className="font-display text-xl tracking-[0.1em] text-gold mb-2.5">{p.title}</div>
              <p className="text-[13px] text-light leading-[1.6]">{p.desc}</p>
            </FadeUp>
          ))}
        </div>
      </FadeUp>

      {/* STATS */}
      <div className="bg-dark border-y border-gold/10 py-16 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto grid gap-10 text-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
          {stats.map((s) => (
            <FadeUp key={s.label}>
              <div className="font-display text-[clamp(48px,7vw,80px)] tracking-[0.04em] gold-gradient-text leading-none mb-2">
                {s.number}
              </div>
              <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted">{s.label}</div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* QUOTE */}
      <FadeUp className="px-6 md:px-10 py-24 text-center border-t border-gold/[0.08]" style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #111111 100%)" }}>
        <div className="font-serif text-[80px] text-gold-d leading-[0.5] mb-6">&ldquo;</div>
        <p className="font-serif italic text-[clamp(22px,3.5vw,38px)] text-cream max-w-[780px] mx-auto mb-6 leading-[1.45]">
          The best young athletes in this country don&rsquo;t lack talent.
          They lack access. FORGED is fixing that.
        </p>
        <p className="text-[11px] tracking-[0.22em] uppercase text-gold-m">
          Pri Piantadosi-Lima &nbsp;·&nbsp; Founder, FORGED
        </p>
      </FadeUp>

      <div className="gold-rule" />

      {/* WHO IT'S FOR */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">Who It&rsquo;s For</p>
        <h2 className="font-display text-[clamp(42px,7vw,80px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
          FOR THE ONES
          <br />
          WHO SHOW UP.
        </h2>
        <p className="font-serif italic text-[clamp(18px,2.5vw,22px)] text-light max-w-[640px] leading-[1.6] mb-14">
          FORGED is for the athlete who shows up ready to work — whatever level you&rsquo;re at right now. Registration is open to all. Scholarships exist for those who need financial support, awarded on talent and character. The coach who gives everything deserves development in return too.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-gold/[0.08]">
          <FadeUp className="bg-dark p-9 border-t-2 border-transparent transition-colors hover:border-gold-m hover:bg-dark2">
            <div className="font-display text-xl tracking-[0.1em] text-gold mb-2.5">Athletes</div>
            <p className="text-[13px] text-light leading-[1.6]">
              You&rsquo;ve outgrown what&rsquo;s available to you. You want
              honest feedback — not comfortable praise. You want to be in a
              room where everyone is committed. This is that room.
            </p>
          </FadeUp>
          <FadeUp className="bg-dark p-9 border-t-2 border-transparent transition-colors hover:border-gold-m hover:bg-dark2">
            <div className="font-display text-xl tracking-[0.1em] text-gold mb-2.5">Coaches</div>
            <p className="text-[13px] text-light leading-[1.6]">
              FORGED isn&rsquo;t just for athletes. Coaches are first-class
              participants. Coaching science, peer development, culture
              frameworks, and a network that gets the work you put in.
            </p>
          </FadeUp>
        </div>
      </FadeUp>

      {/* BOTTOM CTA */}
      <div className="px-6 md:px-10 py-28 text-center bg-black">
        <div className="mb-10">
          <Image
            src="/forged-logo.png"
            alt="FORGED"
            width={260}
            height={260}
            className="w-[clamp(160px,22vw,260px)] h-auto mx-auto"
          />
        </div>

        <FadeUp>
          <h2 className="font-display text-[clamp(48px,9vw,110px)] tracking-[0.04em] leading-[0.95] mb-5">
            READY TO BE
            <br />
            <span className="gold-gradient-text">FORGED?</span>
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="text-sm text-muted tracking-[0.08em] mb-12">
            First event: Phoenix, AZ · Nov 26–29, 2026 · Indoor Volleyball —
            all sports coming soon.
          </p>
        </FadeUp>

        <FadeUp>
          <WaitlistForm
            id="email-input-2"
            label="Get on the list before registration opens"
            privacyNote={
              <>
                No spam. DM us anytime:{" "}
                <a href="mailto:pri@beforged.co" className="text-gold-m no-underline">
                  pri@beforged.co
                </a>
              </>
            }
          />
        </FadeUp>

        <FadeUp className="mt-10">
          <Link
            href="/partner"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-7 py-3.5 hover:bg-gold-m transition-colors"
          >
            Partner With Us
          </Link>
        </FadeUp>
      </div>
    </>
  );
}
