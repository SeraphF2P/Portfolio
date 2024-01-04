"use client"

import Link from "next/link"
import { useResizeObserver } from "@mantine/hooks"
import { motion as m } from "framer-motion"

import Icon from "../icons"
import NextImage from "./NextImage"

type ProjectType = {
  id: number
  name: string
  image: string
  isFinished: boolean
  tec: string[]
  url: string
  description: string
}
export function Card({
  image,
  id,
  description,
  name,
  tec,
  url,
  isFinished,
}: ProjectType) {
  const [ref, { width: refWidth }] = useResizeObserver()
  return (
    <div className="   block h-96 w-[280px] cursor-pointer overflow-hidden rounded bg-slate-50/10 p-2  shadow  shadow-slate-50/30 backdrop-blur-sm transition-[colors_scale] duration-300 hover:scale-105   hover:bg-slate-100/30  ">
      <div className=" bg-background/10 relative  h-full w-full overflow-hidden  rounded-sm   shadow-inner shadow-slate-950 ">
        <NextImage
          className="  aspect-video w-full opacity-80 "
          src={"/" + image}
          alt={"project-" + name}
        />
        <div className="px-4 py-2  ">
          <div className="flex items-center justify-center gap-2 py-2">
            <h3 className=" flex gap-1 text-2xl  capitalize">{name}</h3>
            <Link href={url} target="_blank" rel="noopener">
              <Icon className=" h-4 w-4 " name="externalLink" />
            </Link>
          </div>
          <div className="h-8 w-full  overflow-hidden ">
            <m.div
              ref={ref}
              drag="x"
              dragConstraints={{
                left: 4,
                right: 300 - refWidth,
              }}
              draggable={refWidth > 300 ? true : false}
              className="  flex    h-8 items-center     justify-start gap-1 whitespace-nowrap  py-1 text-sm capitalize "
            >
              {isFinished == false && (
                <div className=" rounded-sm bg-emerald-100 px-2 py-1 text-emerald-500 shadow-sm shadow-slate-700">
                  in progress
                </div>
              )}
            </m.div>
          </div>

          <p className=" remove-scroll-bar  mt-2 h-36  overflow-y-scroll pb-4 ">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
