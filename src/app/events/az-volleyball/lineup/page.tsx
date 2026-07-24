import type { Metadata } from "next";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lineup — AZ Volleyball | FORGED",
  description:
    "Meet the coaches and experts joining FORGED 2026 in Mesa, AZ. Elite volleyball coaches and world-class performance experts.",
};

// ── ADD COACHES HERE ──────────────────────────────────────────────────────────
const coaches: { name: string; role: string; bio: string; website: string; photo?: string }[] = [
  {
    name: "Logan Tom",
    role: "4x Olympian Outside Hitter — International Volleyball Hall of Fame — MLV Director of International Development",
    bio: "One of the most decorated players in U.S. volleyball history. Logan Tom became the youngest woman ever named to a U.S. Olympic Team at age 19 — and went on to compete in four consecutive Olympics (2000–2012), earning two Silver Medals along the way. At Stanford, she was a four-time All-American and two-time National Player of the Year, and helped the Cardinal win the 2001 NCAA title. Her professional career spanned 12 countries and 8 championships. She was inducted into the International Volleyball Hall of Fame in 2021. She currently serves as Director of International Development & Player Strategy for Major League Volleyball (MLV), where she cultivates relationships with volleyball agencies and federations worldwide with a focus on player safety and wellness. FORGED Founder Pri Piantadosi-Lima met Logan competing on the AVP — and what started on the court became a genuine friendship. Logan has been supporting FORGED from behind the scenes since the beginning, lending her voice, her network, and her belief in Pri's vision to grow this sport and give athletes what they deserve. At FORGED, Logan brings the perspective of someone who has competed and won at every level — giving athletes a rare look at what elite actually looks like from the inside.",
    website: "",
    photo: "/Logan.jpeg",
  },
  {
    name: "Deitre Collins-Parker",
    role: "1988 Olympian — Inaugural Head Coach, MLV Washington D.C. — AVCA Hall of Famer",
    bio: "Deitre Collins-Parker is one of the most accomplished figures in the history of American volleyball — as both a player and a coach. She led the University of Hawai'i to back-to-back National Championships and was the first volleyball player ever to win the Honda Broderick Cup, given to the nation's top female collegiate athlete, earning it twice (1983 and 1984). She competed in the 1988 Olympics and won the French League Championship and the European Cup of Champions as a professional. As a coach, she built a 25-year collegiate career with over 330 wins at UNLV, Cornell, San Diego State, Coastal Carolina, and Arizona — and served as head coach of the U.S. Junior National Team three times. She was inducted into the AVCA Hall of Fame in 2008. Most recently, she was named the inaugural Head Coach of the MLV Washington D.C. franchise, set to debut in 2027. At FORGED, Deitre brings the kind of depth that only comes from having done it all.",
    website: "",
    photo: "/Deitre.jpeg",
  },
  {
    name: "Sanja Tomašević",
    role: "Head Coach, LOVB Houston — Former Arizona State University Head Coach — Former Serbian National Team",
    bio: "Sanja Tomašević brings a rare combination of elite playing pedigree and world-class coaching experience to FORGED. As a player, she competed professionally from 2006 to 2012, winning three league titles — one in Switzerland and two in Greece — while representing Serbia in Olympic qualifying and at the junior international level. She played college volleyball at the University of Washington, where she helped the Huskies win the 2005 NCAA Division I National Championship. Her coaching career spans the collegiate and professional levels at the highest stages. She served as head coach at Arizona State University from 2016 to 2022, building the program and developing players who went on to compete professionally. From there, she joined VakıfBank in Türkiye as assistant coach — one of the premier clubs in European volleyball — where she helped the team win the Sultanlar Ligi championship and advance to the Champions League semifinals. She was named Head Coach of LOVB Houston in June 2025, joining one of the most ambitious professional volleyball leagues ever launched in the United States. At FORGED, Sanja brings the perspective of someone who has competed and coached at every level — from college programs to Champions League stages — and brings that knowledge directly to the athletes in the room.",
    website: "",
    photo: "/250617_sanja_hired_hero-2.webp",
  },
];

