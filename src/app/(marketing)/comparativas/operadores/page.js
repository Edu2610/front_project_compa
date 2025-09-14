import OperatorsTable from "@/components/OperatorsTable";

export const metadata = { title: "Comparativa de Operadores | LATAM Info" };

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-semibold">Comparativa de Operadores</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Aquí se mostrará una tabla con operadores licenciados, bonos y métodos
        de pago. Por ahora es un ejemplo vacío.
      </p>

      <div className="mt-6">
        <OperatorsTable data={[]} />
      </div>
    </main>
  );
}
