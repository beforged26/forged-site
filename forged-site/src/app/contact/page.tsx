import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — FORGED",
  description:
    "Get in touch with FORGED — questions about the 2026 summit, registration, or partnership opportunities. Email pri@beforged.co or call 516.405.5549.",
};

const channels = [
  {
    title: "Email",
    value: "pri@beforged.co",
    href: "mailto:pri@beforged.co",
    desc: "For general questions, registration, and partnership inquiries.",
  },
  {
    title: "Phone",
    value: "516.405.5549",
    href: "tel:5164055549",
    desc: "Call or text — we'll get back to you as soon as we can.",
  },
  {
    title: "Instagram",
    value: "@beforgedco",
    href: "https://instagram.com/beforgedco",
    desc: "Follow along for updates, behind-the-scenes, and announcements.",
  },
  {
    title: "TikTok",
    value: "@beforgedco",
    href: "https://tiktok.com/@beforgedco",
    desc: "Short-form content from the FORGED community and founder.",
  },
];

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="hero-anim min-h-[55vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,148,26,0.07) 0%, transparent 70%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,164,76,0.04) 0%, transparent 60%)",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-m mb-5 relative z-[1]">
          Get In Touch
        </p>
        <h1 className="font-display text-[clamp(56px,11vw,130px)] leading-[0.95] tracking-[0.04em] text-cream mb-6 relative z-[1]">
          LET&rsquo;S
          <br />
          <span className="gold-gradient-text">TALK.</span>
        </h1>
        <p className="font-serif italic text-[clamp(18px,3vw,26px)] text-light max-w-[620px] mx-auto relative z-[1] leading-[1.5]">
          Questions about the 2026 summit, registration, or partnering with
          FORGED? We&rsquo;d love to hear from you.
        </p>
      </section>

      <div className="gold-rule" />

      {/* CHANNELS */}
      <FadeUp className="max-w-[1100px] mx-auto px-6 md:px-10 py-20">
        <div className="grid gap-[2px] bg-gold/[0.08] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <FadeUp key={c.title} className="bg-dark p-9 border-t-2 border-transparent transition-colors hover:border-gold-m hover:bg-dark2">
              <div className="font-display text-xl tracking-[0.1em] text-gold mb-2.5">{c.title}</div>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="block text-[15px] text-cream mb-2 hover:text-gold-m transition-colors"
              >
                {c.value}
              </a>
              <p className="text-[13px] text-light leading-[1.6]">{c.desc}</p>
            </FadeUp>
          ))}
        </div>
      </FadeUp>

      {/* CONTACT FORM */}
      <div className="bg-dark border-y border-gold/10 py-24 px-6 md:px-10">
        <FadeUp className="max-w-[640px] mx-auto text-center mb-12">
          <p className="section-eyebrow center justify-center">Send a Message</p>
          <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.04em] leading-[0.95] text-cream">
            WE&rsquo;LL GET BACK
            <br />
            TO YOU SOON.
          </h2>
        </FadeUp>

        <FadeUp>
          <ContactForm />
        </FadeUp>
      </div>
    </>
  );
}
