"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const aboutDropdown = [
  { href: "/about", label: "About FORGED" },
  { href: "/about/founder", label: "Founder Bio" },
  { href: "/about/mission", label: "Our Mission" },
  { href: "/about/team", label: "Our Team" },
];

const registerDropdown = [
  { href: "/register/athlete", label: "Athletes" },
  { href: "/register/coach", label: "Coaches" },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform ${open ? "rotate-180" : ""}`}>
    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileRegisterOpen, setMobileRegisterOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const registerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false);
      if (registerRef.current && !registerRef.current.contains(e.target as Node)) setRegisterOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownClass = "absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-black border border-gold/20 min-w-[180px] z-[200]";
  const dropdownLinkClass = "block text-[11px] font-semibold tracking-[0.18em] uppercase text-light hover:text-gold hover:bg-dark transition-colors px-5 py-3.5 border-b border-gold/10 last:border-0";
  const navLinkClass = "text-[11px] font-semibold tracking-[0.18em] uppercase text-light hover:text-gold transition-colors";
  const dropdownBtnClass = "text-[11px] font-semibold tracking-[0.18em] uppercase text-light hover:text-gold transition-colors flex items-center gap-1.5";

  return (
    <nav className={`fixed top-[3px] left-0 right-0 z-[100] px-6 md:px-10 py-5 flex items-center justify-between transition-colors ${scrolled ? "bg-black/95 backdrop-blur-md border-b border-gold/10" : "bg-gradient-to-b from-black/95 to-transparent"}`}>
      <Link href="/" className="flex items-center">
        <Image src="/forged-logo.png" alt="FORGED" width={140} height={44} className="h-11 w-auto" priority />
      </Link>

      <div className="hidden md:flex items-center gap-7">
        <Link href="/" className={navLinkClass}>Home</Link>

        {/* About dropdown */}
        <div ref={aboutRef} className="relative">
          <button className={dropdownBtnClass} onClick={() => setAboutOpen((o) => !o)}>
            About <ChevronIcon open={aboutOpen} />
          </button>
          {aboutOpen && (
            <div className={dropdownClass}>
              {aboutDropdown.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setAboutOpen(false)} className={dropdownLinkClass}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/events" className={navLinkClass}>Events</Link>

        {/* Register dropdown */}
        <div ref={registerRef} className="relative">
          <button className={dropdownBtnClass} onClick={() => setRegisterOpen((o) => !o)}>
            Register <ChevronIcon open={registerOpen} />
          </button>
          {registerOpen && (
            <div className={dropdownClass}>
              {registerDropdown.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setRegisterOpen(false)} className={dropdownLinkClass}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/partner" className={navLinkClass}>Partner</Link>
        <Link href="/contact" className={navLinkClass}>Contact</Link>
        <Link href="/register/athlete" className="text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-6 py-2.5 hover:bg-gold-m transition-colors">
          Register
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden text-cream" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" /> : <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />}
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-gold/10 flex flex-col md:hidden">
          <Link href="/" onClick={() => setOpen(false)} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-light hover:text-gold transition-colors px-6 py-4 border-t border-gold/5">Home</Link>

          {/* Mobile About */}
          <button onClick={() => setMobileAboutOpen((o) => !o)} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-light hover:text-gold transition-colors px-6 py-4 border-t border-gold/5 flex items-center justify-between">
            About <ChevronIcon open={mobileAboutOpen} />
          </button>
          {mobileAboutOpen && aboutDropdown.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => { setOpen(false); setMobileAboutOpen(false); }} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold transition-colors pl-10 pr-6 py-3.5 border-t border-gold/5 bg-dark">
              {item.label}
            </Link>
          ))}

          <Link href="/events" onClick={() => setOpen(false)} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-light hover:text-gold transition-colors px-6 py-4 border-t border-gold/5">Events</Link>

          {/* Mobile Register */}
          <button onClick={() => setMobileRegisterOpen((o) => !o)} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-light hover:text-gold transition-colors px-6 py-4 border-t border-gold/5 flex items-center justify-between">
            Register <ChevronIcon open={mobileRegisterOpen} />
          </button>
          {mobileRegisterOpen && registerDropdown.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => { setOpen(false); setMobileRegisterOpen(false); }} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold transition-colors pl-10 pr-6 py-3.5 border-t border-gold/5 bg-dark">
              {item.label}
            </Link>
          ))}

          <Link href="/partner" onClick={() => setOpen(false)} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-light hover:text-gold transition-colors px-6 py-4 border-t border-gold/5">Partner</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-light hover:text-gold transition-colors px-6 py-4 border-t border-gold/5">Contact</Link>
        </div>
      )}
    </nav>
  );
}
