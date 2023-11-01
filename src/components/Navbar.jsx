import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { InitialsExpander } from "./util/ExpandInitials";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[rgb(255,255,255,0.3)] backdrop-blur-lg`}
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
          <span className="m-[-10px] text-[18px] font-medium flex h-6">
            <InitialsExpander>Philip&nbsp;Simon</InitialsExpander>
          </span>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              id={link.id}
              className={`${
                active === link.title
                  ? "text-black"
                  : "text-retro_text_inactive"
              } hover:text-black text-[18px] font-medium cursor-pointer ease-in-out duration-300`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt={menu}
            className="w-[28px] h-[28px] object-contain cursor-pointer invert"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`transition-opacity duration-500 ease-in-out ${
              !toggle ? "opacity-0" : "opacity-100"
            } p-6 bg-black-300 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-row gap-10">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-retro_text_inactive"
                  } hover:text-white text-[16px] font-medium cursor-pointer ease-in-out duration-300`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
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
