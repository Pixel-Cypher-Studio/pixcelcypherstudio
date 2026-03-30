"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      data-theme="frozen"
      className="flex min-h-screen items-center justify-center bg-[var(--hp-bg)] px-6"
    >
      <section
        className="w-full max-w-2xl rounded-[2rem] border border-black/10 bg-[var(--hp-card-bg)] px-8 py-14 text-center shadow-[0_24px_80px_rgba(0,0,0,0.08)]"
      >
        <p className="font-mono-ui text-sm uppercase tracking-[0.24em] text-black/45">
          Request Error
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[var(--hp-card-title)]">
          We could not complete that request
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[var(--hp-card-body)]">
          Something went wrong while loading this page. You can try again or return
          to the homepage.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[var(--hp-card-title)] transition hover:-translate-y-0.5"
          >
            Try Again
          </button>

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