import Link from "next/link";

import { concepts } from "./_lib/concepts";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#efe6d6] text-[#181512]">
      <section className="relative isolate border-b border-black/10 px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,145,97,0.36),_transparent_38%),radial-gradient(circle_at_80%_20%,_rgba(92,168,145,0.24),_transparent_28%),linear-gradient(180deg,_#fff8ed_0%,_#efe6d6_100%)]" />
        <div className="mx-auto flex max-w-7xl flex-col gap-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl space-y-6">
              <p className="font-mono-ui text-xs uppercase tracking-[0.35em] text-black/55">
                PixelCypherStudio / concept showcase
              </p>
              <h1 className="max-w-5xl font-playful text-5xl leading-none tracking-[-0.05em] sm:text-7xl lg:text-[6.5rem]">
                Five homepage directions for a studio that sells bold marketing and web craft.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-black/68 sm:text-xl">
                Each route explores a different brand universe for PixelCypherStudio, from editorial warmth to futuristic conversion systems.
              </p>
            </div>
            <div className="grid gap-3 rounded-[2rem] border border-black/10 bg-white/55 p-4 backdrop-blur sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-black px-4 py-5 text-white">
                <div className="font-mono-ui text-xs uppercase tracking-[0.25em] text-white/60">Routes</div>
                <div className="mt-2 text-4xl font-display">5</div>
              </div>
              <div className="rounded-[1.5rem] border border-black/10 px-4 py-5">
                <div className="font-mono-ui text-xs uppercase tracking-[0.25em] text-black/45">Goal</div>
                <div className="mt-2 text-lg">Convert interest into quote requests</div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {concepts.map((concept, index) => (
              <Link
                key={concept.id}
                href={`/${concept.id}`}
                className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/72 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)]"
              >
                <div className="absolute inset-x-6 top-6 h-28 rounded-[1.5rem] opacity-90" style={{ background: `linear-gradient(135deg, ${concept.palette[0]}, ${concept.palette[1]}, ${concept.palette[2]})` }} />
                <div className="relative pt-36">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono-ui text-xs uppercase tracking-[0.3em] text-black/45">
                      Concept {index + 1}
                    </span>
                    <span className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/60">
                      View route
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl tracking-[-0.04em]">{concept.name}</h2>
                  <p className="mt-3 text-base leading-7 text-black/65">{concept.vibe}</p>
                  <p className="mt-6 border-t border-black/10 pt-6 text-sm leading-7 text-black/58">
                    {concept.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
