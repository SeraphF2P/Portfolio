"use client";

import { Stars } from "@react-three/drei";
import {
  Canvas,
  PerspectiveCameraProps,
  useThree,
  type Camera,
 MeshProps
} from "@react-three/fiber";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
  motion as m,
  
} from "framer-motion";
import { motion } from "framer-motion-3d";
import { FC, useEffect, useLayoutEffect, useRef } from "react";

interface Background3DProps {}
const viewport = {
  x: 0,
  y: 0,
  z: 20,
};
const Background3D: FC<Background3DProps> = ({}) => {
  const rotateY = useMotionValue(0);
  const COLORS = ["rgb(14 165 233)", "rgb(217 70 239)", "rgb(132 204 22)"];
  const color = useMotionValue(COLORS[0]);
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, viewport.z / 4]);
  useEffect(() => {
    const control = animate(rotateY, 360, {
      autoplay: true,
      duration: 1000,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    return control.cancel;
  }, [rotateY]);
  useEffect(() => {
    const control = animate(color, COLORS, {
      autoplay: true,
      duration: 20,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    });
    return control.cancel;
  }, [COLORS, color]);
  const aurora = useMotionTemplate`radial-gradient(
    100% 120% at 50% 20%,
    transparent 50%,
    ${color}
  )`;
  return (
    <>
      <div className=" fixed  inset-0 flex w-full items-center justify-center bg-black   ">
        <m.div
          style={{
            background: aurora,
          }}
          className="  pointer-events-none absolute inset-0 w-full"
        />

        <Canvas
          shadows
          dpr={[1, 2]}
          resize={{ scroll: false, offsetSize: true }}
        >
          <Camera />
          <Lights />

          <Stars />
            <motion.mesh rotation={[rotateX, rotateY, 10]}>
      <icosahedronGeometry args={[3, 0]} />
      <Material />
    </motion.mesh>
        </Canvas>
      </div>
    </>
  );
};

export function Lights() {
  return (
    <>
      <spotLight color="#eee" position={[-5, 3, 5]} intensity={3} />
      <spotLight color="#ccc" position={[-5, -5, 5]} intensity={1} />
    </>
  );
}


export function Material() {
  return (
    <meshPhongMaterial
      color="rgb(135,43,229)"
      specular="rgb(161,88,235)"
      shininess={10}
    />
  );
}

function Camera() {
  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const cameraRef = useRef<PerspectiveCameraProps & Camera>(null);

  useLayoutEffect(() => {
    const { current: cam } = cameraRef;
    if (cam) {
      cam.aspect = size.width / size.height;
      if (typeof cam.updateProjectionMatrix == "function") {
        cam.updateProjectionMatrix();
      };
    }
  }, [size.height, size.width]);
  useLayoutEffect(() => {
    const { current: cam } = cameraRef;

    if (cam) {
      const oldCam = camera;
           
      set({camera:cam});
      return () => set(() => ({ camera: oldCam }));
    }
  }, [camera, cameraRef, set]);

  return (
    <motion.perspectiveCamera
      ref={cameraRef}
      position={[viewport.x, viewport.y, viewport.z]}
    />
  );
}
export default Background3D;
