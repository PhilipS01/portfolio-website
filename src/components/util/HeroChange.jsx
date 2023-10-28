import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

export const ChangeHero = ({ children, text }) => {
  const ref = useRef(null);
  const slideControls = useAnimation();

  const { vis } = useSelector((state) => state.matrs);

  useEffect(() => {
    if (vis) {
      slideControls.start("visible");
    }
  }, [vis]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden mx-auto"
      style={{ width: "fit-content" }}
    >
      {children}
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.25, delay: 0.25, ease: "easeIn" }}
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
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.25, delay: 0.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 3,
          bottom: 3,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
        className="bg-quaternary"
      />
    </div>
  );
};
