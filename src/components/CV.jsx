import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../styles";
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../hoc/";
import { textVariant } from "../utils/motion";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import { cv } from "../constants";
import { cpp } from "../assets";

const CVCard = ({ date, item_title, description }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1d1d", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={date}
    iconStyle={{ backgroundColor: "fff" }}
  >
    <div>
      <h3 className="text-white">{item_title}</h3>
    </div>
  </VerticalTimelineElement>
);

const CV = () => {
  return (
    <section className="bg-retro_secondary pb-14">
      <GlowCapture>
        <div>
          <motion.div variants={textVariant()} className="text-center">
            <Glow color="#458587">
              <h1 className={`${styles.sectionHeadText} glow:text-glow/50`}>
                curriculum vitae
              </h1>
            </Glow>

            <p className="text-white/60 sm:text-[20px] text-[14px]">
              Meine Person auf einen Blick.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-col gap-10">
          {cv.map((group, index) => {
            if (group.title != "KENNTNISSE UND INTERESSEN") {
              return (
                <VerticalTimeline index={index}>
                  {group.items.map((items, index) => (
                    <CVCard key={group.title} index={index} {...items} />
                  ))}
                </VerticalTimeline>
              );
            }
          })}
        </div>
      </GlowCapture>
    </section>
  );
};

export default SectionWrapper(CV, "cv");
