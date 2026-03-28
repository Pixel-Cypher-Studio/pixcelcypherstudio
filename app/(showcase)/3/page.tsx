import Link from "next/link";

import { ConceptNav } from "../../_components/concept-nav";

export default function ConceptThreePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f1e7] text-[#37231d]">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,_rgba(255,255,255,0.65)_0%,_rgba(248,241,231,0.95)_45%,_rgba(232,213,191,0.9)_100%)]" />
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(207,176,142,0.28),_transparent_24%),radial-gradient(circle_at_80%_40%,_rgba(88,52,43,0.12),_transparent_28%)]" />
        <div className="mx-auto max-w-7xl">
          <ConceptNav current="3" />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[2rem] border border-[#58342b]/10 bg-white/65 p-8 backdrop-blur">
              <div className="font-mono-ui text-xs uppercase tracking-[0.35em] text-[#58342b]/50">Story Atelier</div>
              <h1 className="mt-6 font-editorial text-6xl leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-[6.6rem]">
                Build a homepage that feels like an invitation, not a brochure.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#58342b]/74">
                This direction treats PixelCypherStudio like an atelier: careful taste, clear structure, and digital work that carries a sense of authorship.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="mailto:hello@pixelcypherstudio.com" className="rounded-full bg-[#58342b] px-6 py-4 text-sm font-semibold text-[#f8f1e7] transition hover:-translate-y-0.5">
                  Discuss your project
                </Link>
                <a href="#chapters" className="rounded-full border border-[#58342b]/15 px-6 py-4 text-sm font-semibold text-[#58342b] transition hover:bg-white/60">
                  Read the chapters
                </a>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-[#58342b]/10 bg-[#fffaf5] p-8">
                <p className="font-editorial text-4xl leading-tight text-[#58342b] sm:text-5xl">
                  We blend strategy, visual language, and code into experiences that help brands sound more certain and look more inevitable.
                </p>
              </div>
              <div id="chapters" className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Chapter I", "Observe", "We study the offer, the audience, and the friction hiding inside the current story."],
                  ["Chapter II", "Compose", "We define a visual and verbal rhythm that makes the homepage feel designed, not assembled."],
                  ["Chapter III", "Release", "We ship a responsive build that moves elegantly from first impression to contact intent."],
                ].map(([chapter, title, body]) => (
                  <div key={chapter} className="rounded-[1.8rem] border border-[#58342b]/10 bg-white/60 p-6 backdrop-blur">
                    <div className="font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[#58342b]/48">{chapter}</div>
                    <h2 className="mt-4 font-display text-2xl tracking-[-0.04em]">{title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[#58342b]/68">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
