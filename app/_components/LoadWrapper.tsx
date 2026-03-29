"use client";

import { useEffect, useState } from "react";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade out
      setTimeout(() => setLoading(false), 400); // remove after animation
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white transition-all duration-500 ${
            fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            
            {/* Spinner */}
            <div className="w-12 h-12 border-4 border-[var(--color-ice-light)] border-t-[var(--accent)] rounded-full animate-spin"></div>

            {/* Text */}
            <p className="text-sm tracking-wide animate-pulse">
              PixelCypher Studio
            </p>

          </div>
        </div>
      )}

      {children}
    </>
  );
}