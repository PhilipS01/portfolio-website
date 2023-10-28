import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export let matrsModelgroup = null;
export let distanceFromLeft = null;
export let distanceFromTop = null;
export let distanceFromRight = null;

let camera;

export function getMatrsDistanceFromLeft() {
  const modelPosition = matrsModelgroup.current.position;
  const modelWorldPosition = modelPosition
    .clone()
    .applyMatrix4(matrsModelgroup.current.matrixWorld);

  const modelScreenPosition = modelWorldPosition.project(camera);
  distanceFromLeft = ((modelScreenPosition.x + 1) * window.innerWidth) / 2;
  distanceFromRight = window.innerWidth - distanceFromLeft;
  distanceFromTop = ((modelScreenPosition.y + 1) * 1280) / 2;
}

const Matrs_Model = ({ props }) => {
  matrsModelgroup = useRef();
  const { nodes, materials } = useGLTF(
    "../../../public/matrs/matrs_blacknwhite.glb"
  );
  camera = useThree().camera;

  //useEffect(() => {
  //  const modelPosition = matrsModelgroup.current.position;
  //  const modelWorldPosition = modelPosition
  //    .clone()
  //    .applyMatrix4(matrsModelgroup.current.matrixWorld);
  //
  //  const modelScreenPosition = modelWorldPosition.project(camera);
  //  distanceFromLeft = ((modelScreenPosition.x + 1) * window.innerWidth) / 2;
  //  distanceFromRight = window.innerWidth - distanceFromLeft;
  //  distanceFromTop = ((modelScreenPosition.y + 1) * 1280) / 2;
  //}, [distance.toggled]);

  return (
    <group
      ref={matrsModelgroup}
      {...props}
      dispose={null}
      scale={0.0035}
      position={[-3, 2, 2.7]}
      visible={false}
    >
      <mesh
        geometry={nodes.Turret_1.geometry}
        material={materials["Farbe_-_Emaille_glänzend_(Gelb)"]}
      />
      <mesh
        geometry={nodes.Turret_2.geometry}
        material={materials["Kunststoff_-_matt_(Weiß)"]}
      />
      <mesh
        geometry={nodes.Turret_3.geometry}
        material={materials["Kunststoff_-_glänzend_(Blau)"]}
      />
      <mesh
        geometry={nodes.Turret_4.geometry}
        material={materials["Farbe_-_Emaille_glänzend_(Dunkelgrau)"]}
      />
      <mesh
        geometry={nodes.Turret_5.geometry}
        material={materials["Pulverbeschichtung_(Weiß)"]}
      />
      <mesh geometry={nodes.Turret_6.geometry} material={materials.Chrom} />
      <mesh
        geometry={nodes.Turret_7.geometry}
        material={materials["Chrom_-_Schwarz"]}
      />
      <mesh
        geometry={nodes.Turret_8.geometry}
        material={materials["Aluminium_-_poliert"]}
      />
      <mesh
        geometry={nodes.Turret_9.geometry}
        material={materials["ABS_(Weiß)"]}
      />
      <mesh
        geometry={nodes.Turret_10.geometry}
        material={materials["Aluminium_-_satiniert"]}
      />
      <mesh
        geometry={nodes.Turret_11.geometry}
        material={materials["Pulverbeschichtung_(Dunkelgrau)"]}
      />
      <mesh
        geometry={nodes.Turret_12.geometry}
        material={materials["Kunststoff_-_glänzend_(Gelb)"]}
      />
      <mesh
        geometry={nodes.Turret_13.geometry}
        material={materials["Glas_-_matt,_hell"]}
      />
      <mesh
        geometry={nodes.Turret_14.geometry}
        material={materials["Stahl_-_satiniert"]}
      />
      <mesh
        geometry={nodes.Turret_15.geometry}
        material={materials["Gummi_-_weich"]}
      />
    </group>
  );
};

export default Matrs_Model;

useGLTF.preload("../../../public/matrs/matrs.glb");
