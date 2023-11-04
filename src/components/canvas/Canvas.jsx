import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, ScrollControls } from "@react-three/drei";
import CanvasLoader from "../Loader";
import Matrs_Model from "./Matrs_blacknwhite";
import Glove_Model from "./Glove";

const MainCanvas = () => {
  return (
    <div>
      <Canvas
        frameloop="demand"
        camera={{ position: [0, 0, 10], fov: 10 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <hemisphereLight
            intensity={0.15}
            position={[0, 10, 10]}
            groundColor="white"
          />
          <spotLight
            intensity={1}
            position={[0, 10, 20]}
            rotation={[0, 0, 0]}
          />

          <Matrs_Model />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default MainCanvas;
