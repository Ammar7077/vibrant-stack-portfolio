
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
          Ammar Omari
        </h1>
        <span className="text-sm uppercase tracking-widest mb-4 inline-block">Full-Stack Engineer</span>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Building scalable applications with modern technologies and best practices
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10"
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
