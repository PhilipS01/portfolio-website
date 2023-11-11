import React, { Suspense, useEffect, useState } from "react";
import { styles } from "../styles";
import { motion, useAnimation } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc/";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import { MainCanvas } from "./canvas";
import { greeter_screenshot, greeter_screenshot2 } from "../assets/";

export const ToolCrest = ({ index, name, icon, isMobile }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", 1.5 + 0.25 * index, 0.5)}>
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        glareEnable={true}
        glareMaxOpacity={0.5}
        scale={1.075}
        glareColor="#458587"
        glarePosition="bottom"
        glareBorderRadius="13px"
        className={`${isMobile ? "mt-[2em] " : " "} mr-3`}
      >
        <div
          options={{ max: 45, scale: 1.5, speed: 450 }}
          className={`${
            isMobile ? "p-[8px] " : "p-[10px] "
          }  flex justify evenly items-center flex-col rounded-xl border-solid border-2 border-retro_accent_blue/50`}
        >
          <img
            src={icon}
            alt={name}
            className={`${
              isMobile ? "w-9 h-9 " : "w-12 h-12 "
            } object-contain drag-none select-none`}
          />
        </div>
      </Tilt>
    </motion.div>
  );
};
// bg-[url('../../public/greeter_screenshot.png')] bg-top bg-cover
const ProjectCard = ({
  index,
  title,
  model,
  description,
  link,
  features,
  tools,
  isMobile,
}) => {
  return (
    <div className="sm:w-[100%] lg:min-w-[900px] lg:max-w-[100%] w-full select-none">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-gradient-to-b from-retro_accent_green to-retro_accent_blue p-[2px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-[#101010] rounded-[20px] py-6 px-12 flex items-center flex-col h-fit"
        >
          {isMobile == false && (
            <table className="table-fixed w-full h-full">
              <tbody>
                <tr className="align-top">
                  <td className="text-white h-[full] lg:w-[200px] w-[150px]">
                    {title != "Greeter" && (
                      <Suspense>
                        <MainCanvas model={model} />
                      </Suspense>
                    )}
                    {title == "Greeter" && (
                      <div>
                        <Tilt
                          tiltMaxAngleX={10}
                          tiltMaxAngleY={10}
                          glareEnable={true}
                          glareMaxOpacity={0.3}
                          scale={2}
                          glareColor="#fff"
                          glarePosition="all"
                          glareBorderRadius="13px"
                          className="mt-6 w-[300px]"
                        >
                          <div className="flex justify evenly items-center flex-col">
                            <img
                              className="rounded-xl opacity-70 hover:opacity-100"
                              src={greeter_screenshot2}
                            />
                          </div>
                        </Tilt>
                      </div>
                    )}
                  </td>
                  <td className="w-[80%]">
                    <div className="flex flex-col">
                      <h3
                        className={`${styles.ProjectCardTitleText} text-white font-bold float-right text-right select-none`}
                      >
                        {title}
                      </h3>
                      <h4
                        className={`${styles.ProjectCardDescriptionText} text-white font-bold float-right text-right mb-[1em] select-none`}
                      >
                        {description}
                      </h4>
                      {features[0].tags.map((tag, index) => {
                        return (
                          <div className="text-right mt-[1em] border-separate border-r pr-4 border-slate-500">
                            <div
                              key={tag.name + "-" + index}
                              className={`${styles.ProjectCardFeaturesText} text-slate-200 font-bold tracking-tight`}
                            >
                              {tag.name}
                            </div>
                            <div
                              className={`${styles.ProjectCardFeaturesText} text-slate-400`}
                            >
                              {tag.prop}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-[400px]">
                    <div className="flex flex-row w-[400px]">
                      {tools.map((tool, index) => (
                        <ToolCrest key={tool.name} index={index} {...tool} />
                      ))}
                    </div>
                  </td>
                  <td className="float-right mt-[3em]">
                    <a
                      href={`/projects/${link}`}
                      className="text-slate-500 hover:text-slate-300 transition-all"
                    >
                      Erfahre mehr
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          {/* if device is mobile return different table */}
          {isMobile == true && (
            <table className="table-fixed w-full h-full text-center">
              <tbody>
                <tr className="align-top">
                  <td className="text-white h-full w-full">
                    {title != "Greeter" && (
                      <Suspense>
                        <MainCanvas model={model} />
                      </Suspense>
                    )}
                    {title == "Greeter" && (
                      <div>
                        <Tilt
                          tiltMaxAngleX={20}
                          tiltMaxAngleY={20}
                          glareEnable={true}
                          glareMaxOpacity={0.3}
                          scale={1}
                          glareColor="#fff"
                          glarePosition="all"
                          glareBorderRadius="13px"
                          className="my-6"
                        >
                          <div className="flex justify evenly items-center flex-col">
                            <img
                              className="rounded-xl opacity-70 hover:opacity-100"
                              src={greeter_screenshot2}
                            />
                          </div>
                        </Tilt>
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="w-full">
                    <div className="flex flex-col">
                      <h3
                        className={`${styles.ProjectCardTitleText} text-white font-bold `}
                      >
                        {title}
                      </h3>
                      <h4
                        className={`${styles.ProjectCardDescriptionText} text-white font-bold  mb-[1em]`}
                      >
                        {description}
                      </h4>
                      {features[0].tags.map((tag, index) => {
                        return (
                          <div className="mt-[1em]">
                            <div
                              key={tag.name + "-" + index}
                              className={`${styles.ProjectCardFeaturesText} text-slate-200 font-bold tracking-tight`}
                            >
                              {tag.name}
                            </div>
                            <div
                              className={`${styles.ProjectCardFeaturesText} text-slate-400`}
                            >
                              {tag.prop}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </td>
                </tr>
                <tr>
                  <div className="flex flex-row justify-center">
                    {tools.map((tool, index) => (
                      <ToolCrest
                        key={tool.name}
                        index={index}
                        isMobile={isMobile}
                        {...tool}
                      />
                    ))}
                  </div>
                </tr>
                <tr>
                  <td className="pt-[1em]">
                    <a
                      href={`/projects/${link}`}
                      className={`${styles.ProjectCardFeaturesText} text-slate-500 hover:text-slate-300 transition-all`}
                    >
                      Erfahre mehr
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
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
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    setisMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setisMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="bg-retro_secondary pb-14">
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
            <Glow color="#458587">
              <h1 className={`${styles.sectionHeadText} glow:text-glow/50`}>
                Projekte
              </h1>
            </Glow>

            <p className="text-white/60 sm:text-[20px] text-[14px]">
              Eine Kollektion meines ganzen Stolzes.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-col gap-10 mx-auto justify-evenly items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              {...project}
              isMobile={isMobile}
            />
          ))}
        </div>
      </GlowCapture>
    </section>
  );
};

export default SectionWrapper(Works, "projects");
