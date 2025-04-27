import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically import the Canvas and AnimatedShapes components
const AnimatedShapesCanvas = dynamic(() => import('./Shapes/AnimatedShapesCanvas'), { ssr: false });

const AnimatedShapesSection = () => {
  return (
    <section className="py-20 relative h-[700px] bg-white dark:bg-black overflow-hidden" id="animated-shapes">
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Render the Canvas only on the client */}
        <AnimatedShapesCanvas />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 flex items-center justify-center h-full"
      >
        <div className="bg-black/80 backdrop-blur-md p-8 rounded-lg shadow-lg border border-purple-500/30">
          <h2 className="text-3xl md:text-5xl font-bold text-center max-w-3xl mx-auto text-white">
            Build your Web / Mobile Application with us!
          </h2>
        </div>
      </motion.div>
    </section>
  );
};

export default AnimatedShapesSection;