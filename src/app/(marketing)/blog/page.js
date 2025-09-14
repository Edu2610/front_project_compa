import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

export const metadata = { title: "Blog | LATAM Info" };

export default function BlogIndexPage() {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");
  const files = fs.existsSync(blogDir)
    ? fs.readdirSync(blogDir).filter(f => f.endsWith(".mdx"))
    : [];

  const posts = files.map(filename => ({
    slug: filename.replace(/\.mdx$/, ""),
    title: filename.replace(/\.mdx$/, "").replace(/-/g, " "),
  }));

  return (
    <main>
      <h1 className="text-2xl font-semibold">Blog</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Noticias, análisis técnicos y guías sobre juegos y regulación en LATAM.
      </p>

      <ul className="mt-6 space-y-2">
        {posts.length === 0 && (
          <li className="text-sm text-gray-500">Aún no hay artículos.</li>
        )}
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="underline">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
