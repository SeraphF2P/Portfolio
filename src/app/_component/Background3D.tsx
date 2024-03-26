"use client";

import { Stars } from "@react-three/drei";
import {
  Canvas,
  MeshProps,
  PerspectiveCameraProps,
  useThree,
} from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { FC, useEffect, useLayoutEffect, useRef } from "react";

interface Background3DProps {}

const Background3D: FC<Background3DProps> = ({}) => {
  const rotateY = useMotionValue(0);
  const floating = useMotionValue(0);
  useEffect(() => {
    const control = animate(rotateY, 360, {
      autoplay: true,
      duration: 1000,
      ease: "linear",
      repeatType: "loop",
    });

    return control.cancel;
  }, [rotateY]);
  // useEffect(() => {
  //   const control = animate(floating, 10, {
  //     autoplay: true,
  //     duration: 500,
  //     ease: "linear",
  //     repeatType: "mirror",
  //     onRepeat: () => {
  //       floating.set(0);
  //     },
  //   });

  //   return control.cancel;
  // }, [floating]);
  return (
    <>
      <div className="  fixed inset-0 flex w-full items-center justify-center  bg-black ">
        <Canvas
          shadows
          dpr={[1, 2]}
          resize={{ scroll: false, offsetSize: true }}
        >
          <Camera />
          <Lights />

          <Stars />
          <Icosahedron
            rotation={[0, rotateY, 10]}
            position={[0, floating, 0]}
          />
        </Canvas>
      </div>
    </>
  );
};

export function Lights() {
  return (
    <>
      <spotLight color="#eee" position={[-10, 10, 5]} intensity={3} />
      <spotLight color="#eee" position={[-10, -10, 5]} intensity={3} />
    </>
  );
}

export function Icosahedron(props: MeshProps) {
  return (
    <motion.mesh {...props}>
      <icosahedronGeometry args={[3, 0]} />
      <Material />
    </motion.mesh>
  );
}
export function Material() {
  return <meshPhongMaterial color="#61f" specular="#83f" shininess={100} />;
}

function Camera() {
  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const cameraRef = useRef<PerspectiveCameraProps>(null);

  useLayoutEffect(() => {
    const { current: cam } = cameraRef;
    if (cam) {
      cam.aspect = size.width / size.height;
      cam.updateProjectionMatrix();
    }
  }, [size.height, size.width]);
  useLayoutEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [camera, cameraRef, set]);

  return <motion.perspectiveCamera ref={cameraRef} position={[0, 0, 20]} />;
}
export default Background3D;
