"use client";

import { services } from "@/app/_lib/services";

export default function Services() {
  const marqueeServices = [...services, ...services.slice(0, 2)];

  return (
    <section className="py-16 px-6" style={{ background: "var(--hp-bg)" }}>
      <div className="mx-auto max-w-7xl">
        <h2
          className="mb-8 text-3xl font-bold"
          style={{ color: "var(--hp-services-heading)" }}
        >
          Our Services
        </h2>

               <div className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="group w-full overflow-hidden rounded-[28px] border border-white/10 p-4 shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--hp-card-bg)",
                  boxShadow: "0 18px 50px var(--hp-card-shadow)",
                }}
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="px-2 pb-2 pt-5">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "var(--hp-card-title)" }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-6"
                    style={{ color: "var(--hp-card-body)" }}
                  >
                    {service.vibe}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max gap-4 animate-[services-marquee_28s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...marqueeServices, ...marqueeServices].map((service, index) => (
                <article
                  key={`${service.id}-${index}`}
                  className="group/item relative shrink-0 w-[18vw] min-w-[10rem] max-w-[13rem] overflow-hidden rounded-2xl border border-white/10"
                  style={{ boxShadow: "0 10px 30px var(--hp-card-shadow)" }}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="aspect-[4/3] w-full object-cover"
                  />

                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100">
                    <p className="text-sm font-medium text-white">{service.name}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes services-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}