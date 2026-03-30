
import { notFound } from "next/navigation";
import { services } from "@/app/_lib/services";

import WebDev from "@/app/_components/services/webdevelop/Webdev";
import GraphicDesign from "@/app/_components/services/graphicdesign/GraphicDesign";
import MotionGraphics from "@/app/_components/services/motiongraphics/MotionGraphics";

const components = {
  "web-development": WebDev,
  "graphic-design":GraphicDesign,
  "motion-graphics": MotionGraphics
};

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  const Component =
    components[service.slug as keyof typeof components];

  if (!Component) return notFound();

  return <Component />;
}