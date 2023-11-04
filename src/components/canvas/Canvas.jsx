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
import Matrs_Model from "./Matrs_blacknwhite";
import Glove_Model from "./Glove";

const MainCanvas = () => {
  return (
    <div className="w-[9vw]">
      <Canvas
        frameloop="demand"
        camera={{ position: [0, 0, 20], fov: 10 }}
        gl={{ preserveDrawingBuffer: true }}
        className="h-[500px]"
      >
        <Suspense fallback={<CanvasLoader />}>
          <pointLight position={[10, 10, 10]} intensity={0} />

          <Matrs_Model props={{ scale: 0.013 }} />
          <Environment preset="city" />
        </Suspense>

        <Preload all />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
};

export default MainCanvas;
