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
import { GlowCapture, Glow } from "@codaworks/react-glow";

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
    ["#232B23", "rgba(0,0,0,0.0)"]
  ); // projects link color

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.48, 0.52],
    ["#e9dab1", "#181818"]
  ); // background color

  const scroll_alert_opacity = useTransform(
    scrollYProgress,
    [0.34, 0.37],
    [1, 0]
  ); // landing div opacity

  return (
    <section>
      <motion.section
        className="relative w-full h-[200vh] mx-auto bg-retro_primary"
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
                  className={`${styles.heroHeadText} w-fit mx-auto glow:text-glow/50`}
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
                href="#projects"
                id="direct_work_link"
                className="font-medium hover:font-bold hover:text-2xl text-xl transition-all bg-clip-text bg-gradient-to-r from-[#61A457] to-[#348C8E]"
              >
                Direkt zu den Projekten ➜
              </a>
            </DoubleSlideReveal>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-[105vh] w-full flex justify-center items-center"
          style={{ opacity: scroll_alert_opacity }}
        >
          <a href="#projects">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 border-retro_secondary flex justify-center items-start p-2"
              id="scroll-btn"
            >
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-retro_secondary mb-1"
              />
            </div>
          </a>
        </motion.div>
      </motion.section>
    </section>
  );
};

export default Hero;
