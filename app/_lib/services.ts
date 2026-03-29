export type Service = {
  id: string;
  name: string;
  vibe: string;
  description: string;
  palette: string[];
};

export const services: Service[] = [
  {
    id: "1",
    name: "Signal Garden",
    vibe: "Editorial warmth meets sharp conversion thinking",
    description:
      "A layered, tactile homepage with warm gradients, art-direction framing, and a studio voice that feels personal.",
    palette: ["#f4e7c8", "#ff7e47", "#1d3b36"],
  },
  {
    id: "2",
    name: "Conversion Lab",
    vibe: "High-contrast interface for ambitious launches",
    description:
      "A future-facing design language built from dashboards, scans, and dense product-style information blocks.",
    palette: ["#09111f", "#8bfac7", "#eff6ff"],
  },
  {
    id: "3",
    name: "Story Atelier",
    vibe: "Quiet luxury with magazine pacing",
    description:
      "A narrative-first concept that turns the homepage into a cinematic introduction for the studio and its process.",
    palette: ["#f8f1e7", "#58342b", "#cfb08e"],
  },
  {
    id: "4",
    name: "Launch Arcade",
    vibe: "Playful motion, bold typography, big energy",
    description:
      "A joyful, loud homepage for founders who want their brand to feel lively, contemporary, and impossible to ignore.",
    palette: ["#fff06b", "#ff5c45", "#102033"],
  },
  {
    id: "5",
    name: "Quiet Signal",
    vibe: "Sparse premium design with confident restraint",
    description:
      "A minimal direction where spacing, type, and pacing do the heavy lifting instead of decoration.",
    palette: ["#f2eee8", "#161616", "#b57b55"],
  },
];
