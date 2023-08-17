"use client"

import { FC } from "react"
import {
  animate,
  motion as m,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion"

import { siteConfig } from "../../config/site"
import { Card } from "../Card"

interface ProjectsSliderProps {}

const projects = siteConfig.projects
const timer = 25

const ProjectsSlider: FC<ProjectsSliderProps> = ({}) => {
  // const y = useMotionValue(100)
  // const animation = animate(y, -100, {
  //   duration: timer,
  //   repeat: Infinity,
  //   ease: "linear",
  //   repeatType: "loop",
  //   autoplay: true,
  // })

  return (
    <>
      <m.div
        // style={{
        //   y: useMotionTemplate`${y}%`,
        // }}
        className=" py-32 px-10  relative overflow-y-scroll h-screen scrollbar-track-primary/40 scrollbar-w-1 scrollbar-thumb-primary scrollbar-thumb-rounded-full   scrollbar-thumb-slate-50/80 scrollbar  flex flex-wrap justify-center gap-4  mx-auto     "
      >
        {projects &&
          projects
            .sort(() => Math.random() - 0.5)
            .map((project, index) => {
              return (
                <m.div
                  key={"slider-" + project.id}
                  // onHoverStart={() => animation.pause()}
                  // onHoverEnd={() => animation.play()}
                  className=" relative "
                >
                  <Card {...project} />
                </m.div>
              )
            })}
      </m.div>
    </>
  )
}

export default ProjectsSlider