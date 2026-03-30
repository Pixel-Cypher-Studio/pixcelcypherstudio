import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Manrope,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import "./_components/homepage/theme.css";
import LoaderWrapper from "@/app/_components/LoadWrapper"; 
import { Footer } from "./_components/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "PixelCypherStudio Showcase",
  description: "Five distinct homepage directions for PixelCypherStudio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} ${cormorant.variable} ${bricolage.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        
        <LoaderWrapper>
          {children}
        </LoaderWrapper>
        
        <Footer />
      </body>
    </html>
  );
}
