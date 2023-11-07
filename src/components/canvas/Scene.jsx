import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { lerp } from "three/src/math/MathUtils";

export let atrModelgroup = null;

function ATR_Model(props) {
  atrModelgroup = useRef();
  const { nodes, materials } = useGLTF("../../../public/atr/scene.glb");

  // animate
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    atrModelgroup.current.rotation.x = lerp(
      atrModelgroup.current.rotation.x,
      Math.cos(t / 4) / 20 + 0.25,
      0.1
    );
    atrModelgroup.current.rotation.y = lerp(
      atrModelgroup.current.rotation.y,
      Math.sin(t / 4) / 2 - t * 0.02, // Subtrahend zur Kompensierung des autoRotate
      0.1
    );
    atrModelgroup.current.rotation.z = lerp(
      atrModelgroup.current.rotation.z,
      Math.sin(t / 8) / 40,
      0.1
    );
    atrModelgroup.current.position.y = lerp(
      atrModelgroup.current.position.y,
      Math.sin(t / 2) / 4,
      1
    );
  });

  return (
    <group
      ref={atrModelgroup}
      {...props}
      dispose={null}
      visible={true}
      scale={0.05}
    >
      <group position={[0, 0, -5.82]} scale={0.5}>
        <group position={[0.85, 0, 41.204]} scale={0.2}>
          <mesh
            geometry={nodes.ATR_1.geometry}
            material={materials["ABS_(Weiß)"]}
          />
          <mesh
            geometry={nodes.ATR_2.geometry}
            material={materials["Kunststoff_-_matt_(Grau)"]}
          />
          <mesh
            geometry={nodes.ATR_3.geometry}
            material={materials["Stahl_-_satiniert"]}
          />
          <mesh
            geometry={nodes.ATR_4.geometry}
            material={materials["Aluminium_-_satiniert"]}
          />
          <mesh
            geometry={nodes.ATR_5.geometry}
            material={materials["Pulverbeschichtung_-_rau_(Schwarz)"]}
          />
          <mesh
            geometry={nodes.ATR_6.geometry}
            material={materials["Aluminium_-_satiniert_1"]}
          />
          <mesh
            geometry={nodes.ATR_7.geometry}
            material={materials["Pulverbeschichtung_(Rot)"]}
          />
          <mesh
            geometry={nodes.ATR_8.geometry}
            material={materials["Pulverbeschichtung_(Schwarz)"]}
          />
          <mesh
            geometry={nodes.ATR_9.geometry}
            material={materials["Pulverbeschichtung_(Blau)"]}
          />
          <mesh
            geometry={nodes.ATR_10.geometry}
            material={materials["Pulverbeschichtung_(Grün)"]}
          />
          <mesh
            geometry={nodes.ATR_11.geometry}
            material={materials["Pulverbeschichtung_-_rau_(Dunkelgrau)"]}
          />
          <mesh
            geometry={nodes.ATR_12.geometry}
            material={materials["Pulverbeschichtung_(Dunkelgrau)"]}
          />
          <mesh
            geometry={nodes.ATR_13.geometry}
            material={materials["Farbe_-_Emaille_glänzend_(Dunkelgrau)"]}
          />
          <mesh
            geometry={nodes.ATR_14.geometry}
            material={materials["Pulverbeschichtung_(Weiß)"]}
          />
          <mesh geometry={nodes.ATR_15.geometry} material={materials.Chrom} />
          <mesh
            geometry={nodes.ATR_16.geometry}
            material={materials["Chrom_-_Schwarz"]}
          />
          <mesh
            geometry={nodes.ATR_17.geometry}
            material={materials["Aluminium_-_poliert"]}
          />
          <mesh
            geometry={nodes.ATR_18.geometry}
            material={materials["Kunststoff_-_glänzend_(Gelb)"]}
          />
          <mesh
            geometry={nodes.ATR_19.geometry}
            material={materials["Blei_-_satiniert"]}
          />
          <mesh
            geometry={nodes.ATR_20.geometry}
            material={materials["Messing_-_poliert"]}
          />
          <mesh
            geometry={nodes.ATR_21.geometry}
            material={materials["Eisen_-_poliert"]}
          />
          <mesh
            geometry={nodes.ATR_22.geometry}
            material={materials["Kunststoff_-_matt_(Rot)"]}
          />
          <mesh
            geometry={nodes.ATR_23.geometry}
            material={materials["Kunststoff_-_matt_(Grün)"]}
          />
          <mesh
            geometry={nodes.ATR_24.geometry}
            material={materials["Pulverbeschichtung_(Gelb)"]}
          />
          <mesh
            geometry={nodes.ATR_25.geometry}
            material={materials["Aluminium_-_eloxiert,_glänzend_(Grau)"]}
          />
          <mesh
            geometry={nodes.ATR_26.geometry}
            material={
              materials[
                "PEKK_–_Polyetherketonketon_verstärkt_mit_Kohlenstofffasern_"
              ]
            }
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("../../../public/atr/scene.glb");
export default <ATR_Model />;
