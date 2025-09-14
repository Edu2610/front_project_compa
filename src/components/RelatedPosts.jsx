import Link from "next/link";
import fs from "node:fs";
import path from "node:path";

export default function RelatedPosts({ currentSlug }) {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));

  // filtra el actual y toma los 3 primeros como "relacionados"
  const related = files
    .filter((f) => f.replace(/\.mdx$/, "") !== currentSlug)
    .slice(0, 3)
    .map((filename) => ({
      slug: filename.replace(/\.mdx$/, ""),
      title: filename.replace(/\.mdx$/, "").replace(/-/g, " "),
    }));

  return (
    <aside className="mt-12 border-t border-gray-200 dark:border-white/10 pt-6">
      <h2 className="text-lg font-semibold mb-4">Artículos relacionados</h2>
      <ul className="space-y-2 text-sm">
        {related.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="underline">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
