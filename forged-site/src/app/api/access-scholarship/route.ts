import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      firstName, lastName, age, email, phone,
      city, state, sport, level, gpa, socialUrl,
      ref1Name, ref1Phone, ref1Email, ref1Relation,
      ref2Name, ref2Phone, ref2Email, ref2Relation,
      financialNeed, whyForged, anythingElse,
    } = data;

    if (!firstName || !lastName || !email || !email.includes("@")) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Georgia, serif; max-width: 680px; margin: 0 auto; padding: 24px; color: #111;">
  <div style="border-top: 3px solid #C9A84C; padding-top: 20px; margin-bottom: 28px;">
    <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #C9A84C; margin: 0 0 8px;">FORGED Access Scholarship</p>
    <h1 style="font-size: 28px; margin: 0; color: #111;">New Scholarship Application</h1>
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.7;">
    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">Applicant</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; width: 38%; color: #555;">Name</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Age</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${age}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Email</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #C9A84C;">${email}</a></td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Phone</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${phone || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Location</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${city}, ${state}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Sport / Position</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${sport}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Current Level</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${level}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">GPA</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${gpa || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Instagram / YouTube</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${socialUrl || "—"}</td></tr>

    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">References</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Reference 1</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${ref1Name} · ${ref1Relation} · ${ref1Phone} · <a href="mailto:${ref1Email}" style="color:#C9A84C;">${ref1Email}</a></td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Reference 2</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${ref2Name} · ${ref2Relation} · ${ref2Phone} · <a href="mailto:${ref2Email}" style="color:#C9A84C;">${ref2Email}</a></td></tr>

    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">Application</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555; vertical-align: top;">Financial Need</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-style: italic;">${financialNeed}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555; vertical-align: top;">Why FORGED</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-style: italic;">${whyForged}</td></tr>
    ${anythingElse ? `<tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555; vertical-align: top;">Anything Else</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-style: italic;">${anythingElse}</td></tr>` : ""}
  </table>
  <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #888;">
    Submitted via beforged.co/access · ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET
  </div>
</body>
</html>`;

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "FORGED Summit <noreply@beforged.co>",
          to: ["pri@beforged.co"],
          reply_to: email,
          subject: `🔱 Access Scholarship Application — ${firstName} ${lastName}`,
          html,
        }),
      });
      if (!res.ok) console.error("Resend error:", await res.text());
    } else {
      console.log("ACCESS SCHOLARSHIP (no RESEND_API_KEY):", JSON.stringify(data, null, 2));
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Access scholarship error:", e);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
