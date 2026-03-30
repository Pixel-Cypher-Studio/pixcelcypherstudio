"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className=" relative z-50 border-b border-white/10 bg-black/65 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8" >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="shrink-0 transition duration-300 hover:opacity-90">
          <img
            src="/assets/images/pixelcypherstudio.jpeg"
            alt="PixelCypherStudio Logo"
            className="h-9 w-auto rounded-md sm:h-10"
          />
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 md:hidden"
        >
          Menu
        </button>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.22)] md:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-2 transition duration-300 hover:bg-white/10 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="rounded-full px-4 py-2 transition duration-300 hover:bg-white/10 hover:text-white"
          >
            About Us
          </Link>

          <div className="relative z-[60] group">
            <Link
              href="/showcase"
              className="flex items-center gap-2 rounded-full px-4 py-2 transition duration-300 hover:bg-white/10 hover:text-white"
            >
              Services
              <span className="text-xs text-white/70 transition group-hover:translate-y-[1px]">
                ▾
              </span>
            </Link>

            <div className="pointer-events-none absolute left-0 top-full z-[70] pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-56 overflow-hidden rounded-2xl border border-white/12 bg-[#111111]/95 p-2 text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                {["1", "2", "3", "4", "5"].map((n) => (
                  <Link
                    key={n}
                    href={`/showcase/${n}`}
                    className="block rounded-xl px-4 py-3 text-sm text-white/82 transition duration-200 hover:bg-white/8 hover:text-white"
                  >
                    Service {n}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="rounded-full px-4 py-2 transition duration-300 hover:bg-white/10 hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="mx-auto mt-4 max-w-7xl rounded-3xl border border-white/10 bg-black/80 p-3 shadow-[0_16px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 text-sm text-gray-200">
            <Link
              href="/"
              className="rounded-2xl px-4 py-3 transition hover:bg-white/8 hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="rounded-2xl px-4 py-3 transition hover:bg-white/8 hover:text-white"
            >
              About Us
            </Link>

            <Link
              href="/showcase"
              className="rounded-2xl px-4 py-3 transition hover:bg-white/8 hover:text-white"
            >
              Services
            </Link>

            <div className="grid grid-cols-2 gap-2 px-1 py-2">
              {["1", "2", "3", "4", "5"].map((n) => (
                <Link
                  key={n}
                  href={`/showcase/${n}`}
                  className="rounded-2xl border border-white/10 px-4 py-3 text-center text-white/82 transition hover:bg-white/8 hover:text-white"
                >
                  Service {n}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="rounded-2xl px-4 py-3 transition hover:bg-white/8 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}