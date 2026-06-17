import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Athlete Registration — FORGED",
  description:
    "Register as an athlete for FORGED 2026. Phoenix, AZ — November 26–29, 2026. Elite training, expert sessions, and a community built to last.",
};

const included = [
  {
    title: "Elite Training Sessions",
    desc: "Work directly with college and professional coaches who have been where you want to go. Every rep is intentional. Every session is designed to expose what you're actually capable of — and push you past it.",
  },
  {
    title: "Full Expert Session Access",
    desc: "Sports psychology, nutrition, recruiting, leadership development — every athlete goes through every session. Nothing is optional. It's all built into the schedule because all of it matters.",
  },
  {
    title: "Mental Performance",
    desc: "Learn to compete under pressure, manage your identity, and build the mindset that separates good from elite. This is the work most programs skip. FORGED doesn't.",
  },
  {
    title: "Sports Nutrition & Wellness",
    desc: "Fuel, recovery, body image, and athlete longevity. The honest conversations about what you put in your body and how you treat it — because your body is your career.",
  },
  {
    title: "Recruiting Education",
    desc: "The real truth about the recruiting process. What college coaches actually look for, how to navigate it without losing yourself, and how to make decisions that are right for you — not just impressive.",
  },
  {
    title: "FORGED Swag Bag",
    desc: "Gear built for athletes who take it seriously. You'll wear it because you earned it.",
  },
  {
    title: "All Meals Included",
    desc: "From arrival to departure — breakfast, lunch, dinner, and everything in between. No extra costs, no logistics. Just show up ready to work.",
  },
  {
    title: "Lifetime Community Access",
    desc: "The relationships you build at FORGED don't end on Day 4. You're joining a network of athletes, coaches, and experts that compounds in value every year. This is the beginning of something bigger.",
  },
];

