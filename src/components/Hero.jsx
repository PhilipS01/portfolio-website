import { useEffect, useRef } from "react";
import { styles } from "../styles";
import { Reveal, DoubleSlideReveal } from "./util/Reveal";
import { ChangeHeroSub } from "./util/ChangeHeroSub";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
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
        id="heroMotionSection"
      >
        <motion.div
          className="flex flex-col top-[35vh] text-center sticky"
          id="headings"
          style={{ opacity }}
        >
          <div id="mainHeading">
            <Reveal>
              <motion.h1
                className={`${styles.heroHeadText} w-fit mx-auto glow:text-glow/50`}
                id="mainHeadingH1"
                style={{
                  color,
                }}
              >
                Ideen werden Realität
              </motion.h1>
            </Reveal>
          </div>
          <p
            className={`${styles.heroSubText} mt-[1em]  mx-auto w-fit invert-[50%]`}
            id="subHeading"
          >
            <ChangeHeroSub>
              Mechatronik und Full-Stack-Entwicklung
            </ChangeHeroSub>
          </p>
          <motion.div className="mt-[2em] z-10" style={{ color: color2 }}>
            <DoubleSlideReveal>
              <a
                href="#projects"
                id="direct_work_link"
                className="font-medium hover:font-bold hover:text-2xl text-xl transition-all bg-clip-text bg-gradient-to-br from-green-400 to-blue-500"
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
