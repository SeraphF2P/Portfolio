"use client"

import { NextPage } from "next"

import { siteConfig } from "@/config/site"
import { Card } from "@/components/ui/Card"

const projects = siteConfig.projects
const Page: NextPage = ({}) => {
  return (
    <main className=" custom_scrollBar container relative  grid h-full   overflow-y-scroll  ">
      <section className="relative mx-auto  grid grid-cols-1 gap-4 pb-8 pt-4 sm:z-40  lg:grid-cols-2    ">
        {projects &&
          projects.map((project) => {
            return (
              <div key={project.image} className="  relative ">
                <Card {...project} />
              </div>
            )
          })}
      </section>
    </main>
  )
}

export default Page
