import LegalDisclaimer from "./LegalDisclaimer";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10 py-8 text-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-gray-500">
          © {new Date().getFullYear()} LATAM Info — Sitio informativo.
        </div>
        <div className="mt-4 flex gap-4">
          <Link href="/legales/privacidad">Privacidad</Link>
          <Link href="/legales/cookies">Cookies</Link>
          <Link href="/legales/terminos">Términos</Link>
        </div>
        <LegalDisclaimer />
      </div>
    </footer>
  );
}
