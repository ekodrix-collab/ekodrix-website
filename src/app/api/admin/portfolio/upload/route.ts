import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, verifySessionToken } from "@/lib/admin-session";
import { createClient } from "@sanity/client";
import path from "path";
import fs from "fs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
  "image/avif",
  "image/svg+xml",
];
const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB

function isAuthorized(): boolean {
  if (process.env.NODE_ENV !== "production") return true;
  const token = cookies().get(ADMIN_COOKIE_NAME)?.value;
  return Boolean(verifySessionToken(token));
}

// Initialize Sanity Client for CDN Asset Storage (serverless-compatible, global edge CDN)
function getSanityClient() {
  const token =
    process.env.SANITY_API_TOKEN ||
    "skDKsAJCCquk3CftMKHVaQkbr4iwoxBEUH7KGQzE2u7OxQxxdeBMedK7NXIIkcTYOlplZVAiWZvo4JOKtHYSPlfNscGoNB0eCLnlyntPYhy3wZVUTW35HcuTNOdKeaMCHhFq1gvtGvU5eopWxC5k6xVXodxg5KWlKd0oE8iNQHH5Nn3XTmo7";

  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "3sq1n5yp",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-25",
    token,
    useCdn: false,
  });
}

export async function POST(req: Request) {
  if (!isAuthorized()) {
    return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ success: false, error: "No image file provided." }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: `Invalid image type (${file.type}). Allowed: PNG, JPEG, WebP, AVIF, SVG.` },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, error: "Image size exceeds 15MB limit." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = path.extname(file.name) || `.${file.type.split("/")[1] || "webp"}`;
    const cleanName = path
      .basename(file.name, ext)
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, "-")
      .slice(0, 40);
    const filename = `${cleanName}-${Date.now()}.webp`;

    // Pre-compress and optimize full-page screenshot using sharp (reduces 15MB PNG to ~250KB WebP)
    let uploadBuffer = buffer;
    let uploadContentType = file.type;
    try {
      const sharp = (await import("sharp")).default;
      uploadBuffer = await sharp(buffer)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 82, effort: 4 })
        .toBuffer();
      uploadContentType = "image/webp";
    } catch (sharpErr: any) {
      console.warn("[Upload] Sharp optimization skipped:", sharpErr?.message);
    }

    // 1. Primary Strategy: Upload to Sanity Cloud CDN (Serverless safe on Vercel, no read-only disk issues)
    try {
      const sanityClient = getSanityClient();
      const asset = await sanityClient.assets.upload("image", uploadBuffer, {
        filename,
        contentType: uploadContentType,
      });

      if (asset && asset.url) {
        // Append auto=format & width constraint so the public site serves lightweight WebP/AVIF
        const optimizedUrl = `${asset.url}?auto=format&w=650&q=80`;
        return NextResponse.json({
          success: true,
          url: optimizedUrl,
          rawUrl: asset.url,
          filename: asset.originalFilename || filename,
          size: uploadBuffer.length,
          storage: "sanity-cdn",
        });
      }
    } catch (sanityErr: any) {
      console.warn("[Portfolio Upload] Sanity CDN upload failed, trying local fallback:", sanityErr.message);
    }

    // 2. Secondary Fallback: Local disk upload (only works if filesystem is writable, e.g. local dev)
    try {
      const uploadDir = path.join(process.cwd(), "public", "images", "portfolio", "uploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const destinationPath = path.join(uploadDir, filename);
      await fs.promises.writeFile(destinationPath, buffer);

      const publicUrl = `/images/portfolio/uploads/${filename}`;
      return NextResponse.json({
        success: true,
        url: publicUrl,
        filename,
        size: file.size,
        storage: "local",
      });
    } catch (diskErr: any) {
      console.error("[Portfolio Upload] Local disk write failed:", diskErr.message);
      throw new Error(
        "Serverless environment has a read-only filesystem and Cloud CDN upload was unable to complete. Please ensure SANITY_API_TOKEN is set or paste the image URL directly."
      );
    }
  } catch (err: any) {
    console.error("Portfolio upload failed:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process image upload." },
      { status: 500 }
    );
  }
}
