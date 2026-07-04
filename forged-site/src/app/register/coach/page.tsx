import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import CoachInterestForm from "@/components/CoachInterestForm";

export const metadata: Metadata = {
  title: "Coach Registration — FORGED",
  description:
    "Register as a coach for FORGED 2026. Phoenix, AZ — November 26–29, 2026. Coaches-only sessions, peer development, and a community built for the people who develop athletes.",
};

const included = [
  {
    title: "Full Athlete Session Access",
    desc: "Experience everything the athletes go through — training, expert sessions, mental performance, nutrition. See the work from both sides and walk away with programming you can bring back to your team.",
  },
  {
    title: "Coaches-Only Huddle Sessions",
    desc: "Intimate, unfiltered Q&A with working elite coaches at the event. The questions you never get to ask in a clinic. The conversations that don't happen anywhere else. Bring your hardest problems.",
  },
  {
    title: "Classroom Sessions — Coaches Only",
    desc: "Purpose-built sessions on culture building, sport performance, athlete development, and leadership. Not another certification course — real frameworks from coaches who are doing the work right now.",
  },
  {
    title: "Coaching Science & Performance",
    desc: "Evidence-based approaches to team culture, athlete motivation, and high-performance environments. Learn how to build a program that develops people, not just players.",
  },
  {
    title: "Peer Network",
    desc: "Connect with coaches from across the country who are at the same level and same mission as you. The community that forms at FORGED Year 1 will be one of the most valuable networks in youth sports.",
  },
  {
    title: "Mental Performance for Coaches",
    desc: "Coaches carry the mental load of an entire team. Learn tools for managing pressure, building resilience in your athletes, and protecting your own well-being in the process.",
  },
  {
    title: "FORGED Swag Bag",
    desc: "Gear built for coaches who show up. You earned it.",
  },
  {
    title: "All Meals Included",
    desc: "From arrival to departure — every meal covered. No extra costs, no logistics. Just focus on why you came.",
  },
  {
    title: "Founding Coach Community",
    desc: "The coaches who join FORGED Year 1 will shape what this community becomes. This isn't just a weekend — it's the beginning of a supportive network that grows alongside you, every year.",
  },
];

const STRIPE_URL = "https://buy.stripe.com/fZu7sL9NGe4V85Y7aP3AY0e";

