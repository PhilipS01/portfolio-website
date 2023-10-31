import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, ScrollControls } from "@react-three/drei";
import CanvasLoader from "../Loader";
import Drawer_Model from "./IKEA_ALEX_drawer";
import Matrs_Model from "./Matrs_blacknwhite";
import Glove_Model from "./Glove";
import { useSelector } from "react-redux";
import { selected3d } from "../../assets";
import { distanceFromLeft, distanceFromTop } from "./Matrs_blacknwhite";
import gsap from "gsap";

export let image;
export let oldDistanceFromLeft = 0;
export let oldDistanceFromTop = 0;

export function hideImage() {
  image.current.style.display = "none";
}

export function showImage() {
  image.current.style.display = "block";

  gsap.to("#selected3d", {
    opacity: 1,
    duration: 1,
  });

  image.current.style.left = (distanceFromLeft - 180).toString() + "px";
  image.current.style.top = (distanceFromTop - 395).toString() + "px";

  oldDistanceFromLeft = distanceFromLeft;
  oldDistanceFromTop = distanceFromTop;
}

const MainCanvas = () => {
  image = useRef();
  const frameloopState = useSelector((state) => state.frameloopState);
  const matrs = useSelector((state) => state.matrs);
  const distance = useSelector((state) => state.distance);

  return (
    <div style={{ overflow: "show" }} className="sm:h-[1290px] h-[90vh]">
      <img
        src={selected3d}
        className="absolute scale-90 hidden opacity-0"
        ref={image}
        id="selected3d"
      />
      <Canvas
        frameloop={frameloopState.frameloop}
        shadows
        camera={{ position: [0, 0, 15], fov: 35 }}
        gl={{ preserveDrawingBuffer: true }}
        id="canvasmain"
      >
        <hemisphereLight
          intensity={0.15}
          position={[0, 10, 10]}
          groundColor="white"
        />
        <spotLight intensity={1} position={[0, 10, 20]} rotation={[0, 0, 0]} />
        <Suspense fallback={<CanvasLoader />}>
          <Matrs_Model />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default MainCanvas;
