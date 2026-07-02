import type { Metadata } from "next";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lineup — AZ Volleyball | FORGED",
  description:
    "Meet the coaches and experts joining FORGED 2026 in Phoenix, AZ. Elite volleyball coaches and world-class performance experts.",
};

// ── ADD COACHES HERE ──────────────────────────────────────────────────────────
const coaches: { name: string; role: string; bio: string; website: string; photo?: string }[] = [
  {
    name: "Logan Tom",
    role: "4x Olympian Outside Hitter — International Volleyball Hall of Fame — MLV Director of International Development",
    bio: "One of the most decorated players in U.S. volleyball history. Logan Tom became the youngest woman ever named to a U.S. Olympic Team at age 19 — and went on to compete in four consecutive Olympics (2000–2012), earning two Silver Medals along the way. At Stanford, she was a four-time All-American and two-time National Player of the Year, and helped the Cardinal win the 2001 NCAA title. Her professional career spanned 12 countries and 8 championships. She was inducted into the International Volleyball Hall of Fame in 2021. She currently serves as Director of International Development & Player Strategy for Major League Volleyball (MLV), where she cultivates relationships with volleyball agencies and federations worldwide with a focus on player safety and wellness. At FORGED, Logan brings the perspective of someone who has competed and won at every level — giving athletes a rare look at what elite actually looks like from the inside.",
    website: "",
    photo: "https://storage.googleapis.com/provolleyball-prod/upload/2025/08/05/f28dbc96-a5f5-456e-9ce8-a52d5bd74d34.jpg",
  },
  {
    name: "Tama Miyashiro",
    role: "2012 Olympic Silver Medalist — 2020 Olympic Gold Coach — LOVB Salt Lake City Head Coach",
    bio: "Tama Miyashiro is one of the most accomplished liberos in U.S. volleyball history — and one of the rare few who has stood on the Olympic podium as both a player and a coach. As a libero at the University of Washington, she set school records for career digs (2,382) and digs per set (5.36), and was named National Defensive Player of the Year twice. She joined the U.S. Women's National Team in 2010 and won a Silver Medal at the 2012 London Olympics. After transitioning to coaching, she became an assistant coach for the U.S. Women's National Team and helped lead them to Gold at the 2020 Tokyo Olympics. She also guided Allianz Stuttgart to their first-ever German Bundesliga title. She is currently the Head Coach of LOVB Salt Lake City. At FORGED, Tama brings elite-level defensive mastery and the kind of perspective that only comes from winning at the highest level — on both sides of the clipboard.",
    website: "",
    photo: "https://usavolleyball.org/wp-content/uploads/2020/12/Tama-Miyashiro-2022.jpg",
  },
  {
    name: "Deitre Collins-Parker",
    role: "1988 Olympian — Inaugural Head Coach, MLV Washington D.C. — AVCA Hall of Famer",
    bio: "Deitre Collins-Parker is one of the most accomplished figures in the history of American volleyball — as both a player and a coach. She led the University of Hawai'i to back-to-back National Championships and was the first volleyball player ever to win the Honda Broderick Cup, given to the nation's top female collegiate athlete, earning it twice (1983 and 1984). She competed in the 1988 Olympics and won the French League Championship and the European Cup of Champions as a professional. As a coach, she built a 25-year collegiate career with over 330 wins at UNLV, Cornell, San Diego State, Coastal Carolina, and Arizona — and served as head coach of the U.S. Junior National Team three times. She was inducted into the AVCA Hall of Fame in 2008. Most recently, she was named the inaugural Head Coach of the MLV Washington D.C. franchise, set to debut in 2027. At FORGED, Deitre brings the kind of depth that only comes from having done it all.",
    website: "",
    photo: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/arizona.sidearmsports.com/images/2023/8/29/Dietre_Collins-Parker__volleyball_assistant_coach_230822_ICA_Headshots_Mike_Christy_3.JPG",
  },
];

