import { NextResponse } from "next/server";

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
      guardianName, guardianPhone, guardianEmail,
      goal,
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

    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">Emergency Contact</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Guardian Name</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${guardianName || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Guardian Phone</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${guardianPhone || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Guardian Email</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${guardianEmail || "—"}</td></tr>

    <tr><td colspan="2" style="background: #f5f0e8; padding: 8px 12px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: bold; color: #C9A84C;">Their Goal</td></tr>
    <tr><td colspan="2" style="padding: 12px; color: #111; font-style: italic; border-bottom: 1px solid #eee;">${goal || "—"}</td></tr>
  </table>

  <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #888;">
    Submitted via beforged.co · ${new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" })} AZ time
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
          to: ["pri@beforged.co"],
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
    } else {
      console.log("ATHLETE REGISTRATION (no RESEND_API_KEY set):", JSON.stringify(data, null, 2));
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Athlete register error:", e);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
