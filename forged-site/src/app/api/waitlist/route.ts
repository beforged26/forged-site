import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email, name, howDidYouHear } = data;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Georgia, serif; max-width: 680px; margin: 0 auto; padding: 24px; color: #111;">
  <div style="border-top: 3px solid #C9A84C; padding-top: 20px; margin-bottom: 28px;">
    <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #C9A84C; margin: 0 0 8px;">FORGED Summit — Indoor Volleyball 2026</p>
    <h1 style="font-size: 28px; margin: 0; color: #111;">New Waitlist Signup</h1>
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.7;">
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; width: 38%; color: #555;">Name</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${name || "—"}</td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">Email</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #C9A84C;">${email}</a></td></tr>
    <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #555;">How did they hear about us?</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${howDidYouHear || "—"}</td></tr>
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
          subject: `🔱 Waitlist — ${name || email}`,
          html,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
      }
    } else {
      console.log("WAITLIST SIGNUP (no RESEND_API_KEY set):", { email, name, howDidYouHear });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
