"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="backdrop-blur-md  border-b border-gray-800 px-8 py-4 flex justify-between items-center">
      
      <Link href="/" className="transition">
          <img src="/assets/images/pixelcypherstudio.jpeg"
            alt="PixelCypherStudio Logo" className="h-10"/>
      </Link>

      <div className="flex items-center space-x-8 text-sm text-gray-300">

        <Link href="/" className="hover:text-white">Home</Link>
        <Link href="/about" className="hover:text-white">About Us</Link>

        <div className="relative group">
  <Link href="/showcase" className="hover:text-white flex items-center gap-1">
    Services ▾
  </Link>

  <div className="absolute top-full left-0 pt-2">
    <div className="
      w-44
      bg-[var(--surface)]
      text-black
      rounded-lg  
      shadow-lg
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-200 
      overflow-hidden
    ">
      {["1","2","3","4"].map((n) => (
        <Link
          key={n}
          href={`/showcase/${n}`}
          className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
        >
          Service {n}
        </Link>
      ))}
    </div>
  </div>
</div>

        <Link href="/contact" className="hover:text-white">Contact Us</Link>
      </div>
    </nav>
  );
}