export default function AthleteRegister() {
  return (
    <>
      {/* HERO */}
      <section className="hero-anim min-h-[65vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,164,76,0.04) 0%, transparent 60%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          Athlete Registration
        </p>
        <h1 className="font-display text-[clamp(56px,11vw,130px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          THIS IS YOUR
          <br />
          <span className="gold-gradient-text">ROOM.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[640px] mx-auto relative z-[1] leading-[1.5]">
          You've outgrown what's available to you. FORGED is where athletes who
          are committed to what's next come to find out what they're made of.
        </p>
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted mt-6 relative z-[1]">
          Phoenix, AZ &nbsp;·&nbsp; Nov 26–29, 2026 &nbsp;·&nbsp; Indoor Volleyball
        </p>
      </section>

      <div className="gold-rule" />

      {/* PRICING */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">Pricing</p>
        <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
          CHOOSE YOUR
          <br />
          ENTRY.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-gold/[0.08] mb-[2px]">
          {/* Early Bird */}
          <FadeUp className="bg-dark p-9 border-t-2 border-gold relative">
            <div className="absolute top-0 right-0 bg-gold text-black text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1">
              Limited Spots
            </div>
            <div className="font-display text-xl tracking-[0.1em] text-gold mb-1">Early Bird</div>
            <div className="font-display text-[clamp(48px,6vw,72px)] tracking-[0.02em] text-cream leading-none mb-3">
              $757
            </div>
            <p className="text-[13px] text-light leading-[1.6] mb-8">
              Save $200 — first 50 spots only. The lowest rate FORGED will ever offer. Lock it in now.
            </p>
            <a
              href="https://buy.stripe.com/5kQ5kD5xq8KBdqi2Uz3AY00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-7 py-3.5 hover:bg-gold-m transition-colors"
            >
              Register — Early Bird
            </a>
          </FadeUp>

          {/* Full Registration */}
          <FadeUp className="bg-dark p-9 border-t-2 border-transparent">
            <div className="font-display text-xl tracking-[0.1em] text-gold mb-1">Full Registration</div>
            <div className="font-display text-[clamp(48px,6vw,72px)] tracking-[0.02em] text-cream leading-none mb-3">
              $957
            </div>
            <p className="text-[13px] text-light leading-[1.6] mb-8">
              Standard rate after early bird closes. Full access to everything FORGED has to offer.
            </p>
            <a
              href="https://buy.stripe.com/fZu3cv0d6e4V85Y0Mr3AY01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-7 py-3.5 hover:border-gold hover:text-[#F7EE78] transition-colors"
            >
              Register — Full Price
            </a>
          </FadeUp>
        </div>

        {/* Deposit */}
        <FadeUp className="bg-dark border border-gold/10 p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-display text-xl tracking-[0.1em] text-gold mb-1">Hold Your Spot — Deposit</div>
            <p className="text-[13px] text-light leading-[1.6] max-w-[560px]">
              Not ready to pay in full? Put down $350 now to secure your spot. Applied to your balance at checkout.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="font-display text-[clamp(32px,4vw,48px)] tracking-[0.02em] text-cream leading-none mb-3">$350</div>
            <a
              href="https://buy.stripe.com/3cIcN51ha0e54TM7aP3AY02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-7 py-3.5 hover:border-gold hover:text-[#F7EE78] transition-colors"
            >
              Pay Deposit
            </a>
          </div>
        </FadeUp>
      </FadeUp>

      {/* CLUB DEAL */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 pb-4">
        <div className="border border-gold/40 bg-dark p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0 font-display text-[clamp(36px,5vw,56px)] gold-gradient-text leading-none">4+1</div>
          <div>
            <div className="font-display text-xl tracking-[0.1em] text-gold mb-2">Club Deal — Bring Your Team</div>
            <p className="text-[13px] text-light leading-[1.6]">
              Register 4 athletes from the same club or coach and your coach or club director gets one complimentary entry to the full summit weekend. To claim it, email{" "}
              <a href="mailto:pri@beforged.co" className="text-gold-m hover:underline">pri@beforged.co</a>{" "}
              with your group's name and the 4 athlete registrations. We'll confirm your free entry within 48 hours.
            </p>
          </div>
        </div>
      </FadeUp>

      {/* WHAT'S INCLUDED */}
      <div className="bg-dark border-y border-gold/10 py-24 px-6 md:px-10">
        <FadeUp className="max-w-[1100px] mx-auto">
          <p className="section-eyebrow center">What's Included</p>
          <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
            EVERYTHING YOU
            <br />
            <span className="gold-gradient-text">NEED TO LEVEL UP.</span>
          </h2>
          <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light max-w-[640px] leading-[1.6] mb-14">
            Registration covers the full experience — training, sessions, meals, gear, and community. Housing is the only thing not included.
          </p>

          <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 md:grid-cols-2">
            {included.map((item) => (
              <FadeUp key={item.title} className="bg-dark p-8 border-t-2 border-transparent hover:border-gold-m hover:bg-dark2 transition-colors">
                <div className="font-display text-lg tracking-[0.1em] text-gold mb-2">{item.title}</div>
                <p className="text-[13px] text-light leading-[1.6]">{item.desc}</p>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* BOTTOM CTA */}
      <div className="px-6 md:px-10 py-24 text-center">
        <FadeUp>
          <h2 className="font-display text-[clamp(42px,7vw,90px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
            READY TO BE
            <br />
            <span className="gold-gradient-text">FORGED?</span>
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="text-sm text-muted tracking-[0.04em] mb-10">
            Questions? Email{" "}
            <a href="mailto:pri@beforged.co" className="text-gold-m no-underline hover:underline">
              pri@beforged.co
            </a>
          </p>
        </FadeUp>
        <FadeUp className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://buy.stripe.com/5kQ5kD5xq8KBdqi2Uz3AY00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-7 py-3.5 hover:bg-gold-m transition-colors"
          >
            Register — Early Bird $757
          </a>
          <a
            href="https://buy.stripe.com/3cIcN51ha0e54TM7aP3AY02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-7 py-3.5 hover:border-gold transition-colors"
          >
            Pay Deposit — $350
          </a>
        </FadeUp>
      </div>
    </>
  );
}
