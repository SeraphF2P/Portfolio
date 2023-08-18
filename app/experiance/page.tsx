"use client"

import type { NextPage } from "next"
import { motion as m } from "framer-motion"

import { siteConfig } from "../../config/site"

const Page: NextPage = () => {
  return (
    <m.div
      initial={{ scaleY: 0, y: "33.33%" }}
      animate={{ scaleY: 1, y: "33.33%" }}
      transition={{ duration: 1 }}
      className="   bg-primary/70 relative flex h-96 w-full origin-right justify-center  pr-1 backdrop-blur-md  "
    >
      <div className=" scrollbar-track-primary/40 scrollbar-w-1  scrollbar-thumb-rounded-full scrollbar-thumb-slate-50/80 scrollbar   relative flex flex-wrap  justify-center gap-4 overflow-y-scroll p-4   sm:px-40  ">
        {siteConfig.experiances.map((exp) => (
          <Section {...exp} />
        ))}
      </div>
    </m.div>
  )
}
const Section = (props: {
  id: number
  title: string
  duration?: number | string
  info: string
}) => {
  return (
    <div className=" font-outfit border-primary flex w-full max-w-[320px]  origin-center  flex-col items-start   border-4   p-4  shadow-2xl  transition-[transform_colors] hover:scale-105  hover:bg-slate-200/10 ">
      <h3 className=" font-semibold capitalize">{props.title}</h3>
      <p className=" my-4">{props.duration}</p>
      <p>{props.info}</p>
    </div>
  )
}
export default Page
