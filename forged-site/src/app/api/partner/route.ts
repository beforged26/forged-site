import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { organization, email, interest } = data ?? {};

    if (!organization || !email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: connect to a CRM / email notification (e.g. Resend, HubSpot, Airtable).
    console.log("New FORGED partner inquiry:", { organization, email, interest });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
