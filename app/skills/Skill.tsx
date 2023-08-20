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
const intmationLevel = {
  begginer: "lime",
  intemate: "orangered",
  expert: "#728",
}

const Skill: FC<SkillProps> = ({ id, level, name }) => {
  const size = Math.max((level / 100) * maxSize, 80)
  const randomizerY = Math.floor(Math.random() * 100)
  const randomizerX = Math.floor(Math.random() * 100)
  const professional =
    level <= 30 ? "begginer" : level <= 60 ? "intemate" : "expert"
  return (
    <m.div
      key={id}
      whileHover="animate"
      whileTap="animate"
      drag
      style={{
        width: size,
        height: size,
        position: "absolute",
        borderColor: intmationLevel[professional],
      }}
      initial={{ top: "100%", left: `calc(calc(100% - ${size}px) / 2)` }}
      animate={{
        top: `max(calc(${randomizerY}% - ${size}px), 0px)`,
        left: `max(calc(${randomizerX}% - ${size}px), 0px)`,
      }}
      transition={{
        duration: 1,
        ease: "linear",
      }}
      className="  text-sm font-semibold  overflow-hidden  hover:border-8 transition-[border-width] duration-1000    border-2 text-center shadow  cursor-none rounded-full  flex justify-center items-center  capitalize backdrop-blur"
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
          rotate: "45deg",
        }}
      />
      <m.span
        variants={{ animate: { opacity: 1 } }}
        transition={{ delay: 0.4 }}
        className=" opacity-0 absolute"
      >
        {level}%
      </m.span>
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
        backgroundColor: `color-mix(in oklab,${bgColor} ${contrast},rgb(235,235,235)`,
        y: y,
        rotate: rotate,
      }}
      transition={{ duration: 1, ease: "linear" }}
      className=" rounded-[28%]  absolute w-[200%]  h-[200%]"
    />
  )
}
export default Skill
