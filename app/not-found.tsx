import Link from "next/link";

export default function NotFound() {
  return (
    <main
      data-theme="frozen"
      className="flex min-h-screen items-center justify-center bg-[var(--hp-bg)] px-6"
    >
      <section
        className="w-full max-w-2xl rounded-[2rem] border border-black/10 bg-[var(--hp-card-bg)] px-8 py-14 text-center shadow-[0_24px_80px_rgba(0,0,0,0.08)]"
      >
        <p className="font-mono-ui text-sm uppercase tracking-[0.24em] text-black/45">
        ⚡ Work in progress
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[var(--hp-card-title)] text-black">
          This page is under development
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base text-black leading-7 text-[var(--hp-card-body)]">
          The page you requested is not available yet. Please return to the homepage
          and continue exploring the studio.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="rounded-full bg-[var(--hp-hero-btn-bg)] px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
          >
            Return To Homepage
          </Link>
        </div>
      </section>
    </main>
  );
}