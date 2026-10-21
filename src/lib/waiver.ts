// One shared waiver for every registration form. Bump WAIVER_VERSION whenever the wording changes
// so each saved registration records exactly which text the person agreed to.
export const WAIVER_VERSION = "2026-10-21";

export const WAIVER_PARAGRAPHS = [
  "I understand that participation in sport requires a personal acceptance of the risk of injury. I acknowledge that those responsible for the conduct of the FORGED Summit take reasonable precautions to minimize such risk, but that some risk cannot be eliminated.",
  "I understand that participation in the FORGED Summit (November 26–29, 2026, Mesa, AZ) may result in injury or illness, physical or mental impairments, or even death. I understand that FORGED cannot be held responsible for any injuries or conditions caused by the actions of other athletes or participants. I also understand that injuries may result from my own failure to follow safety procedures or techniques made known to me by the coaching staff, athletic training staff, and/or otherwise known to me from any other source, including but not limited to medical personnel.",
  "I voluntarily assume all risks associated with participation and release FORGED, its founders, staff, coaches, experts, and venue partners from any and all liability arising from participation in this event.",
];

export type WaiverFields = {
  waiverAccepted: boolean;
  isMinor: boolean;
  parentAccepted: boolean;
};

export const BLANK_WAIVER: WaiverFields = { waiverAccepted: false, isMinor: false, parentAccepted: false };

// Server-side check; returns an error message or null.
export function checkWaiver(data: Partial<WaiverFields> & { guardianName?: string; guardianEmail?: string }, needsParentWhenMinor: boolean): string | null {
  if (data.waiverAccepted !== true) return "The waiver must be accepted.";
  if (needsParentWhenMinor && data.isMinor) {
    if (data.parentAccepted !== true) return "A parent or guardian must accept the waiver for participants under 18.";
    if (!data.guardianName || !data.guardianEmail) return "Parent or guardian name and email are required for participants under 18.";
  }
  return null;
}

const esc = (s: unknown) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c] as string));

// Rows for the notification email.
export function waiverEmailRows(data: Partial<WaiverFields> & { guardianName?: string; guardianEmail?: string }, ip: string, whenET: string): string {
  const cell = "padding: 8px 12px; border-bottom: 1px solid #eee;";
  const head = "background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;";
  return `
    <tr><td colspan="2" style="${head}">Waiver (accepted online)</td></tr>
    <tr><td style="${cell} color: #555;">Participant agreed</td><td style="${cell}">Yes — ${esc(whenET)} ET</td></tr>
    <tr><td style="${cell} color: #555;">Under 18</td><td style="${cell}">${data.isMinor ? "Yes" : "No"}</td></tr>
    ${data.isMinor ? `<tr><td style="${cell} color: #555;">Parent / guardian agreed</td><td style="${cell}">${data.parentAccepted ? "Yes" : "No"} — ${esc(data.guardianName)} (${esc(data.guardianEmail)})</td></tr>` : ""}
    <tr><td style="${cell} color: #555;">Waiver version</td><td style="${cell}">${WAIVER_VERSION}</td></tr>
    <tr><td style="${cell} color: #555;">IP address</td><td style="${cell}">${esc(ip)}</td></tr>`;
}

export function clientIp(req: Request): string {
  return (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
}
