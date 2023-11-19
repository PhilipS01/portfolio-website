import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { gallerySections } from "../constants";

const GallerySection = ({ title, images }) => {
  return (
    <motion.div className="bg-slate-200 h-[300px] w-full rounded-3xl mt-10 flex">
      <h1
        className={`${styles.GallerySectionTitle} absolute bg-slate-100 w-fit py-5 px-10 drop-shadow-md ml-5 rounded-b-xl`}
      >
        <span className="drop-shadow-md text-slate-400">{title}</span>
      </h1>
      <div className="h-[100%] p-6 flex gap-3 overflow-x-auto	overflow-y-hidden whitespace-nowrap">
        {images.map((image, index) => {
          return (
            <div className="h-[100%] rounded-3xl">
              <img
                className="h-[100%] w-[100%] rounded-3xl object-contain"
                key={`galleryimage-${index}`}
                index={index}
                src={image}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
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
          variants={fadeIn("right", 1)}
          className={`${styles.heroHeadText}`}
        >
          <span className="text-white drop-shadow-md">Gallerie</span>
        </motion.h1>
        {gallerySections.map((section, index) => (
          <GallerySection
            key={`gallerysection-${section.title}-${index}`}
            index={index}
            {...section}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default GalleryHero;
