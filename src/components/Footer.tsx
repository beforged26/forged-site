import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* HOST BANNER */}
      <div className="border-t border-gold/20 bg-dark px-6 md:px-10 py-10 text-center">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-3">
          Bring FORGED to Your Community
        </p>
        <p className="font-display text-[clamp(26px,4vw,48px)] tracking-[0.04em] leading-[1] text-cream mb-4">
          WANT TO HOST A FORGED SUMMIT?
        </p>
        <p className="font-serif italic text-[clamp(14px,2vw,18px)] text-light max-w-[540px] mx-auto mb-7 leading-[1.6]">
          We&apos;re accepting facility and club inquiries across all sports. If you have the space and the community, let&apos;s build something together.
        </p>
        <Link
          href="/contact"
          className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-3.5 hover:bg-gold-m transition-colors"
        >
          Contact Us
        </Link>
      </div>

      <footer className="border-t border-gold/10 px-6 md:px-10 py-10 flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-2.5">
        <Image src="/forged-logo.png" alt="FORGED" width={120} height={36} className="h-9 w-auto" />
      </div>
      <div className="flex gap-6 flex-wrap">
        <Link href="/" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">Home</Link>
        <Link href="/about" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">About</Link>
        <Link href="/events" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">Events</Link>
        <Link href="/register" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">Register</Link>
        <Link href="/community" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">Community</Link>
        <Link href="/partner" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">Partner</Link>
        <Link href="/founding-family" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">Founding Family</Link>
        <Link href="/contact" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">Contact</Link>
        <a href="https://instagram.com/beforgedco" target="_blank" rel="noreferrer" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">Instagram</a>
        <a href="https://tiktok.com/@beforged.co" target="_blank" rel="noreferrer" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">TikTok</a>
      </div>
      <p className="text-[11px] text-muted/50 tracking-[0.08em]">
        © 2026 FORGED. All rights reserved. &nbsp;·&nbsp; Thanksgiving Weekend 2026 &nbsp;·&nbsp; Mesa, Arizona &nbsp;·&nbsp; beforged.co
      </p>
    </footer>
    </>
  );
}
