import fs from "node:fs";
import path from "node:path";

export async function generateStaticParams() {
  // Genera rutas estáticas a partir de los archivos MDX en /content/blog
  const blogDir = path.join(process.cwd(), "src", "content", "blog");
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith(".mdx"));
  return files.map(filename => ({ slug: filename.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }) {
  const title = `${params.slug.replace(/-/g, " ")} | Blog LATAM Info`;
  return { title };
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;

  // Importa el MDX del slug (solo válido para archivos existentes por generateStaticParams)
  const Post = (await import(`@/content/blog/${slug}.mdx`)).default;

  return (
    <main className="prose dark:prose-invert max-w-3xl mx-auto">
      <Post />
    </main>
  );
}
