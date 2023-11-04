import { React, useState, useRef, useEffect } from "react";
import { projects } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { logoarrow } from "../assets/index";
import { gsap } from "gsap";

const ComponentCard = (props) => {
  const componentCard = useSelector((state) => state.componentCard);
  const dispatch = useDispatch();
  const [i, setI] = useState(0);

  const handleClick = () => {
    if (i < props.components_length - 1) {
      setI((prevI) => prevI + 1);
      if (i + 1 >= props.components_length - 1) {
        document.getElementById("nextComponentCard").style.display = "none";
      }
      matrsModelgroup.current.visible = false;
    }
    dispatch(increaseIndex());
  };

  return (
    <Tilt
      options={tiltDefaults}
      className={`${styles.ProjectPropsText} tiltcard text-black p-10 rounded-2xl border-4 border-solid hover:border-accent_tint transition-colors duration-300 ease-in-out right-0 left-0`}
      style={{ margin: "40px auto" }}
    >
      <div className="text-xl font-bold text-center tracking-wider">
        {props.components[i].name}
      </div>

      {props.components[i].tags.map((tag, index) => {
        return (
          <div
            key={tag + "-" + index}
            {...tag}
            index={index}
            className="text-left"
          >
            <div className="mt-7 font-bold">{tag.name}</div>
            <div>{tag.prop}</div>
          </div>
        );
      })}
      <img
        src={logoarrow}
        className="w-7 h-6 object-contain float-right hover:cursor-pointer mr-[-25px] truncate"
        id="nextComponentCard"
        onClick={() => {
          handleClick();
          gsap.to(".tiltcard", {
            delay: 0,
            duration: 0.5,
            rotateY: "+=360",
          });
        }}
      />
    </Tilt>
  );
};

const ProjectProperties = (props) => {
  mainControls = useAnimation();
  projectDetails = useRef();

  return (
    <motion.div
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 1,
        staggerChildren: 0.5,
        ease: "easeIn",
      }}
      style={{
        bottom: 3,
        zIndex: 22,
        position: "absolute",
      }}
      className={`w-fit h-fit text-right`}
      ref={projectDetails}
    >
      <motion.div
        key={1}
        variants={{
          hidden: { opacity: 0, x: -70 },
          visible: { opacity: 1, x: 0 },
        }}
        className={`${styles.sectionSubText}`}
      >
        <div>{props.description}</div>
      </motion.div>
      <motion.div
        key={props.title}
        variants={{
          hidden: { opacity: 0, x: -70 },
          visible: { opacity: 1, x: 0 },
        }}
        className="relative"
      >
        <ComponentCard key={1} {...props} />
      </motion.div>
    </motion.div>
  );
};
