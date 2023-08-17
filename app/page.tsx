"use client"

import type { NextPage } from "next"
import { motion as m } from "framer-motion"

const Page: NextPage = () => {
  return (
    <section className="  fixed flex justify-center items-center inset-0 ">
      <span className="  bg-primary/60 absolute left-0 top-32  h-96 w-full  max-w-sm rounded-sm " />
      <span className="   absolute -right-24 -bottom-24 aspect-square w-full  max-w-sm rounded-full " />
      <span className="   border-[20px] border-amber-400/90 absolute  -right-24 -bottom-24 aspect-square w-full  max-w-sm rounded-full " />

      <div className="font-outfit  relative  flex flex-col  ">
        <h2 className=" capitalize">web developer </h2>
        <p className=" pl-1">ready for work</p>
      </div>
    </section>
  )
}

export default Page
