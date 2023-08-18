"use client"

import { NextPage } from "next"

import { siteConfig } from "@/config/site"
import { Card } from "@/components/ui/Card"

const projects = siteConfig.projects
const Page: NextPage = ({}) => {
  return (
    <>
      <div className=" scrollbar-track-primary/40 scrollbar-w-1  scrollbar-thumb-primary scrollbar-thumb-rounded-full scrollbar remove-scroll-bar relative  mx-auto flex h-screen  flex-wrap justify-center   gap-4 overflow-y-scroll py-40 sm:p-24 md:p-28    ">
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

export default Page
