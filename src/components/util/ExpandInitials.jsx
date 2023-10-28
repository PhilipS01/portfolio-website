import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import useHover from "@react-hook/hover";
import { logoarrow } from "../../assets";

export const InitialsExpander = ({ children }) => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isHovering = useHover(ref);

  useEffect(() => {
    if (isHovering) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isHovering]);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.03,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      display: "inline-flex",
      opacity: 1,
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={sentence}
      initial="hidden"
      animate={mainControls}
    >
      <img
        src={logoarrow}
        alt={logoarrow}
        className="w-4 h-4 object-contain inline-block mt-[-3px]"
      />
      {children
        .toString()
        .split("")
        .map((char, index) => {
          if (char == "P" || char == "S") {
            return <span key={char + "-" + index}>{char}</span>;
          }
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
    </motion.span>
  );
};
