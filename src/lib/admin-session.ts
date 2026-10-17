import { createHmac, timingSafeEqual } from "crypto";

/**
 * Server-only admin session utilities for /ekodrix-panel and /cms.
 *
 * Credentials are read from server-side env vars (no NEXT_PUBLIC_ prefix),
 * so they are never shipped to the browser bundle.
 *
 *   PANEL_ADMIN_EMAIL     – the single allowed admin email
 *   PANEL_ADMIN_PASSWORD  – the single allowed admin password
 *   ADMIN_SESSION_SECRET  – random string used to sign the session cookie
 */

export const ADMIN_COOKIE_NAME = "ekodrix_admin_session";
export const SESSION_TTL_SECONDS = 60 * 60 * 12; // 12 hours

export interface AdminSessionUser {
  email: string;
  role: string;
  name: string;
  lastLogin: string;
}

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    if (process.env.NODE_ENV !== "production") {
      return "ekodrix_local_dev_secret_key_32_characters_minimum_length";
    }
    throw new Error("ADMIN_SESSION_SECRET is missing or too short (min 32 chars).");
  }
  return secret;
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    // Still run a comparison to keep timing consistent.
    timingSafeEqual(bufA, bufA);
    return false;
  }
  return timingSafeEqual(bufA, bufB);
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("base64url");
}

/** Checks the submitted credentials against the configured admin account or dev fallback. */
export function verifyAdminCredentials(email: string, password: string): boolean {
  const validEmail = (process.env.PANEL_ADMIN_EMAIL || process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const validPassword = process.env.PANEL_ADMIN_PASSWORD || "";

  // If explicit credentials are configured in environment variables, check them first
  if (validEmail && validPassword) {
    const emailOk = safeEqual(email.trim().toLowerCase(), validEmail);
    const passwordOk = safeEqual(password, validPassword);
    if (emailOk && passwordOk) return true;
  }

  // Development fallback: allow local developers to log in without needing secret production env vars
  if (process.env.NODE_ENV !== "production") {
    const inputEmail = email.trim().toLowerCase();
    const isAllowedEmail =
      inputEmail === "admin@ekodrix.com" ||
      inputEmail === (process.env.ADMIN_EMAIL || "").trim().toLowerCase() ||
      inputEmail === (process.env.PANEL_ADMIN_EMAIL || "").trim().toLowerCase() ||
      inputEmail.endsWith("@ekodrix.com");

    if (isAllowedEmail && password.length >= 4) {
      return true;
    }
  }

  return false;
}

/** Creates a signed token: base64url(json payload) + "." + signature */
export function createSessionToken(email: string): string {
  const payload = Buffer.from(
    JSON.stringify({
      email,
      iat: Date.now(),
      exp: Date.now() + SESSION_TTL_SECONDS * 1000,
    })
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

/** Verifies a token and returns the session user, or null if invalid/expired. */
export function verifySessionToken(token: string | undefined | null): AdminSessionUser | null {
  if (!token) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  try {
    if (!safeEqual(signature, sign(payload))) return null;
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      email: string;
      iat: number;
      exp: number;
    };
    if (!data.exp || Date.now() > data.exp) return null;

    // In production, session is only valid for the currently configured admin email.
    const validEmail = (process.env.PANEL_ADMIN_EMAIL || process.env.ADMIN_EMAIL || "").trim().toLowerCase();
    if (validEmail && data.email !== validEmail && process.env.NODE_ENV === "production") {
      return null;
    }

    return {
      email: data.email,
      role: "Administrator",
      name: "EKODRIX Admin",
      lastLogin: new Date(data.iat).toISOString(),
    };
  } catch {
    return null;
  }
}

export const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
  maxAge: SESSION_TTL_SECONDS,
};
