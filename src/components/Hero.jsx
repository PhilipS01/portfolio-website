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
    offset: ["start end", "end start"],
  });

  const color = useTransform(scrollYProgress, [0.48, 0.6], ["#232B23", "#fff"]); // heading color
  const opacity = useTransform(scrollYProgress, [0.75, 0.83], [1, 0]); // landing div opacity

  const color2 = useTransform(
    scrollYProgress,
    [0.5, 0.55],
    ["#232B23", "#d79922"]
  ); // projects link color

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.48, 0.52],
    ["#e9dab1", "#282828"]
  ); // background color

  return (
    <section>
      <motion.section
        className="relative w-full h-[200vh] mx-auto bg-retro_secondary"
        style={{
          backgroundColor,
        }}
        ref={targetRef}
      >
        <motion.div
          className="flex flex-col top-[35vh] text-center sticky"
          id="headings"
          style={{ opacity }}
        >
          <div id="mainHeading">
            <ChangeHero>
              <Reveal>
                <motion.h1
                  className={`${styles.heroHeadText} w-fit mx-auto`}
                  id="mainHeadingH1"
                  style={{
                    color,
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

          <motion.div className="mt-7 z-10" style={{ color: color2 }}>
            <DoubleSlideReveal>
              <a
                href="#work"
                id="direct_work_link"
                className="font-medium hover:font-bold hover:text-lg transition-all"
              >
                Direkt zu den Projekten ➜
              </a>
            </DoubleSlideReveal>
          </motion.div>
        </motion.div>
      </motion.section>
    </section>
  );
};

export default Hero;
