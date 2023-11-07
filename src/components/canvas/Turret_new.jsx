import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { lerp } from "three/src/math/MathUtils";

export let matrsModelgroup = null;

function Matrs_Model(props) {
  matrsModelgroup = useRef();
  const { nodes, materials } = useGLTF("../../../public/matrs/turret_new.glb");

  // animate
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    matrsModelgroup.current.rotation.x = lerp(
      matrsModelgroup.current.rotation.x,
      Math.cos(t / 4) / 20 + 0.25,
      0.1
    );
    matrsModelgroup.current.rotation.y = lerp(
      matrsModelgroup.current.rotation.y,
      Math.sin(t / 4) / 2 - t * 0.02, // Subtrahend zur Kompensierung des autoRotate
      0.1
    );
    matrsModelgroup.current.rotation.z = lerp(
      matrsModelgroup.current.rotation.z,
      Math.sin(t / 8) / 40,
      0.1
    );
    matrsModelgroup.current.position.y = lerp(
      matrsModelgroup.current.position.y,
      Math.sin(t / 2) / 4,
      1
    );
  });

  return (
    <group
      ref={matrsModelgroup}
      {...props}
      dispose={null}
      visible={true}
      scale={0.013}
    >
      <mesh
        geometry={nodes.MATRS_colored_1.geometry}
        material={materials["plastic concrete"]}
      />
      <mesh
        geometry={nodes.MATRS_colored_2.geometry}
        material={materials["Farbe_-_Metallic_(Schwarz)"]}
      />
      <mesh
        geometry={nodes.MATRS_colored_3.geometry}
        material={materials["Farbe_-_Emaille_glänzend_(Weiß)"]}
      />
      <mesh
        geometry={nodes.MATRS_colored_4.geometry}
        material={materials["Stahl_-_satiniert.001"]}
      />
      <mesh
        geometry={nodes.MATRS_colored_5.geometry}
        material={materials["Gummi_-_weich"]}
      />
      <mesh
        geometry={nodes.MATRS_colored_6.geometry}
        material={materials.Aluminum}
      />
      <mesh
        geometry={nodes.MATRS_colored_7.geometry}
        material={materials["plastic transparent"]}
      />
      <mesh
        geometry={nodes.MATRS_colored_8.geometry}
        material={materials["plastic black"]}
      />
      <mesh
        geometry={nodes.MATRS_colored_9.geometry}
        material={materials["plastic darker"]}
      />
      <mesh
        geometry={nodes.MATRS_colored_10.geometry}
        material={materials.servo}
      />
    </group>
  );
}

useGLTF.preload("../../../public/matrs/turret_new.glb");
export default <Matrs_Model />;
