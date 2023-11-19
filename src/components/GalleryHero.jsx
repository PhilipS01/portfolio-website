import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";

const GallerySection = () => {
  <motion.div className="bg-slate-200 h-[300px] w-full rounded-3xl mt-10">
    <h1
      className={`${styles.GallerySectionTitle} absolute bg-slate-100 w-fit py-5 px-10 drop-shadow-md ml-5 rounded-b-xl`}
    >
      <span className="drop-shadow-md text-slate-400">MATRS</span>
    </h1>
    <div className="h-[100%] p-6">
      <img
        src="/src/assets/preports_screenshot.png"
        className="h-[100%] rounded-3xl"
      />
    </div>
  </motion.div>;
};

const GalleryHero = () => {
  return (
    <section
      className={`${styles.paddingX} mx-auto relative z-0 max-w-[1646px] w-full pt-40`}
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`bg-gradient-to-br from-slate-200 to-slate-400 px-20 py-10 rounded-3xl`}
      >
        <motion.h1
          variants={fadeIn("right", 0.2, 1)}
          className={`${styles.heroHeadText}`}
        >
          <span className="text-white drop-shadow-md">Gallerie</span>
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default GalleryHero;
