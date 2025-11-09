import Header from "@/src/components/layout/Header/Header";
import HeroSection from "@/src/components/sections/Hero/HeroSection";
import ProjectSection from "@/src/components/sections/Projects/ProjectsSection";
import ScillsSection from "@/src/components/sections/Scills/ScillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScillsSection/>
      <ProjectSection/>
    </>
  );
}
