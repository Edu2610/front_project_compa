import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

export const metadata = {
  title: "LATAM Info — Guías técnicas de juegos y juego responsable",
  description:
    "Portal informativo pan-LATAM con contenido original: mecánicas (RTP, volatilidad, multiplicadores), guías por país y comparativas con enfoque de juego responsable.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "LATAM Info — Guías técnicas y juego responsable",
    description:
      "Contenido original sobre RTP, volatilidad, mecánicas y responsabilidad en LATAM.",
    url: "/",
    siteName: "LATAM Info",
    locale: "es_LA",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

function getRecentPosts(limit = 4) {
  const dir = path.join(process.cwd(), "src", "content", "blog");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  const withDates = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const stat = fs.statSync(path.join(dir, filename));
    return { slug, title: slug.replace(/-/g, " "), mtime: stat.mtime.getTime() };
  });
  return withDates.sort((a, b) => b.mtime - a.mtime).slice(0, limit);
}

export default function Page() {
  const recent = getRecentPosts(4);

  return (
    <>
      <section className="py-4">
        <h1 className="text-3xl font-bold">Guías técnicas y juego responsable para Latinoamérica</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl">
          Contenido original para entender RTP, volatilidad y mecánicas; guías por país y, pronto, comparativas objetivas.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/juego-responsable" className="px-4 py-2 rounded-lg border border-white/20 bg-white/10">Juego responsable</Link>
          <Link href="/pais/chile" className="px-4 py-2 rounded-lg border border-white/20 bg-white/10">Chile</Link>
          <Link href="/pais/peru" className="px-4 py-2 rounded-lg border border-white/20 bg-white/10">Perú</Link>
          <Link href="/comparativas/operadores" className="px-4 py-2 rounded-lg border border-white/20 bg-white/10">Comparativas</Link>
          <Link href="/blog" className="px-4 py-2 rounded-lg border border-white/20 bg-white/10">Blog</Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Últimos artículos</h2>
        {recent.length === 0 && (
          <p className="text-sm text-gray-500">Pronto habrá artículos nuevos.</p>
        )}
        <ul className="grid md:grid-cols-2 gap-4">
          {recent.map((p) => (
            <li key={p.slug} className="rounded-lg border border-black/10 dark:border-white/10 p-4">
              <h3 className="font-medium">{p.title}</h3>
              <Link href={`/blog/${p.slug}`} className="underline text-sm mt-2 inline-block">
                Leer artículo
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
