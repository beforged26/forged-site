import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Clubs & High Schools — FORGED",
  description:
    "Bring 6 or more athletes from your club or high school to FORGED and every athlete pays $650 instead of $757. Mesa, AZ — November 26–29, 2026.",
};

const steps = [
  {
    num: "01",
    title: "Email or DM us",
    desc: "The club director or head coach emails info@beforged.co or messages @beforgedco on Instagram with the club or school name and the players who are interested. Tell us if you want your logo listed.",
  },
  {
    num: "02",
    title: "Get your group code",
    desc: "We send your club or school a unique code. Share it with your families.",
  },
  {
    num: "03",
    title: "Each family registers",
    desc: "Each family registers at beforged.co with the code and pays the $350 deposit for their own athlete, which holds a spot.",
  },
  {
    num: "04",
    title: "Six registrations unlock $650",
    desc: "Once 6 registrations are confirmed from your club or school, every athlete in your group gets the $650 rate. The remaining balance is $300, due Nov 10.",
  },
];

const facts = [
  { stat: "$650", label: "Per athlete at 6 or more, instead of $757" },
  { stat: "$0", label: "Cost to the club or school" },
  { stat: "1 per 4", label: "Free coach registration for every 4 athletes" },
];

export default function Clubs() {
  return (
    <>
      <section className="hero-anim min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,164,76,0.04) 0%, transparent 60%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          Clubs &amp; High Schools
        </p>
        <h1 className="font-display text-[clamp(52px,10vw,120px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          BRING YOUR
          <br />
          <span className="gold-gradient-text">PROGRAM.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[640px] mx-auto relative z-[1] leading-[1.5]">
          Six athletes from your club or your high school, and every one of them pays $650 instead of $757.
        </p>
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted mt-6 relative z-[1]">
          Mesa, AZ &nbsp;·&nbsp; Nov 26–29, 2026 &nbsp;·&nbsp; Indoor Volleyball
        </p>
      </section>

      <div className="gold-rule" />

      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-gold/[0.08] mb-16">
          {facts.map((f) => (
            <div key={f.label} className="bg-dark p-9">
              <div className="font-display text-[clamp(40px,5vw,64px)] tracking-[0.02em] text-cream leading-none mb-3">{f.stat}</div>
              <p className="text-[13px] text-light leading-[1.6]">{f.label}</p>
            </div>
          ))}
        </div>

        <p className="section-eyebrow">How it works</p>
        <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-12">
          FOUR STEPS.
          <br />
          <span className="gold-gradient-text">NO COST TO YOU.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-gold/[0.08]">
          {steps.map((s) => (
            <div key={s.num} className="bg-dark p-8">
              <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold-m mb-2">{s.num}</div>
              <div className="font-display text-xl tracking-[0.06em] text-cream mb-3">{s.title}</div>
              <p className="text-[13px] text-light leading-[1.7]">{s.desc}</p>
            </div>
          ))}
        </div>
      </FadeUp>

      <div className="bg-dark border-y border-gold/10 py-20 px-6 md:px-10">
        <FadeUp className="max-w-[900px] mx-auto">
          <p className="section-eyebrow">The fine print</p>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] tracking-[0.04em] leading-[0.95] text-cream mb-8">
            WHAT COUNTS.
          </h2>
          <ul className="space-y-4 text-[14px] text-light leading-[1.7]">
            <li>
              <span className="text-gold mr-2">✦</span>
              The 6 do not have to come from one team. Athletes from any teams or age groups in your club or school count.
            </li>
            <li>
              <span className="text-gold mr-2">✦</span>
              It counts the program, not the team. A club and a high school are counted separately, and one athlete counts toward one program.
            </li>
            <li>
              <span className="text-gold mr-2">✦</span>
              The $350 deposit holds a spot and is non-refundable. Regular price is $757 with a $407 balance. If your group reaches 6 confirmed registrations by Nov 10, the rate for all of them is $650 and the balance is $300.
            </li>
            <li>
              <span className="text-gold mr-2">✦</span>
              If your group has fewer than 6 confirmed registrations by Nov 10, the balance is the regular price.
            </li>
            <li>
              <span className="text-gold mr-2">✦</span>
              Codes and the offer end Nov 10.
            </li>
          </ul>
        </FadeUp>
      </div>

      <div className="px-6 md:px-10 py-24 text-center">
        <FadeUp>
          <h2 className="font-display text-[clamp(42px,7vw,90px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
            GET YOUR
            <br />
            <span className="gold-gradient-text">GROUP CODE.</span>
          </h2>
          <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light max-w-[560px] mx-auto leading-[1.6] mb-8">
            Email us the club or school name and the players who are interested.
          </p>
          <a
            href="mailto:info@beforged.co?subject=FORGED%20club%20or%20school%20code"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-3.5 hover:bg-gold-m transition-colors"
          >
            info@beforged.co
          </a>
          <p className="text-sm text-muted tracking-[0.04em] mt-8">
            Or message{" "}
            <a href="https://instagram.com/beforgedco" className="text-gold-m no-underline hover:underline">@beforgedco</a>{" "}
            on Instagram.
          </p>
        </FadeUp>
      </div>
    </>
  );
}
