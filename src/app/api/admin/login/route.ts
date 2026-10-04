import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  createSessionToken,
  sessionCookieOptions,
  verifyAdminCredentials,
  verifySessionToken,
} from "@/lib/admin-session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Basic in-memory brute-force throttle (per server instance).
const attempts = new Map<string, { count: number; first: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;

function getClientKey(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(req: Request) {
  const key = getClientKey(req);
  const now = Date.now();
  const record = attempts.get(key);

  if (record && now - record.first < WINDOW_MS && record.count >= MAX_ATTEMPTS) {
    return NextResponse.json(
      { success: false, error: "Too many failed attempts. Try again in 15 minutes." },
      { status: 429 }
    );
  }

  let email = "";
  let password = "";
  try {
    const body = await req.json();
    email = typeof body.email === "string" ? body.email : "";
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  if (!verifyAdminCredentials(email, password)) {
    if (!record || now - record.first >= WINDOW_MS) {
      attempts.set(key, { count: 1, first: now });
    } else {
      record.count += 1;
    }
    return NextResponse.json(
      { success: false, error: "Invalid admin email or password." },
      { status: 401 }
    );
  }

  attempts.delete(key);
  const token = createSessionToken(email.trim().toLowerCase());
  const user = verifySessionToken(token);

  const res = NextResponse.json({ success: true, user });
  res.cookies.set(ADMIN_COOKIE_NAME, token, sessionCookieOptions);
  return res;
}
