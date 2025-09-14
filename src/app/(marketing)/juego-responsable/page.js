import Script from "next/script";

export const metadata = { title: "Juego Responsable | LATAM Info" };

export default function Page() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿El RTP garantiza ganancias?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "No. El RTP es un promedio a largo plazo; en sesiones cortas la varianza puede producir resultados alejados del promedio."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué significa alta volatilidad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Resultados menos frecuentes pero potencialmente mayores; requiere gestionar expectativas y límites personales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Operan juegos en este sitio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "No. Este es un portal informativo. Enlazamos a recursos y, más adelante, a comparativas objetivas de operadores."
        }
      }
    ]
  };

  return (
    <main>
      <h1 className="text-2xl font-semibold">Juego Responsable</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Principios y recomendaciones para un juego más seguro en LATAM:
        límites de tiempo y presupuesto, evitar perseguir pérdidas y conocer
        herramientas de autoexclusión cuando existan.
      </p>

      {/* JSON-LD FAQ */}
      <Script
        id="faq-juego-responsable"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </main>
  );
}
