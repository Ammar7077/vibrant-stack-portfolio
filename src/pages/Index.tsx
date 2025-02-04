import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
};

export default Index;