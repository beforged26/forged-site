import type { Metadata } from "next";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Our Team — FORGED",
  description: "Meet the team behind FORGED — the people building the movement.",
};

// Add team members here
const team: { name: string; role: string; bio: string[]; website?: string; photo?: string }[] = [
  {
    name: "Pri Piantadosi-Lima",
    role: "Founder & Director",
    bio: [
      "Former professional athlete, Division I Head Coach, USAV Club Coach of the Year, and USAV NTDP Coach. Pri built FORGED to give every athlete and coach the shortcut she never had.",
      "At the professional level, Pri has coached Kim Hildreth — a USA Beach Volleyball representative on the FIVB Beach Pro Tour — to medals including Gold at the BPT Futures Pompano Beach and multiple Elite 16 podiums, the highest level of international beach volleyball below the Olympics.",
    ],
    website: "https://beforged.co",
    photo: "/pri.jpg", // Place your headshot at forged-site/public/pri.jpg
  },
  {
    name: "Jenny McDowell",
    role: "Mentor & Strategic Advisor",
    photo: "https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/emoryu.sidearmsports.com/images/2024/5/28/mcdowell_jenny.jpg",
    bio: [
      "With 27 years as Head Coach at Emory University, 826 career wins, two national championships, 26 consecutive NCAA Tournament appearances, and two AVCA National Coach of the Year awards (2008 and 2019), Jenny McDowell is one of the most decorated volleyball coaches in NCAA history. She is also the sole creator of the LOVB Coaches Summit — one of the most impactful coach development programs in the sport.",
      "Jenny joined FORGED as Mentor and Strategic Advisor, donating her time, her expertise, and her network to help Pri build this from the ground up. Her strategic and logistical guidance has shaped the architecture of our inaugural summit — the kind of insight that takes years to earn and saves first-time event directors from costly mistakes.",
      "She is actively connecting FORGED with potential donors and sponsors through the deep relationships she built through LOVB and the Positive Coaching Alliance — with coaches, leaders, and companies who share this mission. Her belief in FORGED before we had anything to prove is the kind of backing that changes everything. We are honored to have her.",
    ],
  },
  // Add more team members below:
  // {
  //   name: "Name",
  //   role: "Role",
  //   bio: ["Short bio here."],
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
        <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 md:grid-cols-2">
          {team.map((member) => (
            <FadeUp key={member.name} className="bg-dark p-9 border-t-2 border-transparent hover:border-gold-m hover:bg-dark2 transition-colors flex flex-col gap-4">
              {/* Headshot */}
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gold/10 border border-gold/20 flex items-center justify-center mb-2 flex-shrink-0">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover object-top"
                    unoptimized={member.photo.startsWith("http")}
                  />
                ) : (
                  <span className="font-display text-2xl text-gold/40">{member.name.charAt(0)}</span>
                )}
              </div>
              <div>
                <div className="font-display text-xl tracking-[0.08em] text-cream mb-1">{member.name}</div>
                <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-m mb-3">{member.role}</div>
                <div className="space-y-3">
                  {member.bio.map((para, i) => (
                    <p key={i} className="text-[13px] text-light leading-[1.7]">{para}</p>
                  ))}
                </div>
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
