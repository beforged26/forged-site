"use client";

import { useState, type InputHTMLAttributes, type SelectHTMLAttributes, type ReactNode } from "react";

const POSITIONS = [
  "Setter",
  "Outside Hitter",
  "Middle Blocker",
  "Right Side / Opposite",
  "Libero / DS",
  "Multi-Position / Not Sure",
];

const GRAD_YEARS = ["2025", "2026", "2027", "2028", "2029", "2030+"];
const SHIRT_SIZES = ["YS", "YM", "YL", "S", "M", "L", "XL", "XXL", "XXXL"];

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
  "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",
];

type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  clubName: string;
  clubCoachName: string;
  clubDirectorName: string;
  highSchool: string;
  highSchoolCoach: string;
  position: string;
  gradYear: string;
  shirtSize: string;
  instagram: string;
  referFriend: boolean;
  friendName: string;
  friendEmail: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
  goal: string;
};

const BLANK: Fields = {
  firstName: "", lastName: "", email: "", phone: "",
  city: "", state: "",
  clubName: "", clubCoachName: "", clubDirectorName: "",
  highSchool: "", highSchoolCoach: "",
  position: "", gradYear: "", shirtSize: "", instagram: "",
  referFriend: false, friendName: "", friendEmail: "",
  guardianName: "", guardianPhone: "", guardianEmail: "",
  goal: "",
};

function Input({ label, required, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[11px] tracking-[0.15em] uppercase text-muted">
        {label}{required && <span className="text-gold-m ml-1">*</span>}
      </label>
      <input className="form-input" required={required} {...props} />
    </div>
  );
}

function Select({ label, required, children, ...props }: SelectHTMLAttributes<HTMLSelectElement> & { label: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[11px] tracking-[0.15em] uppercase text-muted">
        {label}{required && <span className="text-gold-m ml-1">*</span>}
      </label>
      <select className="form-input bg-transparent text-light" required={required} {...props}>
        {children}
      </select>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="col-span-full">
      <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-m pt-4 pb-1 border-b border-gold/20">
        {children}
      </p>
    </div>
  );
}

export type PaymentOption = { label: string; url: string; featured?: boolean };

