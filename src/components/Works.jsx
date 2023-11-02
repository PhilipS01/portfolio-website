import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

const Works = () => {
  return (
    <section className="h-screen bg-retro_secondary relative w-full mx-auto">
      <Element name="work">
        <motion.div
          className="text-center"
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className={`${styles.sectionHeadText} text-offblack`}>
            Projekte
          </h1>
          <p className="text-white">Eine Kollektion meines ganzen Stolzes.</p>
        </motion.div>
      </Element>
    </section>
  );
};

export default Works;
