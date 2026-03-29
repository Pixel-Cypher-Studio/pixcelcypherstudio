"use client";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/videos/hero_reel.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0" style={{ background: "var(--hp-hero-overlay)" }} />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-6" style={{ color: "var(--hp-hero-heading)" }}>
          Stream. Create. Experience.
        </h1>
        <p className="max-w-xl mb-8" style={{ color: "var(--hp-hero-body)" }}>
          PixelCypher Studio delivers high-performance video streaming powered by AWS CloudFront.
        </p>
        <button
          className="px-6 py-3 rounded-full font-medium hover:scale-105 transition"
          style={{ background: "var(--hp-hero-btn-bg)", color: "var(--hp-hero-btn-text)" }}
        >
          Explore Content
        </button>
      </div>
    </section>
  );
}