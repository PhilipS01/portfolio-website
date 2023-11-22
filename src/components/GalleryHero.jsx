import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { gallerySections } from "../constants";
import { useState } from "react";

const GallerySection = ({ title, images, videos }) => {
  const [fullScreenImage, setfullScreenImage] = useState(null);
  const [fullScreenImageToggle, setfullScreenImageToggle] = useState(false);

  return (
    <motion.div className="bg-slate-200 h-[300px] w-[full] rounded-3xl mt-10 flex">
      <h1
        className={`${styles.GallerySectionTitle} absolute bg-slate-100 w-fit sm:py-5 py-4 sm:px-10 px-8 drop-shadow-md ml-5 rounded-b-xl`}
      >
        <span className="drop-shadow-md text-slate-400">{title}</span>
      </h1>
      <div
        className="m-6 flex flex-row flex-nowrap gap-4 overflow-x-scroll overflow-y-hidden w-[100%] snap-x snap-mandatory"
        style={{ scrollbarWidth: 10 }}
        id="galleryDiv"
      >
        {images.map((image, index) => {
          return (
            <div className="shrink-0">
              <img
                className="rounded-3xl h-[237px] w-[237px] object-cover mx-auto snap-start shrink-0 cursor-pointer"
                key={`galleryimage-${index}`}
                index={index}
                src={image}
                onClick={() => {
                  setfullScreenImage(image);
                  setfullScreenImageToggle(true);
                }}
              />
            </div>
          );
        })}
        {videos.map((link, index) => {
          return (
            <div>
              <iframe
                src={`https://www.youtube.com/embed/${link}`}
                title="Video"
                key={`galleryvideo-${index}`}
                allow="autoplay; encrypted-media;"
                allowFullScreen
                className="rounded-3xl h-[237px] w-[237px] object-cover mx-auto snap-start shrink-0 cursor-pointer"
              />
            </div>
          );
        })}
      </div>
      <div></div>
      <div
        id="fullScreenImageContainer"
        className={`${
          fullScreenImageToggle ? "block" : "hidden"
        } absolute top-0 left-0 bg-black/80 overscroll-auto h-[100%] z-10`}
      >
        <img
          src={fullScreenImage}
          className="w-[100vw] h-[100vh] object-contain fixed bg-black/80"
          onClick={() => {
            setfullScreenImageToggle(false);
          }}
          loading="lazy"
        />
        <div
          className="fixed rounded-full bg-slate-200 w-[50px] h-[50px] bottom-10 text-center leading-[48px] left-0 right-0 mx-auto cursor-pointer hover:scale-150 transition-all text-xl"
          onClick={() => {
            setfullScreenImageToggle(false);
          }}
        >
          x
        </div>
      </div>
    </motion.div>
  );
};

const GalleryHero = () => {
  return (
    <section
      className={`${styles.paddingX} mx-auto relative z-0 max-w-[1646px] w-full sm:pt-40 pt-24`}
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`bg-gradient-to-br from-slate-200 to-slate-400 lg:px-20 px-7 py-10 rounded-3xl sm:text-left text-center`}
      >
        <motion.h1
          variants={fadeIn("right", "linear", 0, 0.5)}
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
