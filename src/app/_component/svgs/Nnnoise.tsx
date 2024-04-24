import { ComponentPropsWithoutRef } from "react";

export const Nnnoise = (props: ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      // xmlns:svgjs="http://svgjs.dev/svgjs"
      viewBox="0 0 700 700"
      width="700"
      height="700"
      opacity="1"
      {...props}
    >
      <defs>
        <filter
          id="nnnoise-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="linearRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.126"
            numOctaves="4"
            seed="15"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          ></feTurbulence>
          <feSpecularLighting
            surfaceScale="32"
            specularConstant="2.8"
            specularExponent="20"
            lighting-color="#7957A8"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="specularLighting"
          >
            <feDistantLight azimuth="3" elevation="1"></feDistantLight>
          </feSpecularLighting>
        </filter>
      </defs>
      <rect width="700" height="700" fill="transparent"></rect>
      <rect
        width="700"
        height="700"
        fill="#7957a8"
        filter="url(#nnnoise-filter)"
      ></rect>
    </svg>
  );
};
