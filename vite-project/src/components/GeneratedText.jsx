"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
 
const words = `Disfruto transformar ideas en soluciones digitales que realmente aporten valor.\n \n He contribuido a mejorar la usabilidad y el rendimiento de aplicaciones, con una actitud colaborativa y ganas de seguir aprendiendo.`;
 
export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} className="text-generate" />;
}