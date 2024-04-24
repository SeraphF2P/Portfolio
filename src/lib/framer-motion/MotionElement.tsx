"use client";

import { cn } from "../cva";
import {
  AnimatePresence,
  MotionProps,
  Variants,
  motion as m,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ComponentPropsWithoutRef, useState } from "react";

export const PopUp = ({
  className,
  ...props
}: MotionProps & ComponentPropsWithoutRef<"div">) => {
  const expendVariant: Variants = {
    initial: {
      scaleX: 0.05, scaleY: 0.05,
    },
    animate: {
      scaleX: [0.05, 1, 1], scaleY: [0.05, 0.05, 1],
      transition: { duration: 1, when: "beforeChildren",type:"keyframes" }
    },
    
  };
  const showVariant: Variants = {
    initial:{opacity:0},
    animate: { opacity:  1 }
  }
  return (
    <m.div
      variants={expendVariant}
      initial="initial"
      whileInView={"animate"}
      className={cn(
        " overflow-hidden bg-sky-500/60 p-4 ring-2  ring-sky-600  backdrop-blur",
        className
      )}
      {...props}
    >
      <m.div variants={showVariant}  >
        {props.children}
      </m.div>
    </m.div>
  );
};
export const SlideInOnScroll = (
  props: MotionProps & ComponentPropsWithoutRef<"div">
) => {
  const { scrollY } = useScroll();
  const [isShowen, setisShowen] = useState(true);
  useMotionValueEvent(scrollY, "change", (val) => {
    setisShowen(val < 40);
  });
  return (
    <AnimatePresence mode="popLayout">
      {isShowen && (
        <m.div
          initial={{
            opacity: 0,
            y: 120,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 120,
          }}
          {...props}
        >
          {props.children}
        </m.div>
      )}
    </AnimatePresence>
  );
};
export const GradieantBorder = () => {
  return (
    <div className=" absolute -inset-1 -z-10 flex items-center justify-center    overflow-hidden        rounded-full  ">
      <m.div
        animate={{ rotate: [0, 360] }}
        transition={{
          repeatType: "loop",
          repeat: Infinity,
          ease: "linear",
          duration: 4,
        }}
        className="   aspect-[9/16] w-1/2     bg-gradient-to-tr     from-primary to-secondary blur-sm  "
      ></m.div>
      <div className="   absolute inset-0   bg-primary/60 blur-sm  "></div>
    </div>
  );
};
