import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Register — FORGED",
  description:
    "FORGED Beach — Dania Beach, FL, February 12–15, 2027. Registration coming soon. Join the newsletter to be first to know.",
};

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
          FORGED Beach
        </p>
        <h1 className="font-display text-[clamp(56px,11vw,130px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          REGISTRATION
          <br />
          <span className="gold-gradient-text">COMING SOON.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[620px] mx-auto relative z-[1] leading-[1.5] mb-4">
          Dania Beach, FL &middot; Feb 12&ndash;15, 2027 &middot; Beach Volleyball
        </p>
        <p className="text-[13px] text-muted max-w-[560px] mx-auto relative z-[1] leading-[1.7] mb-10">
          The Mesa, AZ summit (November 26&ndash;29, 2026) has been cancelled and all registrations have been refunded.
        </p>
        <div className="flex items-center gap-4 flex-wrap justify-center relative z-[1]">
          <Link
            href="/events/fl-beach-volleyball"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-4 hover:bg-gold-m transition-colors"
          >
            Beach Details
          </Link>
          <Link
            href="/events"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-8 py-4 hover:border-gold transition-colors"
          >
            All Events
          </Link>
        </div>
      </section>

      <div className="gold-rule" />

      {/* NOTIFY */}
      <FadeUp className="max-w-[640px] mx-auto px-6 md:px-10 py-24 text-center">
        <p className="section-eyebrow center justify-center">Stay in the Loop</p>
        <h2 className="font-display text-[clamp(38px,6vw,72px)] tracking-[0.04em] leading-[0.95] text-cream mb-4">
          BE FIRST
          <br />
          <span className="gold-gradient-text">TO KNOW.</span>
        </h2>
        <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light leading-[1.6] mb-10">
          Join the newsletter and you&rsquo;ll hear the moment registration opens.
        </p>
        <WaitlistForm id="register-notify" label="Join our newsletter" />
      </FadeUp>

      <div className="gold-rule" />

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