// ── ADD EXPERTS HERE ──────────────────────────────────────────────────────────
const experts: { name: string; role: string; bio: string; website: string; photo?: string }[] = [
  {
    name: "Priscilla Tallman",
    role: "Mental Performance Consultant",
    bio: "Priscilla Tallman is a Mental Performance Consultant with a rare combination of elite playing experience, clinical psychology training, and over 500 athletes coached. As a player at the University of Georgia, she was a two-time First Team All-American (1993 & 1994), SEC Freshman of the Year, SEC Player of the Year, and was later inducted into Georgia's Circle of Honor in 2006. She went on to play professionally in Geneva, Switzerland, and represented the USA National Team in 1994 and the World University Games Team in 1995. After her playing career, she earned a Master's Degree in Clinical Psychology from Vanguard University and brought that training back into sport — coaching at the high school, club, and collegiate levels before stepping away in 2023 to focus exclusively on mental performance. She is the author of two nationally published performance journals, the 30 Day Champions Journal and the 30 Day Return to Play Journal, with over 1,500 copies in use across teams and sports. Priscilla and FORGED Founder Pri Piantadosi-Lima have worked together through Optimum Beach, where Priscilla has mentored the CRTP and Pro groups — and continues to work with several of those athletes individually. At FORGED, she brings that same work to a bigger room: the mental skills that separate good from elite — pressure management, identity, focus, and the mindset required to perform when it matters most.",
    website: "https://www.priscillatallman.com",
    photo: "/Priscilla.jpg",
  },
  {
    name: "Falyn Fonoimoana",
    role: "Personal Brand & Social Media Expert — Founder, MANA Management",
    bio: "Falyn Fonoimoana is the Founder & CEO of MANA Management, a talent and brand management agency dedicated to helping athletes, creators, and entrepreneurs build authentic, impactful brands. With years of experience growing her own social media presence and personal brand, Falyn understands what it takes to create meaningful influence — both online and off. She is passionate about mentoring creators, developing strategic partnerships, and helping individuals unlock their full potential while building businesses that align with their purpose. In addition to MANA Management, Falyn is the Founder of MANA Wellness, a performance and longevity company focused on optimizing health through innovative wellness solutions. Beyond entrepreneurship, she continues to compete professionally in beach volleyball — bringing the same discipline, resilience, and high-performance mindset from the court into every venture she leads. Falyn and FORGED Founder Pri Piantadosi-Lima have competed together on the AVP, and Pri has been coaching Falyn on and off for over 8 years. That relationship is exactly what FORGED is built on — the best coaches and athletes in this sport, in the same room, sharing what actually works. At FORGED, Falyn brings the real playbook: how to show up online, build your personal brand, and own your narrative as an athlete.",
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
    role: "Pro Beach Volleyball Player — Clinical Psychotherapist",
    bio: "Kamila Tan is a professional beach volleyball athlete and a clinical psychotherapist. She began her collegiate career at UCSD before transferring to UCLA, where she became the first beach volleyball athlete ever recruited to play beach volleyball only — without also playing indoor. At UCLA she competed at the 1s and 2s, earned 2nd Team All-PAC-12 and 2nd Team All-American honors, and competed in the AVCA Pairs Championships and the first two NCAA National Championships in Gulf Shores, AL. She holds a Master of Public Health from UCLA and a Master of Social Work from USC. On the professional circuit, Kamila competes on both the AVP and FIVB tours. In 2025 she earned a 2nd place finish in New Zealand and a 1st place finish in Pompano Beach, FL on the FIVB, competing across Futures, Challenger, and Elite 16 events. In 2026, she won the Austin AVP with partner Madison Shields. Her passion for athlete mental health led her to become a licensed clinician. She currently sees clients in private practice in California, specializing in mental performance, performance anxiety, body image challenges, and functional neurological disorders. FORGED Founder Pri Piantadosi-Lima has worked with Kamila directly and introduced her to several of her own athletes — and the impact was undeniable. That experience is exactly why Pri wanted her at FORGED. At FORGED, Kamila brings both sides of her world into the same room — the competitor who has stood on international podiums, and the clinician who helps athletes perform and live with confidence.",
    website: "https://www.kamilatan.com",
    photo: "/kamilla.jpeg",
  },
  {
    name: "Sara Putt",
    role: "Pro Beach Volleyball Player — Registered Dietitian & Sports Nutritionist — Founder, Good Fuel Co",
    bio: "Sara Putt is a Registered Dietitian, sports nutritionist, and former All-American Division I beach volleyball player at Florida State University. Born and raised in South Florida, Sara saw firsthand the impact of nutrition on athletic performance during her own playing career — and turned that experience into a profession. She earned both her undergraduate and master's degrees in dietetics and clinical nutrition at FSU while competing for the beach volleyball team, then spent three years in the clinical setting sharpening her skills before returning to her true passion: working with athletes. Since then, she has worked with over 250 athletes 1:1 in her private practice, served as a performance dietitian at boarding schools for elite high school athletes, and taught sports nutrition to clubs, camps, and teams across multiple sports. She is the founder of Good Fuel Co, her platform for athlete nutrition education and coaching. Sara and FORGED Founder Pri Piantadosi-Lima go way back — Pri coached Sara in high school as she prepared for college, reconnected with her during her summers at FSU, and worked with her when she first started pursuing the professional level. At FORGED, Sara brings the real athlete perspective to nutrition: not just the science, but what actually works when you're competing, training, and trying to build a career in this sport.",
    website: "https://www.instagram.com/goodfuelco_/",
    photo: "/Sara_Putt.jpeg",
  },
  {
    name: "Benjamin Jensen, M.S.",
    role: "FirstBeat — Heart Rate, HRV & Performance Monitoring",
    bio: "Ben Jensen brings a lifetime of athletic experience and coaching expertise to every program he works with. A three-sport letterwinner in high school, Ben played soccer at Dixie Junior College (now Utah Tech) and Utah State University, where he earned his bachelor's degree in Exercise Science. After college, he relocated to Finland to play five seasons of professional American football with the Jyväskylä Jaguaarit — where he holds the league record for the longest punt (73 yards). His passion for the game evolved into coaching: Ben served as Head Coach of the Finnish Junior National Team, assistant coach for the Finnish Men's National Team, and led the Jaguaarit Junior Program and professional team. His junior teams competed in six national championships, claiming titles in 2007 and 2009. Ben holds a master's degree in Sport Coaching and Fitness Testing from the University of Jyväskylä, combining hands-on experience with evidence-based approaches to training, performance, and athlete development. FORGED Founder Pri Piantadosi-Lima worked with Ben directly when she used FirstBeat to track her USF beach volleyball team — and the data changed how she understood her athletes. That experience is exactly why he's here. At FORGED, Ben brings FirstBeat technology into the training environment — giving athletes and coaches real-time physiological data on readiness, stress, and recovery to make every session count.",
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
          AZ — Volleyball &nbsp;·&nbsp; Mesa, Nov 26–29, 2026
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
              {/* MORE COACHES COMING SOON */}
              {[1].map((i) => (
                <FadeUp key={`soon-${i}`} className="bg-dark p-8 border-t-2 border-gold/20 flex flex-col items-center justify-center text-center gap-3 min-h-[260px]">
                  <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center mb-2">
                    <span className="font-display text-2xl text-gold/30">?</span>
                  </div>
                  <div className="font-display text-lg tracking-[0.1em] text-gold/40">Coming Soon</div>
                  <p className="text-[12px] text-muted leading-[1.6] max-w-[220px]">More coaches being confirmed. Check back soon.</p>
                </FadeUp>
              ))}
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
