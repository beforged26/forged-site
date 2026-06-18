
import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Our Team — FORGED",
  description: "Meet the team behind FORGED — the people building the movement.",
};

// Add team members here
const team = [
  {
    name: "Pri Piantadosi-Lima",
    role: "Founder & Director",
    bio: "Former professional athlete, Division I Head Coach, USAV Club Coach of the Year, and USAV NTDP Coach & Scout. Pri built FORGED to give every athlete and coach the shortcut she never had.",
    website: "https://beforged.co",
  },
  // Add more team members below:
  // {
  //   name: "Name",
  //   role: "Role",
  //   bio: "Short bio here.",
  //   website: "",
  // },
];

export default function Team() {
  return (
    <>
      {/* HERO */}
      <section className="hero-anim min-h-[55vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          Our Team
        </p>
        <h1 className="font-display text-[clamp(52px,10vw,120px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          THE PEOPLE
          <br />
          <span className="gold-gradient-text">BEHIND FORGED.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[600px] mx-auto relative z-[1] leading-[1.5]">
          A small, committed team building something that lasts.
        </p>
      </section>

      <div className="gold-rule" />

      {/* TEAM GRID */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <FadeUp key={member.name} className="bg-dark p-9 border-t-2 border-transparent hover:border-gold-m hover:bg-dark2 transition-colors flex flex-col gap-4">
              {/* Headshot placeholder */}
              <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-2">
                <span className="font-display text-2xl text-gold/40">{member.name.charAt(0)}</span>
              </div>
              <div>
                <div className="font-display text-xl tracking-[0.08em] text-cream mb-1">{member.name}</div>
                <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-m mb-3">{member.role}</div>
                <p className="text-[13px] text-light leading-[1.6]">{member.bio}</p>
              </div>
              {member.website && (
                <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gold hover:text-gold-m transition-colors mt-auto">
                  Website →
                </a>
              )}
            </FadeUp>
          ))}
        </div>
      </FadeUp>
    </>
  );
}
