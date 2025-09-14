import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "LATAM Info — Juegos y responsabilidad",
  description:
    "Portal informativo pan-LATAM: guías técnicas, responsabilidad y comparativas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
