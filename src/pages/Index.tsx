
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AnimatedShapesSection from "../components/AnimatedShapesSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.main
      initial="initial"
      animate="animate"
      className="min-h-screen pt-16"
    >
      <Header />
      <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
        <HeroSection />
      </motion.div>
      <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
        <AnimatedShapesSection />
      </motion.div>
      <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
        <SkillsSection />
      </motion.div>
      <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
        <ExperienceSection />
      </motion.div>
      <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
        <ProjectsSection />
      </motion.div>
      <motion.div {...fadeInUp} transition={{ delay: 0.7 }}>
        <ContactSection />
      </motion.div>
    </motion.main>
  );
};

export default Index;
