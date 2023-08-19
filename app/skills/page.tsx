"use client"

import type { NextPage } from "next"

import { siteConfig } from "../../config/site"
import Skill from "./Skill"

const skills = siteConfig.skills

const Page: NextPage = () => {
  return (
    <section className="fixed inset-0 ">
      <div className="absolute isolate bottom-0 rounded-sm   w-full sm:w-[calc(100dvw_-_288px)] sm:left-36 h-[calc(100dvh_-_128px)] sm:h-[calc(100dvh_-_110px)]">
        {skills && skills.map((sk) => <Skill key={sk.id} {...sk} />)}
      </div>
    </section>
  )
}

export default Page
