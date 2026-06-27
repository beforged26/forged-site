import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      firstName, lastName, email, phone,
      city, state,
      levels, collegeDivision,
      programName,
      shirtSize,
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
          subject: `🔱 Coach Registration — ${firstName} ${lastName}`,
          html,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
      }
    } else {
      console.log("COACH REGISTRATION (no RESEND_API_KEY set):", JSON.stringify(data, null, 2));
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Coach register error:", e);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
