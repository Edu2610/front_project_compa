import fs from "node:fs";
import path from "node:path";
import BlogSearch from "@/components/BlogSearch";

export const metadata = { title: "Blog | LATAM Info" };

export default function BlogIndexPage() {
  const dir = path.join(process.cwd(), "src", "content", "blog");
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith(".mdx")) : [];

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const stat = fs.statSync(path.join(dir, filename));
    return {
      slug,
      title: slug.replace(/-/g, " "),
      mtime: stat.mtime.getTime(),
    };
  }).sort((a, b) => b.mtime - a.mtime);

  return (
    <main>
      <h1 className="text-2xl font-semibold">Blog</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Noticias, análisis técnicos y guías sobre juegos y regulación en LATAM.
      </p>
      <BlogSearch items={posts.map(({slug,title}) => ({slug,title}))} />
    </main>
  );
}
