"use client";

import { useViewportSize } from "@mantine/hooks";
import { motion as m, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

type FullPageSvgProps = {};

export const FullPageSvg = ({}: FullPageSvgProps) => {
  const { scrollYProgress } = useScroll();

  const viewport = useViewportSize();
  const storkWidth = viewport.width > 420 ? 16 : 10;
  const [config, setconfig] = useState<{
    container: {
      height: number;
      width: number;
    };
    defaultPenStart: {
      x: number;
      y: number;
    };
    scaleY: number;
    scaleX: number;
  }>();
  useEffect(() => {
    const pathHeight = 1366;
    const pathWidth = 768;
    const x = (window.innerWidth - storkWidth) / 2;
    const y = (window.innerHeight + storkWidth) / 2;
    const container = {
      height: document.body.scrollHeight,
      width: window.innerWidth,
    };
    const scaleY = (container.height - y) / pathHeight;
    const scaleX = window.innerWidth / pathWidth;
    const conf = {
      container,
      defaultPenStart: {
        x,
        y: y / scaleY,
      },
      scaleY,
      scaleX,
    };
    setconfig(conf);
  }, [storkWidth, viewport.height, viewport.width]);

  if (config == undefined) return null;
  return (
    <>
      <svg
        viewBox={`0 0 ${viewport.width} ${config?.container.height}`}
        enableBackground={`new 0 0 ${viewport.width} ${config.container.height}`}
        height={config.container.height}
        preserveAspectRatio={"xMinYMin meet"}
        xmlSpace="preserve"
        className=" absolute inset-0"
      >
        <m.path
          style={{
            pathLength: scrollYProgress,
            transform: `scale(${config.scaleX},${config.scaleY})`,
            transformOrigin: "top center",
            filter: "blur(8px)",
          }}
          strokeWidth={storkWidth}
          fill={"none"}
          stroke={"rgb(var(--secondary)"}
          strokeLinejoin={"round"}
          d={`M${config.defaultPenStart.x},${config.defaultPenStart.y}c14.2,2.4,46.3,9.7,70.3,35
          c9.2,9.7,19.4,20.4,17.9,33c-2.6,21.6-37.8,34.3-77,48c-62.8,21.9-79.9,15.2-120.5,36c-22.8,11.7-57.5,29.4-59.2,55
          c-2.2,33.2,52.1,59.9,62.5,65c87.1,42.8,146.5-5.4,216.5,32c46.6,24.9,82.7,79.7,68.1,114c-20.4,48.1-138,51.4-229.9,54
          c-142.6,4-215.7-21.1-237.7,11c-19.6,28.5,18.1,77.7,26.8,89c72.2,94.1,246.5,124.9,286.8,79c23.6-26.9,7.4-87-27.9-102
          c-58.9-25.1-204.1,61.8-207.6,148c-5.1,124.8,288.9,188.5,272.3,294c-10.8,69-141.1,70.8-179.7,166c-29.2,72,11.9,153.4,58,217`}
        />
        <m.path
          style={{
            pathLength: scrollYProgress,
            transform: `scale(${config.scaleX},${config.scaleY})`,
            transformOrigin: "top center",
            filter: "blur(1px)",
            // opacity: 0.95,
          }}
          strokeWidth={storkWidth}
          fill={"none"}
          stroke={"rgb(var(--secondary))"}
          strokeLinejoin={"round"}
          d={`M${config.defaultPenStart.x},${config.defaultPenStart.y}c14.2,2.4,46.3,9.7,70.3,35
          c9.2,9.7,19.4,20.4,17.9,33c-2.6,21.6-37.8,34.3-77,48c-62.8,21.9-79.9,15.2-120.5,36c-22.8,11.7-57.5,29.4-59.2,55
          c-2.2,33.2,52.1,59.9,62.5,65c87.1,42.8,146.5-5.4,216.5,32c46.6,24.9,82.7,79.7,68.1,114c-20.4,48.1-138,51.4-229.9,54
          c-142.6,4-215.7-21.1-237.7,11c-19.6,28.5,18.1,77.7,26.8,89c72.2,94.1,246.5,124.9,286.8,79c23.6-26.9,7.4-87-27.9-102
          c-58.9-25.1-204.1,61.8-207.6,148c-5.1,124.8,288.9,188.5,272.3,294c-10.8,69-141.1,70.8-179.7,166c-29.2,72,11.9,153.4,58,217`}
        />
      </svg>
    </>
  );
};
