import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../styles";
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../hoc/";
import { fadeIn, textVariant } from "../utils/motion";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import { cv } from "../constants";

const CVCard = ({
  date,
  item_title,
  description,
  icon,
  iconBg,
  v2,
  bgColor,
  bgColor2,
}) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#000",
      color: "#fff",
      backgroundImage: `linear-gradient(to bottom right, ${bgColor}, ${bgColor2})`,
    }}
    contentArrowStyle={{ borderRight: "7px solid #bcbcbc" }}
    date={date}
    iconStyle={{ backgroundColor: iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {icon != null && (
          <img
            src={icon}
            alt={item_title}
            className="w-[70%] h-[70%] object-contain"
          />
        )}
      </div>
    }
  >
    <div>
      {!v2 && (
        <h3
          className={`${styles.ProjectCardFeaturesText} font-bold tracking-tight`}
        >
          {item_title}
        </h3>
      )}
      <ul className={`${v2 ? "" : "mt-5"} list-disc ml-5 space-y-2`}>
        {description.map((line, index) => (
          <li
            key={`cv-vtl-point-${item_title}-${index}`}
            className={`${styles.subText} pl-1 tracking-tight`}
          >
            {line}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const fadeInVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

const CV = () => {
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
            <Glow color="#0ea5e9">
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
            if (group.title != "Kenntnisse und Interessen") {
              return (
                <div>
                  <h1 className="text-white/60 sm:text-[20px] text-[14px] text-left mb-5">
                    {group.title}
                  </h1>
                  <VerticalTimeline index={index} layout="1-column-left">
                    {group.items.map((items, index) => (
                      <CVCard
                        key={`cv-vtl-group-${group.title}-${index}`}
                        index={index}
                        {...items}
                        v2={false}
                        bgColor={group.bgColor}
                        bgColor2={group.bgColor2}
                      />
                    ))}
                  </VerticalTimeline>
                </div>
              );
            } else {
              // Kenntnisse und Interessen Abschnitt
              return (
                <div>
                  <h1 className="text-white/60 sm:text-[20px] text-[14px] text-left mb-5">
                    {group.title}
                  </h1>
                  <VerticalTimeline index={index} layout="1-column-left">
                    {group.items.map((items, index) => (
                      <CVCard
                        key={`cv-vtl-group-${group.title}-${index}`}
                        index={index}
                        {...items}
                        v2={true}
                        bgColor={group.bgColor}
                        bgColor2={group.bgColor2}
                      />
                    ))}
                  </VerticalTimeline>
                </div>
              );
            }
          })}
        </div>
      </GlowCapture>
      <div className="text-white text-right width-full mt-5">
        <a
          href="../../public/Philip_Simon_CV.pdf"
          download={true}
          className="sm:text-[20px] text-[14px] transition-all hover:font-bold text-slate-500 hover:text-slate-300 md:mr-5 mr-3"
        >
          Oder zum Download
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(CV, "cv");
