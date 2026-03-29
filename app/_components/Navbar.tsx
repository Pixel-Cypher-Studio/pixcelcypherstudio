"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(0,0,0,0.6)] border-b border-gray-800 px-8 py-4 flex justify-between items-center">
      
      <h1 className="text-xl font-bold text-white">PixelCypher</h1>

      <div className="flex items-center space-x-8 text-sm text-gray-300">

        <Link href="/" className="hover:text-white">Home</Link>
        <Link href="/about" className="hover:text-white">About Us</Link>

        <div className="relative group">
          
          
          <Link href="/services" className="hover:text-white flex items-center gap-1">
            Services ▾
          </Link>

       
          <div className="absolute top-full left-0 mt-2 w-44 bg-[var(--surface)] text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            
            <Link href="/services/service1" className="block px-4 py-2 hover:bg-gray-100">
              Service 1
            </Link>
            <Link href="/services/service2" className="block px-4 py-2 hover:bg-gray-100">
              Service 2
            </Link>
            <Link href="/services/service3" className="block px-4 py-2 hover:bg-gray-100">
              Service 3
            </Link>
            <Link href="/services/service4" className="block px-4 py-2 hover:bg-gray-100">
              Service 4
            </Link>

          </div>
        </div>

        <Link href="/contact" className="hover:text-white">Contact Us</Link>
      </div>
    </nav>
  );
}