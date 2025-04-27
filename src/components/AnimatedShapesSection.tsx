
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AnimatedShapes = () => {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    // Animation loop for manual rotation
    let animationFrame: number;
    
    const animate = () => {
      if (groupRef.current) {
        groupRef.current.rotation.y += 0.002;
        groupRef.current.rotation.x += 0.001;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up animation frame on unmount
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <group ref={groupRef}>
      {/* Cubes */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={`cube-${i}`}
          position={[
            Math.sin(i * 4) * 3,
            Math.cos(i * 2) * 2,
            Math.sin(i * 3) * 2
          ]}
          rotation={[i * 0.3, i * 0.4, 0]}
        >
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshStandardMaterial color={new THREE.Color("#6E59A5")} emissive="#6E59A5" emissiveIntensity={0.4} />
        </mesh>
      ))}

      {/* Spheres */}
      {[...Array(7)].map((_, i) => (
        <mesh
          key={`sphere-${i}`}
          position={[
            Math.cos(i * 2.5) * 4,
            Math.sin(i * 1.5) * 2,
            Math.cos(i * 2) * 3
          ]}
        >
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color={new THREE.Color("#D946EF")} emissive="#D946EF" emissiveIntensity={0.4} />
        </mesh>
      ))}

      {/* Triangles (Cones) */}
      {[...Array(4)].map((_, i) => (
        <mesh
          key={`triangle-${i}`}
          position={[
            Math.sin(i * 3) * 3,
            Math.cos(i * 4) * 2,
            Math.sin(i * 2) * 2
          ]}
          rotation={[i * 0.5, 0, i * 0.3]}
        >
          <coneGeometry args={[0.4, 0.8, 3]} />
          <meshStandardMaterial color={new THREE.Color("#0EA5E9")} emissive="#0EA5E9" emissiveIntensity={0.4} />
        </mesh>
      ))}
    </group>
  );
};

const AnimatedShapesSection = () => {
  return (
    <section className="py-20 relative h-[600px] bg-black overflow-hidden" id="animated-shapes">
      <div className="absolute inset-0 w-full h-full z-0">
        <Canvas 
          camera={{ position: [0, 0, 10], fov: 50 }}
          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
          gl={{ antialias: true, alpha: false }}
        >
          <color attach="background" args={["#000000"]} />
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
          <AnimatedShapes />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
        </Canvas>
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
