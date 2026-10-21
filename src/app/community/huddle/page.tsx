import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { posts, isLive, isVisible, formatDate } from "@/lib/journal";

export const metadata: Metadata = {
  title: "The Huddle — FORGED",
  description:
    "The FORGED Huddle: weekly writing on athlete development, coaching, wellness, mental performance and access, from founder Pri Piantadosi-Lima.",
};

export const revalidate = 86400;

export default function Huddle() {
  const ordered = posts.filter(isVisible).sort((a, b) => b.issue - a.issue);
  return (
    <>
      <section className="hero-anim flex flex-col items-center justify-center text-center px-6 pt-36 pb-14 relative overflow-hidden">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5">The FORGED Huddle</p>
        <h1 className="font-display text-[clamp(52px,10vw,120px)] leading-[0.95] tracking-[0.04em] text-cream mb-6">
          WHAT WE <span className="gold-gradient-text">BELIEVE.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,2.6vw,24px)] text-light max-w-[680px] leading-[1.5]">
          Weekly writing on athlete development, coaching, wellness, mental
          performance and access, for the athletes, coaches and parents in the
          FORGED community.
        </p>
      </section>

      <section className="px-6 md:px-10 pb-8">
        <div className="max-w-[820px] mx-auto border border-gold/20 bg-dark px-7 py-6">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-m mb-2">We&apos;re moving</p>
          <p className="text-[15px] text-light leading-[1.7]">
            We&apos;re moving our Substack and other posts into one place on our
            website. Every week we&apos;ll add something new, so check back, and
            bring along the parents and coaches in your circle.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[820px] mx-auto">
          {ordered.map((p) => {
            const live = isLive(p);
            const inner = (
              <div className={`py-7 border-b border-gold/10 ${live ? "group" : "opacity-60"}`}>
                <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
                  <span className="text-gold-m">{p.pillar}</span>
                  <span className="text-muted">{formatDate(p.date)}</span>
                </div>
                <h2 className={`font-display text-[clamp(26px,4vw,38px)] tracking-[0.03em] leading-[1.05] text-cream mb-2 ${live ? "group-hover:text-gold transition-colors" : ""}`}>
                  {p.title}
                </h2>
                <p className="text-[14px] text-light leading-[1.6]">{p.summary}</p>
              </div>
            );
            return (
              <FadeUp key={p.slug}>
                {live ? <Link href={`/community/huddle/${p.slug}`}>{inner}</Link> : inner}
              </FadeUp>
            );
          })}
        </div>
      </section>
    </>
  );
}
