
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import * as THREE from 'three';

const AnimatedShapes = () => {
  const groupRef = useRef<THREE.Group>(null);

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
          <meshStandardMaterial color={new THREE.Color("#6E59A5")} />
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
          <meshStandardMaterial color={new THREE.Color("#D946EF")} />
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
          <meshStandardMaterial color={new THREE.Color("#0EA5E9")} />
        </mesh>
      ))}
    </group>
  );
};

const AnimatedShapesSection = () => {
  return (
    <section className="py-20 relative h-[600px] bg-background/80 backdrop-blur-sm">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        className="absolute inset-0"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedShapes />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto px-4 text-foreground z-10">
          Build your Web / Mobile Application with us!
        </h2>
      </motion.div>
    </section>
  );
};

export default AnimatedShapesSection;
