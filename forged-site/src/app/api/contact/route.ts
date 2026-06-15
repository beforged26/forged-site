import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = data ?? {};

    if (!name || !email || !message || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: connect to a CRM / email notification (e.g. Resend, SendGrid).
    console.log("New FORGED contact message:", { name, email, subject, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
