"use client"

import Link from "next/link"

import NextImage from "./ui/NextImage"

type ProjectType = {
  id: number
  name: string
  image: string
  isFinished: boolean
  errors: string[] | null
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
  errors,
  isFinished,
}: ProjectType) {
  return (
    <Link
      href={url}
      target="_blank"
      className=" block max-w-xs w-full h-96 cursor-pointer overflow-hidden rounded bg-slate-50/10 p-2  shadow  shadow-slate-50/30 backdrop-blur-sm transition-[colors_scale] duration-300 hover:scale-105   hover:bg-slate-100/30  "
    >
      <div className=" bg-background/10 relative  h-full w-full overflow-hidden  rounded-sm   shadow-inner shadow-slate-950 ">
        <NextImage
          className="  aspect-video w-full opacity-80 "
          src={"/" + image}
          alt={"project-" + id}
        />
        <div className="px-4 py-2  ">
          <h3 className=" flex gap-1 text-2xl  capitalize">{name}</h3>
          <div className="   h-[34px]  remove-scroll-bar flex max-h-[34px] w-full flex-wrap items-center justify-start gap-1 overflow-y-scroll py-1 text-sm capitalize sm:max-h-[100px]  ">
            {isFinished == false && (
              <div className=" bg-emerald-100 text-emerald-500 rounded-sm px-2 py-1 shadow-sm shadow-slate-700">
                in progress
              </div>
            )}
            {errors &&
              errors.map((tec) => (
                <div className=" bg-red-100 text-red-500 rounded-sm px-2 py-1 shadow-sm shadow-slate-700">
                  {tec}
                </div>
              ))}
            {tec.map((tec) => (
              <div className=" bg-background rounded-sm px-2 py-1 shadow-sm shadow-slate-700">
                {tec}
              </div>
            ))}
          </div>

          <p className=" remove-scroll-bar  mt-2 h-36  overflow-y-scroll pb-4 ">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}