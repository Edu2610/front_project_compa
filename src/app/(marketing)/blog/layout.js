import Link from "next/link";

export default function BlogLayout({ children }) {
  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Blog LATAM Info</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Análisis técnicos, guías y reflexiones sobre RTP, volatilidad y juego responsable en Latinoamérica.
        </p>
        <Link href="/blog" className="underline text-sm mt-2 inline-block">
          Volver al índice
        </Link>
      </header>
      <article className="prose dark:prose-invert">{children}</article>
    </div>
  );
}
