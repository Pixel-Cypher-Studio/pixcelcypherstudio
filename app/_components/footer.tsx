import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 px-6 py-5 backdrop-blur-md bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-sm">
        <Link href="/" className="">
          <img src="/assets/images/pixelcypherstudio.webp"
            alt="PixelCypherStudio Logo" className="h-20 w-20"/>
        </Link>
        <span className="font-mono-ui tracking-tight text-white/70">PixelCypherStudio</span>
        <span className="text-white/50">© {new Date().getFullYear()} — Showcase</span>
      </div>
    </footer>
  );
}
