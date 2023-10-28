import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";
import delay from "./delay";

export const ChangeHero = ({ children }) => {
  const ref = useRef(null);
  const slideControls = useAnimation();

  const matrs = useSelector((state) => state.matrs);
  const defaultHeading = useSelector((state) => state.defaultHeading);

  async function animate() {
    slideControls.start("animate");
    await delay(250);
    slideControls.start("end");
  }

  useEffect(() => {
    if (matrs.vis) {
      animate();
    } else if (defaultHeading.vis) {
      animate();
    }
  }, [matrs.vis]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden mx-auto"
      style={{ width: "fit-content" }}
    >
      {children}
      <motion.div
        variants={{
          hidden: { top: "100%" },
          animate: { top: 0 },
          end: { top: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 0.25,
          delay: 0,
          ease: "easeOut",
        }}
        style={{
          position: "absolute",
          top: 3,
          bottom: 3,
          left: 0,
          right: 0,
          zIndex: 22,
        }}
        className="bg-offwhite"
      />
    </div>
  );
};
