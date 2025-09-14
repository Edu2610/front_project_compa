import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold">Portal informativo pan-LATAM</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Contenido original sobre mecánicas de juego, RTP, volatilidad,
        multiplicadores y responsabilidad en distintos países de Latinoamérica.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/juego-responsable"
          className="px-4 py-2 rounded-lg border border-white/20 bg-white/10"
        >
          Juego responsable
        </Link>
        <Link
          href="/comparativas/operadores"
          className="px-4 py-2 rounded-lg border border-white/20 bg-white/10"
        >
          Comparativas
        </Link>
        <Link
          href="/blog"
          className="px-4 py-2 rounded-lg border border-white/20 bg-white/10"
        >
          Blog
        </Link>
      </div>
    </main>
  );
}
