import { NextResponse } from "next/server";
import { PortfolioService } from "@/lib/services/portfolio-service";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const portfolio = await PortfolioService.getPublicPortfolio();
    return NextResponse.json(
      { success: true, data: portfolio },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
        },
      }
    );
  } catch (err: any) {
    console.error("Public /api/portfolio error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch portfolio" },
      { status: 500 }
    );
  }
}
