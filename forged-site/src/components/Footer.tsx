import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 px-6 md:px-10 py-10 flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-2.5">
        <Image src="/forged-logo.png" alt="FORGED" width={120} height={36} className="h-9 w-auto" />
      </div>
      <div className="flex gap-6 flex-wrap">
        <Link href="/" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">Home</Link>
        <Link href="/about" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">About</Link>
        <Link href="/events" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">Events</Link>
        <Link href="/register" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">Register</Link>
        <Link href="/partner" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">Partner</Link>
        <Link href="/contact" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">Contact</Link>
        <a href="https://instagram.com/beforgedco" target="_blank" rel="noreferrer" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">Instagram</a>
        <a href="https://tiktok.com/@beforgedco" target="_blank" rel="noreferrer" className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">TikTok</a>
      </div>
      <p className="text-[11px] text-muted/50 tracking-[0.08em]">
        © 2026 FORGED. All rights reserved. &nbsp;·&nbsp; Thanksgiving Weekend 2026 &nbsp;·&nbsp; Phoenix, Arizona &nbsp;·&nbsp; beforged.co
      </p>
    </footer>
  );
}
