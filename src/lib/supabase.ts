/**
 * Supabase Client Utility for EKODRIX Website & Admin Panel.
 * Supports NEXT_PUBLIC_SUPABASE_URL with NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY.
 */

const getSupabaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_SUPABASE_URL || "";
};

const getSupabaseKey = (): string => {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    ""
  );
};

export const isSupabaseConfigured = (): boolean => {
  const url = getSupabaseUrl();
  const key = getSupabaseKey();
  return Boolean(
    url &&
      key &&
      url.includes("supabase.co") &&
      !url.includes("your-supabase-project")
  );
};

export async function supabaseFetch<T>(
  endpoint: string,
  options: {
    method?: "GET" | "POST" | "PATCH" | "DELETE";
    body?: any;
    headers?: Record<string, string>;
    query?: string;
  } = {}
): Promise<{ data: T | null; error: string | null }> {
  const url = getSupabaseUrl();
  const key = getSupabaseKey();

  if (!url || !key) {
    return {
      data: null,
      error:
        "Supabase credentials not configured in environment variables (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY).",
    };
  }

  try {
    const requestUrl = `${url}/rest/v1/${endpoint}${options.query ? `?${options.query}` : ""}`;
    const res = await fetch(requestUrl, {
      method: options.method || "GET",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      return {
        data: null,
        error: errJson.message || `Supabase HTTP error (${res.status}): ${res.statusText}`,
      };
    }

    const data = await res.json();
    return { data, error: null };
  } catch (err: any) {
    return {
      data: null,
      error: err.message || "Network error connecting to Supabase database.",
    };
  }
}
