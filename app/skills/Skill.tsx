import { FC } from "react"
import { Variants, motion as m } from "framer-motion"

interface SkillProps {
  id: number
  name: string
  level: number
}
const variants: Variants = {
  animate: { borderRadius: "44%", rotate: "360deg", y: "0%" },
}
const maxSize = 160

const Skill: FC<SkillProps> = ({ id, level, name }) => {
  const size = Math.max((level / 100) * maxSize, 80)
  const randomizerY = Math.floor(Math.random() * 100)
  const randomizerX = Math.floor(Math.random() * 100)
  const professional =
    level <= 30 ? "begginer" : level <= 60 ? "intemate" : "expert"
  const intmationLevel = {
    begginer: "lightgreen",
    intemate: "orange",
    expert: "#728",
  }
  return (
    <m.div
      key={id}
      whileHover="animate"
      drag
      // dragConstraints={{
      //   left: -size,
      //   right: -size,
      //   top: -size,
      //   bottom: -size,
      // }}
      style={{
        width: size,
        height: size,
        position: "absolute",
        borderColor: intmationLevel[professional],
      }}
      initial={{ top: "100%", left: `calc((100% - ${size}px) / 2)px` }}
      animate={{
        top: `max(calc(${randomizerY}% - ${size}px), 0px)`,
        left: `max(calc(${randomizerX}% - ${size}px), 0px)`,
      }}
      transition={{
        duration: 1,
        ease: "linear",
      }}
      className="  text-sm font-semibold   overflow-hidden border-4 text-center shadow  cursor-none rounded-full  flex justify-center items-center  capitalize backdrop-blur"
    >
      {name}
      <FlowAnimation
        style={{
          bgColor: intmationLevel[professional],
          contrast: "80%",
        }}
      />
      <FlowAnimation
        style={{
          bgColor: intmationLevel[professional],
          contrast: "60%",
          y: "120%",
          rotate: "30deg",
        }}
      />
    </m.div>
  )
}
const FlowAnimation = ({
  style,
}: {
  style: {
    contrast?: string
    bgColor: string
    y?: string
    rotate?: string
  }
}) => {
  const { contrast = "50%", bgColor, y = "100%", rotate = "0deg" } = style
  return (
    <m.span
      variants={variants}
      style={{
        backgroundColor: `color-mix(in oklab,${bgColor} ${contrast},white`,
        y: y,
        rotate: rotate,
      }}
      transition={{ duration: 1, ease: "linear" }}
      className=" rounded-[28%] -z-10 absolute w-[120%]  h-[120%]"
    />
  )
}
export default Skill
