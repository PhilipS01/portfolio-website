import React, { useRef, useLayoutEffect, useState } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { setMATRSVis } from "../../slices/matrsSlice";
import { setDefaultHeadingVis } from "../../slices/defaultHeadingSlice";
import { getMatrsDistanceFromLeft, matrsModelgroup } from "./Matrs_blacknwhite";
import { setFrameloop } from "../../slices/frameloopStateSlice";
import { showImage, hideImage } from "./Canvas";
import { showDetails, hideDetails } from "../ProjectProperties";

import { distanceFromLeft, modelScreenPosition } from "./Matrs_blacknwhite";
import { oldDistanceFromLeft, oldDistanceFromTop } from "./Canvas";
import { sm_windowWidth } from "../../App";
import { resetIndex } from "../../slices/componentCardSlice";
import delay from "../util/delay";

import { gloveModelgroup } from "./Glove";

const Drawer_Model = ({ props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "../../../public/drawer/IKEA_ALEX_drawer.glb"
  );

  const tl = useRef(gsap.timeline());
  const scroll = useScroll();
  const drawer_one = useRef();

  const dispatch = useDispatch();
  const matrs = useSelector((state) => state.matrs);
  const componentCard = useSelector((state) => state.componentCard);

  let count = 0;
  let details = false;

  function shiftHeadings() {
    if (window.innerWidth >= sm_windowWidth) {
      let subHwidth = document.getElementById("subHeading").clientWidth;
      let mainHwidth = document.getElementById("mainHeadingH1").clientWidth;

      let headingMargin = document.getElementById("navbar").offsetLeft;
      gsap.to("#headings", {
        delay: 0,
        duration: 0.5,
        x: window.innerWidth / 2 - subHwidth / 2 - headingMargin,
      });

      gsap.to(
        "#mainHeading",
        {
          delay: 0,
          duration: 0.5,
          x: subHwidth / 2 - mainHwidth / 2,
        },
        "<"
      );
    }
  }

  function hideHeadings() {
    gsap.to("#headings", {
      delay: 0,
      duration: 0.5,
      x: 0,
    });

    gsap.to(
      "#mainHeading",
      {
        delay: 0,
        duration: 0.5,
        x: 0,
      },
      "<"
    );
  }

  let oldWinWidth = 0;
  useFrame(() => {
    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration());

      if (drawer_one.current.position.y == -0.5) {
        gsap.to("#direct_work_link", {
          duration: 0.3,
          opacity: 0,
        });

        if (!matrs.vis) {
          dispatch(setMATRSVis(true));
          dispatch(setFrameloop("always"));
        }

        // when drawer is off to left side (=> rotated)
        if (group.current.rotation.y >= 0.39) {
          shiftHeadings();

          // if componentcard is greater than 1, hide turret (matrs) and show glove
          if (componentCard.index > 1) {
            matrsModelgroup.current.visible = false;
            gloveModelgroup.current.visible = true;
          } else {
            matrsModelgroup.current.visible = true;
            gloveModelgroup.current.visible = false;
          }
          // set x-position of matrs to drawer
          if (count == 0) {
            matrsModelgroup.current.position.x =
              group.current.position.x + 1.45;
            count++;
          }
          if (componentCard.index > 1) {
            gloveModelgroup.current.rotation.y += 1 / 100; // spin glove model
            gloveModelgroup.current.position.y = 1.3;
          } else {
            matrsModelgroup.current.rotation.y += 1 / 100; // spin matrs model
          }

          if (matrsModelgroup.current.position.z >= 9.65) {
            //// only trigger distance updates (and corresponding animations) if window-width has changed
            if (Math.abs(oldWinWidth - window.innerWidth) > 0 || count < 10) {
              getMatrsDistanceFromLeft();
              oldWinWidth = window.innerWidth;
              count++;
            }

            if (
              !details ||
              Math.abs(oldDistanceFromLeft - distanceFromLeft) > 0
            ) {
              showImage();
              if (componentCard.index <= 1) {
                showDetails();
                details = true;
              }
            } else {
            }
          } else {
            if (details) {
              hideImage();
              hideDetails();
              details = false;
              (async () => {
                await delay(1000);
                document.getElementById("nextComponentCard").style.display =
                  "block";
                dispatch(resetIndex());
              })();
            }
          }
        } else {
          hideHeadings();
          matrsModelgroup.current.visible = false;
          gloveModelgroup.current.visible = false;
        }
      } else {
        if (tl.current.time() == 0) {
          gsap.to("#direct_work_link", {
            duration: 0.3,
            opacity: 1,
          });
          dispatch(setFrameloop("demand"));

          /* if no project is visible, set the default heading to be visible
            --> triggers change-text in Hero.jsx and animations for heading and 
            subheading in ChangeHero.jsx and ChangeHeroSub.jsx */
          if (matrs.vis) {
            dispatch(setDefaultHeadingVis(true));
            dispatch(setMATRSVis(false));
          }
        }
      }
    }
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      tl.current
        .to(
          drawer_one.current.position,
          {
            duration: 0.3,
            y: -0.5,
          },
          0
        )
        .to(group.current.position, {
          delay: 0.5,
          duration: 0.5,
          x: window.innerWidth > 1700 ? -4 : -(window.innerWidth / 28) * 0.066,
        })
        .to(
          group.current.rotation,
          {
            delay: 0,
            duration: 0.5,
            y: Math.PI / 8,
          },
          "<"
        )
        .to(
          matrsModelgroup.current.position,
          {
            duration: 2,
            y: +3.4,
          },
          2
        )
        .to(matrsModelgroup.current.position, {
          duration: 1,
          x: 0,
          y: matrsModelgroup.current.position.y - 1.5,
          z: matrsModelgroup.current.position.z + 7,
        })
        .to(
          group.current.position,
          {
            duration: 0.5,
            x:
              window.innerWidth < sm_windowWidth
                ? -7
                : window.innerWidth < 1300
                ? -(window.innerWidth / 28) * 0.1
                : matrsModelgroup.current.position.x - 1,
          },
          "<"
        );
    }, 10);
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.066}
        >
          <group
            name="a2486ef730cd444f8a04c9f6a10981a3fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode">
              <group
                name="ALEX_Frame"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name="ALEX_Frame_ALEX_0"
                  geometry={nodes.ALEX_Frame_ALEX_0.geometry}
                  material={materials.ALEX}
                />
              </group>
              <group
                name="Drawers_Large"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Drawer_Large_1"
                  geometry={nodes.Drawer_Large_1.geometry}
                  material={materials.ALEX}
                />
                <mesh
                  name="Drawer_Large_2"
                  geometry={nodes.Drawer_Large_2.geometry}
                  material={materials.ALEX}
                />
                <mesh
                  name="Drawer_Large_3"
                  geometry={nodes.Drawer_Large_3.geometry}
                  material={materials.ALEX}
                />
              </group>
              <group
                name="Drawers_Small"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <group ref={drawer_one}>
                  <mesh
                    name="Drawer_Small_1"
                    geometry={nodes.Drawer_Small_1.geometry}
                    material={materials.ALEX}
                  />
                </group>
                <mesh
                  name="Drawer_Small_2"
                  geometry={nodes.Drawer_Small_2.geometry}
                  material={materials.ALEX}
                />
              </group>
              <group name="Legs" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name="Legs_Legs_0"
                  geometry={nodes.Legs_Legs_0.geometry}
                  material={materials.Legs}
                />
              </group>
              <group
                name="Plane"
                position={[0, 33.2, 28.1]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Plane__0"
                  geometry={nodes.Plane__0.geometry}
                  material={materials.Plane__0}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Drawer_Model;

useGLTF.preload("../../../public/drawer/IKEA_ALEX_drawer.glb");
