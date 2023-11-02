import React from "react";
import { styles } from "../styles";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <section className="h-screen bg-retro_secondary relative w-full mx-auto">
      <Element name="work">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
          viewport={{ once: true }}
        >
          <h1 className={`${styles.sectionHeadText} text-offblack`}>Work</h1>
          <p>Hier stehen spaeter meine Projekte.</p>
        </motion.div>
      </Element>
    </section>
  );
};

export default Works;
