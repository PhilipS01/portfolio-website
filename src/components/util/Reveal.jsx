import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const DoubleSlideReveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
    }
  }, [isInView]);

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
