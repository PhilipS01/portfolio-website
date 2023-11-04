import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { motion, useAnimation } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc/";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import { MainCanvas } from "./canvas";

//tiltMaxAngleX={2}
//tiltMaxAngleY={2}
//glareEnable={true}
//glareMaxOpacity={0.4}
//glareColor="#458587"
//glarePosition="bottom"
//glareBorderRadius="20px"

const ProjectCard = ({ index, title, icon }) => {
  return (
    <div className="xs:w-[80%] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-gradient-to-b from-retro_accent_green to-retro_accent_blue p-[2px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-[#101010] rounded-[20px] py-6 px-12 flex items-center flex-col h-[500px]"
        >
          <table className="table-fixed w-full h-full">
            <tbody>
              <tr className="align-top">
                <td className="text-white h-full">
                  <MainCanvas />
                </td>
                <td>
                  <h3
                    className={`${styles.ProjectCardHeadText} text-white text-[20px] font-bold float-right text-right`}
                  >
                    {title}{" "}
                  </h3>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
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
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.75 }}
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
