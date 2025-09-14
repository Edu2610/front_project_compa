import fs from "node:fs";
import path from "node:path";

export async function GET(req) {
  // Detecta base automáticamente (cámbialo por process.env.NEXT_PUBLIC_SITE_URL si prefieres)
  const url = new URL(req.url);
  const base = process.env.NEXT_PUBLIC_SITE_URL || `${url.protocol}//${url.host}`;

  const dir = path.join(process.cwd(), "src", "content", "blog");
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith(".mdx")) : [];

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const stat = fs.statSync(path.join(dir, filename));
    return {
      slug,
      title: slug.replace(/-/g, " "),
      mtime: stat.mtime,
    };
  }).sort((a, b) => b.mtime - a.mtime);

  const items = posts.map(p => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${base}/blog/${p.slug}</link>
      <guid>${base}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.mtime).toUTCString()}</pubDate>
      <description><![CDATA[Artículo técnico en LATAM Info]]></description>
    </item>
  `).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>LATAM Info — RSS</title>
      <link>${base}</link>
      <description>Artículos técnicos y guías</description>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=86400",
    },
  });
}
