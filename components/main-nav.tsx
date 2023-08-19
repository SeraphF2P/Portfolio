"use client"

import { useResizeObserver, useViewportSize } from "@mantine/hooks"
import { motion as m, useMotionTemplate, useScroll } from "framer-motion"

import NavLink from "./ui/NavLink"

interface MainNavProps {
  items?: { title: string; path: string }[]
}

export function MainNav({ items }: MainNavProps) {
  const { width: vWight } = useViewportSize()
  const [ref, { width: refWidth }] = useResizeObserver()
  const { scrollY } = useScroll()

  return (
    <div className="mn:justify-center flex items-center justify-start   gap-6 overflow-hidden py-1 sm:fixed    sm:left-4 sm:top-32  sm:overflow-visible    ">
      {items?.length ? (
        <m.nav
          ref={ref}
          drag="x"
          dragConstraints={{
            left: vWight < 420 ? vWight - refWidth : 0,
            right: vWight - refWidth,
          }}
          draggable={vWight < 640 ? "true" : "false"}
          className="flex gap-4 sm:h-[352px]   sm:flex-col sm:items-start sm:justify-between  sm:gap-6 sm:py-2"
        >
          {items?.map(
            (item, index) => item.title && <NavLink key={index} {...item} />
          )}
        </m.nav>
      ) : null}
    </div>
  )
}
