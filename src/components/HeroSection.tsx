
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import AnimatedBackground from "./AnimatedBackground";
import AnimatedCursor from "react-animated-cursor";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <AnimatedBackground />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        outerStyle={{
          border: '3px solid var(--cursor-color)'
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20, color: "#8B5CF6" }}  // Vivid Purple
        animate={{ opacity: 1, y: 0, color: "hsl(var(--foreground))" }}
        transition={{ duration: 0.15 }}
        className="text-center z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
          Ammar Omari
        </h1>
        <motion.span 
          initial={{ opacity: 0, color: "#0EA5E9" }}  // Ocean Blue
          animate={{ opacity: 1, color: "hsl(var(--foreground))" }}
          transition={{ duration: 0.15, delay: 0.1 }}
          className="text-sm uppercase tracking-widest mb-4 inline-block"
        >
          Full-Stack Engineer
        </motion.span>
        <motion.p 
          initial={{ opacity: 0, color: "#F97316" }}  // Bright Orange
          animate={{ opacity: 1, color: "hsl(var(--muted-foreground))" }}
          transition={{ duration: 0.15, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Building scalable applications with modern technologies and best practices
        </motion.p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="absolute bottom-10 z-10"
      >
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer hover:text-primary transition-colors"
        >
          <ArrowDown className="animate-bounce w-6 h-6" />
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
