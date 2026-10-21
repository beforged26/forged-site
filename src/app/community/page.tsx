import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FORGED Community",
  description:
    "The FORGED Community is where the work continues after the summit ends: weekly perspectives, podcasts and an online community for athletes, coaches and families.",
};

const tabs = [
  { href: "/community/perspectives", tag: "Weekly", title: "PERSPECTIVES", desc: "Our thoughts and opinions on athlete development, coaching, wellness and access. A new piece every week, written for athletes, coaches and parents.", cta: "Read Perspectives" },
  { href: "/community/online", tag: "Coming Soon", title: "ONLINE COMMUNITY", desc: "A year-round home for athletes and coaches: sport-specific groups, women's spaces, expert calls and accountability that lasts beyond the summit.", cta: "Learn More" },
  { href: "/community/podcasts", tag: "Coming Soon", title: "PODCASTS", desc: "The Sessions and Coach Unscripted: honest conversations with coaches and experts about development and the human side of coaching.", cta: "Hear What's Coming" },
];

export default function Community() {
  return (
    <>
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5">FORGED Community</p>
        <h1 className="font-display text-[clamp(52px,10vw,120px)] leading-[0.95] tracking-[0.04em] text-cream mb-6">
          THE WORK
          <br />
          <span className="gold-gradient-text">DOESN&apos;T STOP.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,2.8vw,24px)] text-light max-w-[640px] leading-[1.6]">
          The summit is four days. The community is the other 361: writing,
          conversation and connection for athletes, coaches and the families
          behind them.
        </p>
      </section>
      <div className="gold-rule" />
      <section className="max-w-[1000px] mx-auto px-6 md:px-10 py-20">
        <div className="flex flex-col gap-[2px] bg-gold/[0.06]">
          {tabs.map((t) => (
            <FadeUp key={t.href} className="bg-[#0a0a0a] p-8 md:p-12">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-m mb-3">{t.tag}</p>
              <p className="font-display text-[clamp(30px,4.5vw,52px)] tracking-[0.04em] leading-[1] text-cream mb-4">{t.title}</p>
              <p className="text-[14px] text-light leading-[1.8] max-w-[680px] mb-6">{t.desc}</p>
              <Link href={t.href} className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-7 py-3 hover:border-gold transition-colors">{t.cta}</Link>
            </FadeUp>
          ))}
        </div>
      </section>
      <div className="gold-rule" />
      <div className="px-6 md:px-10 py-20 text-center">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5">In the meantime</p>
        <h2 className="font-display text-[clamp(38px,6vw,72px)] tracking-[0.04em] leading-[0.95] text-cream mb-8">COME TO THE SUMMIT.</h2>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/register/athlete" className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-3.5 hover:bg-gold-m transition-colors">Register as Athlete</Link>
          <Link href="/register/coach" className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-8 py-3.5 hover:border-gold transition-colors">Register as Coach</Link>
        </div>
      </div>
    </>
  );
}
