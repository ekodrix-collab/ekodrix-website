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

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  if (!isAuthorized()) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const id = params.id;
    const body = await req.json();
    const result = await PortfolioService.updateProject(id, body);

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, project: result.project });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to update project" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  if (!isAuthorized()) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const id = params.id;
    const { searchParams } = new URL(req.url);
    const isDefault = searchParams.get("isDefault") === "true";

    const result = await PortfolioService.deleteProject(id, isDefault);
    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to delete project" },
      { status: 500 }
    );
  }
}
