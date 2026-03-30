import Link from "next/link";

import { ConceptNav } from "../../_components/concept-nav";

export default function ConceptFivePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f2eee8] text-[#171717]">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,_#f7f4ef_0%,_#f2eee8_100%)]" />
        <div className="absolute right-[10%] top-24 -z-10 h-72 w-72 rounded-full bg-[#b57b55]/10 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <ConceptNav current="5" />

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="font-mono-ui text-xs uppercase tracking-[0.35em] text-black/42">Quiet Signal</p>
              <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[6.8rem]">
                Minimal by appearance. Precise by intention.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/62">
                This route proves PixelCypherStudio can feel premium without excess. Space, hierarchy, and restraint create the persuasion.
              </p>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-white/70 p-8 backdrop-blur">
              <div className="font-mono-ui text-xs uppercase tracking-[0.28em] text-black/45">For teams who need</div>
              <ul className="mt-6 space-y-4 text-lg leading-8 text-black/74">
                <li>Sharper first impressions</li>
                <li>Elegant quote journeys</li>
                <li>Calm confidence instead of noise</li>
              </ul>
            </div>
          </div>

          <div className="mt-20 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="rounded-[2rem] border border-black/10 bg-[#171717] p-8 text-white">
              <div className="font-mono-ui text-xs uppercase tracking-[0.3em] text-white/50">Inquiry</div>
              <p className="mt-6 text-2xl leading-9 text-white/88">
                Tell us the scope, timeline, and ambition. We will shape a quote around the outcome you need.
              </p>
              <Link href="mailto:hello@pixelcypherstudio.com" className="mt-10 inline-flex rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:-translate-y-0.5">
                hello@pixelcypherstudio.com
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                ["Clarity", "Headlines, structure, and offer framing tuned to immediate comprehension."],
                ["Craft", "Detailed typography, spacing, and responsive behavior that feel expensive."],
                ["Confidence", "A measured contact path that invites serious enquiries instead of casual browsing."],
              ].map(([title, body]) => (
                <div key={title} className="border-t border-black/12 pt-6">
                  <h2 className="font-editorial text-4xl tracking-[-0.04em]">{title}</h2>
                  <p className="mt-4 text-sm leading-7 text-black/62">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
