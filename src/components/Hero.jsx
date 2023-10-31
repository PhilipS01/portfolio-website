import React, { useEffect, useState, useCallback } from "react";
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

const Hero = () => {
  const dispatch = useDispatch();
  const matrs = useSelector((state) => state.matrs);
  const heading = useSelector((state) => state.heading);
  const defaultHeading = useSelector((state) => state.defaultHeading);

  const mainHeadingText = heading.text;
  const mainHeadingSubText = heading.subtext;

  const subHeading = document.getElementById("subHeading");

  const [projectIndex, setprojectIndex] = useState(0);

  async function animateChangeHeading(text, subtext) {
    await delay(250);
    dispatch(changeText(text));
    subHeading.style.opacity = "0";
    dispatch(changeSubtext(subtext));
    await delay(300);
    subHeading.style.opacity = "1";
  }

  // Update the text of the main heading depending on which project is opened/displayed
  useEffect(() => {
    if (matrs.vis) {
      animateChangeHeading(matrs.text, matrs.subtext);
    } else {
      // if no project is visible, display default text
      if (defaultHeading.vis) {
        animateChangeHeading(defaultHeading.text, defaultHeading.subtext);
      }
    }
  }, [matrs.vis]);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className="flex flex-col relative top-[35vh] text-center"
        id="headings"
      >
        <div id="mainHeading">
          <ChangeHero>
            <Reveal>
              <h1
                className={`${styles.heroHeadText} w-fit mx-auto`}
                id="mainHeadingH1"
              >
                {mainHeadingText}
              </h1>
            </Reveal>
          </ChangeHero>
        </div>
        <p
          className={`${styles.heroSubText} mt-4  mx-auto w-fit`}
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
      <ProjectProperties {...projects[projectIndex]} />
    </section>
  );
};

export default Hero;
