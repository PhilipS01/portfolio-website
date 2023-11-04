import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc/";
import { GlowCapture, Glow } from "@codaworks/react-glow";

const defaultTiltOptions = {
  tiltMaxAngleX: 5, // max tilt rotation (degrees)
  tiltMaxAngleY: 5, // max tilt rotation (degrees)
};

const ProjectCard = ({ index, title, icon }) => {
  return (
    <Tilt
      tiltMaxAngleX={2}
      tiltMaxAngleY={2}
      glareEnable={true}
      glareMaxOpacity={0.4}
      glareColor="#458587"
      glarePosition="bottom"
      glareBorderRadius="20px"
      className="xs:w-[80%] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-gradient-to-b from-retro_accent_green to-retro_accent_blue p-[2px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-[#101010] rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col h-[500px]"
        >
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const fadeInVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

const Works = () => {
  return (
    <section className=" bg-retro_secondary">
      <GlowCapture>
        <div>
          <motion.div
            className="text-center"
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Glow color="#d79922">
              <h1 className={`${styles.sectionHeadText} glow:text-glow/50`}>
                Projekte
              </h1>
            </Glow>

            <p className="text-white">Eine Kollektion meines ganzen Stolzes.</p>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-col gap-10 mx-auto justify-evenly items-center">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </GlowCapture>
    </section>
  );
};

export default SectionWrapper(Works, "projects");
