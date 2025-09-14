import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-black/10 dark:border-white/10 bg-white/50 dark:bg-gray-950/50 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          LATAM Info
        </Link>
        <nav className="text-sm flex gap-4">
          <Link href="/juego-responsable">Juego responsable</Link>
          <Link href="/comparativas/operadores">Comparativas</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
