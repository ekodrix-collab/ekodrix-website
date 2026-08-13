import { ProjectRequest, ProjectRequestStats, FilterOptions, RequestStatus } from "@/types/project-request";
import { supabaseFetch, isSupabaseConfigured } from "@/lib/supabase";

/**
 * Interface mapping Supabase table column snake_case to frontend camelCase
 */
interface SupabaseDbRow {
  id: string;
  name: string;
  email: string;
  company?: string;
  project_type: string;
  budget: string;
  timeline: string;
  description: string;
  status: RequestStatus;
  notes?: string;
  created_at: string;
  updated_at?: string;
}

function mapRowToProjectRequest(row: SupabaseDbRow): ProjectRequest {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    company: row.company || "",
    projectType: row.project_type || "",
    budget: row.budget || "",
    timeline: row.timeline || "",
    description: row.description || "",
    status: row.status || "New",
    notes: row.notes || "",
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

/**
 * Service Layer for EKODRIX Project Requests.
 * Fully wired to Supabase database (`project_requests` table).
 * Zero dummy data.
 */
export const ProjectRequestService = {
  /**
   * Fetch project requests from Supabase DB with optional filtering and search.
   */
  async getProjectRequests(filters?: FilterOptions): Promise<ProjectRequest[]> {
    if (!isSupabaseConfigured()) {
      return [];
    }

    // Build PostgREST query parameters
    const queryParts = ["select=*", "order=created_at.desc"];

    if (filters?.status && filters.status !== "All") {
      queryParts.push(`status=eq.${encodeURIComponent(filters.status)}`);
    }

    if (filters?.projectType && filters.projectType !== "All") {
      queryParts.push(`project_type=ilike.${encodeURIComponent(filters.projectType)}`);
    }

    const { data, error } = await supabaseFetch<SupabaseDbRow[]>("project_requests", {
      query: queryParts.join("&"),
    });

    if (error || !data) {
      console.warn("Supabase fetch notice:", error);
      return [];
    }

    let list = data.map(mapRowToProjectRequest);

    if (filters?.searchQuery && filters.searchQuery.trim() !== "") {
      const q = filters.searchQuery.toLowerCase().trim();
      list = list.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.email.toLowerCase().includes(q) ||
          (r.company && r.company.toLowerCase().includes(q)) ||
          r.description.toLowerCase().includes(q) ||
          r.id.toLowerCase().includes(q)
      );
    }

    return list;
  },

  /**
   * Calculate summary statistics directly from dynamic Supabase data.
   */
  async getProjectRequestStats(): Promise<ProjectRequestStats> {
    const list = await this.getProjectRequests();
    return {
      total: list.length,
      new: list.filter((r) => r.status === "New").length,
      contacted: list.filter((r) => r.status === "Contacted").length,
      inProgress: list.filter((r) => r.status === "In Progress").length,
      completed: list.filter((r) => r.status === "Completed").length,
      rejected: list.filter((r) => r.status === "Rejected").length,
    };
  },

  /**
   * Update project request status & notes in Supabase DB.
   */
  async updateProjectRequestStatus(
    id: string,
    status: RequestStatus,
    notes?: string
  ): Promise<ProjectRequest | null> {
    if (!isSupabaseConfigured()) {
      return null;
    }

    const updatePayload: Partial<SupabaseDbRow> = {
      status,
      ...(notes !== undefined ? { notes } : {}),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabaseFetch<SupabaseDbRow[]>("project_requests", {
      method: "PATCH",
      query: `id=eq.${encodeURIComponent(id)}`,
      body: updatePayload,
    });

    if (error || !data || data.length === 0) {
      console.error("Failed to update status in Supabase:", error);
      return null;
    }

    return mapRowToProjectRequest(data[0]);
  },

  /**
   * Submit a new project request into Supabase DB.
   * Called by the Start Project form.
   */
  async createProjectRequest(
    data: Omit<ProjectRequest, "id" | "status" | "created_at">
  ): Promise<{ success: boolean; data?: ProjectRequest; error?: string }> {
    if (!isSupabaseConfigured()) {
      return {
        success: false,
        error:
          "Supabase credentials not set in .env.local. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
      };
    }

    const insertPayload = {
      name: data.name,
      email: data.email,
      company: data.company || null,
      project_type: data.projectType,
      budget: data.budget,
      timeline: data.timeline,
      description: data.description,
      status: "New",
    };

    const { data: result, error } = await supabaseFetch<SupabaseDbRow[]>("project_requests", {
      method: "POST",
      body: insertPayload,
    });

    if (error || !result || result.length === 0) {
      return { success: false, error: error || "Failed to insert record into Supabase." };
    }

    return { success: true, data: mapRowToProjectRequest(result[0]) };
  },

  /**
   * Delete a project request from Supabase DB.
   */
  async deleteProjectRequest(id: string): Promise<boolean> {
    if (!isSupabaseConfigured()) {
      return false;
    }

    const { error } = await supabaseFetch<SupabaseDbRow[]>("project_requests", {
      method: "DELETE",
      query: `id=eq.${encodeURIComponent(id)}`,
    });

    return !error;
  },
};
