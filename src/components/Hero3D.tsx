"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.6} />

        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1.6, 64, 64]}>
            <meshStandardMaterial
              color="#ffffff"
              roughness={0.2}
              metalness={0.7}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}