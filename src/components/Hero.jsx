import React, { useEffect, useState, useCallback, useRef } from "react";
import { styles } from "../styles";
import { MainCanvas } from "./canvas";
import { Reveal, DoubleSlideReveal } from "./util/Reveal";
import { ChangeHero } from "./util/ChangeHero";
import { ChangeHeroSub } from "./util/ChangeHeroSub";
import { useSelector, useDispatch } from "react-redux";
import { changeText, changeSubtext } from "../slices/mainHeadingSlice";
import delay from "./util/delay";
import ProjectProperties from "./ProjectProperties";
import { projects } from "../constants";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const heading = useSelector((state) => state.heading);

  const mainHeadingText = heading.text;
  const mainHeadingSubText = heading.subtext;

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const fontcolor = useTransform(scrollYProgress, [0, 1], [0, 255]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  function mainHeadingColor(colorValue) {
    return `rgba(${colorValue}, ${colorValue}, ${colorValue})`;
  }

  return (
    <motion.section
      className="relative w-full h-screen mx-auto"
      style={{
        opacity,
      }}
      ref={targetRef}
    >
      <div
        className="flex flex-col relative top-[35vh] text-center sticky"
        id="headings"
      >
        <div id="mainHeading">
          <ChangeHero>
            <Reveal>
              <motion.h1
                className={`${styles.heroHeadText} w-fit mx-auto`}
                id="mainHeadingH1"
                animate={{
                  color: `rgba(${fontcolor.get()}, ${fontcolor.get()}, ${fontcolor.get()})`,
                }}
              >
                {mainHeadingText}
              </motion.h1>
            </Reveal>
          </ChangeHero>
        </div>
        <p
          className={`${styles.heroSubText} mt-4  mx-auto w-fit invert-[50%]`}
          id="subHeading"
        >
          <ChangeHeroSub>{mainHeadingSubText}</ChangeHeroSub>
        </p>

        <div className="text-accent_tint mt-7 z-10">
          <DoubleSlideReveal>
            <a
              href="#work"
              id="direct_work_link"
              className="font-medium hover:font-bold transition-all"
            >
              Direkt zu den Projekten ➜
            </a>
          </DoubleSlideReveal>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
