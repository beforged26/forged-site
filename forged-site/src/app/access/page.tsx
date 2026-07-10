import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import AccessForm from "@/components/AccessForm";

export const metadata: Metadata = {
  title: "FORGED Access Scholarship — Apply",
  description:
    "No athlete is turned away for financial need. Apply for a FORGED Access Scholarship — fully funded by our brand partners — to attend the FORGED Summit in Mesa, AZ, November 26–29, 2026.",
};

const steps = [
  {
    num: "01",
    title: "Apply",
    desc: "Fill out the form below. Tell us your story — your sport, your goals, and what makes attending FORGED feel out of reach right now.",
  },
  {
    num: "02",
    title: "Review",
    desc: "Pri reviews every application personally. No committee. No algorithm. A real person reads what you write.",
  },
  {
    num: "03",
    title: "Selection",
    desc: "Scholars are selected based on need, commitment, and fit. Our goal is 2–4 fully funded spots for the 2026 summit — hopefully more.",
  },
  {
    num: "04",
    title: "Notification",
    desc: "All applicants receive a response within 2 weeks of applying. Selected scholars receive full details on next steps and what's covered.",
  },
  {
    num: "05",
    title: "Attend",
    desc: "You show up. You do the work. You leave with more than you came with — skills, community, and proof of what you're capable of.",
  },
];

const eligibility = [
  "Ages 13–23 (indoor volleyball, 2026 summit)",
  "Demonstrated financial need — cost is a real barrier for you",
  "Committed to attending all 4 days of the summit",
  "Motivated to grow — as an athlete, a teammate, a person",
  "No prior FORGED attendance required",
];

export default function Access() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.06) 0%, transparent 70%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          FORGED Access
        </p>
        <h1 className="font-display text-[clamp(52px,10vw,120px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          NO ATHLETE
          <br />
          LEFT <span className="gold-gradient-text">BEHIND.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,2.8vw,24px)] text-light max-w-[640px] mx-auto relative z-[1] leading-[1.6] mb-10">
          Cost should never be the reason a great athlete misses a chance to grow.
          FORGED Access scholarships are fully funded by our brand partners — so
          the opportunity goes to the athlete who needs it most.
        </p>
        <a
          href="#apply"
          className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-4 hover:bg-gold-m transition-colors relative z-[1]"
        >
          Apply Now
        </a>
      </section>

      <div className="gold-rule" />

      {/* HOW IT WORKS */}
      <FadeUp className="max-w-[1000px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">How It Works</p>
        <h2 className="font-display text-[clamp(38px,6vw,72px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
          THE PROCESS.
        </h2>

        <div className="flex flex-col gap-0">
          {steps.map((s, i) => (
            <FadeUp key={s.num} className="flex gap-8 py-7 border-b border-gold/10 last:border-b-0">
              <div className="font-display text-[clamp(28px,4vw,48px)] tracking-[0.06em] text-gold/30 leading-none shrink-0 w-14">
                {s.num}
              </div>
              <div>
                <p className="font-display text-xl tracking-[0.08em] text-gold mb-2">{s.title}</p>
                <p className="text-[14px] text-light leading-[1.7]">{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </FadeUp>

      {/* ELIGIBILITY */}
      <div className="bg-dark border-y border-gold/10 py-20 px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="section-eyebrow">Eligibility</p>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-8">
              WHO
              <br />
              QUALIFIES.
            </h2>
            <ul className="flex flex-col gap-4">
              {eligibility.map((item) => (
                <li key={item} className="flex gap-3 text-[14px] text-light leading-[1.6]">
                  <span className="text-gold mt-[2px] shrink-0">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp className="border border-gold/20 bg-[#0D0D0D] p-8">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-m mb-4">
              Funded by our partners
            </p>
            <p className="font-serif italic text-[clamp(18px,2.2vw,22px)] text-cream leading-[1.6] mb-6">
              "Starting at the Bronze level ($5,000), each scholarship carries the name
              of the partner who funded it — a real investment in an athlete who earned
              their spot but needed the support to get there."
            </p>
            <p className="text-[12px] text-muted tracking-[0.05em]">— Pri Piantadosi-Lima, Founder</p>
            <div className="mt-8 pt-6 border-t border-gold/15">
              <p className="text-[12px] text-muted leading-[1.7]">
                Want your name on a scholarship?{" "}
                <a
                  href="/partner"
                  className="text-gold-m underline underline-offset-4 hover:text-gold transition-colors"
                >
                  See partnership tiers →
                </a>
              </p>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* WHAT'S COVERED */}
      <FadeUp className="max-w-[1000px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">What's Covered</p>
        <h2 className="font-display text-[clamp(36px,5vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-6">
          WHAT YOU GET.
        </h2>
        <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light max-w-[640px] leading-[1.6] mb-10">
          A FORGED Access scholarship covers your full summit registration — 4 days
          of elite training, expert sessions, coaching, and community.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[2px] bg-gold/10">
          {[
            { label: "Full Summit Registration", note: "All 4 days, all sessions" },
            { label: "Access to Every Expert", note: "No breakout tier — you're in everything" },
            { label: "FORGED Athlete Gear", note: "Kit included with registration" },
          ].map((item) => (
            <div key={item.label} className="bg-dark p-8">
              <p className="font-display text-lg tracking-[0.08em] text-gold mb-2">{item.label}</p>
              <p className="text-[13px] text-muted">{item.note}</p>
            </div>
          ))}
        </div>
        <p className="text-[12px] text-muted mt-5 leading-[1.6]">
          Travel and accommodation are not included. If travel is a barrier, note it
          in your application — we'll do our best to connect you with resources.
        </p>
      </FadeUp>

      <div className="gold-rule" />

      {/* APPLICATION FORM */}
      <FadeUp className="max-w-[760px] mx-auto px-6 md:px-10 py-24" id="apply">
        <div style={{ scrollMarginTop: "100px" }} id="apply-anchor" />
        <p className="section-eyebrow">Apply</p>
        <h2 className="font-display text-[clamp(38px,6vw,72px)] tracking-[0.04em] leading-[0.95] text-cream mb-4">
          YOUR STORY
          <br />
          <span className="gold-gradient-text">MATTERS.</span>
        </h2>
        <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light leading-[1.6] mb-12">
          Applications are open for the 2026 FORGED Summit — Mesa, AZ, November 26–29.
          Write what's real. That's all we need.
        </p>

        <AccessForm />
      </FadeUp>
    </>
  );
}
