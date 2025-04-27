import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AnimatedShapes = () => {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      if (groupRef.current) {
        groupRef.current.rotation.y += 0.002;
        groupRef.current.rotation.x += 0.001;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => (
        <mesh
          key={`cube-${i}`}
          position={[
            Math.sin(i * 4) * 3,
            Math.cos(i * 2) * 2,
            Math.sin(i * 3) * 2,
          ]}
          rotation={[i * 0.3, i * 0.4, 0]}
        >
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshStandardMaterial
            color={new THREE.Color('#6E59A5')}
            emissive="#6E59A5"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
      {[...Array(7)].map((_, i) => (
        <mesh
          key={`sphere-${i}`}
          position={[
            Math.cos(i * 2.5) * 4,
            Math.sin(i * 1.5) * 2,
            Math.cos(i * 2) * 3,
          ]}
        >
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial
            color={new THREE.Color('#D946EF')}
            emissive="#D946EF"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
      {[...Array(4)].map((_, i) => (
        <mesh
          key={`triangle-${i}`}
          position={[
            Math.sin(i * 3) * 3,
            Math.cos(i * 4) * 2,
            Math.sin(i * 2) * 2,
          ]}
          rotation={[i * 0.5, 0, i * 0.3]}
        >
          <coneGeometry args={[0.4, 0.8, 3]} />
          <meshStandardMaterial
            color={new THREE.Color('#0EA5E9')}
            emissive="#0EA5E9"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
};

export default AnimatedShapes;