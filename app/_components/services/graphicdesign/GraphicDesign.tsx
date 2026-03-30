import Link from "next/link";

import { ConceptNav } from "../../concept-nav";

export default function GraphicDesign() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4e7c8] text-[#15211d]">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,_rgba(255,126,71,0.40),_transparent_28%),radial-gradient(circle_at_90%_15%,_rgba(27,76,68,0.22),_transparent_24%),linear-gradient(180deg,_#fff7e8_0%,_#f4e7c8_55%,_#ecd7b2_100%)]" />
        <div className="absolute left-[8%] top-40 -z-10 h-64 w-64 rounded-full bg-[#ff8b58]/30 blur-3xl" />
        <div className="absolute right-[12%] top-20 -z-10 h-52 w-52 rounded-full bg-[#215347]/20 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <ConceptNav current="1" />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="font-mono-ui text-xs uppercase tracking-[0.38em] text-[#24473f]/70">
                PixelCypherStudio / Signal Garden
              </p>
              <h1 className="mt-5 max-w-4xl font-editorial text-6xl leading-[0.92] tracking-[-0.045em] sm:text-7xl lg:text-[7.5rem]">
                Websites and campaigns with the warmth of a studio, not a template factory.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#203b35]/78 sm:text-xl">
                PixelCypherStudio helps ambitious brands shape their launch story, sharpen their positioning, and build digital experiences that earn inquiry, trust, and momentum.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="mailto:hello@pixelcypherstudio.com" className="rounded-full bg-[#16332d] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                  Request a quote
                </Link>
                <a href="#approach" className="rounded-full border border-[#16332d]/15 bg-white/40 px-6 py-4 text-sm font-semibold text-[#16332d] backdrop-blur transition hover:-translate-y-0.5">
                  See the approach
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="noise-overlay relative overflow-hidden rounded-[2rem] border border-[#16332d]/10 bg-[#1d3b36] p-6 text-white shadow-[0_25px_80px_rgba(29,59,54,0.26)]">
                <div className="font-mono-ui text-xs uppercase tracking-[0.3em] text-white/55">Studio promise</div>
                <p className="mt-6 max-w-sm text-2xl leading-9">
                  Strategy, copy direction, and development shaped as one system instead of handoffs.
                </p>
                <div className="mt-10 grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="rounded-[1.3rem] bg-white/10 px-3 py-4">
                    <div className="text-2xl font-display">72h</div>
                    <div className="mt-1 text-white/60">first concept</div>
                  </div>
                  <div className="rounded-[1.3rem] bg-white/10 px-3 py-4">
                    <div className="text-2xl font-display">3x</div>
                    <div className="mt-1 text-white/60">clearer offer</div>
                  </div>
                  <div className="rounded-[1.3rem] bg-white/10 px-3 py-4">
                    <div className="text-2xl font-display">1 team</div>
                    <div className="mt-1 text-white/60">from brief to build</div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-[#16332d]/10 bg-white/60 p-6 backdrop-blur">
                  <div className="font-mono-ui text-xs uppercase tracking-[0.28em] text-[#16332d]/48">Services</div>
                  <ul className="mt-5 space-y-3 text-lg text-[#16332d]">
                    <li>Positioning sprints</li>
                    <li>Launch websites</li>
                    <li>Quote-focused UX</li>
                  </ul>
                </div>
                <div className="animate-float-slow rounded-[2rem] border border-[#16332d]/10 bg-[#fffaf1] p-6">
                  <div className="font-mono-ui text-xs uppercase tracking-[0.28em] text-[#16332d]/48">Client fit</div>
                  <p className="mt-5 text-lg leading-8 text-[#16332d]/78">
                    Early-stage teams, service brands, and founder-led companies ready to look sharper online.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section id="approach" className="mt-20 grid gap-6 lg:grid-cols-3">
            {[
              ["01", "Frame the offer", "We extract the message that makes a project legible in under ten seconds."],
              ["02", "Design the atmosphere", "Type, color, rhythm, and motion work together so the site feels authored."],
              ["03", "Engineer the contact path", "Every section pulls the visitor closer to a quote request with less friction."],
            ].map(([step, title, body]) => (
              <div key={step} className="rounded-[2rem] border border-[#16332d]/10 bg-white/62 p-8 backdrop-blur">
                <div className="font-mono-ui text-xs uppercase tracking-[0.35em] text-[#16332d]/45">{step}</div>
                <h2 className="mt-6 font-display text-3xl tracking-[-0.04em]">{title}</h2>
                <p className="mt-4 text-base leading-7 text-[#16332d]/72">{body}</p>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
