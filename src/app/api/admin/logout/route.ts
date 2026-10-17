import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, sessionCookieOptions } from "@/lib/admin-session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const res = NextResponse.json({ success: true });
  res.cookies.set(ADMIN_COOKIE_NAME, "", { ...sessionCookieOptions, maxAge: 0 });
  return res;
}
