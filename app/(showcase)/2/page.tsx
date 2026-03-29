import Link from "next/link";

import { ConceptNav } from "../../_components/concept-nav";
import "./theme.css";

const metrics = [
  ["Inquiry readiness", "94%"],
  ["Average launch cycle", "21 days"],
  ["Offer clarity uplift", "+37"],
];

export default function ConceptTwoPage() {
  return (
    <main data-theme="c2-dark" className="min-h-screen overflow-hidden bg-[var(--c2-bg)] text-[var(--c2-text)]">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div
          className="absolute inset-0 -z-20"
          style={{
            background: `radial-gradient(circle at 18% 18%, rgba(0,255,179,0.18), transparent 22%),
                         radial-gradient(circle at 82% 22%, rgba(77,181,255,0.20), transparent 25%),
                         linear-gradient(180deg, var(--c2-bg-grad-from) 0%, var(--c2-bg) 60%, var(--c2-bg-grad-to) 100%)`,
          }}
        />
        <div
          className="absolute inset-0 -z-10 opacity-25"
          style={{
            backgroundImage: `linear-gradient(var(--c2-grid-line) 1px, transparent 1px),
                              linear-gradient(90deg, var(--c2-grid-line) 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
          }}
        />
        <div className="mx-auto max-w-7xl">
          <ConceptNav current="2" invert />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-[var(--c2-border)] bg-[var(--c2-surface)] p-8 shadow-[0_32px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl">
              <div className="flex flex-wrap gap-3 font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[var(--c2-accent)]">
                <span className="rounded-full border border-[var(--c2-accent-border)] px-3 py-2">Conversion architecture</span>
                <span className="rounded-full border border-[var(--c2-border)] px-3 py-2 text-[var(--c2-text-55)]">Studio systems</span>
              </div>
              <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[0.94] tracking-[-0.05em] sm:text-7xl lg:text-[6.4rem]">
                We build websites that read like brands and convert like products.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--c2-text-muted)]">
                PixelCypherStudio combines messaging design, front-end craft, and funnel logic so your homepage works harder before a sales call ever starts.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="mailto:hello@pixelcypherstudio.com" className="rounded-full bg-[var(--c2-accent)] px-6 py-4 text-sm font-semibold text-[var(--c2-accent-on)] transition hover:-translate-y-0.5">
                  Start a quote request
                </Link>
                <a href="#stack" className="rounded-full border border-[var(--c2-border-subtle)] px-6 py-4 text-sm font-semibold text-[var(--c2-text-78)] transition hover:bg-[var(--c2-surface)]">
                  Inspect the stack
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--c2-accent-border-subtle)] bg-[var(--c2-card-bg)] p-6">
                <div className="absolute right-8 top-8 h-22 w-22 rounded-full border border-[var(--c2-accent-border)]">
                  <div className="absolute inset-0 rounded-full border border-[var(--c2-accent-border)] animate-pulse-ring" />
                </div>
                <div className="font-mono-ui text-xs uppercase tracking-[0.3em] text-[var(--c2-text-dim)]">Live system readout</div>
                <div className="mt-8 space-y-4">
                  {metrics.map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-[1.4rem] border border-[var(--c2-border)] bg-[var(--c2-surface)] px-5 py-4">
                      <span className="text-sm text-[var(--c2-text-62)]">{label}</span>
                      <span className="font-display text-3xl tracking-[-0.04em] text-[var(--c2-accent)]">{value}</span>
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
                  <div key={title} className="rounded-[1.8rem] border border-[var(--c2-border)] bg-[var(--c2-surface-2)] p-5">
                    <h2 className="font-display text-2xl tracking-[-0.04em]">{title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--c2-text-62)]">{body}</p>
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