// ── ADD EXPERTS HERE ──────────────────────────────────────────────────────────
const experts: { name: string; role: string; bio: string; website: string; photo?: string }[] = [
  {
    name: "Priscilla Tallman",
    role: "Mental Performance Coach",
    bio: "Specialist in mental performance, pressure management, and building the mindset that separates good from elite. Priscilla works with athletes to develop the mental tools that drive sustainable high performance.",
    website: "",
  },
  {
    name: "Falyn Fonoimoana",
    role: "Personal Brand & Recruiting — Founder, MANA Management",
    bio: "Falyn Fonoimoana is the Founder & CEO of MANA Management, a talent and brand management agency dedicated to helping athletes, creators, and entrepreneurs build authentic, impactful brands. With years of experience growing her own social media presence and personal brand, Falyn understands what it takes to create meaningful influence — both online and off. She is passionate about mentoring creators, developing strategic partnerships, and helping individuals unlock their full potential while building businesses that align with their purpose. In addition to MANA Management, Falyn is the Founder of MANA Wellness, a performance and longevity company focused on optimizing health through innovative wellness solutions. Beyond entrepreneurship, she continues to compete professionally in beach volleyball — bringing the same discipline, resilience, and high-performance mindset from the court into every venture she leads. Falyn and FORGED Founder Pri Piantadosi-Lima have competed together on the AVP, and Pri has been coaching Falyn on and off for over 8 years. That relationship is exactly what FORGED is built on — the best coaches and athletes in this sport, in the same room, sharing what actually works. At FORGED, Falyn brings the real playbook: how to show up online, build your recruiting profile, and own your narrative as an athlete.",
    website: "",
    photo: "/Falyn.JPG",
  },
  {
    name: "Tree Beeckman",
    role: "Culture Coach — Leadership & Team Culture",
    bio: "Tree Beeckman has spent more than three decades studying what actually builds winning cultures — not the posters on the wall, but the systems underneath them. A former collegiate coach at Delta College, Ferris State, Central Michigan, and Western Michigan Universities, Tree left the bench in 2015 to take her work national. She is the founder of Tree Roots Culture Consulting and the creator of the Tree Roots Team Culture Model™ — a nationally recognized framework for designing and sustaining high-performance cultures in athletic programs. She's also the author of Managing Your Culture, a color commentator for ESPN college volleyball, an adjunct professor at the University of Florida, and a former four-year collegiate softball athlete. At FORGED, Tree brings the culture conversation out of the motivational-poster era and into the practical — giving athletes and coaches the tools to actually build something.",
    website: "https://winningdeep.com/",
    photo: "/Tree.jpg",
  },
  {
    name: "Kamila Tan",
    role: "Body Image Mentor — Athlete Identity",
    bio: "Specialist in athlete identity, body image, and the mental side of physical performance. Kamila guides athletes through the often unspoken challenges of how they see and relate to their own bodies.",
    website: "",
  },
  {
    name: "Sara Putt",
    role: "Sport Nutritionist — Fueling for Performance",
    bio: "Expert in athlete nutrition, fueling strategies, recovery, and long-term performance. Sara helps athletes understand how to fuel their bodies to perform at their highest level — and sustain it. Sara and FORGED Founder Pri Piantadosi-Lima go way back — Pri coached Sara in high school as she prepared for college, reconnected with her during summers at FSU, and worked with her when she first started pursuing the professional level. At FORGED, Sara brings a real-world, athlete-first approach to nutrition: what actually works when you're competing, training, and trying to build a career in this sport.",
    website: "",
  },
  {
    name: "Karlee Owens",
    role: "Primal Movement Coach — Body Assessment",
    bio: "Movement specialist focused on assessing and optimizing how athletes move — reducing injury risk and unlocking performance potential from the ground up.",
    website: "",
  },
  {
    name: "Benjamin Jensen, M.S.",
    role: "FirstBeat — Heart Rate, HRV & Performance Monitoring",
    bio: "Ben Jensen brings a lifetime of athletic experience and coaching expertise to every program he works with. A three-sport letterwinner in high school, Ben played soccer at Dixie Junior College (now Utah Tech) and Utah State University, where he earned his bachelor's degree in Exercise Science. After college, he relocated to Finland to play five seasons of professional American football with the Jyväskylä Jaguaarit — where he holds the league record for the longest punt (73 yards). His passion for the game evolved into coaching: Ben served as Head Coach of the Finnish Junior National Team, assistant coach for the Finnish Men's National Team, and led the Jaguaarit Junior Program and professional team. His junior teams competed in six national championships, claiming titles in 2007 and 2009. Ben holds a master's degree in Sport Coaching and Fitness Testing from the University of Jyväskylä, combining hands-on experience with evidence-based approaches to training, performance, and athlete development. At FORGED, Ben brings FirstBeat technology into the training environment — giving athletes and coaches real-time physiological data on readiness, stress, and recovery to make every session count.",
    website: "",
    photo: "/Ben_FirstBeat.jpg",
  },
  {
    name: "Mike Halpert",
    role: "Ver Coaching — Vision Training & Performance",
    bio: "Mike Halpert is the founder of Ver Coaching, a sports technology company based in Durham, NC, built on one idea: athletes need to train how they see, not just how they move. Using clinically validated vision science delivered through virtual reality, the Ver Vision Trainer develops the visual system behind reaction time, depth perception, peripheral awareness, and decision-making under pressure — in short, game-ready sessions that fit into any existing practice routine. Mike has spent the past year working alongside volleyball programs from club to NCAA level, and after presenting at the 2025 AVCA Convention, he was invited back for 2026. At FORGED, he's bringing coaches and athletes a practical, evidence-based approach to one of the most undertrained systems in sport.",
    website: "https://www.ver.coach",
    photo: "/Mike.VER.jpeg",
  },
];

