import {
  PortfolioItem,
  PortfolioProject,
  PortfolioStats,
  SupabasePortfolioRow,
} from "@/types/portfolio";
import { DEFAULT_PORTFOLIO_ITEMS, defaultItemToProjectSeed } from "@/lib/portfolio-defaults";
import { supabaseFetch, isSupabaseConfigured } from "@/lib/supabase";

function mapRowToProject(row: SupabasePortfolioRow): PortfolioProject {
  return {
    id: row.id,
    source: row.source || "ADMIN",
    legacyId: row.legacy_id || null,
    slug: row.slug,
    title: row.title,
    category: row.category,
    domain: row.domain,
    imageUrl: row.image_url,
    externalUrl: row.external_url || undefined,
    description: row.description || undefined,
    altText: row.alt_text || undefined,
    isPublished: row.is_published ?? true,
    isFeatured: row.is_featured ?? false,
    isArchived: row.is_archived ?? false,
    displayOrder: row.display_order ?? 0,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function mapProjectToPublicItem(project: PortfolioProject): PortfolioItem {
  return {
    id: project.legacyId || project.slug || project.id,
    title: project.title,
    category: project.category,
    image: project.imageUrl,
    url: project.domain,
    description: project.description,
    source: project.source,
    isFeatured: project.isFeatured,
    isPublished: project.isPublished,
    isArchived: project.isArchived,
    displayOrder: project.displayOrder,
    externalUrl: project.externalUrl,
    altText: project.altText,
  };
}

export const PortfolioService = {
  /**
   * Retrieves merged public portfolio:
   * 1. Loads 13 hardcoded default projects.
   * 2. Overrides matching defaults with database values (or hides them if unpublished/archived).
   * 3. Appends all published, non-archived admin-created projects.
   * 4. Sorts by displayOrder.
   * 5. Safely falls back to 13 hardcoded defaults if database is unreachable.
   */
  async getPublicPortfolio(): Promise<PortfolioItem[]> {
    if (!isSupabaseConfigured()) {
      return [...DEFAULT_PORTFOLIO_ITEMS];
    }

    try {
      const { data: rows, error } = await supabaseFetch<SupabasePortfolioRow[]>(
        "portfolio_projects",
        {
          method: "GET",
          query: "is_archived=eq.false&order=display_order.asc,created_at.desc",
        }
      );

      if (error || !rows) {
        console.warn("[PortfolioService] Database fetch error, falling back to static defaults:", error);
        return [...DEFAULT_PORTFOLIO_ITEMS];
      }

      const dbProjects = rows.map(mapRowToProject);

      // Map DB overrides by legacyId or slug
      const dbByLegacyId = new Map<string, PortfolioProject>();
      const customAdminProjects: PortfolioProject[] = [];

      for (const p of dbProjects) {
        if (p.source === "DEFAULT" && p.legacyId) {
          dbByLegacyId.set(p.legacyId, p);
        } else if (p.source === "DEFAULT" && p.slug) {
          dbByLegacyId.set(p.slug, p);
        } else {
          customAdminProjects.push(p);
        }
      }

      const mergedList: PortfolioItem[] = [];

      // 1. Process the 13 default items
      for (const defaultItem of DEFAULT_PORTFOLIO_ITEMS) {
        const dbOverride = dbByLegacyId.get(defaultItem.id);

        if (dbOverride) {
          // If admin unpublished or archived this default project, skip it
          if (!dbOverride.isPublished || dbOverride.isArchived) {
            continue;
          }
          // Otherwise use the admin-updated values
          mergedList.push(mapProjectToPublicItem(dbOverride));
        } else {
          // Fallback: default project has no DB record yet, keep original
          mergedList.push({ ...defaultItem });
        }
      }

      // 2. Add published custom admin projects
      for (const adminProj of customAdminProjects) {
        if (adminProj.isPublished && !adminProj.isArchived) {
          mergedList.push(mapProjectToPublicItem(adminProj));
        }
      }

      // 3. Sort by displayOrder
      mergedList.sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));

      return mergedList;
    } catch (err) {
      console.error("[PortfolioService] Unexpected error getting public portfolio:", err);
      return [...DEFAULT_PORTFOLIO_ITEMS];
    }
  },

  /**
   * Retrieves all projects for Admin Panel (including drafts and archived defaults)
   */
  async getAdminProjects(): Promise<PortfolioProject[]> {
    if (!isSupabaseConfigured()) {
      return DEFAULT_PORTFOLIO_ITEMS.map((item, idx) => ({
        id: item.id,
        source: "DEFAULT" as const,
        legacyId: item.id,
        slug: item.id,
        title: item.title,
        category: item.category,
        domain: item.url,
        imageUrl: item.image,
        isPublished: true,
        isFeatured: item.isFeatured ?? false,
        isArchived: false,
        displayOrder: item.displayOrder ?? idx + 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }));
    }

    try {
      const { data: rows, error } = await supabaseFetch<SupabasePortfolioRow[]>(
        "portfolio_projects",
        {
          method: "GET",
          query: "order=display_order.asc,created_at.desc",
        }
      );

      if (error || !rows) {
        throw new Error(error || "Failed to load portfolio projects from database");
      }

      // If database table is empty, return mapped default projects so admin can seed them
      if (rows.length === 0) {
        return DEFAULT_PORTFOLIO_ITEMS.map((item, idx) => ({
          id: item.id,
          source: "DEFAULT" as const,
          legacyId: item.id,
          slug: item.id,
          title: item.title,
          category: item.category,
          domain: item.url,
          imageUrl: item.image,
          isPublished: true,
          isFeatured: item.isFeatured ?? false,
          isArchived: false,
          displayOrder: item.displayOrder ?? idx + 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }));
      }

      return rows.map(mapRowToProject);
    } catch (err: any) {
      console.error("[PortfolioService] getAdminProjects error:", err.message);
      throw err;
    }
  },

  /**
   * Creates a new admin portfolio project
   */
  async createProject(projectData: {
    title: string;
    slug?: string;
    category: string;
    domain: string;
    imageUrl: string;
    externalUrl?: string;
    description?: string;
    altText?: string;
    isPublished?: boolean;
    isFeatured?: boolean;
    displayOrder?: number;
  }): Promise<{ success: boolean; project?: PortfolioProject; error?: string }> {
    if (!isSupabaseConfigured()) {
      return { success: false, error: "Database not configured." };
    }

    const cleanSlug = (
      projectData.slug ||
      projectData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
    ).trim();

    const cleanDomain = projectData.domain.replace(/^https?:\/\//, "").replace(/\/.*$/, "");

    const body: Record<string, any> = {
      source: "ADMIN",
      slug: cleanSlug,
      title: projectData.title.trim(),
      category: projectData.category.trim(),
      domain: cleanDomain,
      image_url: projectData.imageUrl.trim(),
      external_url: projectData.externalUrl?.trim() || `https://${cleanDomain}`,
      description: projectData.description?.trim() || null,
      alt_text: projectData.altText?.trim() || `${projectData.title} by Ekodrix`,
      is_published: projectData.isPublished ?? true,
      is_featured: projectData.isFeatured ?? false,
      is_archived: false,
      display_order: projectData.displayOrder ?? 99,
    };

    const { data, error } = await supabaseFetch<SupabasePortfolioRow[]>("portfolio_projects", {
      method: "POST",
      body,
    });

    if (error || !data || data.length === 0) {
      return { success: false, error: error || "Failed to create project in database." };
    }

    return { success: true, project: mapRowToProject(data[0]) };
  },

  /**
   * Updates an existing project
   */
  async updateProject(
    id: string,
    updates: Partial<PortfolioProject>
  ): Promise<{ success: boolean; project?: PortfolioProject; error?: string }> {
    if (!isSupabaseConfigured()) {
      return { success: false, error: "Database not configured." };
    }

    const body: Record<string, any> = {};
    if (updates.title !== undefined) body.title = updates.title;
    if (updates.slug !== undefined) body.slug = updates.slug;
    if (updates.category !== undefined) body.category = updates.category;
    if (updates.domain !== undefined) body.domain = updates.domain.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
    if (updates.imageUrl !== undefined) body.image_url = updates.imageUrl;
    if (updates.externalUrl !== undefined) body.external_url = updates.externalUrl;
    if (updates.description !== undefined) body.description = updates.description;
    if (updates.altText !== undefined) body.alt_text = updates.altText;
    if (updates.isPublished !== undefined) body.is_published = updates.isPublished;
    if (updates.isFeatured !== undefined) body.is_featured = updates.isFeatured;
    if (updates.isArchived !== undefined) body.is_archived = updates.isArchived;
    if (updates.displayOrder !== undefined) body.display_order = updates.displayOrder;

    const { data, error } = await supabaseFetch<SupabasePortfolioRow[]>("portfolio_projects", {
      method: "PATCH",
      query: `id=eq.${id}`,
      body,
    });

    if (error || !data || data.length === 0) {
      return { success: false, error: error || "Failed to update project." };
    }

    return { success: true, project: mapRowToProject(data[0]) };
  },

  /**
   * Deletes or archives a project:
   * - If default project: marks as archived/unpublished so fallback doesn't reappear
   * - If admin project: deletes or marks archived
   */
  async deleteProject(id: string, isDefault = false): Promise<{ success: boolean; error?: string }> {
    if (!isSupabaseConfigured()) {
      return { success: false, error: "Database not configured." };
    }

    if (isDefault) {
      // Mark as archived in database so it stays hidden
      const { error } = await supabaseFetch("portfolio_projects", {
        method: "PATCH",
        query: `id=eq.${id}`,
        body: { is_archived: true, is_published: false },
      });
      if (error) return { success: false, error };
      return { success: true };
    }

    // Admin project: delete from table
    const { error } = await supabaseFetch("portfolio_projects", {
      method: "DELETE",
      query: `id=eq.${id}`,
    });

    if (error) return { success: false, error };
    return { success: true };
  },

  /**
   * Idempotent seed/sync of the 13 hardcoded default projects into Supabase.
   * If a project already exists with legacy_id, it is preserved (does NOT overwrite admin edits).
   */
  async syncDefaultProjects(): Promise<{ success: boolean; count: number; error?: string }> {
    if (!isSupabaseConfigured()) {
      return { success: false, count: 0, error: "Database not configured." };
    }

    try {
      // Check which legacy IDs currently exist in DB
      const { data: existingRows } = await supabaseFetch<SupabasePortfolioRow[]>(
        "portfolio_projects",
        {
          method: "GET",
          query: "source=eq.DEFAULT&select=legacy_id,id,slug",
        }
      );

      const existingLegacyIds = new Set(
        (existingRows || []).map((r) => r.legacy_id).filter(Boolean)
      );

      let syncedCount = 0;

      for (const defaultItem of DEFAULT_PORTFOLIO_ITEMS) {
        if (!existingLegacyIds.has(defaultItem.id)) {
          const seed = defaultItemToProjectSeed(defaultItem);
          const body: Record<string, any> = {
            source: "DEFAULT",
            legacy_id: seed.legacyId,
            slug: seed.slug,
            title: seed.title,
            category: seed.category,
            domain: seed.domain,
            image_url: seed.imageUrl,
            external_url: seed.externalUrl,
            description: seed.description,
            alt_text: seed.altText,
            is_published: seed.isPublished ?? true,
            is_featured: seed.isFeatured ?? false,
            is_archived: false,
            display_order: seed.displayOrder ?? 0,
          };

          const { error } = await supabaseFetch("portfolio_projects", {
            method: "POST",
            body,
          });

          if (!error) {
            syncedCount++;
          }
        }
      }

      return { success: true, count: syncedCount };
    } catch (err: any) {
      return { success: false, count: 0, error: err.message || "Failed to sync defaults." };
    }
  },

  /**
   * Batch update display orders
   */
  async reorderProjects(orders: { id: string; displayOrder: number }[]): Promise<boolean> {
    if (!isSupabaseConfigured()) return false;

    try {
      await Promise.all(
        orders.map((item) =>
          supabaseFetch("portfolio_projects", {
            method: "PATCH",
            query: `id=eq.${item.id}`,
            body: { display_order: item.displayOrder },
          })
        )
      );
      return true;
    } catch {
      return false;
    }
  },

  /**
   * Calculate dashboard statistics
   */
  calculateStats(projects: PortfolioProject[]): PortfolioStats {
    const total = projects.filter((p) => !p.isArchived).length;
    const published = projects.filter((p) => p.isPublished && !p.isArchived).length;
    const drafts = projects.filter((p) => !p.isPublished && !p.isArchived).length;
    const featured = projects.filter((p) => p.isFeatured && !p.isArchived).length;
    const defaults = projects.filter((p) => p.source === "DEFAULT" && !p.isArchived).length;
    const custom = projects.filter((p) => p.source === "ADMIN" && !p.isArchived).length;

    return { total, published, drafts, featured, defaults, custom };
  },
};
