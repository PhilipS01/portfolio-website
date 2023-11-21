import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { lerp } from "three/src/math/MathUtils";

export let atrModelgroup = null;

function ATR_Model(props) {
  atrModelgroup = useRef();
  const { nodes, materials } = useGLTF("./3d_models/atr.glb");

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
      <group position={[0, 0, -5.751]} scale={0.5}>
        <group position={[0.85, 0, 41.204]} scale={0.2}>
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_1"].geometry}
            material={materials["ABS_(Weiß).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_2"].geometry}
            material={materials["Kunststoff_-_matt_(Grau).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_3"].geometry}
            material={materials["Stahl_-_satiniert.001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_4"].geometry}
            material={materials["Aluminium_-_satiniert.001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_5"].geometry}
            material={materials["Pulverbeschichtung_-_rau_(Schwarz).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_6"].geometry}
            material={materials["Aluminium_-_satiniert_1.001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_7"].geometry}
            material={materials["Pulverbeschichtung_(Rot).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_8"].geometry}
            material={materials["Pulverbeschichtung_(Schwarz).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_9"].geometry}
            material={materials["Pulverbeschichtung_(Blau).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_10"].geometry}
            material={materials["Pulverbeschichtung_(Grün).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_11"].geometry}
            material={materials["Pulverbeschichtung_-_rau_(Dunkelgrau).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_12"].geometry}
            material={materials["Pulverbeschichtung_(Dunkelgrau).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_13"].geometry}
            material={materials["Farbe_-_Emaille_glänzend_(Dunkelgrau).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_14"].geometry}
            material={materials["Pulverbeschichtung_(Weiß).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_15"].geometry}
            material={materials["Chrom.001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_16"].geometry}
            material={materials["Chrom_-_Schwarz.001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_17"].geometry}
            material={materials["Aluminium_-_poliert.001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_18"].geometry}
            material={materials["Kunststoff_-_glänzend_(Gelb).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_19"].geometry}
            material={materials["Blei_-_satiniert.001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_20"].geometry}
            material={materials["Messing_-_poliert.001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_21"].geometry}
            material={materials["Eisen_-_poliert.001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_22"].geometry}
            material={materials["Kunststoff_-_matt_(Rot).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_23"].geometry}
            material={materials["Kunststoff_-_matt_(Grün).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_24"].geometry}
            material={materials["Pulverbeschichtung_(Gelb).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_25"].geometry}
            material={materials["Aluminium_-_eloxiert,_glänzend_(Grau).001"]}
          />
          <mesh
            geometry={nodes["Getriebe-Prüfstand_LowRes_26"].geometry}
            material={
              materials[
                "PEKK_–_Polyetherketonketon_verstärkt_mit_Kohlenstofffase"
              ]
            }
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./3d_models/atr.glb");
export default <ATR_Model />;
