-- =========================================================================
-- EKODRIX Project Requests — Supabase RLS Fix & Full Schema
-- Copy and run this in Supabase Dashboard -> SQL Editor -> Run
-- =========================================================================

-- 1. Create the project_requests table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.project_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    project_type TEXT NOT NULL,
    budget TEXT NOT NULL,
    timeline TEXT NOT NULL,
    description TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'In Progress', 'Completed', 'Rejected')),
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Drop existing restrictive policies if any to prevent conflicts
DROP POLICY IF EXISTS "Allow public form submissions" ON public.project_requests;
DROP POLICY IF EXISTS "Allow admin full access" ON public.project_requests;
DROP POLICY IF EXISTS "Allow public insert" ON public.project_requests;
DROP POLICY IF EXISTS "Allow public select" ON public.project_requests;
DROP POLICY IF EXISTS "Allow public update" ON public.project_requests;
DROP POLICY IF EXISTS "Allow public delete" ON public.project_requests;

-- 3. Enable RLS
ALTER TABLE public.project_requests ENABLE ROW LEVEL SECURITY;

-- 4. Policy: Allow anyone (anon + authenticated) to submit a Start Project form (INSERT)
CREATE POLICY "Allow public insert" 
ON public.project_requests
FOR INSERT 
TO anon, authenticated, public
WITH CHECK (true);

-- 5. Policy: Allow anyone (anon + authenticated) to read project requests (SELECT)
CREATE POLICY "Allow public select" 
ON public.project_requests
FOR SELECT 
TO anon, authenticated, public
USING (true);

-- 6. Policy: Allow updating status & notes (UPDATE)
CREATE POLICY "Allow public update" 
ON public.project_requests
FOR UPDATE 
TO anon, authenticated, public
USING (true)
WITH CHECK (true);

-- 7. Policy: Allow deleting requests (DELETE)
CREATE POLICY "Allow public delete" 
ON public.project_requests
FOR DELETE 
TO anon, authenticated, public
USING (true);

-- 8. Grant full table permissions to anon & authenticated roles
GRANT ALL ON public.project_requests TO anon, authenticated, service_role;

-- 9. Trigger for updated_at
CREATE OR REPLACE FUNCTION update_project_requests_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_update_project_requests_updated_at ON public.project_requests;
CREATE TRIGGER trigger_update_project_requests_updated_at
BEFORE UPDATE ON public.project_requests
FOR EACH ROW
EXECUTE FUNCTION update_project_requests_updated_at();
