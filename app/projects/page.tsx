"use client"

import { NextPage } from "next"
import ProjectsSlider from "@/ui/ProjectsSlider"

const Page: NextPage = ({}) => {
  return (
    <section className="  relative  h-screen  w-full  sm:px-24 md:px-28   ">
      <ProjectsSlider />
    </section>
  )
}

export default Page
