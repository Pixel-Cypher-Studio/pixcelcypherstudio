"use client";

export default function Hero() {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold mb-6">
        Stream. Create. Experience.
      </h1>
      <p className="text-gray-400 max-w-xl mb-8">
        PixelCypher Studio delivers high-performance video streaming powered by AWS CloudFront.
      </p>

      <button className="bg-deepWater text-iceDark px-6 py-3 rounded-full font-medium hover:scale-105 transition">
        Explore Content
      </button>
    </section>
  );
}