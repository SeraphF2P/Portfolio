import type { NextPage } from "next"
import Link from "next/link"
import { LinkIcon } from "@heroicons/react/24/outline"

import { siteConfig } from "../../config/site"

const Page: NextPage = () => {
  return (
    <div className="  bg-primary/70 relative  flex h-96 w-full translate-y-1/3  justify-center pr-1 backdrop-blur-md ">
      <div className=" scrollbar-track-primary/40 scrollbar-w-1  scrollbar-thumb-rounded-full scrollbar-thumb-slate-50/80 scrollbar   relative flex flex-wrap  justify-center gap-4 overflow-y-scroll p-4   sm:px-40  ">
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
    <div className="font-outfit  border-primary flex w-full max-w-[320px] origin-center  flex-col  items-start truncate   border-4   p-4  shadow-2xl  transition-[transform_colors] hover:scale-105  hover:bg-slate-200/10 ">
      <h3 className=" font-semibold capitalize">{props.name}</h3>
      <p className=" my-4 ">{props.Issuing_organization}</p>
      <div className=" flex items-center gap-1">
        <p className="   ">{props.Credential_ID}</p>
        <Link href={props.Credential_URL}>
          <LinkIcon width={24} />
        </Link>
      </div>
    </div>
  )
}
export default Page
