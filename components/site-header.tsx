"use client"

import Link from "next/link"
import NextImage from "@/ui/NextImage"
import { buttonVariants } from "@/ui/button"
import { SocialIcon } from "react-social-icons"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"

import Icon from "./icons"

export function SiteHeader() {
  return (
    <>
      <header className=" fixed left-0 top-0  z-40  flex w-full  flex-col items-start  ">
        <div className=" container flex   w-full items-center bg-slate-900/10 px-4   backdrop-blur-3xl  ">
          <NextImage
            priority
            sizes="64px 64px"
            className=" h-16  w-16  overflow-hidden  rounded-full"
            src={siteConfig["my-photo"]}
            alt="profile photo"
          />
          <div className=" xs:p-4 p-2">
            <h4>Jafer Ali</h4>
            <p>{siteConfig.description}</p>
          </div>
          <div className=" mn:h-full mn:top-0 absolute right-4  top-4 flex items-center gap-2 ">
            <div
              className={cn(
                " h-2 w-2  rounded-full ",
                siteConfig.available ? "bg-emerald-400" : "bg-red-400"
              )}
            ></div>
            <p className=" text-sm">Available</p>
          </div>
        </div>
        <MainNav items={siteConfig.mainNav} />
        <div className="fixed bottom-0 left-0  z-20 flex w-full  py-4 sm:bottom-auto sm:left-auto sm:right-4 sm:top-32  sm:w-auto  ">
          <nav className="mn:gap-6   flex w-full  items-center justify-center gap-4 rounded-sm bg-slate-100/10 p-2 backdrop-blur-3xl sm:w-auto sm:flex-col ">
            {siteConfig.links &&
              siteConfig.links.map((slink) => {
                if (slink.name == "whatsup")
                  return (
                    <div
                      key={slink.link}
                      className=" group relative grid h-9 w-9 !rounded-full bg-white"
                    >
                      <Link
                        rel="noopener"
                        target="_blank"
                        href={slink.link}
                        className=" absolute  inset-0"
                      />
                      <Icon
                        name="whatsup"
                        className=" group-hover:fill-primary m-auto h-6 w-6 fill-black/90 transition-colors"
                      />
                    </div>
                  )
                return (
                  <SocialIcon
                    key={slink.link}
                    rel="noopener"
                    target="_blank"
                    className={buttonVariants({
                      variant: "ghost",
                    })}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                    url={slink.link}
                    bgColor="white"
                  />
                )
              })}
          </nav>
        </div>
      </header>
    </>
  )
}
