import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, role, sport, ageGroup } = data ?? {};

    if (!name || !email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: connect to a CRM / spreadsheet / email notification (e.g. Airtable, Resend, Google Sheets).
    console.log("New FORGED registration:", { name, email, role, sport, ageGroup });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
