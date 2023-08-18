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
  return (
    <>
      <div className="  remove-scroll-bar relative mx-auto  flex flex-wrap  justify-center gap-4 overflow-y-scroll  py-40 sm:py-24    ">
        {projects &&
          projects
            .sort(() => Math.random() - 0.5)
            .map((project) => {
              return (
                <div key={project.image} className=" relative ">
                  <Card {...project} />
                </div>
              )
            })}
      </div>
    </>
  )
}

export default ProjectsSlider
