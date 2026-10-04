export interface AdminUser {
  email: string;
  role: string;
  name: string;
  lastLogin: string;
}

/**
 * Client-side wrapper around the server admin auth API.
 *
 * Credentials are verified on the server (/api/admin/login) against
 * server-only env vars, and the session is stored in an httpOnly signed
 * cookie — nothing secret is stored in localStorage or the JS bundle.
 */
export const AuthService = {
  /** Returns the logged-in admin, or null if there is no valid session. */
  async checkSession(): Promise<AdminUser | null> {
    try {
      const res = await fetch("/api/admin/session", {
        method: "GET",
        credentials: "same-origin",
        cache: "no-store",
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data.authenticated ? (data.user as AdminUser) : null;
    } catch {
      return null;
    }
  },

  async login(
    email: string,
    password: string
  ): Promise<{ success: boolean; user?: AdminUser; error?: string }> {
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        return { success: false, error: data.error || "Invalid admin email or password." };
      }
      return { success: true, user: data.user as AdminUser };
    } catch {
      return { success: false, error: "Network error. Please try again." };
    }
  },

  async logout(): Promise<void> {
    try {
      await fetch("/api/admin/logout", { method: "POST", credentials: "same-origin" });
    } catch (err) {
      console.error("Error during logout:", err);
    }
  },
};
