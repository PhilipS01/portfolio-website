import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export let matrsModelgroup = null;
export let distanceFromLeft = null;
export let distanceFromTop = null;
export let distanceFromRight = null;
export let modelScreenPosition = null;

const Matrs_Model = ({ props }) => {
  matrsModelgroup = useRef();
  const { nodes, materials } = useGLTF(
    "../../../public/matrs/matrs_blacknwhite.glb"
  );

  //}, [distance.toggled]);

  return (
    <group
      ref={matrsModelgroup}
      {...props}
      dispose={null}
      scale={0.004}
      visible={true}
    >
      <mesh
        geometry={nodes.matrs_1.geometry}
        material={materials["Kunststoff_-_matt_(Weiß)"]}
      />
      <mesh
        geometry={nodes.matrs_2.geometry}
        material={materials["Kunststoff_-_glänzend_(Blau)"]}
      />
      <mesh
        geometry={nodes.matrs_3.geometry}
        material={materials["Glas_-_matt,_hell"]}
      />
      <mesh
        geometry={nodes.matrs_4.geometry}
        material={materials["Farbe_-_Emaille_glänzend_(Dunkelgrau)"]}
      />
      <mesh
        geometry={nodes.matrs_5.geometry}
        material={materials["Pulverbeschichtung_(Weiß)"]}
      />
      <mesh geometry={nodes.matrs_6.geometry} material={materials.Chrom} />
      <mesh
        geometry={nodes.matrs_7.geometry}
        material={materials["Farbe_-_Metallic_(Schwarz)"]}
      />
      <mesh
        geometry={nodes.matrs_8.geometry}
        material={materials["Aluminium_-_poliert"]}
      />
      <mesh
        geometry={nodes.matrs_9.geometry}
        material={materials["ABS_(Weiß)"]}
      />
      <mesh
        geometry={nodes.matrs_10.geometry}
        material={materials["Aluminium_-_satiniert"]}
      />
      <mesh
        geometry={nodes.matrs_11.geometry}
        material={materials["Pulverbeschichtung_(Dunkelgrau)"]}
      />
      <mesh
        geometry={nodes.matrs_12.geometry}
        material={materials["Farbe_-_Emaille_glänzend_(Weiß)"]}
      />
      <mesh
        geometry={nodes.matrs_13.geometry}
        material={materials["Farbe_-_Emaille_glänzend_(Grau)"]}
      />
      <mesh
        geometry={nodes.matrs_14.geometry}
        material={materials["Farbe_-_Emaille_glänzend_(Gelb)"]}
      />
      <mesh
        geometry={nodes.matrs_15.geometry}
        material={materials["Stahl_-_satiniert"]}
      />
      <mesh
        geometry={nodes.matrs_16.geometry}
        material={materials["Gummi_-_weich"]}
      />
    </group>
  );
};

export default Matrs_Model;
