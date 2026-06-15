"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/register", label: "Register" },
  { href: "/partner", label: "Partner" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-[3px] left-0 right-0 z-[100] px-6 md:px-10 py-5 flex items-center justify-between transition-colors ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-gold/10"
          : "bg-gradient-to-b from-black/95 to-transparent"
      }`}
    >
      <Link href="/" className="flex items-center">
        <Image src="/forged-logo.png" alt="FORGED" width={140} height={44} className="h-11 w-auto" priority />
      </Link>

      <div className="hidden md:flex items-center gap-7">
        {links.slice(1).map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-light hover:text-gold transition-colors"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/register"
          className="text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-6 py-2.5 hover:bg-gold-m transition-colors"
        >
          Apply Now
        </Link>
      </div>

      <button
        className="md:hidden text-cream"
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? (
            <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" />
          ) : (
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-gold/10 flex flex-col md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[11px] font-semibold tracking-[0.18em] uppercase text-light hover:text-gold transition-colors px-6 py-4 border-t border-gold/5"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
