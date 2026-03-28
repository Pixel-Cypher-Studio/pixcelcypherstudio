import Link from "next/link";

import { ConceptNav } from "../../_components/concept-nav";

const metrics = [
  ["Inquiry readiness", "94%"],
  ["Average launch cycle", "21 days"],
  ["Offer clarity uplift", "+37"],
];

export default function ConceptTwoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09111f] text-[#eff6ff]">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,_rgba(0,255,179,0.18),_transparent_22%),radial-gradient(circle_at_82%_22%,_rgba(77,181,255,0.20),_transparent_25%),linear-gradient(180deg,_#0d1626_0%,_#09111f_60%,_#060a12_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25" />
        <div className="mx-auto max-w-7xl">
          <ConceptNav current="2" invert />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_32px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl">
              <div className="flex flex-wrap gap-3 font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[#8bfac7]">
                <span className="rounded-full border border-[#8bfac7]/25 px-3 py-2">Conversion architecture</span>
                <span className="rounded-full border border-white/10 px-3 py-2 text-white/55">Studio systems</span>
              </div>
              <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[0.94] tracking-[-0.05em] sm:text-7xl lg:text-[6.4rem]">
                We build websites that read like brands and convert like products.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                PixelCypherStudio combines messaging design, front-end craft, and funnel logic so your homepage works harder before a sales call ever starts.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="mailto:hello@pixelcypherstudio.com" className="rounded-full bg-[#8bfac7] px-6 py-4 text-sm font-semibold text-[#07111d] transition hover:-translate-y-0.5">
                  Start a quote request
                </Link>
                <a href="#stack" className="rounded-full border border-white/12 px-6 py-4 text-sm font-semibold text-white/78 transition hover:bg-white/8">
                  Inspect the stack
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#8bfac7]/18 bg-[#0b1524] p-6">
                <div className="absolute right-8 top-8 h-22 w-22 rounded-full border border-[#8bfac7]/35">
                  <div className="absolute inset-0 rounded-full border border-[#8bfac7]/35 animate-pulse-ring" />
                </div>
                <div className="font-mono-ui text-xs uppercase tracking-[0.3em] text-white/45">Live system readout</div>
                <div className="mt-8 space-y-4">
                  {metrics.map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-5 py-4">
                      <span className="text-sm text-white/62">{label}</span>
                      <span className="font-display text-3xl tracking-[-0.04em] text-[#8bfac7]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div id="stack" className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Message Systems", "Sharper headlines, evidence, and proof mapping for service brands."],
                  ["Interactive Front-Ends", "Fast builds with detail-rich UI and deliberate motion."],
                  ["Quote Funnels", "Contact paths designed to turn curiosity into useful inbound leads."],
                  ["Launch Support", "Creative assets and iteration once the site goes live."],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5">
                    <h2 className="font-display text-2xl tracking-[-0.04em]">{title}</h2>
                    <p className="mt-3 text-sm leading-7 text-white/62">{body}</p>
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
