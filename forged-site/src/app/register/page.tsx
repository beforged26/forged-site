import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Register — FORGED",
  description:
    "Secure your spot at the FORGED Summit. Early bird pricing available. Phoenix, AZ — November 26–29, 2026.",
};

const included = [
  "All training sessions",
  "Expert speaker sessions",
  "Mental performance workshops",
  "Sports nutrition programming",
  "Athlete & coach mentorship",
  "FORGED gear bag",
  "All meals included",
  "Lifetime community access",
];

const donationTiers = [
  { name: "Community", amount: "$2,500", href: "https://donate.stripe.com/3cI8wPf80e4V3PI52H3AY06" },
  { name: "Bronze", amount: "$5,000", href: "https://buy.stripe.com/6oU4gzf80gd3ae652H3AY07" },
  { name: "Silver", amount: "$10,000", href: "https://donate.stripe.com/4gMbJ11haf8Zeum2Uz3AY09" },
  { name: "Gold", amount: "$25,000", href: "https://donate.stripe.com/5kQ14n5xqd0RgCu7aP3AY0a" },
  { name: "Presenting", amount: "$50,000", href: "https://donate.stripe.com/fZu3cv8JC0e59a2fHl3AY0b" },
  { name: "Legacy", amount: "$100,000", href: "https://donate.stripe.com/9B600j2lebWNfyq2Uz3AY0c" },
  { name: "Transformational", amount: "$250,000+", href: "https://donate.stripe.com/00waEX4tm2mdfyq2Uz3AY0d" },
];

export default function Register() {
  return (
    <>
      {/* HERO */}
      <section className="hero-anim min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,164,76,0.04) 0%, transparent 60%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          FORGED 2026
        </p>
        <h1 className="font-display text-[clamp(56px,11vw,130px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          SECURE YOUR
          <br />
          <span className="gold-gradient-text">SPOT.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[620px] mx-auto relative z-[1] leading-[1.5]">
          Phoenix, AZ &middot; Nov 26&ndash;29, 2026 &middot; Indoor Volleyball
        </p>
      </section>

      <div className="gold-rule" />

      {/* REGISTRATION PRICING */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">Registration</p>
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
              Save $200 — first 50 spots only. Lock in the lowest rate FORGED will ever offer.
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
              Standard rate after early bird closes. Full access to all summit programming.
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

      {/* WHAT'S INCLUDED */}
      <div className="bg-dark border-y border-gold/10 py-20 px-6 md:px-10">
        <FadeUp className="max-w-[900px] mx-auto">
          <p className="section-eyebrow center justify-center text-center">What's Included</p>
          <h2 className="font-display text-center text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-12">
            EVERYTHING.
            <br />
            <span className="gold-gradient-text">EXCEPT HOUSING.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <span className="text-gold mt-[2px] flex-shrink-0">✦</span>
                <span className="text-[13px] text-light leading-[1.5]">{item}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* DONATE */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">Support FORGED</p>
        <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
          INVEST IN
          <br />
          THE MISSION.
        </h2>
        <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light max-w-[640px] leading-[1.6] mb-14">
          Every dollar funds athlete scholarships, expert programming, and a movement built to last. Partner with FORGED at any level.
        </p>

        <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {donationTiers.map((tier) => (
            <FadeUp key={tier.name} className="bg-dark p-7 border-t-2 border-transparent transition-colors hover:border-gold-m hover:bg-dark2 flex flex-col justify-between gap-6">
              <div>
                <div className="font-display text-lg tracking-[0.1em] text-gold mb-1">{tier.name}</div>
                <div className="font-display text-[clamp(28px,3vw,36px)] tracking-[0.02em] text-cream leading-none">{tier.amount}</div>
              </div>
              <a
                href={tier.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[10px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/30 px-5 py-2.5 hover:border-gold hover:text-[#F7EE78] transition-colors text-center"
              >
                Donate
              </a>
            </FadeUp>
          ))}
        </div>
      </FadeUp>

      {/* CONTACT */}
      <div className="px-6 md:px-10 py-16 text-center border-t border-gold/[0.08]">
        <FadeUp>
          <p className="text-sm text-muted tracking-[0.04em]">
            Questions? Email{" "}
            <a href="mailto:pri@beforged.co" className="text-gold-m no-underline hover:underline">
              pri@beforged.co
            </a>{" "}
            or call{" "}
            <a href="tel:5164055549" className="text-gold-m no-underline hover:underline">
              516.405.5549
            </a>
            .
          </p>
        </FadeUp>
      </div>
    </>
  );
}
