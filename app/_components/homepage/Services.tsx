"use client";

import { useEffect, useRef } from "react";

import { services } from "@/app/_lib/services";

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const speed = 0.5; // tweak speed

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let isPaused = false;

    const scrollStep = () => {
      if (!isPaused) {
        container.scrollLeft += speed;

        // infinite loop reset
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scrollStep);
    };

    animationRef.current = requestAnimationFrame(scrollStep);

    // pause on hover
    const pause = () => (isPaused = true);
    const resume = () => (isPaused = false);

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);
    container.addEventListener("touchstart", pause);
container.addEventListener("touchend", resume);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
      container.addEventListener("touchstart", pause);
    container.addEventListener("touchend", resume);
    };
  }, []);

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide "
      >
        {/* duplicate array for seamless loop */}
        {[...services, ...services].map((service, index) => (
          <div
            key={index}
            className="snap-center
          flex-shrink-0
          w-[280px] 
          first:ml-[calc(50%-140px)]
          last:mr-[calc(50%-140px)]
          sm:w-[320px] md:w-[360px]
          bg-[var(--surface)]
          text-black
          rounded-2xl
          p-6
          shadow-lg
          transition-transform duration-300
          hover:scale-105"
          >
            <h3 className="text-lg font-semibold mb-2">
              {service.name}
            </h3>
            <p className="text-sm text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}