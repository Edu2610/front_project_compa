import fs from "node:fs";
import path from "node:path";
import RelatedPosts from "@/components/RelatedPosts";

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  return files.map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;            // <-- importante
  return { title: `${slug.replace(/-/g, " ")} | Blog LATAM Info` };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;            // <-- importante
  const Post = (await import(`@/content/blog/${slug}.mdx`)).default;

  return (
    <div>
      <Post />
      <RelatedPosts currentSlug={slug} />
    </div>
  );
}
