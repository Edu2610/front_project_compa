import { NextResponse } from "next/server";

// En el futuro: mapear slug -> URL por país (o por configuración).
export async function GET(req, { params }) {
  const { slug } = params;
  // De momento, redirigimos a Home con un query de tracking básico:
  const url = new URL("/", req.url);
  url.searchParams.set("ref", slug);
  return NextResponse.redirect(url, { status: 302 });
}
