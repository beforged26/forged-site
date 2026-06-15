import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import RegisterForm from "@/components/RegisterForm";

export const metadata: Metadata = {
  title: "Register — FORGED",
  description:
    "Apply for FORGED 2026 — the inaugural elite athlete and coach development summit in Phoenix, AZ, November 26–29, 2026. Indoor Volleyball, expanding across all sports.",
};

const steps = [
  {
    num: "01",
    title: "Apply",
    desc: "Tell us about yourself — athlete, coach, parent, or performance professional. Takes less than two minutes.",
  },
  {
    num: "02",
    title: "Confirm",
    desc: "We'll follow up with full registration details, pricing, and answers to any questions before you commit.",
  },
  {
    num: "03",
    title: "Get FORGED",
    desc: "Join us in Phoenix, AZ — Nov 26–29, 2026 — for four days that will change how you train, think, and compete.",
  },
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
          Apply Now
        </p>
        <h1 className="font-display text-[clamp(56px,11vw,130px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          REGISTER FOR
          <br />
          <span className="gold-gradient-text">FORGED 2026.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[620px] mx-auto relative z-[1] leading-[1.5]">
          Phoenix, AZ &middot; Nov 26&ndash;29, 2026 &middot; Indoor Volleyball
          &mdash; FORGED is expanding across all sports.
        </p>
      </section>

      <div className="gold-rule" />

      {/* HOW IT WORKS */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-20">
        <p className="section-eyebrow center justify-center">How It Works</p>
        <h2 className="font-display text-center text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
          THREE STEPS.
          <br />
          ONE STANDARD.
        </h2>

        <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 md:grid-cols-3">
          {steps.map((s) => (
            <FadeUp key={s.num} className="bg-dark p-9 border-t-2 border-transparent transition-colors hover:border-gold-m hover:bg-dark2">
              <div className="font-display text-5xl text-gold/[0.15] leading-none mb-3">{s.num}</div>
              <div className="font-display text-xl tracking-[0.1em] text-gold mb-2.5">{s.title}</div>
              <p className="text-[13px] text-light leading-[1.6]">{s.desc}</p>
            </FadeUp>
          ))}
        </div>
      </FadeUp>

      {/* FORM */}
      <div className="bg-dark border-y border-gold/10 py-24 px-6 md:px-10">
        <FadeUp className="max-w-[640px] mx-auto text-center mb-12">
          <p className="section-eyebrow center justify-center">Application</p>
          <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-4">
            START YOUR
            <br />
            <span className="gold-gradient-text">APPLICATION.</span>
          </h2>
          <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light leading-[1.6]">
            No payment required — this reserves your spot in line and gets you
            full details as soon as registration opens.
          </p>
        </FadeUp>

        <FadeUp>
          <RegisterForm />
        </FadeUp>
      </div>

      {/* CONTACT NOTE */}
      <div className="px-6 md:px-10 py-20 text-center">
        <FadeUp>
          <p className="text-sm text-muted tracking-[0.04em]">
            Questions before you apply? Email{" "}
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
