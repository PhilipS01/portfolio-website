import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  ScrollControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const MainCanvas = ({ model }) => {
  return (
    <div className="h-[189px] lg:h-[227px]">
      <Canvas
        frameloop="demand"
        camera={{ position: [0, 0, 20], fov: 10, zoom: 0.9 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <directionalLight position={[0, 10, 10]} intensity={0.3} />
          {model}
          <Environment preset="city" />
        </Suspense>

        <Preload all />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate={true}
          autoRotateSpeed={0.1}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default MainCanvas;
