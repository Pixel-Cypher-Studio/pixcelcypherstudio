export type Service = {
  id: string;
  name: string;
  vibe: string;
  description: string;
  image: string;
  palette: string[];
};

export const services: Service[] = [
  {
    id: "1",
    name: "Graphic Design",
    vibe: "Clean. Bold. Brand-first.",
    description:
      "Crafting visually striking designs that communicate brand identity with clarity and impact — from logos to full-scale brand systems.",
    image: "/assets/images/pixelcypherstudio.webp",
    palette: ["#f4e7c8", "#ff7e47", "#1d3b36"],
  },
  {
    id: "2",
    name: "Motion Graphics / video editing",
    vibe: "Dynamic. Engaging. Story-driven.",
    description:
      "High-impact motion visuals and video edits designed to capture attention, tell stories, and elevate digital content across platforms.",
    image: "/assets/images/pixelcypherstudio.jpeg",
    palette: ["#09111f", "#8bfac7", "#eff6ff"],
  },
  {
    id: "3",
    name: "Web development",
    vibe: "Modern. Fast. Conversion-focused.",
    description:
      "Building responsive, high-performance websites with clean UI, seamless UX, and scalable architecture tailored for real-world results.",
    image: "/assets/images/pixelcypherstudio.webp",
    palette: ["#f8f1e7", "#58342b", "#cfb08e"],
  }
  
];