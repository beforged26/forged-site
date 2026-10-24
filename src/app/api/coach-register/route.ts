import { NextResponse } from "next/server";

function esc(v: unknown): string {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function coachConfirmationEmail(firstName: string) {
  const name = esc(firstName);
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111; line-height: 1.7; font-size: 15px;">
  <div style="border-top: 3px solid #C9A84C; padding-top: 20px; margin-bottom: 24px;">
    <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #C9A84C; margin: 0 0 8px;">FORGED Summit &middot; Coaches</p>
    <h1 style="font-size: 26px; margin: 0;">We received your registration, ${name}.</h1>
  </div>
  <p>Thank you for registering as a coach for the FORGED Summit. We have your information, and we are glad you are coming.</p>
  <p style="margin: 0 0 4px;"><b>When and where</b></p>
  <p style="margin: 0 0 20px;">November 26&ndash;29, 2026 &middot; Mesa, Arizona</p>
  <p style="margin: 0 0 8px;"><b>What happens next</b></p>
  <ol style="padding-left: 20px; margin: 0 0 20px;">
    <li style="margin-bottom:10px;"><b>Complete payment if you have not yet.</b> Use the payment button on the coach registration page. Stripe emails you a receipt when your payment goes through.</li>
    <li style="margin-bottom:10px;"><b>Bring your athletes, get in free.</b> Register 4 athletes, from your club or your own roster, and earn one complimentary entry to the full summit weekend. Email <a href="mailto:info@beforged.co" style="color:#8a6d1f;">info@beforged.co</a> with your name and the 4 athlete registrations, and we will confirm within 48 hours.</li>
    <li style="margin-bottom:10px;"><b>Waiver.</b> A signed waiver is required at check-in. You can also email a signed copy ahead of time to <a href="mailto:info@beforged.co" style="color:#8a6d1f;">info@beforged.co</a>.</li>
    <li style="margin-bottom:10px;"><b>Schedule.</b> The final coach schedule will be sent before the event.</li>
  </ol>
  <p>Questions? Reply to this email or write to <a href="mailto:info@beforged.co" style="color:#8a6d1f;">info@beforged.co</a>.</p>
  <p style="margin-top: 28px;">Stronger athletes. Stronger leaders.<br><b>FORGED</b></p>
  <div style="margin-top: 28px; padding-top: 14px; border-top: 1px solid #eee; font-size: 12px; color: #888;">
    FORGED is a DBA of Optimum Volleyball, Inc. &middot; beforged.co
  </div>
</body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      firstName, lastName, email, phone,
      city, state,
      levels, collegeDivision,
      programName,
      shirtSize,
      referCoach, referCoachName, referCoachContact,
      goal,
    } = data;

    if (!firstName || !lastName || !email || !email.includes("@")) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const levelList = Array.isArray(levels) ? levels.join(", ") : levels || "—";
    const divisionLine = (Array.isArray(levels) && levels.includes("College")) || levels === "College"
      ? `<tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">College Division</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${collegeDivision || "—"}</td></tr>`
      : "";

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Georgia, serif; max-width: 680px; margin: 0 auto; padding: 24px; color: #111;">
  <div style="border-top: 3px solid #C9A84C; padding-top: 20px; margin-bottom: 28px;">
    <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #C9A84C; margin: 0 0 8px;">FORGED Summit — Indoor Volleyball 2026</p>
    <h1 style="font-size: 28px; margin: 0; color: #111;">New Coach Registration</h1>
  </div>

  <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.7;">
    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">Personal Info</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; width: 38%; color: #555;">Name</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Email</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #C9A84C;">${email}</a></td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Phone</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${phone || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Location</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${city || "—"}, ${state || "—"}</td></tr>

    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">Coaching Info</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Coaching Level</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${levelList}</td></tr>
    ${divisionLine}
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Program / School / Club</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${programName || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Shirt Size</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${shirtSize || "—"}</td></tr>

    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">Coach Referral</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Referred a coach?</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${referCoach ? "Yes" : "No"}</td></tr>
    ${referCoach ? `
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Coach Name</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${referCoachName || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Coach Contact</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${referCoachContact || "—"}</td></tr>
    ` : ""}

    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">Their Goal</td></tr>
    <tr><td colspan="2" style="padding: 12px; color: #111; font-style: italic; border-bottom: 1px solid #eee;">${goal || "—"}</td></tr>
  </table>

  <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #888;">
    Submitted via beforged.co · ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET
  </div>
</body>
</html>
`;

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
          to: ["info@beforged.co"],
          reply_to: email,
          subject: `🔱 Coach Registration — ${firstName} ${lastName}`,
          html,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
      }

      // Confirmation to the coach. Never blocks the registration.
      try {
        const cres = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "FORGED Summit <noreply@beforged.co>",
            to: [email],
            reply_to: "info@beforged.co",
            subject: "We received your FORGED Summit coach registration",
            html: coachConfirmationEmail(firstName),
          }),
        });
        if (!cres.ok) console.error("Coach confirmation error:", await cres.text());
      } catch (err) {
        console.error("Coach confirmation error:", err);
      }
    } else {
      console.log("COACH REGISTRATION (no RESEND_API_KEY set):", JSON.stringify(data, null, 2));
    }

    // ── Google Sheet backup ───────────────────────────────────────────────────
    const sheetUrl = process.env.GOOGLE_SHEET_URL;
    if (sheetUrl) {
      try {
        await fetch(sheetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "coach", ...data }),
        });
      } catch (err) {
        console.error("Sheet log error:", err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Coach register error:", e);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
