import type { NextPage } from "next"
import Link from "next/link"
import { LinkIcon } from "@heroicons/react/24/outline"

import { siteConfig } from "../../config/site"

const Page: NextPage = () => {
  return (
    <div className="  bg-primary/70 pr-1  w-full backdrop-blur-md flex justify-center  relative h-96 translate-y-1/3 ">
      <div className=" justify-center flex  scrollbar-track-primary/40 scrollbar-w-1 scrollbar-thumb-rounded-full   scrollbar-thumb-slate-50/80 scrollbar gap-4 p-4  flex sm:px-40 flex-wrap overflow-y-scroll   relative  ">
        {siteConfig.certificates.map((exp) => (
          <Section {...exp} />
        ))}
      </div>
    </div>
  )
}
const Section = (props: {
  id: number
  name: string
  Issuing_organization: string
  Credential_URL: string
  Credential_ID: string
}) => {
  return (
    <div className="truncate  font-outfit border-primary flex max-w-[320px] w-full  origin-center  flex-col items-start   border-4   p-4  shadow-2xl  transition-[transform_colors] hover:scale-105  hover:bg-slate-200/10 ">
      <h3 className=" font-semibold capitalize">{props.name}</h3>
      <p className=" my-4 ">{props.Issuing_organization}</p>
      <div className=" flex gap-1 items-center">
        <p className="   ">{props.Credential_ID}</p>
        <Link href={props.Credential_URL}>
          <LinkIcon width={24} />
        </Link>
      </div>
    </div>
  )
}
export default Page
