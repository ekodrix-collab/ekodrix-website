-- =========================================================================
-- EKODRIX Dynamic Portfolio Projects — Supabase Schema & RLS
-- Run this in Supabase Dashboard -> SQL Editor -> Run
-- =========================================================================

-- 1. Create the portfolio_projects table
CREATE TABLE IF NOT EXISTS public.portfolio_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source TEXT NOT NULL DEFAULT 'ADMIN' CHECK (source IN ('DEFAULT', 'ADMIN')),
    legacy_id TEXT UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    domain TEXT NOT NULL,
    image_url TEXT NOT NULL,
    external_url TEXT,
    description TEXT,
    alt_text TEXT,
    is_published BOOLEAN NOT NULL DEFAULT true,
    is_featured BOOLEAN NOT NULL DEFAULT false,
    is_archived BOOLEAN NOT NULL DEFAULT false,
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Indexes for fast ordering and filtering
CREATE INDEX IF NOT EXISTS idx_portfolio_published ON public.portfolio_projects (is_published, is_archived, display_order);
CREATE INDEX IF NOT EXISTS idx_portfolio_legacy_id ON public.portfolio_projects (legacy_id);
CREATE INDEX IF NOT EXISTS idx_portfolio_slug ON public.portfolio_projects (slug);

-- 3. Enable RLS
ALTER TABLE public.portfolio_projects ENABLE ROW LEVEL SECURITY;

-- 4. Drop old policies if re-running
DROP POLICY IF EXISTS "Allow public read published portfolio" ON public.portfolio_projects;
DROP POLICY IF EXISTS "Allow full admin read portfolio" ON public.portfolio_projects;
DROP POLICY IF EXISTS "Allow full admin insert portfolio" ON public.portfolio_projects;
DROP POLICY IF EXISTS "Allow full admin update portfolio" ON public.portfolio_projects;
DROP POLICY IF EXISTS "Allow full admin delete portfolio" ON public.portfolio_projects;
DROP POLICY IF EXISTS "Allow public select" ON public.portfolio_projects;
DROP POLICY IF EXISTS "Allow public insert" ON public.portfolio_projects;
DROP POLICY IF EXISTS "Allow public update" ON public.portfolio_projects;
DROP POLICY IF EXISTS "Allow public delete" ON public.portfolio_projects;

-- 5. Standard policies matching project pattern
CREATE POLICY "Allow public select" 
ON public.portfolio_projects
FOR SELECT 
TO anon, authenticated, public
USING (true);

CREATE POLICY "Allow public insert" 
ON public.portfolio_projects
FOR INSERT 
TO anon, authenticated, public
WITH CHECK (true);

CREATE POLICY "Allow public update" 
ON public.portfolio_projects
FOR UPDATE 
TO anon, authenticated, public
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow public delete" 
ON public.portfolio_projects
FOR DELETE 
TO anon, authenticated, public
USING (true);

-- 6. Grant permissions
GRANT ALL ON public.portfolio_projects TO anon, authenticated, service_role;

-- 7. Trigger for updated_at
CREATE OR REPLACE FUNCTION update_portfolio_projects_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_update_portfolio_projects_updated_at ON public.portfolio_projects;
CREATE TRIGGER trigger_update_portfolio_projects_updated_at
BEFORE UPDATE ON public.portfolio_projects
FOR EACH ROW
EXECUTE FUNCTION update_portfolio_projects_updated_at();
