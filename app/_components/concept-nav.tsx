import Link from "next/link";

import { concepts } from "../_lib/concepts";

type ConceptNavProps = {
  current: string;
  invert?: boolean;
};

export function ConceptNav({ current, invert = false }: ConceptNavProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 text-sm ${invert ? "text-white/80" : "text-black/65"}`}
    >
      <Link href="/" className="rounded-full border px-4 py-2 transition hover:-translate-y-0.5">
        Index
      </Link>
      {concepts.map((concept) => {
        const active = concept.id === current;

        return (
          <Link
            key={concept.id}
            href={`/${concept.id}`}
            className={`rounded-full border px-4 py-2 transition hover:-translate-y-0.5 ${
              active
                ? invert
                  ? "border-white bg-white text-black"
                  : "border-black bg-black text-white"
                : invert
                  ? "border-white/25 bg-white/8"
                  : "border-black/15 bg-white/50"
            }`}
          >
            {concept.id}. {concept.name}
          </Link>
        );
      })}
    </div>
  );
}
