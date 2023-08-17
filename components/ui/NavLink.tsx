"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion as m } from "framer-motion"

import { cn } from "../../lib/utils"

interface NavLinkProps {
  title: string
  path: string
}

function NavLink(props: NavLinkProps) {
  const pathName = usePathname()
  const isActive = pathName == props.path
  return (
    <div className=" relative">
      <Link
        href={props.path}
        className={cn(
          " relative flex w-full items-center hover:text-slate-50  whitespace-nowrap p-2 font-mono text-base font-semibold capitalize  text-slate-50/70 no-underline  transition-transform duration-300 [word-spacing:10px] sm:justify-start",
          isActive && " text-slate-50  sm:translate-x-4"
        )}
      >
        {props.title}
      </Link>
      {isActive && (
        <m.div
          layout
          layoutId="main-nav-background"
          transition={{ duration: 0.4, ease: "linear" }}
          className=" absolute -bottom-0.5 left-0 h-0.5 w-full rounded-sm bg-indigo-600  sm:-left-4 sm:bottom-0 sm:h-full sm:w-4 sm:rounded-none sm:[clip-path:polygon(0_0,50%_50%,0_100%,0_0)] "
        ></m.div>
      )}
    </div>
  )
}
export default NavLink
