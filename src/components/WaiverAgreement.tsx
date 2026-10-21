"use client";

import { WAIVER_PARAGRAPHS, type WaiverFields } from "@/lib/waiver";

// Shared by the athlete and coach forms (indoor and beach). Athletes get the under-18 parent confirmation.
export default function WaiverAgreement({
  value,
  onChange,
  askAge,
  guardianName,
}: {
  value: WaiverFields;
  onChange: (next: WaiverFields) => void;
  askAge: boolean;
  guardianName?: string;
}) {
  const box = "mt-1 accent-[#C9A84C] w-4 h-4 flex-shrink-0";
  const label = "text-[13px] text-light leading-[1.5] cursor-pointer";
  return (
    <div className="col-span-full border border-gold/15 bg-dark p-6 md:p-8 space-y-4">
      <p className="section-eyebrow">Assumption of Risk &amp; Release of Liability</p>
      {WAIVER_PARAGRAPHS.map((p) => (
        <p key={p.slice(0, 24)} className="text-[12px] text-light leading-[1.8]">{p}</p>
      ))}
      <div className="border-t border-gold/10 pt-5 space-y-4">
        <div className="flex items-start gap-3">
          <input id="waiverAccepted" type="checkbox" required className={box} checked={value.waiverAccepted}
            onChange={(e) => onChange({ ...value, waiverAccepted: e.target.checked })} />
          <label htmlFor="waiverAccepted" className={label}>
            I have read this waiver, I understand it, and I agree to it. <span className="text-gold-m">*</span>
          </label>
        </div>
        {askAge && (
          <>
            <div className="flex items-start gap-3">
              <input id="isMinor" type="checkbox" className={box} checked={value.isMinor}
                onChange={(e) => onChange({ ...value, isMinor: e.target.checked, parentAccepted: e.target.checked ? value.parentAccepted : false })} />
              <label htmlFor="isMinor" className={label}>The athlete is 18 or younger</label>
            </div>
            {value.isMinor && (
              <div className="flex items-start gap-3">
                <input id="parentAccepted" type="checkbox" required className={box} checked={value.parentAccepted}
                  onChange={(e) => onChange({ ...value, parentAccepted: e.target.checked })} />
                <label htmlFor="parentAccepted" className={label}>
                  I am the parent or legal guardian{guardianName ? ` (${guardianName})` : ""}. I have read this waiver and I agree to it on behalf of the athlete. <span className="text-gold-m">*</span>
                </label>
              </div>
            )}
          </>
        )}
        <p className="text-[11px] text-muted leading-[1.6]">
          Checking the box counts as your signature. We save the date and time with your registration, so there is nothing to print or bring.
        </p>
      </div>
    </div>
  );
}
