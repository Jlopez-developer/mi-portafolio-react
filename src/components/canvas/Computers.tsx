import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../layout/Loader";

/* ===================== */
/*   MODELO 3D           */
/* ===================== */

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const modelRef = useRef<any>(null);
  const isRotating = useRef(true);
  const elapsedTime = useRef(0);

  const ROTATION_DURATION = 500; // segundos
  const ROTATION_SPEED = 0.003;

  useFrame((_, delta) => {
    if (!modelRef.current || !isRotating.current) return;

    elapsedTime.current += delta;

    if (elapsedTime.current < ROTATION_DURATION) {
      modelRef.current.rotation.y += ROTATION_SPEED;
    } else {
      isRotating.current = false;
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight intensity={1} />

      <primitive
        ref={modelRef}
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -4.5]}
        rotation={[-0.01, -0.2, -0.1]}
        onClick={() => {
          isRotating.current = false;
        }}
        style={{ cursor: "pointer" }}
      />
    </mesh>
  );
};

/* ===================== */
/*   CANVAS              */
/* ===================== */

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (isMobile) return null;

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
