"use client"

import type { NextPage } from "next"

const Page: NextPage = () => {
  return (
    <section className="  fixed inset-0 flex items-center justify-center ">
      <span className="  bg-primary/60 absolute left-0 top-32  h-96 w-full  max-w-sm rounded-sm " />

      <span className="   absolute -bottom-24 -right-24  aspect-square w-full max-w-sm rounded-full  border-[20px] border-yellow-300/90 " />

      <div className="font-outfit relative  flex  flex-col p-4  ">
        <h2 className=" capitalize">web developer </h2>
        <p className=" pl-1">ready for work</p>
      </div>
    </section>
  )
}

export default Page
