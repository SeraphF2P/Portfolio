"use client"

import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { useInView } from "framer-motion"
import { siteConfig } from "../config/site"

type AnimationContextType = {
  sectionData: string
  setSectionData: React.Dispatch<React.SetStateAction<string>>
}

const Context = createContext<AnimationContextType>({
  sectionData: "",
  setSectionData: () => {},
})

export function useSectionData() {
  return useContext(Context)
}

const AnimationContext: FC<PropsWithChildren> = ({ children }) => {
  const [sectionData, setSectionData] = useState(siteConfig.mainNav[0].title)

  return (
    <Context.Provider value={{ sectionData, setSectionData }}>
      {children}
    </Context.Provider>
  )
}

export default AnimationContext
