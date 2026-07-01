"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";

const faqs: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: "Getting There",
    items: [
      {
        q: "Which airport should I fly into?",
        a: "Phoenix Sky Harbor International Airport (PHX) is the nearest major airport to the Arizona Athletic Grounds in Mesa, AZ.",
      },
      {
        q: "Which hotel should I stay at?",
        a: "We're finalizing our hotel partner list with preferred group rates near the venue. Check back soon — we'll have recommended options posted here.",
      },
      {
        q: "What's the parking situation at the venue?",
        a: "Parking at Arizona Athletic Grounds (AAG) is free Monday through Thursday, and on Fridays until 3:00 PM. Paid parking is enforced Friday after 3:00 PM and all weekend. Advance purchase is ~$5/day at ParkAAG.com; on-site purchase is $8/day via QR code or kiosk. We recommend purchasing in advance on the weekend days.",
      },
    ],
  },
  {
    category: "What to Bring",
    items: [
      {
        q: "What should athletes bring?",
        a: "Pack your volleyball bag with kneepads, volleyball shoes, a water bottle, and snacks. Also bring a pen or pencil — we'll have moments throughout the summit to journal and capture what you're learning. Everything else will be provided or available on-site.",
      },
    ],
  },
  {
    category: "Who It's For",
    items: [
      {
        q: "What skill level is this for?",
        a: "FORGED is designed for intermediate to advanced players competing at the high school or club level. This is a development experience — athletes should come ready to train, learn, and be challenged.",
      },
      {
        q: "What age groups and grad years can attend?",
        a: "We welcome 8th graders through high school seniors — graduating classes 2026 through 2030 and beyond. If you're not sure whether your grad year qualifies, email us at director@optimumbeach.us.",
      },
      {
        q: "Can a coach bring their whole team?",
        a: "Yes — full teams are welcome. Email us at director@optimumbeach.us to coordinate group registration and make sure everyone is placed correctly.",
      },
    ],
  },
  {
    category: "Parents & Family",
    items: [
      {
        q: "Can parents attend and watch sessions?",
        a: "Yes! Parents are welcome to attend and observe all sessions. A small number of intimate expert sessions may have limited access — we'll communicate those in advance. Court sessions are always open.",
      },
      {
        q: "Are meals included in the price?",
        a: "Meals are not included in registration. There are plenty of restaurants and food options near Arizona Athletic Grounds, and Uber Eats is available in the area. We'll share a list of nearby spots closer to the event.",
      },
      {
        q: "Is there supervision for underage athletes attending without a parent?",
        a: "More info coming soon. If you have a specific situation, email us at director@optimumbeach.us and we'll work with you.",
      },
    ],
  },
  {
    category: "Registration & Payment",
    items: [
      {
        q: "Can I pay in installments?",
        a: "Yes. We offer a deposit to secure your spot, with the remaining balance due by September 15, 2026. Payment details are available at checkout.",
      },
      {
        q: "What is the cancellation and refund policy?",
        a: "If you cancel 2 or more months before the event, a $75 processing fee applies and the remainder is refunded. If you cancel within 1 month of the event, only a partial refund is available. Full refund terms will be confirmed upon registration — email director@optimumbeach.us with any questions.",
      },
      {
        q: "Do you offer a sibling discount?",
        a: "Yes — siblings receive 15% off when registering together. Email us at director@optimumbeach.us and we'll send you a special registration link to purchase both spots.",
      },
      {
        q: "Do you offer a military discount?",
        a: "We don't currently offer a military discount, but we appreciate your service and hope to be able to in the future.",
      },
      {
        q: "Is there a team rate for multiple athletes from the same club?",
        a: "Yes, team rates are available. Details coming soon — email director@optimumbeach.us to get on the list and we'll reach out when group pricing is finalized.",
      },
    ],
  },
  {
    category: "The Experience",
    items: [
      {
        q: "How many athletes will be at the summit?",
        a: "We're capping Year 1 at 120 athletes. This is intentional — FORGED is built around quality, access, and real connection. Small enough that everyone matters, large enough to build something together.",
      },
      {
        q: "What's the coach-to-athlete ratio on courts?",
        a: "We'll have at least 2 coaches per court, plus court helpers — so you'll have real eyes on your game throughout every training block.",
      },
      {
        q: "Will I get individual feedback, or is it all group training?",
        a: "You'll train in small groups on the courts, and coaches give individual feedback throughout. On Sunday, athletes can also sign up in advance for 1:1 sessions with our performance experts — FirstBeat (physiological data review) and Ver (vision assessment) — during the Queen/King of the Beach tournament.",
      },
      {
        q: "Can I video record my sessions?",
        a: "Expert conference sessions are not for personal recording — FORGED will capture all of them and make the recordings available in our online community so you can revisit everything you learned. The final day (Sunday) is our Queen/King of the Beach tournament — you're welcome to record highlights from competition for your personal use and social media.",
      },
      {
        q: "Will there be athletic trainers on site?",
        a: "Yes. We'll have a certified athletic trainer on site throughout the event.",
      },
      {
        q: "What is the FORGED online community?",
        a: "Every FORGED summit participant gets access to our online community — where all expert session recordings, resources, and summit connections live after the event. What you learn here doesn't disappear when you go home.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-gold/10 transition-colors ${open ? "bg-dark2" : ""}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
      >
        <span className="font-display text-[15px] tracking-[0.04em] text-cream group-hover:text-gold transition-colors leading-snug">
          {q}
        </span>
        <span className={`flex-shrink-0 mt-0.5 text-gold transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-[13px] text-light leading-[1.7] max-w-[680px]">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      {/* HERO */}
      <section className="hero-anim min-h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          AZ — Volleyball &nbsp;·&nbsp; Phoenix, Nov 26–29, 2026
        </p>
        <h1 className="font-display text-[clamp(52px,10vw,110px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          FREQUENTLY
          <br />
          <span className="gold-gradient-text">ASKED.</span>
        </h1>
        <p className="font-serif italic text-[clamp(16px,2.5vw,22px)] text-light max-w-[540px] mx-auto relative z-[1] leading-[1.5]">
          Everything you need to know before you arrive.
        </p>
      </section>

      <div className="gold-rule" />

      {/* FAQ SECTIONS */}
      <div className="max-w-[860px] mx-auto px-6 md:px-10 py-24 flex flex-col gap-16">
        {faqs.map((section) => (
          <FadeUp key={section.category}>
            <p className="section-eyebrow mb-6">{section.category}</p>
            <div className="border-t border-gold/10">
              {section.items.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </FadeUp>
        ))}

        {/* Still have questions */}
        <FadeUp className="bg-dark border border-gold/15 p-10 text-center">
          <p className="font-display text-[clamp(24px,4vw,40px)] tracking-[0.04em] text-cream mb-3">
            Still have a question?
          </p>
          <p className="text-[13px] text-light leading-[1.7] mb-8 max-w-[440px] mx-auto">
            We're happy to help. Reach out directly and we'll get back to you.
          </p>
          <a
            href="mailto:director@optimumbeach.us"
            className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-3.5 hover:bg-gold-m transition-colors"
          >
            Email Us
          </a>
        </FadeUp>
      </div>

      {/* CTA */}
      <div className="bg-dark border-t border-gold/10 py-20 px-6 md:px-10 text-center">
        <FadeUp>
          <p className="font-serif italic text-[clamp(16px,2.5vw,22px)] text-light max-w-[540px] mx-auto mb-10 leading-[1.6]">
            Ready? Secure your spot before early bird pricing closes.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/register/athlete" className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-7 py-3.5 hover:bg-gold-m transition-colors">
              Athlete — Early Bird $757
            </Link>
            <Link href="/register/coach" className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-7 py-3.5 hover:border-gold transition-colors">
              Coach — $250
            </Link>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
