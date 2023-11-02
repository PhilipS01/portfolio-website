import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";
import delay from "./delay";

export const ChangeHeroSub = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  async function animate() {
    await delay(1200);
    mainControls.start("visible");
  }

  useEffect(() => {
    if (isInView) {
      animate();
    }
  }, [isInView]);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.span
      variants={sentence}
      initial="hidden"
      animate={mainControls}
      ref={ref}
    >
      {children
        .toString()
        .split("")
        .map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
    </motion.span>
  );
};
