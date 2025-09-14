"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

export default function BlogSearch({ items }) {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return items;
    return items.filter(p =>
      p.title.toLowerCase().includes(term) ||
      p.slug.toLowerCase().includes(term)
    );
  }, [q, items]);

  return (
    <div className="mt-6">
      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Buscar artículos…"
        className="w-full md:w-80 rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm"
      />
      <ul className="mt-4 space-y-3">
        {results.length === 0 && <li className="text-sm text-gray-500">Sin resultados.</li>}
        {results.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="underline">{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
