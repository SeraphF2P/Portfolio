/* eslint-disable jsx-a11y/alt-text */
import { FC } from "react"
import Image, { type ImageProps } from "next/image"

import { cn } from "../../lib/utils"

const NextImage: FC<ImageProps> = ({ className, ...props }) => {
  return (
    <div className={cn("relative", className)}>
      <Image fill {...props} />
    </div>
  )
}

export default NextImage
