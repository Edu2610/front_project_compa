import fs from "node:fs";
import path from "node:path";
import RelatedPosts from "@/components/RelatedPosts";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  return files.map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: `${slug.replace(/-/g, " ")} | Blog LATAM Info` };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const Post = (await import(`@/content/blog/${slug}.mdx`)).default;

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Inicio", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: slug.replace(/-/g, " ") }
      ]} />
      <Post />
      <RelatedPosts currentSlug={slug} />
    </div>
  );
}