function PersonCard({ person }: { person: { name: string; role: string; bio: string; website: string; photo?: string } }) {
  return (
    <FadeUp className="bg-dark p-8 border-t-2 border-transparent hover:border-gold-m hover:bg-dark2 transition-colors flex flex-col gap-5">
      {/* Headshot */}
      {person.photo ? (
        <div className="w-full aspect-[3/4] overflow-hidden bg-gold/10">
          <Image
            src={person.photo}
            alt={person.name}
            width={400}
            height={533}
            className="w-full h-full object-cover object-top"
            unoptimized
          />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
          <span className="font-display text-2xl text-gold/40">{person.name.charAt(0)}</span>
        </div>
      )}
      <div className="flex-1">
        <div className="font-display text-xl tracking-[0.08em] text-cream mb-1">{person.name}</div>
        <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-m mb-3">{person.role}</div>
        <p className="text-[13px] text-light leading-[1.6]">{person.bio}</p>
      </div>
      {person.website && (
        <a href={person.website} target="_blank" rel="noopener noreferrer" className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gold hover:text-gold-m transition-colors">
          Website →
        </a>
      )}
    </FadeUp>
  );
}

export default function Lineup() {
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
          AZ — Volleyball &nbsp;·&nbsp; Phoenix, Nov 26–29, 2026
        </p>
        <h1 className="font-display text-[clamp(52px,10vw,120px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          THE
          <br />
          <span className="gold-gradient-text">LINEUP.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[580px] mx-auto relative z-[1] leading-[1.5]">
          Elite coaches. World-class experts. All under one roof.
        </p>
      </section>

      <div className="gold-rule" />

      {/* COACHES — only renders when coaches are added */}
      {coaches.length > 0 && (
        <>
          <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
            <p className="section-eyebrow">Coaches</p>
            <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
              WHO YOU&apos;LL
              <br />
              TRAIN WITH.
            </h2>
            <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {coaches.map((c) => <PersonCard key={c.name} person={c} />)}
            </div>
          </FadeUp>
          <div className="gold-rule" />
        </>
      )}

      {/* EXPERTS */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <p className="section-eyebrow">Experts</p>
        <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream mb-14">
          WHO YOU&apos;LL
          <br />
          LEARN FROM.
        </h2>
        <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((e) => <PersonCard key={e.role} person={e} />)}
        </div>
      </FadeUp>

      {/* CTA */}
      <div className="bg-dark border-t border-gold/10 py-20 px-6 md:px-10 text-center">
        <FadeUp>
          <p className="font-serif italic text-[clamp(18px,2.5vw,26px)] text-light max-w-[580px] mx-auto mb-10 leading-[1.6]">
            Ready to learn from the best? Secure your spot before early bird pricing closes.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/register/athlete" className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-7 py-3.5 hover:bg-gold-m transition-colors">
              Athlete — Early Bird $757
            </Link>
            <Link href="/register/coach" className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/40 px-7 py-3.5 hover:border-gold transition-colors">
              Coach — $250
            </Link>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
