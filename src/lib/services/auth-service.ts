export interface AdminUser {
  email: string;
  role: string;
  name: string;
  lastLogin: string;
}

const AUTH_KEY = "ekodrix_admin_session_v1";

export const AuthService = {
  /**
   * Check if current user has an active admin session.
   */
  isAuthenticated(): boolean {
    if (typeof window === "undefined") return false;
    try {
      const session = localStorage.getItem(AUTH_KEY);
      return !!session;
    } catch {
      return false;
    }
  },

  /**
   * Get current authenticated admin user profile.
   */
  getCurrentUser(): AdminUser | null {
    if (typeof window === "undefined") return null;
    try {
      const session = localStorage.getItem(AUTH_KEY);
      if (!session) return null;
      return JSON.parse(session);
    } catch {
      return null;
    }
  },

  /**
   * Login method.
   * Accepts credentials or provides quick admin demo access.
   * 
   * =========================================================================
   * SUPABASE AUTH INTEGRATION READY:
   * const { data, error } = await supabase.auth.signInWithPassword({ email, password });
   * =========================================================================
   */
  async login(email?: string, password?: string): Promise<{ success: boolean; user?: AdminUser; error?: string }> {
    // Default demo validation
    const adminUser: AdminUser = {
      email: email || "admin@ekodrix.com",
      role: "Administrator",
      name: "EKODRIX Admin",
      lastLogin: new Date().toISOString(),
    };

    if (password && password.length < 4) {
      return { success: false, error: "Password must be at least 4 characters." };
    }

    try {
      localStorage.setItem(AUTH_KEY, JSON.stringify(adminUser));
      return { success: true, user: adminUser };
    } catch (err) {
      return { success: false, error: "Failed to store authentication session." };
    }
  },

  /**
   * Logout administrator and clear session.
   */
  logout(): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(AUTH_KEY);
    } catch (err) {
      console.error("Error during logout:", err);
    }
  }
};
