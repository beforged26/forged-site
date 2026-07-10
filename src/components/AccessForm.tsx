"use client";
import { useState } from "react";

function Input({
  label, name, type = "text", required = false, placeholder = "", value, onChange,
}: {
  label: string; name: string; type?: string; required?: boolean;
  placeholder?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-m">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-[#111] border border-gold/20 text-cream text-[13px] px-4 py-3 focus:outline-none focus:border-gold/60 placeholder:text-muted transition-colors"
      />
    </div>
  );
}

function Textarea({
  label, name, required = false, placeholder = "", value, onChange, rows = 4,
}: {
  label: string; name: string; required?: boolean; placeholder?: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; rows?: number;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-m">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </label>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className="bg-[#111] border border-gold/20 text-cream text-[13px] px-4 py-3 focus:outline-none focus:border-gold/60 placeholder:text-muted transition-colors resize-none"
      />
    </div>
  );
}

const LEVELS = [
  "Youth / Club (Under 14)",
  "Club (14–18)",
  "High School",
  "Junior Collegiate / JUCO",
  "College — Division I / II / III",
  "Post-Collegiate / Aspiring Pro",
  "Other",
];

const empty = {
  firstName: "", lastName: "", age: "", email: "", phone: "",
  city: "", state: "", sport: "", level: "", gpa: "", socialUrl: "",
  ref1Name: "", ref1Phone: "", ref1Email: "", ref1Relation: "",
  ref2Name: "", ref2Phone: "", ref2Email: "", ref2Relation: "",
  financialNeed: "", whyForged: "", anythingElse: "",
};

export default function AccessForm() {
  const [fields, setFields] = useState(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const set = (k: keyof typeof empty, v: string) =>
    setFields((f) => ({ ...f, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/access-scholarship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-gold/30 bg-[#0D0D0D] p-10 text-center">
        <p className="font-display text-3xl tracking-[0.08em] text-gold mb-4">APPLICATION RECEIVED.</p>
        <p className="font-serif italic text-light text-lg leading-[1.6]">
          Thank you for applying. Pri reviews every application personally —<br />
          you'll hear back within 2 weeks.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input label="First Name" name="firstName" required placeholder="Jordan"
          value={fields.firstName} onChange={(e) => set("firstName", e.target.value)} />
        <Input label="Last Name" name="lastName" required placeholder="Smith"
          value={fields.lastName} onChange={(e) => set("lastName", e.target.value)} />
      </div>

      {/* Age + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input label="Age" name="age" type="number" required placeholder="17"
          value={fields.age} onChange={(e) => set("age", e.target.value)} />
        <Input label="Email" name="email" type="email" required placeholder="you@email.com"
          value={fields.email} onChange={(e) => set("email", e.target.value)} />
      </div>

      {/* Phone + Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input label="Phone (optional)" name="phone" type="tel" placeholder="(555) 000-0000"
          value={fields.phone} onChange={(e) => set("phone", e.target.value)} />
        <div className="grid grid-cols-2 gap-3">
          <Input label="City" name="city" required placeholder="Tempe"
            value={fields.city} onChange={(e) => set("city", e.target.value)} />
          <Input label="State" name="state" required placeholder="AZ"
            value={fields.state} onChange={(e) => set("state", e.target.value)} />
        </div>
      </div>

      {/* Sport + Level */}
      <Input label="Sport & Position" name="sport" required placeholder="Indoor Volleyball — Setter"
        value={fields.sport} onChange={(e) => set("sport", e.target.value)} />

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-m">
          Current Level <span className="text-gold">*</span>
        </label>
        <select
          required
          value={fields.level}
          onChange={(e) => set("level", e.target.value)}
          className="bg-[#111] border border-gold/20 text-cream text-[13px] px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors appearance-none"
        >
          <option value="">Select your level</option>
          {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>

      {/* GPA + Social */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input label="GPA" name="gpa" required placeholder="3.5"
          value={fields.gpa} onChange={(e) => set("gpa", e.target.value)} />
        <Input label="Instagram or YouTube (optional)" name="socialUrl" placeholder="@handle or youtube.com/..."
          value={fields.socialUrl} onChange={(e) => set("socialUrl", e.target.value)} />
      </div>

      {/* References */}
      <div className="flex flex-col gap-3">
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-m">
          References <span className="text-muted normal-case tracking-normal font-normal text-[12px]">(coach, teacher, or mentor we can contact)</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-gold/10 p-4">
          <Input label="Reference 1 — Name" name="ref1Name" required placeholder="Coach Rivera"
            value={fields.ref1Name} onChange={(e) => set("ref1Name", e.target.value)} />
          <Input label="Relationship" name="ref1Relation" required placeholder="Club Coach"
            value={fields.ref1Relation} onChange={(e) => set("ref1Relation", e.target.value)} />
          <Input label="Phone" name="ref1Phone" type="tel" required placeholder="(555) 000-0000"
            value={fields.ref1Phone} onChange={(e) => set("ref1Phone", e.target.value)} />
          <Input label="Email" name="ref1Email" type="email" required placeholder="coach@club.com"
            value={fields.ref1Email} onChange={(e) => set("ref1Email", e.target.value)} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-gold/10 p-4">
          <Input label="Reference 2 — Name" name="ref2Name" required placeholder="Ms. Johnson"
            value={fields.ref2Name} onChange={(e) => set("ref2Name", e.target.value)} />
          <Input label="Relationship" name="ref2Relation" required placeholder="School Counselor"
            value={fields.ref2Relation} onChange={(e) => set("ref2Relation", e.target.value)} />
          <Input label="Phone" name="ref2Phone" type="tel" required placeholder="(555) 000-0000"
            value={fields.ref2Phone} onChange={(e) => set("ref2Phone", e.target.value)} />
          <Input label="Email" name="ref2Email" type="email" required placeholder="counselor@school.edu"
            value={fields.ref2Email} onChange={(e) => set("ref2Email", e.target.value)} />
        </div>
      </div>

      {/* Essays */}
      <Textarea
        label="Tell us about your financial situation"
        name="financialNeed"
        required
        rows={4}
        placeholder="Be honest — this is a safe space. We want to understand what barriers exist for you right now."
        value={fields.financialNeed}
        onChange={(e) => set("financialNeed", e.target.value)}
      />

      <Textarea
        label="Why do you want to attend FORGED?"
        name="whyForged"
        required
        rows={4}
        placeholder="What are you working toward? What do you want to get better at? What would this mean for you?"
        value={fields.whyForged}
        onChange={(e) => set("whyForged", e.target.value)}
      />

      <Textarea
        label="Anything else you want us to know? (optional)"
        name="anythingElse"
        rows={3}
        placeholder="Your story, your situation, anything that matters."
        value={fields.anythingElse}
        onChange={(e) => set("anythingElse", e.target.value)}
      />

      {status === "error" && (
        <p className="text-red-400 text-sm">Something went wrong — please email pri@beforged.co directly.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 text-[11px] font-bold tracking-[0.18em] uppercase text-black bg-gold px-8 py-4 hover:bg-gold-m transition-colors disabled:opacity-50 self-start"
      >
        {status === "sending" ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}
