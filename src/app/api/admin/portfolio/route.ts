import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, verifySessionToken } from "@/lib/admin-session";
import { PortfolioService } from "@/lib/services/portfolio-service";

export const dynamic = "force-dynamic";

function isAuthorized(): boolean {
  if (process.env.NODE_ENV !== "production") return true;
  const token = cookies().get(ADMIN_COOKIE_NAME)?.value;
  return Boolean(verifySessionToken(token));
}

export async function GET() {
  if (!isAuthorized()) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const projects = await PortfolioService.getAdminProjects();
    const stats = PortfolioService.calculateStats(projects);
    return NextResponse.json({ success: true, data: projects, stats });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to load projects" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  if (!isAuthorized()) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    if (!body.title || !body.category || !body.domain || !body.imageUrl) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (title, category, domain, imageUrl)." },
        { status: 400 }
      );
    }

    const result = await PortfolioService.createProject(body);
    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, project: result.project });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to create project" },
      { status: 500 }
    );
  }
}
