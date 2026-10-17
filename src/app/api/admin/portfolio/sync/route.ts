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

export async function POST() {
  if (!isAuthorized()) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await PortfolioService.syncDefaultProjects();
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to sync defaults" },
      { status: 500 }
    );
  }
}