export default function AthleteInterestForm({ paymentOptions }: { paymentOptions: PaymentOption[] }) {
  const [fields, setFields] = useState<Fields>(BLANK);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set(key: keyof Fields, value: string | boolean) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (fields.referFriend && !fields.friendEmail) {
      setErrorMsg("Please enter your friend's email address.");
      return;
    }
    setErrorMsg("");
    setStatus("loading");

    try {
      const res = await fetch("/api/athlete-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="text-center py-14 px-6 border border-gold/30 bg-gold/5 max-w-[640px] mx-auto">
        <p className="font-display text-[28px] tracking-[0.1em] text-gold mb-3">
          YOU&rsquo;RE IN. 🔱
        </p>
        <p className="text-[14px] text-light leading-[1.7] mb-8 max-w-[460px] mx-auto">
          We received your info — you&apos;ll hear from us directly. To hold your spot, complete payment below.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
          {paymentOptions.map((opt) => (
            <a
              key={opt.url}
              href={opt.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block text-[11px] font-bold tracking-[0.18em] uppercase px-8 py-4 transition-colors ${
                opt.featured
                  ? "text-black bg-gold hover:bg-gold-m"
                  : "text-gold border border-gold/40 hover:border-gold"
              }`}
            >
              {opt.label} →
            </a>
          ))}
        </div>
        <p className="text-[12px] text-muted mt-6">
          Questions? <a href="mailto:pri@beforged.co" className="text-gold-m hover:underline">pri@beforged.co</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[780px] mx-auto flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Personal Info */}
        <SectionLabel>Personal Info</SectionLabel>
        <Input label="First Name" required placeholder="First" value={fields.firstName} onChange={(e) => set("firstName", e.target.value)} />
        <Input label="Last Name" required placeholder="Last" value={fields.lastName} onChange={(e) => set("lastName", e.target.value)} />
        <Input label="Email" required type="email" placeholder="your@email.com" value={fields.email} onChange={(e) => set("email", e.target.value)} />
        <Input label="Phone" type="tel" placeholder="(555) 000-0000" value={fields.phone} onChange={(e) => set("phone", e.target.value)} />
        <Input label="City" required placeholder="Phoenix" value={fields.city} onChange={(e) => set("city", e.target.value)} />
        <Select label="State" required value={fields.state} onChange={(e) => set("state", e.target.value)}>
          <option value="" disabled>Select state</option>
          {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>
        <Input label="Instagram Handle" placeholder="@yourhandle" value={fields.instagram} onChange={(e) => set("instagram", e.target.value)} />

        {/* Club Program */}
        <SectionLabel>Club Program</SectionLabel>
        <Input label="Club Name" required placeholder="Club name" value={fields.clubName} onChange={(e) => set("clubName", e.target.value)} />
        <Input label="Club Coach Name" placeholder="Coach's name" value={fields.clubCoachName} onChange={(e) => set("clubCoachName", e.target.value)} />
        <Input label="Club Director Name" placeholder="Director's name" value={fields.clubDirectorName} onChange={(e) => set("clubDirectorName", e.target.value)} />

        {/* High School */}
        <SectionLabel>High School</SectionLabel>
        <Input label="High School Name" required placeholder="School name" value={fields.highSchool} onChange={(e) => set("highSchool", e.target.value)} />
        <Input label="High School Coach Name" placeholder="Coach's name" value={fields.highSchoolCoach} onChange={(e) => set("highSchoolCoach", e.target.value)} />
        <Select label="Graduation Year" required value={fields.gradYear} onChange={(e) => set("gradYear", e.target.value)}>
          <option value="" disabled>Select year</option>
          {GRAD_YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
        </Select>

        {/* About You */}
        <SectionLabel>About You</SectionLabel>
        <Select label="Position" required value={fields.position} onChange={(e) => set("position", e.target.value)}>
          <option value="" disabled>Select position</option>
          {POSITIONS.map((p) => <option key={p} value={p}>{p}</option>)}
        </Select>
        <Select label="Shirt Size" required value={fields.shirtSize} onChange={(e) => set("shirtSize", e.target.value)}>
          <option value="" disabled>Select size</option>
          {SHIRT_SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>

        {/* Friend Referral */}
        <SectionLabel>Friend Referral (Optional)</SectionLabel>
        <div className="col-span-full flex items-start gap-3">
          <input
            id="referFriend"
            type="checkbox"
            className="mt-1 accent-[#C9A84C] w-4 h-4 flex-shrink-0"
            checked={fields.referFriend}
            onChange={(e) => set("referFriend", e.target.checked)}
          />
          <label htmlFor="referFriend" className="text-[13px] text-light leading-[1.5] cursor-pointer">
            I want to recommend a friend or teammate to attend FORGED
          </label>
        </div>
        {fields.referFriend && (
          <>
            <Input label="Friend's Name" placeholder="First and last name" value={fields.friendName} onChange={(e) => set("friendName", e.target.value)} />
            <div className="flex flex-col gap-1">
              <label className="text-[11px] tracking-[0.15em] uppercase text-muted">
                Friend&rsquo;s Email <span className="text-gold-m">*</span>
              </label>
              <input
                className="form-input"
                type="email"
                required={fields.referFriend}
                placeholder="friend@email.com"
                value={fields.friendEmail}
                onChange={(e) => set("friendEmail", e.target.value)}
              />
            </div>
          </>
        )}

        {/* Emergency Contact */}
        <SectionLabel>Parent / Guardian — Emergency Contact</SectionLabel>
        <Input label="Guardian Name" required placeholder="Full name" value={fields.guardianName} onChange={(e) => set("guardianName", e.target.value)} />
        <Input label="Guardian Phone" required type="tel" placeholder="(555) 000-0000" value={fields.guardianPhone} onChange={(e) => set("guardianPhone", e.target.value)} />
        <Input label="Guardian Email" type="email" placeholder="guardian@email.com" value={fields.guardianEmail} onChange={(e) => set("guardianEmail", e.target.value)} />

        {/* Goal */}
        <SectionLabel>Your Goal</SectionLabel>
        <div className="col-span-full flex flex-col gap-1">
          <label className="text-[11px] tracking-[0.15em] uppercase text-muted">
            What is your goal for FORGED? What do you want to accomplish this weekend?<span className="text-gold-m ml-1">*</span>
          </label>
          <textarea
            className="form-input min-h-[120px] resize-y"
            required
            placeholder="Tell us what you're hoping to get out of this experience..."
            value={fields.goal}
            onChange={(e) => set("goal", e.target.value)}
          />
        </div>
      </div>

      {errorMsg && (
        <p className="text-[12px] text-gold-m text-center">{errorMsg}</p>
      )}

      {status === "error" && (
        <p className="text-[12px] text-gold-m text-center">
          Something went wrong. Email us directly at{" "}
          <a href="mailto:pri@beforged.co" className="underline">pri@beforged.co</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-gold border-none px-8 py-4 text-[11px] font-bold tracking-[0.18em] uppercase text-black cursor-pointer transition-colors hover:bg-gold-m disabled:opacity-60 mt-2"
      >
        {status === "loading" ? "Submitting…" : "Submit & Proceed to Payment →"}
      </button>

      <p className="text-[11px] text-muted text-center -mt-2">
        After submitting, you&apos;ll be directed to complete payment. Your spot is not held until payment is received.
      </p>
    </form>
  );
}
