import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcasts — FORGED",
  description:
    "FORGED podcasts: The Sessions and Coach Unscripted. Honest conversations with coaches and experts about development and the human side of coaching.",
};

const podcasts = [
  {
    tag: "The Sessions",
    title: "Where Coaches and Experts Talk.",
    desc: "Each episode of The Sessions brings coaches and experts together around a specific subject — technique, mental performance, recruiting, team culture, athlete development, and more. These aren't surface-level conversations. They're the kind that happen when serious people stop performing and start actually talking. We also go inside the summit itself: success stories from FORGED alumni, breakthroughs on the court, athletes who showed up one way and left another. If you're committed to development — yours or the athletes you serve — The Sessions is the room you want to be in.",
  },
  {
    tag: "Coach Unscripted",
    title: "The Human Behind the Whistle.",
    desc: "Coaching is more than drills, film sessions, and game plans. It's relationships that keep you up at night. It's doubting yourself in the middle of a season. It's giving everything to a group of athletes and wondering if it's enough. Nobody talks about that part — and Coach Unscripted exists because they should. Raw, honest conversations with coaches about what it actually takes, what it costs, what keeps them coming back, and who they are when the whistle isn't around their neck. Every coach carries more than their athletes know. This is where we say that out loud.",
  },
];

export default function Podcasts() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center px-6 pt-36 pb-14">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5">FORGED Podcasts · Coming Soon</p>
        <h1 className="font-display text-[clamp(52px,10vw,120px)] leading-[0.95] tracking-[0.04em] text-cream mb-6">
          THE <span className="gold-gradient-text">CONVERSATION.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,2.6vw,24px)] text-light max-w-[640px] leading-[1.6]">
          Two shows. One standard: serious people, honest conversations.
        </p>
      </section>
      <FadeUp className="max-w-[1000px] mx-auto px-6 md:px-10 pb-24">
        <div className="flex flex-col gap-[2px] bg-gold/[0.06]">
          {podcasts.map((pod) => (
            <FadeUp key={pod.tag} className="bg-[#0a0a0a] p-8 md:p-12">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-m mb-3">{pod.tag}</p>
              <p className="font-display text-[clamp(22px,3vw,36px)] tracking-[0.04em] leading-[1] text-cream mb-5">{pod.title}</p>
              <p className="text-[14px] text-light leading-[1.8] max-w-[680px]">{pod.desc}</p>
            </FadeUp>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/community/online#notify" className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-3.5 hover:bg-gold-m transition-colors">
            Get Notified
          </Link>
        </div>
      </FadeUp>
    </>
  );
}
