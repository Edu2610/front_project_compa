export const metadata = { title: "Juego Responsable LATAM | LATAM Info" };

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-semibold">Juego Responsable en Latinoamérica</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl">
        Este sitio promueve la importancia del juego responsable en todos los
        países de Latinoamérica. El objetivo es ofrecer información clara y
        recursos de apoyo para que cada persona pueda mantener control sobre su
        tiempo y presupuesto.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Principios básicos</h2>
      <ul className="mt-3 list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-2">
        <li>Edad mínima de 18 años para participar en juegos de azar.</li>
        <li>Define un presupuesto fijo y no lo sobrepases.</li>
        <li>Establece límites de tiempo y respétalos.</li>
        <li>No persigas pérdidas ni uses el juego como solución financiera.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Recursos pan-LATAM</h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        En algunos países existen líneas de ayuda o portales oficiales de
        información. Te recomendamos buscar:
      </p>
      <ul className="mt-3 list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
        <li>Centros de atención en salud mental y adicciones.</li>
        <li>Sitios web gubernamentales sobre regulación del juego.</li>
        <li>Organizaciones no gubernamentales con programas de apoyo.</li>
      </ul>
    </main>
  );
}
