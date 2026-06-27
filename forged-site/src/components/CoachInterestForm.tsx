"use client";

import { useState, type InputHTMLAttributes, type SelectHTMLAttributes, type ReactNode } from "react";

const SHIRT_SIZES = ["S", "M", "L", "XL", "XXL", "XXXL"];
const DIVISIONS = ["DI", "DII", "DIII", "NAIA", "Community College / JUCO"];
const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
  "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",
];

const COACHING_LEVELS = ["Middle School", "High School", "Club", "College"] as const;
type CoachingLevel = typeof COACHING_LEVELS[number];

type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  levels: CoachingLevel[];
  collegeDivision: string;
  programName: string;
  shirtSize: string;
  goal: string;
};

const BLANK: Fields = {
  firstName: "", lastName: "", email: "", phone: "",
  city: "", state: "",
  levels: [], collegeDivision: "", programName: "",
  shirtSize: "", goal: "",
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

export default function CoachInterestForm({ stripeUrl }: { stripeUrl: string }) {
  const [fields, setFields] = useState<Fields>(BLANK);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  function toggleLevel(level: CoachingLevel) {
    setFields((prev) => ({
      ...prev,
      levels: prev.levels.includes(level)
        ? prev.levels.filter((l) => l !== level)
        : [...prev.levels, level],
      // Clear division if college is deselected
      collegeDivision: level === "College" && prev.levels.includes("College")
        ? ""
        : prev.collegeDivision,
    }));
  }

  const includesCollege = fields.levels.includes("College");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (fields.levels.length === 0) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/coach-register", {
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
          We received your info — you&apos;ll hear from us directly. To complete your registration, proceed to payment below.
        </p>
        <a
          href={stripeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-4 hover:bg-gold-m transition-colors"
        >
          Complete Payment — $250 →
        </a>
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

        {/* Coaching Info */}
        <SectionLabel>Coaching Info</SectionLabel>
        <div className="col-span-full flex flex-col gap-2">
          <p className="text-[11px] tracking-[0.15em] uppercase text-muted">
            Coaching Level <span className="text-gold-m">*</span>
          </p>
          <div className="flex flex-wrap gap-3">
            {COACHING_LEVELS.map((level) => (
              <label key={level} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-[#C9A84C] w-4 h-4"
                  checked={fields.levels.includes(level)}
                  onChange={() => toggleLevel(level)}
                />
                <span className="text-[13px] text-light">{level}</span>
              </label>
            ))}
          </div>
          {fields.levels.length === 0 && (
            <p className="text-[11px] text-gold-m">Please select at least one level.</p>
          )}
        </div>

        {includesCollege && (
          <Select label="College Division" required={includesCollege} value={fields.collegeDivision} onChange={(e) => set("collegeDivision", e.target.value)}>
            <option value="" disabled>Select division</option>
            {DIVISIONS.map((d) => <option key={d} value={d}>{d}</option>)}
          </Select>
        )}

        <div className={includesCollege ? "" : "col-span-full"}>
          <Input label="Program / School / Club Name" required placeholder="Program or school name" value={fields.programName} onChange={(e) => set("programName", e.target.value)} />
        </div>

        <Select label="Shirt Size" required value={fields.shirtSize} onChange={(e) => set("shirtSize", e.target.value)}>
          <option value="" disabled>Select size</option>
          {SHIRT_SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>

        {/* Goal */}
        <SectionLabel>Your Goal</SectionLabel>
        <div className="col-span-full flex flex-col gap-1">
          <label className="text-[11px] tracking-[0.15em] uppercase text-muted">
            What is your goal for this weekend at FORGED?<span className="text-gold-m ml-1">*</span>
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

      {status === "error" && (
        <p className="text-[12px] text-gold-m text-center">
          Something went wrong. Email us directly at{" "}
          <a href="mailto:pri@beforged.co" className="underline">pri@beforged.co</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading" || fields.levels.length === 0}
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
