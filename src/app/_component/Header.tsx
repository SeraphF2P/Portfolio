"use client";

import { siteConfig } from "~/configs/site";
import { useScrollDir } from "~/hooks";
import { cn } from "~/lib/cva";
import { MotionElement } from "../../lib/framer-motion";
import { Icon } from "../../ui/server";
import Link from "next/link";

type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  const dir = useScrollDir({ onHoldDelay: 99999999999999 });

  return (<>
    <header
      className={cn(
        `fixed left-0 top-0  z-40 flex h-20 w-full items-center justify-center bg-gradient-to-b  from-white/30 to-transparent backdrop-blur-xl  transition-transform   duration-1000`,
        {
          "-translate-y-full": dir === 1,
          "translate-y-0": dir === -1,
        }
      )}
    >
      <div className=" container flex items-center justify-between px-2      ">
        <div className="flex">
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
    <div className={cn(" fixed  bottom-4 left-1/2 z-40 mx-auto -translate-x-1/2  transition-transform ", {
         "translate-y-40":dir === 1,
         "translate-y-0":dir === -1
       })}>
            <div className=" relative  flex  items-center  justify-center gap-2 rounded-full   bg-black p-4    ">
              <MotionElement.GradieantBorder />
              {siteConfig.mainNav.map((hash) => {
                if (hash.icon in Icon == false) return;
                const SocialIcon = Icon[hash.icon];
                return (
                  <Link
                    key={hash.icon}
                     href={hash.path}
                    className="cursor-pointer  group bubble-shadow flex size-10 items-center justify-center rounded-full bg-neutral"
                  >
                   
                      <SocialIcon className=" size-6 fill-neutral-revert/40 group-hover:fill-sky-500" />
                  </Link>
                );
              })}
            </div>
          </div>
  </>
  );
};
