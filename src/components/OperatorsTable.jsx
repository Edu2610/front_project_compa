export default function OperatorsTable({ data = [] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-black/10 dark:border-white/10">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left">Operador</th>
            <th className="px-4 py-2 text-left">Licencia</th>
            <th className="px-4 py-2 text-left">Bono</th>
            <th className="px-4 py-2 text-left">Métodos de pago</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="px-4 py-6 text-center text-gray-500 dark:text-gray-400"
              >
                Aún no hay operadores registrados.
              </td>
            </tr>
          )}
          {data.map((op) => (
            <tr key={op.name} className="border-t border-black/5 dark:border-white/5">
              <td className="px-4 py-2">{op.name}</td>
              <td className="px-4 py-2">{op.license}</td>
              <td className="px-4 py-2">{op.bonus}</td>
              <td className="px-4 py-2">{op.payments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