export default function CoachRegister() {
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
          Coach Registration
        </p>
        <h1 className="font-display text-[clamp(56px,11vw,130px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          COACHES
          <br />
          <span className="gold-gradient-text">BELONG HERE.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[640px] mx-auto relative z-[1] leading-[1.5]">
          You give everything to develop your athletes. FORGED is the room
          where someone finally invests in developing you.
        </p>
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted mt-6 relative z-[1]">
          Phoenix, AZ &nbsp;·&nbsp; Nov 26–29, 2026 &nbsp;·&nbsp; Indoor Volleyball
        </p>
      </section>

      <div className="gold-rule" />

      {/* PRICING (reference) */}
      <FadeUp className="max-w-[900px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">Pricing</p>
        <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
          WEEKEND
          <br />
          REGISTRATION.
        </h2>

        <FadeUp className="bg-dark p-9 border-t-2 border-gold relative">
          <div className="absolute top-0 right-0 bg-gold text-black text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1">
            Full Weekend Access
          </div>
          <div className="font-display text-xl tracking-[0.1em] text-gold mb-1">Coach Registration</div>
          <div className="font-display text-[clamp(48px,6vw,80px)] tracking-[0.02em] text-cream leading-none mb-3">
            $250
          </div>
          <p className="text-[13px] text-light leading-[1.6] max-w-[560px]">
            Full weekend access — all athlete sessions, coaches-only huddles, classroom programming, meals, and gear. Everything included. Because the people who develop athletes deserve development too.
          </p>
        </FadeUp>

        {/* CLUB DEAL */}
        <FadeUp className="mt-[2px]">
          <div className="border border-gold/40 bg-dark p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0 font-display text-[clamp(36px,5vw,56px)] gold-gradient-text leading-none">4+1</div>
            <div>
              <div className="font-display text-xl tracking-[0.1em] text-gold mb-2">Bring Your Club — Get In Free</div>
              <p className="text-[13px] text-light leading-[1.6]">
                Get 4 athletes registered for FORGED — whether from your club or your own roster — and earn one complimentary entry to the full summit weekend. To claim it, email{" "}
                <a href="mailto:pri@beforged.co" className="text-gold-m hover:underline">pri@beforged.co</a>{" "}
                with your name and the 4 athlete registrations. We'll confirm your free entry within 48 hours.
              </p>
            </div>
          </div>
        </FadeUp>

          {/* 4-Day Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-gold/[0.08] mt-8">
            {[
              { day: "Day 1", date: "Thursday · Nov 26", label: "Arrival Day", desc: "Check in, meet the staff and other coaches. Evening intro session — informal, unscheduled, and exactly the kind of conversation you've been wanting to have." },
              { day: "Day 2", date: "Friday · Nov 27", label: "Training Day 1", desc: "Morning coaches huddle, then into court sessions and expert programming alongside the athletes. Coaches-only classroom session in the evening." },
              { day: "Day 3", date: "Saturday · Nov 28", label: "Training Day 2", desc: "Second full training day. More court time, more expert sessions, another evening coaches-only classroom deep dive. Dinner provided." },
              { day: "Day 4", date: "Sunday · Nov 29", label: "Competition Day", desc: "Athletes compete in Queen & King of the Beach. Coaches observe, give feedback, and connect before the weekend closes out." },
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
            Fill out your info below — we&apos;ll be in touch directly. After submitting, you&apos;ll complete payment to hold your spot.
          </p>
          <CoachInterestForm stripeUrl={STRIPE_URL} />
        </FadeUp>
      </div>

      {/* WAIVER */}
      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-16">
        <FadeUp>
          <p className="section-eyebrow mb-6">Assumption of Risk & Release of Liability</p>
          <div className="border border-gold/15 bg-dark p-8 md:p-10 space-y-5">
            <p className="text-[13px] text-light leading-[1.8]">
              I understand that participation in sport and athletic coaching activities requires a personal acceptance of the risk of injury. I acknowledge that those responsible for the conduct of the FORGED Summit take reasonable precautions to minimize such risk, but that some risk cannot be eliminated.
            </p>
            <p className="text-[13px] text-light leading-[1.8]">
              I understand that participation in the FORGED Summit (November 26–29, 2026, Phoenix, AZ) as a coach or staff member may result in injury or illness, physical or mental impairments, or even death. I understand that FORGED cannot be held responsible for any injuries or conditions caused by the actions of athletes, other coaches, or participants. I also understand that injuries may result from my own failure to follow safety procedures or techniques made known by the FORGED staff and/or otherwise known to me from any other source.
            </p>
            <p className="text-[13px] text-light leading-[1.8]">
              I voluntarily assume all risks associated with participation and release FORGED, its founders, staff, coaches, experts, and venue partners from any and all liability arising from participation in this event.
            </p>
            <div className="border-t border-gold/10 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Coach / Participant Name",
                "Signature",
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
              <a href="mailto:pri@beforged.co" className="text-gold-m hover:underline">pri@beforged.co</a>.
            </p>
          </div>
        </FadeUp>
      </div>

      {/* WHAT'S INCLUDED */}
      <div className="bg-dark border-y border-gold/10 py-24 px-6 md:px-10">
        <FadeUp className="max-w-[1100px] mx-auto">
          <p className="section-eyebrow">What's Included</p>
          <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
            BUILT FOR
            <br />
            <span className="gold-gradient-text">THE ONES WHO BUILD.</span>
          </h2>
          <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light max-w-[640px] leading-[1.6] mb-14">
            FORGED treats coaches as first-class participants — not volunteers, not chaperones. You're here to grow, connect, and find your people. Housing is the only thing not included.
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

      {/* SAMPLE SCHEDULE */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <FadeUp>
          <p className="section-eyebrow">Sample Schedule</p>
          <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
            YOUR 4
            <br />
            <span className="gold-gradient-text">DAYS.</span>
          </h2>
          <p className="font-serif italic text-[clamp(15px,2vw,19px)] text-light max-w-[600px] leading-[1.6] mb-14">
            Here&apos;s what a training day looks like for coaches. Times are approximate — final schedule sent before the event.
          </p>

          {/* Sample Training Day */}
          <div className="mb-4">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-m mb-6">Sample Training Day — Friday or Saturday</p>
          </div>
          <div className="border-l-2 border-gold/20 ml-3 flex flex-col gap-0">
            {[
              { time: "7:00 AM", title: "Coaches Early Access", desc: "Doors open early for coaches. Get on the court, walk the space, talk to staff before the day begins.", tag: "" },
              { time: "7:30 AM", title: "Coaches Breakfast", desc: "Breakfast provided for coaches, experts, and staff.", tag: "Coaches" },
              { time: "8:00 AM", title: "Morning Coaches Huddle", desc: "Intimate Q&A and discussion with the elite coaching staff. The real conversations — the ones you don't get at clinics.", tag: "Coaches Only" },
              { time: "8:30 AM", title: "Court Training Block 1", desc: "Observe and engage alongside athletes. Watch elite coaches work, take notes, ask questions between reps.", tag: "" },
              { time: "10:30 AM", title: "Expert Session", desc: "Mental performance, nutrition, or recruiting — attend all sessions with the athletes.", tag: "" },
              { time: "11:30 AM", title: "Expert Session", desc: "Second session of the morning block.", tag: "" },
              { time: "12:30 PM", title: "Lunch", desc: "Lunch provided for coaches. Time to connect with other coaches and staff.", tag: "Coaches" },
              { time: "1:30 PM", title: "Court Training Block 2", desc: "Afternoon training block. Coaches are welcome to interact with athletes and coaching staff.", tag: "" },
              { time: "3:30 PM", title: "Expert Sessions", desc: "Attend all remaining expert sessions alongside athletes.", tag: "" },
              { time: "5:30 PM", title: "Coaches-Only Classroom Session", desc: "Purpose-built session just for coaches — culture building, athlete development frameworks, high-performance environment design.", tag: "Coaches Only" },
              { time: "6:45 PM", title: "Coaches Dinner", desc: "Dinner provided. Informal. The best part of the day.", tag: "Coaches" },
            ].map((item, i) => (
              <div key={i} className="relative pl-8 pb-7">
                <div className="absolute -left-[5px] top-[6px] w-[8px] h-[8px] rounded-full bg-gold/50" />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-1 flex-wrap">
                  <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-m w-20 flex-shrink-0">{item.time}</span>
                  <span className="font-display text-[15px] tracking-[0.05em] text-cream">{item.title}</span>
                  {item.tag && (
                    <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-black bg-gold px-2 py-0.5 leading-none">{item.tag}</span>
                  )}
                </div>
                <p className="text-[12px] text-light leading-[1.6] sm:ml-24">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-muted italic mt-4 leading-[1.7]">
            * Schedule subject to change. &ldquo;Coaches Only&rdquo; items are exclusive to registered coaches — not open to athletes or observers.
          </p>
        </FadeUp>
      </div>

      {/* BOTTOM CTA */}
      <div className="px-6 md:px-10 py-24 text-center">
        <FadeUp>
          <h2 className="font-display text-[clamp(42px,7vw,90px)] tracking-[0.04em] leading-[0.95] text-cream mb-5">
            JOIN THE
            <br />
            <span className="gold-gradient-text">COMMUNITY.</span>
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="font-serif italic text-[clamp(16px,2vw,20px)] text-light max-w-[560px] mx-auto mb-10 leading-[1.6]">
            Be part of the founding coach community at FORGED. The relationships built here will last longer than the weekend.
          </p>
        </FadeUp>
        <FadeUp>
          <p className="text-sm text-muted tracking-[0.04em]">
            Questions? Email{" "}
            <a href="mailto:pri@beforged.co" className="text-gold-m no-underline hover:underline">
              pri@beforged.co
            </a>
          </p>
        </FadeUp>
      </div>
    </>
  );
}
