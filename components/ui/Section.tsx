"use client"

import { DetailedHTMLProps, FC, HTMLAttributes, useRef } from "react"
import { useActiveHashSection } from "@/contexts/AnimationContext"

import { cn } from "@/lib/utils"

interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  id: string
}
const Section: FC<SectionProps> = ({ children, className, id, ...props }) => {
  const ref = useRef(null)
  useActiveHashSection(`#${id}`, ref)
  return (
    <section
      id={id}
      ref={ref}
      {...props}
      className={cn(" flex items-start justify-center pt-4", className)}
    >
      {children}
    </section>
  )
}

export default Section
