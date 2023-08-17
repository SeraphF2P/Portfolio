"use client"

import { FC } from "react"
import { HeartIcon } from "lucide-react"

import { Icon } from "@/components/icons"

import ToggleBtn from "./ToggleBtn"

interface LikeBtnProps {}

const LikeBtn: FC<LikeBtnProps> = ({}) => {
  return (
    <ToggleBtn
      variant="ghost"
      whenToggled=" bg-primary text-slate-900"
      className=" bg-background/10 absolute bottom-0  right-0 z-10 h-14 w-14
       scale-105 rounded-none  
       rounded-br-md bg-slate-100/10  text-red-400   transition-transform duration-300 [clip-path:polygon(100%_0,100%_100%,0_100%)] hover:scale-110 active:scale-95 "
    >
      {(isToggled) => (
        <>
          <Icon
            name="HeartIcon"
            className={`absolute bottom-1 right-1 h-6 w-6 ${
              isToggled && "fill-red-400 "
            }`}
          />
        </>
      )}
    </ToggleBtn>
  )
}

export default LikeBtn
