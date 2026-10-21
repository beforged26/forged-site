import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, isLive, formatDate } from "@/lib/journal";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.filter(isLive).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) return {};
  return { title: `${p.title} — The FORGED Huddle`, description: p.summary };
}

export default function Post({ params }: { params: { slug: string } }) {
  const p = posts.find((x) => x.slug === params.slug && isLive(x));
  if (!p) notFound();
  return (
    <article className="px-6 md:px-10 pt-36 pb-24">
      <div className="max-w-[720px] mx-auto">
        <Link href="/community/huddle" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-m hover:text-gold transition-colors">
          ← The Huddle
        </Link>
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mt-8 mb-3">
          {p.pillar} · Issue {p.issue} · {formatDate(p.date)}
        </p>
        <h1 className="font-display text-[clamp(40px,7vw,76px)] leading-[0.98] tracking-[0.03em] text-cream mb-10">{p.title}</h1>
        <div className="space-y-6">
          {p.body!.map((para, i) =>
            para.startsWith("## ") ? (
              <h2 key={i} className="font-display text-[30px] tracking-[0.04em] text-gold pt-4">{para.slice(3)}</h2>
            ) : (
              <p key={i} className="font-serif text-[20px] leading-[1.7] text-light">{para}</p>
            )
          )}
        </div>
        <div className="mt-14 pt-8 border-t border-gold/20">
          <p className="text-[13px] text-muted mb-4">By Pri Piantadosi-Lima, Founder of FORGED</p>
          <Link href="/register/athlete" className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-3.5 hover:bg-gold-m transition-colors">
            Register for FORGED
          </Link>
        </div>
      </div>
    </article>
  );
}
