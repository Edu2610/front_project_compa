export const metadata = { title: "Juego Responsable en Chile | LATAM Info" };

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-semibold">Juego Responsable en Chile</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl">
        En Chile, la actividad de casinos físicos está regulada por la
        Superintendencia de Casinos de Juego (SCJ). Actualmente el marco legal
        para plataformas online se encuentra en discusión legislativa. 
      </p>

      <h2 className="mt-8 text-xl font-semibold">Recomendaciones</h2>
      <ul className="mt-3 list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-2">
        <li>Edad mínima legal: 18 años.</li>
        <li>Verifica licencias y permisos en sitios oficiales de la SCJ.</li>
        <li>Usa límites de tiempo y presupuesto para mantener control.</li>
        <li>Si el juego genera problemas, busca apoyo profesional.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Recursos de ayuda</h2>
      <ul className="mt-3 list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
        <li>
          <a
            href="https://www.scj.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Superintendencia de Casinos de Juego (SCJ)
          </a>
        </li>
        <li>
          Líneas de atención en salud mental del Ministerio de Salud (fono 600 360 7777).
        </li>
      </ul>
    </main>
  );
}
