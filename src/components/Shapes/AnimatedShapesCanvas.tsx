import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AnimatedShapes from './AnimatedShapes';
import { useTheme } from 'next-themes';

const AnimatedShapesCanvas = () => {
  const { theme } = useTheme();

  const backgroundColor = theme === 'light' ? '#ffffff' : '#000000';

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
      gl={{ antialias: true, alpha: false }}
    >
      <color attach="background" args={[backgroundColor]} />
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
      <AnimatedShapes />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
    </Canvas>
  );
};

export default AnimatedShapesCanvas;
