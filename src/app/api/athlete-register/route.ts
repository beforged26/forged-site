import { NextResponse } from "next/server";


function esc(v: unknown): string {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function confirmationEmail(firstName: string, isBeach: boolean) {
  const name = esc(firstName);
  const title = isBeach ? "FORGED Beach Summit" : "FORGED Summit";
  const when = isBeach
    ? "February 2027 &middot; Dania Beach, Florida"
    : "November 26&ndash;29, 2026 &middot; Mesa, Arizona";
  const steps = isBeach
    ? `<li style="margin-bottom:10px;">Choose your payment option on the registration page to hold your spot. Stripe will email you a receipt when your payment goes through.</li>
       <li style="margin-bottom:10px;">A signed waiver is required at check-in. You can also email a signed copy ahead of time to <a href="mailto:info@beforged.co" style="color:#8a6d1f;">info@beforged.co</a>.</li>`
    : `<li style="margin-bottom:10px;"><b>Hold your spot.</b> If you have not paid yet, choose your payment option on the registration page. The $350 deposit holds your spot. It is non-refundable, but you can transfer it to another athlete until Nov 10. Stripe emails you a receipt when your payment goes through.</li>
       <li style="margin-bottom:10px;"><b>Balance due Nov 10.</b> The remaining balance is due Nov 10. If your club or high school reaches 6 registered athletes with your group code, every athlete in your group gets the $650 group rate.</li>
       <li style="margin-bottom:10px;"><b>Waiver.</b> A signed waiver is required at check-in. You can also email a signed copy ahead of time to <a href="mailto:info@beforged.co" style="color:#8a6d1f;">info@beforged.co</a>.</li>`;
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111; line-height: 1.7; font-size: 15px;">
  <div style="border-top: 3px solid #C9A84C; padding-top: 20px; margin-bottom: 24px;">
    <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #C9A84C; margin: 0 0 8px;">${title}</p>
    <h1 style="font-size: 26px; margin: 0;">We received your registration, ${name}.</h1>
  </div>
  <p>Thank you for registering for the ${title}. We have your information, and we are glad you are coming.</p>
  <p style="margin: 0 0 4px;"><b>When and where</b></p>
  <p style="margin: 0 0 20px;">${when}</p>
  <p style="margin: 0 0 8px;"><b>What happens next</b></p>
  <ol style="padding-left: 20px; margin: 0 0 20px;">
    ${steps}
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
      clubName, clubCoachName, clubDirectorName,
      highSchool, highSchoolCoach,
      position, gradYear, shirtSize, instagram,
      referFriend, friendName, friendEmail,
      suggestCoach, suggestCoachName, suggestCoachContact,
      guardianName, guardianPhone, guardianEmail,
      goal, event,
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
    <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #C9A84C; margin: 0 0 8px;">FORGED Summit — Indoor Volleyball 2026</p>
    <h1 style="font-size: 28px; margin: 0; color: #111;">New Athlete Registration</h1>
  </div>

  <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.7;">
    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">Personal Info</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; width: 38%; color: #555;">Name</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Email</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #C9A84C;">${email}</a></td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Phone</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${phone || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Location</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${city || "—"}, ${state || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Instagram</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${instagram ? `@${instagram.replace(/^@/, "")}` : "—"}</td></tr>

    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">Club Program</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Club Name</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${clubName || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Club Coach</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${clubCoachName || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Club Director</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${clubDirectorName || "—"}</td></tr>

    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">High School</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">High School</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${highSchool || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">HS Coach</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${highSchoolCoach || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Grad Year</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${gradYear || "—"}</td></tr>

    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">About the Athlete</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Position</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${position || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Shirt Size</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${shirtSize || "—"}</td></tr>

    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">Friend Referral</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Referring a friend?</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${referFriend ? "Yes" : "No"}</td></tr>
    ${referFriend ? `
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Friend Name</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${friendName || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Friend Email</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${friendEmail}" style="color: #C9A84C;">${friendEmail || "—"}</a></td></tr>
    ` : ""}

    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">Coach Nomination</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Nominated a coach?</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${suggestCoach ? "Yes" : "No"}</td></tr>
    ${suggestCoach ? `
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Coach Name</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${suggestCoachName || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Coach Contact</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${suggestCoachContact || "—"}</td></tr>
    ` : ""}

    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">Emergency Contact</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Guardian Name</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${guardianName || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Guardian Phone</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${guardianPhone || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Guardian Email</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${guardianEmail || "—"}</td></tr>

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
          subject: `🔱 Athlete Registration — ${firstName} ${lastName}`,
          html,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
        // Still return ok — don't lose the submission
      }

      // Confirmation to the athlete (and guardian, if given). Never blocks the submission.
      try {
        const recipients = [email];
        if (
          guardianEmail &&
          typeof guardianEmail === "string" &&
          guardianEmail.includes("@") &&
          guardianEmail.toLowerCase() !== String(email).toLowerCase()
        ) {
          recipients.push(guardianEmail);
        }
        const confRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "FORGED Summit <noreply@beforged.co>",
            to: recipients,
            reply_to: "info@beforged.co",
            subject: "We received your FORGED Summit registration",
            html: confirmationEmail(firstName, event === "beach"),
          }),
        });
        if (!confRes.ok) {
          console.error("Resend confirmation error:", await confRes.text());
        }
      } catch (err) {
        console.error("Confirmation email error:", err);
      }
    } else {
      console.log("ATHLETE REGISTRATION (no RESEND_API_KEY set):", JSON.stringify(data, null, 2));
    }

    // ── Google Sheet backup ───────────────────────────────────────────────────
    const sheetUrl = process.env.GOOGLE_SHEET_URL;
    if (sheetUrl) {
      try {
        await fetch(sheetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "athlete", ...data }),
        });
      } catch (err) {
        console.error("Sheet log error:", err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Athlete register error:", e);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
