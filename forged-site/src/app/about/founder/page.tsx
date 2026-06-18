import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Founder — FORGED",
  description:
    "Pri Piantadosi-Lima — Former professional athlete, Division I Head Coach, USAV Club Coach of the Year, and founder of FORGED.",
};

export default function Founder() {
  return (
    <>
      {/* HERO */}
      <section className="hero-anim min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Founder — FORGED",
  description:
    "Pri Piantadosi-Lima — Former professional athlete, Division I Head Coach, USAV Club Coach of the Year, and founder of FORGED.",
};

export default function Founder() {
  return (
    <>
      {/* HERO */}
      <section className="hero-anim min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          Founder
        </p>
        <h1 className="font-display text-[clamp(48px,9vw,110px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          PRI
          <br />
          <span className="gold-gradient-text">PIANTADOSI-LIMA.</span>
        </h1>
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted relative z-[1]">
          Founder &nbsp;·&nbsp; FORGED
        </p>
      </section>

      <div className="gold-rule" />

      {/* BIO */}
      <FadeUp className="max-w-[860px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">The Story</p>
        <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-10">
          THE SHORTCUT
          <br />
          <span className="gold-gradient-text">SHE NEVER HAD.</span>
        </h2>

        <div className="font-serif italic text-[clamp(18px,2.5vw,22px)] text-light leading-[1.7] space-y-6">
          <p>
            Pri Piantadosi-Lima navigated the early stages of her elite sport career largely on her own. No one handed her a roadmap. No mentor sat her down and explained what the best athletes in the world were actually doing to get there. So she did what driven people do — she watched, she researched, she tried to reverse-engineer the habits and routines of Olympians from whatever she could find, and she quietly tried to replicate them.
          </p>
          <p>
            Slowly, throughout her career, she started to discover the tools that actually move the needle: strength coaches, mental performance work, sports psychology, nutrition, life coaches, mentors who had been where she was trying to go. And as finances allowed — one piece at a time — she built her own support system from scratch. She paid for it herself. She sought it out herself. She assembled a team around herself at every stop of her career, because no one was going to do it for her.
          </p>
          <p>
            Eventually, she got there. And when she did, she looked back at how long it took — and how much harder it was than it had to be — and she knew exactly what she wanted to build next.
          </p>
          <p>
            As a former professional athlete, Division I Head Coach, USAV Club Coach of the Year, and USAV National Team Development Program Coach, Pri has seen elite sport from every angle. She knows what it takes. She also knows exactly what&rsquo;s missing for most athletes and coaches trying to get there — because she lived it.
          </p>
          <p>
            FORGED is her answer to that gap. Not a weekend of reps and exposure — a development ecosystem that hands athletes and coaches the team, the tools, and the community she had to spend years building on her own. Everything she figured out the hard way, given to the next generation from day one.
          </p>
          <p>
            She built FORGED because the shortcut she never had should exist for everyone.
          </p>
        </div>
      </FadeUp>

      {/* CREDENTIALS */}
      <div className="bg-dark border-y border-gold/10 py-20 px-6 md:px-10">
        <FadeUp className="max-w-[860px] mx-auto">
          <p className="section-eyebrow">Credentials</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-gold/[0.08] mt-8">
            {[
              { label: "Background", value: "Former Professional Athlete" },
              { label: "Coaching", value: "Former Division I Head Coach" },
              { label: "Recognition", value: "USAV Club Coach of the Year" },
              { label: "National Program", value: "USAV NTDP Coach" },
              { label: "Inaugural Sport", value: "Indoor Volleyball — expanding across all sports" },
              { label: "Founded", value: "FORGED — inaugural summit, Phoenix AZ, Nov 2026" },
            ].map((item) => (
              <div key={item.label} className="bg-dark p-7 hover:bg-dark2 transition-colors">
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold-m mb-1">{item.label}</div>
                <div className="text-[14px] text-cream font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* QUOTE */}
      <FadeUp className="px-6 md:px-10 py-24 text-center">
        <div className="font-serif text-[80px] text-gold-d leading-[0.5] mb-6">&ldquo;</div>
        <p className="font-serif italic text-[clamp(22px,3.5vw,38px)] text-cream max-w-[780px] mx-auto mb-6 leading-[1.45]">
          I built FORGED because I navigated elite sport alone. FORGED is the shortcut I never had — given to everyone.
        </p>
        <p className="text-[11px] tracking-[0.15em] uppercase text-gold-m">
          Pri Piantadosi-Lima &nbsp;·&nbsp; Founder, FORGED
        </p>
      </FadeUp>
    </>
  );
}

              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          Founder
        </p>
        <h1 className="font-display text-[clamp(48px,9vw,110px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          PRI
          <br />
          <span className="gold-gradient-text">PIANTADOSI-LIMA.</span>
        </h1>
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted relative z-[1]">
          Founder &nbsp;·&nbsp; FORGED
        </p>
      </section>

      <div className="gold-rule" />

      {/* BIO */}
      <FadeUp className="max-w-[860px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">The Story</p>
        <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-10">
          THE SHORTCUT
          <br />
          <span className="gold-gradient-text">SHE NEVER HAD.</span>
        </h2>

        <div className="font-serif italic text-[clamp(18px,2.5vw,22px)] text-light leading-[1.7] space-y-6">
          <p>
            Pri Piantadosi-Lima navigated the early stages of her elite sport career largely on her own. No one handed her a roadmap. No mentor sat her down and explained what the best athletes in the world were actually doing to get there. So she did what driven people do — she watched, she researched, she tried to reverse-engineer the habits and routines of Olympians from whatever she could find, and she quietly tried to replicate them.
          </p>
          <p>
            Slowly, throughout her career, she started to discover the tools that actually move the needle: strength coaches, mental performance work, sports psychology, nutrition, life coaches, mentors who had been where she was trying to go. And as finances allowed — one piece at a time — she built her own support system from scratch. She paid for it herself. She sought it out herself. She assembled a team around herself at every stop of her career, because no one was going to do it for her.
          </p>
          <p>
            Eventually, she got there. And when she did, she looked back at how long it took — and how much harder it was than it had to be — and she knew exactly what she wanted to build next.
          </p>
          <p>
            As a former professional athlete, Division I Head Coach, USAV Club Coach of the Year, and USAV National Team Development Program Coach, Pri has seen elite sport from every angle. She knows what it takes. She also knows exactly what&rsquo;s missing for most athletes and coaches trying to get there — because she lived it.
          </p>
          <p>
            FORGED is her answer to that gap. Not a weekend of reps and exposure — a development ecosystem that hands athletes and coaches the team, the tools, and the community she had to spend years building on her own. Everything she figured out the hard way, given to the next generation from day one.
          </p>
          <p>
            She built FORGED because the shortcut she never had should exist for everyone.
          </p>
        </div>
      </FadeUp>

      {/* CREDENTIALS */}
      <div className="bg-dark border-y border-gold/10 py-20 px-6 md:px-10">
        <FadeUp className="max-w-[860px] mx-auto">
          <p className="section-eyebrow">Credentials</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-gold/[0.08] mt-8">
            {[
              { label: "Background", value: "Former Professional Athlete" },
              { label: "Coaching", value: "Former Division I Head Coach" },
              { label: "Recognition", value: "USAV Club Coach of the Year" },
              { label: "National Program", value: "USAV NTDP Coach" },
              { label: "Focus", value: "Indoor Volleyball — expanding across all sports" },
              { label: "Founded", value: "FORGED — inaugural summit, Phoenix AZ, Nov 2026" },
            ].map((item) => (
              <div key={item.label} className="bg-dark p-7 hover:bg-dark2 transition-colors">
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold-m mb-1">{item.label}</div>
                <div className="text-[14px] text-cream font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* QUOTE */}
      <FadeUp className="px-6 md:px-10 py-24 text-center">
        <div className="font-serif text-[80px] text-gold-d leading-[0.5] mb-6">&ldquo;</div>
        <p className="font-serif italic text-[clamp(22px,3.5vw,38px)] text-cream max-w-[780px] mx-auto mb-6 leading-[1.45]">
          I built FORGED because I navigated elite sport alone. FORGED is the shortcut I never had — given to everyone.
        </p>
        <p className="text-[11px] tracking-[0.15em] uppercase text-gold-m">
          Pri Piantadosi-Lima &nbsp;·&nbsp; Founder, FORGED
        </p>
      </FadeUp>
    </>
  );
}
