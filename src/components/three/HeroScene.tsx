import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function RomanArchitecture() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ pointer }, delta) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.x * 0.055, 3, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.y * 0.025, 3, delta);
  });
  const stone = useMemo(() => new THREE.MeshStandardMaterial({ color: "#8d7861", roughness: 0.88, metalness: 0.02 }), []);
  return (
    <group ref={group} position={[0, -1, -2]}>
      <mesh position={[-4.2, 0, 0]} material={stone} castShadow><boxGeometry args={[2.1, 8.5, 1.8]} /></mesh>
      <mesh position={[4.2, 0, 0]} material={stone} castShadow><boxGeometry args={[2.1, 8.5, 1.8]} /></mesh>
      <mesh position={[0, 3.25, 0]} rotation-z={Math.PI / 2} material={stone} castShadow><torusGeometry args={[4.25, 1.05, 24, 80, Math.PI]} /></mesh>
      <mesh position={[0, 4.25, 0]} material={stone} castShadow><boxGeometry args={[8.5, 1.4, 1.8]} /></mesh>
      <mesh position={[-4.2, -3.6, 0]} material={stone}><cylinderGeometry args={[1.25, 1.45, 0.5, 16]} /></mesh>
      <mesh position={[4.2, -3.6, 0]} material={stone}><cylinderGeometry args={[1.25, 1.45, 0.5, 16]} /></mesh>
    </group>
  );
}

function ParticleAtmosphere() {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const array = new Float32Array(180 * 3);
    for (let i = 0; i < 180; i += 1) {
      array[i * 3] = Math.sin(i * 12.91) * 9;
      array[i * 3 + 1] = ((i * 37) % 100) / 10 - 5;
      array[i * 3 + 2] = -2 - ((i * 17) % 80) / 10;
    }
    return array;
  }, []);
  useFrame((_, delta) => { if (points.current) points.current.rotation.y += delta * 0.01; });
  return <points ref={points}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry><pointsMaterial size={0.028} color="#d2a65e" transparent opacity={0.55} sizeAttenuation /></points>;
}

export default function HeroScene() {
  return (
    <Canvas dpr={[1, 1.5]} shadows camera={{ position: [0, 0.15, 9], fov: 48 }} gl={{ antialias: true, alpha: true }}>
      <fog attach="fog" args={["#17120f", 8, 22]} />
      <ambientLight intensity={0.58} color="#c8b093" />
      <directionalLight position={[5, 7, 6]} intensity={3.2} color="#f2c47a" castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-4, 0, 4]} intensity={20} distance={11} color="#a64f2e" />
      <RomanArchitecture />
      <ParticleAtmosphere />
      <Environment resolution={64}>
        <Lightformer intensity={2} color="#e4bd82" position={[0, 5, 4]} scale={[10, 4, 1]} />
        <Lightformer intensity={1} color="#6e7560" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[8, 3, 1]} />
      </Environment>
    </Canvas>
  );
}
