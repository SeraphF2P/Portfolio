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
      className="   bg-primary/70 pr-1 origin-right w-full backdrop-blur-md flex justify-center  relative h-96  "
    >
      <div className=" justify-center flex  scrollbar-track-primary/40 scrollbar-w-1 scrollbar-thumb-rounded-full   scrollbar-thumb-slate-50/80 scrollbar gap-4 p-4  flex sm:px-40 flex-wrap overflow-y-scroll   relative  ">
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
    <div className=" font-outfit border-primary flex max-w-[320px] w-full  origin-center  flex-col items-start   border-4   p-4  shadow-2xl  transition-[transform_colors] hover:scale-105  hover:bg-slate-200/10 ">
      <h3 className=" font-semibold capitalize">{props.title}</h3>
      <p className=" my-4">{props.duration}</p>
      <p>{props.info}</p>
    </div>
  )
}
export default Page
