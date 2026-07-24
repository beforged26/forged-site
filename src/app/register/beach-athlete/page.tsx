import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import AthleteInterestForm from "@/components/AthleteInterestForm";

export const metadata: Metadata = {
  title: "Beach Athlete Registration — FORGED",
  description:
    "Register as an athlete for FORGED Beach 2026. Dania Beach, FL — February 12–15, 2026. Elite sand training, expert sessions, and a community built to last.",
};

const included = [
  {
    title: "Elite Beach Training Sessions",
    desc: "Work directly with professional beach volleyball coaches who have competed and trained at the highest level. Every rep is intentional. Every session is designed to expose what you're actually capable of — and push you past it.",
  },
  {
    title: "Full Expert Session Access",
    desc: "Sports psychology, nutrition, recruiting, vision training, leadership development — every athlete goes through every session. Nothing is optional. It's all built into the schedule because all of it matters.",
  },
  {
    title: "Mental Performance",
    desc: "Learn to compete under pressure, manage your identity, and build the mindset that separates good from elite. Beach is one of the most mentally demanding formats in volleyball. FORGED builds you for it.",
  },
  {
    title: "Sports Nutrition & Wellness",
    desc: "Fuel, recovery, and athlete longevity. The honest conversations about what you put in your body and how you treat it — because your body is your career, and beach demands all of it.",
  },
  {
    title: "Recruiting Education",
    desc: "The real truth about the recruiting process for beach. What college programs look for, how to navigate it without losing yourself, and how to make decisions that are right for you — not just impressive.",
  },
  {
    title: "FORGED Swag Bag",
    desc: "Gear built for athletes who take it seriously. You'll wear it because you earned it.",
  },
  {
    title: "Lifetime Community Access",
    desc: "The relationships you build at FORGED don't end on Day 4. You're joining a network of athletes, coaches, and experts that compounds in value every year.",
  },
  {
    title: "FirstBeat & Ver Assessments",
    desc: "Real-time physiological data and vision testing built into the experience. Know your readiness. Train your vision. Two of the most advanced performance tools in sport — available to every FORGED athlete.",
  },
];

const PAYMENT_OPTIONS = [
  {
    label: "Early Bird",
    url: "https://buy.stripe.com/8x28wP7FybWN9a23YD3AY0g",
    featured: true,
  },
  {
    label: "Full Registration",
    url: "https://buy.stripe.com/3cIeVd0d6d0R71Ucv93AY0i",
    featured: false,
  },
  {
    label: "Deposit — Hold My Spot",
    url: "https://buy.stripe.com/7sY6oH3pi9OFeum1Qv3AY0h",
    featured: false,
  },
];

