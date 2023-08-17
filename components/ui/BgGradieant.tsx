"use client"

import { FC, useEffect } from "react"
import { motion as m, useMotionTemplate, useMotionValue } from "framer-motion"

const BgGradieant: FC = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  useEffect(() => {
    const mouseMoveHandler = ({ clientX, clientY }: MouseEvent) => {
      const { left, top } = document.body.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }
    document.body.addEventListener("mousemove", mouseMoveHandler)
    return () => {
      document.body.removeEventListener("mousemove", mouseMoveHandler)
    }
  }, [mouseX, mouseY])

  return (
    <m.div
      style={{
        background: useMotionTemplate`radial-gradient(240px circle at ${mouseX}px ${mouseY}px,rgb(67 56 202 / 0.4),transparent)`,
      }}
      className=" pointer-events-none absolute left-0 top-0 h-full w-full  "
    />
  )
}

export default BgGradieant
