export type ProjectSource = "DEFAULT" | "ADMIN";

/**
 * Public portfolio item format expected by the frontend PortfolioCard component.
 * Exact drop-in replacement and extension for the hardcoded portfolio items.
 */
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  url: string;
  description?: string;
  source?: ProjectSource;
  isFeatured?: boolean;
  isPublished?: boolean;
  isArchived?: boolean;
  displayOrder?: number;
  externalUrl?: string;
  altText?: string;
}

/**
 * Full database record for a portfolio project.
 */
export interface PortfolioProject {
  id: string;
  source: ProjectSource;
  legacyId: string | null;
  slug: string;
  title: string;
  category: string;
  domain: string;
  imageUrl: string;
  externalUrl?: string;
  description?: string;
  altText?: string;
  isPublished: boolean;
  isFeatured: boolean;
  isArchived: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

/**
 * Supabase raw database row format (snake_case)
 */
export interface SupabasePortfolioRow {
  id: string;
  source: ProjectSource;
  legacy_id?: string | null;
  slug: string;
  title: string;
  category: string;
  domain: string;
  image_url: string;
  external_url?: string | null;
  description?: string | null;
  alt_text?: string | null;
  is_published: boolean;
  is_featured: boolean;
  is_archived: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface PortfolioStats {
  total: number;
  published: number;
  drafts: number;
  featured: number;
  defaults: number;
  custom: number;
}