export default function BeachAthleteRegister() {
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
          Beach Athlete Registration
        </p>
        <h1 className="font-display text-[clamp(56px,11vw,130px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          THIS IS YOUR
          <br />
          <span className="gold-gradient-text">SAND.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[640px] mx-auto relative z-[1] leading-[1.5]">
          The same elite development model — built for beach volleyball.
          Four days of training, expert sessions, and the kind of work that
          changes how you see the game.
        </p>
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted mt-6 relative z-[1]">
          Dania Beach, FL &nbsp;·&nbsp; Feb 12–15, 2026 &nbsp;·&nbsp; Beach Volleyball
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
            <p className="text-[13px] text-light leading-[1.6]">
              Save $200 — first spots only. The lowest rate FORGED will ever offer. Lock it in now before it closes.
            </p>
          </FadeUp>

          {/* Full Registration */}
          <FadeUp className="bg-dark p-9 border-t-2 border-transparent">
            <div className="font-display text-xl tracking-[0.1em] text-gold mb-1">Full Registration</div>
            <div className="font-display text-[clamp(48px,6vw,72px)] tracking-[0.02em] text-cream leading-none mb-3">
              $957
            </div>
            <p className="text-[13px] text-light leading-[1.6]">
              Standard rate. Full access to everything FORGED has to offer — training, expert sessions, swag, and community.
            </p>
          </FadeUp>
        </div>

        {/* Deposit */}
        <FadeUp className="bg-dark border border-gold/10 p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="font-display text-xl tracking-[0.1em] text-gold mb-1">Hold Your Spot — Deposit</div>
            <p className="text-[13px] text-light leading-[1.6] max-w-[560px]">
              Not ready to pay in full? Put down a deposit now to secure your spot. Applied to your balance at checkout.
            </p>
          </div>
          <div className="font-display text-[clamp(32px,4vw,48px)] tracking-[0.02em] text-cream leading-none flex-shrink-0">
            $350
          </div>
        </FadeUp>

        {/* Club Deal */}
        <FadeUp className="mt-[2px]">
          <div className="border border-gold/40 bg-dark p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0 font-display text-[clamp(36px,5vw,56px)] gold-gradient-text leading-none">4+1</div>
            <div>
              <div className="font-display text-xl tracking-[0.1em] text-gold mb-2">Club Deal — Bring Your Team</div>
              <p className="text-[13px] text-light leading-[1.6]">
                Register 4 athletes from the same club or coach and your coach or club director gets one complimentary entry to the full summit weekend. To claim it, email{" "}
                <a href="mailto:info@beforged.co" className="text-gold-m hover:underline">info@beforged.co</a>{" "}
                with your group's name and the 4 athlete registrations. We'll confirm your free entry within 48 hours.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* 4-Day Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-gold/[0.08] mt-8">
          {[
            { day: "Day 1", date: "Thursday · Feb 12", label: "Arrival Day", desc: "Check in, pick up your swag bag, meet your cohort. Light intro session in the evening to get you locked in before Day 2." },
            { day: "Day 2", date: "Friday · Feb 13", label: "Training Day 1", desc: "First full day on the sand. Morning and afternoon training blocks plus your first round of expert sessions." },
            { day: "Day 3", date: "Saturday · Feb 14", label: "Training Day 2", desc: "Back on the courts. Second round of training blocks and the remaining expert sessions. Full day of work." },
            { day: "Day 4", date: "Sunday · Feb 15", label: "Competition Day", desc: "Beach competition day. You compete. 1:1 assessments available with FirstBeat and Ver during matches." },
          ].map((d) => (
            <FadeUp key={d.day} className="bg-dark p-7 flex flex-col gap-3">
              <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold-m">{d.day}</div>
              <div className="text-[11px] tracking-[0.12em] uppercase text-muted">{d.date}</div>
              <div className="font-display text-xl tracking-[0.06em] text-cream border-b border-gold/15 pb-3">{d.label}</div>
              <p className="text-[12px] text-light leading-[1.65]">{d.desc}</p>
            </FadeUp>
          ))}
        </div>
      </FadeUp>

      {/* REGISTRATION FORM */}
      <div className="bg-dark border-y border-gold/10 py-24 px-6 md:px-10">
        <FadeUp className="max-w-[900px] mx-auto">
          <p className="section-eyebrow">Register</p>
          <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-4">
            TELL US
            <br />
            <span className="gold-gradient-text">ABOUT YOU.</span>
          </h2>
          <p className="font-serif italic text-[clamp(15px,2vw,19px)] text-light max-w-[580px] leading-[1.6] mb-12">
            Fill out your info below — we&apos;ll be in touch directly. After submitting, you&apos;ll choose your payment option to hold your spot.
          </p>
          <AthleteInterestForm paymentOptions={PAYMENT_OPTIONS} />
        </FadeUp>
      </div>

      {/* WAIVER */}
      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-16">
        <FadeUp>
          <p className="section-eyebrow mb-6">Assumption of Risk & Release of Liability</p>
          <div className="border border-gold/15 bg-dark p-8 md:p-10 space-y-5">
            <p className="text-[13px] text-light leading-[1.8]">
              I understand that participation in sport requires a personal acceptance of the risk of injury. I acknowledge that those responsible for the conduct of the FORGED Summit take reasonable precautions to minimize such risk, but that some risk cannot be eliminated.
            </p>
            <p className="text-[13px] text-light leading-[1.8]">
              I understand that participation in the FORGED Beach Summit (February 12–15, 2026, Dania Beach, FL) may result in injury or illness, physical or mental impairments, or even death. I understand that FORGED cannot be held responsible for any injuries or conditions caused by the actions of other athletes or participants. I also understand that injuries may result from my own failure to follow safety procedures or techniques made known to me by the coaching staff, athletic training staff, and/or otherwise known to me from any other source, including but not limited to medical personnel.
            </p>
            <p className="text-[13px] text-light leading-[1.8]">
              I voluntarily assume all risks associated with participation and release FORGED, its founders, staff, coaches, experts, and venue partners from any and all liability arising from participation in this event.
            </p>
            <div className="border-t border-gold/10 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Participant Name",
                "Participant Signature",
                "Parent / Guardian Name",
                "Parent / Guardian Signature",
                "Date",
              ].map((label) => (
                <div key={label} className={label === "Date" ? "md:col-span-2" : ""}>
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-m mb-2">{label}</p>
                  <div className="border-b border-gold/20 h-8" />
                </div>
              ))}
            </div>
            <p className="text-[11px] text-muted leading-[1.6] pt-2">
              A signed copy of this waiver will be required at check-in. You may also email a signed copy in advance to{" "}
              <a href="mailto:info@beforged.co" className="text-gold-m hover:underline">info@beforged.co</a>.
            </p>
          </div>
        </FadeUp>
      </div>

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

      {/* AZ CTA */}
      <div className="px-6 md:px-10 py-20 text-center">
        <FadeUp>
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5">
            Also Coming Up
          </p>
          <h2 className="font-display text-[clamp(38px,6vw,72px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
            JOIN US IN
            <br />
            ARIZONA FIRST.
          </h2>
          <p className="font-serif italic text-[clamp(15px,2vw,18px)] text-light max-w-[500px] mx-auto mb-10 leading-[1.6]">
            The inaugural FORGED summit is November 26–29, 2026 in Mesa, AZ — indoor volleyball. Registration is open now.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/register/athlete"
              className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-3.5 hover:bg-gold-m transition-colors"
            >
              Register for AZ Indoor
            </a>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
