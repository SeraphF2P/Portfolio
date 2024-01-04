"use client"

import type { NextPage } from "next"
import { motion as m } from "framer-motion"

import { siteConfig } from "../../config/site"

const Page: NextPage = () => {
  return (
    <m.main
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 1 }}
      className=" relative   grid   h-[500px] w-full origin-right   sm:h-96  "
    >
      <div className=" z-40 custom_scrollBar  relative  m-auto flex flex-wrap  justify-center gap-4 overflow-y-scroll p-4   sm:px-40  ">
        {siteConfig.experiances.map((exp) => (
          <Section key={exp.id} {...exp} />
        ))}
      </div>
    </m.main>
  )
}
const Section = (props: {
  id: number
  title: string
  duration?: number | string
  info: string
}) => {
  return (
    <div className="font-outfit border-primary flex w-full max-w-[320px] origin-center  flex-col  items-start border-4   p-4   shadow-2xl  backdrop-blur-md  transition-[transform_colors] hover:scale-105  hover:bg-slate-200/10 ">
      <h3 className=" font-semibold capitalize">{props.title}</h3>
      <p className=" my-4">{props.duration}</p>
      <p>{props.info}</p>
    </div>
  )
}
export default Page
