import Link from "next/link";

import { ConceptNav } from "../../concept-nav";

const marquee = [
 "High-conversion landing pages",
  "Performance-first builds",
  "Mobile-optimized experiences",
  "Fast-loading websites",
  "SEO-ready structure",
  "Scalable frontend systems",
  "Conversion-focused UI",
  "Modern responsive design", "Launch pages",
  "Brand refreshes",
  "Marketing systems",
  "Motion-forward builds",
  "Quote funnels",
  "Campaign landers",
];

export default function WebDev() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff06b] text-[#102033]">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_12%,_rgba(255,255,255,0.8),_transparent_20%),radial-gradient(circle_at_80%_18%,_rgba(255,92,69,0.32),_transparent_24%),linear-gradient(180deg,_#fff06b_0%,_#ffd75a_100%)]" />
        <div className="absolute -left-14 top-36 -z-10 h-56 w-56 rounded-[2rem] rotate-12 bg-[#ff5c45] opacity-30 blur-2xl" />
        <div className="absolute right-0 top-28 -z-10 h-52 w-52 rounded-full bg-white/40 blur-2xl" />
        <div className="mx-auto max-w-7xl">
          <ConceptNav current="4" />

          <div className="mt-10 rounded-[2.25rem] border-2 border-[#102033] bg-[#fff9bc] p-4 shadow-[12px_12px_0_0_#102033] sm:p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="font-mono-ui text-xs uppercase tracking-[0.34em] text-[#102033]/65">Launch Arcade</p>
                <h1 className="mt-4 max-w-4xl font-playful text-5xl leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-[6.6rem]">
                  Big personality for brands that are done looking polite online.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#102033]/78">
                  PixelCypherStudio turns the homepage into a high-energy stage: bouncy layouts, bold copy blocks, and a quote path that never gets buried.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="mailto:hello@pixelcypherstudio.com" className="rounded-full border-2 border-[#102033] bg-[#ff5c45] px-6 py-4 text-sm font-semibold text-white shadow-[6px_6px_0_0_#102033] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_0_#102033]">
                    Get a quote
                  </Link>
                  <a href="#cards" className="rounded-full border-2 border-[#102033] bg-white px-6 py-4 text-sm font-semibold text-[#102033] shadow-[6px_6px_0_0_#102033] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_0_#102033]">
                    Explore the cards
                  </a>
                </div>
              </div>

              <div className="grid gap-4" id="cards">
                {[
                  ["Strategy", "We define the hook before touching the visuals."],
                  ["Design", "We make the site feel alive on desktop and mobile."],
                  ["Build", "We ship fast pages with clear calls to action."],
                ].map(([title, body], index) => (
                  <div
                    key={title}
                    className={`rounded-[1.8rem] border-2 border-[#102033] p-5 shadow-[8px_8px_0_0_#102033] ${
                      index === 0 ? "bg-white" : index === 1 ? "bg-[#c8ffde]" : "bg-[#ffd6cf]"
                    }`}
                  >
                    <h2 className="font-playful text-3xl tracking-[-0.05em]">{title}</h2>
                    <p className="mt-3 text-base leading-7 text-[#102033]/78">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-full border-2 border-[#102033] bg-white py-4">
            <div className="flex min-w-max animate-marquee gap-4 pr-4">
              {[...marquee, ...marquee].map((item, index) => (
                <span key={`${item}-${index}`} className="rounded-full border-2 border-[#102033] bg-[#fff06b] px-4 py-2 font-mono-ui text-xs uppercase tracking-[0.25em]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
