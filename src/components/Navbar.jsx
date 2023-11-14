import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { InitialsExpander } from "./util/ExpandInitials";

const Navbar = (scrolling) => {
  const [colorChange, setcolorChange] = useState(false);

  function logit() {
    const heroMotionSection = document.getElementById("heroMotionSection");
    if (
      window
        .getComputedStyle(heroMotionSection, null)
        .getPropertyValue("background-color") == "rgb(24, 24, 24)"
    ) {
      setcolorChange(true);
    } else {
      setcolorChange(false);
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[rgb(255,255,255,0.15)] backdrop-blur-lg`}
    >
      <div
        className="w-full flex justify-between items-center max-w-[1500px] mx-auto"
        id="navbar"
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.location.href = window.location.href;
          }}
        >
          <span
            className={`${
              colorChange ? "text-slate-200" : "text-retro_text_dark"
            } m-[-10px] text-[18px] font-medium flex h-6`}
          >
            <InitialsExpander>Philip&nbsp;Simon</InitialsExpander>
          </span>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              id={link.id}
              className={`${
                active === link.title ? "font-bold" : "font-medium"
              } ${
                colorChange ? "text-white" : "text-retro_text_dark"
              } text-[18px] cursor-pointer navHighlight`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.link}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt={menu}
            className={`${
              colorChange ? "" : "invert"
            } opacity-90 w-[28px] h-[28px] object-contain cursor-pointer`}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`transition-opacity duration-500 ease-in-out ${
              !toggle ? "opacity-0" : "opacity-100"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-gradient-to-br ${
              colorChange
                ? "from-neutral-700 to-neutral-900 text-white"
                : "from-[#efe5c8] to-[#e9dab1] text-retro_text_dark"
            } sidebar drop-shadow-lg`}
          >
            <ul className="list-none flex flex-row gap-10">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-[16px] font-medium cursor-pointer ease-in-out duration-300"
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.link}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
