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
  twitter: {
    card: "summary_large_image",
    title: "LATAM Info — Guías técnicas y juego responsable",
    description:
      "Explicaciones claras de RTP, volatilidad y buenas prácticas para LATAM.",
  },
};

export default function Page() {
  return (
    <>
      <section className="py-4">
        <h1 className="text-3xl font-bold">
          Guías técnicas y juego responsable para Latinoamérica
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl">
          Publicamos contenido original para entender cómo funcionan las
          mecánicas de los juegos (RTP, volatilidad, multiplicadores) y para
          tomar mejores decisiones con foco en responsabilidad. No operamos
          juegos ni cuentas: enlazamos a recursos y, más adelante, a
          comparativas objetivas de operadores.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/juego-responsable"
            className="px-4 py-2 rounded-lg border border-white/20 bg-white/10"
          >
            Juego responsable
          </Link>
          <Link
            href="/pais/chile"
            className="px-4 py-2 rounded-lg border border-white/20 bg-white/10"
          >
            Chile
          </Link>
          <Link
            href="/pais/peru"
            className="px-4 py-2 rounded-lg border border-white/20 bg-white/10"
          >
            Perú
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
      </section>

      <section className="mt-10 grid md:grid-cols-2 gap-8">
        <article className="rounded-xl border border-black/10 dark:border-white/10 p-5">
          <h2 className="text-xl font-semibold">Qué significa RTP</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            El RTP es un promedio a largo plazo. En sesiones cortas, la varianza
            domina y los resultados pueden alejarse del promedio. Te lo
            explicamos con ejemplos prácticos.
          </p>
          <Link href="/blog/rtp-y-corto-plazo" className="underline mt-3 inline-block">
            Leer artículo
          </Link>
        </article>

        <article className="rounded-xl border border-black/10 dark:border-white/10 p-5">
          <h2 className="text-xl font-semibold">Volatilidad y varianza</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Cómo interpretar volatilidad y varianza en juegos con mecánicas de
            tumbles y multiplicadores. Consejos para gestionar expectativas y
            límites personales.
          </p>
          <Link href="/blog/volatilidad-y-varianza" className="underline mt-3 inline-block">
            Leer artículo
          </Link>
        </article>
      </section>
    </>
  );
}
