"use client";

import { siteConfig } from "~/configs/site";
import { useScrollDir } from "~/hooks";
import { cn } from "~/lib/cva";
import { NextImage } from "~/ui/server";

type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  const dir = useScrollDir();
  return (
    <header
      className={cn(
        `fixed left-0 top-0  z-40 flex h-20 w-full items-center justify-center bg-gradient-to-b  from-white/30 to-transparent backdrop-blur-xl  transition-transform   duration-1000`,
        {
          "-translate-y-full": dir === 1,
          "translate-y-0": dir === 0 || dir === -1,
        }
      )}
    >
      <div className=" container flex  w-full items-center justify-between      ">
        <div className="flex">
          <NextImage
            priority
            sizes="64px 64px"
            className=" size-16     overflow-hidden  rounded-full"
            src={siteConfig.profileImage}
            alt="profile photo"
          />
          <div className=" p-2 xs:p-4">
            <h4>Jafer Ali</h4>
            <p>{siteConfig.description}</p>
          </div>
        </div>
        <div className="  flex  items-center gap-2 mn:top-0 mn:h-full ">
          <div
            className={cn(" size-2  rounded-full bg-rose-500", {
              "bg-emerald-500": siteConfig.available,
            })}
          />
          <p className=" text-sm">Available</p>
        </div>
      </div>
    </header>
  );
};
