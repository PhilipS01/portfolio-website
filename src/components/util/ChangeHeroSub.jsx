import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";
import delay from "./delay";

export const ChangeHeroSub = ({ children }) => {
  const slideControls = useAnimation();

  const matrs = useSelector((state) => state.matrs);
  const defaultHeading = useSelector((state) => state.defaultHeading);

  async function animate() {
    await delay(300);
    slideControls.start("start");
    await delay(700);
    slideControls.start("visible");
  }

  useEffect(() => {
    if (matrs.vis) {
      animate();
    } else if (defaultHeading.vis) {
      animate();
    }
  }, [matrs.vis]);

  const sentence = {
    hidden: { opacity: 1 },
    start: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 1, y: 0 },
    start: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.span variants={sentence} initial="hidden" animate={slideControls}>
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
