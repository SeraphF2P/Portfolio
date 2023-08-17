"use client"

import type { NextComponentType, NextPageContext } from "next"
import { ColorRing } from "react-loader-spinner"

interface Props {}

const Loading: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="z-50 fixed inset-0 h-screen w-full"
      colors={["#1f1a83", "#4338ca", "#7a72e7", "#6c69a2", "#ca3838"]}
    />
  )
}

export default Loading
