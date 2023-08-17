"use client"

import { FC, useLayoutEffect, useRef } from "react"
import { Canvas, PerspectiveCameraProps, useThree } from "@react-three/fiber"
import { motion as m, useTime, useTransform } from "framer-motion"
import { motion } from "framer-motion-3d"

interface Background3DProps {}

const Background3D: FC<Background3DProps> = ({}) => {
  const time = useTime()
  const rotateY = useTransform(time, [0, 1000_000], [0, 360])
  const floating = useTransform(time, [0, 100_000, 0], [0, 2, 0])
  return (
    <>
      <m.div className="  absolute inset-0 flex  items-center justify-center">
        <Canvas
          shadows
          dpr={[1, 2]}
          resize={{ scroll: false, offsetSize: true }}
        >
          <Camera />
          <Lights />

          <Icosahedron
            rotation={[0, rotateY, 10]}
            position={[0, floating, 0]}
          />
        </Canvas>
      </m.div>
    </>
  )
}

export function Lights() {
  return (
    <>
      <spotLight color="#eee" position={[-10, 10, 5]} intensity={3} />
      <spotLight color="#eee" position={[-10, -10, 5]} intensity={3} />
    </>
  )
}

export function Icosahedron(props) {
  return (
    <motion.mesh {...props}>
      <icosahedronGeometry args={[3, 0]} />
      <Material />
    </motion.mesh>
  )
}
export function Material() {
  return <meshPhongMaterial color="#61f" specular="#83f" shininess={100} />
}

function Camera() {
  const set = useThree(({ set }) => set)
  const camera = useThree(({ camera }) => camera)
  const size = useThree(({ size }) => size)
  const cameraRef = useRef<PerspectiveCameraProps>(null)

  useLayoutEffect(() => {
    const { current: cam } = cameraRef
    if (cam) {
      cam.aspect = size.width / size.height
      cam.updateProjectionMatrix()
    }
  }, [size.height, size.width])
  useLayoutEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera
      set(() => ({ camera: cameraRef.current }))
      return () => set(() => ({ camera: oldCam }))
    }
  }, [camera, cameraRef, set])

  return <motion.perspectiveCamera ref={cameraRef} position={[0, 0, 20]} />
}
export default Background3D
